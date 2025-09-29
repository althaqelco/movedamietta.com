#!/usr/bin/env bash
set -euo pipefail

# Video GPS tagger for Damietta Moving Company
# Adds QuickTime GPS metadata to MP4 files with location jitter

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"
viddir="$root/public/videos"

# Check required tools
command -v exiftool >/dev/null || { 
    echo "❌ Missing exiftool" >&2
    echo "Install with: brew install exiftool" >&2
    exit 1
}

echo "🎬 GPS Tagging Videos for Damietta Moving Company"
echo "📁 Source directory: $viddir"
echo

# GPS anchors for cities
D_LAT=31.417540; D_LON=31.814444      # Damietta دمياط
ND_LAT=31.4364503; ND_LON=31.678142   # New Damietta دمياط الجديدة
RB_LAT=31.5095000; RB_LON=31.7854000  # Ras El Bar رأس البر

geo_write() {
    local f="$1" cityName cityNameAr lat lon
    cityName="$2"
    cityNameAr="$3"
    lat="$4"
    lon="$5"
    
    # Apply random jitter (±0.0009° ≈ 100m radius)
    local jlat jlon
    jlat="$(awk -v a="$lat" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0018)}')"
    jlon="$(awk -v a="$lon" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0018)}')"
    
    # Write QuickTime GPS metadata and location info
    exiftool -overwrite_original -P -n \
        -QuickTime:GPSCoordinates="${jlat},${jlon},5" \
        -Keys:LocationName="$cityName, Damietta, Egypt" \
        -Keys:CreationDate="$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
        -UserData:LocationName="$cityName" \
        -UserData:GPSCoordinates="$jlat,$jlon" \
        -XMP-photoshop:City="$cityName" \
        -XMP-photoshop:State="Damietta Governorate" \
        -XMP-photoshop:Country="Egypt" \
        -XMP-iptcCore:CountryCode="EG" \
        -XMP-dc:Subject+="نقل عفش,$cityNameAr,Furniture Moving,$cityName" \
        "$f" 2>/dev/null
    
    echo "📍 Tagged: $(basename "$f") → $cityName ($cityNameAr) @ $jlat,$jlon"
}

# Process all MP4 files
shopt -s nullglob
count=0

for f in "$viddir"/*.mp4; do
    if [[ -f "$f" ]]; then
        base="$(basename "$f")"
        
        # Determine city from filename
        if [[ "$base" == *"new-damietta"* ]]; then
            geo_write "$f" "New Damietta" "دمياط الجديدة" "$ND_LAT" "$ND_LON"
        elif [[ "$base" == *"ras-el-bar"* ]]; then
            geo_write "$f" "Ras El Bar" "رأس البر" "$RB_LAT" "$RB_LON"
        else
            # Default to Damietta for all damietta-* and unknown files
            geo_write "$f" "Damietta" "دمياط" "$D_LAT" "$D_LON"
        fi
        ((count++))
    fi
done

echo
if [[ $count -eq 0 ]]; then
    echo "⚠️  No MP4 files found in $viddir"
else
    echo "✅ Successfully tagged $count video(s) with GPS metadata"
fi
echo "🎯 Use 'npm run exif:verify' to check results"

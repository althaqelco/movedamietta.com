#!/usr/bin/env bash
set -euo pipefail

# Image GPS/EXIF tagger for Damietta Moving Company
# Adds XMP/IPTC + GPS metadata to WEBP files with location jitter

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"
imgdir="$root/public/images"

# Check required tools
req=(exiftool awk)
for bin in "${req[@]}"; do 
    command -v "$bin" >/dev/null || { 
        echo "❌ Missing required tool: $bin" >&2
        echo "Install with: brew install exiftool" >&2
        exit 1
    }
done

echo "🌍 GPS Tagging Images for Damietta Moving Company"
echo "📁 Source directory: $imgdir"
echo

# GPS anchors for cities
D_LAT=31.417540; D_LON=31.814444      # Damietta دمياط
ND_LAT=31.4364503; ND_LON=31.678142   # New Damietta دمياط الجديدة
RB_LAT=31.5095000; RB_LON=31.7854000  # Ras El Bar رأس البر

process_file() {
    local f="$1" base cityAr cityEn stateName lat lon
    base="$(basename "$f")"
    
    # Determine city from filename
    if [[ "$base" == *"new-damietta"* ]]; then
        cityAr="دمياط الجديدة"
        cityEn="New Damietta"
        stateName="New Damietta District"
        lat="$ND_LAT"
        lon="$ND_LON"
    elif [[ "$base" == *"ras-el-bar"* ]]; then
        cityAr="رأس البر"
        cityEn="Ras El Bar"
        stateName="Ras El Bar Coastal Area"
        lat="$RB_LAT"
        lon="$RB_LON"
    else
        # Default to Damietta for all damietta-* and unknown files
        cityAr="دمياط"
        cityEn="Damietta"
        stateName="Damietta Old City"
        lat="$D_LAT"
        lon="$D_LON"
    fi
    
    # Apply random jitter (±0.0009° ≈ 100m radius)
    local jlat jlon
    jlat="$(awk -v a="$lat" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0018)}')"
    jlon="$(awk -v a="$lon" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0018)}')"
    
    # Write comprehensive XMP + IPTC + GPS metadata for WEBP
    exiftool -overwrite_original -P -n \
        -XMP-photoshop:City="$cityEn" \
        -XMP-photoshop:State="Damietta Governorate" \
        -XMP-photoshop:Country="Egypt" \
        -XMP-iptcCore:CountryName="Egypt" \
        -XMP-iptcCore:CountryCode="EG" \
        -XMP-iptcCore:ProvinceState="Damietta" \
        -XMP-iptcCore:City="$cityEn" \
        -XMP-iptcCore:Location="$stateName" \
        -IPTC:City="$cityAr" \
        -IPTC:Province-State="محافظة دمياط" \
        -IPTC:Country-PrimaryLocationName="مصر" \
        -IPTC:Country-PrimaryLocationCode="EG" \
        -XMP:LocationShownCityName="$cityEn" \
        -XMP:LocationShownProvinceState="Damietta" \
        -XMP:LocationShownCountryName="Egypt" \
        -XMP:LocationShownCountryCode="EG" \
        -XMP-dc:Subject+="نقل عفش" \
        -XMP-dc:Subject+="$cityAr" \
        -XMP-dc:Subject+="Furniture Moving" \
        -XMP-dc:Subject+="$cityEn" \
        -XMP-dc:Subject+="Moving Company" \
        -XMP-dc:Subject+="Egypt" \
        -XMP:GPSLatitude="$jlat" \
        -XMP:GPSLongitude="$jlon" \
        -XMP:GPSLatitudeRef="N" \
        -XMP:GPSLongitudeRef="E" \
        -EXIF:GPSLatitude="$jlat" \
        -EXIF:GPSLongitude="$jlon" \
        -EXIF:GPSLatitudeRef="N" \
        -EXIF:GPSLongitudeRef="E" \
        "$f" 2>/dev/null
    
    echo "📍 Tagged: $(basename "$f") → $cityEn ($cityAr) @ $jlat,$jlon"
}

# Process all WEBP files
export -f process_file
shopt -s nullglob

count=0
for f in "$imgdir"/*.webp; do
    if [[ -f "$f" ]]; then
        process_file "$f"
        ((count++))
    fi
done

echo
if [[ $count -eq 0 ]]; then
    echo "⚠️  No WEBP files found in $imgdir"
else
    echo "✅ Successfully tagged $count image(s) with GPS metadata"
fi
echo "🎯 Use 'npm run exif:verify' to check results"

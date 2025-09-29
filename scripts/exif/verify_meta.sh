#!/usr/bin/env bash
set -euo pipefail

# Metadata verification script for Damietta Moving Company assets
# Displays GPS and location metadata from images and videos

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"

# Check required tools
command -v exiftool >/dev/null || { 
    echo "❌ Missing exiftool" >&2
    echo "Install with: brew install exiftool" >&2
    exit 1
}

echo "🔍 Verifying GPS & Location Metadata"
echo "📂 Project root: $root"
echo

# Count files
img_count=$(find "$root/public/images" -name "*.webp" 2>/dev/null | wc -l | tr -d ' ')
vid_count=$(find "$root/public/videos" -name "*.mp4" 2>/dev/null | wc -l | tr -d ' ')

echo "📊 Asset Summary:"
echo "   📸 Images (WEBP): $img_count files"
echo "   🎬 Videos (MP4):  $vid_count files"
echo

# Verify images
if [[ $img_count -gt 0 ]]; then
    echo "========================="
    echo "🖼️  IMAGE METADATA SAMPLE"
    echo "========================="
    
    # Show detailed metadata for first few images
    count=0
    for f in "$root/public/images"/*.webp; do
        if [[ -f "$f" && $count -lt 3 ]]; then
            echo "📄 File: $(basename "$f")"
            exiftool -G1 -s -n \
                -XMP:GPSLatitude -XMP:GPSLongitude \
                -XMP-photoshop:City -XMP-photoshop:Country \
                -XMP-iptcCore:City -IPTC:City \
                -XMP:LocationShownCityName \
                -XMP-dc:Subject \
                "$f" 2>/dev/null | head -20
            echo "---"
            ((count++))
        fi
    done
    
    # Summary of all images GPS
    echo
    echo "📍 GPS Coordinates Summary (All Images):"
    exiftool -T -filename -XMP:GPSLatitude -XMP:GPSLongitude -XMP-photoshop:City \
        "$root/public/images"/*.webp 2>/dev/null | \
        awk -F'\t' 'NR==1{print "FILE\t\t\t\tLAT\tLON\tCITY"} NR>1{printf "%-35s\t%.6f\t%.6f\t%s\n", $1, $2, $3, $4}' | \
        head -20
else
    echo "⚠️  No WEBP images found in public/images/"
fi

echo
echo

# Verify videos  
if [[ $vid_count -gt 0 ]]; then
    echo "========================="
    echo "🎥 VIDEO METADATA SAMPLE"
    echo "========================="
    
    # Show detailed metadata for first few videos
    count=0
    for f in "$root/public/videos"/*.mp4; do
        if [[ -f "$f" && $count -lt 3 ]]; then
            echo "📄 File: $(basename "$f")"
            exiftool -G1 -s -n \
                -QuickTime:GPSCoordinates \
                -Keys:LocationName \
                -UserData:LocationName \
                -XMP-photoshop:City -XMP-photoshop:Country \
                -XMP-dc:Subject \
                "$f" 2>/dev/null | head -15
            echo "---"
            ((count++))
        fi
    done
    
    # Summary of all videos GPS
    echo
    echo "📍 GPS Coordinates Summary (All Videos):"
    exiftool -T -filename -QuickTime:GPSCoordinates -Keys:LocationName \
        "$root/public/videos"/*.mp4 2>/dev/null | \
        awk -F'\t' 'NR==1{print "FILE\t\t\t\tGPS_COORDINATES\t\tLOCATION"} NR>1{printf "%-35s\t%-20s\t%s\n", $1, $2, $3}' | \
        head -20
else
    echo "⚠️  No MP4 videos found in public/videos/"
fi

echo
echo "========================="
echo "🎯 VERIFICATION COMPLETE"
echo "========================="

# Check for files missing GPS
echo "🔍 Checking for files without GPS data..."

missing_gps=0
if [[ $img_count -gt 0 ]]; then
    while IFS= read -r -d '' f; do
        if ! exiftool -s -s -s -XMP:GPSLatitude "$f" 2>/dev/null | grep -q '[0-9]'; then
            echo "❌ Missing GPS: $(basename "$f")"
            ((missing_gps++))
        fi
    done < <(find "$root/public/images" -name "*.webp" -print0 2>/dev/null)
fi

if [[ $vid_count -gt 0 ]]; then
    while IFS= read -r -d '' f; do
        if ! exiftool -s -s -s -QuickTime:GPSCoordinates "$f" 2>/dev/null | grep -q '[0-9]'; then
            echo "❌ Missing GPS: $(basename "$f")"
            ((missing_gps++))
        fi
    done < <(find "$root/public/videos" -name "*.mp4" -print0 2>/dev/null)
fi

if [[ $missing_gps -eq 0 ]]; then
    echo "✅ All files have GPS metadata!"
else
    echo "⚠️  Found $missing_gps file(s) without GPS data"
fi

echo
echo "💡 Tips:"
echo "   • Run 'npm run exif:images' to tag images"
echo "   • Run 'npm run exif:videos' to tag videos"
echo "   • GPS coordinates have ±100m jitter for natural variation"

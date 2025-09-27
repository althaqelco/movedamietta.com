#!/bin/bash

# Script to add metadata to videos for SEO and geolocation  
# Requires exiftool and ffmpeg to be installed

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎬 New Damietta Moving Company - Video Metadata Processor${NC}"
echo -e "${BLUE}=====================================================${NC}"

# Check if required tools are installed
if ! command -v exiftool &> /dev/null; then
    echo -e "${RED}❌ Error: exiftool is not installed.${NC}"
    echo -e "${YELLOW}Please install it first:${NC}"
    echo -e "${YELLOW}  macOS: brew install exiftool${NC}"
    echo -e "${YELLOW}  Ubuntu: sudo apt install exiftool${NC}"
    exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
    echo -e "${RED}❌ Error: ffmpeg is not installed.${NC}"
    echo -e "${YELLOW}Please install it first:${NC}"
    echo -e "${YELLOW}  macOS: brew install ffmpeg${NC}"
    echo -e "${YELLOW}  Ubuntu: sudo apt install ffmpeg${NC}"
    exit 1
fi

# Check if public/videos directory exists
if [ ! -d "public/videos" ]; then
    echo -e "${RED}❌ Error: public/videos directory not found.${NC}"
    echo -e "${YELLOW}Please run this script from the project root directory.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Starting video metadata processing...${NC}"
echo ""

# Function to add random GPS jitter for natural variation
add_gps_jitter() {
    local base_lat=$1
    local base_lng=$2
    
    # Add small random variation (±0.001 degrees ≈ ±100 meters)
    local lat_jitter=$(echo "scale=6; $base_lat + (($RANDOM % 2000 - 1000) / 1000000)" | bc -l)
    local lng_jitter=$(echo "scale=6; $base_lng + (($RANDOM % 2000 - 1000) / 1000000)" | bc -l)
    
    echo "$lat_jitter,$lng_jitter,0"
}

# Counter for processed files
processed_count=0

echo -e "${BLUE}📍 Processing Damietta videos...${NC}"

# Process Damietta videos (not new-damietta)
for file in public/videos/damietta-*.mp4; do
    if [[ -f "$file" && ! "$file" =~ "new-damietta" ]]; then
        echo -e "  🎥 Processing: ${YELLOW}$file${NC}"
        
        # Add GPS coordinates with small jitter for Damietta
        coords=$(add_gps_jitter 31.417540 31.814444)
        
        # Extract filename without path and extension for title generation
        filename=$(basename "$file" .mp4)
        
        # Generate Arabic title based on filename
        title="فيديو نقل عفش في دمياط"
        if [[ "$filename" =~ "furniture-assembly" ]]; then
            title="فيديو فك وتركيب أثاث في دمياط"
        elif [[ "$filename" =~ "packing" ]]; then
            title="فيديو تغليف عفش في دمياط"  
        elif [[ "$filename" =~ "commercial" ]]; then
            title="فيديو نقل مكاتب في دمياط"
        fi
        
        exiftool -overwrite_original \
            -QuickTime:GPSCoordinates="$coords" \
            -QuickTime:Title="$title" \
            -QuickTime:Description="خدمة نقل عفش احترافية في مدينة دمياط" \
            -QuickTime:Keywords="نقل عفش,دمياط,شركة نقل,أثاث,فيديو" \
            -QuickTime:Creator="شركة نقل عفش دمياط" \
            -QuickTime:Copyright="© $(date +%Y) شركة نقل عفش دمياط" \
            -QuickTime:LocationName="دمياط, مصر" \
            "$file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "    ${GREEN}✅ Success${NC} (GPS: $coords)"
            ((processed_count++))
        else
            echo -e "    ${RED}❌ Failed${NC}"
        fi
    fi
done

echo ""
echo -e "${BLUE}🌟 Processing New Damietta videos...${NC}"

# Process New Damietta videos  
for file in public/videos/*new-damietta*.mp4; do
    if [[ -f "$file" ]]; then
        echo -e "  🎥 Processing: ${YELLOW}$file${NC}"
        
        # Add GPS coordinates with small jitter for New Damietta
        coords=$(add_gps_jitter 31.4364503 31.678142)
        
        # Extract filename without path and extension for title generation
        filename=$(basename "$file" .mp4)
        
        # Generate Arabic title based on filename
        title="فيديو نقل عفش في دمياط الجديدة"
        if [[ "$filename" =~ "furniture-assembly" ]]; then
            title="فيديو فك وتركيب أثاث في دمياط الجديدة"
        elif [[ "$filename" =~ "packing" ]]; then
            title="فيديو تغليف عفش في دمياط الجديدة"
        elif [[ "$filename" =~ "commercial" ]]; then
            title="فيديو نقل مكاتب في دمياط الجديدة"
        fi
        
        exiftool -overwrite_original \
            -QuickTime:GPSCoordinates="$coords" \
            -QuickTime:Title="$title" \
            -QuickTime:Description="خدمة نقل عفش احترافية في مدينة دمياط الجديدة" \
            -QuickTime:Keywords="نقل عفش,دمياط الجديدة,شركة نقل,أثاث,فيديو" \
            -QuickTime:Creator="شركة نقل عفش دمياط" \
            -QuickTime:Copyright="© $(date +%Y) شركة نقل عفش دمياط" \
            -QuickTime:LocationName="دمياط الجديدة, مصر" \
            "$file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "    ${GREEN}✅ Success${NC} (GPS: $coords)"
            ((processed_count++))
        else
            echo -e "    ${RED}❌ Failed${NC}"
        fi
    fi
done

echo ""
echo -e "${BLUE}🎬 Processing other videos...${NC}"

# Process other videos
for file in public/videos/*.mp4; do
    if [[ -f "$file" && ! "$file" =~ "damietta-" && ! "$file" =~ "new-damietta" ]]; then
        echo -e "  🎥 Processing: ${YELLOW}$file${NC}"
        
        # Default to Damietta coordinates for other videos
        coords=$(add_gps_jitter 31.417540 31.814444)
        city_ar="دمياط"
        location_name="دمياط, مصر"
        
        # Check if it should be New Damietta based on filename patterns
        if [[ "$file" =~ "new-" ]]; then
            coords=$(add_gps_jitter 31.4364503 31.678142)
            city_ar="دمياط الجديدة"
            location_name="دمياط الجديدة, مصر"
        fi
        
        # Extract filename without path and extension for title generation
        filename=$(basename "$file" .mp4)
        
        # Generate Arabic title based on filename
        title="فيديو نقل عفش في $city_ar"
        if [[ "$filename" =~ "furniture-assembly" ]]; then
            title="فيديو فك وتركيب أثاث في $city_ar"
        elif [[ "$filename" =~ "packing" ]]; then
            title="فيديو تغليف عفش في $city_ar"
        elif [[ "$filename" =~ "commercial" ]]; then
            title="فيديو نقل مكاتب في $city_ar"
        fi
        
        exiftool -overwrite_original \
            -QuickTime:GPSCoordinates="$coords" \
            -QuickTime:Title="$title" \
            -QuickTime:Description="خدمة نقل عفش احترافية في $city_ar" \
            -QuickTime:Keywords="نقل عفش,$city_ar,شركة نقل,أثاث,فيديو" \
            -QuickTime:Creator="شركة نقل عفش دمياط" \
            -QuickTime:Copyright="© $(date +%Y) شركة نقل عفش دمياط" \
            -QuickTime:LocationName="$location_name" \
            "$file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "    ${GREEN}✅ Success${NC} (GPS: $coords)"
            ((processed_count++))
        else
            echo -e "    ${RED}❌ Failed${NC}"
        fi
    fi
done

echo ""
echo -e "${BLUE}🔄 Optional: Re-encoding videos with metadata preservation...${NC}"
echo -e "${YELLOW}⚠️  This step is optional and may take several minutes per video.${NC}"
echo -n -e "${YELLOW}Do you want to re-encode videos to ensure metadata is properly embedded? (y/N): ${NC}"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🔄 Starting video re-encoding...${NC}"
    
    for file in public/videos/*.mp4; do
        if [[ -f "$file" ]]; then
            echo -e "  🔄 Re-encoding: ${YELLOW}$file${NC}"
            
            # Create temporary file
            temp_file="${file%.*}_temp.mp4"
            
            # Re-encode with metadata preservation
            ffmpeg -i "$file" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \
                   -map_metadata 0 -movflags use_metadata_tags "$temp_file" -v quiet -y
            
            if [ $? -eq 0 ]; then
                mv "$temp_file" "$file"
                echo -e "    ${GREEN}✅ Re-encoded successfully${NC}"
            else
                rm -f "$temp_file"
                echo -e "    ${RED}❌ Re-encoding failed${NC}"
            fi
        fi
    done
else
    echo -e "${BLUE}⏭️  Skipping video re-encoding.${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Video metadata processing completed!${NC}"
echo -e "${BLUE}📊 Statistics:${NC}"
echo -e "  • Total videos processed: ${GREEN}$processed_count${NC}"
echo -e "  • GPS coordinates added with natural jitter"
echo -e "  • Arabic titles and descriptions added"
echo -e "  • Creator and copyright information embedded"
echo ""
echo -e "${YELLOW}💡 Tips:${NC}"
echo -e "  • Videos now contain location metadata for better local SEO"
echo -e "  • Metadata includes Arabic content for better regional search visibility"
echo -e "  • Re-encoding (optional) ensures metadata compatibility across platforms"
echo ""

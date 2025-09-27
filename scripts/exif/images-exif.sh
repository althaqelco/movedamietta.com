#!/bin/bash

# Script to add EXIF data to images for SEO and geolocation
# Requires exiftool to be installed: brew install exiftool (macOS) or apt install exiftool (Ubuntu)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🏠 New Damietta Moving Company - Image EXIF Processor${NC}"
echo -e "${BLUE}================================================${NC}"

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo -e "${RED}❌ Error: exiftool is not installed.${NC}"
    echo -e "${YELLOW}Please install it first:${NC}"
    echo -e "${YELLOW}  macOS: brew install exiftool${NC}"
    echo -e "${YELLOW}  Ubuntu: sudo apt install exiftool${NC}"
    exit 1
fi

# Check if public/images directory exists
if [ ! -d "public/images" ]; then
    echo -e "${RED}❌ Error: public/images directory not found.${NC}"
    echo -e "${YELLOW}Please run this script from the project root directory.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Starting EXIF data processing...${NC}"
echo ""

# Function to add random GPS jitter for natural variation
add_gps_jitter() {
    local base_lat=$1
    local base_lng=$2
    
    # Add small random variation (±0.001 degrees ≈ ±100 meters)
    local lat_jitter=$(echo "scale=6; $base_lat + (($RANDOM % 2000 - 1000) / 1000000)" | bc -l)
    local lng_jitter=$(echo "scale=6; $base_lng + (($RANDOM % 2000 - 1000) / 1000000)" | bc -l)
    
    echo "$lat_jitter,$lng_jitter"
}

# Counter for processed files
processed_count=0

echo -e "${BLUE}📍 Processing Damietta images...${NC}"

# Process Damietta images (not new-damietta)
for file in public/images/damietta-*.webp; do
    if [[ -f "$file" && ! "$file" =~ "new-damietta" ]]; then
        echo -e "  📸 Processing: ${YELLOW}$file${NC}"
        
        # Add GPS coordinates with small jitter for Damietta
        coords=$(add_gps_jitter 31.417540 31.814444)
        lat=$(echo $coords | cut -d',' -f1)
        lng=$(echo $coords | cut -d',' -f2)
        
        exiftool -overwrite_original -P \
            -XMP-dc:Subject="نقل عفش, دمياط" \
            -XMP-photoshop:City="Damietta" \
            -XMP-iptcCore:CountryName="Egypt" \
            -XMP:LocationShownCityName="Damietta" \
            -XMP:GPSLatitude="$lat" \
            -XMP:GPSLongitude="$lng" \
            -XMP-dc:Creator="شركة نقل عفش دمياط" \
            -XMP-dc:Rights="© $(date +%Y) شركة نقل عفش دمياط" \
            -XMP-photoshop:Credit="New Damietta Moving Company" \
            -XMP-iptcCore:Keywords="نقل عفش,دمياط,شركة نقل,أثاث" \
            -EXIF:ImageDescription="نقل عفش في دمياط" \
            "$file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "    ${GREEN}✅ Success${NC} (GPS: $lat, $lng)"
            ((processed_count++))
        else
            echo -e "    ${RED}❌ Failed${NC}"
        fi
    fi
done

echo ""
echo -e "${BLUE}🌟 Processing New Damietta images...${NC}"

# Process New Damietta images
for file in public/images/*new-damietta*.webp; do
    if [[ -f "$file" ]]; then
        echo -e "  📸 Processing: ${YELLOW}$file${NC}"
        
        # Add GPS coordinates with small jitter for New Damietta  
        coords=$(add_gps_jitter 31.4364503 31.678142)
        lat=$(echo $coords | cut -d',' -f1)
        lng=$(echo $coords | cut -d',' -f2)
        
        exiftool -overwrite_original -P \
            -XMP-dc:Subject="نقل عفش, دمياط الجديدة" \
            -XMP-photoshop:City="New Damietta" \
            -XMP-iptcCore:CountryName="Egypt" \
            -XMP:LocationShownCityName="New Damietta" \
            -XMP:GPSLatitude="$lat" \
            -XMP:GPSLongitude="$lng" \
            -XMP-dc:Creator="شركة نقل عفش دمياط" \
            -XMP-dc:Rights="© $(date +%Y) شركة نقل عفش دمياط" \
            -XMP-photoshop:Credit="New Damietta Moving Company" \
            -XMP-iptcCore:Keywords="نقل عفش,دمياط الجديدة,شركة نقل,أثاث" \
            -EXIF:ImageDescription="نقل عفش في دمياط الجديدة" \
            "$file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "    ${GREEN}✅ Success${NC} (GPS: $lat, $lng)"
            ((processed_count++))
        else
            echo -e "    ${RED}❌ Failed${NC}"
        fi
    fi
done

echo ""
echo -e "${BLUE}🖼️  Processing other images...${NC}"

# Process other images (furniture-*, ras-el-bar-*, etc.)
for file in public/images/*.webp; do
    if [[ -f "$file" && ! "$file" =~ "damietta-" && ! "$file" =~ "new-damietta" ]]; then
        echo -e "  📸 Processing: ${YELLOW}$file${NC}"
        
        # Default to Damietta coordinates for other images
        coords=$(add_gps_jitter 31.417540 31.814444)
        lat=$(echo $coords | cut -d',' -f1)
        lng=$(echo $coords | cut -d',' -f2)
        
        # Determine city based on filename patterns
        city_ar="دمياط"
        city_en="Damietta"
        if [[ "$file" =~ "new-" ]]; then
            city_ar="دمياط الجديدة"
            city_en="New Damietta"
            coords=$(add_gps_jitter 31.4364503 31.678142)
            lat=$(echo $coords | cut -d',' -f1)
            lng=$(echo $coords | cut -d',' -f2)
        fi
        
        exiftool -overwrite_original -P \
            -XMP-dc:Subject="نقل عفش, $city_ar" \
            -XMP-photoshop:City="$city_en" \
            -XMP-iptcCore:CountryName="Egypt" \
            -XMP:LocationShownCityName="$city_en" \
            -XMP:GPSLatitude="$lat" \
            -XMP:GPSLongitude="$lng" \
            -XMP-dc:Creator="شركة نقل عفش دمياط" \
            -XMP-dc:Rights="© $(date +%Y) شركة نقل عفش دمياط" \
            -XMP-photoshop:Credit="New Damietta Moving Company" \
            -XMP-iptcCore:Keywords="نقل عفش,$city_ar,شركة نقل,أثاث" \
            -EXIF:ImageDescription="نقل عفش في $city_ar" \
            "$file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "    ${GREEN}✅ Success${NC} (GPS: $lat, $lng)"
            ((processed_count++))
        else
            echo -e "    ${RED}❌ Failed${NC}"
        fi
    fi
done

echo ""
echo -e "${GREEN}🎉 Image EXIF processing completed!${NC}"
echo -e "${BLUE}📊 Statistics:${NC}"
echo -e "  • Total images processed: ${GREEN}$processed_count${NC}"
echo -e "  • Location data added: GPS coordinates with natural jitter"
echo -e "  • Metadata added: Arabic subjects, creator info, keywords"
echo ""
echo -e "${YELLOW}💡 Tips:${NC}"
echo -e "  • Images now contain location metadata for better local SEO"
echo -e "  • GPS coordinates have small random variations for natural appearance"
echo -e "  • All metadata is in both Arabic and English for better search coverage"
echo ""

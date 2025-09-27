#!/bin/bash

# Master script to run all EXIF processing
# This script will process both images and videos

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${PURPLE}🚀 New Damietta Moving Company - Complete EXIF Processor${NC}"
echo -e "${PURPLE}=========================================================${NC}"
echo ""
echo -e "${BLUE}This script will add geolocation and SEO metadata to all images and videos.${NC}"
echo -e "${BLUE}It will help improve local search visibility and Google Maps integration.${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -d "public" ]; then
    echo -e "${RED}❌ Error: Please run this script from the project root directory.${NC}"
    echo -e "${YELLOW}The script should be run from the directory containing package.json${NC}"
    exit 1
fi

# Make scripts executable
echo -e "${BLUE}🔧 Making scripts executable...${NC}"
chmod +x scripts/exif/images-exif.sh
chmod +x scripts/exif/videos-exif.sh

# Ask user what to process
echo -e "${YELLOW}What would you like to process?${NC}"
echo -e "  ${GREEN}1)${NC} Images only"
echo -e "  ${GREEN}2)${NC} Videos only" 
echo -e "  ${GREEN}3)${NC} Both images and videos (recommended)"
echo -n -e "${YELLOW}Enter your choice (1-3): ${NC}"
read -r choice

case $choice in
    1)
        echo -e "${BLUE}🖼️  Processing images only...${NC}"
        echo ""
        ./scripts/exif/images-exif.sh
        ;;
    2)
        echo -e "${BLUE}🎥 Processing videos only...${NC}"
        echo ""
        ./scripts/exif/videos-exif.sh
        ;;
    3)
        echo -e "${BLUE}🔄 Processing both images and videos...${NC}"
        echo ""
        echo -e "${BLUE}Step 1: Processing Images${NC}"
        echo -e "${BLUE}========================${NC}"
        ./scripts/exif/images-exif.sh
        
        echo ""
        echo -e "${BLUE}Step 2: Processing Videos${NC}"
        echo -e "${BLUE}========================${NC}"
        ./scripts/exif/videos-exif.sh
        ;;
    *)
        echo -e "${RED}❌ Invalid choice. Exiting.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}🎊 All EXIF processing completed!${NC}"
echo ""
echo -e "${BLUE}📋 Summary of what was added to your media files:${NC}"
echo -e "  • 📍 GPS coordinates (Damietta: 31.4175°N, 31.8144°E)"
echo -e "  • 🌟 GPS coordinates (New Damietta: 31.4365°N, 31.6781°E)"  
echo -e "  • 🗺️  Small random variations for natural appearance"
echo -e "  • 🏷️  Arabic keywords and descriptions"
echo -e "  • 👤 Creator and copyright information"
echo -e "  • 🇪🇬 Location names and country data"
echo ""
echo -e "${YELLOW}🎯 SEO Benefits:${NC}"
echo -e "  • Better local search ranking in Google"
echo -e "  • Enhanced visibility in Google Maps"
echo -e "  • Improved image and video search results"
echo -e "  • Better performance in AI Overviews"
echo ""
echo -e "${YELLOW}🔍 Next Steps:${NC}"
echo -e "  • Test your images and videos in Google Search Console"
echo -e "  • Monitor local search performance"
echo -e "  • Submit updated sitemap to search engines"
echo -e "  • Consider adding structured data to pages using these media files"
echo ""
echo -e "${GREEN}✨ Your media files are now optimized for local SEO in Damietta region!${NC}"

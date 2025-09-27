# 🚛 New Damietta Moving Company Website

## شركة نقل عفش دمياط - الموقع الإلكتروني

A professional, SEO-optimized website for a furniture moving company serving Damietta (دمياط) and New Damietta (دمياط الجديدة), Egypt. Built with Next.js, TypeScript, and Tailwind CSS, with comprehensive local SEO optimization.

### 🎯 Project Goals

- **Rank #1 locally** for "نقل الأثاث" in Damietta & New Damietta
- Target Google Search, Google Maps/Business Profile, and AI Overviews  
- Arabic-first UX with clean English URLs
- Professional, conversion-optimized design

---

## 🏗️ Architecture

### Tech Stack
- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS with RTL support
- **SEO:** Advanced local SEO with JSON-LD structured data
- **Images:** Next.js Image Optimization + EXIF geo-tagging
- **Deployment:** Optimized for Vercel/static hosting

### Project Structure
```
new-damitta-moving/
├── 📁 components/
│   ├── 📁 seo/              # SEO-optimized components
│   │   ├── GeoOptimizedImage.tsx
│   │   ├── GeoOptimizedVideo.tsx
│   │   └── EnhancedGeoSEO.tsx
│   └── 📁 layout/           # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── 📁 lib/
│   └── 📁 seo/              # SEO utilities
│       ├── coords.ts        # City coordinates & places
│       ├── altFromSlug.ts   # Auto-generate Arabic alt text
│       ├── jsonld.ts        # JSON-LD structured data
│       └── meta.ts          # Meta tags & titles
├── 📁 pages/
│   ├── 📁 damietta/         # Damietta city pages
│   │   ├── index.tsx        # City hub
│   │   └── furniture-moving.tsx # Service pages
│   └── 📁 new-damietta/     # New Damietta pages
├── 📁 content/
│   └── 📁 patterns/         # Content templates (MDX)
├── 📁 scripts/
│   └── 📁 exif/             # EXIF metadata scripts
├── 📁 public/
│   ├── 📁 images/           # Optimized WebP images
│   └── 📁 videos/           # MP4 videos
└── 📄 Configuration files
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- exiftool (optional, for geo-tagging)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/new-damietta-moving/website.git
cd new-damietta-moving
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

### 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run preview          # Build and start locally

# Code Quality  
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run type-check       # TypeScript type checking

# SEO & Optimization
npm run seo:validate     # Validate SEO setup
npm run sitemap:generate # Generate sitemap
npm run exif:images      # Add geo-data to images
npm run exif:videos      # Add geo-data to videos
npm run exif:all         # Process all media files

# Analysis
npm run analyze          # Bundle size analysis
npm run clean            # Clean build artifacts
```

---

## 📍 Local SEO Features

### 🎯 Geographic Targeting
- **Primary Cities:** Damietta (31.417540, 31.814444) & New Damietta (31.4364503, 31.678142)
- **Coordinates Integration:** JSON-LD, EXIF data, meta tags
- **Natural GPS Jitter:** Prevents detection of automated geo-tagging

### 🔍 SEO Components

#### 1. **Auto-Generated Alt Text**
```typescript
// Filename: damietta-furniture-moving.webp
// Generated Alt: "نقل عفش شقق في دمياط"
import { slugToAlt } from '@/lib/seo/altFromSlug';

const alt = slugToAlt('damietta-apartment-furniture.webp', 'damietta');
```

#### 2. **JSON-LD Structured Data**
```typescript
import { localBusinessLD, serviceLD } from '@/lib/seo/jsonld';

// Automatic LocalBusiness schema
const businessSchema = localBusinessLD({
  cities: ['damietta', 'newDamietta'],
  services: ['نقل عفش', 'تغليف', 'فك وتركيب']
});
```

#### 3. **Geo-Optimized Images & Videos**
```jsx
<GeoOptimizedImage 
  src="/images/damietta-furniture-moving.webp"
  city="damietta"
  width={600} 
  height={400}
  priority
/>
```

### 🗺️ Sitemap & Robots

- **Dynamic sitemap generation** with city/service combinations
- **Image & video sitemaps** with geo-data
- **Optimized robots.txt** for Arabic search engines
- **Automatic priority assignment** based on page type

---

## 📝 Content Management

### Adding New Services

1. **Create service page:**
```bash
# Example: Adding storage service
touch pages/damietta/storage.tsx
touch pages/new-damietta/storage.tsx
```

2. **Use content patterns:**
```bash
# Copy and customize existing pattern
cp content/patterns/furniture-moving.mdx content/patterns/storage.mdx
```

3. **Update navigation:** Add to `components/layout/Header.tsx`

4. **Generate content:** Use the MDX templates in `content/patterns/`

### Adding New Cities

1. **Update coordinates:** Add to `lib/seo/coords.ts`
2. **Create city pages:** `pages/[city-name]/index.tsx`
3. **Update translation maps:** `lib/seo/altFromSlug.ts`
4. **Configure sitemap:** Update `next-sitemap.config.js`

---

## 🎨 Design System

### 🌍 Arabic-First Design
- **RTL Layout:** Built-in right-to-left support
- **Arabic Typography:** Cairo font with proper line-heights
- **Cultural Colors:** Blue/green palette suitable for Egyptian market
- **Mobile-First:** Responsive design optimized for Arabic content

### 🎯 Conversion Optimization
- **Multiple CTAs:** Phone, WhatsApp, quote request
- **Trust Signals:** Experience, insurance, testimonials
- **Local Proof:** Area-specific content and images
- **Fast Loading:** WebP images, optimized videos

---

## 🔧 Advanced Configuration

### Environment Variables
```bash
# .env.local
SITE_URL=https://new-damietta-moving.com
COMPANY_PHONE=+20572345678
COMPANY_WHATSAPP=+201234567890
COMPANY_EMAIL=info@new-damietta-moving.com
```

### Image Optimization
```javascript
// next.config.js
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  // Automatic optimization for Arabic content
}
```

### Geo-Tagging Setup
```bash
# Install exiftool
brew install exiftool  # macOS
sudo apt install exiftool  # Ubuntu

# Add geo-data to all media
npm run exif:all
```

---

## 📊 SEO Monitoring

### Tools Integration
- **Google Search Console:** Monitor local search performance
- **Google Business Profile:** Track Maps visibility
- **Lighthouse CI:** Automated performance monitoring
- **Next.js Analytics:** Built-in performance insights

### Key Metrics to Track
- Local search rankings for target keywords
- Google Maps visibility and clicks
- Organic traffic from Damietta region
- Conversion rates from different traffic sources
- Page speed scores (target: 90+ on mobile)

---

## 🔐 Security & Performance

### Security Headers
- Content Security Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer Policy optimization

### Performance Optimization
- **Image Optimization:** WebP/AVIF with responsive sizing
- **Code Splitting:** Automatic by Next.js
- **Caching Strategy:** Static assets cached for 1 year
- **Bundle Analysis:** Built-in bundle analyzer

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Static Export
```bash
# Build static version
npm run build
npm run export
```

### Docker (Optional)
```dockerfile
# Dockerfile included for containerized deployment
FROM node:18-alpine
# ... (see full Dockerfile in repo)
```

---

## 📚 Content Writing Guide

### 🎯 Content Patterns

Each service follows a structured pattern:

1. **Hero Section:** Clear value proposition
2. **Service Description:** Benefits and process
3. **Why Choose Us:** Local advantages  
4. **Process Steps:** Clear 6-step workflow
5. **Pricing:** Transparent pricing tiers
6. **FAQ:** Address common concerns
7. **Strong CTA:** Multiple contact options

### ✍️ Writing Guidelines

- **Arabic-First:** All primary content in Arabic
- **Local Focus:** Mention neighborhoods and landmarks
- **Conversational Tone:** Professional but approachable
- **SEO Balance:** Natural keyword integration
- **Call-to-Action:** Every section should guide toward contact

---

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Follow TypeScript/ESLint rules
3. Test on mobile devices
4. Validate SEO with tools
5. Submit PR with screenshots

### Code Standards
- **TypeScript:** Strict mode enabled
- **Components:** Functional components with hooks
- **Styling:** Tailwind CSS utilities
- **SEO:** Every page must have proper meta tags

---

## 📞 Support

### Technical Support
- **Documentation:** See `/docs` folder
- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions

### Business Contact
- **Phone:** +20 57 234-5678
- **WhatsApp:** +20 123 456 7890
- **Email:** info@new-damietta-moving.com

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🎉 Acknowledgments

- **Next.js Team:** For the amazing framework
- **Vercel:** For hosting and optimization tools
- **Tailwind CSS:** For the utility-first CSS framework
- **Community:** For Arabic/RTL development resources

---

<div align="center">
  <strong>🚛 Built with ❤️ for Damietta Moving Services</strong>
  <br>
  <em>Professional. Local. Trusted.</em>
</div>

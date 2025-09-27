You are an expert Local SEO + Full-Stack engineer working on a Next.js site named NEW-DAMITTA-MOVING. 
Goal: rank #1 locally for “نقل الأثاث” in Damietta (دمياط) & New Damietta (دمياط الجديدة) across Google Search, Google Maps/Business Profile, and AI Overviews. 
Language: Arabic (main), with clean English slugs when needed. 
Stack target: Next.js + TypeScript. Public assets already exist at:
- /public/images/*.webp  (e.g., damietta-apartment-furniture-moving.webp, ras-el-bar-furniture-moving-expert-3.webp, …)
- /public/videos/*.mp4   (e.g., damietta-furniture-assembly-service.mp4, …)

### 0) Project-wide conventions
- Primary cities: "دمياط" (Damietta) and "دمياط الجديدة" (New Damietta).
- Coordinates (decimal):
  - Damietta:    31.417540, 31.814444
  - NewDamietta: 31.4364503, 31.678142
- Arabic-first UX: titles/H1/contents in Arabic; slugs either transliterated or Arabic percent-encoded. Prefer short English slugs for stability (e.g., `/damietta/furniture-moving` + `/new-damietta/furniture-moving`).
- Alt text & captions must mention the city + service (e.g., "نقل عفش شقق في دمياط").
- Don’t keyword-stuff. Keep it people-first and helpful. 

### 1) Create SEO utilities
Create `lib/seo/` with:
1. `coords.ts` exporting the lat/long above and a helper `cityToCoords(city)` that returns Place JSON (name, geo: {latitude, longitude}, addressCountry: "EG"}).
2. `altFromSlug.ts` that converts filenames like `damietta-furniture-packing-service.webp` → Arabic alt:
   - Split by `-`, map known tokens: damietta→"دمياط", new→"الجديدة" (only when next token is damietta), moving→"نقل", furniture→"الأثاث/العفش", packing→"تغليف", assembly→"فك وتركيب", company→"شركة", service→"خدمة", van→"سيارة نقل", crane→"ونش".
   - Reorder to natural Arabic: e.g., "خدمة تغليف عفش في دمياط".
   - Always append city phrase once: "في دمياط" أو "في دمياط الجديدة".
   - Export `slugToAlt(filename, city)`.
3. `jsonld.ts`:
   - `localBusinessLD({name, url, logo, phone, address, cities})` → JSON-LD @type LocalBusiness with:
     name, url, telephone, image/logo, address (PostalAddress), areaServed (array of Place from `coords.ts`), sameAs (optional).
   - `serviceLD({name, description, city, url, priceRange})` → JSON-LD @type Service + provider LocalBusiness (as an embedded minimal object) + areaServed (Place) + offers (Offer with priceCurrency:"EGP").
   - `imageLD({url, width, height, city})` → @type ImageObject with `contentLocation` (Place) and `representativeOfPage:true`.
   - `videoLD({...})` → @type VideoObject with name, description, thumbnailUrl, uploadDate, duration, contentUrl, embedUrl (if any), and `contentLocation` (Place).
4. `meta.ts`:
   - Helpers to build `<title>` (60–65 chars) و`<meta name="description">` (145–160 chars) بالعربية بدون حشو.
   - Canonical builder and OpenGraph/Twitter metadata.

### 2) Components
Create in `components/seo/`:
1) `GeoOptimizedImage.tsx`
   - Wrap Next `<Image>` with props: `src, width, height, city, priority?`.
   - Auto-alt via `slugToAlt(basename(src), city)`.
   - Renders `<script type="application/ld+json">` with `imageLD`.
   - Adds descriptive `title` and `figcaption` if provided.
2) `GeoOptimizedVideo.tsx`
   - HTML5 `<video>` with `poster`, controls, preload="metadata".
   - Props: `src, poster, city, name, description, uploadDate`.
   - Inject `videoLD` via JSON-LD.
3) `EnhancedGeoSEO.tsx`
   - A head-injector that receives `title, description, canonical, jsonLd[]`.
   - Renders `<title>`, metas، canonical، OpenGraph/Twitter, and merges any JSON-LDs.

### 3) Pages & IA (Information Architecture)
Create a *city/service* hub-and-spoke model:

**City hubs**
- `/damietta/`  → H1: "شركة نقل عفش في دمياط"
- `/new-damietta/` → H1: "شركة نقل عفش في دمياط الجديدة"
Each hub:
  - Intro + trust bullets (خبرة، سرعة، تغليف احترافي، تأمين).
  - 3–5 CTA blocks (اتصل الآن، واتساب، طلب عرض سعر).
  - Services grid (links to service spokes below).
  - Embedded recent works (images/videos using the components with matching city).
  - LocalBusiness JSON-LD with `areaServed` تشمل المدينتين.
  - Internal links: بين الهبين + أهم الخدمات + مناطق قريبة (رأس البر اختياري).

**Service spokes (لكل مدينة نسختها)**
Create templates under each city:
- furniture-moving (نقل عفش شقق/فلل)
- packing (تغليف عفش احترافي)
- assembly (فك وتركيب أثاث – إيكيا، مطابخ، غرف نوم)
- office-moving (نقل مكاتب وشركات)
- crane (ونش رفع الأثاث)
- boxes (كراتين ومستلزمات التغليف)
- storage (تخزين الأثاث – إن وجد)
Structure of a service page:
  - H1 واضح + فقرة نفعية قصيرة.
  - قسم "لماذا نحن في <المدينة>" (5 نقاط).
  - خطوات العمل (3–5).
  - جدول أسعار تقديري/باقات (إن وجد).
  - Block FAQ (أسئلة حقيقية مختصرة داخل الصفحة – بدون الاعتماد على Rich Result).
  - 6–10 صور و1–3 فيديوهات من `/public/...` ملائمة للخدمة والمدينة عبر المكونات.
  - Inject `Service` JSON-LD (via `serviceLD`) + `ImageObject/VideoObject` JSON-LDs.

### 4) Content patterns (Arabic copy templates)
Provide writer-friendly templates (place in `/content/patterns/*.mdx`) for the top intents:
- "نقل عفش دمياط" / "نقل عفش دمياط الجديدة"
- "شركة نقل أثاث" + المدينة
- "ونش رفع أثاث" + المدينة
- "تغليف عفش" + المدينة
- "فك وتركيب أثاث" + المدينة
- "نقل مكاتب" + المدينة
- "نقل شقق" + المدينة
- "تعبئة كراتين نقل" + المدينة
Each template includes: suggested title, meta description, H1, outline, FAQs, and CTAs.

### 5) Sitemaps & robots
- Add `next-sitemap` and configure:
  - Base sitemap with logical folders `/damietta/*`, `/new-damietta/*`.
  - Image entries per page (collect from the page’s `<Image>` usage).
  - Video sitemap: include each MP4 with `thumbnailUrl`, `title`, `description`, `duration`, `uploadDate`, `contentUrl`.
  - Only index canonical pages; exclude drafts/test.
- Generate `/robots.txt` allowing images/videos; don’t disallow `/public/images` or `/public/videos`.

### 6) Structured Data details (JSON-LD)
- Use **JSON-LD** only. Validate with Rich Results Test.
- `LocalBusiness` on city hubs (businessHours/phone/address/areaServed).
- `Service` on service pages.
- `ImageObject` for key images (set `contentLocation` = Place for Damietta/New Damietta).
- `VideoObject` for each video (with `contentUrl`, `thumbnailUrl`, `uploadDate`, `duration`, `contentLocation`).
- Avoid Review markup for your own LocalBusiness (self-serving not eligible).

### 7) File naming, alt, captions (automation)
- Keep current filenames. Auto-generate alt/title via `altFromSlug`.
- Ensure all `<img>` use `<Image>` (no CSS background-only images).
- Add `<figcaption>` summarizing city + service.

### 8) Performance & UX
- Ensure LCP image on each page is the primary city/service photo with `priority`.
- Use `sizes` & width/height to prevent CLS.
- Serve WebP/AVIF where possible; keep descriptive filenames.

### 9) CLI: Embed metadata in assets (optional but helpful)
Create `scripts/exif/` with bash scripts that run **exiftool**. 
**Images (WebP)** – write XMP/IPTC (city, country) and keep small natural jitter in GPS:
- Damietta (all images containing "damietta-*.webp"):
  exiftool -overwrite_original -P \
   -XMP-dc:Subject="نقل عفش, دمياط" \
   -XMP-photoshop:City="Damietta" -XMP-iptcCore:CountryName="Egypt" \
   -XMP:LocationShownCityName="Damietta" \
   -XMP:GPSLatitude=31.417540 -XMP:GPSLongitude=31.814444 \
   public/images/damietta-*.webp
- New Damietta:
  exiftool -overwrite_original -P \
   -XMP-dc:Subject="نقل عفش, دمياط الجديدة" \
   -XMP-photoshop:City="New Damietta" -XMP-iptcCore:CountryName="Egypt" \
   -XMP:LocationShownCityName="New Damietta" \
   -XMP:GPSLatitude=31.4364503 -XMP:GPSLongitude=31.678142 \
   public/images/*new-damietta*.webp

**Videos (MP4)** – write QuickTime GPS + keep metadata on transcode:
- Write GPS:
  exiftool -overwrite_original -QuickTime:GPSCoordinates="31.417540,31.814444,0" public/videos/damietta-*.mp4
  exiftool -overwrite_original -QuickTime:GPSCoordinates="31.4364503,31.678142,0" public/videos/*new-damietta*.mp4
- If re-encoding:
  ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \
         -map_metadata 0 -movflags use_metadata_tags output.mp4

### 10) Header/Footer internal links
- Header: مدن (دمياط/دمياط الجديدة) + أهم الخدمات (نقل عفش/تغليف/ونش/مكاتب).
- Footer: العنوان المختصر/الهاتف/واتساب + روابط الخدمات + سياسة الخصوصية + خريطة الموقع.

### 11) Google Business Profile (GBP) alignment (content only)
- Ensure NAP (الاسم/العنوان/الهاتف) في الفوتر يطابق الملف التجاري في Google.
- أضف صور/فيديوهات دورياً وأشر للصفحات المقصودة (landing pages) في "المنشورات".
- استخدم فئـات مناسبة (Primary: Moving company | Secondary: House moving company / Office moving …).

### 12) AI Overviews & Long-tail coverage
- في أعلى كل صفحة، أضف فقرة قصيرة تلخص الخدمة بمدينة البحث (2–3 جمل + نقاط رئيسية).
- ضع Q&A داخل المحتوى (بدون الاعتماد على FAQ rich results) بصيغة سؤال/جواب موجز.
- اكتب “خطوات العمل” و“نطاق التغطية” و“زمن التنفيذ” بشكل صريح ليسهل اقتباسها.

### 13) Tracking & QA
- Add `@vercel/analytics` or GSC/GA4 snippets as needed.
- Lighthouse ≥ 90 for Perf/SEO on city/service pages.
- Add `npm scripts`: 
  - `seo:validate` (run schema & links check), 
  - `sitemap:gen`, 
  - `exif:images`, `exif:videos`.

### 14) Deliverables to produce now
- All components/utilities from sections 1–2.
- Two city hubs + at least 4 spokes لكل مدينة.
- next-sitemap config + robots.txt.
- JSON-LD injection on hubs/spokes.
- Scripts for EXIF/FFmpeg as above (guarded; run only locally).
- A README.md: how to add a new service/city page in 5 minutes.
Return with a brief checklist of generated files and any TODOs (if placeholders stayed).

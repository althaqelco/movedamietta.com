// مكتبة إنشاء عناوين ومعلومات SEO
import { CITIES_DATA } from './coords';

// إعادة تصدير CITIES_DATA للاستخدام في الصفحات
export { CITIES_DATA } from './coords';

/**
 * معلومات الموقع الأساسية
 */
const SITE_CONFIG = {
  siteName: "شركة نقل عفش دمياط",
  siteNameEn: "Move Damietta Company",
  domain: "movedamietta.com",
  protocol: "https",
  defaultImage: "/images/damietta-furniture-moving-company-worker-1.webp",
  twitterHandle: "@movedamietta",
  language: "ar",
  direction: "rtl",
};

interface MetaOptions {
  title: string;
  description: string;
  city?: 'damietta' | 'newDamietta';
  service?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * بناء العنوان الكامل مع العلامة التجارية
 */
export function buildTitle(title: string, includebrrand = true): string {
  // التأكد من أن العنوان لا يتجاوز 60-65 حرف
  let fullTitle = title;
  
  if (includebrrand && !title.includes(SITE_CONFIG.siteName)) {
    const brandSuffix = ` | ${SITE_CONFIG.siteName}`;
    const maxTitleLength = 65 - brandSuffix.length;
    
    if (title.length > maxTitleLength) {
      fullTitle = title.substring(0, maxTitleLength - 3) + "...";
    }
    
    fullTitle += brandSuffix;
  }
  
  return fullTitle;
}

/**
 * بناء الوصف مع التأكد من الطول المناسب
 */
export function buildDescription(description: string): string {
  // التأكد من أن الوصف لا يتجاوز 145-160 حرف
  if (description.length > 160) {
    return description.substring(0, 157) + "...";
  }
  
  return description;
}

/**
 * بناء الرابط الكانونيكال
 */
export function buildCanonical(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}${cleanPath}`;
}

/**
 * إنشاء الكلمات المفتاحية
 */
export function buildKeywords(city: 'damietta' | 'newDamietta', service?: string): string[] {
  const cityName = CITIES_DATA[city]?.nameAr || '';
  const baseKeywords = [
    `نقل عفش ${cityName}`,
    `شركة نقل أثاث ${cityName}`,
    `نقل اثاث ${cityName}`,
    "شركة نقل عفش",
    "نقل اثاث محترف",
  ];

  if (service) {
    baseKeywords.unshift(`${service} ${cityName}`);
    baseKeywords.push(`${service} محترف`);
  }

  // إضافة المرادفات الشائعة
  if (cityName === "دمياط") {
    baseKeywords.push("نقل عفش دمياط", "شركة نقل دمياط");
  } else if (cityName === "دمياط الجديدة") {
    baseKeywords.push("نقل عفش دمياط الجديدة", "شركة نقل دمياط الجديدة");
  }

  return baseKeywords;
}

/**
 * إنشاء ميتا تاجز OpenGraph
 */
export function buildOpenGraph(options: MetaOptions): Record<string, string> {
  const url = buildCanonical(options.canonical || '');
  const image = options.image || SITE_CONFIG.defaultImage;
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}${image}`;
  
  return {
    'og:type': 'website',
    'og:site_name': SITE_CONFIG.siteName,
    'og:title': options.title,
    'og:description': options.description,
    'og:url': url,
    'og:image': imageUrl,
    'og:image:alt': options.imageAlt || options.title,
    'og:locale': 'ar_EG',
    'og:locale:alternate': 'en_US',
  };
}

/**
 * إنشاء ميتا تاجز Twitter
 */
export function buildTwitterCard(options: MetaOptions): Record<string, string> {
  const image = options.image || SITE_CONFIG.defaultImage;
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}${image}`;
  
  return {
    'twitter:card': 'summary_large_image',
    'twitter:site': SITE_CONFIG.twitterHandle,
    'twitter:title': options.title,
    'twitter:description': options.description,
    'twitter:image': imageUrl,
    'twitter:image:alt': options.imageAlt || options.title,
  };
}

/**
 * إنشاء جميع ميتا تاجز الأساسية
 */
export function buildMetaTags(options: MetaOptions): Record<string, string> {
  const keywords = options.keywords || (options.city ? buildKeywords(options.city, options.service) : []);
  const canonical = buildCanonical(options.canonical || '');
  
  const baseTags: Record<string, string> = {
    'title': buildTitle(options.title),
    'description': buildDescription(options.description),
    'canonical': canonical,
    'keywords': keywords.join(', '),
    'language': SITE_CONFIG.language,
    'dir': SITE_CONFIG.direction,
    'viewport': 'width=device-width, initial-scale=1',
    'charset': 'utf-8',
  };

  // إضافة robots meta
  if (options.noIndex) {
    baseTags['robots'] = 'noindex, nofollow';
  } else {
    baseTags['robots'] = 'index, follow, max-image-preview:large, max-snippet:-1';
  }

  // دمج مع OpenGraph و Twitter
  const openGraph = buildOpenGraph(options);
  const twitterCard = buildTwitterCard(options);

  return {
    ...baseTags,
    ...openGraph,
    ...twitterCard,
  };
}

/**
 * إنشاء عنوان للصفحة الرئيسية للمدينة
 */
export function buildCityHubTitle(city: 'damietta' | 'newDamietta'): string {
  const cityName = CITIES_DATA[city]?.nameAr || '';
  return `شركة نقل عفش في ${cityName} - خدمة احترافية وآمنة`;
}

/**
 * إنشاء وصف للصفحة الرئيسية للمدينة
 */
export function buildCityHubDescription(city: 'damietta' | 'newDamietta'): string {
  const cityName = CITIES_DATA[city]?.nameAr || '';
  return `أفضل شركة نقل عفش في ${cityName}. خدمة احترافية وآمنة لنقل الأثاث والعفش مع التغليف والتأمين. اتصل الآن للحصول على عرض سعر مجاني.`;
}

/**
 * إنشاء عنوان لصفحة الخدمة
 */
export function buildServicePageTitle(service: string, city: 'damietta' | 'newDamietta'): string {
  const cityName = CITIES_DATA[city]?.nameAr || '';
  return `${service} في ${cityName} - خدمة احترافية وآمنة`;
}

/**
 * إنشاء وصف لصفحة الخدمة
 */
export function buildServicePageDescription(service: string, city: 'damietta' | 'newDamietta'): string {
  const cityName = CITIES_DATA[city]?.nameAr || '';
  return `خدمة ${service} احترافية في ${cityName}. فريق خبير ومعدات حديثة لضمان أفضل جودة. أسعار منافسة وخدمة سريعة. اتصل الآن!`;
}

/**
 * إنشاء Schema.org للمقال
 */
export function buildArticleSchema(options: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": options.title,
    "description": options.description,
    "url": options.url,
    "datePublished": options.datePublished || new Date().toISOString(),
    "dateModified": options.dateModified || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": options.author || SITE_CONFIG.siteName,
      "url": `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}`,
    },
    "publisher": {
      "@type": "Organization", 
      "name": SITE_CONFIG.siteName,
      "url": `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}`,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}${SITE_CONFIG.defaultImage}`,
      },
    },
    ...(options.image && {
      "image": {
        "@type": "ImageObject",
        "url": options.image.startsWith('http') ? options.image : `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}${options.image}`,
      },
    }),
  };
}

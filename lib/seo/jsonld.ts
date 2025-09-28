// مكتبة إنشاء البيانات المنظمة JSON-LD
import { cityToPlaceLD, getAllCitiesAsPlaces } from './coords';

/**
 * معلومات الشركة الأساسية
 */
export const COMPANY_INFO = {
  name: "شركة نقل عفش دمياط",
  nameEn: "Move Damietta Company", 
  url: "https://movedamietta.com",
  logo: "https://movedamietta.com/images/logo.webp",
  phone: "+20 10 6337 4834",
  whatsapp: "+20 10 6337 4834",
  email: "info@movedamietta.com",
  foundingDate: "2015-01-01",
  address: {
    streetAddress: "شارع الجمهورية، وسط البلد",
    addressLocality: "دمياط",
    addressRegion: "محافظة دمياط",
    postalCode: "34511",
    addressCountry: "EG",
  },
  businessHours: [
    "Mo-Th 08:00-18:00",
    "Fr 08:00-17:00", 
    "Sa 08:00-16:00"
  ],
  socialProfiles: [
    "https://www.facebook.com/movedamietta",
    "https://www.instagram.com/movedamietta", 
    "https://wa.me/201063374834",
    "https://maps.google.com/?cid=1176256325850218727"
  ],
  googlePlaceId: "0x14f9e3804f10fd33:0x1054820c72d9a0e7",
  googleMapsUrl: "https://maps.google.com/?cid=1176256325850218727"
};

interface LocalBusinessOptions {
  name?: string;
  url?: string; 
  logo?: string;
  phone?: string;
  address?: typeof COMPANY_INFO.address;
  cities?: Array<'damietta' | 'newDamietta' | 'rasElBar'>;
  services?: string[];
}

/**
 * إنشاء JSON-LD للأعمال المحلية
 */
export function localBusinessLD(options: LocalBusinessOptions = {}) {
  const cities = options.cities || ['damietta', 'newDamietta', 'rasElBar'];
  const areaServed = cities.map(city => cityToPlaceLD(city));

  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": options.name || COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.nameEn,
    "url": options.url || COMPANY_INFO.url,
    "logo": {
      "@type": "ImageObject",
      "url": options.logo || COMPANY_INFO.logo,
    },
    "image": options.logo || COMPANY_INFO.logo,
    "telephone": options.phone || COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "foundingDate": COMPANY_INFO.foundingDate,
    "address": {
      "@type": "PostalAddress",
      ...(options.address || COMPANY_INFO.address),
    },
    "areaServed": areaServed,
    "sameAs": COMPANY_INFO.socialProfiles,
    "hasMap": COMPANY_INFO.googleMapsUrl,
    "openingHoursSpecification": COMPANY_INFO.businessHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time?.split('-') || ['', ''];
      
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days?.split('-').map(day => {
          const dayMap: Record<string, string> = {
            'Mo': 'Monday', 'Tu': 'Tuesday', 'We': 'Wednesday',
            'Th': 'Thursday', 'Fr': 'Friday', 'Sa': 'Saturday', 'Su': 'Sunday'
          };
          return dayMap[day] || day;
        }) || [],
        "opens": opens,
        "closes": closes,
      };
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات نقل الأثاث",
      "itemListElement": options.services?.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
        },
        "position": index + 1,
      })) || [],
    },
    "knowsAbout": [
      "نقل الأثاث",
      "تغليف العفش", 
      "فك وتركيب الأثاث",
      "نقل المكاتب",
      "ونش رفع الأثاث"
    ],
  };
}

interface ServiceOptions {
  name: string;
  description: string;
  city: 'damietta' | 'newDamietta' | 'rasElBar';
  url: string;
  priceRange?: string;
  duration?: string;
  serviceType?: string;
}

/**
 * إنشاء JSON-LD للخدمة
 */
export function serviceLD(options: ServiceOptions) {
  const cityPlace = cityToPlaceLD(options.city);
  
  return {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "serviceType": options.serviceType || "MovingService",
    "areaServed": cityPlace,
    "availableLanguage": ["ar", "en"],
    "provider": {
      "@type": "MovingCompany",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.url,
      "telephone": COMPANY_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        ...COMPANY_INFO.address,
      },
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EGP",
      "priceRange": options.priceRange || "500-5000",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "url": options.url,
      "areaServed": cityPlace,
    },
    ...(options.duration && {
      "duration": options.duration,
    }),
  };
}

interface ImageOptions {
  url: string;
  width?: number;
  height?: number;
  city: 'damietta' | 'newDamietta' | 'rasElBar';
  alt?: string;
  caption?: string;
}

/**
 * إنشاء JSON-LD للصورة
 */
export function imageLD(options: ImageOptions) {
  const cityPlace = cityToPlaceLD(options.city);
  
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": options.url,
    "contentUrl": options.url,
    ...(options.width && { "width": options.width }),
    ...(options.height && { "height": options.height }),
    "contentLocation": cityPlace,
    "representativeOfPage": true,
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "acquireLicensePage": `${COMPANY_INFO.url}/license`,
    "creditText": COMPANY_INFO.name,
    ...(options.alt && { "alternateName": options.alt }),
    ...(options.caption && { "caption": options.caption }),
  };
}

interface VideoOptions {
  name: string;
  description: string;
  contentUrl: string;
  thumbnailUrl?: string;
  uploadDate: string;
  duration?: string;
  city: 'damietta' | 'newDamietta' | 'rasElBar';
  embedUrl?: string;
}

/**
 * إنشاء JSON-LD للفيديو
 */
export function videoLD(options: VideoOptions) {
  const cityPlace = cityToPlaceLD(options.city);
  
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": options.name,
    "description": options.description,
    "contentUrl": options.contentUrl,
    "uploadDate": options.uploadDate,
    "contentLocation": cityPlace,
    ...(options.thumbnailUrl && { "thumbnailUrl": options.thumbnailUrl }),
    ...(options.duration && { "duration": options.duration }),
    ...(options.embedUrl && { "embedUrl": options.embedUrl }),
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.url,
      "logo": {
        "@type": "ImageObject", 
        "url": COMPANY_INFO.logo,
      },
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "creditText": COMPANY_INFO.name,
  };
}

/**
 * إنشاء FAQ JSON-LD
 */
export function faqLD(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(qa => ({
      "@type": "Question", 
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer,
      },
    })),
  };
}

/**
 * إنشاء BreadcrumbList JSON-LD
 */
export function breadcrumbLD(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

/**
 * دمج عدة JSON-LD في مصفوفة واحدة
 */
export function combineJsonLd(...jsonLds: Array<object | object[]>): object[] {
  const combined: object[] = [];
  
  jsonLds.forEach(jsonLd => {
    if (Array.isArray(jsonLd)) {
      combined.push(...jsonLd);
    } else {
      combined.push(jsonLd);
    }
  });
  
  return combined;
}

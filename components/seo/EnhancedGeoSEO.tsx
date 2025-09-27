// مكون محسن لحقن SEO في Head الصفحة
import Head from 'next/head';
import { buildMetaTags, buildCanonical } from '@/lib/seo/meta';

interface EnhancedGeoSEOProps {
  title: string;
  description: string;
  canonical?: string;
  city?: 'damietta' | 'newDamietta';
  service?: string;
  image?: string;
  imageAlt?: string;
  jsonLd?: object | object[];
  keywords?: string[];
  noIndex?: boolean;
  additionalMeta?: Record<string, string>;
}

/**
 * مكون محسن لحقن SEO الجغرافي في رأس الصفحة
 */
export default function EnhancedGeoSEO({
  title,
  description,
  canonical,
  city,
  service,
  image,
  imageAlt,
  jsonLd = [],
  keywords,
  noIndex = false,
  additionalMeta = {},
}: EnhancedGeoSEOProps) {
  // بناء جميع ميتا تاجز
  const metaTags = buildMetaTags({
    title,
    description,
    canonical,
    city,
    service,
    image,
    imageAlt,
    keywords,
    noIndex,
  });

  // دمج JSON-LD إذا كان مصفوفة أو كائن واحد
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean);

  return (
    <Head>
      {/* العنوان */}
      <title>{metaTags.title}</title>
      
      {/* الميتا تاجز الأساسية */}
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="robots" content={metaTags.robots} />
      <meta name="language" content={metaTags.language} />
      <meta name="viewport" content={metaTags.viewport} />
      
      {/* الرابط الكانونيكال */}
      <link rel="canonical" href={metaTags.canonical} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={metaTags['og:type']} />
      <meta property="og:site_name" content={metaTags['og:site_name']} />
      <meta property="og:title" content={metaTags['og:title']} />
      <meta property="og:description" content={metaTags['og:description']} />
      <meta property="og:url" content={metaTags['og:url']} />
      <meta property="og:image" content={metaTags['og:image']} />
      <meta property="og:image:alt" content={metaTags['og:image:alt']} />
      <meta property="og:locale" content={metaTags['og:locale']} />
      <meta property="og:locale:alternate" content={metaTags['og:locale:alternate']} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={metaTags['twitter:card']} />
      <meta name="twitter:site" content={metaTags['twitter:site']} />
      <meta name="twitter:title" content={metaTags['twitter:title']} />
      <meta name="twitter:description" content={metaTags['twitter:description']} />
      <meta name="twitter:image" content={metaTags['twitter:image']} />
      <meta name="twitter:image:alt" content={metaTags['twitter:image:alt']} />
      
      {/* Additional metadata */}
      {Object.entries(additionalMeta).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
      
      {/* JSON-LD structured data */}
      {jsonLdArray.map((jsonLdItem, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdItem, null, 0),
          }}
        />
      ))}
      
      {/* Geo meta tags للمدن */}
      {city && (
        <>
          <meta name="geo.region" content="EG-DT" />
          <meta name="geo.position" content={getGeoPosition(city)} />
          <meta name="ICBM" content={getGeoPosition(city)} />
        </>
      )}
      
      {/* Additional link tags */}
      <link rel="icon" href="/images/damietta-furniture-moving-company-worker-1.webp" />
      <link rel="apple-touch-icon" href="/images/damietta-furniture-moving-company-worker-1.webp" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  );
}

/**
 * الحصول على الإحداثيات الجغرافية للمدينة
 */
function getGeoPosition(city: 'damietta' | 'newDamietta'): string {
  const coordinates = {
    damietta: '31.417540;31.814444',
    newDamietta: '31.4364503;31.678142',
  };
  
  return coordinates[city];
}

/**
 * مكون مبسط للـ SEO الأساسي
 */
export function BasicSEO({
  title,
  description,
  canonical,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
}) {
  return (
    <EnhancedGeoSEO
      title={title}
      description={description}
      canonical={canonical}
      image={image}
      noIndex={noIndex}
    />
  );
}

/**
 * مكون SEO للصفحات التي تحتاج JSON-LD فقط
 */
export function JsonLdSEO({
  jsonLd,
  children,
}: {
  jsonLd: object | object[];
  children?: React.ReactNode;
}) {
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  
  return (
    <>
      <Head>
        {jsonLdArray.map((jsonLdItem, index) => (
          <script
            key={`jsonld-only-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLdItem, null, 0),
            }}
          />
        ))}
      </Head>
      {children}
    </>
  );
}

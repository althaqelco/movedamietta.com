// تطبيق Next.js الرئيسي مع Layout والتصميم
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Meta tags أساسية */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="شركة نقل عفش دمياط" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="نقل عفش دمياط" />
        <meta name="description" content="أفضل شركة نقل أثاث وعفش في دمياط ودمياط الجديدة" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Icons */}
        <link rel="icon" type="image/webp" sizes="32x32" href="/images/damietta-furniture-moving-company-worker-1.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="/images/new-damietta-moving-company-worker-4.webp" />
        <link rel="apple-touch-icon" href="/images/damietta-furniture-moving-company-worker-1.webp" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-TileImage" content="/images/damietta-furniture-moving-company-worker-1.webp" />
        
        {/* Business Information */}
        <meta name="geo.region" content="EG-DT" />
        <meta name="geo.placename" content="دمياط, مصر" />
        <meta name="geo.position" content="31.417540;31.814444" />
        <meta name="ICBM" content="31.417540, 31.814444" />
        
        {/* Social Media */}
        <meta property="og:locale" content="ar_EG" />
        <meta property="og:type" content="business.business" />
        <meta property="og:site_name" content="شركة نقل عفش دمياط" />
        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

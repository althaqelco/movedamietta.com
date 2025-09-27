// تخصيص HTML الأساسي للعربية والـ RTL
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        {/* DNS Prefetch للأداء */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Google Fonts - Cairo للعربية */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" 
          as="style" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Critical CSS for RTL */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              box-sizing: border-box;
            }
            html {
              direction: rtl;
              scroll-behavior: smooth;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              direction: rtl;
              text-align: right;
              line-height: 1.6;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
          `
        }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        
        {/* مقترحات تحسين الأداء */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // تحسين الأداء للخطوط
            if ('fonts' in document) {
              document.fonts.ready.then(() => {
                document.body.classList.add('fonts-loaded');
              });
            }
            
            // تحسين التمرير السلس
            if ('scrollBehavior' in document.documentElement.style) {
              document.documentElement.style.scrollBehavior = 'smooth';
            }
          `
        }} />
      </body>
    </Html>
  );
}

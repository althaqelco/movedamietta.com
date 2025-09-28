/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://movedamietta.com',
  generateRobotsTxt: true,
  sitemapSize: 50000, // زيادة الحد لضمان ملف واحد
  generateIndexSitemap: false, // منع إنشاء sitemap index
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/404',
    '/500', 
    '/admin/*',
    '/api/*',
    '/private/*',
    '/_*',
    '/test/*'
  ],
  
  // إعدادات robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/_next/',
          '/404',
          '/500'
        ]
      },
      // السماح لروبوتات محركات البحث الرئيسية
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/images/',
          '/videos/',
          '*.webp',
          '*.mp4'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/images/',
          '/videos/'
        ]
      }
    ]
  },

  // إعدادات مخصصة لكل صفحة
  transform: async (config, path) => {
    // تحديد أولوية ومعدل التغيير حسب نوع الصفحة
    let priority = 0.7;
    let changefreq = 'weekly';

    // الصفحة الرئيسية
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // صفحات المدن الرئيسية (أولوية عالية)
    else if (path.match(/^\/(damietta|new-damietta|ras-el-bar)\/?$/)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // صفحات الخدمات (أولوية متوسطة عالية)
    else if (path.match(/^\/(damietta|new-damietta|ras-el-bar)\/(furniture-moving|packing|assembly|office-moving|crane|boxes)/)) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    
    // الصفحات الثانوية
    else if (path.match(/^\/(about|contact|quote|faq)/)) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    // صفحات أخرى
    else {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq,
      priority
    };
  },

  // إعدادات إضافية لمحركات البحث العربية
  additionalPaths: async (config) => {
    const result = [];
    
    // إضافة مسارات مخصصة للمحتوى العربي
    const cities = ['damietta', 'new-damietta', 'ras-el-bar'];
    const services = ['furniture-moving', 'packing', 'assembly', 'office-moving', 'crane', 'boxes'];
    
    // إنشاء مسارات لجميع الخدمات في جميع المدن
    cities.forEach(city => {
      services.forEach(service => {
        result.push({
          loc: `/${city}/${service}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.8
        });
      });
    });

    return result;
  }
};

// جميع الصفحات محسنة بأولويات مناسبة لـ SEO

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://movedamietta.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
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
          '/public/images/',
          '/public/videos/',
          '*.webp',
          '*.mp4'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/public/images/',
          '/public/videos/'
        ]
      }
    ],
    additionalSitemaps: [
      'https://new-damietta-moving.com/sitemap-images.xml',
      'https://new-damietta-moving.com/sitemap-videos.xml',
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
      priority,
      // إضافة معلومات جغرافية للصفحات المحلية
      ...(path.includes('damietta') && {
        'image:image': getPageImages(path),
        'geo:geo': getPageGeoData(path)
      })
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

// الحصول على صور الصفحة لإدراجها في الـ sitemap
function getPageImages(path) {
  const images = [];
  
  if (path.includes('damietta')) {
    if (path.includes('furniture-moving')) {
      images.push({
        url: 'https://new-damietta-moving.com/images/damietta-apartment-furniture-moving.webp',
        caption: 'نقل عفش شقق في دمياط'
      });
    }
    if (path.includes('packing')) {
      images.push({
        url: 'https://new-damietta-moving.com/images/furniture-packing-service-damietta.webp',
        caption: 'خدمة تغليف عفش في دمياط'
      });
    }
    // إضافة المزيد من الصور حسب نوع الصفحة
  }
  
  return images;
}

// الحصول على البيانات الجغرافية للصفحة
function getPageGeoData(path) {
  if (path.includes('damietta') && !path.includes('new-damietta')) {
    return {
      lat: '31.417540',
      lng: '31.814444',
      region: 'EG-DT'
    };
  } else if (path.includes('new-damietta')) {
    return {
      lat: '31.4364503', 
      lng: '31.678142',
      region: 'EG-DT'
    };
  } else if (path.includes('ras-el-bar')) {
    return {
      lat: '31.5095000',
      lng: '31.7854000',
      region: 'EG-DT'
    };
  }
  return null;
}

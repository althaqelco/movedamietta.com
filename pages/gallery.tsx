// معرض الأعمال - Portfolio Gallery
import { useState } from 'react';
import Head from 'next/head';
import { MediaGallery } from '@/components/ui';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الأعمال', icon: '🏠' },
    { id: 'apartments', name: 'الشقق', icon: '🏠' },
    { id: 'villas', name: 'الفلل', icon: '🏘️' },
    { id: 'offices', name: 'المكاتب', icon: '🏢' },
    { id: 'packing', name: 'التغليف', icon: '📦' },
    { id: 'crane', name: 'خدمة الونش', icon: '🏗️' }
  ];

  const portfolioItems = [
    // Apartments
    {
      type: 'image' as const,
      src: '/images/damietta-apartment-furniture-moving.webp',
      alt: 'نقل أثاث شقة كاملة في دمياط',
      title: 'نقل شقة 3 غرف في دمياط',
      category: 'apartments',
      location: 'وسط دمياط',
      date: 'سبتمبر 2025'
    },
    {
      type: 'image' as const,
      src: '/images/furniture-moving-damietta-worker-loading-boxes.webp',
      alt: 'عامل يحمل صناديق العفش في دمياط',
      title: 'نقل شقة عروسين جديدة',
      category: 'apartments',
      location: 'دمياط الجديدة',
      date: 'سبتمبر 2025'
    },
    
    // Offices
    {
      type: 'image' as const,
      src: '/images/damietta-moving-company-van-inspection.webp',
      alt: 'فحص شاحنة شركة نقل العفش في دمياط',
      title: 'نقل مكتب شركة كبيرة',
      category: 'offices',
      location: 'منطقة الأعمال - دمياط',
      date: 'أغسطس 2025'
    },
    
    // Packing Services
    {
      type: 'image' as const,
      src: '/images/furniture-packing-service-damietta.webp',
      alt: 'خدمة تغليف العفش في دمياط',
      title: 'تغليف أثاث فاخر',
      category: 'packing',
      location: 'رأس البر',
      date: 'سبتمبر 2025'
    },
    {
      type: 'image' as const,
      src: '/images/furniture-packing-boxes-damietta-family.webp',
      alt: 'عائلة تقوم بتغليف العفش مع الفريق',
      title: 'تغليف منزل العائلة',
      category: 'packing',
      location: 'دمياط الجديدة',
      date: 'أغسطس 2025'
    },
    
    // Crane Services
    {
      type: 'image' as const,
      src: '/images/damietta-furniture-crane-operator-5.webp',
      alt: 'عامل الونش يرفع الأثاث في دمياط',
      title: 'رفع أثاث الطابق الخامس',
      category: 'crane',
      location: 'وسط دمياط',
      date: 'سبتمبر 2025'
    },
    
    // Villas
    {
      type: 'image' as const,
      src: '/images/damietta-moving-service-professional-2.webp',
      alt: 'فريق محترف لنقل العفش في دمياط',
      title: 'نقل فيلا كاملة مع حديقة',
      category: 'villas',
      location: 'الضاهرة - دمياط',
      date: 'يوليو 2025'
    },
    {
      type: 'image' as const,
      src: '/images/new-damietta-moving-company-worker-4.webp',
      alt: 'عامل شركة نقل العفش في دمياط الجديدة',
      title: 'فيلا مفروشة بالكامل',
      category: 'villas',
      location: 'دمياط الجديدة',
      date: 'أغسطس 2025'
    },
    {
      type: 'image' as const,
      src: '/images/damietta-moving-specialist-6.webp',
      alt: 'متخصص نقل العفش في دمياط',
      title: 'تجميع أثاث الفيلا الجديدة',
      category: 'villas',
      location: 'منطقة الشاطئ',
      date: 'سبتمبر 2025'
    },
    {
      type: 'image' as const,
      src: '/images/furniture-assembly-damietta-expert-7.webp',
      alt: 'خبير تجميع الأثاث في دمياط',
      title: 'تجميع مطبخ ألماني',
      category: 'apartments',
      location: 'دمياط الجديدة',
      date: 'أغسطس 2025'
    },
    {
      type: 'image' as const,
      src: '/images/ras-el-bar-furniture-moving-expert-3.webp',
      alt: 'خبير نقل الأثاث في رأس البر',
      title: 'نقل شاليه صيفي',
      category: 'villas',
      location: 'رأس البر',
      date: 'يوليو 2025'
    },

    // Videos
    {
      type: 'video' as const,
      src: '/videos/damietta-commercial-moving-service-preparation.mp4',
      alt: 'تحضير خدمة النقل التجاري في دمياط',
      title: 'تحضير نقل مكتب كامل',
      category: 'offices',
      location: 'المنطقة الصناعية',
      date: 'أغسطس 2025',
      poster: '/images/damietta-moving-service-professional-2.webp'
    },
    {
      type: 'video' as const,
      src: '/videos/damietta-furniture-assembly-service.mp4',
      alt: 'خدمة تجميع الأثاث في دمياط',
      title: 'تجميع غرفة نوم كاملة',
      category: 'apartments',
      location: 'دمياط الجديدة',
      date: 'سبتمبر 2025',
      poster: '/images/furniture-assembly-damietta-expert-7.webp'
    },
    {
      type: 'video' as const,
      src: '/videos/damietta-furniture-packing-sealing-service.mp4',
      alt: 'خدمة تغليف وإغلاق العفش في دمياط',
      title: 'تغليف وحماية الأثاث الفاخر',
      category: 'packing',
      location: 'وسط دمياط',
      date: 'أغسطس 2025',
      poster: '/images/furniture-packing-service-damietta.webp'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>معرض أعمالنا - شركة نقل عفش دمياط</title>
        <meta name="description" content="اطلع على معرض أعمالنا في نقل الأثاث في دمياط ودمياط الجديدة. صور وفيديوهات حقيقية من مشاريعنا المنجزة." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              معرض أعمالنا المتميزة
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              استعرض مجموعة من أفضل مشاريعنا في نقل الأثاث والعفش في دمياط ودمياط الجديدة
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">+500 مشروع منجز</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">99% معدل رضا</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">5 سنوات خبرة</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">فريق محترف</div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-gray-50 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${
                    activeFilter === category.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-indigo-100 shadow-sm'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">
                    ({activeFilter === category.id 
                      ? filteredItems.length 
                      : category.id === 'all' 
                        ? portfolioItems.length 
                        : portfolioItems.filter(item => item.category === category.id).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredItems.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-shadow hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative">
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <video
                          src={item.src}
                          poster={item.poster}
                          className="w-full h-64 object-cover"
                          preload="metadata"
                          muted
                        />
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 right-4 bg-indigo-500 text-white px-2 py-1 rounded-full text-xs">
                        {item.type === 'image' ? '📸' : '🎥'}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">📷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">لا توجد أعمال في هذا القسم</h3>
                <p className="text-gray-600 mb-8">جرب تصفح الأقسام الأخرى أو اتصل بنا لمشاهدة المزيد من أعمالنا</p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  عرض جميع الأعمال
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Media Gallery */}
        {filteredItems.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  معرض تفاعلي للأعمال
                </h2>
                <p className="text-xl text-gray-600">
                  اضغط على أي صورة أو فيديو للعرض بحجم كامل
                </p>
              </div>
              
              <MediaGallery
                items={filteredItems.map(item => ({
                  type: item.type,
                  src: item.src,
                  alt: item.alt,
                  title: `${item.title} - ${item.location}`,
                  poster: item.poster
                }))}
                city="general"
                service="portfolio"
                title=""
                description=""
                columns={4}
              />
            </div>
          </section>
        )}

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
              <p className="text-xl opacity-90">نفخر بما حققناه من نجاحات مع عملائنا الكرام</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">+500</div>
                <div className="text-indigo-200">مشروع مكتمل</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-indigo-200">معدل رضا العملاء</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-indigo-200">خدمة مستمرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-indigo-200">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              هل أعجبتك أعمالنا؟
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              انضم إلى عملائنا الراضين واحصل على نفس الجودة والاحترافية في خدمة نقل العفش
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                اتصل الآن: 01063374834
              </a>
              <a 
                href="/quote" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                اطلب عرض سعر مجاني
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

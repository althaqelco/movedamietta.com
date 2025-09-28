// الصفحة الرئيسية - شركة نقل عفش دمياط
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { EnhancedGeoSEO, GeoHeroImage, GeoImageGrid } from '@/components/seo';
import { MediaGallery } from '@/components/ui';
import { localBusinessLD, combineJsonLd } from '@/lib/seo/jsonld';

interface HomeProps {
  jsonLd: object[];
  featuredCities: Array<{
    name: string;
    nameEn: string;
    href: string;
    image: string;
    description: string;
  }>;
  featuredServices: Array<{
    name: string;
    description: string;
    icon: string;
    href: string;
  }>;
  heroImages: Array<{
    src: string;
    width: number;
    height: number;
  }>;
}

export default function Home({ jsonLd, featuredCities, featuredServices, heroImages }: HomeProps) {
  return (
    <>
      <EnhancedGeoSEO
        title="شركة نقل عفش دمياط ودمياط الجديدة - خدمة احترافية وآمنة"
        description="أفضل شركة نقل أثاث وعفش في دمياط ودمياط الجديدة. خدمة احترافية وآمنة مع التغليف والتأمين. اتصل الآن للحصول على عرض سعر مجاني."
        canonical="/"
        image="/images/damietta-furniture-moving-company-worker-1.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">أفضل شركة نقل عفش في</span>
                    <span className="block text-yellow-400">دمياط ودمياط الجديدة</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                    خدمة نقل أثاث احترافية وآمنة منذ 2015 مع أكثر من 5000 عملية نقل ناجحة. نقدم خدمات نقل العفش، التغليف، الونش، وفك وتركيب الأثاث في جميع أنحاء محافظة دمياط بضمان شامل وأسعار تنافسية.
                  </p>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">+10 سنوات خبرة</div>
                      <div className="text-sm text-blue-200">في دمياط والمنطقة</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">تأمين شامل</div>
                      <div className="text-sm text-blue-200">على جميع الأثاث</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">خدمة 24/7</div>
                      <div className="text-sm text-blue-200">طوارئ ومواعيد</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">أسعار منافسة</div>
                      <div className="text-sm text-blue-200">بدون رسوم خفية</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+201063374834"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 space-x-reverse shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>اتصل الآن: 057-234-5678</span>
                  </a>
                  
                  <a
                    href="https://wa.me/201063374834"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 space-x-reverse shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>واتساب</span>
                  </a>
                </div>
              </div>

              <div className="lg:order-first">
                <GeoHeroImage
                  src="/images/damietta-furniture-moving-company-worker-1.webp"
                  city="damietta"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                المدن التي نخدمها
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدمات نقل الأثاث والعفش الاحترافية في دمياط ودمياط الجديدة مع فهم عميق لطبيعة كل مدينة
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredCities.map((city, index) => (
                <Link key={index} href={city.href} className="group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="relative h-64">
                      <img
                        src={city.image}
                        alt={`نقل عفش في ${city.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold">{city.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{city.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800">
                        <span>اكتشف خدماتنا</span>
                        <svg className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خدماتنا المتكاملة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم مجموعة شاملة من خدمات نقل الأثاث والعفش لتلبية جميع احتياجاتك
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl mb-6 group-hover:from-blue-100 group-hover:to-green-100 transition-all duration-300">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 space-x-2 space-x-reverse"
                    >
                      <span>اعرف المزيد</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Gallery */}
        <MediaGallery
          items={[
            {
              type: 'image',
              src: '/images/damietta-apartment-furniture-moving.webp',
              alt: 'نقل أثاث شقة كاملة في دمياط',
              title: 'نقل شقة كاملة في دمياط'
            },
            {
              type: 'image',
              src: '/images/furniture-moving-damietta-worker-loading-boxes.webp',
              alt: 'عامل يحمل صناديق العفش في دمياط',
              title: 'تحميل احترافي للصناديق'
            },
            {
              type: 'image',
              src: '/images/furniture-packing-service-damietta.webp',
              alt: 'خدمة تغليف العفش في دمياط',
              title: 'خدمة تغليف محترفة'
            },
            {
              type: 'image',
              src: '/images/damietta-furniture-crane-operator-5.webp',
              alt: 'عامل الونش يرفع الأثاث في دمياط',
              title: 'خدمة الونش المتخصصة'
            },
            {
              type: 'image',
              src: '/images/new-damietta-moving-company-worker-4.webp',
              alt: 'عامل شركة نقل العفش في دمياط الجديدة',
              title: 'فريق دمياط الجديدة'
            },
            {
              type: 'image',
              src: '/images/furniture-assembly-damietta-expert-7.webp',
              alt: 'خبير تجميع الأثاث في دمياط',
              title: 'خبير تجميع الأثاث'
            },
            {
              type: 'image',
              src: '/images/damietta-moving-service-professional-2.webp',
              alt: 'تحضير خدمة النقل التجاري في دمياط',
              title: 'تحضير النقل التجاري'
            },
            {
              type: 'image',
              src: '/images/furniture-assembly-damietta-expert-7.webp',
              alt: 'خدمة تجميع الأثاث في دمياط',
              title: 'تجميع وفك الأثاث'
            },
            {
              type: 'image',
              src: '/images/furniture-packing-service-damietta.webp',
              alt: 'خدمة تغليف وإغلاق العفش في دمياط',
              title: 'تغليف وإغلاق محترف'
            }
          ]}
          city="general"
          service="all"
          title="نماذج من أعمالنا المميزة"
          description="شاهد مجموعة من أفضل مشاريعنا في نقل الأثاث في دمياط ودمياط الجديدة مع صور وفيديوهات حقيقية من عملنا"
          className="bg-gradient-to-br from-blue-50 to-green-50"
          columns={3}
        />

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              لماذا تختارنا؟
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "خبرة محلية",
                  description: "نعرف دمياط ودمياط الجديدة شارع بشارع"
                },
                {
                  number: "02", 
                  title: "فريق محترف",
                  description: "عمال مدربون وخبراء في التعامل مع الأثاث"
                },
                {
                  number: "03",
                  title: "معدات حديثة",
                  description: "سيارات مجهزة وونش رفع متطور"
                },
                {
                  number: "04",
                  title: "ضمان شامل",
                  description: "تأمين كامل على الأثاث والخدمة"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{feature.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* لماذا تختار شركة نقل عفش دمياط؟ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                لماذا نحن الشركة رقم 1 في نقل العفش بدمياط؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                أكثر من 8 سنوات من الخبرة المتميزة في خدمات نقل الأثاث والعفش في دمياط ودمياط الجديدة جعلتنا الخيار الأول لآلاف العائلات المصرية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">خبرة موثوقة منذ 2015</h3>
                <p className="text-gray-600 leading-relaxed">
                  أكثر من 5000 عملية نقل عفش ناجحة في دمياط ودمياط الجديدة ورأس البر وكفر سعد. نفتخر بثقة عملائنا الذين يعودون إلينا مرة أخرى ويوصون بخدماتنا لأصدقائهم وأقاربهم.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ضمان شامل وتأمين كامل</h3>
                <p className="text-gray-600 leading-relaxed">
                  نوفر تأمين شامل على جميع قطع الأثاث والعفش من لحظة التحميل حتى التسليم في المكان الجديد. ضمان 100% ضد الكسر أو التلف مع تعويض فوري في حالة حدوث أي ضرر.
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">سرعة ودقة في المواعيد</h3>
                <p className="text-gray-600 leading-relaxed">
                  نحن ملتزمون بالمواعيد المحددة مسبقاً. فريق العمل يصل في الوقت المحدد ويكمل عملية النقل بأقصى سرعة ممكنة مع الحفاظ على أعلى معايير الأمان والجودة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* خدماتنا الشاملة */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خدمات نقل العفش الشاملة في دمياط
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نقدم مجموعة متكاملة من خدمات نقل الأثاث والعفش لتلبية جميع احتياجاتك، من الشقق الصغيرة إلى الفلل الكبيرة والمكاتب التجارية
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">نقل عفش الشقق والمنازل</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة نقل شاملة للشقق والمنازل من غرفة واحدة إلى 5 غرف. نتعامل مع جميع أنواع الأثاث من غرف النوم والصالونات إلى أجهزة المطبخ والأدوات المنزلية الدقيقة.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تغليف احترافي ومواد عالية الجودة</h3>
                    <p className="text-gray-600 leading-relaxed">
                      نستخدم أجود أنواع مواد التغليف المقاومة للرطوبة والصدمات. كراتين مقواة، فقاعات هوائية، شرائط لاصقة قوية، وأغطية بلاستيكية لحماية الأثاث من الغبار والخدوش.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">خدمة الونش لرفع الأثاث</h3>
                    <p className="text-gray-600 leading-relaxed">
                      أحدث معدات الونش لرفع الأثاث من وإلى الطوابق العليا بأمان تام. مناسب للمناطق الضيقة والشوارع التراثية في دمياط القديمة حيث تصعب عملية النقل التقليدية.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">فك وتركيب الأثاث</h3>
                    <p className="text-gray-600 leading-relaxed">
                      فريق من الفنيين المتخصصين في فك وتركيب جميع أنواع الأثاث. غرف النوم، المطابخ، الدولاب، الصالونات، وأجهزة التكييف مع ضمان سلامة القطع والتركيب السليم.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/damietta-furniture-moving-company-worker-1.webp"
                    alt="فريق نقل عفش دمياط أثناء العمل"
                    className="rounded-lg shadow-lg"
                  />
                  <img
                    src="/images/furniture-packing-service-damietta.webp"
                    alt="خدمة تغليف العفش في دمياط"
                    className="rounded-lg shadow-lg mt-8"
                  />
                  <img
                    src="/images/damietta-moving-service-professional-2.webp"
                    alt="معدات نقل العفش المتطورة"
                    className="rounded-lg shadow-lg -mt-8"
                  />
                  <img
                    src="/images/furniture-assembly-damietta-expert-7.webp"
                    alt="خبير فك وتركيب الأثاث في دمياط"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* مناطق التغطية */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                نغطي جميع مناطق محافظة دمياط
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                خدماتنا متاحة في جميع مدن وقرى محافظة دمياط مع فريق عمل محلي يعرف طبيعة المناطق وخصائص الشوارع والمباني
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">دمياط القديمة</h3>
                <p className="text-blue-200 text-sm">
                  المنطقة التراثية والأحياء القديمة مع الشوارع الضيقة والمباني التاريخية. خبرة خاصة في التعامل مع المساحات المحدودة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold mb-2">دمياط الجديدة</h3>
                <p className="text-blue-200 text-sm">
                  المنطقة الحديثة والمجمعات السكنية والأبراج الجديدة. معدات متطورة مناسبة للمباني العالية والمساحات الواسعة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">رأس البر</h3>
                <p className="text-blue-200 text-sm">
                  المنطقة الساحلية والمصايف الصيفية. خدمة موسمية مكثفة خلال فصل الصيف مع تركيز على الفلل والشاليهات.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold mb-2">القرى والمراكز</h3>
                <p className="text-blue-200 text-sm">
                  كفر سعد، الروضة، فارسكور، وجميع قرى ومراكز المحافظة. تغطية شاملة للمناطق الريفية مع فهم طبيعة المنازل الشعبية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* إحصائيات مميزة */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                أرقام تتحدث عن تميزنا
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                إنجازات حقيقية تعكس خبرتنا وتميزنا في مجال نقل العفش بدمياط
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">5000+</div>
                <div className="text-xl font-semibold mb-2">عملية نقل ناجحة</div>
                <div className="text-green-200 text-sm">منذ تأسيس الشركة في 2015</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-xl font-semibold mb-2">معدل رضا العملاء</div>
                <div className="text-green-200 text-sm">بناءً على تقييمات العملاء الفعلية</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">24</div>
                <div className="text-xl font-semibold mb-2">ساعة خدمة يومياً</div>
                <div className="text-green-200 text-sm">متاحون في جميع أوقات اليوم</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">8</div>
                <div className="text-xl font-semibold mb-2">سنوات خبرة</div>
                <div className="text-green-200 text-sm">في خدمة أهل دمياط</div>
              </div>
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                الأسئلة الأكثر شيوعاً حول نقل العفش
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات شافية لأهم الأسئلة التي يطرحها عملاؤنا حول خدمات نقل الأثاث في دمياط
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">كم تكلفة نقل العفش في دمياط؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  تختلف تكلفة نقل العفش حسب حجم الشقة، نوع الأثاث، المسافة، والخدمات المطلوبة. نقدم عروض أسعار مجانية ومفصلة بعد معاينة المكان. أسعارنا تنافسية وشاملة لجميع الخدمات من التغليف إلى التركيب.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل تقدمون ضمان على الأثاث المنقول؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعم، نوفر ضمان شامل وتأمين كامل على جميع قطع الأثاث من لحظة التحميل حتى التسليم. في حالة حدوث أي ضرر، نتولى الإصلاح أو التعويض الفوري حسب حالة القطعة.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">كم من الوقت تستغرق عملية نقل العفش؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  تستغرق عملية نقل شقة متوسطة (3 غرف) من 4-6 ساعات تشمل التغليف، الفك، التحميل، النقل، والتركيب. المدة تعتمد على حجم العفش، طبيعة المكان، والمسافة المطلوبة.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل تعملون في أيام الجمع والعطلات؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نحن متاحون 7 أيام في الأسبوع بما في ذلك أيام الجمع والعطلات الرسمية. نفهم أن عملية النقل قد تكون ضرورية في أي وقت، لذلك نوفر خدماتنا على مدار الساعة مع إمكانية الحجز المسبق.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // إنشاء JSON-LD للصفحة الرئيسية
  const businessJsonLd = localBusinessLD({
    cities: ['damietta', 'newDamietta'],
    services: [
      "نقل عفش شقق وفلل",
      "تغليف عفش احترافي", 
      "فك وتركيب أثاث",
      "نقل مكاتب وشركات",
      "ونش رفع أثاث",
      "كراتين ومستلزمات التغليف"
    ]
  });

  // المدن المميزة
  const featuredCities = [
    {
      name: "دمياط",
      nameEn: "damietta",
      href: "/damietta",
      image: "/images/damietta-apartment-furniture-moving.webp",
      description: "خدمة نقل العفش في دمياط القديمة مع خبرة عميقة في الأحياء التراثية والشوارع الضيقة."
    },
    {
      name: "دمياط الجديدة", 
      nameEn: "new-damietta",
      href: "/new-damietta",
      image: "/images/new-damietta-moving-company-worker-4.webp", 
      description: "خدمة متخصصة للمجمعات السكنية والأبراج الحديثة في دمياط الجديدة."
    },
    {
      name: "رأس البر",
      nameEn: "ras-el-bar", 
      href: "/ras-el-bar",
      image: "/images/ras-el-bar-furniture-moving-expert-3.webp",
      description: "خدمة نقل عفش متخصصة للمنطقة الساحلية والشاليهات والمنتجعات السياحية مع حماية شاملة من العوامل البحرية."
    }
  ];

  // الخدمات المميزة
  const featuredServices = [
    {
      name: "نقل عفش شقق وفلل",
      description: "نقل آمن وسريع لجميع أنواع الأثاث من وإلى الشقق والفلل",
      icon: "🏠",
      href: "/damietta/furniture-moving"
    },
    {
      name: "تغليف عفش احترافي", 
      description: "تغليف متقن بأفضل المواد لحماية أثاثك أثناء النقل",
      icon: "📦",
      href: "/damietta/packing"
    },
    {
      name: "ونش رفع أثاث",
      description: "خدمة ونش آمنة للأدوار العالية والأماكن الصعبة",
      icon: "🏗️", 
      href: "/new-damietta/crane"
    },
    {
      name: "فك وتركيب أثاث",
      description: "فك وتركيب احترافي لجميع أنواع الأثاث والمطابخ",
      icon: "🔧",
      href: "/damietta/assembly"
    },
    {
      name: "نقل مكاتب وشركات",
      description: "خدمة متخصصة لنقل المكاتب والشركات بتنظيم كامل",
      icon: "🏢",
      href: "/damietta/office-moving"
    },
    {
      name: "كراتين ومستلزمات",
      description: "توفير جميع مواد التغليف والكراتين عالية الجودة", 
      icon: "📋",
      href: "/damietta/boxes"
    }
  ];

  // الصور المميزة
  const heroImages = [
    {
      src: "/images/damietta-apartment-furniture-moving.webp",
      width: 400,
      height: 300
    },
    {
      src: "/images/damietta-furniture-moving-company-worker-1.webp",
      width: 400, 
      height: 300
    },
    {
      src: "/images/new-damietta-moving-company-worker-4.webp",
      width: 400,
      height: 300
    },
    {
      src: "/images/furniture-packing-service-damietta.webp",
      width: 400,
      height: 300
    },
    {
      src: "/images/damietta-moving-service-professional-2.webp",
      width: 400,
      height: 300
    },
    {
      src: "/images/furniture-assembly-damietta-expert-7.webp",
      width: 400,
      height: 300
    }
  ];

  return {
    props: {
      jsonLd: [businessJsonLd],
      featuredCities,
      featuredServices,
      heroImages,
    },
  };
};


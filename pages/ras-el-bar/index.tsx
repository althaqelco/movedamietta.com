// صفحة رأس البر - خدمات نقل العفش المتخصصة للمنطقة الساحلية
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { EnhancedGeoSEO, GeoHeroImage, GeoImageGrid } from '@/components/seo';
import { localBusinessLD, serviceLD, combineJsonLd } from '@/lib/seo/jsonld';
import { buildCityHubTitle, buildCityHubDescription } from '@/lib/seo/meta';

interface RasElBarHubProps {
  jsonLd: object[];
  services: Array<{
    name: string;
    nameEn: string;
    description: string;
    url: string;
    icon: string;
  }>;
  featuredImages: Array<{
    src: string;
    width: number;
    height: number;
  }>;
}

export default function RasElBarHub({ jsonLd, services, featuredImages }: RasElBarHubProps) {
  return (
    <>
      <EnhancedGeoSEO
        title="نقل عفش رأس البر - أفضل خدمة نقل للمنطقة الساحلية والمصايف"
        description="خدمة نقل عفش متخصصة في رأس البر للفلل والشاليهات والمنتجعات. خبرة في التعامل مع التحديات الساحلية، حماية من الرطوبة والملح. خدمة موسمية ودائمة بأسعار تنافسية."
        canonical="/ras-el-bar/"
        city="rasElBar"
        image="/images/ras-el-bar-furniture-moving-expert-3.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-green-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <img
              src="/images/ras-el-bar-furniture-moving-expert-3.webp"
              alt="خدمة نقل العفش المتخصصة في رأس البر"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block">خدمة نقل العفش الرائدة في</span>
                  <span className="block text-teal-300">رأس البر الساحلية</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  خدمة نقل أثاث متخصصة في المنطقة الساحلية لرأس البر منذ 2015. نتفهم تحديات البيئة البحرية ونوفر حلول نقل مبتكرة للفلل والشاليهات والمنتجعات السياحية مع حماية شاملة ضد الرطوبة والأملاح البحرية.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl">
                  <div className="text-center bg-teal-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-300 mb-1">200+</div>
                    <div className="text-sm">فيلا وشاليه تم نقلهم</div>
                  </div>
                  <div className="text-center bg-teal-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-300 mb-1">24/7</div>
                    <div className="text-sm">خدمة موسمية ودائمة</div>
                  </div>
                  <div className="text-center bg-teal-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-300 mb-1">100%</div>
                    <div className="text-sm">حماية من الرطوبة</div>
                  </div>
                </div>
                
                {/* Trust Points */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>خبرة في المناطق الساحلية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>حماية شاملة من الرطوبة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>خدمات للمنتجعات والفنادق</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>أسعار مناسبة للمصطافين</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+201063374834"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>اتصل الآن: 0106-337-4834</span>
                  </a>
                  <Link 
                    href="/quote"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>عرض سعر مجاني</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/images/damietta-apartment-furniture-moving.webp"
                    alt="خدمة نقل العفش الاحترافية في رأس البر"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500 rounded-full opacity-20 animate-pulse delay-75"></div>
              </div>
            </div>
          </div>
        </section>

        {/* خصائص رأس البر والتحديات البحرية */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خبرتنا في رأس البر والمناطق الساحلية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نتميز بفهم عميق لطبيعة رأس البر كمنطقة ساحلية مصيفية، من التحديات البيئية إلى احتياجات المصطافين والسكان المحليين
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">البيئة الساحلية</h3>
                <p className="text-gray-600 leading-relaxed">
                  خبرة واسعة في التعامل مع تحديات البيئة الساحلية مثل الرطوبة العالية، الأملاح البحرية، والرياح القوية. نوفر حماية إضافية للأثاث ضد العوامل البحرية.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الفلل والشاليهات</h3>
                <p className="text-gray-600 leading-relaxed">
                  متخصصون في نقل عفش الفلل والشاليهات الساحلية، مع فهم لخصائص الأثاث المقاوم للرطوبة والتصميمات الخاصة بالمناطق البحرية والإطلالات البانورامية.
                </p>
              </div>
              
              <div className="bg-teal-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">المنتجعات والفنادق</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة متخصصة للمنتجعات والفنادق الساحلية، مع جدولة مرنة للموسم السياحي وتفهم لاحتياجات قطاع الضيافة والسياحة الشاطئية.
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الكورنيش والواجهة البحرية</h3>
                <p className="text-gray-600 leading-relaxed">
                  معرفة تفصيلية بطريق الكورنيش والمناطق المطلة على البحر، مع خبرة في التعامل مع الطرق الساحلية وظروف النقل الخاصة بالواجهة البحرية.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الخدمة الموسمية</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة مكثفة خلال موسم المصايف (يونيو-سبتمبر) مع زيادة الفرق وتوفر شاحنات إضافية لتلبية الطلب المتزايد من المصطافين من القاهرة والإسكندرية.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الحماية من العوامل الجوية</h3>
                <p className="text-gray-600 leading-relaxed">
                  أغطية ومواد تغليف خاصة مقاومة للرطوبة والملح والرياح البحرية. حماية شاملة للأثاث الخشبي والمعدني والأقمشة من تأثيرات البحر والهواء المالح.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* الخدمات المتخصصة في رأس البر */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خدمات نقل العفش المتخصصة في رأس البر
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجات المنطقة الساحلية والمصيفية
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نقل الشاليهات الساحلية</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة متخصصة لنقل عفش الشاليهات والوحدات الساحلية، مع عناية خاصة بالأثاث المقاوم للمياه والرطوبة، والديكورات البحرية، وأثاث الحدائق الخارجية المقاومة للعوامل الجوية.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نقل المنتجعات والفنادق</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة شاملة لنقل أثاث وتجهيزات الفنادق والمنتجعات السياحية، مع التنسيق المسبق لتجنب إزعاج النزلاء وضمان استمرارية العمليات التجارية خلال موسم السياحة.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🌞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">النقل الموسمي للمصطافين</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة مخصصة للعائلات المصطافة من القاهرة والجيزة والإسكندرية، مع جداول مرنة تتناسب مع إجازات الصيف وأوقات الذروة السياحية، وأسعار موسمية تنافسية.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⛵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نقل معدات القوارب واليخوت</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة متخصصة لنقل المعدات البحرية وأثاث القوارب واليخوت، مع فهم للاحتياجات الخاصة لعشاق الرياضات المائية ومالكي القوارب في مارينا رأس البر.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-teal-900 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">مميزات خدمتنا في رأس البر</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>فريق محلي يعرف طبيعة المنطقة</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>مواد تغليف مقاومة للرطوبة والملح</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>معرفة بطرق الكورنيش والمناطق الساحلية</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>خدمة متاحة طوال العام والموسم السياحي</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>أسعار مناسبة للمصطافين والسكان</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>تأمين شامل ضد العوامل البحرية</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-teal-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300 mb-2">200+</div>
                      <div className="text-sm">شاليه وفيلا تم نقل عفشها بنجاح</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* المناطق المغطاة في رأس البر */}
        <section className="py-20 bg-teal-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                نغطي جميع مناطق رأس البر الساحلية
              </h2>
              <p className="text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
                خدماتنا متاحة في جميع أحياء ومناطق رأس البر من الواجهة البحرية إلى المناطق السكنية الداخلية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">الواجهة البحرية</h3>
                <p className="text-teal-200 text-sm">
                  الشاليهات والفلل المطلة مباشرة على البحر، مع عناية خاصة بالأثاث المعرض للرياح البحرية والرطوبة العالية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛥️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">منطقة المارينا</h3>
                <p className="text-teal-200 text-sm">
                  المنتجعات الفاخرة ومرسى اليخوت، مع خدمات متخصصة للوحدات الراقية ومعدات القوارب والرياضات المائية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">المناطق السكنية</h3>
                <p className="text-teal-200 text-sm">
                  الأحياء السكنية للمقيمين الدائمين، مع فهم لاحتياجات السكان المحليين وطبيعة المنازل التقليدية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">المنطقة الفندقية</h3>
                <p className="text-teal-200 text-sm">
                  الفنادق والمنتجعات السياحية، مع خدمات مجدولة لتجنب إزعاج النزلاء وضمان استمرارية العمليات التجارية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* نصائح للمصطافين */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                نصائح هامة لنقل العفش في البيئة الساحلية
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                إرشادات مهمة للحفاظ على أثاثكم في البيئة البحرية لرأس البر
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">1</div>
                <div className="text-xl font-semibold mb-2">التغليف المقاوم</div>
                <div className="text-blue-200 text-sm">استخدم مواد تغليف خاصة مقاومة للرطوبة والملح</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">2</div>
                <div className="text-xl font-semibold mb-2">التوقيت المناسب</div>
                <div className="text-blue-200 text-sm">تجنب النقل أثناء العواصف الشاطئية والأمطار</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">3</div>
                <div className="text-xl font-semibold mb-2">الفحص السريع</div>
                <div className="text-blue-200 text-sm">فحص الأثاث فور الوصول للتأكد من سلامته</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">4</div>
                <div className="text-xl font-semibold mb-2">التجفيف الفوري</div>
                <div className="text-blue-200 text-sm">تجفيف أي رطوبة قد تتراكم أثناء النقل</div>
              </div>
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                أسئلة شائعة حول نقل العفش في رأس البر
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات شاملة لأهم الاستفسارات حول نقل الأثاث في المنطقة الساحلية
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">كيف تحمون الأثاث من الرطوبة والملح في رأس البر؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نستخدم مواد تغليف خاصة مقاومة للرطوبة مثل الأغطية البلاستيكية المحكمة، وأكياس مفرغة من الهواء للأقمشة، وطلاءات واقية للأثاث المعدني. كما نضع مواد امتصاص الرطوبة داخل الشاحنات.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل تقدمون خدمات نقل من القاهرة والإسكندرية إلى رأس البر؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعم، نوفر خدمة نقل متكاملة من جميع محافظات مصر إلى رأس البر وخاصة من القاهرة والجيزة والإسكندرية. لدينا خدمة موسمية مكثفة خلال فصل الصيف مع شاحنات مخصصة للمصطافين.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">ما هي أفضل أوقات النقل في رأس البر؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  أفضل أوقات النقل هي الصباح الباكر أو المساء لتجنب حرارة الشمس، وتجنب أيام الرياح القوية. كما نتجنب أوقات الذروة السياحية في نهايات الأسبوع لضمان حركة أسهل للشاحنات.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل لديكم خبرة مع الأثاث الخارجي والحدائق البحرية؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعم، لدينا خبرة واسعة مع أثاث الحدائق البحرية والتراسات، بما في ذلك الأثاث المقاوم للمياه، المظلات الشاطئية، وأجهزة الشواء الخارجية. نستخدم تقنيات حماية خاصة لهذا النوع من الأثاث.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">كم تكلفة نقل العفش من القاهرة إلى رأس البر؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  التكلفة تعتمد على حجم العفش والمسافة ونوع الخدمة المطلوبة. نقدم عروض أسعار خاصة للمصطافين وأسعار موسمية تنافسية. تشمل الخدمة التغليف، النقل، والحماية من العوامل البحرية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* شهادات العملاء من رأس البر */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                تجارب عملائنا في رأس البر
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                شهادات حقيقية من مالكي الشاليهات والمصطافين الذين وثقوا بخدماتنا
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "نقلوا عفش الشاليه من القاهرة لرأس البر بعناية فائقة. كل القطع وصلت سليمة رغم الرطوبة العالية. الفريق محترف ويعرف طبيعة المنطقة جيداً."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">مهندس أحمد عبد الله</div>
                  <div className="text-blue-300">شاليه الواجهة البحرية</div>
                </div>
              </div>
              
              <div className="bg-blue-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "خدمة ممتازة للمنتجع. نقلوا جميع الأثاث والتجهيزات الفندقية بدون أي إزعاج للنزلاء. التوقيت كان مثالي والحماية من الرطوبة ممتازة."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">إدارة منتجع النخيل</div>
                  <div className="text-blue-300">منطقة المارينا</div>
                </div>
              </div>
              
              <div className="bg-blue-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "كل صيف نعتمد عليهم في نقل العفش للفيلا. أثاث الحديقة والأجهزة البحرية وصلت بحالة ممتازة. أسعارهم معقولة وخدمتهم موثوقة."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">عائلة المهندس كريم</div>
                  <div className="text-blue-300">المنطقة السكنية</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              احجز خدمة نقل العفش في رأس البر الآن
            </h2>
            <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              تواصل معنا لخدمة نقل عفش متخصصة في المنطقة الساحلية لرأس البر. فريقنا المحترف جاهز لخدمة المصطافين والمقيمين على مدار السنة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-teal-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 space-x-reverse shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل الآن: 0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد الاستفسار عن نقل العفش في رأس البر" 
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2 space-x-reverse shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>واتساب للاستشارة</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<RasElBarHubProps> = async () => {
  // إنشاء JSON-LD للصفحة
  const businessJsonLd = localBusinessLD({
    cities: ['rasElBar'],
    services: [
      "نقل عفش الشاليهات الساحلية",
      "نقل المنتجعات والفنادق", 
      "النقل الموسمي للمصطافين",
      "حماية من الرطوبة والملح",
      "نقل معدات القوارب",
      "خدمة 24/7 للمناطق الساحلية"
    ]
  });

  // الخدمات المتاحة في رأس البر
  const services = [
    {
      name: "نقل الشاليهات الساحلية",
      nameEn: "coastal-chalets",
      description: "خدمة متخصصة لنقل عفش الشاليهات والوحدات الساحلية مع حماية شاملة من العوامل البحرية",
      url: "/ras-el-bar/chalets",
      icon: "🏖️"
    },
    {
      name: "النقل الموسمي للمصطافين", 
      nameEn: "seasonal-moving",
      description: "خدمة مخصصة للعائلات المصطافة مع جداول مرنة وأسعار موسمية تنافسية",
      url: "/ras-el-bar/seasonal",
      icon: "🌞"
    },
    {
      name: "نقل المنتجعات والفنادق",
      nameEn: "resorts-hotels", 
      description: "خدمة شاملة لنقل أثاث وتجهيزات المنتجعات والفنادق السياحية",
      url: "/ras-el-bar/resorts",
      icon: "🏨"
    },
    {
      name: "حماية من العوامل البحرية",
      nameEn: "marine-protection",
      description: "تغليف وحماية خاصة ضد الرطوبة والملح والرياح البحرية",
      url: "/ras-el-bar/protection", 
      icon: "🛡️"
    }
  ];

  // الصور المميزة
  const featuredImages = [
    {
      src: "/images/ras-el-bar-furniture-moving-expert-3.webp",
      width: 400,
      height: 300
    },
    {
      src: "/images/damietta-apartment-furniture-moving.webp", 
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
    }
  ];

  return {
    props: {
      jsonLd: [businessJsonLd],
      services,
      featuredImages,
    },
  };
};

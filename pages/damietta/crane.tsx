// صفحة خدمة الونش في دمياط - Page لرفع الأثاث بالونش
import { GetStaticProps } from 'next';
import { EnhancedGeoSEO } from '@/components/seo';
import Image from 'next/image';
import { buildMetaTags, CITIES_DATA } from '@/lib/seo/meta';
import { localBusinessLD } from '@/lib/seo/jsonld';

interface DamiettaCraneProps {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  jsonLd: any[];
}

export default function DamiettaCranePage({ seo, jsonLd }: DamiettaCraneProps) {
  return (
    <>
      <EnhancedGeoSEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical="/damietta/crane"
        city="damietta"
        service="crane"
        image="/images/damietta-furniture-crane-operator-5.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 to-orange-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0">
            <img 
              src="/images/damietta-moving-service-professional-2.webp"
              alt="خدمة الونش المتخصصة في دمياط"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow-lg leading-tight">
                  <span className="block">خدمة الونش الأكثر أماناً</span>
                  <span className="block">وإحترافية في</span>
                  <span className="block text-orange-300">دمياط والنيل</span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
                  خدمة ونش متخصصة في رفع ونقل الأثاث والأجهزة الثقيلة بأمان مطلق في دمياط القديمة والجديدة. نستخدم أحدث معدات الونش الهيدروليكي بقدرات مختلفة تصل إلى 500 كجم، مع فريق مدرب على أعلى معايير السلامة المهنية للتعامل مع المباني التراثية والحديثة.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 mb-8">
                  <div className="text-center bg-orange-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300 mb-1">500kg</div>
                    <div className="text-sm">قدرة رفع قصوى</div>
                  </div>
                  <div className="text-center bg-orange-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300 mb-1">15m</div>
                    <div className="text-sm">ارتفاع رفع أقصى</div>
                  </div>
                  <div className="text-center bg-orange-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300 mb-1">100%</div>
                    <div className="text-sm">ضمان السلامة</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="tel:+201063374834" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    اطلب الخدمة الآن
                  </a>
                  <a 
                    href="https://wa.me/201063374834?text=أريد خدمة الونش في دمياط" 
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    واتساب
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/damietta-furniture-crane-operator-5.webp"
                  alt="عامل ونش محترف يرفع الأثاث في دمياط"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">خدمة متاحة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* خدمات الونش */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                خدمات الونش المتكاملة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نوفر خدمات رفع ونقل الأثاث والأجهزة الثقيلة بأعلى معايير الأمان والاحترافية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">رفع الأثاث</h3>
                <p className="text-gray-600 leading-relaxed">
                  رفع الأثاث من وإلى الطوابق العليا بأمان تام باستخدام أحدث معدات الونش
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الأجهزة الثقيلة</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقل وتركيب الأجهزة الثقيلة مثل الثلاجات والغسالات والمكيفات
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">نقل آمن</h3>
                <p className="text-gray-600 leading-relaxed">
                  ضمان أمان المنقولات مع التأمين الشامل وأعلى معايير السلامة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* معرض الأعمال */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أعمالنا في خدمة الونش
              </h2>
              <p className="text-xl text-gray-600">
                صور من مشاريعنا الناجحة في رفع ونقل الأثاث بالونش
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/images/damietta-moving-service-professional-2.webp"
                  alt="فريق محترف لخدمة الونش في دمياط"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">فريق محترف</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/images/damietta-moving-specialist-6.webp"
                  alt="متخصص رفع الأثاث بالونش في دمياط"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">متخصص معتمد</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/images/damietta-moving-company-van-inspection.webp"
                  alt="فحص معدات الونش قبل العمل في دمياط"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">فحص دقيق للمعدات</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* فيديو الخدمة */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  شاهد خدمة الونش المحترفة
                </h2>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  فيديو يوضح كيفية عمل فريقنا المحترف في رفع ونقل الأثاث باستخدام أحدث معدات الونش مع أعلى معايير السلامة.
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    معدات حديثة ومتطورة
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    فريق عمل محترف ومدرب
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ضمان شامل وتأمين كامل
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <img
                  src="/images/damietta-furniture-crane-operator-5.webp"
                  alt="خدمة الونش وتجميع الأثاث في دمياط"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* أنواع خدمات الونش */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                أنواع خدمات الونش المتخصصة في دمياط
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نقدم مجموعة شاملة من خدمات الونش لتلبية جميع احتياجات الرفع والنقل في دمياط القديمة والجديدة
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ونش المباني العالية</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة متخصصة لرفع الأثاث إلى الطوابق العالية في الأبراج والمجمعات السكنية في دمياط الجديدة، مع معدات ونش قوية تصل إلى الدور العاشر.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ونش المباني التراثية</h3>
                <p className="text-gray-600 leading-relaxed">
                  معدات ونش خاصة مصممة للتعامل مع المباني التراثية في دمياط القديمة، مع حماية كاملة للنوافذ والشرفات الخشبية والزخارف المعمارية.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ونش الأماكن الضيقة</h3>
                <p className="text-gray-600 leading-relaxed">
                  ونش متنقل صغير الحجم مخصص للشوارع الضيقة والأزقة في الأحياء الشعبية، مع إمكانية المناورة في المساحات المحدودة جداً.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ونش الطوارئ</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة ونش عاجلة متاحة 24/7 لحالات الطوارئ، مع وقت استجابة أقل من ساعتين في جميع أنحاء دمياط لمواجهة الحالات العاجلة.
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ونش المناطق النيلية</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة خاصة للمنازل المطلة على النيل والكورنيش، مع اتخاذ احتياطات إضافية ضد الرطوبة ومراعاة خصوصية المناطق المائية.
                </p>
              </div>
              
              <div className="bg-red-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ونش القطع الثمينة</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة متخصصة للقطع الثمينة والأثاث الفاخر مع تغليف إضافي وحماية مشددة وتأمين شامل ضد أي ضرر أثناء عملية الرفع.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* مميزات خدمة الونش */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                لماذا تختار خدمة الونش المتميزة لدينا؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                معدات حديثة، فريق محترف، وسنوات من الخبرة في التعامل مع تحديات الرفع في دمياط
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">أعلى معايير السلامة</h3>
                    <p className="text-gray-600 leading-relaxed">
                      نتبع بروتوكولات السلامة الدولية مع فحص دوري لجميع المعدات وتدريب مستمر للفريق على أحدث تقنيات السلامة المهنية وإدارة المخاطر في عمليات الرفع.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">معدات ونش متطورة</h3>
                    <p className="text-gray-600 leading-relaxed">
                      نستخدم أحدث معدات الونش الهيدروليكي من الماركات العالمية المعروفة، مع صيانة دورية وقطع غيار أصلية لضمان الأداء المثالي والموثوقية العالية.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">👨‍🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">فريق مشغلي ونش محترفين</h3>
                    <p className="text-gray-600 leading-relaxed">
                      مشغلو ونش مرخصون ومدربون على أعلى المستويات، مع سنوات من الخبرة في التعامل مع مختلف أنواع المباني والتحديات الفريدة لمدينة دمياط وطبيعتها الجغرافية.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تخطيط مسبق ومعاينة دقيقة</h3>
                    <p className="text-gray-600 leading-relaxed">
                      دراسة شاملة للموقع قبل البدء بالعمل، مع تحديد أفضل نقاط الرفع وتقييم المخاطر المحتملة ووضع خطة تفصيلية لضمان تنفيذ العملية بسلاسة ودقة.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-orange-900 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">خدمة الونش المتكاملة</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-bold mb-2">قبل الرفع</h4>
                      <p className="text-orange-100 text-sm">معاينة شاملة، تحضير المعدات، تأمين المنطقة</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-bold mb-2">أثناء الرفع</h4>
                      <p className="text-orange-100 text-sm">مراقبة مستمرة، تحكم دقيق، حماية كاملة للأثاث</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-bold mb-2">بعد الرفع</h4>
                      <p className="text-orange-100 text-sm">فحص سلامة القطع، تنظيف الموقع، ضمان الجودة</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-orange-800 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-300">8</div>
                        <div className="text-xs">سنوات خبرة</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-300">1000+</div>
                        <div className="text-xs">عملية رفع ناجحة</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة حول خدمة الونش */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                أسئلة شائعة حول خدمة الونش في دمياط
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات شاملة لأهم الأسئلة حول خدمات الونش ورفع الأثاث في دمياط
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">ما هي أقصى قدرة رفع للونش المتوفر لديكم؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  لدينا معدات ونش متنوعة بقدرات رفع مختلفة تبدأ من 200 كجم للقطع الصغيرة وتصل إلى 500 كجم للأثاث الثقيل مثل الخزائن الكبيرة والثلاجات وأجهزة التكييف المركزي.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل يمكن استخدام الونش في الشوارع الضيقة بدمياط القديمة؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعم، لدينا معدات ونش متنقلة صغيرة الحجم مصممة خصيصاً للعمل في الشوارع الضيقة والأزقة التراثية. كما نوفر خدمة الونش اليدوي للمساحات الضيقة جداً مع فريق متخصص.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">كم يستغرق وقت رفع قطعة أثاث واحدة؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  يختلف الوقت حسب نوع القطعة والارتفاع، لكن في المتوسط تستغرق عملية رفع قطعة واحدة من 10-20 دقيقة شاملة التحضير والتأمين. العملية الكاملة لشقة متوسطة تستغرق 2-4 ساعات.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل هناك ضمان ضد تلف الأثاث أثناء الرفع؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نوفر ضمان شامل وتأمين كامل على جميع القطع المرفوعة. في حالة حدوث أي ضرر (وهو نادر جداً)، نتحمل كامل تكلفة الإصلاح أو التعويض فوراً حسب قيمة القطعة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section className="py-16 bg-gradient-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              احجز خدمة الونش الاحترافية الآن
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
              تواصل معنا واحصل على استشارة مجانية وعرض سعر تنافسي لخدمة الونش المتخصصة في دمياط. فريقنا المحترف جاهز لخدمتكم على مدار الساعة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل الآن: 0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد خدمة الونش في دمياط" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
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

export const getStaticProps: GetStaticProps<DamiettaCraneProps> = async () => {
  const seoData = buildMetaTags({
    title: 'خدمة الونش الأكثر أماناً في دمياط - رفع الأثاث الاحترافي بضمان شامل',
    description: 'أفضل خدمة ونش متخصصة في دمياط لرفع الأثاث بأمان. معدات هيدروليكية حديثة، فريق مدرب، تأمين شامل. خبرة 8 سنوات في الشوارع الضيقة والمباني التراثية. خدمة 24/7.'
  });

  const seo = {
    title: seoData.title || 'خدمة الونش الأكثر أماناً في دمياط - رفع الأثاث الاحترافي',
    description: seoData.description || 'أفضل خدمة ونش متخصصة في دمياط لرفع الأثاث بأمان مطلق',
    keywords: Array.isArray(seoData.keywords) ? seoData.keywords : [
      'ونش دمياط', 'رفع أثاث دمياط', 'نقل عفش بالونش', 'ونش هيدروليكي', 
      'رفع أثاث آمن', 'ونش المباني العالية', 'ونش الشوارع الضيقة', 'خدمة ونش 24/7',
      'رفع أثاث تراثي', 'ونش احترافي', 'معدات رفع حديثة', 'تأمين الأثاث'
    ]
  };

  const jsonLd = [
    localBusinessLD({ cities: ['damietta'] })
  ];

  return {
    props: {
      seo,
      jsonLd
    }
  };
};


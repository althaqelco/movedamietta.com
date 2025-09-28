// صفحة عرض جميع الخدمات - Services Overview
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

interface ServicesProps {
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function ServicesPage({ services }: ServicesProps) {
  return (
    <>
      <Head>
        <title>خدمات نقل العفش - دمياط ودمياط الجديدة</title>
        <meta name="description" content="دليل شامل لخدمات نقل العفش في دمياط ودمياط الجديدة. نقل شقق، فلل، مكاتب، تغليف احترافي، ونش رفع، فك وتركيب. خبرة 8 سنوات، أسعار منافسة، ضمان شامل." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">دليل خدمات نقل العفش</span>
              <span className="block text-yellow-400">الشاملة في دمياط</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
              نقدم مجموعة متكاملة من خدمات نقل الأثاث والعفش المتخصصة في دمياط ودمياط الجديدة منذ 2015. من نقل الشقق والفلل إلى المكاتب التجارية، مع التغليف الاحترافي وخدمات الونش والفك والتركيب بأعلى معايير الجودة والأمان.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">12+</div>
                <div className="text-sm opacity-90">نوع خدمة مختلفة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-sm opacity-90">خدمة على مدار الساعة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-sm opacity-90">ضمان الجودة</div>
              </div>
            </div>
          </div>
        </section>

        {/* خدمات النقل الأساسية */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خدمات نقل العفش الأساسية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                خدماتنا الرئيسية التي تغطي جميع احتياجات نقل الأثاث والعفش في دمياط ودمياط الجديدة
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
              {services.slice(0, 4).map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-6 space-x-reverse">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl">{service.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="text-sm text-blue-600 font-semibold">
                        ← تفاصيل أكثر
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* الخدمات المتخصصة */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خدمات متخصصة ومتطورة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                خدمات إضافية متطورة تلبي جميع الاحتياجات الخاصة في عمليات النقل المعقدة والمتطلبات الفريدة
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">نقل المكاتب والشركات</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة متخصصة لنقل المكاتب التجارية والشركات مع تخطيط مسبق لتقليل فترة التوقف وضمان استمرارية العمل.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">نقل الفلل والقصور</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة VIP لنقل الفلل والقصور مع معاملة خاصة للتحف والقطع الثمينة وتنسيق مواعيد مرنة.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">نقل المحلات التجارية</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقل المحلات والمتاجر مع إعادة ترتيب البضائع والديكور في المكان الجديد حسب التصميم المطلوب.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">نقل المرافق الطبية</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة متخصصة لنقل العيادات والمستشفيات مع عناية خاصة للأجهزة الطبية الحساسة والمعقمة.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">نقل المكتبات والأرشيف</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقل خاص للكتب والوثائق المهمة مع تغليف مقاوم للرطوبة وترقيم منظم لسهولة إعادة الترتيب.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">خدمات الطوارئ</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة نقل عاجلة متاحة 24/7 للحالات الطارئة مع وقت استجابة أقل من ساعتين في دمياط.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* عملية النقل خطوة بخطوة */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                كيف تتم عملية نقل العفش؟
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                عملية منظمة ومدروسة من 7 خطوات لضمان نقل آمن وسلس لجميع ممتلكاتكم
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">الاستشارة والمعاينة</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  اتصال هاتفي لفهم احتياجاتكم ثم زيارة مجانية لمعاينة الموقع وتقدير الكمية والتكلفة بدقة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">التخطيط والجدولة</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  وضع خطة مفصلة للنقل مع تحديد الموعد المناسب وترتيب الفريق والمعدات اللازمة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">التغليف والحماية</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  تغليف جميع القطع بمواد عالية الجودة وحمايتها من الخدوش والكسر باستخدام أحدث التقنيات.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">الفك والتحضير</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  فك الأثاث القابل للفك بعناية مع توثيق طريقة التركيب وحفظ البراغي والقطع الصغيرة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">التحميل والنقل</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  تحميل منظم في الشاحنة مع تثبيت جميع القطع بأحزمة التثبيت والنقل بأمان إلى الوجهة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">6</span>
                </div>
                <h3 className="text-xl font-bold mb-4">التفريغ والترتيب</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  تفريغ حذر في المكان الجديد مع وضع كل قطعة في الغرفة المحددة لها حسب رغبة العميل.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">7</span>
                </div>
                <h3 className="text-xl font-bold mb-4">التركيب والتسليم</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  إعادة تركيب الأثاث المفكوك والتأكد من سلامة جميع القطع قبل التسليم النهائي للعميل.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-4">المتابعة والضمان</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  متابعة ما بعد الخدمة للتأكد من رضا العميل وتفعيل الضمان على جميع الخدمات المقدمة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* الأسعار والضمانات */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                أسعار تنافسية وضمانات شاملة
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                نقدم أفضل الأسعار في السوق مع ضمانات شاملة تحمي استثماركم وتضمن راحة بالكم
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4">أسعار شفافة</h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  لا توجد تكاليف خفية. جميع الأسعار واضحة ومحددة مسبقاً مع إمكانية التفاوض حسب حجم المشروع.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">ضمان شامل</h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  ضمان 100% على جميع الخدمات مع تأمين كامل ضد التلف والكسر وتعويض فوري في حالة الضرر.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-4">معاينة مجانية</h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  زيارة مجانية للموقع لتقدير دقيق للتكلفة مع استشارة مهنية حول أفضل الطرق للنقل.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">التزام بالمواعيد</h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  وصول الفريق في الوقت المحدد مع إنجاز العمل في المدة المتفق عليها أو تعويض عن التأخير.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة حول الخدمات */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                أسئلة شائعة حول خدماتنا
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات واضحة لأهم الأسئلة حول خدمات نقل الأثاث والعفش في دمياط
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">ما هي المناطق التي تغطونها في دمياط؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نغطي جميع مناطق محافظة دمياط بما في ذلك دمياط القديمة، دمياط الجديدة، رأس البر، كفر سعد، الروضة، فارسكور، وجميع القرى والمراكز التابعة للمحافظة. كما نقدم خدمات للمحافظات المجاورة حسب الطلب.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل تقدمون خدمة تخزين مؤقت للأثاث؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعم، لدينا مستودعات آمنة ومكيفة لتخزين الأثاث لفترات مؤقتة في حالة عدم جاهزية المكان الجديد. المستودعات محمية ضد الحريق والسرقة مع إمكانية المراقبة على مدار الساعة.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">كيف تحمون الأثاث من التلف أثناء النقل؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نستخدم مواد تغليف عالية الجودة مع تقنيات تثبيت متطورة داخل الشاحنات. كل قطعة يتم تغليفها بشكل منفصل وتثبيتها بأحزمة خاصة. بالإضافة إلى ذلك، فريقنا مدرب على التعامل مع القطع الحساسة والثمينة.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">هل يمكن تحديد موعد النقل في المساء أو العطلات؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نعم، نحن متاحون 24/7 بما في ذلك المساء والعطلات الرسمية. نتفهم أن ظروف العمل قد تتطلب النقل في أوقات غير تقليدية، لذلك نوفر مرونة كاملة في تحديد المواعيد مع إمكانية الحجز المسبق.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">ما هو المطلوب مني كعميل قبل يوم النقل؟</h3>
                <p className="text-gray-600 leading-relaxed">
                  نطلب منكم تفريغ الأدراج والخزائن من المحتويات الشخصية، فصل الأجهزة الكهربائية، وتحضير قائمة بالقطع الهشة أو الثمينة. سيقوم منسق الخدمة بإرسال قائمة تفصيلية قبل الموعد بيومين.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              جاهز لبدء مشروع نقل العفش؟
            </h2>
            <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر تنافسي مفصل لجميع خدماتنا. فريقنا المتخصص جاهز لمساعدتكم في كل خطوة من خطوات عملية النقل
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 space-x-reverse shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل الآن: 0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد الاستفسار عن خدماتكم" 
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

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const services = [
    {
      id: 'furniture-moving',
      title: 'نقل الأثاث والعفش السكني',
      description: 'خدمة نقل متكاملة للشقق والمنازل والفلل تشمل التغليف الاحترافي، الفك والتركيب، والنقل الآمن لجميع أنواع الأثاث من غرف النوم والصالونات إلى الأجهزة المنزلية والقطع الحساسة مع ضمان شامل ضد التلف.',
      icon: '🚛'
    },
    {
      id: 'packing',
      title: 'تغليف وحماية الأثاث',
      description: 'خدمة تغليف متخصصة باستخدام أجود مواد التغليف المقاومة للرطوبة والصدمات. كراتين مقواة عالية الجودة، فقاعات هوائية للحماية، أغطية بلاستيكية مقاومة للتمزق، وشرائط تثبيت قوية لضمان وصول أثاثكم بحالة مثالية.',
      icon: '📦'
    },
    {
      id: 'crane',
      title: 'خدمة الونش والرفع',
      description: 'خدمة رفع احترافية للأثاث من وإلى الطوابق العالية باستخدام أحدث معدات الونش الهيدروليكية بقدرات مختلفة تصل إلى 500 كجم. مناسبة للمناطق الضيقة والشوارع التراثية في دمياط القديمة مع التزام كامل بمعايير السلامة.',
      icon: '🏗️'
    },
    {
      id: 'assembly',
      title: 'فك وتركيب الأثاث المتخصص',
      description: 'فريق من الفنيين المهرة متخصص في فك وتركيب جميع أنواع الأثاث والأجهزة المنزلية. خبرة واسعة مع غرف النوم المودرن والكلاسيك، المطابخ الخشبية والمعدنية، الدواليب المنزلقة، وأجهزة التكييف مع ضمان التركيب السليم.',
      icon: '🔧'
    }
  ];

  return {
    props: {
      services
    }
  };
};
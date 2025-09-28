// صفحة من نحن - About Us
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>من نحن - شركة نقل عفش دمياط</title>
        <meta name="description" content="شركة نقل عفش دمياط الرائدة منذ 2015. أكثر من 8 سنوات خبرة في نقل الأثاث بدمياط ودمياط الجديدة. فريق محترف، أسعار منافسة، ضمان شامل. اتصل الآن!" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  من نحن
                  <span className="block text-blue-300 text-2xl lg:text-3xl mt-2">
                    شركة نقل عفش دمياط
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
                  نحن شركة رائدة في مجال نقل الأثاث والعفش في دمياط ودمياط الجديدة منذ أكثر من 5 سنوات
                </p>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/damietta-furniture-moving-company-worker-1.webp"
                  alt="فريق شركة نقل عفش دمياط"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">+500</div>
                    <div className="text-sm">عميل راضي</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  قصتنا
                </h2>
                <p className="text-xl text-gray-600">
                  رحلة من الثقة والاحترافية في خدمة أهل دمياط
                </p>
              </div>
              
              <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                <p className="text-lg mb-6">
                  تأسست شركتنا في عام <strong>2015</strong> على يد مجموعة من الخبراء في مجال نقل الأثاث الذين يحملون خبرة تزيد عن 15 عاماً في هذا المجال. بدأنا برؤية واضحة: تقديم خدمة نقل الأثاث الأكثر أماناً واحترافية في محافظة دمياط ومساعدة العائلات المصرية في الانتقال بسلاسة وراحة بال.
                </p>
                
                <p className="text-lg mb-6">
                  خلال 8 سنوات من العمل الجاد والتطوير المستمر، نجحنا في خدمة أكثر من <strong>5000 عميل</strong> في جميع أنحاء دمياط ودمياط الجديدة ورأس البر والمناطق المحيطة. نفتخر بأن 95% من عملائنا يعودون إلينا لخدمات إضافية أو ينصحون أصدقاءهم وأقاربهم بالتعامل معنا.
                </p>
                
                <p className="text-lg mb-6">
                  نؤمن بأن <strong>الثقة والشفافية</strong> هما أساس أي علاقة تجارية ناجحة، لذلك نضع رضا عملائنا في المقدمة الأولى من أولوياتنا. فريقنا المدرب والمؤهل يتعامل مع أثاثكم وممتلكاتكم بعناية فائقة كما لو كانت ممتلكاته الشخصية، ونضمن وصولها بأمان تام إلى وجهتها الجديدة دون أدنى خدش أو ضرر.
                </p>
                
                <p className="text-lg mb-6">
                  ما يميزنا عن غيرنا من شركات نقل العفش في دمياط هو فهمنا العميق لطبيعة المنطقة وخصائص المناطق المختلفة. نعرف جيداً التحديات التي تفرضها الشوارع الضيقة في دمياط القديمة، ونمتلك المعدات المناسبة للتعامل مع الأبراج العالية في دمياط الجديدة، ونقدر أهمية التوقيت في المناطق الريفية والقرى المجاورة.
                </p>
                
                <p className="text-lg">
                  اليوم، نحن بفخر <strong>الشركة الرائدة والأكثر ثقة</strong> في مجال نقل الأثاث والعفش بمحافظة دمياط، ونواصل الاستثمار في تطوير خدماتنا وتحديث معداتنا لنبقى دائماً في المقدمة ونلبي احتياجات عملائنا المتزايدة بأعلى معايير الجودة والاحترافية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قيمنا ومبادئنا
              </h2>
              <p className="text-xl text-gray-600">
                المبادئ التي نؤمن بها ونعمل بها يومياً
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الثقة والأمانة</h3>
                <p className="text-gray-600 leading-relaxed">
                  نتعامل مع ممتلكاتكم بأقصى درجات الأمانة والمسؤولية
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">السرعة والكفاءة</h3>
                <p className="text-gray-600 leading-relaxed">
                  ننجز المهام في الوقت المحدد بأعلى مستوى من الجودة
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">فريق محترف</h3>
                <p className="text-gray-600 leading-relaxed">
                  عمالة مدربة ومؤهلة للتعامل مع جميع أنواع الأثاث
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">أسعار عادلة</h3>
                <p className="text-gray-600 leading-relaxed">
                  أسعار تنافسية مع أفضل جودة خدمة في السوق
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">خدمة العملاء</h3>
                <p className="text-gray-600 leading-relaxed">
                  دعم ومتابعة مستمرة قبل وبعد الخدمة
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الابتكار والتطوير</h3>
                <p className="text-gray-600 leading-relaxed">
                  نطور خدماتنا باستمرار لمواكبة احتياجات العصر
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                أرقامنا تتحدث عن نفسها
              </h2>
              <p className="text-xl opacity-90">
                إنجازات حققناها بفضل ثقة عملائنا الكرام
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">+500</div>
                <div className="text-blue-200">عميل راضي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">+5</div>
                <div className="text-blue-200">سنوات خبرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-200">معدل الرضا</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">خدمة مستمرة</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                لماذا تختار شركتنا؟
              </h2>
              <p className="text-xl text-gray-600">
                الأسباب التي تجعلنا الخيار الأول لعملائنا في دمياط
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">تأمين شامل</h3>
                      <p className="text-gray-600">جميع أثاثكم مؤمن ضد أي أضرار محتملة أثناء النقل</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">مواعيد محددة</h3>
                      <p className="text-gray-600">نلتزم بالمواعيد المتفق عليها ونقدر وقتكم الثمين</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">معدات حديثة</h3>
                      <p className="text-gray-600">نستخدم أحدث الشاحنات والمعدات المتخصصة في نقل الأثاث</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">دعم مستمر</h3>
                      <p className="text-gray-600">خدمة عملاء متاحة 24/7 للإجابة على جميع استفساراتكم</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/damietta-moving-service-professional-2.webp"
                  alt="فريق محترف من شركة نقل عفش دمياط"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              مستعدون لخدمتكم
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              انضموا إلى مئات العملاء الراضين واستمتعوا بأفضل خدمة نقل عفش في دمياط
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                اتصل الآن: 01063374834
              </a>
              <Link 
                href="/quote" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                اطلب عرض سعر مجاني
              </Link>
            </div>
          </div>
        </section>

        {/* فريق العمل المحترف */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                فريق العمل المحترف
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                يتكون فريقنا من نخبة من الخبراء المتخصصين في نقل الأثاث والعفش، كل منهم يحمل سنوات من الخبرة والتدريب المهني
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">مديرو المشاريع</h3>
                <p className="text-gray-600 leading-relaxed">
                  فريق من مديري المشاريع ذوي الخبرة الواسعة في تنسيق وإدارة عمليات النقل المعقدة. يضمنون تنفيذ كل مشروع في الوقت المحدد وبأعلى معايير الجودة.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">فنيو التركيب</h3>
                <p className="text-gray-600 leading-relaxed">
                  فنيون متخصصون في فك وتركيب جميع أنواع الأثاث والأجهزة المنزلية. حاصلون على تدريب مكثف ويستخدمون أحدث الأدوات والتقنيات في عملهم.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚛</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">سائقو النقل</h3>
                <p className="text-gray-600 leading-relaxed">
                  سائقون محترفون يمتلكون خبرة واسعة في قيادة شاحنات النقل في شوارع دمياط المختلفة. يضمنون الوصول الآمن والسريع إلى جميع الوجهات.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">خبراء التغليف</h3>
                <p className="text-gray-600 leading-relaxed">
                  متخصصون في تغليف وحماية الأثاث والقطع الثمينة باستخدام أفضل مواد التغليف. يضمنون وصول ممتلكاتكم في حالة مثالية دون أدنى خدش.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">مشغلو الونش</h3>
                <p className="text-gray-600 leading-relaxed">
                  فريق متخصص في تشغيل معدات الونش والرافعات لرفع الأثاث من وإلى الطوابق العالية. مدربون على أعلى معايير الأمان والسلامة المهنية.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">منسقو الخدمة</h3>
                <p className="text-gray-600 leading-relaxed">
                  فريق خدمة العملاء المسؤول عن تنسيق المواعيد والمتابعة مع العملاء. متاحون 24/7 للرد على استفساراتكم وضمان حصولكم على أفضل خدمة ممكنة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* المعدات والأدوات المتطورة */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                أحدث المعدات والأدوات المتطورة
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                نستثمر باستمرار في أحدث المعدات والأدوات لضمان تقديم خدمة نقل عفش آمنة وفعالة تواكب أحدث التطورات التكنولوجية في هذا المجال
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚛</span>
                </div>
                <h3 className="text-xl font-bold mb-4">شاحنات النقل</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  أسطول من الشاحنات الحديثة بأحجام مختلفة (صغيرة، متوسطة، كبيرة) مجهزة بأنظمة تثبيت متطورة لحماية الأثاث أثناء النقل.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">معدات الونش</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  رافعات هيدروليكية حديثة بقدرات رفع مختلفة تصل إلى 500 كجم، مناسبة للمباني العالية والمساحات الضيقة في دمياط القديمة.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-4">أدوات التركيب</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  طقم كامل من الأدوات المتخصصة لفك وتركيب الأثاث، بما في ذلك المفاتيح الخاصة، المثاقب، ومفكات البراغي الكهربائية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-xl font-bold mb-4">مواد التغليف</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  أجود أنواع مواد التغليف: كراتين مقواة، فقاعات هوائية، ستريتش فيلم، بطانيات واقية، وأربطة تثبيت عالية الجودة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* الشهادات والإنجازات */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                شهادات وإنجازات تؤكد تميزنا
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                حصلنا على العديد من الشهادات والجوائز التي تؤكد مكانتنا الرائدة في مجال نقل العفش بدمياط
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold mb-2">أفضل شركة نقل عفش</h3>
                <p className="text-green-200 text-sm">دمياط 2023</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-bold mb-2">تقييم 5 نجوم</h3>
                <p className="text-green-200 text-sm">من 98% من العملاء</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold mb-2">شهادة الأمان</h3>
                <p className="text-green-200 text-sm">معتمدة دولياً</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-bold mb-2">عضوية الرابطة المهنية</h3>
                <p className="text-green-200 text-sm">لشركات النقل المصرية</p>
              </div>
            </div>
          </div>
        </section>

        {/* رؤيتنا للمستقبل */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                رؤيتنا للمستقبل
              </h2>
              
              <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed mb-12">
                <p className="text-lg mb-6">
                  نتطلع إلى المستقبل بطموح وثقة، ونعمل على توسيع نطاق خدماتنا لتشمل المزيد من المحافظات المصرية. هدفنا هو أن نصبح <strong>الشركة الرائدة في مجال نقل العفش على مستوى الجمهورية</strong> مع الحفاظ على نفس مستوى الجودة والاحترافية التي عرفنا بها في دمياط.
                </p>
                
                <p className="text-lg mb-6">
                  نعمل حالياً على تطوير <strong>تطبيق جوال متطور</strong> يتيح للعملاء طلب خدماتنا وتتبع عملية النقل في الوقت الفعلي، بالإضافة إلى <strong>نظام إدارة ذكي</strong> يضمن تحسين مسارات النقل وتقليل الأوقات والتكاليف.
                </p>
                
                <p className="text-lg">
                  كما نخطط لإضافة خدمات جديدة مثل <strong>التخزين المؤقت والدائم</strong>، و<strong>خدمات التنظيف ما بعد النقل</strong>، و<strong>استشارات تأثيث المنازل الجديدة</strong>، لنكون الشريك الوحيد الذي تحتاجونه في كل ما يتعلق بالانتقال والسكن.
                </p>
              </div>
              
              <div className="bg-blue-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">التزامنا معكم</h3>
                <p className="text-lg leading-relaxed">
                  نتعهد بمواصلة تقديم أفضل خدمة نقل عفش في دمياط، والحفاظ على ثقتكم التي منحتموها لنا طوال هذه السنوات. رضاكم هو هدفنا الأول وطموحاتكم هي دافعنا للتطور والنمو.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

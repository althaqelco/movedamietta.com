// صفحة دمياط الرئيسية - مركز الخدمات
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { EnhancedGeoSEO, GeoHeroImage, GeoImageGrid } from '@/components/seo';
import { localBusinessLD, serviceLD, combineJsonLd } from '@/lib/seo/jsonld';
import { buildCityHubTitle, buildCityHubDescription } from '@/lib/seo/meta';

interface DamiettaHubProps {
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

export default function DamiettaHub({ jsonLd, services, featuredImages }: DamiettaHubProps) {
  const city = 'damietta' as const;
  const title = buildCityHubTitle(city);
  const description = buildCityHubDescription(city);

  return (
    <>
      <EnhancedGeoSEO
        title={title}
        description={description}
        canonical="/damietta/"
        city={city}
        image="/images/damietta-furniture-moving-company-worker-1.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="block">أفضل شركة نقل عفش في</span>
                  <span className="block text-yellow-400">دمياط القديمة والتراثية</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  خدمة نقل أثاث متخصصة ومتطورة في دمياط القديمة والأحياء التراثية منذ 2015. نفهم طبيعة الشوارع الضيقة والمباني التراثية ونوفر حلول نقل مبتكرة مع فريق محلي خبير بخصائص المنطقة وتحدياتها الفريدة.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mt-6">
                  <div className="text-center bg-blue-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                    <div className="text-sm">عملية نقل في دمياط</div>
                  </div>
                  <div className="text-center bg-blue-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">8</div>
                    <div className="text-sm">سنوات خبرة محلية</div>
                  </div>
                  <div className="text-center bg-blue-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                    <div className="text-sm">خدمة متاحة دائماً</div>
                  </div>
                </div>
                
                {/* Trust Points */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>خبرة +10 سنوات في دمياط</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>تغليف احترافي آمن</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>تأمين شامل على العفش</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>فريق مدرب ومعتمد</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="tel:+201063374834"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 space-x-reverse"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>اتصل الآن</span>
                  </a>
                  <a
                    href="https://wa.me/201063374834"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 space-x-reverse"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>واتساب</span>
                  </a>
                  <Link 
                    href="/damietta/quote"
                    className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    طلب عرض سعر مجاني
                  </Link>
                </div>
              </div>

              <div className="lg:order-first">
                <GeoHeroImage
                  src="/images/damietta-furniture-moving-company-worker-1.webp"
                  city={city}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا في دمياط
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                نقدم جميع خدمات نقل الأثاث والعفش في دمياط بأعلى مستوى من الجودة والاحترافية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.url} className="group">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group-hover:scale-105 transition-transform duration-200">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <span>اعرف المزيد</span>
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أعمالنا في دمياط
              </h2>
              <p className="text-lg text-gray-600">
                شاهد عينة من أعمال نقل الأثاث التي قمنا بها في دمياط
              </p>
            </div>

            <GeoImageGrid
              images={featuredImages}
              city={city}
              columns={3}
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              لماذا نحن الاختيار الأمثل في دمياط؟
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "خبرة محلية عميقة",
                  description: "نعرف شوارع وأحياء دمياط جيداً، مما يضمن الوصول السريع والآمن لجميع المواقع",
                  icon: "🗺️"
                },
                {
                  title: "فريق مدرب ومحترف", 
                  description: "عمال مدربون على أعلى مستوى في فك وتركيب وتغليف جميع أنواع الأثاث والعفش",
                  icon: "👥"
                },
                {
                  title: "معدات حديثة وآمنة",
                  description: "سيارات مجهزة خصيصاً لنقل العفش مع ونش رفع لضمان الحماية الكاملة",
                  icon: "🚛"
                },
                {
                  title: "أسعار منافسة وشفافة",
                  description: "أسعار واضحة ومنافسة مع عدم وجود رسوم خفية، وإمكانية الحصول على عرض سعر مجاني",
                  icon: "💰"
                },
                {
                  title: "تأمين شامل",
                  description: "تأمين كامل على جميع قطع الأثاث والعفش ضد أي أضرار محتملة أثناء النقل",
                  icon: "🛡️"
                },
                {
                  title: "خدمة 24/7",
                  description: "متوفرون في جميع أيام الأسبوع لخدمتك في أي وقت، مع استجابة سريعة للطوارئ",
                  icon: "⏰"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أسئلة شائعة حول نقل العفش في دمياط
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "كم تكلفة نقل العفش في دمياط؟",
                  answer: "تختلف التكلفة حسب حجم العفش والمسافة وطبيعة الخدمة المطلوبة. نقدم عروض أسعار مجانية مخصصة حسب احتياجاتك."
                },
                {
                  question: "هل تقدمون خدمة التغليف؟",
                  answer: "نعم، نقدم خدمة تغليف احترافي لجميع قطع الأثاث والعفش باستخدام مواد عالية الجودة لضمان الحماية الكاملة."
                },
                {
                  question: "كم يستغرق نقل العفش داخل دمياط؟",
                  answer: "عادة ما يستغرق نقل العفش من 2-6 ساعات حسب حجم العفش وصعوبة الموقع. نحرص على إنجاز العمل بأسرع وقت ممكن."
                },
                {
                  question: "هل يوجد تأمين على العفش أثناء النقل؟",
                  answer: "نعم، نقدم تأمين شامل على جميع قطع الأثاث والعفش ضد أي أضرار قد تحدث أثناء عملية النقل."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              جاهز لنقل عفشك في دمياط؟
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              احصل على عرض سعر مجاني الآن واتركنا نتولى باقي الأمور
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+201063374834"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2 space-x-reverse"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل: 057-234-5678</span>
              </a>
              
              <a
                href="https://wa.me/201063374834"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2 space-x-reverse"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </section>

        {/* خصائص دمياط القديمة وتحديات النقل */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خبرتنا في دمياط القديمة والأحياء التراثية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نتميز بفهم عميق لطبيعة دمياط القديمة وتحدياتها الفريدة، من الشوارع الضيقة إلى المباني التراثية ذات التصميم الخاص
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">المباني التراثية</h3>
                <p className="text-gray-600 leading-relaxed">
                  خبرة واسعة في التعامل مع المنازل التراثية والقديمة في دمياط، مع فهم عميق لتحديات السلالم الضيقة والممرات المحدودة والأسقف المنخفضة.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛤️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الشوارع الضيقة</h3>
                <p className="text-gray-600 leading-relaxed">
                  حلول مبتكرة للتنقل في الشوارع الضيقة والأزقة التراثية، مع استخدام شاحنات صغيرة مخصصة ومعدات نقل يدوية عالية الجودة عند الحاجة.
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الونش المتخصص</h3>
                <p className="text-gray-600 leading-relaxed">
                  معدات ونش خاصة مصممة للمباني القديمة والمساحات الضيقة، مع فريق مدرب على التعامل الآمن مع النوافذ التراثية والشرفات الخشبية.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الأحياء الشعبية</h3>
                <p className="text-gray-600 leading-relaxed">
                  معرفة تفصيلية بأحياء دمياط الشعبية مثل البحر، السوق، الناصرية، وسيدي المتبولي، مع تقدير خاص للثقافة المحلية وعادات السكان.
                </p>
              </div>
              
              <div className="bg-red-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">التوقيتات المناسبة</h3>
                <p className="text-gray-600 leading-relaxed">
                  خبرة في تحديد أفضل الأوقات للنقل في الأحياء المزدحمة، مع تجنب أوقات الذروة والأسواق الشعبية وأوقات الصلاة في المساجد القريبة.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">العلاقات المحلية</h3>
                <p className="text-gray-600 leading-relaxed">
                  علاقات طيبة مع سكان دمياط القديمة وتفهم للعادات المحلية، مما يسهل عملية النقل ويضمن التعاون الكامل من الجيران والمجتمع المحيط.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* الخدمات المتخصصة في دمياط */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                خدمات نقل العفش المتخصصة في دمياط
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجات سكان دمياط القديمة والجديدة
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نقل المنازل التراثية</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة متخصصة لنقل عفش المنازل التراثية في دمياط القديمة، مع عناية خاصة بالأثاث الخشبي التراثي والقطع النحاسية والأواني الفخارية الدمياطية الأصيلة.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🚢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نقل من وإلى المركب</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة خاصة للمنازل المطلة على النيل والمركب التجارية، مع فهم لتحديات الوصول عبر الكورنيش والمناطق المحاذية للمياه مع اتخاذ احتياطات إضافية للرطوبة.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕌</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">النقل حول المساجد التاريخية</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خبرة خاصة في النقل في المناطق المحيطة بالمساجد التاريخية مثل جامع المعيني وأبو المعاطي، مع احترام أوقات الصلاة وتجنب الإزعاج للمصلين.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نقل المحلات في الأسواق الشعبية</h3>
                    <p className="text-gray-600 leading-relaxed">
                      خدمة متخصصة لنقل المحلات التجارية في أسواق دمياط التراثية، مع جدولة دقيقة لتجنب أوقات الذروة التجارية وضمان عدم تعطيل حركة البيع والشراء.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-blue-900 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">لماذا نحن الأفضل في دمياط؟</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>فريق محلي من أبناء دمياط</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>معرفة دقيقة بجميع شوارع وأزقة المدينة</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>معدات مخصصة للمساحات الضيقة</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>احترام العادات والتقاليد المحلية</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>أسعار مناسبة لأهل دمياط</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>خدمة عملاء باللهجة المحلية</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                      <div className="text-sm">عملية نقل ناجحة في دمياط القديمة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* شهادات العملاء من دمياط */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ماذا يقول عملاؤنا من دمياط؟
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                شهادات حقيقية من سكان دمياط الذين وثقوا بخدماتنا في نقل عفشهم
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
                  "فريق ممتاز وفهموا طبيعة بيتنا القديم في حي السوق. اتعاملوا بحذر شديد مع الأثاث الخشبي القديم والنحاس الدمياطي. شكراً لكم"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">أحمد محمود</div>
                  <div className="text-blue-300">حي السوق، دمياط</div>
                </div>
              </div>
              
              <div className="bg-blue-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "نقلوا عفش محلي من شارع التجار بدون أي مشاكل. عرفوا يتعاملوا مع زحمة السوق ونقلوا كل حاجة في وقتها المحدد. ممتازين جداً"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">محمد الشافعي</div>
                  <div className="text-blue-300">شارع التجار، دمياط</div>
                </div>
              </div>
              
              <div className="bg-blue-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "بيتنا في زقاق ضيق قوي في حي الناصرية والولاد عرفوا يدخلوا الأثاث من الشباك بالونش بمهارة عالية. خدمة راقية ومحترفة"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">فاطمة علي</div>
                  <div className="text-blue-300">حي الناصرية، دمياط</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<DamiettaHubProps> = async () => {
  // إنشاء JSON-LD للصفحة
  const businessJsonLd = localBusinessLD({
    cities: ['damietta'],
    services: [
      "نقل عفش شقق",
      "تغليف احترافي", 
      "فك وتركيب أثاث",
      "نقل مكاتب",
      "ونش رفع أثاث"
    ]
  });

  // بيانات الخدمات
  const services = [
    {
      name: "نقل عفش شقق وفلل",
      nameEn: "furniture-moving",
      description: "نقل آمن وسريع للأثاث من وإلى الشقق والفلل في دمياط مع ضمان الجودة",
      url: "/damietta/furniture-moving",
      icon: "🏠"
    },
    {
      name: "تغليف عفش احترافي",
      nameEn: "packing",
      description: "تغليف احترافي لجميع قطع الأثاث باستخدام أفضل المواد العازلة والواقية",
      url: "/damietta/packing",
      icon: "📦"
    },
    {
      name: "فك وتركيب أثاث",
      nameEn: "assembly",
      description: "خدمة فك وتركيب الأثاث بواسطة فنيين متخصصين لضمان السلامة والدقة",
      url: "/damietta/assembly",
      icon: "🔧"
    },
    {
      name: "نقل مكاتب وشركات",
      nameEn: "office-moving",
      description: "نقل احترافي للمكاتب والشركات مع الحفاظ على تنظيم المعدات والوثائق",
      url: "/damietta/office-moving",
      icon: "🏢"
    },
    {
      name: "ونش رفع أثاث",
      nameEn: "crane",
      description: "خدمة ونش رفع الأثاث للأدوار العالية بمعدات حديثة وآمنة",
      url: "/damietta/crane",
      icon: "🏗️"
    },
    {
      name: "كراتين ومستلزمات",
      nameEn: "boxes",
      description: "توفير كراتين عالية الجودة ومستلزمات التغليف والنقل",
      url: "/damietta/boxes",
      icon: "📋"
    }
  ];

  // الصور المميزة
  const featuredImages = [
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
    },
    {
      src: "/images/damietta-furniture-crane-operator-5.webp",
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

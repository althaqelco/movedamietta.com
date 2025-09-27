// صفحة خدمة نقل العفش في دمياط
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { EnhancedGeoSEO, GeoImageGrid, GeoVideoGrid } from '@/components/seo';
import { serviceLD, breadcrumbLD, faqLD, combineJsonLd } from '@/lib/seo/jsonld';
import { buildServicePageTitle, buildServicePageDescription } from '@/lib/seo/meta';

interface FurnitureMovingProps {
  jsonLd: object[];
  serviceImages: Array<{
    src: string;
    width: number;
    height: number;
  }>;
  serviceVideos: Array<{
    src: string;
    poster: string;
    name: string;
    description: string;
    duration: string;
  }>;
}

export default function DamiettaFurnitureMoving({ jsonLd, serviceImages, serviceVideos }: FurnitureMovingProps) {
  const city = 'damietta' as const;
  const service = 'نقل عفش';
  const title = buildServicePageTitle(service, city);
  const description = buildServicePageDescription(service, city);

  return (
    <>
      <EnhancedGeoSEO
        title={title}
        description={description}
        canonical="/damietta/furniture-moving"
        city={city}
        service={service}
        image="/images/damietta-apartment-furniture-moving.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
              <span>/</span>
              <Link href="/damietta" className="hover:text-blue-600">دمياط</Link>
              <span>/</span>
              <span className="text-gray-900">نقل عفش</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                نقل عفش في دمياط - خدمة احترافية وآمنة
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                أفضل شركة نقل أثاث وعفش في دمياط. نقل آمن وسريع لجميع أنواع الأثاث مع ضمان الجودة والوصول في المواعيد المحددة.
              </p>
              
              {/* Quick CTA */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+201063374834"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2 space-x-reverse"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>اتصل فوراً: 057-234-5678</span>
                </a>
                
                <a
                  href="https://wa.me/201063374834"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                >
                  واتساب مباشر
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  خدمة نقل العفش الأولى في دمياط
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  نحن نقدم خدمة نقل العفش والأثاث الأكثر احترافية في مدينة دمياط. فريقنا المتخصص يتمتع بخبرة واسعة في التعامل مع جميع أنواع الأثاث والعفش، من الشقق الصغيرة إلى الفلل الكبيرة.
                </p>
                
                <div className="space-y-4">
                  {[
                    "خبرة أكثر من 10 سنوات في مجال نقل العفش في دمياط",
                    "فريق مدرب على أعلى مستوى في التعامل مع الأثاث الثمين",
                    "سيارات مجهزة خصيصاً لنقل العفش بأمان تام",
                    "أسعار منافسة مع جودة عالية لا تقبل المساومة"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <GeoImageGrid
                  images={serviceImages.slice(0, 4)}
                  city={city}
                  columns={2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              لماذا نحن الأفضل في نقل العفش في دمياط؟
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "معرفة دمياط بالتفصيل",
                  description: "نعرف كل شارع وحي في دمياط، مما يضمن الوصول السريع والمباشر لموقعك دون أي تأخير غير مبرر",
                  icon: "🗺️"
                },
                {
                  title: "تغليف احترافي آمن",
                  description: "نستخدم أفضل مواد التغليف العالمية لحماية أثاثك من الخدوش والكسور أثناء النقل",
                  icon: "📦"
                },
                {
                  title: "فريق عمل مدرب",
                  description: "عمال مدربون على أعلى مستوى في فك وتركيب ونقل جميع أنواع الأثاث والعفش",
                  icon: "👥"
                },
                {
                  title: "سيارات مخصصة",
                  description: "أسطول من السيارات المجهزة خصيصاً لنقل العفش مع أنظمة تثبيت متقدمة",
                  icon: "🚛"
                },
                {
                  title: "أسعار شفافة",
                  description: "أسعار واضحة ومحددة مسبقاً بدون أي رسوم إضافية أو مفاجآت في النهاية",
                  icon: "💰"
                },
                {
                  title: "ضمان شامل",
                  description: "تأمين كامل على جميع قطع الأثاث ضد أي أضرار قد تحدث أثناء عملية النقل",
                  icon: "🛡️"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              خطوات عملية نقل العفش في دمياط
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "الاتصال والمعاينة",
                    description: "تواصل معنا هاتفياً أو عبر الواتساب، وسيقوم مندوبنا بزيارة الموقع لمعاينة العفش وتحديد احتياجاتك بدقة.",
                    duration: "30 دقيقة"
                  },
                  {
                    step: "2", 
                    title: "تحديد موعد النقل والسعر",
                    description: "بعد المعاينة، سنقدم لك عرض سعر نهائي وشفاف، مع تحديد موعد مناسب لك لبدء عملية النقل.",
                    duration: "فوري"
                  },
                  {
                    step: "3",
                    title: "التحضير والتغليف",
                    description: "يقوم فريقنا المختص بتغليف جميع قطع الأثاث والعفش بمواد عالية الجودة لضمان الحماية الكاملة.",
                    duration: "1-3 ساعات"
                  },
                  {
                    step: "4",
                    title: "فك الأثاث إذا لزم الأمر",
                    description: "فك الأثاث الذي يحتاج لذلك (غرف النوم، المطابخ، الدواليب) بعناية فائقة مع حفظ جميع القطع والمسامير.",
                    duration: "1-2 ساعات"
                  },
                  {
                    step: "5",
                    title: "التحميل والنقل",
                    description: "تحميل العفش في السيارة المخصصة مع ترتيب دقيق وتثبيت آمن، ثم النقل إلى الموقع الجديد.",
                    duration: "حسب المسافة"
                  },
                  {
                    step: "6",
                    title: "التفريغ وإعادة التركيب",
                    description: "تفريغ العفش في المكان الجديد وإعادة تركيب الأثاث المفكوك في الأماكن المطلوبة حسب رغبتك.",
                    duration: "1-3 ساعات"
                  }
                ].map((process, index) => (
                  <div key={index} className="flex items-start space-x-6 space-x-reverse">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {process.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{process.description}</p>
                      <span className="text-sm text-blue-600 font-semibold">
                        المدة المتوقعة: {process.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أسعار نقل العفش في دمياط
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold text-center">
                    عروض أسعار شفافة ومنافسة
                  </h3>
                  <p className="text-center text-blue-100 mt-2">
                    أسعار تبدأ من 500 جنيه حسب حجم العفش والمسافة
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        type: "شقة غرفة واحدة",
                        price: "500-800 جنيه",
                        includes: ["تغليف أساسي", "نقل داخل دمياط", "فك وتركيب بسيط"]
                      },
                      {
                        type: "شقة 2-3 غرف",
                        price: "800-1500 جنيه", 
                        includes: ["تغليف احترافي", "فك وتركيب كامل", "ضمان على النقل"]
                      },
                      {
                        type: "فيلا أو منزل كبير",
                        price: "1500-3000 جنيه",
                        includes: ["خدمة شاملة", "فريق كامل", "ونش رفع إذا لزم"]
                      }
                    ].map((package_, index) => (
                      <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          {package_.type}
                        </h4>
                        <div className="text-3xl font-bold text-blue-600 mb-4">
                          {package_.price}
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {package_.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center justify-center space-x-2 space-x-reverse">
                              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-gray-600 mb-4">
                      * الأسعار تقديرية وتحدد بدقة بعد معاينة العفش
                    </p>
                    <a
                      href="tel:+201063374834"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                    >
                      احصل على عرض سعر دقيق
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              شاهد أعمالنا في نقل العفش بدمياط
            </h2>
            
            <GeoVideoGrid
              videos={serviceVideos}
              city={city}
              columns={2}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أسئلة شائعة حول نقل العفش في دمياط
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "كم يستغرق نقل عفش شقة في دمياط؟",
                  answer: "يختلف الوقت حسب حجم الشقة. شقة غرفة واحدة تحتاج 3-4 ساعات، بينما الشقق الأكبر قد تحتاج 6-8 ساعات شاملة الفك والتركيب."
                },
                {
                  question: "هل تنقلون الأجهزة الكهربائية مثل الثلاجة والغسالة؟",
                  answer: "نعم، نقوم بنقل جميع الأجهزة الكهربائية مع تغليف خاص وحماية إضافية. نتولى أيضاً فصل وتوصيل الأجهزة إذا لزم الأمر."
                },
                {
                  question: "ماذا يحدث إذا تضرر الأثاث أثناء النقل؟",
                  answer: "نحن نوفر تأمين شامل على جميع قطع الأثاث. في حالة حدوث أي ضرر، نتكفل بالإصلاح أو التعويض حسب قيمة القطعة."
                },
                {
                  question: "هل تقدمون خدمة النقل في نفس اليوم؟",
                  answer: "نعم، في حالات الطوارئ نقدم خدمة النقل السريع في نفس اليوم، لكن ننصح بالحجز المسبق لضمان توفر الفريق والمعدات."
                },
                {
                  question: "هل تغطون جميع مناطق دمياط؟",
                  answer: "نعم، نغطي جميع أحياء ومناطق مدينة دمياط بما في ذلك المناطق القديمة والجديدة ورأس البر أيضاً."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              جاهز لنقل عفشك في دمياط؟
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              لا تتردد! اتصل بنا الآن واحصل على خدمة نقل عفش احترافية وآمنة
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+201063374834"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-xl transition-colors inline-flex items-center space-x-2 space-x-reverse"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل الآن: 057-234-5678</span>
              </a>
              
              <a
                href="https://wa.me/201063374834?text=أريد%20عرض%20سعر%20لنقل%20العفش%20في%20دمياط"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
              >
                واتساب للعرض المجاني
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<FurnitureMovingProps> = async () => {
  const city = 'damietta';
  const service = 'نقل عفش';
  const url = '/damietta/furniture-moving';
  
  // إنشاء JSON-LD للخدمة
  const serviceJsonLd = serviceLD({
    name: `${service} في دمياط`,
    description: 'خدمة نقل الأثاث والعفش الاحترافية في مدينة دمياط مع ضمان الأمان والجودة',
    city,
    url,
    priceRange: '500-3000',
    duration: 'PT3H',
    serviceType: 'MovingService'
  });

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = breadcrumbLD([
    { name: 'الرئيسية', url: '/' },
    { name: 'دمياط', url: '/damietta' },
    { name: 'نقل عفش', url: '/damietta/furniture-moving' }
  ]);

  // FAQ JSON-LD
  const faqJsonLd = faqLD([
    {
      question: "كم يستغرق نقل عفش شقة في دمياط؟",
      answer: "يختلف الوقت حسب حجم الشقة. شقة غرفة واحدة تحتاج 3-4 ساعات، بينما الشقق الأكبر قد تحتاج 6-8 ساعات شاملة الفك والتركيب."
    },
    {
      question: "هل تنقلون الأجهزة الكهربائية مثل الثلاجة والغسالة؟",
      answer: "نعم، نقوم بنقل جميع الأجهزة الكهربائية مع تغليف خاص وحماية إضافية. نتولى أيضاً فصل وتوصيل الأجهزة إذا لزم الأمر."
    }
  ]);

  // صور الخدمة
  const serviceImages = [
    { src: "/images/damietta-apartment-furniture-moving.webp", width: 400, height: 300 },
    { src: "/images/damietta-furniture-moving-company-worker-1.webp", width: 400, height: 300 },
    { src: "/images/furniture-moving-damietta-worker-loading-boxes.webp", width: 400, height: 300 },
    { src: "/images/damietta-moving-service-professional-2.webp", width: 400, height: 300 },
    { src: "/images/damietta-moving-company-van-inspection.webp", width: 400, height: 300 },
    { src: "/images/furniture-packing-boxes-damietta-family.webp", width: 400, height: 300 }
  ];

  // صور الخدمة (بدلاً من الفيديوهات)
  const serviceVideos = [
    {
      src: "/images/damietta-furniture-moving-company-worker-1.webp",
      poster: "/images/damietta-furniture-moving-company-worker-1.webp",
      name: "خدمة فك وتركيب الأثاث في دمياط",
      description: "شاهد كيف يقوم فريقنا المحترف بفك وتركيب الأثاث بعناية ودقة",
      duration: "PT2M30S"
    },
    {
      src: "/images/furniture-packing-service-damietta.webp",
      poster: "/images/furniture-packing-service-damietta.webp",
      name: "خدمة تغليف العفش في دمياط",
      description: "عملية تغليف احترافية لحماية الأثاث أثناء النقل",
      duration: "PT1M45S"
    }
  ];

  return {
    props: {
      jsonLd: combineJsonLd(serviceJsonLd, breadcrumbJsonLd, faqJsonLd),
      serviceImages,
      serviceVideos,
    },
  };
};

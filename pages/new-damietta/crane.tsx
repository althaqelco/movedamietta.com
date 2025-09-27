// صفحة خدمة ونش رفع الأثاث في دمياط الجديدة
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { EnhancedGeoSEO, GeoImageGrid } from '@/components/seo';
import { serviceLD, breadcrumbLD, faqLD, combineJsonLd } from '@/lib/seo/jsonld';
import { buildServicePageTitle, buildServicePageDescription } from '@/lib/seo/meta';

interface CraneServiceProps {
  jsonLd: object[];
  serviceImages: Array<{
    src: string;
    width: number;
    height: number;
  }>;
}

export default function NewDamiettaCraneService({ jsonLd, serviceImages }: CraneServiceProps) {
  const city = 'newDamietta' as const;
  const service = 'ونش رفع أثاث';
  const title = buildServicePageTitle(service, city);
  const description = buildServicePageDescription(service, city);

  return (
    <>
      <EnhancedGeoSEO
        title={title}
        description={description}
        canonical="/new-damietta/crane"
        city={city}
        service={service}
        image="/images/damietta-furniture-crane-operator-5.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
              <span>/</span>
              <Link href="/new-damietta" className="hover:text-blue-600">دمياط الجديدة</Link>
              <span>/</span>
              <span className="text-gray-900">ونش رفع أثاث</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                ونش رفع أثاث في دمياط الجديدة - خدمة آمنة وسريعة
              </h1>
              <p className="text-xl lg:text-2xl text-orange-100 mb-8">
                أفضل خدمة ونش رفع الأثاث في دمياط الجديدة بأحدث المعدات وأعلى معايير الأمان للمجمعات والأبراج السكنية الحديثة.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+201063374834"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                >
                  طوارئ ونش: 057-234-5678
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
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    خدمة ونش متخصصة للمجمعات السكنية الحديثة
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    نحن رواد خدمة ونش رفع الأثاث في دمياط الجديدة، متخصصون في التعامل مع الأبراج السكنية والمجمعات الحديثة. 
                    فريقنا مدرب على أعلى مستوى لضمان رفع وتنزيل الأثاث بأمان كامل.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "خبرة خاصة في المباني الحديثة والأبراج السكنية",
                      "معدات ونش متطورة مناسبة للمساحات الضيقة", 
                      "فريق مدرب على معايير الأمان العالمية",
                      "تنسيق مسبق مع إدارة المجمعات السكنية",
                      "تأمين شامل على جميع القطع المرفوعة"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <GeoImageGrid
                    images={serviceImages}
                    city={city}
                    columns={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أنواع خدمات الونش في دمياط الجديدة
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "ونش رفع للأبراج السكنية",
                  description: "رفع الأثاث للأدوار العالية في المجمعات الحديثة",
                  icon: "🏢",
                  price: "200-400 جنيه"
                },
                {
                  title: "ونش تنزيل من الشرفات", 
                  description: "تنزيل آمن للأثاث من شرفات المباني السكنية",
                  icon: "⬇️",
                  price: "150-300 جنيه"
                },
                {
                  title: "ونش نقل للشاحنات",
                  description: "رفع وتحميل الأثاث مباشرة في سيارات النقل",
                  icon: "🚛",
                  price: "100-200 جنيه"
                },
                {
                  title: "ونش طوارئ 24/7",
                  description: "خدمة ونش سريعة للحالات الطارئة في أي وقت",
                  icon: "🚨",
                  price: "300-500 جنيه"
                },
                {
                  title: "ونش للأجهزة الثقيلة",
                  description: "رفع الأجهزة الكبيرة والثقيلة بعناية خاصة",
                  icon: "📺",
                  price: "250-450 جنيه"
                },
                {
                  title: "ونش مع التغليف",
                  description: "خدمة شاملة تتضمن التغليف والرفع معاً",
                  icon: "📦",
                  price: "350-600 جنيه"
                }
              ].map((serviceType, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-5xl mb-4 text-center">{serviceType.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {serviceType.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">{serviceType.description}</p>
                  <div className="text-center">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {serviceType.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              معايير الأمان والسلامة
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "فحص دوري للمعدات",
                    description: "فحص شهري لجميع معدات الونش والحبال للتأكد من سلامتها",
                    icon: "🔍"
                  },
                  {
                    title: "تدريب مستمر للعمال",
                    description: "برامج تدريب دورية على أحدث تقنيات السلامة العالمية",
                    icon: "🎓"
                  },
                  {
                    title: "معدات الحماية الشخصية",
                    description: "خوذ وأحزمة أمان وقفازات واقية لجميع أفراد الفريق",
                    icon: "🦺"
                  },
                  {
                    title: "تأمين المنطقة",
                    description: "وضع حواجز وتحذيرات لحماية المارة أثناء العمل",
                    icon: "⚠️"
                  },
                  {
                    title: "خطة طوارئ جاهزة",
                    description: "خطط معتمدة للتعامل مع أي حالات طارئة أثناء العمل",
                    icon: "🚑"
                  },
                  {
                    title: "تأمين شامل",
                    description: "تأمين كامل على الأثاث والممتلكات ضد أي أضرار",
                    icon: "🛡️"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أسئلة شائعة حول خدمة الونش
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "هل تتعاملون مع جميع المجمعات السكنية في دمياط الجديدة؟",
                  answer: "نعم، لدينا خبرة واسعة مع جميع المجمعات السكنية ونقوم بالتنسيق المسبق مع الإدارات."
                },
                {
                  question: "ما هو الحد الأقصى للوزن الذي يمكن رفعه؟",
                  answer: "يمكن لمعداتنا المتطورة رفع أحمال تصل إلى 2000 كيلوجرام بأمان تام."
                },
                {
                  question: "هل تقدمون خدمة ونش في عطلة نهاية الأسبوع؟",
                  answer: "نعم، نعمل طوال أيام الأسبوع مع خدمة طوارئ 24/7 للحالات العاجلة."
                },
                {
                  question: "كم يستغرق رفع أثاث شقة كاملة؟",
                  answer: "يختلف حسب الكمية والارتفاع، لكن عادة من ساعة إلى 3 ساعات للشقة المتوسطة."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              احتاج ونش رفع في دمياط الجديدة؟
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              لا تتردد! اتصل بنا الآن للحصول على أسرع وأأمن خدمة ونش
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+201063374834"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-xl transition-colors"
              >
                اتصل فوراً: 057-234-5678
              </a>
              <a
                href="https://wa.me/201063374834?text=احتاج%20خدمة%20ونش%20في%20دمياط%20الجديدة"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
              >
                واتساب للونش
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<CraneServiceProps> = async () => {
  const city = 'newDamietta';
  const service = 'ونش رفع أثاث';
  const url = '/new-damietta/crane';
  
  // إنشاء JSON-LD للخدمة
  const serviceJsonLd = serviceLD({
    name: `${service} في دمياط الجديدة`,
    description: 'خدمة ونش رفع الأثاث الاحترافية في دمياط الجديدة للمجمعات والأبراج السكنية',
    city,
    url,
    priceRange: '100-600',
    serviceType: 'MovingService'
  });

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = breadcrumbLD([
    { name: 'الرئيسية', url: '/' },
    { name: 'دمياط الجديدة', url: '/new-damietta' },
    { name: 'ونش رفع أثاث', url: '/new-damietta/crane' }
  ]);

  // FAQ JSON-LD
  const faqJsonLd = faqLD([
    {
      question: "هل تتعاملون مع جميع المجمعات السكنية في دمياط الجديدة؟",
      answer: "نعم، لدينا خبرة واسعة مع جميع المجمعات السكنية ونقوم بالتنسيق المسبق مع الإدارات."
    },
    {
      question: "ما هو الحد الأقصى للوزن الذي يمكن رفعه؟",
      answer: "يمكن لمعداتنا المتطورة رفع أحمال تصل إلى 2000 كيلوجرام بأمان تام."
    }
  ]);

  // صور الخدمة
  const serviceImages = [
    { src: "/images/damietta-furniture-crane-operator-5.webp", width: 400, height: 300 },
    { src: "/images/new-damietta-moving-company-worker-4.webp", width: 400, height: 300 },
    { src: "/images/damietta-moving-company-van-inspection.webp", width: 400, height: 300 },
    { src: "/images/furniture-moving-damietta-worker-loading-boxes.webp", width: 400, height: 300 }
  ];

  return {
    props: {
      jsonLd: combineJsonLd(serviceJsonLd, breadcrumbJsonLd, faqJsonLd),
      serviceImages,
    },
  };
};

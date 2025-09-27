// صفحة خدمة تغليف العفش في دمياط
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { EnhancedGeoSEO, GeoImageGrid, GeoVideoGrid } from '@/components/seo';
import { serviceLD, breadcrumbLD, faqLD, combineJsonLd } from '@/lib/seo/jsonld';
import { buildServicePageTitle, buildServicePageDescription } from '@/lib/seo/meta';

interface PackingServiceProps {
  jsonLd: object[];
  serviceImages: Array<{
    src: string;
    width: number;
    height: number;
  }>;
}

export default function DamiettaPackingService({ jsonLd, serviceImages }: PackingServiceProps) {
  const city = 'damietta' as const;
  const service = 'تغليف عفش';
  const title = buildServicePageTitle(service, city);
  const description = buildServicePageDescription(service, city);

  return (
    <>
      <EnhancedGeoSEO
        title={title}
        description={description}
        canonical="/damietta/packing"
        city={city}
        service={service}
        image="/images/furniture-packing-service-damietta.webp"
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
              <span className="text-gray-900">تغليف عفش</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                تغليف عفش في دمياط - حماية احترافية للأثاث
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-8">
                نقدم خدمة تغليف العفش الأكثر احترافية في دمياط باستخدام أفضل المواد والتقنيات الحديثة لحماية أثاثك أثناء النقل.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+201063374834"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                >
                  اتصل للحجز: 057-234-5678
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
                    أفضل خدمة تغليف عفش في دمياط
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    نحن متخصصون في تغليف جميع أنواع الأثاث والعفش في دمياط باستخدام أحدث مواد التغليف العالمية. 
                    فريقنا المدرب يضمن حماية كاملة لأثاثك من الخدوش والكسور والرطوبة أثناء عملية النقل.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "مواد تغليف عالية الجودة مستوردة خصيصاً",
                      "فريق متخصص في تقنيات التغليف المتقدمة", 
                      "تغليف مخصص حسب نوع كل قطعة أثاث",
                      "ضمان كامل ضد التلف أثناء النقل"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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

        {/* Packing Materials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              مواد التغليف التي نستخدمها
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "فقاعات الهواء",
                  description: "لحماية القطع الحساسة والزجاج من الكسر والخدوش",
                  icon: "🛡️"
                },
                {
                  title: "كرتون مقوى عالي الجودة", 
                  description: "صناديق متنوعة الأحجام مقاومة للرطوبة والضغط",
                  icon: "📦"
                },
                {
                  title: "ورق تغليف ناعم",
                  description: "للأسطح المصقولة والمرايا دون ترك أي آثار",
                  icon: "📄"
                },
                {
                  title: "أشرطة لاصقة قوية",
                  description: "لضمان إحكام الإغلاق ومنع فتح العبوات",
                  icon: "🔒"
                },
                {
                  title: "فوم واقي",
                  description: "لحماية الزوايا والحواف الحادة من التلف",
                  icon: "🧽"
                },
                {
                  title: "أكياس مقاومة",
                  description: "للملابس والمنسوجات مقاومة للماء والغبار",
                  icon: "👕"
                }
              ].map((material, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{material.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أسعار تغليف العفش في دمياط
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">
                    باقات تغليف شاملة ومرنة
                  </h3>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        type: "تغليف أساسي",
                        price: "50-100 جنيه/قطعة",
                        includes: ["تغليف بسيط", "حماية أساسية", "مناسب للقطع العادية"]
                      },
                      {
                        type: "تغليف متقدم", 
                        price: "100-200 جنيه/قطعة",
                        includes: ["تغليف احترافي", "حماية مضاعفة", "للقطع المتوسطة القيمة"]
                      },
                      {
                        type: "تغليف فاخر",
                        price: "200-400 جنيه/قطعة",
                        includes: ["تغليف مخصص", "حماية كاملة", "للقطع الثمينة والأنتيك"]
                      }
                    ].map((package_, index) => (
                      <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          {package_.type}
                        </h4>
                        <div className="text-3xl font-bold text-green-600 mb-4">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              أسئلة شائعة حول تغليف العفش
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "هل يمكنني طلب خدمة التغليف فقط دون النقل؟",
                  answer: "نعم، نقدم خدمة التغليف منفصلة إذا كنت تريد تغليف العفش للتخزين أو لأي غرض آخر."
                },
                {
                  question: "كم يستغرق تغليف عفش شقة كاملة؟",
                  answer: "يختلف الوقت حسب حجم الشقة وكمية الأثاث. عادة من 2-4 ساعات للشقة العادية."
                },
                {
                  question: "هل تضمنون عدم تلف الأثاث بعد التغليف؟",
                  answer: "نعم، نقدم ضمان كامل على سلامة الأثاث المغلف طالما تم التعامل معه بحرص."
                },
                {
                  question: "هل تقدمون مواد التغليف للبيع؟",
                  answer: "نعم، نوفر جميع مواد التغليف للعملاء الذين يفضلون التغليف بأنفسهم."
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

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              احتاج تغليف احترافي لعفشك؟
            </h2>
            <p className="text-xl mb-8 text-green-100">
              اتصل بنا الآن واحصل على أفضل خدمة تغليف عفش في دمياط
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+201063374834"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-bold text-xl transition-colors"
              >
                اتصل: 057-234-5678
              </a>
              <a
                href="https://wa.me/201063374834?text=أريد%20خدمة%20تغليف%20عفش%20في%20دمياط"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
              >
                واتساب للتغليف
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<PackingServiceProps> = async () => {
  const city = 'damietta';
  const service = 'تغليف عفش';
  const url = '/damietta/packing';
  
  // إنشاء JSON-LD للخدمة
  const serviceJsonLd = serviceLD({
    name: `${service} في دمياط`,
    description: 'خدمة تغليف الأثاث والعفش الاحترافية في دمياط باستخدام أفضل المواد الواقية',
    city,
    url,
    priceRange: '50-400',
    serviceType: 'PackingService'
  });

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = breadcrumbLD([
    { name: 'الرئيسية', url: '/' },
    { name: 'دمياط', url: '/damietta' },
    { name: 'تغليف عفش', url: '/damietta/packing' }
  ]);

  // FAQ JSON-LD
  const faqJsonLd = faqLD([
    {
      question: "هل يمكنني طلب خدمة التغليف فقط دون النقل؟",
      answer: "نعم، نقدم خدمة التغليف منفصلة إذا كنت تريد تغليف العفش للتخزين أو لأي غرض آخر."
    },
    {
      question: "كم يستغرق تغليف عفش شقة كاملة؟",
      answer: "يختلف الوقت حسب حجم الشقة وكمية الأثاث. عادة من 2-4 ساعات للشقة العادية."
    }
  ]);

  // صور الخدمة
  const serviceImages = [
    { src: "/images/furniture-packing-service-damietta.webp", width: 400, height: 300 },
    { src: "/images/furniture-packing-boxes-damietta-family.webp", width: 400, height: 300 },
    { src: "/images/damietta-moving-service-professional-2.webp", width: 400, height: 300 },
    { src: "/images/damietta-furniture-moving-company-worker-1.webp", width: 400, height: 300 }
  ];

  return {
    props: {
      jsonLd: combineJsonLd(serviceJsonLd, breadcrumbJsonLd, faqJsonLd),
      serviceImages,
    },
  };
};

// صفحة خدمة تغليف العفش في دمياط الجديدة - Professional Packing Service
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { EnhancedGeoSEO } from '@/components/seo';
import { localBusinessLD, serviceLD } from '@/lib/seo/jsonld';

interface NewDamiettaPackingProps {
  jsonLd: any[];
}

export default function NewDamiettaPackingPage({ jsonLd }: NewDamiettaPackingProps) {
  return (
    <>
      <EnhancedGeoSEO
        title="خدمة تغليف العفش في دمياط الجديدة - تغليف احترافي"
        description="أفضل خدمة تغليف عفش في دمياط الجديدة. مواد عالية الجودة وتغليف احترافي. اتصل الآن للحصول على عرض مجاني."
        canonical="/new-damietta/packing"
        city="newDamietta"
        service="packing"
        image="/images/furniture-packing-service-damietta.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-green text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0">
            <video
              src="/videos/damietta-furniture-packing-sealing-service.mp4"
              className="w-full h-full object-cover opacity-20"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow-lg">
                  تغليف احترافي
                  <span className="block text-green-300 text-2xl lg:text-3xl mt-2">
                    في دمياط الجديدة
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
                  خدمة تغليف العفش الأكثر أماناً مع أجود أنواع مواد التغليف وأحدث التقنيات
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="tel:+201063374834" 
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    احجز خدمة التغليف
                  </a>
                  <a 
                    href="https://wa.me/201063374834?text=أريد خدمة تغليف في دمياط الجديدة" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
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
                  src="/images/furniture-packing-service-damietta.webp"
                  alt="خدمة تغليف العفش المحترفة في دمياط الجديدة"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">حماية أمان</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* خدمات التغليف */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                خدمات التغليف المتخصصة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نوفر جميع أنواع التغليف المحترف لحماية أثاثكم أثناء النقل والتخزين
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تغليف الكراتين</h3>
                <p className="text-gray-600 leading-relaxed">
                  كراتين قوية ومقاومة للرطوبة مع تبطين داخلي لحماية القطع الصغيرة
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تغليف الأجهزة</h3>
                <p className="text-gray-600 leading-relaxed">
                  تغليف خاص للأجهزة الكهربائية والإلكترونيات مع الحماية من الصدمات
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تغليف التحف</h3>
                <p className="text-gray-600 leading-relaxed">
                  تغليف فاخر للتحف والقطع الثمينة مع عناية خاصة وحماية مضاعفة
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تغليف الأثاث</h3>
                <p className="text-gray-600 leading-relaxed">
                  أغلفة واقية للأثاث الكبير مع استخدام البلاستيك الفقاعي والقماش
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تغليف الزجاج</h3>
                <p className="text-gray-600 leading-relaxed">
                  حماية خاصة للمرايا والزجاج والأواني الزجاجية مع الفصل التام
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ترقيم وتصنيف</h3>
                <p className="text-gray-600 leading-relaxed">
                  ترقيم دقيق لجميع الكراتين مع قائمة تفصيلية بالمحتويات
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* مواد التغليف */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أجود مواد التغليف
              </h2>
              <p className="text-xl text-gray-600">
                نستخدم أفضل أنواع مواد التغليف العالمية لضمان الحماية التامة
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">مواد التغليف المتميزة</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">البلاستيك الفقاعي</h4>
                      <p className="text-gray-600">حماية مضاعفة ضد الصدمات والاهتزازات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">كراتين مقواة</h4>
                      <p className="text-gray-600">كراتين عالية الجودة مقاومة للرطوبة والضغط</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">شرائط لاصقة قوية</h4>
                      <p className="text-gray-600">أشرطة لاصقة عالية الالتصاق لإحكام الغلق</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ورق التغليف</h4>
                      <p className="text-gray-600">ورق عالي الجودة لتغليف القطع الحساسة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">أقمشة واقية</h4>
                      <p className="text-gray-600">أقمشة خاصة لحماية الأثاث من الخدوش</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/furniture-packing-boxes-damietta-family.webp"
                  alt="عائلة تقوم بتغليف الأثاث مع فريق دمياط الجديدة"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* فيديو عملية التغليف */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  شاهد عملية التغليف المحترفة
                </h2>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  فيديو تفصيلي لعملية التغليف الاحترافي من البداية للنهاية مع استخدام أفضل المواد والتقنيات.
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    تغليف احترافي لكل قطعة
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    استخدام أجود المواد
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ترقيم وتصنيف دقيق
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ضمان الحماية الكاملة
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <video
                  src="/videos/damietta-furniture-packing-sealing-service.mp4"
                  className="w-full rounded-2xl shadow-2xl"
                  controls
                  poster="/images/furniture-packing-service-damietta.webp"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* أسعار التغليف */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أسعار تنافسية لخدمات التغليف
              </h2>
              <p className="text-xl text-gray-600">
                احصل على أفضل الأسعار مع أعلى جودة في السوق
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">حزمة أساسية</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">من 50 جنيه</div>
                <ul className="text-right space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>كراتين عادية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>شريط لاصق</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>ورق تغليف</span>
                  </li>
                </ul>
                <a href="tel:+201063374834" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold btn-hover inline-block">
                  اختر هذه الحزمة
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  الأكثر شعبية
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">حزمة متقدمة</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">من 100 جنيه</div>
                <ul className="text-right space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>كراتين مقواة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>بلاستيك فقاعي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>أقمشة واقية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>ترقيم الكراتين</span>
                  </li>
                </ul>
                <a href="tel:+201063374834" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold btn-hover inline-block">
                  اختر هذه الحزمة
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">حزمة فاخرة</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">من 200 جنيه</div>
                <ul className="text-right space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>أجود أنواع الكراتين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>حماية مضاعفة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>تغليف التحف</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>قائمة تفصيلية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>ضمان شامل</span>
                  </li>
                </ul>
                <a href="tel:+201063374834" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold btn-hover inline-block">
                  اختر هذه الحزمة
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section className="py-16 gradient-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              احجز خدمة التغليف الآن
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              تواصل معنا واحصل على استشارة مجانية وعرض سعر تنافسي لخدمة التغليف في دمياط الجديدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل الآن: 0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد خدمة تغليف في دمياط الجديدة" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
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

export const getStaticProps: GetStaticProps<NewDamiettaPackingProps> = async () => {
  const jsonLd = [
    localBusinessLD({ cities: ['newDamietta'] }),
    serviceLD({
      name: 'خدمة تغليف العفش في دمياط الجديدة',
      description: 'خدمة تغليف احترافي للأثاث والعفش باستخدام أجود المواد وأحدث التقنيات',
      serviceType: 'PackingService',
      city: 'newDamietta',
      url: '/new-damietta/packing'
    })
  ];

  return {
    props: {
      jsonLd
    }
  };
};


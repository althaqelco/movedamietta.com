// صفحة خدمة نقل العفش في دمياط الجديدة - Furniture Moving Service
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { EnhancedGeoSEO } from '@/components/seo';
import { localBusinessLD, serviceLD } from '@/lib/seo/jsonld';

interface NewDamiettaFurnitureMovingProps {
  jsonLd: any[];
}

export default function NewDamiettaFurnitureMovingPage({ jsonLd }: NewDamiettaFurnitureMovingProps) {
  return (
    <>
      <EnhancedGeoSEO
        title="نقل أثاث دمياط الجديدة - أفضل شركة نقل عفش"
        description="أفضل شركة نقل أثاث في دمياط الجديدة. خدمة احترافية مع الضمان الشامل والتأمين. اتصل الآن للحصول على عرض مجاني."
        canonical="/new-damietta/furniture-moving"
        city="newDamietta"
        service="furniture-moving"
        image="/images/new-damietta-moving-company-worker-4.webp"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-blue text-white overflow-hidden">
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
                  نقل أثاث احترافي
                  <span className="block text-blue-300 text-2xl lg:text-3xl mt-2">
                    في دمياط الجديدة
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
                  خدمة نقل الأثاث الأكثر ثقة في دمياط الجديدة مع الضمان الشامل والتأمين الكامل
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="tel:+201063374834" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    احجز الآن
                  </a>
                  <a 
                    href="https://wa.me/201063374834?text=أريد نقل أثاث في دمياط الجديدة" 
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
                  src="/images/new-damietta-moving-company-worker-4.webp"
                  alt="عامل شركة نقل العفش في دمياط الجديدة"
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

        {/* خدمات النقل */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                خدمات نقل العفش المتكاملة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نوفر جميع خدمات نقل الأثاث في دمياط الجديدة بأعلى معايير الجودة والاحترافية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">نقل الشقق</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقل محتويات الشقق والمنازل بالكامل مع الفك والتركيب والتغليف المحترف
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">نقل الفلل</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة نقل الفلل الكاملة مع فريق كبير ومعدات متخصصة للنقل السريع والآمن
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">نقل المكاتب</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقل المكاتب والشركات مع الحفاظ على أجهزة الكمبيوتر والوثائق المهمة
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تأمين شامل</h3>
                <p className="text-gray-600 leading-relaxed">
                  تأمين شامل على جميع المنقولات مع ضمان التعويض في حالة الأضرار
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">سرعة التنفيذ</h3>
                <p className="text-gray-600 leading-relaxed">
                  التزام بالمواعيد المحددة مع خدمة النقل السريع في نفس اليوم
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">خدمة ممتازة</h3>
                <p className="text-gray-600 leading-relaxed">
                  خدمة عملاء متميزة مع متابعة مستمرة لضمان رضاكم الكامل
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* معرض أعمال النقل */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أحدث مشاريع نقل العفش
              </h2>
              <p className="text-xl text-gray-600">
                صور من أحدث أعمالنا في نقل العفش في دمياط الجديدة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/images/damietta-apartment-furniture-moving.webp"
                  alt="نقل أثاث الشقق في دمياط الجديدة"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">نقل شقة كاملة</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/images/furniture-moving-damietta-worker-loading-boxes.webp"
                  alt="تحميل الصناديق أثناء النقل في دمياط الجديدة"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">تحميل احترافي</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/images/ras-el-bar-furniture-moving-expert-3.webp"
                  alt="خبير نقل الأثاث في منطقة رأس البر"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">خبير معتمد</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* عملية النقل بالفيديو */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  شاهد عملية النقل المحترفة
                </h2>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  فيديو يوضح مراحل عملية نقل العفش من التغليف إلى التسليم مع أعلى معايير الجودة والحماية.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">المعاينة والتقدير</h4>
                      <p className="text-gray-300">تقدير دقيق للكمية والوقت المطلوب</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">التغليف المحترف</h4>
                      <p className="text-gray-300">حماية كاملة لجميع القطع</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">النقل الآمن</h4>
                      <p className="text-gray-300">نقل بأحدث الشاحنات المجهزة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">التسليم والتركيب</h4>
                      <p className="text-gray-300">تسليم وتركيب في المكان الجديد</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <video
                  src="/videos/damietta-commercial-moving-service-preparation.mp4"
                  className="w-full rounded-2xl shadow-2xl"
                  controls
                  poster="/images/new-damietta-moving-company-worker-4.webp"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* احصائيات مذهلة */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أرقامنا تتحدث عن نفسها
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-semibold">عملية نقل ناجحة</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 font-semibold">معدل رضا العملاء</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">خدمة مستمرة</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg card-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600 font-semibold">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section className="py-16 gradient-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              احجز خدمة نقل العفش الآن
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              تواصل معنا الآن واحصل على عرض سعر مجاني لخدمة نقل العفش في دمياط الجديدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>اتصل الآن: 0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد نقل أثاث في دمياط الجديدة" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>واتساب للعرض المجاني</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<NewDamiettaFurnitureMovingProps> = async () => {
  const jsonLd = [
    localBusinessLD({ cities: ['newDamietta'] }),
    serviceLD({
      name: 'نقل أثاث في دمياط الجديدة',
      description: 'خدمة نقل الأثاث والعفش الاحترافية مع التغليف والتأمين الشامل',
      serviceType: 'MovingService',
      city: 'newDamietta',
      url: '/new-damietta/furniture-moving'
    })
  ];

  return {
    props: {
      jsonLd
    }
  };
};


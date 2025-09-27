// صفحة التواصل مع Google Maps
import Head from 'next/head';
import { GoogleMapsEmbed, GoogleMapsCard } from '@/components/ui';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>اتصل بنا - شركة نقل عفش دمياط</title>
        <meta name="description" content="تواصل مع شركة نقل عفش دمياط. خدمة عملاء متاحة 24/7. الهاتف: 01063374834" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              اتصل بنا
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا الآن للحصول على استشارة مجانية
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div className="text-center lg:text-right">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    معلومات التواصل
                  </h2>
                  <p className="text-xl text-gray-600">
                    يسعدنا التواصل معكم في أي وقت
                  </p>
                </div>

                <div className="grid gap-6">
                  {/* Phone */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg card-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">الهاتف</h3>
                        <a href="tel:+201063374834" className="text-lg text-blue-600 hover:text-blue-800 font-semibold">
                          01063374834
                        </a>
                        <p className="text-gray-500 text-sm">متاح 24/7</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg card-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">واتساب</h3>
                        <a href="https://wa.me/201063374834" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 hover:text-green-800 font-semibold">
                          01063374834
                        </a>
                        <p className="text-gray-500 text-sm">رد فوري</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg card-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">البريد الإلكتروني</h3>
                        <a href="mailto:info@movedamietta.com" className="text-lg text-blue-600 hover:text-blue-800 font-semibold">
                          info@movedamietta.com
                        </a>
                        <p className="text-gray-500 text-sm">رد خلال 24 ساعة</p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg card-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">مواعيد العمل</h3>
                        <div className="space-y-1 text-gray-600">
                          <div>الاثنين - الخميس: 8:00 - 18:00</div>
                          <div>الجمعة: 8:00 - 17:00</div>
                          <div>السبت: 8:00 - 16:00</div>
                          <div className="text-green-600 font-semibold">الطوارئ: 24/7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <GoogleMapsCard />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              جاهز للمساعدة
            </h2>
            <p className="text-xl mb-8 opacity-90">
              فريقنا المتخصص جاهز لمساعدتكم في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 btn-hover"
              >
                اتصل الآن
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد الاستفسار عن خدماتكم" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover"
              >
                واتساب الآن
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// أسفل الصفحة مع معلومات الاتصال والروابط
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cities = [
    { name: 'دمياط', href: '/damietta' },
    { name: 'دمياط الجديدة', href: '/new-damietta' }
  ];

  const services = [
    { name: 'نقل عفش', href: '/damietta/furniture-moving' },
    { name: 'تغليف عفش', href: '/damietta/packing' },
    { name: 'فك وتركيب أثاث', href: '/damietta/assembly' },
    { name: 'نقل مكاتب', href: '/damietta/office-moving' },
    { name: 'ونش رفع أثاث', href: '/damietta/crane' },
    { name: 'كراتين ومستلزمات', href: '/damietta/boxes' }
  ];

  const quickLinks = [
    { name: 'من نحن', href: '/about' },
    { name: 'اتصل بنا', href: '/contact' },
    { name: 'عرض سعر مجاني', href: '/quote' },
    { name: 'خدمة العملاء', href: '/support' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'سياسة الخصوصية', href: '/privacy' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            جاهز لنقل عفشك بأمان واحترافية؟
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            اتصل بنا الآن واحصل على عرض سعر مجاني وخدمة متميزة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+201063374834"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2 space-x-reverse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>اتصل الآن: 0106-337-4834</span>
            </a>
            <a
              href="https://wa.me/201063374834"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2 space-x-reverse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* معلومات الشركة */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🚛</span>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold">شركة نقل عفش دمياط</h3>
                  <p className="text-gray-400 text-sm">خدمة احترافية وآمنة</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                نحن أفضل شركة نقل أثاث وعفش في دمياط ودمياط الجديدة. 
                نقدم خدمات متكاملة بأعلى مستوى من الجودة والاحترافية مع ضمان الأمان التام.
              </p>

              {/* مواقع التواصل الاجتماعي */}
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="https://www.facebook.com/damiettamoving"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  title="فيسبوك"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/damiettamoving"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  title="انستجرام"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.523.131 4.693.26 3.9.433c-.842.193-1.55.463-2.262 1.175C.926 2.32.656 3.028.463 3.87.29 4.663.161 5.493.102 6.726.043 7.959.03 8.366.03 12.017c0 3.651.013 4.058.072 5.291.059 1.233.189 2.063.361 2.856.194.842.464 1.55 1.176 2.262.712.712 1.42.982 2.262 1.176.793.172 1.623.301 2.856.36 1.233.059 1.64.072 5.291.072 3.651 0 4.058-.013 5.291-.072 1.233-.059 2.063-.189 2.856-.361.842-.194 1.55-.464 2.262-1.176.712-.712.982-1.42 1.176-2.262.172-.793.301-1.623.36-2.856.059-1.233.072-1.64.072-5.291 0-3.651-.013-4.058-.072-5.291-.059-1.233-.189-2.063-.361-2.856-.194-.842-.464-1.55-1.176-2.262-.712-.712-1.42-.982-2.262-1.176-.793-.172-1.623-.301-2.856-.36C16.075.043 15.668.03 12.017.03zM12.017 2.15c3.582 0 4.007.014 5.417.072.877.04 1.346.187 1.663.31.418.163.717.358 1.031.671.314.314.508.613.671 1.031.123.317.27.786.31 1.663.058 1.41.072 1.835.072 5.417 0 3.582-.014 4.007-.072 5.417-.04.877-.187 1.346-.31 1.663-.163.418-.358.717-.671 1.031-.314.314-.613.508-1.031.671-.317.123-.786.27-1.663.31-1.41.058-1.835.072-5.417.072-3.582 0-4.007-.014-5.417-.072-.877-.04-1.346-.187-1.663-.31-.418-.163-.717-.358-1.031-.671-.314-.314-.508-.613-.671-1.031-.123-.317-.27-.786-.31-1.663-.058-1.41-.072-1.835-.072-5.417 0-3.582.014-4.007.072-5.417.04-.877.187-1.346.31-1.663.163-.418.358-.717.671-1.031.314-.314.613-.508 1.031-.671.317-.123.786-.27 1.663-.31 1.41-.058 1.835-.072 5.417-.072z"/>
                    <path d="M12.017 5.838c-3.403 0-6.179 2.776-6.179 6.179 0 3.403 2.776 6.179 6.179 6.179 3.403 0 6.179-2.776 6.179-6.179 0-3.403-2.776-6.179-6.179-6.179zm0 10.179c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/201063374834"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                  title="واتساب"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* معلومات الاتصال */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">معلومات الاتصال</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-right">
                    <div className="font-semibold">العنوان</div>
                    <div className="text-gray-300">شارع الجمهورية، وسط البلد، دمياط 34511</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div className="text-right">
                    <div className="font-semibold">الهاتف</div>
                    <a href="tel:+201063374834" className="text-gray-300 hover:text-white transition-colors">
                      0106-337-4834
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <div className="text-right">
                    <div className="font-semibold">واتساب</div>
                    <a href="https://wa.me/201063374834" className="text-gray-300 hover:text-white transition-colors">
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div className="text-right">
                    <div className="font-semibold">البريد الإلكتروني</div>
                    <a href="mailto:info@movedamietta.com" className="text-gray-300 hover:text-white transition-colors">
                      info@movedamietta.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-right">
                    <div className="font-semibold">موقعنا على الخريطة</div>
                    <a href="https://maps.google.com/?cid=1176256325850218727" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      عرض في Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div className="text-right">
                    <div className="font-semibold">مواعيد العمل</div>
                    <div className="text-gray-300">
                      <div>السبت - الخميس: 8:00 ص - 6:00 م</div>
                      <div>الجمعة: 8:00 ص - 5:00 م</div>
                      <div className="text-green-400 font-semibold">⏰ خدمة طوارئ 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* خدماتنا */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">خدماتنا</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-700">
                <h4 className="font-semibold mb-2">المدن التي نخدمها:</h4>
                <ul className="space-y-1">
                  {cities.map((city, index) => (
                    <li key={index}>
                      <Link
                        href={city.href}
                        className="text-gray-300 hover:text-white hover:underline transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* روابط سريعة */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">روابط مهمة</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-700">
                <h4 className="font-semibold mb-2">خدمات إضافية:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• تخزين مؤقت للأثاث</li>
                  <li>• تنظيف ما بعد النقل</li>
                  <li>• خدمة التقييم والمعاينة المجانية</li>
                  <li>• استشارة فنية مجانية</li>
                  <li>• خدمة طوارئ 24 ساعة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between items-center text-center md:text-right">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} شركة نقل عفش دمياط. جميع الحقوق محفوظة.
            </div>
            <div className="flex justify-center md:justify-end space-x-4 space-x-reverse text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                شروط الاستخدام
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-white transition-colors"
              >
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

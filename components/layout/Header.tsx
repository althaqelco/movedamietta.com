<<<<<<< HEAD
// رأس صفحة مبسط ومحسن للأجهزة
import { useState, useEffect } from 'react';
=======
// رأس الصفحة الرئيسي مع التنقل والروابط الداخلية
import { useState } from 'react';
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const router = useRouter();

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      
      if (isMenuOpen && menu && button && 
          !menu.contains(event.target as Node) && 
          !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const mainServices = [
    { name: 'نقل عفش', href: '/services', icon: '🚚' },
    { name: 'ونش رفع', href: '/services', icon: '🏗️' },
    { name: 'تغليف عفش', href: '/services', icon: '📦' }
  ];

  const isActivePath = (path: string) => {
    return router.asPath === path || router.asPath.startsWith(path + '/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* شريط معلومات مبسط */}
      <div className="bg-blue-600 text-white py-2 lg:py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-3 space-x-reverse">
              <a 
                href="tel:+201063374834" 
                className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
                aria-label="اتصل بنا"
              >
                <span className="text-lg">📞</span>
                <span className="hidden sm:inline">0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-green-200 transition-colors"
                aria-label="واتساب"
              >
                <span className="text-lg">💬</span>
                <span className="hidden sm:inline">واتساب</span>
              </a>
            </div>
            <div className="hidden md:block text-sm">
              <span>خدمة 24/7 - نقل آمن ومحترف</span>
=======
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();

  const cities = [
    { name: 'دمياط', href: '/damietta', nameEn: 'damietta' },
    { name: 'دمياط الجديدة', href: '/new-damietta', nameEn: 'new-damietta' }
  ];

  const services = [
    { name: 'نقل عفش', href: 'furniture-moving', icon: '🏠' },
    { name: 'تغليف عفش', href: 'packing', icon: '📦' },
    { name: 'فك وتركيب', href: 'assembly', icon: '🔧' },
    { name: 'نقل مكاتب', href: 'office-moving', icon: '🏢' },
    { name: 'ونش رفع', href: 'crane', icon: '🏗️' },
    { name: 'كراتين', href: 'boxes', icon: '📋' }
  ];

  const isActivePath = (path: string) => {
    return router.asPath.startsWith(path);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* شريط المعلومات العلوي */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 space-x-reverse">
              <a 
                href="tel:+201063374834" 
                className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>0106-337-4834</span>
              </a>
              <a 
                href="https://wa.me/201063374834" 
                className="flex items-center space-x-2 space-x-reverse hover:text-green-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>واتساب</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <span>⏰ خدمة 24/7</span>
              <span>🚛 نقل سريع وآمن</span>
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* شريط التنقل المبسط */}
      <nav className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          {/* الشعار المبسط */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <span className="text-white font-bold text-lg lg:text-xl">🚛</span>
            </div>
            <div className="text-right">
              <h1 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                نقل عفش دمياط
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">خدمة احترافية وآمنة</p>
            </div>
          </Link>

          {/* قائمة التنقل المبسطة - Desktop & Tablet */}
          <div className="hidden md:flex items-center tablet-spacing space-x-6 xl:space-x-8 space-x-reverse">
            <Link 
              href="/" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                router.pathname === '/' 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
=======
      {/* شريط التنقل الرئيسي */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* الشعار */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🚛</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-900">شركة نقل عفش دمياط</h1>
              <p className="text-sm text-gray-600">خدمة احترافية وآمنة</p>
            </div>
          </Link>

          {/* قائمة التنقل الرئيسية - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {/* الرئيسية */}
            <Link 
              href="/" 
              className={`text-lg font-semibold transition-colors ${
                router.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
              }`}
            >
              الرئيسية
            </Link>

<<<<<<< HEAD
            <Link 
              href="/services" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                isActivePath('/services') || isActivePath('/damietta') || isActivePath('/new-damietta')
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              الخدمات
            </Link>

            <Link 
              href="/about" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                router.pathname === '/about' 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
=======
            {/* المدن */}
            <div className="relative" onMouseLeave={() => setIsCitiesOpen(false)}>
              <button
                onMouseEnter={() => setIsCitiesOpen(true)}
                className={`text-lg font-semibold transition-colors flex items-center space-x-1 space-x-reverse ${
                  cities.some(city => isActivePath(city.href)) 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>المدن</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isCitiesOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {cities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      className={`block px-4 py-2 text-right hover:bg-blue-50 transition-colors ${
                        isActivePath(city.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      <div className="font-semibold">{city.name}</div>
                      <div className="text-sm text-gray-500">جميع خدمات النقل</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* الخدمات */}
            <div className="relative" onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1 space-x-reverse"
              >
                <span>الخدمات</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {/* رابط جميع الخدمات */}
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-right hover:bg-blue-50 transition-colors border-b mb-2"
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-lg">📋</span>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">جميع الخدمات</div>
                        <div className="text-xs text-gray-500">عرض شامل لكل خدماتنا</div>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {services.map((service) => (
                      <div key={service.href} className="space-y-1">
                        {cities.map((city) => (
                          <Link
                            key={`${city.nameEn}-${service.href}`}
                            href={`/${city.nameEn}/${service.href}`}
                            className="block px-3 py-2 rounded hover:bg-blue-50 transition-colors text-right"
                          >
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <span className="text-lg">{service.icon}</span>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-900">{service.name}</div>
                                <div className="text-xs text-gray-500">{city.name}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* من نحن */}
            <Link 
              href="/about" 
              className={`text-lg font-semibold transition-colors ${
                router.pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
              }`}
            >
              من نحن
            </Link>

<<<<<<< HEAD
            <Link 
              href="/gallery" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                router.pathname === '/gallery' 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
=======
            {/* معرض الأعمال */}
            <Link 
              href="/gallery" 
              className={`text-lg font-semibold transition-colors ${
                router.pathname === '/gallery' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
              }`}
            >
              معرض الأعمال
            </Link>

<<<<<<< HEAD
            <Link 
              href="/contact" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                router.pathname === '/contact' 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
=======
            {/* اتصل بنا */}
            <Link 
              href="/contact" 
              className={`text-lg font-semibold transition-colors ${
                router.pathname === '/contact' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
              }`}
            >
              اتصل بنا
            </Link>
          </div>

<<<<<<< HEAD
          {/* أزرار العمل المبسطة */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse">
            <a
              href="tel:+201063374834"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl font-semibold transition-all hover:scale-105 shadow-md text-sm"
              aria-label="اتصل الآن"
            >
              📞 اتصل الآن
            </a>
            <Link
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold transition-all hover:scale-105 shadow-md text-sm"
            >
              💰 عرض سعر
            </Link>
          </div>

          {/* زر القائمة المحسن للموبايل مع touch targets */}
          <button
            id="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mobile-tap-target p-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-100"
            aria-label="فتح/إغلاق القائمة"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'translate-y-2.5'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* القائمة المبسطة للموبايل مع touch optimization */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-gradient-to-b from-gray-50 to-white rounded-b-2xl shadow-lg">
            <div className="space-y-3 px-2">
              {/* الروابط الرئيسية مع touch targets */}
              <div className="space-y-2">
                {[
                  { label: 'الرئيسية', href: '/', icon: '🏠' },
                  { label: 'الخدمات', href: '/services', icon: '⚙️' },
                  { label: 'من نحن', href: '/about', icon: '👥' },
                  { label: 'معرض الأعمال', href: '/gallery', icon: '📸' },
                  { label: 'اتصل بنا', href: '/contact', icon: '📞' }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`mobile-menu-item flex items-center space-x-3 space-x-reverse p-4 rounded-xl transition-all active:scale-95 ${
                      isActivePath(link.href)
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md active:bg-blue-100'
                    }`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-semibold">{link.label}</span>
=======
          {/* أزرار العمل */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <a
              href="tel:+201063374834"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              اتصل الآن
            </a>
            <Link
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              عرض سعر مجاني
            </Link>
          </div>

          {/* زر القائمة للموبايل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="space-y-4">
              <Link 
                href="/" 
                className="block text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>

              {/* المدن - موبايل */}
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">المدن:</div>
                {cities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="block pr-4 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {city.name}
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
                  </Link>
                ))}
              </div>

<<<<<<< HEAD
              {/* الخدمات السريعة مع touch targets */}
              <div className="border-t border-gray-200 pt-3 mt-4">
                <div className="text-sm font-semibold text-gray-600 mb-3 px-2">خدمات سريعة:</div>
                <div className="grid grid-cols-3 gap-3">
                  {mainServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="mobile-tap-target bg-white p-4 rounded-lg text-center hover:bg-blue-50 transition-all shadow-sm hover:shadow-md active:scale-95"
                      style={{ touchAction: 'manipulation' }}
                    >
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <div className="text-xs font-medium text-gray-700">{service.name}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* أزرار العمل للموبايل مع touch optimization */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                <a
                  href="tel:+201063374834"
                  className="mobile-tap-target flex items-center justify-center space-x-2 space-x-reverse bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-4 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="text-xl">📞</span>
                  <span>اتصل الآن</span>
                </a>
                <Link
                  href="/quote"
                  className="mobile-tap-target flex items-center justify-center space-x-2 space-x-reverse bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="text-xl">💰</span>
                  <span>عرض سعر مجاني</span>
=======
              {/* الخدمات - موبايل */}
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">الخدمات:</div>
                <Link
                  href="/services"
                  className="block pr-4 text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📋 جميع الخدمات
                </Link>
                <div className="text-sm text-gray-600 pr-4">الخدمات الرئيسية:</div>
                {services.slice(0, 4).map((service) => (
                  <div key={service.href} className="pr-8 space-y-1">
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                      <span>{service.icon}</span>
                      <span className="font-medium">{service.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/about" 
                className="block text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>

              <Link 
                href="/gallery" 
                className="block text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                معرض الأعمال
              </Link>

              <Link 
                href="/contact" 
                className="block text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>

              {/* أزرار العمل - موبايل */}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+201063374834"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  اتصل الآن: 0106-337-4834
                </a>
                <Link
                  href="/quote"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  احصل على عرض سعر مجاني
>>>>>>> a847196fd516f711e5fdfc44e2272ab5af81813f
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

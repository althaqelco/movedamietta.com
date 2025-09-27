// رأس صفحة مبسط ومحسن للأجهزة
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            </div>
          </div>
        </div>
      </div>

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
              }`}
            >
              الرئيسية
            </Link>

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
              }`}
            >
              من نحن
            </Link>

            <Link 
              href="/gallery" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                router.pathname === '/gallery' 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              معرض الأعمال
            </Link>

            <Link 
              href="/contact" 
              className={`tablet-nav font-semibold transition-all duration-300 hover:scale-105 transform px-2 py-1 rounded-lg ${
                router.pathname === '/contact' 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              اتصل بنا
            </Link>
          </div>

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
                  </Link>
                ))}
              </div>

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
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
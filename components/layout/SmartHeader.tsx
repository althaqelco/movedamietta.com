// رأس الصفحة المعاد تصميمه - تصميم حديث ومحسن
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchModal } from '@/components/ui/SearchModal';

interface SmartHeaderProps {
  className?: string;
}

export default function SmartHeader({ className = '' }: SmartHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // بيانات المدن والخدمات - محدثة بتصميم جديد
  const cities = [
    { 
      name: 'دمياط', 
      href: '/damietta', 
      nameEn: 'damietta', 
      description: 'العاصمة التاريخية',
      icon: '🏛️',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'دمياط الجديدة', 
      href: '/new-damietta', 
      nameEn: 'new-damietta', 
      description: 'المدينة الحديثة',
      icon: '🌆',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const services = [
    { 
      name: 'نقل عفش', 
      href: 'furniture-moving', 
      icon: '🚚', 
      description: 'نقل آمن ومحترف',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'تغليف عفش', 
      href: 'packing', 
      icon: '📦', 
      description: 'تغليف احترافي وحماية',
      color: 'from-amber-400 to-orange-600'
    },
    { 
      name: 'ونش رفع', 
      href: 'crane', 
      icon: '🏗️', 
      description: 'رفع للطوابق العليا',
      color: 'from-red-400 to-red-600'
    },
    { 
      name: 'فك وتركيب', 
      href: 'assembly', 
      icon: '🔧', 
      description: 'فك وتجميع الأثاث',
      color: 'from-purple-400 to-purple-600'
    },
    { 
      name: 'نقل مكاتب', 
      href: 'office-moving', 
      icon: '🏢', 
      description: 'خدمات الشركات',
      color: 'from-green-400 to-green-600'
    },
    { 
      name: 'كراتين وعبوات', 
      href: 'boxes', 
      icon: '📋', 
      description: 'مواد التعبئة والحماية',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  // روابط سريعة محدثة
  const quickActions = [
    { 
      name: 'اتصل الآن', 
      href: 'tel:+201063374834', 
      icon: '📞', 
      bgColor: 'bg-gradient-to-r from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700'
    },
    { 
      name: 'عرض سعر', 
      href: '/quote', 
      icon: '💰', 
      bgColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      hoverColor: 'hover:from-blue-600 hover:to-indigo-700'
    }
  ];

  // متابعة التمرير للتأثيرات البصرية
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إغلاق القوائم عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(event.target as Node)) {
        setIsCitiesOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // التعامل مع اختصارات الكيبورد
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + K لفتح البحث
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      // Escape لإغلاق القوائم
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsCitiesOpen(false);
        setIsServicesOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActivePath = (path: string) => {
    return router.asPath.startsWith(path);
  };

  // تصميم متجاوب وحديث للهيدر
  const headerClasses = `
    ${isScrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-2xl border-b border-white/20' 
      : 'bg-white shadow-lg'
    }
    sticky top-0 z-50 transition-all duration-500 ${className}
  `;

  return (
    <>
      <header className={headerClasses}>
        {/* شريط المعلومات العلوي المحدث */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3 relative overflow-hidden">
          {/* خلفية متحركة */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6 space-x-reverse">
                <a 
                  href="tel:+201063374834" 
                  className="group flex items-center space-x-2 space-x-reverse hover:text-emerald-300 transition-all duration-300 hover:scale-105"
                  aria-label="اتصل بنا على الرقم 0106-337-4834"
                >
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="font-medium">0106-337-4834</span>
                </a>
                <a 
                  href="https://wa.me/201063374834" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 space-x-reverse hover:text-green-300 transition-all duration-300 hover:scale-105"
                  aria-label="تواصل معنا عبر واتساب"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="font-medium">واتساب</span>
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-6 space-x-reverse">
                <div className="flex items-center space-x-2 space-x-reverse px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                  <span className="text-yellow-300">⏰</span>
                  <span className="font-medium text-white/90">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                  <span className="text-green-300">🚛</span>
                  <span className="font-medium text-white/90">نقل سريع وآمن</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* شريط التنقل الرئيسي المحدث */}
        <nav className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            {/* الشعار المحدث */}
            <Link href="/" className="flex items-center space-x-4 space-x-reverse group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl group-hover:scale-125 transition-transform">🚛</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="text-right">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  شركة نقل عفش دمياط
                </h1>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  خدمة احترافية وآمنة 🌟
                </p>
              </div>
            </Link>

            {/* قائمة التنقل المحدثة - Desktop */}
            <div className="hidden lg:flex items-center space-x-10 space-x-reverse">
              {/* الرئيسية */}
              <Link 
                href="/" 
                className={`group relative text-lg font-bold transition-all duration-300 ${
                  router.pathname === '/' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span className="relative z-10">الرئيسية</span>
                <div className={`absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                  router.pathname === '/' ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50'
                }`}></div>
              </Link>

              {/* المدن */}
              <div 
                className="relative group" 
                ref={citiesRef}
                onMouseEnter={() => setIsCitiesOpen(true)}
                onMouseLeave={() => setIsCitiesOpen(false)}
              >
                <button
                  className={`relative text-lg font-bold transition-all duration-300 flex items-center space-x-2 space-x-reverse ${
                    cities.some(city => isActivePath(city.href)) 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  aria-expanded={isCitiesOpen}
                  aria-haspopup="true"
                >
                  <span className="relative z-10">المدن</span>
                  <svg className={`w-5 h-5 transition-all duration-300 ${isCitiesOpen ? 'rotate-180 text-blue-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div className={`absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                    cities.some(city => isActivePath(city.href)) ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50'
                  }`}></div>
                </button>

                {isCitiesOpen && (
                  <div className="absolute top-full right-0 mt-4 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 py-4 z-50 transform transition-all duration-300 scale-95 opacity-0 animate-dropdown">
                    <div className="px-6 pb-3 mb-3 border-b border-gray-100">
                      <h3 className="font-bold text-gray-900 text-lg flex items-center space-x-2 space-x-reverse">
                        <span className="text-2xl">🏙️</span>
                        <span>المناطق المخدومة</span>
                      </h3>
                    </div>
                    <div className="space-y-1 px-2">
                      {cities.map((city, index) => (
                        <Link
                          key={city.href}
                          href={city.href}
                          className={`group block px-4 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] ${
                            isActivePath(city.href) 
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-r-4 border-blue-500 text-blue-700' 
                              : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 text-gray-700'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <div className={`w-12 h-12 bg-gradient-to-r ${city.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                              {city.icon}
                            </div>
                            <div className="flex-1 text-right">
                              <div className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{city.name}</div>
                              <div className="text-sm text-gray-500 mb-1">{city.description}</div>
                              <div className="text-xs text-blue-600 font-medium flex items-center space-x-1 space-x-reverse">
                                <span>جميع خدمات النقل</span>
                                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* الخدمات */}
              <div 
                className="relative group" 
                ref={servicesRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="relative text-lg font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 space-x-reverse"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <span className="relative z-10">الخدمات</span>
                  <svg className={`w-5 h-5 transition-all duration-300 ${isServicesOpen ? 'rotate-180 text-blue-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50"></div>
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full right-0 mt-4 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 py-6 z-50 transform transition-all duration-300 scale-95 opacity-0 animate-dropdown">
                    {/* رابط جميع الخدمات */}
                    <Link
                      href="/services"
                      className="group block px-6 py-4 text-right hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all border-b border-gray-100 mb-4 hover:transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-2xl text-white">📋</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600 text-xl mb-1 group-hover:text-blue-700 transition-colors">جميع الخدمات</div>
                          <div className="text-sm text-gray-500">دليل شامل لكل خدماتنا المتميزة</div>
                        </div>
                      </div>
                    </Link>
                    
                    <div className="px-4">
                      <div className="grid grid-cols-3 gap-3">
                        {services.slice(0, 6).map((service, index) => (
                          <div
                            key={service.href}
                            className="space-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredService(service.href)}
                            onMouseLeave={() => setHoveredService(null)}
                          >
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg transition-all duration-300 hover:scale-105 ${
                              hoveredService === service.href ? 'scale-105 shadow-xl' : ''
                            }`}>
                              <div className="text-center">
                                <div className="text-2xl mb-2">{service.icon}</div>
                                <div className="text-sm font-bold">{service.name}</div>
                                <div className="text-xs opacity-90 mt-1">{service.description}</div>
                              </div>
                            </div>
                            
                            <div className="space-y-1">
                              {cities.map((city) => (
                                <Link
                                  key={`${city.nameEn}-${service.href}`}
                                  href={`/${city.nameEn}/${service.href}`}
                                  className="block px-2 py-1 rounded-lg hover:bg-gray-100 transition-all text-right hover:scale-[1.02] group"
                                >
                                  <div className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                    {city.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* باقي الروابط */}
              {[
                { label: 'من نحن', href: '/about' },
                { label: 'معرض الأعمال', href: '/gallery' },
                { label: 'اتصل بنا', href: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`group relative text-lg font-bold transition-all duration-300 ${
                    router.pathname === link.href 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className={`absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                    router.pathname === link.href ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50'
                  }`}></div>
                </Link>
              ))}
            </div>

            {/* أزرار العمل والبحث المحدثة */}
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              {/* زر البحث المحدث */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="group p-3 text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="البحث (Ctrl+K)"
                title="البحث (Ctrl+K)"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* أزرار الإجراءات الرئيسية */}
              <div className="flex items-center space-x-3 space-x-reverse">
                {quickActions.map((action, index) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className={`group flex items-center space-x-2 space-x-reverse px-6 py-3 ${action.bgColor} ${action.hoverColor} text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform">{action.icon}</span>
                    <span className="font-bold">{action.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* أزرار الموبايل المحدثة */}
            <div className="lg:hidden flex items-center space-x-3 space-x-reverse">
              {/* زر البحث للموبايل */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-3 text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-2xl transition-all duration-300 hover:scale-110"
                aria-label="البحث"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* زر القائمة المحدث */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative p-3 rounded-2xl focus:outline-none transition-all duration-300 hover:scale-110 ${
                  isMenuOpen 
                    ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                    : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                aria-label="فتح/إغلاق القائمة"
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
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
          </div>

          {/* القائمة المنسدلة للموبايل المحدثة */}
          {isMenuOpen && (
            <div ref={menuRef} className="lg:hidden mt-6 pb-6 relative">
              {/* خلفية مع تأثير blur */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative space-y-6 p-6">
                {/* الرئيسية */}
                <Link 
                  href="/" 
                  className={`flex items-center space-x-3 space-x-reverse p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    router.pathname === '/' 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <span className="text-lg">🏠</span>
                  </div>
                  <span className="text-lg font-bold">الرئيسية</span>
                </Link>

                {/* المدن - موبايل */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse text-lg font-bold text-gray-900 px-2">
                    <span className="text-2xl">🏙️</span>
                    <span>المدن المخدومة</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {cities.map((city, index) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        className={`group block p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                          isActivePath(city.href)
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                            : 'bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 shadow-md'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <div className={`w-12 h-12 bg-gradient-to-r ${city.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                            {city.icon}
                          </div>
                          <div className="flex-1 text-right">
                            <div className="font-bold text-lg">{city.name}</div>
                            <div className={`text-sm ${isActivePath(city.href) ? 'text-blue-100' : 'text-gray-500'}`}>
                              {city.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* الخدمات - موبايل */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse text-lg font-bold text-gray-900 px-2">
                    <span className="text-2xl">⚙️</span>
                    <span>خدماتنا</span>
                  </div>
                  
                  {/* رابط جميع الخدمات */}
                  <Link
                    href="/services"
                    className="group block p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:scale-[1.02] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        📋
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">جميع الخدمات</div>
                        <div className="text-sm text-blue-100">دليل شامل لخدماتنا</div>
                      </div>
                    </div>
                  </Link>

                  {/* الخدمات الرئيسية */}
                  <div className="grid grid-cols-2 gap-3">
                    {services.slice(0, 4).map((service, index) => (
                      <div
                        key={service.href}
                        className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-center">
                          <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white shadow-md mx-auto mb-2`}>
                            <span className="text-lg">{service.icon}</span>
                          </div>
                          <div className="text-sm font-bold text-gray-900">{service.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* باقي الروابط */}
                <div className="space-y-3">
                  {[
                    { label: 'من نحن', href: '/about', icon: '👥' },
                    { label: 'معرض الأعمال', href: '/gallery', icon: '📸' },
                    { label: 'اتصل بنا', href: '/contact', icon: '📞' }
                  ].map((link, index) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className={`flex items-center space-x-3 space-x-reverse p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                        router.pathname === link.href
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                          : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <span className="text-lg">{link.icon}</span>
                      </div>
                      <span className="text-lg font-bold">{link.label}</span>
                    </Link>
                  ))}
                </div>

                {/* أزرار العمل - موبايل */}
                <div className="pt-4 space-y-4">
                  <a
                    href="tel:+201063374834"
                    className="flex items-center justify-center space-x-3 space-x-reverse bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                  >
                    <span className="text-xl">📞</span>
                    <span>اتصل الآن: 0106-337-4834</span>
                  </a>
                  <Link
                    href="/quote"
                    className="flex items-center justify-center space-x-3 space-x-reverse bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">💰</span>
                    <span>احصل على عرض سعر مجاني</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* مكون البحث */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* أنيميشن CSS محدثة */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-dropdown {
          animation: dropdown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .gradient-bg {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        
        /* تحسينات إضافية للتفاعل */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* تأثيرات التمرير */
        .scroll-shadow {
          transition: all 0.3s ease;
        }
        
        .scroll-shadow.scrolled {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        /* تحسينات إمكانية الوصول */
        .focus-ring:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* تأثيرات الأزرار */
        .btn-3d {
          box-shadow: 0 4px 0 #1e40af;
          transition: all 0.1s ease;
        }
        
        .btn-3d:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 0 #1e40af;
        }
        
        .btn-3d:active {
          transform: translateY(0);
          box-shadow: 0 2px 0 #1e40af;
        }
      `}</style>
    </>
  );
}

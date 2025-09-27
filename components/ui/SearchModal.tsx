// مكون البحث المتقدم
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'city';
  icon: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // بيانات البحث الثابتة
  const searchData: SearchResult[] = [
    // الصفحات الرئيسية
    { title: 'الصفحة الرئيسية', description: 'العودة للصفحة الرئيسية', url: '/', type: 'page', icon: '🏠' },
    { title: 'من نحن', description: 'تعرف على شركتنا وخبرتنا', url: '/about', type: 'page', icon: '👥' },
    { title: 'اتصل بنا', description: 'معلومات التواصل والموقع', url: '/contact', type: 'page', icon: '📞' },
    { title: 'معرض الأعمال', description: 'شاهد أحدث أعمالنا', url: '/gallery', type: 'page', icon: '📸' },
    { title: 'طلب عرض سعر', description: 'احصل على عرض سعر مجاني', url: '/quote', type: 'page', icon: '💰' },
    { title: 'الأسئلة الشائعة', description: 'إجابات على أكثر الأسئلة شيوعاً', url: '/faq', type: 'page', icon: '❓' },
    { title: 'جميع الخدمات', description: 'دليل شامل لخدماتنا', url: '/services', type: 'page', icon: '📋' },

    // خدمات دمياط
    { title: 'نقل عفش دمياط', description: 'خدمة نقل الأثاث في دمياط', url: '/damietta/furniture-moving', type: 'service', icon: '🚛' },
    { title: 'تغليف عفش دمياط', description: 'خدمة تغليف الأثاث في دمياط', url: '/damietta/packing', type: 'service', icon: '📦' },
    { title: 'ونش رفع دمياط', description: 'خدمة الونش والرافعة في دمياط', url: '/damietta/crane', type: 'service', icon: '🏗️' },
    { title: 'دمياط', description: 'جميع الخدمات في دمياط', url: '/damietta', type: 'city', icon: '🏙️' },

    // خدمات دمياط الجديدة
    { title: 'نقل عفش دمياط الجديدة', description: 'خدمة نقل الأثاث في دمياط الجديدة', url: '/new-damietta/furniture-moving', type: 'service', icon: '🚛' },
    { title: 'تغليف عفش دمياط الجديدة', description: 'خدمة تغليف الأثاث في دمياط الجديدة', url: '/new-damietta/packing', type: 'service', icon: '📦' },
    { title: 'ونش رفع دمياط الجديدة', description: 'خدمة الونش والرافعة في دمياط الجديدة', url: '/new-damietta/crane', type: 'service', icon: '🏗️' },
    { title: 'دمياط الجديدة', description: 'جميع الخدمات في دمياط الجديدة', url: '/new-damietta', type: 'city', icon: '🌆' },
  ];

  // إجراء البحث
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    setIsLoading(true);
    
    // محاكاة تأخير البحث
    const timer = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredResults.slice(0, 8)); // إظهار أول 8 نتائج
      setSelectedIndex(0);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // التركيز على حقل البحث عند فتح الـ modal
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // التعامل مع الكيبورد
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        router.push(results[selectedIndex].url);
        onClose();
        setSearchQuery('');
      }
    } else if (e.key === 'Escape') {
      onClose();
      setSearchQuery('');
    }
  };

  // التعامل مع النقر على النتيجة
  const handleResultClick = (url: string) => {
    router.push(url);
    onClose();
    setSearchQuery('');
  };

  // إغلاق الـ modal عند النقر خارجه
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
      setSearchQuery('');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-24"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden">
        {/* رأس البحث */}
        <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex-1 relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="ابحث عن الخدمات، المدن، أو الصفحات..."
                className="w-full text-lg px-4 py-3 pr-12 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none bg-white"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={() => { onClose(); setSearchQuery(''); }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* نصائح البحث */}
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium">نصائح:</span> جرب البحث عن "نقل عفش"، "دمياط"، "ونش"، أو "تغليف"
          </div>
        </div>

        {/* النتائج */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">جارٍ البحث...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={result.url}
                  onClick={() => handleResultClick(result.url)}
                  className={`w-full text-right p-4 rounded-xl mb-2 transition-all hover:bg-blue-50 ${
                    index === selectedIndex ? 'bg-blue-100 border-2 border-blue-300' : 'border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-2xl flex-shrink-0">{result.icon}</div>
                    <div className="flex-1 text-right">
                      <h3 className="font-semibold text-gray-900 mb-1">{result.title}</h3>
                      <p className="text-sm text-gray-600">{result.description}</p>
                      <div className="mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          result.type === 'page' ? 'bg-green-100 text-green-600' :
                          result.type === 'service' ? 'bg-blue-100 text-blue-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {result.type === 'page' ? 'صفحة' : result.type === 'service' ? 'خدمة' : 'مدينة'}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : searchQuery.trim() ? (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-600">جرب البحث بكلمات أخرى أو تصفح الخدمات مباشرة</p>
              <div className="mt-4 space-x-2 space-x-reverse">
                <Link href="/services" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => { onClose(); setSearchQuery(''); }}>
                  جميع الخدمات
                </Link>
                <Link href="/damietta" className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => { onClose(); setSearchQuery(''); }}>
                  دمياط
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ابدأ البحث</h3>
              <p className="text-gray-600 mb-4">اكتب ما تبحث عنه أعلاه</p>
              
              {/* اقتراحات سريعة */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">بحث سريع:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['نقل عفش', 'تغليف', 'ونش', 'دمياط', 'دمياط الجديدة'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* أسفل البحث */}
        <div className="p-4 bg-gray-50 border-t text-center">
          <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm text-gray-600">
            <div className="flex items-center space-x-1 space-x-reverse">
              <kbd className="px-2 py-1 bg-white border rounded text-xs">↵</kbd>
              <span>للانتقال</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <kbd className="px-2 py-1 bg-white border rounded text-xs">↑↓</kbd>
              <span>للتنقل</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <kbd className="px-2 py-1 bg-white border rounded text-xs">Esc</kbd>
              <span>للإغلاق</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

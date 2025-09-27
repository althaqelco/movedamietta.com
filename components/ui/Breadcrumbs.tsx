// مكون مسار التنقل (Breadcrumbs)
'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
}

interface BreadcrumbsProps {
  className?: string;
  showHome?: boolean;
}

export function Breadcrumbs({ className = '', showHome = true }: BreadcrumbsProps) {
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    const pathSegments = router.asPath.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [];

    // إضافة الصفحة الرئيسية
    if (showHome) {
      items.push({
        label: 'الرئيسية',
        href: '/',
        icon: '🏠'
      });
    }

    // تحديد تسميات المسارات
    const pathLabels: Record<string, string> = {
      'damietta': 'دمياط',
      'new-damietta': 'دمياط الجديدة',
      'furniture-moving': 'نقل عفش',
      'packing': 'تغليف عفش',
      'crane': 'خدمة الونش',
      'assembly': 'فك وتركيب',
      'office-moving': 'نقل مكاتب',
      'boxes': 'كراتين',
      'services': 'الخدمات',
      'about': 'من نحن',
      'contact': 'اتصل بنا',
      'gallery': 'معرض الأعمال',
      'quote': 'طلب عرض سعر',
      'faq': 'الأسئلة الشائعة',
      'privacy': 'سياسة الخصوصية',
      'terms': 'الشروط والأحكام'
    };

    // بناء مسار التنقل
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathLabels[segment] || segment;
      
      // تحديد الأيقونة حسب نوع الصفحة
      let icon = '';
      if (segment === 'damietta' || segment === 'new-damietta') {
        icon = '🏙️';
      } else if (segment === 'furniture-moving') {
        icon = '🚛';
      } else if (segment === 'packing') {
        icon = '📦';
      } else if (segment === 'crane') {
        icon = '🏗️';
      } else if (segment === 'services') {
        icon = '📋';
      } else if (segment === 'about') {
        icon = '👥';
      } else if (segment === 'contact') {
        icon = '📞';
      } else if (segment === 'gallery') {
        icon = '📸';
      } else if (segment === 'quote') {
        icon = '💰';
      } else if (segment === 'faq') {
        icon = '❓';
      }

      items.push({
        label,
        href: currentPath,
        icon
      });
    });

    return items;
  }, [router.asPath, showHome]);

  // عدم إظهار Breadcrumbs في الصفحة الرئيسية
  if (router.pathname === '/' && breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className={`bg-gray-50 border-b py-3 ${className}`}
      aria-label="مسار التنقل"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 text-gray-400 mx-2 rotate-180" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              
              {index === breadcrumbs.length - 1 ? (
                // العنصر الأخير (الصفحة الحالية)
                <span 
                  className="flex items-center space-x-1 space-x-reverse text-gray-700 font-medium"
                  aria-current="page"
                >
                  {item.icon && <span className="text-sm">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              ) : (
                // الروابط القابلة للنقر
                <Link 
                  href={item.href}
                  className="flex items-center space-x-1 space-x-reverse text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {item.icon && <span className="text-sm">{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
        
        {/* معلومات إضافية للصفحة الحالية */}
        {breadcrumbs.length > 1 && (
          <div className="mt-2 text-xs text-gray-500">
            <span>أنت الآن في: </span>
            <span className="font-medium">
              {breadcrumbs[breadcrumbs.length - 1]?.label}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}

// مكون مبسط للاستخدام في الصفحات
export function SimpleBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="bg-gray-50 py-2 mb-4 rounded-lg">
      <div className="px-4">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg className="w-3 h-3 text-gray-400 mx-1 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              
              {index === items.length - 1 ? (
                <span className="flex items-center space-x-1 space-x-reverse text-gray-700 font-medium">
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              ) : (
                <Link href={item.href} className="flex items-center space-x-1 space-x-reverse text-blue-600 hover:text-blue-800 transition-colors">
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export type { BreadcrumbItem };

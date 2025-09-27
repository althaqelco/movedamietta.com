// مكون التخطيط الرئيسي للموقع المحسن
import { ReactNode } from 'react';
import SmartHeader from './SmartHeader';
import Footer from './Footer';
import { Breadcrumbs } from '@/components/ui';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showBreadcrumbs?: boolean;
}

export default function Layout({ 
  children, 
  className = '', 
  showBreadcrumbs = true 
}: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 ${className}`} dir="rtl">
      <SmartHeader />
      {showBreadcrumbs && <Breadcrumbs />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// صفحة عرض جميع الخدمات - Services Overview
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

interface ServicesProps {
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function ServicesPage({ services }: ServicesProps) {
  return (
    <>
      <Head>
        <title>خدمات نقل العفش - دمياط ودمياط الجديدة</title>
        <meta name="description" content="تعرف على جميع خدمات نقل الأثاث والعفش في دمياط ودمياط الجديدة. نقل شقق، تغليف، ونش، تجميع أثاث وأكثر." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              خدماتنا المتكاملة
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              نقدم مجموعة شاملة من خدمات نقل الأثاث والعفش في دمياط ودمياط الجديدة بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              جاهز لبدء مشروع نقل العفش؟
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر تنافسي لجميع خدماتنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+201063374834" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100"
              >
                اتصل الآن: 0106-337-4834
              </a>
              <a 
                href="https://wa.me/201063374834?text=أريد الاستفسار عن خدماتكم" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                واتساب للاستشارة
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const services = [
    {
      id: 'furniture-moving',
      title: 'نقل الأثاث والعفش',
      description: 'خدمة نقل شاملة للشقق والمنازل والفلل مع الفك والتركيب',
      icon: '🚛'
    },
    {
      id: 'packing',
      title: 'تغليف العفش',
      description: 'خدمة تغليف احترافي باستخدام أجود أنواع مواد التغليف',
      icon: '📦'
    },
    {
      id: 'crane',
      title: 'خدمة الونش',
      description: 'رفع ونقل الأثاث من وإلى الطوابق العليا بأمان تام',
      icon: '🏗️'
    },
    {
      id: 'assembly',
      title: 'فك وتركيب الأثاث',
      description: 'خدمة فك وتركيب الأثاث بواسطة فنيين متخصصين',
      icon: '🔧'
    }
  ];

  return {
    props: {
      services
    }
  };
};
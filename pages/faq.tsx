// صفحة الأسئلة الشائعة - FAQ
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    // الأسعار والتكلفة
    {
      id: 1,
      question: "كيف يتم حساب تكلفة نقل العفش؟",
      answer: "يتم حساب التكلفة بناءً على عدة عوامل: المسافة بين الموقعين، كمية الأثاث، نوع الخدمة المطلوبة (تغليف، فك وتركيب)، الطابق، وتوفر المصعد. نقدم عرض سعر مجاني قبل البدء في العمل.",
      category: "pricing"
    },
    {
      id: 2,
      question: "هل يوجد حد أدنى للتكلفة؟",
      answer: "نعم، يوجد حد أدنى للخدمة يختلف حسب المدينة ونوع الخدمة. للمزيد من التفاصيل، يرجى الاتصال بنا على 01063374834.",
      category: "pricing"
    },
    {
      id: 3,
      question: "هل الأسعار شاملة الضرائب؟",
      answer: "نعم، جميع أسعارنا شاملة ضريبة القيمة المضافة. لا توجد رسوم خفية أو إضافية.",
      category: "pricing"
    },

    // الخدمات
    {
      id: 4,
      question: "ما هي الخدمات التي تقدمونها؟",
      answer: "نقدم خدمات شاملة: نقل الأثاث، التغليف المحترف، فك وتركيب الأثاث، خدمة الونش، التخزين المؤقت، والتنظيف بعد النقل. كما نخدم المنازل والمكاتب والشركات.",
      category: "services"
    },
    {
      id: 5,
      question: "هل تقومون بنقل الأجهزة الكهربائية؟",
      answer: "نعم، نقوم بنقل جميع أنواع الأجهزة الكهربائية (ثلاجات، غسالات، مكيفات، تلفزيونات) مع التغليف المناسب لضمان سلامتها.",
      category: "services"
    },
    {
      id: 6,
      question: "هل تقدمون خدمة التغليف؟",
      answer: "نعم، نقدم خدمة التغليف المحترف باستخدام مواد عالية الجودة (كراتين، بلاستيك فقاعي، لفائف حماية) لضمان حماية أثاثكم أثناء النقل.",
      category: "services"
    },

    // المواعيد والحجز
    {
      id: 7,
      question: "كم يستغرق الحجز مسبقاً؟",
      answer: "يفضل الحجز قبل 24-48 ساعة على الأقل، خاصة في أوقات الذروة. لكن يمكننا ترتيب خدمة طارئة في نفس اليوم حسب التوفر.",
      category: "booking"
    },
    {
      id: 8,
      question: "ما هي مواعيد العمل؟",
      answer: "نعمل من الاثنين إلى السبت: الاثنين-الخميس (8:00-18:00), الجمعة (8:00-17:00), السبت (8:00-16:00). كما نقدم خدمة طوارئ على مدار 24 ساعة.",
      category: "booking"
    },
    {
      id: 9,
      question: "هل يمكن تغيير موعد النقل؟",
      answer: "نعم، يمكن تغيير الموعد بشرط الإشعار المسبق 24 ساعة على الأقل. قد تطبق رسوم إضافية في حالة التغيير في اللحظة الأخيرة.",
      category: "booking"
    },

    // التأمين والضمان
    {
      id: 10,
      question: "هل أثاثي مؤمن أثناء النقل؟",
      answer: "نعم، جميع عمليات النقل مؤمنة ضد الأضرار. لدينا بوليصة تأمين شاملة تغطي أي أضرار قد تحدث أثناء النقل (نادراً ما يحدث).",
      category: "insurance"
    },
    {
      id: 11,
      question: "ماذا يحدث في حالة كسر أو تلف قطعة أثاث؟",
      answer: "في الحالات النادرة للتلف، نقوم بالتعويض الكامل أو الإصلاح على حسابنا الخاص. لدينا فريق متخصص للتعامل مع مثل هذه الحالات.",
      category: "insurance"
    },

    // المناطق والتغطية
    {
      id: 12,
      question: "ما هي المناطق التي تغطونها؟",
      answer: "نخدم جميع أنحاء دمياط ودمياط الجديدة، بالإضافة إلى المناطق المحيطة مثل رأس البر وكفر سعد. كما نقدم خدمات النقل بين المحافظات.",
      category: "coverage"
    },
    {
      id: 13,
      question: "هل تقومون بالنقل خارج دمياط؟",
      answer: "نعم، نقدم خدمات النقل إلى جميع محافظات مصر. الأسعار تختلف حسب المسافة والوجهة. للاستعلام عن أسعار النقل الخارجي، اتصلوا بنا.",
      category: "coverage"
    },

    // الدفع
    {
      id: 14,
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع نقداً، تحويل بنكي، أو فوري. يتم الدفع عادة بعد انتهاء الخدمة، لكن قد نطلب دفعة مقدمة للمشاريع الكبيرة.",
      category: "payment"
    },
    {
      id: 15,
      question: "هل يمكن الدفع بالتقسيط؟",
      answer: "نعم، نوفر خيارات دفع بالتقسيط للمشاريع الكبيرة (نقل فيلات، شركات). يرجى التواصل معنا لمناقشة الشروط.",
      category: "payment"
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع الأسئلة', icon: '❓' },
    { id: 'pricing', name: 'الأسعار والتكلفة', icon: '💰' },
    { id: 'services', name: 'الخدمات', icon: '🚚' },
    { id: 'booking', name: 'الحجز والمواعيد', icon: '📅' },
    { id: 'insurance', name: 'التأمين والضمان', icon: '🛡️' },
    { id: 'coverage', name: 'التغطية الجغرافية', icon: '🗺️' },
    { id: 'payment', name: 'الدفع', icon: '💳' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>الأسئلة الشائعة - شركة نقل عفش دمياط</title>
        <meta name="description" content="إجابات على جميع أسئلتك حول خدمات نقل الأثاث في دمياط. الأسعار، المواعيد، التأمين، والمزيد." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              تجد هنا إجابات على جميع الأسئلة الشائعة حول خدماتنا في نقل الأثاث
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-right bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 flex-1">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openId === faq.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openId === faq.id && (
                      <div className="px-6 py-4 bg-white border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد أسئلة في هذا القسم</h3>
                  <p className="text-gray-500">جرب تصفح الأقسام الأخرى أو اتصل بنا مباشرة</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                لم تجد إجابة سؤالك؟
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                فريق خدمة العملاء لدينا جاهز للإجابة على جميع استفساراتكم
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">اتصل بنا</h3>
                  <p className="text-gray-600 text-sm mb-3">متاح 24/7</p>
                  <a 
                    href="tel:+201063374834" 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    01063374834
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">واتساب</h3>
                  <p className="text-gray-600 text-sm mb-3">رد فوري</p>
                  <a 
                    href="https://wa.me/201063374834?text=مرحباً، لدي استفسار"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-green-600 hover:text-green-800 font-semibold"
                  >
                    محادثة مباشرة
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-600 text-sm mb-3">رد خلال 24 ساعة</p>
                  <a 
                    href="mailto:info@movedamietta.com"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    info@movedamietta.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  صفحة التواصل
                </Link>
                <Link 
                  href="/quote"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-hover inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  اطلب عرض سعر
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

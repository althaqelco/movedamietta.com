// صفحة طلب عرض سعر مجاني - Quote Request
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    fromAddress: '',
    toAddress: '',
    moveDate: '',
    rooms: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cities = [
    { value: 'damietta', label: 'دمياط' },
    { value: 'new-damietta', label: 'دمياط الجديدة' },
    { value: 'other', label: 'أخرى' }
  ];

  const services = [
    { value: 'furniture-moving', label: 'نقل أثاث كامل' },
    { value: 'packing', label: 'خدمة التغليف' },
    { value: 'crane', label: 'خدمة الونش' },
    { value: 'assembly', label: 'فك وتركيب' },
    { value: 'storage', label: 'تخزين مؤقت' },
    { value: 'cleaning', label: 'تنظيف بعد النقل' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // هنا يمكن إضافة منطق إرسال البيانات إلى الخادم
    // مؤقتاً سنظهر رسالة النجاح بعد ثانيتين

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const sendWhatsApp = () => {
    const message = `
مرحباً، أريد طلب عرض سعر لخدمة نقل العفش:

الاسم: ${formData.name}
الهاتف: ${formData.phone}
المدينة: ${formData.city}
نوع الخدمة: ${formData.service}
من العنوان: ${formData.fromAddress}
إلى العنوان: ${formData.toAddress}
تاريخ النقل المطلوب: ${formData.moveDate}
عدد الغرف: ${formData.rooms}
تفاصيل إضافية: ${formData.details}
    `;
    
    const whatsappUrl = `https://wa.me/201063374834?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>شكراً لك - طلب عرض السعر</title>
        </Head>
        <div className="min-h-screen bg-green-50 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">تم الإرسال بنجاح!</h2>
            <p className="text-gray-600 mb-6">
              شكراً لكم، تم استلام طلبكم. سيتواصل معكم فريقنا خلال 30 دقيقة لتقديم عرض السعر المفصل.
            </p>
            <div className="space-y-3">
              <button
                onClick={sendWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                إرسال التفاصيل عبر الواتساب
              </button>
              <a
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                معلومات الاتصال
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>طلب عرض سعر مجاني - شركة نقل عفش دمياط</title>
        <meta name="description" content="احصل على عرض سعر مجاني لخدمات نقل الأثاث في دمياط. فريقنا سيتواصل معك خلال 30 دقيقة." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                احصل على عرض سعر مجاني
              </h1>
              <p className="text-xl opacity-90 mb-8">
                أدخل تفاصيل احتياجاتك وسنقوم بإعداد عرض سعر مخصص لك في أسرع وقت
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>رد خلال 30 دقيقة</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>عرض مخصص</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>بدون التزام</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="01xxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        المدينة *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">اختر المدينة</option>
                        {cities.map((city) => (
                          <option key={city.value} value={city.value}>
                            {city.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        نوع الخدمة *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">اختر نوع الخدمة</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      العنوان الحالي (النقل من) *
                    </label>
                    <input
                      type="text"
                      name="fromAddress"
                      value={formData.fromAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="العنوان التفصيلي للموقع الحالي"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      العنوان الجديد (النقل إلى) *
                    </label>
                    <input
                      type="text"
                      name="toAddress"
                      value={formData.toAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="العنوان التفصيلي للموقع الجديد"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        التاريخ المفضل للنقل
                      </label>
                      <input
                        type="date"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        عدد الغرف (تقريبي)
                      </label>
                      <select
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">اختر عدد الغرف</option>
                        <option value="1">غرفة واحدة</option>
                        <option value="2">غرفتان</option>
                        <option value="3">3 غرف</option>
                        <option value="4">4 غرف</option>
                        <option value="5+">5 غرف أو أكثر</option>
                        <option value="office">مكتب</option>
                        <option value="villa">فيلا كاملة</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      تفاصيل إضافية
                    </label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="أضف أي تفاصيل إضافية مثل وجود أثاث ثقيل، طوابق عالية، مصعد متوفر، إلخ..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        جارٍ الإرسال...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        إرسال طلب العرض
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Side Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    لماذا تطلب عرض سعر منا؟
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">أسعار تنافسية</h4>
                        <p className="text-gray-600 text-sm">نقدم أفضل الأسعار في السوق مع أعلى جودة</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">تقدير دقيق</h4>
                        <p className="text-gray-600 text-sm">نحسب التكلفة بناءً على احتياجاتك الفعلية</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">بدون مفاجآت</h4>
                        <p className="text-gray-600 text-sm">السعر المتفق عليه هو السعر النهائي</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">استشارة مجانية</h4>
                        <p className="text-gray-600 text-sm">نقدم نصائح مجانية حول أفضل طريقة للنقل</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 text-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">تحتاج مساعدة فورية؟</h3>
                  <p className="mb-6 opacity-90">
                    تواصل معنا مباشرة عبر الهاتف أو الواتساب للحصول على رد فوري
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+201063374834"
                      className="block bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                    >
                      📞 01063374834
                    </a>
                    <a
                      href="https://wa.me/201063374834?text=مرحباً، أريد طلب عرض سعر لنقل العفش"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
                    >
                      💬 واتساب مباشر
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/images/furniture-packing-boxes-damietta-family.webp"
                    alt="عائلة سعيدة مع خدمة نقل العفش"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// صفحة سياسة الخصوصية - Privacy Policy
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>سياسة الخصوصية - شركة نقل عفش دمياط</title>
        <meta name="description" content="سياسة الخصوصية وحماية البيانات الشخصية في شركة نقل عفش دمياط. التزامنا بحماية خصوصيتكم." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              سياسة الخصوصية
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              نحن ملتزمون بحماية خصوصيتكم وبياناتكم الشخصية
            </p>
            <div className="text-sm opacity-75 mt-4">
              آخر تحديث: سبتمبر 2025
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              
              {/* مقدمة */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمة</h2>
                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                  <p className="mb-4 text-lg leading-relaxed">
                    في <strong>شركة نقل عفش دمياط</strong>، نحن نقدر ثقتكم بنا ونلتزم بحماية خصوصيتكم وبياناتكم الشخصية. 
                    هذه السياسة توضح كيفية جمعنا واستخدامنا وحماية معلوماتكم الشخصية.
                  </p>
                  <p className="text-lg leading-relaxed">
                    باستخدام خدماتنا أو موقعنا الإلكتروني، فإنكم توافقون على ممارساتنا الموضحة في هذه السياسة.
                  </p>
                </div>
              </div>

              {/* المعلومات التي نجمعها */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">المعلومات التي نجمعها</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. المعلومات الشخصية</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>الاسم الكامل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>رقم الهاتف المحمول</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>عنوان البريد الإلكتروني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>العناوين (الحالي والجديد)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>تفاصيل حول الخدمة المطلوبة</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. معلومات الاستخدام</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>عنوان IP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>نوع المتصفح وإصداره</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>الصفحات التي تزورونها على موقعنا</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>وقت وتاريخ زيارتكم</span>
                  </li>
                </ul>
              </div>

              {/* كيف نستخدم معلوماتكم */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">كيف نستخدم معلوماتكم</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-500">📞</span>
                      تقديم الخدمات
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• التواصل معكم لتنسيق الخدمة</li>
                      <li>• تقديم عروض الأسعار</li>
                      <li>• تنفيذ خدمات النقل</li>
                      <li>• المتابعة بعد الخدمة</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-green-500">📈</span>
                      تحسين الخدمات
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• تطوير خدماتنا</li>
                      <li>• فهم احتياجات العملاء</li>
                      <li>• تحسين موقعنا الإلكتروني</li>
                      <li>• تقييم جودة الخدمة</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-purple-500">📧</span>
                      التواصل
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• إرسال التحديثات المهمة</li>
                      <li>• الرد على الاستفسارات</li>
                      <li>• إشعارات الخدمة</li>
                      <li>• العروض الخاصة (اختيارية)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-red-500">⚖️</span>
                      الالتزامات القانونية
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• الامتثال للقوانين</li>
                      <li>• حماية حقوقنا</li>
                      <li>• منع الاحتيال</li>
                      <li>• حل النزاعات</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* مشاركة المعلومات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">مشاركة المعلومات</h2>
                
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">⚠️ التزامنا بعدم المشاركة</h3>
                  <p className="text-yellow-700">
                    <strong>نحن لا نبيع أو نؤجر أو نشارك معلوماتكم الشخصية مع أطراف ثالثة لأغراض تسويقية.</strong>
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">قد نشارك معلوماتكم في الحالات التالية فقط:</h3>
                
                <div className="space-y-4">
                  <div className="border-r-4 border-blue-500 pr-4">
                    <h4 className="font-semibold text-gray-900">1. مقدمي الخدمات</h4>
                    <p className="text-gray-600">شركاء موثقون يساعدوننا في تقديم الخدمة (مثل شركات النقل المساعدة)</p>
                  </div>
                  
                  <div className="border-r-4 border-green-500 pr-4">
                    <h4 className="font-semibold text-gray-900">2. المتطلبات القانونية</h4>
                    <p className="text-gray-600">عند الطلب من قبل السلطات المختصة أو للامتثال للقوانين</p>
                  </div>
                  
                  <div className="border-r-4 border-orange-500 pr-4">
                    <h4 className="font-semibold text-gray-900">3. حماية الحقوق</h4>
                    <p className="text-gray-600">لحماية حقوقنا أو حقوق عملائنا أو الآخرين</p>
                  </div>
                </div>
              </div>

              {/* حماية البيانات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">حماية البيانات</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-green-500">🔒</span>
                      التدابير التقنية
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>تشفير البيانات (SSL/TLS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>جدران الحماية المتقدمة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>مراقبة أمنية مستمرة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>نسخ احتياطية آمنة</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-blue-500">👥</span>
                      التدابير الإدارية
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>وصول محدود للبيانات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>تدريب الموظفين على الأمان</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>سياسات أمنية صارمة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>مراجعة دورية للأمان</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* حقوقكم */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">حقوقكم</h2>
                
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <p className="text-blue-800 font-semibold mb-2">لديكم الحق في:</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                      <span className="text-blue-500">👁️</span>
                      الاطلاع
                    </h4>
                    <p className="text-sm text-gray-600">طلب نسخة من بياناتكم الشخصية المحفوظة لدينا</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                      <span className="text-green-500">✏️</span>
                      التصحيح
                    </h4>
                    <p className="text-sm text-gray-600">طلب تعديل أو تصحيح البيانات غير الصحيحة</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                      <span className="text-red-500">🗑️</span>
                      الحذف
                    </h4>
                    <p className="text-sm text-gray-600">طلب حذف بياناتكم (في ظروف معينة)</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                      <span className="text-purple-500">🚫</span>
                      الاعتراض
                    </h4>
                    <p className="text-sm text-gray-600">الاعتراض على معالجة بياناتكم لأغراض معينة</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>لممارسة هذه الحقوق:</strong> تواصلوا معنا على info@movedamietta.com أو الهاتف 01063374834
                  </p>
                </div>
              </div>

              {/* الكوكيز */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">استخدام الكوكيز</h2>
                
                <p className="mb-4">نستخدم الكوكيز لتحسين تجربتكم على موقعنا:</p>
                
                <div className="space-y-3 mb-6">
                  <div className="border-r-4 border-blue-500 pr-4">
                    <h4 className="font-semibold text-gray-900">كوكيز ضرورية</h4>
                    <p className="text-gray-600 text-sm">مطلوبة لعمل الموقع بشكل صحيح</p>
                  </div>
                  
                  <div className="border-r-4 border-green-500 pr-4">
                    <h4 className="font-semibold text-gray-900">كوكيز الأداء</h4>
                    <p className="text-gray-600 text-sm">تساعدنا في فهم كيفية استخدامكم للموقع</p>
                  </div>
                  
                  <div className="border-r-4 border-orange-500 pr-4">
                    <h4 className="font-semibold text-gray-900">كوكيز التفضيلات</h4>
                    <p className="text-gray-600 text-sm">تحفظ تفضيلاتكم وإعداداتكم</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  يمكنكم التحكم في الكوكيز من خلال إعدادات المتصفح الخاص بكم.
                </p>
              </div>

              {/* الاحتفاظ بالبيانات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">الاحتفاظ بالبيانات</h2>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="mb-4">نحتفظ ببياناتكم الشخصية للفترات التالية:</p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>بيانات العملاء النشطين:</strong> طوال فترة تقديم الخدمة + 3 سنوات</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>السجلات المالية:</strong> 7 سنوات (حسب القانون المصري)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>بيانات التسويق:</strong> حتى سحب الموافقة أو 2 سنة من آخر تفاعل</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>سجلات الموقع:</strong> 1 سنة للأغراض التقنية والأمنية</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* تحديثات السياسة */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">تحديثات السياسة</h2>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <p className="text-blue-800 mb-4">
                    قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعاركم بأي تغييرات جوهرية من خلال:
                  </p>
                  <ul className="space-y-2 text-blue-700">
                    <li>• نشر السياسة المحدثة على موقعنا</li>
                    <li>• إرسال إشعار بالبريد الإلكتروني (للتغييرات المهمة)</li>
                    <li>• إشعار عبر الهاتف أو الواتساب (للتغييرات الجوهرية)</li>
                  </ul>
                </div>
              </div>

              {/* التواصل */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">تواصلوا معنا</h2>
                
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-gray-600 mb-6">
                    إذا كانت لديكم أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتكم الشخصية، لا تترددوا في التواصل معنا:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">معلومات الشركة</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>الاسم:</strong> شركة نقل عفش دمياط</p>
                        <p><strong>العنوان:</strong> شارع الجمهورية، وسط البلد، دمياط</p>
                        <p><strong>الرقم التجاري:</strong> [يُضاف حسب السجل الفعلي]</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">معلومات التواصل</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <span>📞</span>
                          <strong>الهاتف:</strong> 
                          <a href="tel:+201063374834" className="text-blue-600 hover:underline">01063374834</a>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📧</span>
                          <strong>البريد الإلكتروني:</strong> 
                          <a href="mailto:info@movedamietta.com" className="text-blue-600 hover:underline">info@movedamietta.com</a>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💬</span>
                          <strong>الواتساب:</strong> 
                          <a href="https://wa.me/201063374834" className="text-green-600 hover:underline">01063374834</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <strong>ساعات العمل لاستقبال استفسارات الخصوصية:</strong> 
                      الاثنين - الخميس: 9:00 - 17:00 | الجمعة: 9:00 - 16:00 | السبت: 9:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>

              {/* خاتمة */}
              <div className="text-center py-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 inline-block">
                  <p className="text-green-800 font-semibold mb-2">
                    🛡️ التزامنا بخصوصيتكم
                  </p>
                  <p className="text-green-700 text-sm">
                    خصوصيتكم وأمان بياناتكم هي من أولوياتنا القصوى. 
                    نعمل باستمرار على تحسين تدابير الحماية والامتثال لأفضل الممارسات الدولية.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    تواصل معنا
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

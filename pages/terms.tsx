// صفحة الشروط والأحكام - Terms of Service
import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>الشروط والأحكام - شركة نقل عفش دمياط</title>
        <meta name="description" content="شروط وأحكام استخدام خدمات نقل الأثاث من شركة دمياط. قواعد وأحكام الخدمة وحقوق وواجبات الأطراف." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              الشروط والأحكام
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              شروط وأحكام استخدام خدمات شركة نقل عفش دمياط
            </p>
            <div className="text-sm opacity-75 mt-4">
              آخر تحديث: سبتمبر 2025 | سارية المفعول من تاريخ النشر
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              
              {/* مقدمة وقبول الشروط */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. مقدمة وقبول الشروط</h2>
                
                <div className="bg-indigo-50 p-6 rounded-xl border-r-4 border-indigo-500 mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    مرحباً بكم في <strong>شركة نقل عفش دمياط</strong>. هذه الشروط والأحكام تنظم العلاقة بينكم وبين شركتنا عند استخدام خدماتنا.
                  </p>
                  <p className="text-lg leading-relaxed">
                    باستخدام خدماتنا أو الموافقة على عرض الأسعار، فإنكم توافقون على الالتزام بهذه الشروط والأحكام.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ مهم:</strong> يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا. إذا كنتم لا توافقون على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.
                  </p>
                </div>
              </div>

              {/* تعريف المصطلحات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. تعريف المصطلحات</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">الشركة</h4>
                    <p className="text-sm text-gray-600">شركة نقل عفش دمياط ومالكيها وموظفيها</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">العميل</h4>
                    <p className="text-sm text-gray-600">أي شخص أو جهة تطلب خدماتنا</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">الخدمات</h4>
                    <p className="text-sm text-gray-600">جميع خدمات نقل الأثاث والخدمات ذات الصلة</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">الممتلكات</h4>
                    <p className="text-sm text-gray-600">الأثاث والأجهزة والمواد المراد نقلها</p>
                  </div>
                </div>
              </div>

              {/* الخدمات المقدمة */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. الخدمات المقدمة</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 نطاق الخدمات</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>نقل الأثاث المنزلي والمكتبي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>خدمات التغليف والحماية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>فك وتركيب الأثاث</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>خدمات الونش والرافعة</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>التخزين المؤقت</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>التنظيف بعد النقل</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>النقل بين المحافظات</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>خدمات طوارئ</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 قيود الخدمة</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-800 font-semibold mb-2">لا نتعامل مع:</p>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• المواد الخطرة أو القابلة للاشتعال</li>
                    <li>• المواد غير القانونية</li>
                    <li>• الحيوانات الأليفة</li>
                    <li>• النباتات الحية (إلا بترتيب مسبق)</li>
                    <li>• المجوهرات والنقود (إلا بترتيب أمني خاص)</li>
                    <li>• المواد القابلة للتلف بسرعة</li>
                  </ul>
                </div>
              </div>

              {/* الحجز والمواعيد */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. الحجز والمواعيد</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 عملية الحجز</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• يجب تأكيد الحجز كتابياً (واتساب، إيميل، أو رسالة نصية)</li>
                      <li>• يُفضل الحجز قبل 24-48 ساعة من موعد النقل المطلوب</li>
                      <li>• الحجوزات الطارئة خاضعة للتوفر مع رسوم إضافية</li>
                      <li>• جميع الحجوزات تحتاج موافقة نهائية من الشركة</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 تغيير أو إلغاء المواعيد</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• <strong>إشعار 24+ ساعة:</strong> تغيير مجاني</li>
                        <li>• <strong>إشعار 12-24 ساعة:</strong> رسوم 25% من قيمة الخدمة</li>
                        <li>• <strong>إشعار أقل من 12 ساعة:</strong> رسوم 50% من قيمة الخدمة</li>
                        <li>• <strong>عدم الحضور:</strong> تطبق الرسوم كاملة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* الأسعار والدفع */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. الأسعار والدفع</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 تحديد الأسعار</h3>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• الأسعار تُحدد بناءً على المسافة ونوع الخدمة وحجم الممتلكات</li>
                  <li>• جميع الأسعار شاملة ضريبة القيمة المضافة</li>
                  <li>• عروض الأسعار صالحة لمدة 7 أيام من تاريخ الإصدار</li>
                  <li>• قد تطبق رسوم إضافية للخدمات الخاصة أو الطوارئ</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 شروط الدفع</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">طرق الدفع المقبولة</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• النقد (الطريقة المفضلة)</li>
                      <li>• التحويل البنكي</li>
                      <li>• فوري</li>
                      <li>• شيكات للشركات الكبرى</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">مواعيد الدفع</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• الخدمات الصغيرة: دفع عند الانتهاء</li>
                      <li>• الخدمات الكبيرة: 50% مقدم + 50% عند الانتهاء</li>
                      <li>• الشركات: حسب الاتفاق المسبق</li>
                      <li>• التأخير في الدفع: فوائد 2% شهرياً</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* مسؤوليات العميل */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. مسؤوليات العميل</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 قبل النقل</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• توفير معلومات دقيقة عن الممتلكات والمواقع</li>
                      <li>• ضمان إمكانية الوصول للموقعين (الحالي والجديد)</li>
                      <li>• إفراغ الأدراج والخزائن من المحتويات الشخصية</li>
                      <li>• إشعارنا بأي قطع أثاث قيمة أو حساسة</li>
                      <li>• الحصول على موافقات الجيران/الإدارة إذا لزم الأمر</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">6.2 يوم النقل</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• التواجد في الموقع أو تعيين مندوب مخول</li>
                      <li>• تسهيل مهمة فريق العمل</li>
                      <li>• فحص الممتلكات قبل النقل والإبلاغ عن أي أضرار موجودة</li>
                      <li>• توقيع استمارات الاستلام والتسليم</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">6.3 بعد النقل</h3>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <ul className="space-y-2 text-orange-800">
                        <li>• فحص الممتلكات فور الوصول</li>
                        <li>• الإبلاغ عن أي أضرار خلال 24 ساعة</li>
                        <li>• دفع المبلغ المستحق حسب الاتفاق</li>
                        <li>• تقييم الخدمة (اختياري)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* مسؤوليات الشركة */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. مسؤوليات الشركة</h2>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1 التزاماتنا</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">الجودة والاحترافية</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• فريق عمل مدرب ومؤهل</li>
                        <li>• استخدام معدات آمنة وحديثة</li>
                        <li>• التعامل المحترف مع الممتلكات</li>
                        <li>• الالتزام بالمواعيد المحددة</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">السلامة والأمان</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• تطبيق معايير السلامة</li>
                        <li>• التأمين على الممتلكات</li>
                        <li>• استخدام مواد تغليف عالية الجودة</li>
                        <li>• تأمين النقل والتحميل الآمن</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">7.2 حدود المسؤولية</h3>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <p className="text-yellow-800 font-semibold mb-3">⚠️ مهم - قيود المسؤولية:</p>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• مسؤوليتنا محدودة بقيمة الممتلكات المتضررة أو المفقودة</li>
                      <li>• الحد الأقصى للتعويض: 1000 جنيه لكل قطعة إلا إذا تم الإعلان عن قيمة أعلى مسبقاً</li>
                      <li>• لا نتحمل مسؤولية الأضرار الناتجة عن عوامل خارجة عن سيطرتنا</li>
                      <li>• الأضرار المخفية التي لم يتم الإبلاغ عنها خلال 24 ساعة</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* التأمين والتعويضات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. التأمين والتعويضات</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">8.1 التغطية التأمينية</h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-green-800">
                        <li>• تأمين أساسي مجاني لجميع العملاء</li>
                        <li>• تأمين شامل إضافي متاح (بتكلفة إضافية)</li>
                        <li>• تغطية ضد الأضرار والفقدان أثناء النقل</li>
                        <li>• تأمين ضد أضرار الطقس والحوادث الطبيعية</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">8.2 إجراءات المطالبة</h3>
                    <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                      <li>الإبلاغ الفوري عن أي ضرر أو فقدان</li>
                      <li>تعبئة نموذج المطالبة خلال 48 ساعة</li>
                      <li>تقديم الأدلة (صور، فواتير، شهود)</li>
                      <li>تقييم الضرر من قبل خبير معتمد</li>
                      <li>تسوية المطالبة خلال 7-14 يوم عمل</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* القوة القاهرة */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. القوة القاهرة</h2>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    لا تتحمل الشركة مسؤولية التأخير أو عدم الوفاء بالالتزامات نتيجة لظروف خارجة عن السيطرة، بما في ذلك:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">⚠️</span>
                        <span className="text-sm">الكوارث الطبيعية والطقس السيء</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">⚠️</span>
                        <span className="text-sm">الإضرابات والاضطرابات المدنية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">⚠️</span>
                        <span className="text-sm">القرارات الحكومية والقوانين الطارئة</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">⚠️</span>
                        <span className="text-sm">أعطال المعدات غير المتوقعة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">⚠️</span>
                        <span className="text-sm">الحوادث والازدحام المروري الاستثنائي</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">⚠️</span>
                        <span className="text-sm">انقطاع الكهرباء أو الإنترنت</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* النزاعات وحل الخلافات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. النزاعات وحل الخلافات</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">10.1 الحل الودي</h3>
                    <p className="text-gray-600 mb-3">
                      نشجع على حل جميع النزاعات بطريقة ودية من خلال:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• التواصل المباشر مع إدارة خدمة العملاء</li>
                      <li>• الوساطة عبر طرف ثالث محايد</li>
                      <li>• جلسات تفاوض مباشرة</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">10.2 الإجراءات القانونية</h3>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <ul className="space-y-2 text-blue-800">
                        <li>• جميع النزاعات تخضع للقانون المصري</li>
                        <li>• الاختصاص القضائي لمحاكم دمياط</li>
                        <li>• مدة التقادم: سنتان من تاريخ وقوع النزاع</li>
                        <li>• اللغة المعتمدة: العربية</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* الخصوصية والبيانات */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">11. الخصوصية وحماية البيانات</h2>
                
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <p className="text-purple-800 mb-4">
                    نحن ملتزمون بحماية خصوصيتكم وبياناتكم الشخصية وفقاً لـ{' '}
                    <Link href="/privacy" className="underline font-semibold">
                      سياسة الخصوصية
                    </Link>{' '}
                    الخاصة بنا.
                  </p>
                  
                  <ul className="space-y-2 text-purple-700">
                    <li>• جمع واستخدام البيانات للأغراض المحددة فقط</li>
                    <li>• عدم مشاركة البيانات مع أطراف ثالثة إلا بموافقتكم</li>
                    <li>• حماية البيانات بأعلى معايير الأمان</li>
                    <li>• حقكم في الوصول وتعديل وحذف بياناتكم</li>
                  </ul>
                </div>
              </div>

              {/* تعديل الشروط */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">12. تعديل الشروط والأحكام</h2>
                
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-3">حقنا في التعديل</h3>
                  <p className="text-yellow-700 mb-4">
                    نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. التعديلات تصبح سارية المفعول فور نشرها على موقعنا.
                  </p>
                  
                  <h4 className="font-semibold text-yellow-800 mb-2">آلية الإشعار:</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• نشر النسخة المحدثة على الموقع الإلكتروني</li>
                    <li>• إشعار العملاء النشطين عبر الواتساب/الإيميل</li>
                    <li>• فترة إشعار مسبق 7 أيام للتغييرات الجوهرية</li>
                  </ul>
                </div>
              </div>

              {/* معلومات التواصل */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">13. معلومات التواصل</h2>
                
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <p className="text-gray-600 mb-6">
                    لأي استفسارات حول هذه الشروط والأحكام أو لحل أي نزاعات، يرجى التواصل معنا:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">معلومات الشركة</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-500">🏢</span>
                          <div>
                            <div className="font-semibold">الاسم التجاري</div>
                            <div className="text-gray-600">شركة نقل عفش دمياط</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="text-green-500">📍</span>
                          <div>
                            <div className="font-semibold">العنوان</div>
                            <div className="text-gray-600">شارع الجمهورية، وسط البلد، دمياط 34511</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="text-purple-500">📋</span>
                          <div>
                            <div className="font-semibold">السجل التجاري</div>
                            <div className="text-gray-600">[يُضاف الرقم الفعلي]</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">بيانات التواصل</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-500">📞</span>
                          <div>
                            <div className="font-semibold">الهاتف</div>
                            <a href="tel:+201063374834" className="text-blue-600 hover:underline">
                              01063374834
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-green-500">💬</span>
                          <div>
                            <div className="font-semibold">واتساب</div>
                            <a href="https://wa.me/201063374834" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                              01063374834
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-purple-500">📧</span>
                          <div>
                            <div className="font-semibold">البريد الإلكتروني</div>
                            <a href="mailto:info@movedamietta.com" className="text-purple-600 hover:underline">
                              info@movedamietta.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-orange-500">🌐</span>
                          <div>
                            <div className="font-semibold">الموقع الإلكتروني</div>
                            <div className="text-orange-600">movedamietta.com</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                      ⏰ ساعات العمل: الاثنين-الخميس (8:00-18:00) | الجمعة (8:00-17:00) | السبت (8:00-16:00)
                      <br />
                      🚨 خدمة الطوارئ: متاحة 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* إقرار القراءة والفهم */}
              <div className="text-center py-8">
                <div className="bg-indigo-50 p-8 rounded-2xl border-2 border-indigo-200 max-w-2xl mx-auto">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4">إقرار وموافقة</h3>
                  <p className="text-indigo-800 leading-relaxed mb-6">
                    باستخدام خدماتنا، فإنكم تؤكدون أنكم قرأتم وفهمتم هذه الشروط والأحكام وتوافقون على الالتزام بها.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/quote"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      اطلب عرض سعر
                    </Link>
                    <Link 
                      href="/contact"
                      className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
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
          </div>
        </section>
      </div>
    </>
  );
}

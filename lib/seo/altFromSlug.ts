// مكتبة تحويل أسماء الملفات إلى نصوص بديلة عربية طبيعية

/**
 * قاموس ترجمة المصطلحات من الإنجليزية إلى العربية
 */
const TRANSLATION_MAP: Record<string, string> = {
  // المدن
  damietta: "دمياط",
  new: "الجديدة", // فقط عندما تكون متبوعة بـ damietta
  
  // الخدمات الأساسية
  moving: "نقل",
  furniture: "عفش",
  packing: "تغليف",
  assembly: "فك وتركيب",
  storage: "تخزين",
  
  // المباني والأماكن
  apartment: "شقق",
  house: "فلل",
  office: "مكاتب",
  villa: "فيلا",
  commercial: "تجاري",
  
  // المعدات والأدوات
  van: "سيارة نقل",
  truck: "شاحنة",
  crane: "ونش",
  boxes: "كراتين",
  wrapping: "تغليف",
  
  // العمليات
  loading: "تحميل",
  unloading: "تفريغ",
  transport: "نقل",
  delivery: "توصيل",
  installation: "تركيب",
  dismantling: "فك",
  
  // الوصفات
  professional: "احترافي",
  expert: "خبير",
  specialist: "مختص",
  worker: "عامل",
  operator: "عامل تشغيل",
  
  // أنواع الخدمات
  service: "خدمة",
  company: "شركة",
  team: "فريق",
  crew: "طاقم",
  
  // إضافات
  preparation: "تحضير",
  inspection: "فحص",
  sealing: "إغلاق",
  ikea: "إيكيا",
  kitchen: "مطبخ",
  bedroom: "غرفة نوم",
  family: "عائلة",
};

/**
 * تنظيف وتقسيم اسم الملف
 */
function cleanAndSplitFilename(filename: string): string[] {
  // إزالة الامتداد
  const nameWithoutExt = filename.replace(/\.(webp|jpg|jpeg|png|mp4|avi|mov)$/i, '');
  
  // تقسيم بالشرطة
  return nameWithoutExt.split('-').filter(part => part.length > 0);
}

/**
 * ترجمة جزء واحد مع مراعاة السياق
 */
function translatePart(part: string, index: number, parts: string[]): string {
  const lowerPart = part.toLowerCase();
  
  // حالة خاصة: "new" + "damietta"
  if (lowerPart === 'new' && index < parts.length - 1 && parts[index + 1]?.toLowerCase() === 'damietta') {
    return 'دمياط الجديدة';
  }
  
  // تجاهل "damietta" إذا كانت جزءًا من "new damietta"
  if (lowerPart === 'damietta' && index > 0 && parts[index - 1]?.toLowerCase() === 'new') {
    return '';
  }
  
  return TRANSLATION_MAP[lowerPart] || part;
}

/**
 * إعادة ترتيب الكلمات العربية بشكل طبيعي
 */
function reorderArabicPhrases(translatedParts: string[]): string[] {
  const nonEmptyParts = translatedParts.filter(part => part.trim() !== '');
  
  // فصل المدينة عن باقي الأجزاء
  const cities = nonEmptyParts.filter(part => 
    part.includes('دمياط') || part === 'دمياط الجديدة'
  );
  
  const services = nonEmptyParts.filter(part => 
    !part.includes('دمياط') && part !== 'دمياط الجديدة'
  );
  
  // ترتيب الخدمات: نوع الخدمة + الوصف + المعدات
  const orderedServices: string[] = [];
  
  // أولاً: الخدمات الرئيسية
  const mainServices = services.filter(s => 
    ['نقل', 'تغليف', 'فك وتركيب', 'تخزين'].includes(s)
  );
  orderedServices.push(...mainServices);
  
  // ثانياً: المواد والأشياء
  const items = services.filter(s => 
    ['عفش', 'أثاث', 'كراتين', 'مكاتب', 'شقق', 'فلل'].includes(s)
  );
  orderedServices.push(...items);
  
  // ثالثاً: الأوصاف والتفاصيل
  const descriptions = services.filter(s => 
    !mainServices.includes(s) && !items.includes(s)
  );
  orderedServices.push(...descriptions);
  
  return [...orderedServices, ...cities];
}

/**
 * تحويل اسم ملف إلى نص بديل عربي طبيعي
 */
export function slugToAlt(filename: string, city?: 'damietta' | 'newDamietta'): string {
  const parts = cleanAndSplitFilename(filename);
  
  // ترجمة كل جزء
  const translatedParts = parts.map((part, index) => 
    translatePart(part, index, parts)
  );
  
  // إعادة ترتيب الأجزاء
  const orderedParts = reorderArabicPhrases(translatedParts);
  
  // تجميع النص
  let altText = orderedParts.join(' ');
  
  // إضافة المدينة إذا لم تكن موجودة
  if (city && !altText.includes('دمياط')) {
    const cityName = city === 'newDamietta' ? 'دمياط الجديدة' : 'دمياط';
    altText += ` في ${cityName}`;
  }
  
  // تنظيف النص النهائي
  altText = altText
    .replace(/\s+/g, ' ') // إزالة المسافات الزائدة
    .trim();
  
  return altText;
}

/**
 * إنشاء عنوان وصفي للصورة
 */
export function slugToTitle(filename: string, city?: 'damietta' | 'newDamietta'): string {
  const alt = slugToAlt(filename, city);
  return `صورة ${alt}`;
}

/**
 * إنشاء تسمية توضيحية للصورة
 */
export function slugToCaption(filename: string, city?: 'damietta' | 'newDamietta'): string {
  const alt = slugToAlt(filename, city);
  return alt;
}

/**
 * استخراج نوع الخدمة من اسم الملف
 */
export function extractServiceFromFilename(filename: string): string | null {
  const parts = cleanAndSplitFilename(filename).map(p => p.toLowerCase());
  
  if (parts.includes('moving') || parts.includes('transport')) return 'نقل عفش';
  if (parts.includes('packing') || parts.includes('wrapping')) return 'تغليف';
  if (parts.includes('assembly') || parts.includes('installation')) return 'فك وتركيب';
  if (parts.includes('crane')) return 'ونش رفع';
  if (parts.includes('office') || parts.includes('commercial')) return 'نقل مكاتب';
  if (parts.includes('storage')) return 'تخزين';
  
  return null;
}

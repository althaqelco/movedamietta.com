// مكتبة الإحداثيات والأماكن للمدن
export interface PlaceData {
  name: string;
  nameAr: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  addressCountry: string;
  addressRegion: string;
}

// إحداثيات المدن الرئيسية
export const CITY_COORDINATES = {
  damietta: {
    latitude: 31.417540,
    longitude: 31.814444,
  },
  newDamietta: {
    latitude: 31.426052200000015,
    longitude: 31.80263490273438,
  },
} as const;

// بيانات المدن الكاملة
export const CITIES_DATA: Record<string, PlaceData> = {
  damietta: {
    name: "Damietta",
    nameAr: "دمياط",
    geo: CITY_COORDINATES.damietta,
    addressCountry: "EG",
    addressRegion: "Damietta Governorate",
  },
  newDamietta: {
    name: "New Damietta", 
    nameAr: "دمياط الجديدة",
    geo: CITY_COORDINATES.newDamietta,
    addressCountry: "EG",
    addressRegion: "Damietta Governorate",
  },
} as const;

/**
 * تحويل اسم المدينة إلى بيانات JSON-LD للمكان
 */
export function cityToCoords(city: keyof typeof CITIES_DATA): PlaceData {
  const cityData = CITIES_DATA[city];
  if (!cityData) {
    throw new Error(`City "${city}" not found in CITIES_DATA`);
  }
  return cityData;
}

/**
 * تحويل بيانات المدينة إلى تنسيق JSON-LD Place
 */
export function cityToPlaceLD(city: keyof typeof CITIES_DATA) {
  const data = cityToCoords(city);
  return {
    "@type": "Place",
    "name": data.nameAr,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.latitude,
      "longitude": data.geo.longitude,
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": data.addressCountry,
      "addressRegion": data.addressRegion,
      "addressLocality": data.nameAr,
    },
  };
}

/**
 * الحصول على جميع المدن كمصفوفة من أماكن JSON-LD
 */
export function getAllCitiesAsPlaces() {
  return Object.keys(CITIES_DATA).map(city => 
    cityToPlaceLD(city as keyof typeof CITIES_DATA)
  );
}

/**
 * تحديد نطاق الخدمة الجغرافي
 */
export const SERVICE_AREA = {
  primary: ["damietta", "newDamietta"] as const,
  secondary: ["ras-el-bar"] as const, // مناطق إضافية اختيارية
};

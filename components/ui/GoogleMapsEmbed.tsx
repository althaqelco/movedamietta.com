// مكون Google Maps التفاعلي
import React from 'react';

interface GoogleMapsEmbedProps {
  width?: string;
  height?: string;
  className?: string;
}

export function GoogleMapsEmbed({ 
  width = "100%", 
  height = "450",
  className = ""
}: GoogleMapsEmbedProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108946.1460154367!2d31.80263490273438!3d31.426052200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e3804f10fd33%3A0x1054820c72d9a0e7!2z2LTYsdmD2Kkg2KjYsdmI2YPYsSDZhNmG2YLZhCDYp9mE2LnZgdi0INio2K_ZhdmK2KfYtyDYp9mE2KzYr9mK2K_YqQ!5e0!3m2!1sar!2seg!4v1758986593447!5m2!1sar!2seg"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="موقع شركة نقل عفش دمياط على Google Maps"
      />
    </div>
  );
}

// مكون مبسط للخريطة مع معلومات
export function GoogleMapsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          موقعنا على الخريطة
        </h3>
        <p className="text-gray-600 mb-4">
          تجدونا في دمياط الجديدة، محافظة دمياط، مصر
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            <span>دمياط الجديدة، محافظة دمياط</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>01063374834</span>
          </div>
        </div>
      </div>
      <GoogleMapsEmbed height="250" />
      <div className="p-4 bg-gray-50">
        <a 
          href="https://maps.google.com/?cid=1176256325850218727" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
          عرض في Google Maps
        </a>
      </div>
    </div>
  );
}

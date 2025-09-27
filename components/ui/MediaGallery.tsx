// مكون معرض الصور والفيديوهات المبسط
import React from 'react';
import Image from 'next/image';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  poster?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  city: string;
  service: string;
  title?: string;
  description?: string;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function MediaGallery({
  items,
  city,
  service,
  title = 'معرض الأعمال',
  description,
  className = '',
  columns = 3
}: MediaGalleryProps) {
  const gridClass = `grid ${
    columns === 2 ? 'md:grid-cols-2' : 
    columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' :
    'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  } gap-6`;

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={gridClass}>
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="relative">
                  <video
                    className="w-full h-80 object-cover"
                    poster={item.poster}
                    muted
                  >
                    <source src={item.src} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو
                  </video>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4">
                      <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <div className="mt-2 inline-flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>عرض</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
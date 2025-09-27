// مكون صورة محسن جغرافياً مع SEO
import Image, { ImageProps } from 'next/image';
import { slugToAlt, slugToTitle, slugToCaption } from '@/lib/seo/altFromSlug';
import { imageLD } from '@/lib/seo/jsonld';
import { basename } from 'path';

interface GeoOptimizedImageProps extends Omit<ImageProps, 'alt'> {
  city: 'damietta' | 'newDamietta';
  priority?: boolean;
  caption?: string;
  showCaption?: boolean;
  className?: string;
  containerClassName?: string;
}

/**
 * مكون صورة محسن للـ SEO الجغرافي
 * يقوم بإنشاء النص البديل تلقائياً من اسم الملف
 * يضيف JSON-LD للصورة
 * يدعم التسمية التوضيحية
 */
export default function GeoOptimizedImage({
  src,
  width,
  height,
  city,
  priority = false,
  caption,
  showCaption = true,
  className = "",
  containerClassName = "",
  ...props
}: GeoOptimizedImageProps) {
  const filename = basename(typeof src === 'string' ? src : '');
  const autoAlt = slugToAlt(filename, city);
  const imageTitle = slugToTitle(filename, city);
  const imageCaption = caption || slugToCaption(filename, city);
  
  // إنشاء JSON-LD للصورة
  const imageJsonLd = imageLD({
    url: typeof src === 'string' ? src : '',
    width: typeof width === 'number' ? width : undefined,
    height: typeof height === 'number' ? height : undefined,
    city,
    alt: autoAlt,
    caption: imageCaption,
  });

  return (
    <>
      {/* JSON-LD للصورة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageJsonLd) }}
      />
      
      {/* حاوي الصورة */}
      <figure className={`geo-optimized-image ${containerClassName}`}>
        <Image
          src={src}
          alt={autoAlt}
          title={imageTitle}
          width={width}
          height={height}
          priority={priority}
          className={`object-cover rounded-lg shadow-md ${className}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
        
        {/* التسمية التوضيحية */}
        {showCaption && imageCaption && (
          <figcaption className="mt-2 text-sm text-gray-600 text-center">
            {imageCaption}
          </figcaption>
        )}
      </figure>
    </>
  );
}

/**
 * مكون صورة بطل (Hero) محسن جغرافياً
 */
export function GeoHeroImage({
  src,
  city,
  className = "",
  ...props
}: Omit<GeoOptimizedImageProps, 'priority' | 'showCaption'>) {
  return (
    <GeoOptimizedImage
      src={src}
      city={city}
      priority={true}
      showCaption={false}
      className={`w-full h-[400px] lg:h-[500px] object-cover ${className}`}
      {...props}
    />
  );
}

/**
 * مكون شبكة صور محسنة جغرافياً
 */
export function GeoImageGrid({ 
  images, 
  city, 
  columns = 3 
}: {
  images: Array<{
    src: string;
    width: number;
    height: number;
    caption?: string;
  }>;
  city: 'damietta' | 'newDamietta';
  columns?: 2 | 3 | 4;
}) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 ${gridCols[columns]}`}>
      {images.map((image, index) => (
        <GeoOptimizedImage
          key={index}
          src={image.src}
          width={image.width}
          height={image.height}
          city={city}
          caption={image.caption}
          priority={index === 0} // أول صورة فقط priority
          className="h-[250px] object-cover"
        />
      ))}
    </div>
  );
}

// مكون فيديو محسن جغرافياً مع SEO
import { videoLD } from '@/lib/seo/jsonld';
import { slugToAlt } from '@/lib/seo/altFromSlug';
import { basename } from 'path';

interface GeoOptimizedVideoProps {
  src: string;
  poster?: string;
  city: 'damietta' | 'newDamietta' | 'rasElBar';
  name?: string;
  description?: string;
  uploadDate?: string;
  duration?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  className?: string;
  containerClassName?: string;
  showDescription?: boolean;
}

/**
 * مكون فيديو محسن للـ SEO الجغرافي
 */
export default function GeoOptimizedVideo({
  src,
  poster,
  city,
  name,
  description,
  uploadDate,
  duration,
  width = 800,
  height = 450,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  preload = 'metadata',
  className = '',
  containerClassName = '',
  showDescription = true,
}: GeoOptimizedVideoProps) {
  const filename = basename(src);
  const autoName = name || slugToAlt(filename, city);
  const autoDescription = description || `فيديو يوضح ${slugToAlt(filename, city)}`;
  const videoUploadDate = uploadDate || new Date().toISOString();

  // إنشاء JSON-LD للفيديو
  const videoJsonLd = videoLD({
    name: autoName,
    description: autoDescription,
    contentUrl: src,
    thumbnailUrl: poster,
    uploadDate: videoUploadDate,
    duration: duration,
    city: city,
  });

  return (
    <>
      {/* JSON-LD للفيديو */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      
      {/* حاوي الفيديو */}
      <figure className={`geo-optimized-video ${containerClassName}`}>
        <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-900">
          <video
            src={src}
            poster={poster}
            width={width}
            height={height}
            controls={controls}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            preload={preload}
            className={`w-full h-auto ${className}`}
            title={autoName}
          >
            <p>
              متصفحك لا يدعم تشغيل الفيديو. 
              <a href={src} download>
                يمكنك تحميل الفيديو بدلاً من ذلك
              </a>
            </p>
          </video>
        </div>
        
        {/* وصف الفيديو */}
        {showDescription && (
          <div className="mt-3 space-y-2">
            <h3 className="font-semibold text-lg text-gray-900">
              {autoName}
            </h3>
            <p className="text-sm text-gray-600">
              {autoDescription}
            </p>
            {duration && (
              <div className="text-xs text-gray-500">
                مدة الفيديو: {formatDuration(duration)}
              </div>
            )}
          </div>
        )}
      </figure>
    </>
  );
}

/**
 * مكون فيديو مدمج بـ iframe
 */
export function EmbeddedGeoVideo({
  embedUrl,
  city,
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  width = 560,
  height = 315,
  className = '',
  containerClassName = '',
}: {
  embedUrl: string;
  city: 'damietta' | 'newDamietta' | 'rasElBar';
  name: string;
  description?: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration?: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
}) {
  const videoJsonLd = videoLD({
    name,
    description: description || name,
    contentUrl: embedUrl,
    embedUrl: embedUrl,
    thumbnailUrl,
    uploadDate: uploadDate || new Date().toISOString(),
    duration,
    city,
  });

  return (
    <>
      {/* JSON-LD للفيديو المدمج */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      
      <figure className={`embedded-geo-video ${containerClassName}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            src={embedUrl}
            width={width}
            height={height}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`absolute inset-0 w-full h-full ${className}`}
          />
        </div>
        
        {description && (
          <figcaption className="mt-2 text-sm text-gray-600 text-center">
            {description}
          </figcaption>
        )}
      </figure>
    </>
  );
}

/**
 * شبكة فيديوهات محسنة جغرافياً
 */
export function GeoVideoGrid({
  videos,
  city,
  columns = 2,
}: {
  videos: Array<{
    src: string;
    poster?: string;
    name?: string;
    description?: string;
    duration?: string;
    uploadDate?: string;
  }>;
  city: 'damietta' | 'newDamietta' | 'rasElBar';
  columns?: 1 | 2 | 3;
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {videos.map((video, index) => (
        <GeoOptimizedVideo
          key={index}
          src={video.src}
          poster={video.poster}
          city={city}
          name={video.name}
          description={video.description}
          duration={video.duration}
          uploadDate={video.uploadDate}
          className="aspect-video"
        />
      ))}
    </div>
  );
}

/**
 * تنسيق مدة الفيديو من ISO 8601 إلى شكل قابل للقراءة
 */
function formatDuration(isoDuration: string): string {
  // التعامل مع تنسيق ISO 8601 (PT1M30S) أو تنسيق بسيط (90)
  if (isoDuration.startsWith('PT')) {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (match) {
      const hours = parseInt(match[1] || '0');
      const minutes = parseInt(match[2] || '0');
      const seconds = parseInt(match[3] || '0');
      
      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      } else {
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
    }
  }
  
  // إذا كان رقم بسيط (بالثواني)
  const totalSeconds = parseInt(isoDuration);
  if (!isNaN(totalSeconds)) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return isoDuration;
}

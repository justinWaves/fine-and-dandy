'use client';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Mobile: 16:9 aspect ratio hack */}
      <div className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 md:hidden">
        <iframe
          src="https://player.vimeo.com/video/173166268?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
        />
      </div>
      
      {/* Desktop: Fill height and crop width */}
      <div className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 hidden md:block lg:w-[250vh] xl:w-[300vh]">
        <iframe
          src="https://player.vimeo.com/video/173166268?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
} 
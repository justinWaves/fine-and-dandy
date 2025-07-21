'use client';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-screen z-[-1] overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/173166268?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-[120vw] h-[120vh] min-w-full min-h-screen object-cover scale-[1.2]"
      />
    </div>
  );
} 
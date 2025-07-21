'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.style.width = '100%';
      iframe.style.height = '100%';
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen z-[-1] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/173166268?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full object-cover"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
} 
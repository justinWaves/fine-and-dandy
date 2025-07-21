'use client';

import Image from 'next/image';

export default function AnimatedFlowers() {
  return (
    <div className="relative w-full h-96 -mb-16">
      {/* Left Flower */}
      <div className="absolute left-8 bottom-0 flower-container">
        {/* Stem and Base */}
        <div className="relative flower-stem">
          <Image 
            src="/Flower Parts/stem-and-base.png" 
            alt="Flower stem and base" 
            width={160}
            height={240}
            className="flower-stem-img"
          />
        </div>
        
        {/* Left Leaf */}
        <div className="absolute left-2 bottom-20 flower-leaf-left">
          <Image 
            src="/Flower Parts/left-leaf.png" 
            alt="Left leaf" 
            width={80}
            height={120}
            className="flower-leaf-img"
          />
        </div>
        
        {/* Right Leaf */}
        <div className="absolute right-2 bottom-20 flower-leaf-right">
          <Image 
            src="/Flower Parts/right-leaf.png" 
            alt="Right leaf" 
            width={80}
            height={120}
            className="flower-leaf-img"
          />
        </div>
        
        {/* Flower Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flower-head" style={{ zIndex: 9999 }}>
          <Image 
            src="/Flower Parts/flower-head.png" 
            alt="Flower head" 
            width={800}
            height={800}
            className="flower-head-img"
            priority
          />
        </div>
      </div>

      {/* Right Flower - Inverted */}
      <div className="absolute right-8 bottom-0 flower-container flower-right">
        {/* Stem and Base */}
        <div className="relative flower-stem">
          <Image 
            src="/Flower Parts/stem-and-base.png" 
            alt="Flower stem and base" 
            width={160}
            height={240}
            className="flower-stem-img"
          />
        </div>
        
        {/* Left Leaf */}
        <div className="absolute left-2 bottom-20 flower-leaf-left">
          <Image 
            src="/Flower Parts/left-leaf.png" 
            alt="Left leaf" 
            width={80}
            height={120}
            className="flower-leaf-img"
          />
        </div>
        
        {/* Right Leaf */}
        <div className="absolute right-2 bottom-20 flower-leaf-right">
          <Image 
            src="/Flower Parts/right-leaf.png" 
            alt="Right leaf" 
            width={80}
            height={120}
            className="flower-leaf-img"
          />
        </div>
        
        {/* Flower Head - Inverted */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flower-head" style={{ zIndex: 9999, transform: 'translateX(-50%) scaleX(-1)' }}>
          <Image 
            src="/Flower Parts/flower-head.png" 
            alt="Flower head" 
            width={800}
            height={800}
            className="flower-head-img"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .flower-container {
          animation: flowerBounce 4s ease-in-out infinite;
        }
        
        .flower-right {
          animation-delay: 0.5s;
        }
        
        .flower-head {
          animation: headBob 3s ease-in-out infinite;
          transform-origin: bottom center;
        }
        
        .flower-stem {
          animation: stemSway 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        
        .flower-leaf-left {
          animation: leafWave 2.5s ease-in-out infinite;
          transform-origin: bottom center;
        }
        
        .flower-leaf-right {
          animation: leafWave 2.5s ease-in-out infinite 0.3s;
          transform-origin: bottom center;
        }
        
        @keyframes flowerBounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(2deg); }
          50% { transform: translateY(-4px) rotate(-1deg); }
          75% { transform: translateY(-6px) rotate(1deg); }
        }
        
        @keyframes headBob {
          0%, 100% { 
            transform: translateX(-50%) translateY(0px) scaleY(1);
          }
          25% { 
            transform: translateX(-50%) translateY(-3px) scaleY(1.1);
          }
          50% { 
            transform: translateX(-50%) translateY(-1px) scaleY(0.95);
          }
          75% { 
            transform: translateX(-50%) translateY(-2px) scaleY(1.05);
          }
        }
        
        @keyframes stemSway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          50% { transform: rotate(-2deg); }
          75% { transform: rotate(1deg); }
        }
        
        @keyframes leafWave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          50% { transform: rotate(5deg); }
          75% { transform: rotate(-8deg); }
        }
      `}</style>
    </div>
  );
} 
'use client';

import React from 'react';

// Individual Flower Component
function Flower({ isRight = false }) {
  return (
    <div 
      className="relative flower-container" 
      style={{ 
        width: '260px', 
        height: '500px',
        animation: 'flowerBounce 4s ease-in-out infinite',
        animationDelay: isRight ? '0.5s' : '0s'
      }}
    >
      {/* Stem */}
      <img
        src="/Flower Parts/stem-and-base.png"
        alt="Flower stem and base"
        className="flower-stem"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          width: '80px',
          height: '420px',
          transform: 'translateX(-50%)',
          zIndex: 1,
          animation: 'stemSway 4s ease-in-out infinite',
          animationDelay: isRight ? '0.5s' : '0s',
          transformOrigin: 'bottom center',
        }}
      />
      {/* Left Leaf */}
      <img
        src="/Flower Parts/left-leaf.png"
        alt="Left leaf"
        className="flower-leaf-left"
        style={{
          position: 'absolute',
          left: '25px',
          bottom: '120px',
          width: '90px',
          height: '110px',
          transform: 'rotate(-10deg)',
          zIndex: 2,
          animation: 'leafWave 2.5s ease-in-out infinite',
          animationDelay: isRight ? '0.8s' : '0s',
          transformOrigin: 'bottom center',
        }}
      />
      {/* Right Leaf */}
      <img
        src="/Flower Parts/right-leaf.png"
        alt="Right leaf"
        className="flower-leaf-right"
        style={{
          position: 'absolute',
          right: '15px',
          bottom: '110px',
          width: '110px',
          height: '120px',
          transform: 'rotate(10deg)',
          zIndex: 2,
          animation: 'leafWave 2.5s ease-in-out infinite',
          animationDelay: isRight ? '1.1s' : '0.3s',
          transformOrigin: 'bottom center',
        }}
      />
      {/* Head */}
      <img
        src="/Flower Parts/flower-head.png"
        alt="Flower head"
        className="flower-head"
        style={{
          position: 'absolute',
          left: '50%',
          top: '-60px',
          width: '260px',
          height: '260px',
          transform: 'translateX(-50%)',
          zIndex: 3,
          animation: 'headBob 3s ease-in-out infinite',
          animationDelay: isRight ? '0.5s' : '0s',
          transformOrigin: 'bottom center',
        }}
      />
    </div>
  );
}

export default function AnimatedFlowers() {
  return (
    <div className="relative w-full h-[60vh] min-h-[500px] -mb-16 flex items-end justify-between pointer-events-none select-none">
      {/* Left Flower */}
      <Flower isRight={false} />
      
      {/* Right Flower (mirrored) */}
      <div style={{ transform: 'scaleX(-1)' }}>
        <Flower isRight={true} />
      </div>

      <style jsx>{`
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
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(3deg); }
          50% { transform: translateX(-50%) rotate(-2deg); }
          75% { transform: translateX(-50%) rotate(1deg); }
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
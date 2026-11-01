import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch screens and if reduced motion is not requested
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Check hover state on clickable elements
    const handleElementHover = () => {
      const hoverables = document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive-card');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
    };
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    let frame;
    const follow = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      frame = requestAnimationFrame(follow);
    };
    frame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Precision Crosshair Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-lab-toxic pointer-events-none transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
          boxShadow: '0 0 10px #B5E853'
        }}
      />

      {/* Trailing Chemical Reticle */}
      <div
        className="fixed pointer-events-none border border-lab-green/60 rounded-full transition-all duration-150 flex items-center justify-center"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          transform: 'translate(-50%, -50%)',
          borderColor: isHovered ? '#B5E853' : 'rgba(128, 204, 40, 0.45)',
          backgroundColor: isHovered ? 'rgba(181, 232, 83, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(181, 232, 83, 0.3)' : 'none'
        }}
      >
        {/* Subtle crosshair lines when hovered */}
        {isHovered && (
          <>
            <div className="absolute w-full h-[1px] bg-lab-toxic/30" />
            <div className="absolute h-full w-[1px] bg-lab-toxic/30" />
          </>
        )}
      </div>
    </div>
  );
}


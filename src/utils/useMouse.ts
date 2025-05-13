'use client';
import { useState, useRef, useLayoutEffect } from 'react';

interface MouseState {
  x: number | null;
  y: number | null;
}

export function useMouse(): [MouseState, React.RefObject<HTMLDivElement>] {
  const [state, setState] = useState<MouseState>({
    x: null,
    y: null,
  });

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setState({
        x: event.clientX, // Viewport-based X
        y: event.clientY, // Viewport-based Y
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [state, ref];
}

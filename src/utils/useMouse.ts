'use client';
import { useState, useRef, useLayoutEffect } from 'react';

interface MouseState {
  x: number | null;
  y: number | null;
}

export function useMouse(): [MouseState, React.RefObject<HTMLDivElement | null>] {
  const [state, setState] = useState<MouseState>({
    x: null,
    y: null,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [state, ref];
}

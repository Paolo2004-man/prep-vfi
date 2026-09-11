import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Porta lo scroll in alto a ogni cambio di route. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

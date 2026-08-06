import { useState, useLayoutEffect } from 'react';

export const useExternalCss = (href) => {
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    // Kiểm tra xem thẻ link đã tồn tại chưa
    let link = document.querySelector(`link[href="${href}"]`);

    if (link) {
      if (link.dataset.loaded === 'true') {
        setLoaded(true);
        return;
      }
    } else {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.loaded = 'false';
      document.head.appendChild(link);
    }

    const handleLoad = () => {
      link.dataset.loaded = 'true';
      setLoaded(true);
    };

    link.addEventListener('load', handleLoad);
    return () => link.removeEventListener('load', handleLoad);
  }, [href]);

  return loaded;
};
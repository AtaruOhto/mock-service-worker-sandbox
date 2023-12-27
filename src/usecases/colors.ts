import { useEffect, useState } from 'react';
    
export const useColors = () => {  
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    (async() => {
      // https://github.com/vitest-dev/vitest/issues/4730
      // Vitest 1.0.2 broke happy-dom with msw + axios 
      const res = await fetch('/api/colors')
      const colors = await res.json()
      setColors(colors)
    })()
  }, []);

  return {
    colors
  }
};

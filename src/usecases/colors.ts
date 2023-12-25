import axios from 'axios';
import { useMemo } from 'react';
    
export const useColors = () => {

  const colors = useMemo(async() => 
    await axios.get('/api/colors')
  , []);
  
  return {
    colors
  }
};

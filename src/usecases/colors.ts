import axios from 'axios';
import { useEffect, useState } from 'react';
    
export const useColors = () => {
  
  const [colors, setColors] = useState([]);

  const fetchColors = async() => {
    const colors = await axios.get('/api/colors')
    console.log('useColors useEffect')
    setColors(colors.data)
  }
  
  useEffect(() => {
    fetchColors()
  }, []);


  
  return {
    colors,
    fetchColors
  }
};

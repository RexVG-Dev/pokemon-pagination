import { useEffect, useState } from "react"

export function useGetIdByUrl(url:string) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!url) return;

    const segments = url.split('/');
    const idValue = segments[segments.length - 2];
  
    setValue(idValue);
  }, [url]);

  return value;
}
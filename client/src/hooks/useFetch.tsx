import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    fetchData();
  }, [url]);
  
  //console.log(data);

  return [data];
};

export default useFetch;

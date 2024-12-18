import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        if (data) {
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, loading, isError };
};

export default useFetch;

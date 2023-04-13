import { useEffect, useState } from "react";

const useFetch = (url) => {

    const[data, setData] = useState(null);
    const[isLoading, setisLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
              if(!res.ok){
                  throw Error('Aw Snap! Something went wrong. Reload!');
              }
              return res.json();
          })
          .then(data => {
              setError(null);
              setData(data);
              setisLoading(false);
          })
          .catch(err => {
              setisLoading(false);
              setError(err.message);
          })
        }, 1000);
      }, [])
      return { data, isLoading, error };
}

export default useFetch;
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      setTimeout(function () {
        fetch(url)
          .then(function (res) {
            if (!res.ok) {
              // error coming back from server
              throw Error("could not fetch the data for that resource");
            }
            return res.json();
          })
          .then(function (data) {
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(function (err) {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          });
      }, 1000);
    },
    [url]
  );

  return { data, isPending, error };
};

export default useFetch;

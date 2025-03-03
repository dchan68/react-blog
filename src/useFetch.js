import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      const abortCont = new AbortController(); //will stop the useEffect if user quickly switches to another page to prevent this from running so it doesn't return a console error.
      setTimeout(function () {
        fetch(url, { signal: abortCont.signal })
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
            if (err.name === "AbortError") {
              console.log("fetch aborted"); //without the if else, aborting useFetch will still return console error bc the error message is still trying to update the state. Doing this will prevent state updation (setError)
            } else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          });
      }, 1000);
      return function () {
        abortCont.abort();
      };
    },
    [url]
  );

  return { data, isPending, error };
};

export default useFetch;

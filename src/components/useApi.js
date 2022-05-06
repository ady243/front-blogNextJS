import { AppContext } from "./appContext";
import { makeClient } from "../services/makeClient";
import { useState, useEfect, useContext } from "react";

const useApi = (defaultValue, method, ...args) => {
  const [result, setResult] = useState(defaultValue);
  const { jwt } = useContext(AppContext);
  const deps = JSON.stringify(args);

  useEfect(() => {
    (async () => {
      try {
        const { data } = await makeClient({
          headers: {
            authentication: jwt,
          },
        })[method](...args);
        setResult([null, data]);
      } catch (err) {
        setResult([err, err.response]);
      }
    })();
  }, [jwt, deps, method]);
  return result;
};

export default useApi;

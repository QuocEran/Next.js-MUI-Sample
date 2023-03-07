import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Endpoints from "utilities/enums/endpoints";

axios.defaults.baseURL = Endpoints.BASE_URL;

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const fetchData = async (params: AxiosRequestConfig) => {
      try {
        const result = await axios.request({ ...params, cancelToken: source.token });
        if (isMounted) {
          setResponse(result);
          setError(undefined);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message);
          setResponse(undefined);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    fetchData(axiosParams);
    return cleanUp;
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosParams]);

  return { response, error, loading };
};

export default useAxios;

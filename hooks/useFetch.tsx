import { useEffect, useState } from 'react';
import { useAxios } from '../components';
import { AxiosRequestConfig } from 'axios';

enum METHODS {
  get = 'get',
  delete = 'delete',
  head = 'head',
  options = 'options',
}

type FetchParams = {
  path: string;
  method: keyof typeof METHODS;
  options?: Omit<AxiosRequestConfig, 'params'>;
  variables?: any;
};

const useFetch = ({ method, path, options, variables }: FetchParams) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const api = useAxios();
  const action = api[method] as any;

  const handleRequest = (params, handleData) => {
    setLoading(true);
    action(path, { params, ...options })
      .then(handleData)
      .catch((e: any) => setError(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleRequest(variables, ({ data }) => {
      setData(data);
    });
  }, []);

  const fetchMore = (fetchMoreOptions?: any) => {
    handleRequest(fetchMoreOptions, ({ data }) => {
      setData((prev) => (Array.isArray(prev) ? [...prev, data] : [prev, data]));
    });
  };

  return { loading, error, data, fetchMore };
};

export default useFetch;

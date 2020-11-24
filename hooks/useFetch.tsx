import { useEffect, useState } from 'react';
import { useAxios, useToast } from '../components';
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
  const showToast = useToast();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();

  const api = useAxios();
  const action = api[method] as any;

  const handleRequest = (params, handleData) => {
    setLoading(true);
    action(path, { params, ...options })
      .then(handleData)
      .catch((e: Error) => showToast(e.message, { type: 'error' }))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleRequest(variables, ({ data }) => {
      setData(data);
    });
  }, []);

  const fetchMore = (
    fetchMoreOptions: any,
    updateDate: (prev: any, data: any) => any
  ) => {
    handleRequest(fetchMoreOptions, ({ data }) => {
      setData((prev: any) => updateDate(prev, data));
    });
  };

  return { loading, data, fetchMore };
};

export default useFetch;

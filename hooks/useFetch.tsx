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
  skip?: boolean;
};

const useFetch = ({ method, path, skip, options, variables }: FetchParams) => {
  const showToast = useToast();
  const [loading, setLoading] = useState(!skip);
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
    if (!skip) {
      handleRequest(variables, ({ data }) => {
        setData(data);
      });
    }
  }, [skip, variables]);

  const fetchMore = (
    fetchMoreOptions: any,
    updateData: (prev: any, data: any) => any
  ) => {
    handleRequest(fetchMoreOptions, ({ data }) => {
      setData((prev: any) => updateData(prev, data));
    });
  };

  return { loading, data, fetchMore };
};

export default useFetch;

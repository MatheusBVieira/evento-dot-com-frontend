import { useState } from 'react';
import { useAxios, useToast } from '../components';
import { AxiosRequestConfig } from 'axios';

enum METHODS {
  post = 'post',
  put = 'put',
  patch = 'patch',
}

type MutateParams = {
  path: string;
  method: keyof typeof METHODS;
  options?: Omit<AxiosRequestConfig, 'params'>;
};

type Mutate = (variables: any) => void;

type MutateResult = {
  data: any;
  loading: boolean;
  onCompleted: (callback: (data: any) => any) => any;
};

type IUseMutate = (params: MutateParams) => [Mutate, MutateResult];

const useMutate: IUseMutate = ({ method, path, options }) => {
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  const api = useAxios();
  const action = api[method] as any;

  const mutate = (variables: any) => {
    setLoading(true);
    action(path, variables, options)
      .then(({ data }) => {
        setData(data);
      })
      .catch((e: Error) => showToast(e.message, { type: 'error' }))
      .finally(() => setLoading(false));
  };

  const handleOnCompleted = (callback: (data: any) => void) => {
    callback(data);
  };

  return [mutate, { loading, data, onCompleted: handleOnCompleted }];
};

export default useMutate;

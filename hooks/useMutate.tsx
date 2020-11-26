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
  onCompleted?: (data: any) => void;
};

type Mutate = (variables: any) => void;

type MutateResult = {
  data: any;
  loading: boolean;
};

type IUseMutate = (params: MutateParams) => [Mutate, MutateResult];

const useMutate: IUseMutate = ({ method, path, options, onCompleted }) => {
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  const api = useAxios();
  const action = api[method] as any;

  const mutate = (variables: any) => {
    setLoading(true);
    action(path, variables, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })
      .then(({ data }) => {
        setData(data);
        onCompleted(data);
      })
      .catch((e: Error) => showToast(e.message, { type: 'error' }))
      .finally(() => setLoading(false));
  };

  return [mutate, { loading, data }];
};

export default useMutate;

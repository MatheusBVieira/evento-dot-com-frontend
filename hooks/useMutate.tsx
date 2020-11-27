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
  toast?: boolean;
};

type MutateResult = {
  data: any;
  loading: boolean;
};

type Mutate = (variables: any) => Promise<{ data: any; e: Error }>;

type IUseMutate = (params: MutateParams) => [Mutate, MutateResult];

const useMutate: IUseMutate = ({
  method,
  path,
  options,
  onCompleted,
  toast = true,
}) => {
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  const api = useAxios();
  const action = api[method] as any;

  const mutate = async (variables: any) => {
    setLoading(true);

    const response = await action(path, variables, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })
      .then(({ data }) => {
        setData(data);
        onCompleted(data);
      })
      .catch((e: Error) => toast && showToast(e.message, { type: 'error' }))
      .finally(() => setLoading(false));

    return response;
  };

  return [mutate, { loading, data }];
};

export default useMutate;

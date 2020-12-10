import { useState } from 'react';
import { useAxios, useToast } from '../components';
import { AxiosRequestConfig } from 'axios';

enum METHODS {
  post = 'post',
  put = 'put',
  delete = 'delete',
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

type PromiseResult = { data: any; e: Error };
type Mutate = (variables?: any) => Promise<PromiseResult>;

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

  const handleAction = async (variables: any) => {
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    return method === 'delete'
      ? await action(path, defaultOptions)
      : await action(path, variables, defaultOptions);
  };

  const mutate = async (variables: any) => {
    setLoading(true);

    const response: any = await handleAction(variables)
      .then(({ data }) => {
        setData(data);
        onCompleted && onCompleted(data);
      })
      .catch((e: Error) => toast && showToast(e.message, { type: 'error' }))
      .finally(() => setLoading(false));

    return response as PromiseResult;
  };

  return [mutate, { loading, data }];
};

export default useMutate;

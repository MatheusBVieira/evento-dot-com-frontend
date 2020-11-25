import useFetch from '../../hooks/useFetch';

const CompraContainer = ({ id }) => {
  const { data = {} } = useFetch({
    method: 'get',
    path: `/evento/${id}`,
    skip: !id,
  });

  return <div>{id}</div>;
};

export default CompraContainer;

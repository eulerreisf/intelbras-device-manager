import useAxios from 'axios-hooks';

export const useLoginFetcher = () => {
  const [ { loading, error }, login ] = useAxios( {
    url: `${import.meta.env.VITE_API_URL}system/login`,
    method: 'POST'
  },
    { manual: true } );

  return { loading, error, login };
};


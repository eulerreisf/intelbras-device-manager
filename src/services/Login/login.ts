import useAxios from 'axios-hooks';

export const useLoginFetcher = () => {
  const [ { data, loading, error }, login ] = useAxios( {
    url: `${import.meta.env.VITE_API_URL}system/login`,
    method: 'POST'
  },
    { manual: true } );

  localStorage.setItem( 'Token', data?.data?.Token );

  return { loading, error, login };
};


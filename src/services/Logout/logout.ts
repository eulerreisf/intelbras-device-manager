import useAxios from 'axios-hooks';

export const useLogoutFetcher = () => {
  const [ { loading, error }, logout ] = useAxios( {
    url: `${import.meta.env.VITE_API_URL}system/logout`,
    method: 'POST'
  },
    { manual: true } );

  return { loading, error, logout };
};


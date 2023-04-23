import useAxios from 'axios-hooks';

export const useCustumersFetcher = () => {
  const [ { data, loading, error }, getCustumers ] = useAxios( `${import.meta.env.VITE_API_URL}interface/wireless/id/clients/wireless` );

  const custumers = JSON.stringify( data );

  return { custumers, loading, error, getCustumers };
};
import useAxios from 'axios-hooks';

export const useCustomersFetcher = () => {
  const [ { data, loading, error }, getCustomers ] = useAxios( `${import.meta.env.VITE_API_URL}interface/wireless/id/clients/wireless` );

  const customers = JSON.stringify( data );

  return { customers, loading, error, getCustomers };
};
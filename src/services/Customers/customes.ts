import useAxios from 'axios-hooks';

export const useCustomersFetcher = () => {
  const [ { data, loading: loadingCustomers, error: errorCustomers }, getCustomers ] = useAxios( `${import.meta.env.VITE_API_URL}interface/wireless/id/clients/wireless` );

  const customers = data;

  return { customers, loadingCustomers, errorCustomers, getCustomers };
};
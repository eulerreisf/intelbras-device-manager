import useAxios from 'axios-hooks';

export const useDeviceFetcher = () => {
  const [ { data, loading, error }, getDevice ] = useAxios( `${import.meta.env.VITE_API_URL}system/device` );

  const device = JSON.stringify( data );

  return { device, loading, error, getDevice };
};
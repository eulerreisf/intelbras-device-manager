import useAxios from 'axios-hooks';

export const useRfPowerFetcher = () => {
  const [ { data, loading, error }, getRfPower ] = useAxios( `${import.meta.env.VITE_API_URL}interface/wireless/radio0/ssid/ssid1` );

  const rfPower = JSON.stringify( data );

  return { rfPower, loading, error, getRfPower };
};
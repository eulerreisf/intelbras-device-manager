import useAxios from 'axios-hooks';

export const useDeviceFetcher = () => {
  const [ { data, loading, error }, getDevice ] = useAxios( `${import.meta.env.VITE_API_URL}system/device` );

  const device = data;

  return { device, loading, error, getDevice };
};


export const useEditDevice = () => {
  const token = localStorage.getItem( 'Token' );
  const [ { loading: loadingEditDevice, error: errorEditDevice }, editDevice ] = useAxios( {
    url: `${import.meta.env.VITE_API_URL}system/device`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`
    }
  },
    { manual: true } );

  return { loadingEditDevice, errorEditDevice, editDevice };
};


import { useQuery } from 'react-query';
import api from '~/services/api';

async function getCaracters() {
  const { data } = await api.get('/character');

  return data;
}

export default function useFetchCaracters() {
  return useQuery(['caracters'], getCaracters);
}

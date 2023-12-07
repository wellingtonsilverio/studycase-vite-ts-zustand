import { useQuery } from 'react-query';
import api from '~/services/api';

async function getCharacter(page: number) {
  const { data } = await api.get(`/character?page=${page}`);

  return data;
}

export default function useFetchCharacter(page: number) {
  return useQuery(['character', page], () => getCharacter(page));
}

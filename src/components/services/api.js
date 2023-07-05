import axios from 'axios';

const apiKey = '36535246-034277b0f5c12969743e82132'

const api = axios.create({
 baseURL: 'https://pixabay.com/api/',
});

export const fetchImages = async () => {
 const { data } = await api.get('', {
   params: {
    key: apiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  },
  });
 return data;
} 
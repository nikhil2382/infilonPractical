import {get} from './index.ts';

const fetchImagesData = async () => {
  return get('https://jsonplaceholder.typicode.com/photos');
};

export const apis = {
  fetchImagesData,
};

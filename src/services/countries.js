import axios from 'axios';

import config from '../config';

const API_BASE_URL = config.api.baseUrl;

const getAll = async () => {
  const result = await axios
    .get(`${API_BASE_URL}/all`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      return error;
    });
  return result;
};

const getByName = async (name) => {
  const result = await axios
    .get(`${API_BASE_URL}/name/${name}`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      return error;
    });
  return result;
};
const getByCode = async (code) => {
  const result = await axios
    .get(`${API_BASE_URL}/alpha/${code}`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      return error;
    });
  return result;
};

export default {
  getAll,
  getByName,
  getByCode,
};

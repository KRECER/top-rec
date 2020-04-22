import axios from 'axios';

class ApiService {

  static init(options) {
    axios.defaults.baseURL = options.BASE_URL;
    axios.defaults.timeout = 1000 * 5;
  }

  static get(resource) {
    return axios.get(resource);
  }

  static post(resource, data) {
    return axios.post(resource, data);
  }

  static custom(data) {
    return axios(data);
  }

}

export { ApiService };

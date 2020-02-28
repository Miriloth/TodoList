import axios from 'axios';

const API_BASE = 'http://localhost:3009';

const apiGet = (path) => axios.get(`${API_BASE}${path}`);
const apiPost = (path, body) => axios.post(`${API_BASE}${path}`, body);
const apiDelete = (path, body) => axios.delete(`${API_BASE}${path}`, body);

export {
  apiGet,
  apiPost,
  apiDelete,
}

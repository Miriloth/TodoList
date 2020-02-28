import fetch from 'isomorphic-unfetch';

const API_BASE = 'http://localhost:3000';

const apiGet = async (path) => await fetch(`${API_BASE}${path}`);
const apiPost = (path, body) => fetch(`${API_BASE}${path}`, {
  method: 'POST',
  body: JSON.stringify(body),
});

export {
  apiGet,
  apiPost,
}

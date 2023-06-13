import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function getAll() {
  return sendRequest(`${BASE_URL}/all`);
}

export function update(userData) {
  return sendRequest(`${BASE_URL}/update`, 'POST', userData);
}

export function updateName(userData) {
  return sendRequest(`${BASE_URL}/update-name`, 'POST', userData);
}

export function updatePhone(userData) {
  return sendRequest(`${BASE_URL}/update-phone`, 'POST', userData);
}

export function updateTitle(userData) {
  return sendRequest(`${BASE_URL}/update-title`, 'POST', userData);
}

// export function clockIn(userData) {
//   return sendRequest(`${BASE_URL}/clockIn`, 'POST', userData);
// }

// export function clockOut(userData) {
//   return sendRequest(`${BASE_URL}/clockOut`, 'POST', userData);
// }

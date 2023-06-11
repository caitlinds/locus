import sendRequest from "./send-request";
const BASE_URL = '/api/times';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getUserAll() {
    return sendRequest(`${BASE_URL}/userall`);
}

// export function getStatus() {
//     return sendRequest(`${BASE_URL}/status`);
// }

export function add(timeData) {
    return sendRequest(BASE_URL, 'POST', timeData);
}

export function update(timeData) {
    return sendRequest(`${BASE_URL}/update`, 'POST', timeData);
}


import sendRequest from "./send-request";
const BASE_URL = '/api/goals';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(goalData) {
    return sendRequest(BASE_URL, 'POST', goalData);
}

export function update(goalData) {
    return sendRequest(`${BASE_URL}/update`, 'POST', goalData);
}

export function deleteGoal(goalData) {
    return sendRequest(`${BASE_URL}/delete`, 'PUT', goalData);
}


import sendRequest from "./send-request";
const BASE_URL = '/api/tweets';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(tweetData) {
    return sendRequest(BASE_URL, 'POST', tweetData);
}

export function update(tweetData) {
    return sendRequest(`${BASE_URL}/update`, 'POST', tweetData);
}

export function deleteTweet(tweetData) {
    return sendRequest(`${BASE_URL}/delete`, 'PUT', tweetData);
}


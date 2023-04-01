import sendRequest from "./send-request";
const BASE_URL = '/api/tweets';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(tweetData) {
    return sendRequest(BASE_URL, 'POST', tweetData);
}

export function edit(tweetData) {
    return sendRequest(BASE_URL, 'POST', tweetData);
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvent = void 0;
const EVENT_PATH = 'events';
// const API_URL = 'https://api.getarena.xyz/'
const API_URL = 'http://localhost:8080/';
async function logEvent(token, walletAddress, event) {
    if (!token || !event || !walletAddress)
        return false;
    const reqBody = {
        'token': token,
        'description': event,
        'customerAddress': walletAddress
    };
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
    };
    fetch(API_URL + EVENT_PATH, reqOptions)
        .then(res => {
        return true;
    }).catch(error => {
        console.error(error);
        return false;
    });
}
exports.logEvent = logEvent;

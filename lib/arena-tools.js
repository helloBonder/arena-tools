"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvent = void 0;
const CUSTOM_EVENT_PATH = 'event/custom';
const API_URL = 'https://api.getarena.xyz/';
async function logEvent(token, walletAddress, event) {
    if (!token || !event || !walletAddress)
        return false;
    const reqBody = {
        'token': token,
        'event': event,
        'address': walletAddress
    };
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
    };
    fetch(API_URL + CUSTOM_EVENT_PATH, reqOptions)
        .then(res => {
        return true;
    }).catch(error => {
        console.error(error);
        return false;
    });
}
exports.logEvent = logEvent;

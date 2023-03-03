const EVENT_PATH = 'events'
const API_URL = 'https://api.getarena.xyz/'

async function logEvent(token, walletAddress, event) {
    if (!token || !event || !walletAddress) return false;
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
            return true
        }).catch(error => {
        console.error(error);
        return false
    });
}

export { logEvent }
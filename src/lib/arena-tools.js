const EVENT_CONNECTION_PATH = '/event/connect'
const API_URL = 'http://localhost:8080/'

async function logAccountConnectedEvent(dApp, walletAddress) {
    if (!dApp || !walletAddress) return false;
    const reqBody = {
        'dApp': dApp,
        'address': walletAddress
    };
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(reqBody),
    };
    console.log(API_URL + EVENT_CONNECTION_PATH)
    fetch(API_URL + EVENT_CONNECTION_PATH, reqOptions)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.error(error);
        });
}

export { logAccountConnectedEvent }

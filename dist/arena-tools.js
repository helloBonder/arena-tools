"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logAccountConnectedEvent = logAccountConnectedEvent;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
const EVENT_CONNECTION_PATH = 'event/connect';
//const API_URL = 'http://localhost:8080/'
const API_URL = 'https://arena-api-stage.herokuapp.com/';
async function logAccountConnectedEvent(dApp, walletAddress) {
  if (!dApp || !walletAddress) return false;
  const reqBody = {
    'dApp': dApp,
    'address': walletAddress
  };
  const reqOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  };
  fetch(API_URL + EVENT_CONNECTION_PATH, reqOptions).then(res => {
    return true;
  }).catch(error => {
    console.error(error);
    return false;
  });
}
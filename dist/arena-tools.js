"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logAccountConnectedEvent = logAccountConnectedEvent;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
//import 'core-js'

const EVENT_CONNECTION_PATH = 'event/connect';
const API_URL = 'http://localhost:8080/';
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
    console.log(res);
  }).catch(error => {
    console.error(error);
  });
}
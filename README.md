<p align="center">
  <a href="https://www.getarena.xyz/" target="_blank">
    <img src="https://uploads-ssl.webflow.com/62ceb6b9a47f6225fcb1e08e/62e86d9d54b300192a31fb76_200%20%20(2048%20%C3%97%20500%20px).png" alt="Arena Logo" style="width:400px"><br/>
  </a>
    Simple event tracking tools for web3 applications
</p>

## Documentation

You can get the latest version of Arena tools from [npm](https://www.npmjs.com/package/arena-tools).

Once installed you can begin tracking your events in your code calling these methods:

### Wallet connection

You can track a wallet connection by invoking the `logAccountConnectedEvent` method:

```javascript
import React, { Component }  from 'react';
// Other imports you nede
import { logAccountConnectedEvent } from 'arena-tools'
const ARENA_TOKEN = '1234567890' // You'll get your token by signing in our website

// YOUR CODE HERE

// When a wallet is connected call this method
logAccountConnectedEvent(ARENA_TOKEN, walletAddress)

```

# BlPubSub.js

BlPubSub.js provides a minimal higher-level wrapper around BlPubSub's API.

## Usage

```javascript
/*
   Data can be retrieved from the API either using callbacks (as in versions < 1.0)
   or using a new promise-based API. The promise-based API returns the raw Axios
   request promise.
 */
import BlPubSub from 'bl-pubsub';

// unauthenticated client
const bl = new BlPubSub();

```

```javascript

var BlPubSub = require('bl-pubsub');

//publish
const blPubSub = new BlPubSub();
blPubSub.nrp.emit('bl/api/test', 'data')

//subscribe
const blPubSub = new BlPubSub();
blPubSub.nrp.on('bl/api/test', function(data, channel) {
    console.log('channel =>' + channel);
    console.log('bl/api/test data =>' + data);

  })
```

## API Documentation


## Installation
BlPubSub.js is available from `npm` or [unpkg][unpkg].

```shell
npm install BlPubSub-api
```

```html
<!-- just BlPubSub-api source (5.3kb) -->
<script src="https://unpkg.com/BlPubSub-api/dist/BlPubSub.min.js"></script>

<!-- standalone (20.3kb) -->
<script src="https://unpkg.com/BlPubSub-api/dist/BlPubSub.bundle.min.js"></script>
```

## Compatibility
`BlPubSub.js` is tested on Node.js:
* 6.x

Note: `BlPubSub.js` uses Promise, hence it will not work in Node.js < 4 without polyfill.


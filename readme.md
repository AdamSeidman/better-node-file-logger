# Better Node File Logger
An even simpler logger for quick logging.

# Docs & Features
## Dependencies
node-file-logger

# Steps to use
## Installation
`npm install better-node-file-logger --save`

## Create instance of Node file logger
```javascript
// Ceate an instance of better node file logger
const log = require('better-node-file-logger');
log.QuickInit('LogPrefix_') // Optional prefix instead of SetUserOptions()
```

For more info on logging, see [original library](https://github.com/routbisu/node-file-logger/tree/master).
Note, I changed all of the original functions to camelCase. This is because I am a menace.

## License
MIT

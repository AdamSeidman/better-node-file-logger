/**
 * Better Node File Logger
 * ==========================
 * I got tired of typing out the function names and such with node-file-logger.
 * This won't suit everyone but it made my life easier.
 */

const parentLogger = require('node-file-logger');

// Get basic service name.
const getCallingService = function() {
    var service = new Error('').stack.split('\n')[3];
    service = service.slice(service.lastIndexOf('\\') + 1);
    return service.slice(0, 1).toUpperCase().concat(service.slice(1, service.indexOf('.')).toLowerCase());
};

// Get basic method name.
const getCallingMethod = function() {
    var method = new Error('').stack.split('\n')[3].slice(7).split(' ')[0];
    if (method.indexOf('Object.') === 0) {
        method = method.slice(7);
    }
    return method;
};

let logger = {
    setUserOptions: parentLogger.SetUserOptions,

    /**
     * Quickly initialize a custom logging scheme
     * @param {string} prefix - "fileNamePrefix" of logging files 
     */
    quickInit: function(prefix) {
        parentLogger.SetUserOptions({
            'fileNamePrefix': prefix,
            "fileNameExtension": ".log",
            "dateFormat": "YYYY_MM_D",
            "timeFormat": "h:mm:ss A",
            "fileNameSuffix": "",
            "onlyFileLogging": false,
            "logLevel": "debug"
        });
    },

    /**
     * Log a debug message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    debug: function(message, errorObj, callback) {
        parentLogger.Debug(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a trace message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    trace: function(message, errorObj, callback) {
        parentLogger.Trace(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log an info message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    info: function(message, errorObj, callback) {
        parentLogger.Info(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a warning message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    warn: function(message, errorObj, callback) {
        parentLogger.Warn(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log an error message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    error: function(message, errorObj, callback) {
        parentLogger.Error(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a fatal message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    gatal: function(message, errorObj, callback) {
        parentLogger.Fatal(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a message of any specified level
     * @param {string} level - Log level
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    log: function(level, message, errorObj, callback) {
        parentLogger.Log(level, message, getCallingService(), getCallingMethod(), errorObj, callback);
    }
}

module.exports = logger;

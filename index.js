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
    return new Error('').stack.split('\n')[3].slice(7).split(' ')[0];
};

let logger = {
    SetUserOptions: parentLogger.SetUserOptions,

    /**
     * Quickly initialize a custom logging scheme
     * @param {string} prefix - "fileNamePrefiix" of logging files 
     */
    QuickInit: function(prefix) {
        parentLogger.SetUserOptions({
            'fileNamePrefix': prefix
        });
    },

    /**
     * Log a Info message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Debug: function(message, errorObj, callback) {
        parentLogger.Debug(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a trace message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Trace: function(message, errorObj, callback) {
        parentLogger.Trace(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a info message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Info: function(message, errorObj, callback) {
        parentLogger.Info(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a warn message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Warn: function(message, errorObj, callback) {
        parentLogger.Warn(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a error message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Error: function(message, errorObj, callback) {
        parentLogger.Error(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a fatal message
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Fatal: function(message, errorObj, callback) {
        parentLogger.Fatal(message, getCallingService(), getCallingMethod(), errorObj, callback);
    },

    /**
     * Log a message of a specified level
     * @param {string} level - Log level
     * @param {string} message - Message to log
     * @param {any} errorObj - Error object
     * @param {function} callback - Optional callback method
     */
    Log: function(level, message, errorObj, callback) {
        parentLogger.Log(level, message, getCallingService(), getCallingMethod(), errorObj, callback);
    }
}

module.exports = logger;

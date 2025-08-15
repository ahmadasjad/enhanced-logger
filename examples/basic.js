// Using default logger instance
const { logger } = require('../logger');
logger.debug('Debug message');

// Using individual methods
const { info } = require('../logger');
info('Info message');

// Using createLogger utility
const { createLogger } = require('../logger');
const customLogger = createLogger({ minLevel: 'warn' });
customLogger.warn('Warning from custom logger');
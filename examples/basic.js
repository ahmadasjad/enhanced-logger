// Option 1: Using default logger instance
const { logger } = require('../logger');
logger.debug('Debug message');

// Option 2: Using individual methods
const { info } = require('../logger');
info('Info message');

// Option 3: Creating custom logger
const Logger = require('../logger');
const customLogger = new Logger({ minLevel: 'warn' });

// Option 4: Using createLogger utility
const { createLogger } = require('../logger');
const createdLogger = createLogger({ timestamp: false });
createdLogger.warn('Created logger warning');
// Option 1: Import default logger instance
const { logger } = require('../logger');
logger.debug('Debug message');
logger.info('Info message');

// Option 2: Import individual methods
const { debug, info, warn, error } = require('../logger');
debug('Debug message');
info('Info message');

// Option 3: Create custom logger
const Logger = require('../logger');
const customLogger = new Logger({
  minLevel: 'warn',
  timestamp: true
});
customLogger.warn('Custom logger warning');
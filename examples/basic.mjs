// Option 1: Import default logger instance
import { logger } from '../logger.mjs';
logger.debug('Debug message');
logger.info('Info message');

// Option 2: Import individual methods
import { debug, info, warn, error } from '../logger.mjs';
debug('Debug message');
info('Info message');

// Option 3: Create custom logger
import Logger from '../logger.mjs';
const customLogger = new Logger({
  minLevel: 'warn',
  timestamp: true
});
customLogger.warn('Custom logger warning');
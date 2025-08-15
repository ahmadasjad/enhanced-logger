// Option 1: Using default logger instance
import { logger } from '../logger.mjs';
logger.debug('Debug message');

// Option 2: Using individual methods
import { info } from '../logger.mjs';
info('Info message');

// Option 3: Creating custom logger
import Logger from '../logger.mjs';
const customLogger = new Logger({ minLevel: 'warn' });

// Option 4: Using createLogger utility
import { createLogger } from '../logger.mjs';
const createdLogger = createLogger({ timestamp: false });
createdLogger.warn('Created logger warning');
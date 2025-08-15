// Using default logger instance
import { logger } from '../logger.mjs';
logger.debug('Debug message');

// Using individual methods
import { info } from '../logger.mjs';
info('Info message');

// Using createLogger utility
import { createLogger } from '../logger.mjs';
const customLogger = createLogger({ minLevel: 'warn' });
customLogger.warn('Warning from custom logger');
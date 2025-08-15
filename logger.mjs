import chalk from 'chalk';

class Logger {
  constructor(options = {}) {
    this.levels = {
      debug: { color: chalk.gray, level: 0 },
      info: { color: chalk.blue, level: 1 },
      warn: { color: chalk.yellow, level: 2 },
      error: { color: chalk.red, level: 3 },
      ...options.customLevels
    };

    this.minLevel = options.minLevel;
    this.timestamp = options.timestamp;
    this.isBrowser = options.isBrowser;
  }

  log(level, ...args) {
    const levelConfig = this.levels[level];
    if (!levelConfig || levelConfig.level < this.levels[this.minLevel].level) {
      return;
    }

    const timestamp = this.timestamp ? `[${new Date().toISOString()}] ` : '';
    const prefix = `${timestamp}[${level.toUpperCase()}]`;
    
    if (this.isBrowser) {
      console.log(`%c${prefix}`, `color: ${levelConfig.color ? levelConfig.color.hex : 'inherit'}`, ...args);
    } else {
      console.log(levelConfig.color(prefix), ...args);
    }
  }

  debug(...args) {
    this.log('debug', ...args);
  }

  info(...args) {
    this.log('info', ...args);
  }

  warn(...args) {
    this.log('warn', ...args);
  }

  error(...args) {
    this.log('error', ...args);
  }

  addLevel(name, color, level) {
    this.levels[name] = { color, level };
  }
}

// Utility function to create logger instances
function createLogger(options = {}) {
  const mergedOptions = {
    minLevel: options.minLevel || 'debug',
    timestamp: options.timestamp !== false,
    isBrowser: typeof window !== 'undefined',
    ...options,
  };
  return new Logger(mergedOptions);
}

// Create default instance using createLogger
const logger = createLogger();

// Bind methods
const debug = logger.debug.bind(logger);
const info = logger.info.bind(logger);
const warn = logger.warn.bind(logger);
const error = logger.error.bind(logger);

// Export all functionality
export { logger, createLogger, debug, info, warn, error };
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

    this.minLevel = options.minLevel || 'debug';
    this.timestamp = options.timestamp !== false;
    this.isBrowser = typeof window !== 'undefined';
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

// Create default instance
const logger = new Logger();

// Export both class and default instance
export default Logger;
export { logger };
export const debug = logger.debug.bind(logger);
export const info = logger.info.bind(logger);
export const warn = logger.warn.bind(logger);
export const error = logger.error.bind(logger);
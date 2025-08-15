type LogLevel = 'debug' | 'info' | 'warn' | 'error' | string;
type ColorFn = (text: string) => string;

interface LogLevelConfig {
  color: ColorFn;
  level: number;
}

interface LoggerOptions {
  customLevels?: Record<string, LogLevelConfig>;
  minLevel?: LogLevel;
  timestamp?: boolean;
}

declare class Logger {
  constructor(options?: LoggerOptions);
  
  log(level: LogLevel, ...args: any[]): void;
  debug(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  addLevel(name: string, color: ColorFn, level: number): void;
}

// Default logger instance
declare const logger: Logger;

// Individual log methods
declare const debug: (...args: any[]) => void;
declare const info: (...args: any[]) => void;
declare const warn: (...args: any[]) => void;
declare const error: (...args: any[]) => void;

export = Logger;
export {
  logger,
  debug,
  info,
  warn,
  error
};
export as namespace JSLogger;
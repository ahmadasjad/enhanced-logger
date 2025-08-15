# JS Logger

A customizable logger for JavaScript projects that works in both Node.js and browser environments.

## Features

- Multiple log levels (debug, info, warn, error)
- Pre-configured logger instance
- Individual log method exports
- `createLogger` utility function
- TypeScript support
- ES Module and CommonJS support

## Installation

```bash
npm install js-logger
```

## Basic Usage

### Using default logger instance
```javascript
// CommonJS
const { logger } = require('js-logger');
logger.info('Info message');

// ES Modules
import { logger } from 'js-logger';
logger.warn('Warning message');
```

### Using individual methods
```javascript
// CommonJS
const { debug } = require('js-logger');
debug('Debug message');

// ES Modules
import { error } from 'js-logger';
error('Error message');
```

### Using createLogger utility
```javascript
// CommonJS
const { createLogger } = require('js-logger');
const logger = createLogger({ minLevel: 'warn' });

// ES Modules
import { createLogger } from 'js-logger';
const logger = createLogger({ timestamp: false });
```

## API Reference

### Default Exports
- `logger` - Pre-configured logger instance
- `debug`, `info`, `warn`, `error` - Individual log methods
- `createLogger(options)` - Creates a new logger instance

### Logger Options
- `minLevel` - Minimum log level to display
- `timestamp` - Show timestamps (default: true)
- `customLevels` - Additional log levels

## License
MIT
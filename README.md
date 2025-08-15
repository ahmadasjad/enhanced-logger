# JS Logger

A customizable logger for JavaScript projects that works in both Node.js and browser environments, with support for React and React Native.

## Features

- Multiple log levels (debug, info, warn, error)
- Multiple import patterns (instance, methods, class)
- Custom log levels
- Configurable minimum log level
- Timestamp support
- Colorful output (Node.js)
- TypeScript support
- ES Module and CommonJS support

## Installation

```bash
npm install js-logger
```

## Basic Usage

### Option 1: Using default logger instance
```javascript
// CommonJS
const { logger } = require('js-logger');
logger.info('Info message');

// ES Modules
import { logger } from 'js-logger';
logger.warn('Warning message');
```

### Option 2: Using individual methods
```javascript
// CommonJS
const { debug, info } = require('js-logger');
debug('Debug message');

// ES Modules
import { info, error } from 'js-logger';
error('Error message');
```

### Option 3: Creating custom logger
```javascript
// CommonJS
const Logger = require('js-logger');
const customLogger = new Logger({ minLevel: 'warn' });

// ES Modules
import Logger from 'js-logger';
const customLogger = new Logger({ timestamp: false });
```

## TypeScript Usage
```typescript
import { logger, debug } from 'js-logger';

logger.info('Using logger instance');
debug('Using direct method');
```

## Framework Integration

### React
```javascript
import { info } from 'js-logger';

function Component() {
  info('Component rendered');
  return null;
}
```

### React Native
```javascript
import { logger } from 'js-logger';
logger.configure({ timestamp: false });
```

## API Reference

### Default Exports
- `logger` - Pre-configured logger instance
- `debug`, `info`, `warn`, `error` - Bound logging methods

### Logger Class
- `new Logger(options)`
- `addLevel(name, color, level)`

## License
MIT
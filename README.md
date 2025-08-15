# JS Logger

A customizable logger for JavaScript projects that works in both Node.js and browser environments, with support for React and React Native.

## Features

- Multiple log levels (debug, info, warn, error)
- Multiple import patterns (instance, methods, class)
- `createLogger` utility function
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
const { logger } = require('js-logger');
logger.info('Info message');
```

### Option 2: Using individual methods
```javascript
import { debug, info } from 'js-logger';
debug('Debug message');
```

### Option 3: Using createLogger utility
```javascript
// CommonJS
const { createLogger } = require('js-logger');
const logger = createLogger({ minLevel: 'warn' });

// ES Modules
import { createLogger } from 'js-logger';
const logger = createLogger({ timestamp: false });
```

### Option 4: Creating custom logger
```javascript
import Logger from 'js-logger';
const logger = new Logger({ customLevels: { success: { color: chalk.green, level: 1.5 } });
```

## TypeScript Usage
```typescript
import { createLogger } from 'js-logger';

const logger = createLogger();
logger.info('TypeScript usage');
```

## Framework Integration

### React
```javascript
import { createLogger } from 'js-logger';

const logger = createLogger({
  minLevel: process.env.NODE_ENV === 'production' ? 'warn' : 'debug'
});
```

### React Native
```javascript
import { createLogger } from 'js-logger';
const logger = createLogger({ timestamp: false });
```

## API Reference

### Default Exports
- `logger` - Pre-configured logger instance
- `debug`, `info`, `warn`, `error` - Bound logging methods
- `createLogger(options)` - Utility function to create logger instances

### Logger Class
- `new Logger(options)`
- `addLevel(name, color, level)`

## License
MIT
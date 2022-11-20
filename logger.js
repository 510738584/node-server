const log4js = require('log4js');
const path = require('path');

// const logger = log4js.getLogger();

// logger.level = 'debug';
// logger.debug('there has one little bug...')

log4js.configure({
  appenders:{
    sql:{
      type:'dateFile',
      filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log'),
      layout:{
        type: 'pattern',
        pattern: "%[ %p %c% ] %d{yyyy/MM/dd-hh.mm.ss} %n"
      },
      maxLogSize: '1M',
      keepFileExt: true,
      fileNameSep: '-',
    },
    default:{
      type:'file',
      filename: path.resolve(__dirname, 'logs', 'default', 'logging.log'),
    },
  },
  categories:{
    sql: {
      appenders:['sql'],
      level:'all'
    },
    default:{
      appenders: ['default'],
      level: 'all'
    },
  }
})

process.on('exit',() => {
  log4js.shutdown()
})

const logger = log4js.getLogger('sql');

setInterval(()=>{
logger.debug('there has a little bug..')
},50)
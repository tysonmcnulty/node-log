const log = require('simple-node-logger').createSimpleLogger();

logAll("default (info)")

log.setLevel("warn")
logAll("after setLevel: warn")

log.setLevel("fatal")
logAll("after setLevel: fatal")

log.setLevel("info")
logAll("after setLevel: info")

function logAll(message) {
    log.trace(message);
    log.debug(message);
    log.info(message);
    log.warn(message);
    log.error(message);
    log.fatal(message);
}

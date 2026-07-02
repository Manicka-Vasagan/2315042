const Log = require("../../../logging-middleware/logger");

const writeLog = async (level, message) => {

    await Log(
        "backend",
        level,
        "service",
        message
    );

};

module.exports = writeLog;
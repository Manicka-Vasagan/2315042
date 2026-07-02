const Log = require("./logger");
async function main() {
    const result = await Log(
        "backend",
        "error",
        "handler",
        "received string, expected bool"
    );
    console.log(result);
}
main();
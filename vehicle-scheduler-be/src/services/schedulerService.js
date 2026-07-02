const { getDepots } = require("./depotService");
const { getVehicles } = require("./vehicleService");

const writeLog = require("../middleware/loggerMiddleware");

const scheduleVehicles = async () => {

    console.log("Fetching Depots...");
    const depots = await getDepots();

    console.log("Depots:");
    console.log(depots);

    console.log("---------------------------");

    console.log("Fetching Vehicles...");
    const vehicles = await getVehicles();

    console.log("Vehicles:");
    console.log(vehicles);

    await writeLog("info", "Fetched Depots");
    await writeLog("info", "Fetched Vehicles");

    return {
        depots,
        vehicles
    };
};

module.exports = {
    scheduleVehicles
};
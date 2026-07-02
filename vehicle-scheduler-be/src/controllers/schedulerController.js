const { scheduleVehicles } = require("../services/schedulerService");

const getSchedule = async (req, res) => {
    try {
        console.log("========== Vehicle Scheduler ==========");

        const result = await scheduleVehicles();

        console.log("Response:");
        console.log(JSON.stringify(result, null, 2));

        res.status(200).json(result);

    } catch (error) {
        console.log("Error:", error.message);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getSchedule
};
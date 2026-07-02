const axios = require("axios");

const getVehicles = async () => {
    const response = await axios.get(process.env.VEHICLE_API, {
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });

    return response.data;
};

module.exports = {
    getVehicles
};
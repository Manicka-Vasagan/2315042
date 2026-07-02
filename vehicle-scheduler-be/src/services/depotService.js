const axios = require("axios");

const getDepots = async () => {
    const response = await axios.get(process.env.DEPOT_API, {
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });

    return response.data;
};

module.exports = {
    getDepots
};
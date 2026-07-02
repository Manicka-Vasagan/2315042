require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
console.log("DEPOT_API:", process.env.DEPOT_API);
console.log("VEHICLE_API:", process.env.VEHICLE_API);
console.log("LOG_API:", process.env.LOG_API);
console.log("TOKEN:", process.env.ACCESS_TOKEN ? "Loaded" : "Missing");
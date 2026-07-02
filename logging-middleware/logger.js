require("dotenv").config();

const LOG_API = process.env.LOG_API;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

async function Log(stack, level, packageName, message) {

    try {

        const res = await fetch(LOG_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message
            })
        });

        const data = await res.json();

        if (res.ok) {
            console.log("Log Created Successfully");
            console.log(data);
        } else {
            console.log("Request Failed");
            console.log(data);
        }

        return data;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = Log;
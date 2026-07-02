require("dotenv").config();

const LOG_API = process.env.LOG_API;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

async function Log(stack, level, packageName, message) {
    try {
        console.log("LOG API:", LOG_API);
        console.log("Token Loaded:", ACCESS_TOKEN ? "YES" : "NO");

        const response = await fetch(LOG_API, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message
            })
        });

        const data = await response.json();

        console.log("Status:", response.status);

        if (!response.ok) {
            console.error("Request Failed");
            console.error(data);
            return null;
        }

        console.log("Log Created Successfully");
        console.log(data);

        return data;

    } catch (error) {
        console.error("Logger Error:", error.message);
        return null;
    }
}

module.exports = Log;
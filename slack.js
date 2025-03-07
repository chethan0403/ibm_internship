const axios = require("axios");
require("dotenv").config();

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function sendSlackNotification(message) {
    try {
        await axios.post(SLACK_WEBHOOK_URL, { text: message });
        console.log("Slack notification sent!");
    } catch (error) {
        console.error("Error sending Slack notification:", error);
    }
}

module.exports = sendSlackNotification;


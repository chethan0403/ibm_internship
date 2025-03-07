const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// ✅ Add this GET route for the homepage
app.get("/", (req, res) => {
    res.send("Our devops final project Server is running! Webhooks are ready.");
});

// Existing webhook route
app.post("/webhook", (req, res) => {
    const payload = req.body;
    console.log("🔔 Webhook received:", payload);
    res.sendStatus(200);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

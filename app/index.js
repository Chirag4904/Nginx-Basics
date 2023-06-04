const express = require("express");
const os = require("os");

const app = express();
const hostname = os.hostname();

app.get("/", (req, res) => {
	res.send("Hello World from " + hostname);
});

app.listen(8080, () => {
	console.log("Server is running on port 8080 on host " + hostname);
});

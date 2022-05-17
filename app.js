const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('/names', (request, response) => {
	return response.send("Telmo");
});
const port = 5000;
app.listen(port, () => {
	console.log(`Server is runnig ${port}`);
});

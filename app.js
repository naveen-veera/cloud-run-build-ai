const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello from Render!"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

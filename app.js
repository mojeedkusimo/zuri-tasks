const express = require("express");
require("dotenv").config();
const router = require("./routes");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    return res.send("Welcome to My Zuri Tasks. Please check the documentation for help");
})

app.use("/api", router);

app.use((req, res, next) => {
    let error = new Error("Page Not Found");
    res.status = 404;

    return next(error);
})

app.use((err, req, res, next) => {
    res.status = err.status || 500;

    return res.json({
        status: "error",
        data: {
            message: err.message
        }
    })
})

app.listen(PORT, () => {
    console.log("Server running on port..." + PORT);
})
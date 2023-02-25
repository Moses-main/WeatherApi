const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const express = require("express");
const port = 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "views"));

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 50);
});


const app = express();
app.use(connectLivereload());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

//listen for requests
app.listen(port, () => {
    console.log(`Server is  listening at http://localhost:${port}`);
});
// Dependencies
const fs = require("fs");
// const BlogPost = require("../models/blog");

module.exports = function (app) {

    // Hex Routes
    app.get("/api/hexes", (req, res) => {
        console.log("hexes, eh?");
        fs.readFile("./data/hexes.json", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }

            console.log("Got some hexes for you.")
            res.send(data);
        })
    })

    app.get("/api/hexes/:id", (req, res) => {
        console.log("which hex? this hex?  " + req.params.id)
        fs.readFile("./data/hexes.json", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }

            let tmp = JSON.parse(data);
            let whichHex = parseInt(req.params.id)

            // console.log(tmp[whichHex-1])
            res.send(tmp[whichHex-1]);
        })
    })

    app.put("/api/hexes/edit/:id", (req, res) => {
        console.log(req.params.id);
    })
}

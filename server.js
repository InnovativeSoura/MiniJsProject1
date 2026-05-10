// Create a server that returns current date and time at /time.

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/time") {

//         const now = new Date();

//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });

//         res.end(now.toString());

//     } else {

//         res.writeHead(404, {
//             "Content-Type": "text/plain"
//         });

//         res.end("404 Not Found");

//     }

// });

// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000/time");
// });


// Install and use moment npm package to format date & time.

// const http = require("http");
// const moment = require("moment");

// const server = http.createServer((req, res) => {

//     if (req.url === "/time") {

//         // Format date and time using moment
//         const formattedTime = moment().format("MMMM Do YYYY, h:mm:ss a");

//         res.writeHead(200, {
//             "Content-Type": "text/plain"
//         });

//         res.end(`Current Date and Time: ${formattedTime}`);

//     } else {

//         res.writeHead(404, {
//             "Content-Type": "text/plain"
//         });

//         res.end("404 Not Found");

//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/time");
// });

//Extend your Hello Server: Return JSON data at /api.

const http = require("http");
const moment = require("moment");

const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Hello Server!");

    }

    // Time Route
    else if (req.url === "/time") {

        const formattedTime = moment().format("MMMM Do YYYY, h:mm:ss a");

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`Current Date and Time: ${formattedTime}`);

    }

    // API Route
    else if (req.url === "/api") {

        const data = {
            name: "Souradipta",
            course: "Full Stack Development",
            date: moment().format("YYYY-MM-DD"),
            time: moment().format("h:mm:ss a")
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(data));

    }

    // 404 Route
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 Not Found");

    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/api");
});

//Push your server project to GitHub.


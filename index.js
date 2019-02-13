const http = require("http");
const fs = require("fs");

const aboutPage = fs.readFile("about.html", file => {});
const contactPage = fs.readFile("contact.html", file => {});
const homePage = fs.readFile("index.html", file => {});

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/about") {
    return res.end(aboutPage);
  } else if (req.url === "/contact") {
    return res.end(contactPage);
  } else if (req.url === "/") {
    return res.end(homePage);
  } else {
    res.writeHead(404);
    res.end("the page was not found");
  }
});

server.listen(3000);

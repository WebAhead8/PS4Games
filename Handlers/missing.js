const fs = require("fs");
const path = require("path");
function missingHandler(request, response) {
  const filePath = path.join(__dirname, "..", "public", "error.html");
  fs.readFile(filePath, (err, file) => {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(file); // file?
  });
}

module.exports = missingHandler;

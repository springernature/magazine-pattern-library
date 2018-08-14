const fs = require("fs");
module.exports = file => {
  const stream = fs.createWriteStream(file.filename, {
    flags: "a"
  });
  if (file.content) {
    stream.write(file.content);
  }
  stream.end();
};

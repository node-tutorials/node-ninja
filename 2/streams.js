const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog3.txt");
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/blog4.txt");

// data event listener
// readStream.on("data", (chunk) => {
//   console.log("---NEW CHUNCK");
//   console.log(chunk);

//   writeStream.write(chunk);
//   writeStream.write("\n--------NEW CHUNCK----------\n");
// });

// piping
readStream.pipe(writeStream);

const fs = require("fs");

// reading files
fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  // <Buffer 48 65 6c 6c 6f 20>
  console.log(data.toString());
});

console.log("last line");

// writing files
fs.writeFile("./docs/blog.txt", "Hello World", () => {
  console.log("File written");
});

fs.writeFile("./docs/blog2.txt", "Hello World", () => {
  console.log("File written");
});

// directories
if (!fs.existsSync("./assets"))
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("Folder created");
  });
else
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("Folder deleted");
  });

// deleting files
if (fs.existsSync("./docs/blog.txt")) {
  fs.unlink("./docs/blog.txt", (err) => {
    if (err) console.log(err);
    console.log("File deleted!!!");
  });
}

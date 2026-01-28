// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

// Asynchronously
fs.readFile("read.txt", { encoding: "utf8", flag: "r" }, (err, data1) => {
  if (err) {
    console.error("Error reading input1.txt:", err);
  } else {
    console.log("input1.txt content:", data1);
  }
});

// Synchronously
try {
  const data2 = fs.readFileSync("read.txt", {
    encoding: "utf8",
    flag: "r",
  });
  console.log("read.txt content:", data2);
} catch (err) {
  console.error("Error reading input2.txt:", err);
}

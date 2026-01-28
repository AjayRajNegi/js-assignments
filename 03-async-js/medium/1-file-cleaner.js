// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("read.txt", { encoding: "utf8", flag: "r" }, (err, data) => {
  if (err) {
    console.error("Error reading input1.txt:", err);
  } else {
    console.log("input1.txt content:", data);
  }

  let result = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== data[i + 1]) {
      result += data[i];
    }
  }

  fs.writeFile("read.txt", result, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully!");
  });
});

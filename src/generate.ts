import fs from "fs";

// Function to generate a file
const generateFile = (fileName: string, content: string) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error("Error generating file:", err);
    } else {
      console.log("File generated successfully!");
    }
  });
};

// Usage example
const fileName = "example1.txt";
const fileContent = "This is the child generated content of the file.";

generateFile(fileName, fileContent);

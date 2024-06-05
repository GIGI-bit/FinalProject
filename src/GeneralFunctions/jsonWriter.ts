// import * as fs from "fs";
// import * as path from "path";
// import { Post } from "../types/post";

// export function writeJson(filename: string, data: any): void {
//   const filePath = path.resolve("./src/JSONs/" + filename);

//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file", err);
//       return;
//     }

//     let jsonData = [];
//     try {
//       jsonData = JSON.parse(data);
//     } catch (parseErr) {
//       console.error("Error parsing JSON", parseErr);
//     }

//     jsonData.push(data);

//     fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) {
//         console.error("Error writing to file", err);
//       } else {
//         console.log("File has been updated");
//       }
//     });
//   });
// }

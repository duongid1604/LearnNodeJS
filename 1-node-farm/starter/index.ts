import * as fs from "fs";
import * as http from "http";

// FILE

// SYNC
// const textInput: string = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textInput, "text input");

// const textOutput: string = `This is what we know about avocado: ${textInput} \nCreated at ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOutput);

// console.log("File written");

// ***

// ASYNC

// fs.readFile("./txt/start.txt", "utf-8", (err, start) => {
//   if (err) {
//     console.log("U have error", err);
//   }

//   fs.readFile(`./txt/${start}.txt`, "utf-8", (err, readThis) => {
//     if (err) {
//       console.log("U have error in start", err);
//     }

//     console.log("read-this", readThis);

//     fs.readFile("./txt/append.txt", "utf-8", (err, append) => {
//       if (err) {
//         console.log("U have error in append", err);
//       }

//       console.log("append", append);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${readThis}\n${append}\nCreated at ${Date.now()}`,
//         "utf-8",
//         (err) => {
//           if (err) {
//             console.log("U have error in final", err);
//           }
//           console.log("Your file is written !");
//         }
//       );
//     });
//   });
// });

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is Overview Screen!");
  } else if (pathName === "/product") {
    res.end("This is Product Screen!");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-server",
    });

    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request from port 8000");
});

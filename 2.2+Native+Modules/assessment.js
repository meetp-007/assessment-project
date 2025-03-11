const fs = require("fs");

// fs.writeFile("msg.txt", "hi i am meet", (err) => {
//     if (err) throw err;
//     console.log("file is saved");
// });

fs.readFile("./msg.txt","utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
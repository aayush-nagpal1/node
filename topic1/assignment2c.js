const fs = require('fs');

const syncRead = () => {
    let content = fs.readFileSync('./read.txt', 'utf-8')
    return content;
}

const asyncRead = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('./read.txt', 'utf-8', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    })
}

console.log(syncRead(), " -- Synchronous Mode");
// console.log("Sync read is done");

let content = asyncRead().then(data => {
    console.log(data," -- Async Mode");
})
// console.log("Async read is done");

const fs = require('fs')
const path = process.argv[2] 

const lines = fs.readFile(path, function (err, data) {
    if (err) console.log(err);
    console.log(data.toString().split('\n').length - 1)
})
const fs = require('fs')
const path = process.argv[2]
const type = process.argv[3]

const list = fs.readdir(path, function (err, list) {
    list.map(el => el.includes(`.${type}`) && console.log(el))
})
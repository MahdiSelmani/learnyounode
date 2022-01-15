

const myModule = require('./mymodule')
const path = process.argv[2]
const type = process.argv[3]

const callback = function (err, filtered) {
    if (err) console.log(err);
    filtered.map(el=> console.log(el))

}
myModule(path, type, callback);
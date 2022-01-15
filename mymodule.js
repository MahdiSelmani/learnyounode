

const fs = require('fs')
const path = process.argv[2]


function filterFiles(list, filter) {
    return list.map(el=> el.includes(`.${filter}`) && el )

}

module.exports.
const { links, json } = require('express/lib/response')
const fs = require('fs')


const dataJS = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataJS)
console.log(data.name)
data.name = 'Kien'
data.age = 20

const userJS = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJS)
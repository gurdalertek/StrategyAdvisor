const fs = require('fs')

const consumeData = (callbackFunction) => {
  let jsonData
  return callbackFunction(JSON.parse(fs.readFileSync('data.json', 'utf8')))
  // , (err, data) => {
  //   if (err) return console.log(`Error. ${err}`)
  //   jsonData = JSON.parse(data)
  //   const ModelArray = callbackFunction(jsonData)
  //   resolve(ModelArray)
  // } 
}

module.exports = {
  consumeData
}

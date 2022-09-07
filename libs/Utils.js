const fs = require('fs');
const path = require('path');

const consumeData = (callbackFunction) => {
  // let jsonData;
  const jsonDirectory = path.join(process.cwd(), 'json');

  return callbackFunction(
    JSON.parse(fs.readFileSync(jsonDirectory + '/data.json', 'utf8'))
  );
  // , (err, data) => {
  //   if (err) return console.log(`Error. ${err}`)
  //   jsonData = JSON.parse(data)
  //   const ModelArray = callbackFunction(jsonData)
  //   resolve(ModelArray)
  // }
};

module.exports = {
  consumeData,
};

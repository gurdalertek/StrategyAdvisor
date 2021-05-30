const {ModelArray} = require('../../server')
const ModelRouter = require('express').Router()
const {
    QuestionModel
} = require('../../models/QuestionModule');
const invoke = ()=>{
    return new Promise((resolve, reject)=>{
       while(!ModelArray){

       }

       resolve(ModelArray)
   })
}
ModelRouter.get("/",async (req, res) => {
  
  const ModelArray = await invoke()
    var result = ModelArray.filter(obj => {
        return obj.moduleNo === req.query.moduleId
      })

})

module.exports = ModelRouter

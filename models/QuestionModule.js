const { Schema, model } = require('mongoose')
const { suggestionSchema } = require('./Suggestion')
const { nodeSchema } = require('./Node')

const questionModuleSchema = new Schema({
    moduleNo:{
        type:Number,
        unique:true,
        required:true
    },
    nameTR:{
        type:String,
        unique:true,
        required:true
    },
    nameEN:{
        type:String,
        unique:true,
        required:true
    },
    moduleStart:{
        textEN:String,
        textTR:String
    },
    suggestions:[suggestionSchema],
    nodes:[nodeSchema],
    
})

const createQuestionModuleModel = (name) => {
  return model(name, questionModuleSchema)
}

module.exports = {
  questionModuleSchema,
  createQuestionModuleModel
}

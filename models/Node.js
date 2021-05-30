const { Schema, model } = require('mongoose')

// Create  Schema
const nodeSchema = new Schema({
    nodeType: {
      type: String,
      required: true,
      unique: true
    },
    nodeID:{
        type:String,
        required: true,
        unique:true
    },
    titleTR: {
        type: String,
        unique: true
    },
    titleEN: {
        type: String,
        unique: true
    },
    answers:{
        answer1:{
            Is_On_Right_in_User_Interface:Number,
            labelTR:String,
            labelEN:String,
            RelatedToSuggestion:{
                isRelated:Boolean,
                relatedSuggestionID:String
            },
            nextQuestion:String,
        },
        answer2:{
            Is_On_Right_in_User_Interface:Number,
            labelTR:String,
            labelEN:String,
            RelatedToSuggestion:{
                isRelated:Boolean,
                relatedSuggestionID:String
            },
            nextQuestion:String,
        },
        isLinkToSuggestion:Boolean,
    },
    nextNode:{
        type:String,
        unique: true
    }
})

const NodeModel = model('Node', nodeSchema)

module.exports = {
  nodeSchema,
  NodeModel
}

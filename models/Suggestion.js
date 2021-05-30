const { Schema, model } = require('mongoose')

const suggestionSchema = new Schema({
    suggestionID:{
        type: String,
        required: true,
        unique:true
    },
    titleTR: {
        type: String,
        required: true,
        unique: true
    },
    titleEN: {
        type: String,
        required: true,
        unique: true
    }
})

const SuggestionModel = model('Suggestion', suggestionSchema)

module.exports = {
  suggestionSchema,
  SuggestionModel
}

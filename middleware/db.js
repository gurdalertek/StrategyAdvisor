const {
  consumeData
} = require('../libs/Utils')
const {
  createQuestionModuleModel
} = require('../models/QuestionModule')
const {
  NodeModel
} = require('../models/Node')
const {
  SuggestionModel
} = require('../models/Suggestion')

const configureDatabase = (data) => {
  const ModelArray = []
  let QuestionModuleModel, questionModule
  for (let i = 0; i < data.modules.length; ++i) {
    const _module = data.modules[i]
    QuestionModuleModel = createQuestionModuleModel(_module.Module_Name_EN)
    questionModule = new QuestionModuleModel({
      moduleNo: Number(_module.Module_No),
      nameTR: _module.Module_Name_TR,
      nameEN: _module.Module_Name_EN,
      moduleStart: {
        textEN: _module.Modules_Items[0].Node_Name_EN,
        textTR: _module.Modules_Items[0].Node_Name_TR
      },
      suggestions: [],
      nodes: [],

    })
    for (let j = 1; j < _module.Modules_Items.length; ++j) {
      const moduleItem = _module.Modules_Items[j]
      if (moduleItem.Node_Type === 'Suggestion') {
        questionModule.suggestions.push(new SuggestionModel({
          suggestionID: moduleItem.Node_ID,
          titleEN: moduleItem.Text_EN,
          titleTR: moduleItem.Text_TR
        }))
      } else if (moduleItem.Node_Type === 'Question') {
        if( moduleItem.Node_ID == 200009){
            console.log(moduleItem)
        }
        questionModule.nodes.push(new NodeModel({
          nodeType: moduleItem.Node_Type,
          nodeID: moduleItem.Node_ID,
          titleTR: moduleItem.Text_TR,
          titleEN: moduleItem.Text_EN,
          answers: {
            answer1: {
              Is_On_Right_in_User_Interface:moduleItem.Answers[0].Is_On_Right_in_User_Interface,
              labelTR: moduleItem.Answers[0].Answer_Text_TR,
              labelEN: moduleItem.Answers[0].Answer_Text_EN,
              RelatedToSuggestion: {
                isRelated: Boolean(moduleItem.Answers[0].Is_Link_to_Suggestion),
                relatedSuggestionID: moduleItem.Answers[0].Link_to_Suggestion
              },
              nextQuestion: moduleItem.Answers[0].Link_to_Next_Node,
            },
            answer2: {
              Is_On_Right_in_User_Interface:moduleItem.Answers[1].Is_On_Right_in_User_Interface,
              labelTR: moduleItem.Answers[1].Answer_Text_TR,
              labelEN: moduleItem.Answers[1].Answer_Text_EN,
              RelatedToSuggestion: {
                isRelated: Boolean(moduleItem.Answers[1].Is_Link_to_Suggestion),
                relatedSuggestionID: moduleItem.Answers[1].Link_to_Suggestion
              },
              nextQuestion: moduleItem.Answers[1].Link_to_Next_Node,
            },
            isLinkToSuggestion: (Boolean(Number(moduleItem.Answers[0].Is_Link_to_Suggestion)) || Boolean(Number(moduleItem.Answers[1].Is_Link_to_Suggestion))),
          }
        }))
      }else if (moduleItem.Node_Type === 'Start') {
        questionModule.nodes.push(new NodeModel({
          nodeType:'Start',
          nodeID: moduleItem.Node_ID,
          titleTR: moduleItem.Node_Name_TR,
          titleEN: moduleItem.Node_Name_EN,
          nextNode:moduleItem.Link_to_Next_Node
        }))
      }
      else if (moduleItem.Node_Type === 'Continue') {
        questionModule.nodes.push(new NodeModel({
        nodeType:'Continue',
        nodeID:moduleItem.Node_ID,
        nextNode:moduleItem.Link_to_Next_Node
        }))

      }
    }
    console.log(`Module#${i} has saved.`)
    ModelArray.push(questionModule)
  }
  return ModelArray
}

module.exports = { consumeData, configureDatabase }

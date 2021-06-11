import React, { Component } from "react";
import "./Question.css";
import axios from "axios";
// import { Button } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.suggestions = new Map();
    this.percentageMap = new Map();
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.setAnswer = this.setAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.findQuestionFromId = this.findQuestionFromId.bind(this);
    this.calculateSuggestions = this.calculateSuggestions.bind(this);
    this.findSuggestion = this.findSuggestion.bind(this);
    this.checkLabel = this.checkLabel.bind(this);
    this.store = [];
    this.exportedSuggestions = [];
    this.moduleStart = {};
    this.nodes = [];
    this.state = {
      question: [],
      answer: -1,
      type: "",
      isSurveyFinished: false,
    };
  }

  componentDidMount() {
    const clientURL = process.env.REACT_APP_CLIENT_URL;
    axios
      .get(`${clientURL}/api/getModule`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: { moduleId: this.props.moduleId },
      })
      .then((res) => {
        console.log(res.data[0]);
        if (res.data.length === 0) {
          new Error("Cannot get");
        } else {
          this.nodes = res.data[0].nodes;
          this.moduleStart = res.data[0].moduleStart;
          this.exportedSuggestions = res.data[0].suggestions;
          this.setState({
            question: this.nodes[0],
            type: this.nodes[0].nodeType,
          });
        }
      })
      .catch((e) => console.log(e));
  }

  findGenuineAnswer(answer) {
    return answer < 5 ? 1 : 2;
  }

  setAnswer(answer) {
    this.setState({
      answer,
    });
  }

  handleNext() {
    let genuineAnswer = this.findGenuineAnswer(this.state.answer);
    let nextQuestionId;
    if (this.state.type === "Question") {
      this.moduleStart.textEN = "";

      if (this.state.answer === -1) return;
      nextQuestionId =
        this.state.question.answers["answer" + genuineAnswer].nextQuestion;

      if (this.state.question.answers.isLinkToSuggestion) {
        let answer = this.state.answer;
        if (
          this.state.question.answers["answer" + 1].RelatedToSuggestion
            .isRelated
        ) {
          // Normal Execution
          if (
            this.state.question.answers["answer" + 1]
              .Is_On_Right_in_User_Interface.$numberInt === "0"
          ) {
            answer = 10 - answer;
          }
          const currentSuggestionId =
            this.state.question.answers["answer" + 1].RelatedToSuggestion
              .relatedSuggestionID;
          this.suggestions.set(
            currentSuggestionId,
            (this.suggestions.get(currentSuggestionId) || []).concat(answer)
          );
        } else {
          let answer = this.state.answer;
          if (
            this.state.question.answers["answer" + 2]
              .Is_On_Right_in_User_Interface.$numberInt === "0"
          ) {
            answer = 10 - answer;
          }
          const currentSuggestionId =
            this.state.question.answers["answer" + 2].RelatedToSuggestion
              .relatedSuggestionID;
          this.suggestions.set(
            currentSuggestionId,
            (this.suggestions.get(currentSuggestionId) || []).concat(answer)
          );
        }
      }
    } else {
      nextQuestionId = this.state.question.nextNode;
    }
    this.store.push(this.state);
    let nextQuestion = this.findQuestionFromId(nextQuestionId);
    if (!nextQuestion) {
      this.calculateSuggestions();
      this.props.handleSuggestionImage();
      this.setState({
        isSurveyFinished: true,
      });
      return;
    }
    if (nextQuestion.nodeType === "Continue") {
      nextQuestionId = nextQuestion.nextNode;
      nextQuestion = this.findQuestionFromId(nextQuestionId);
      if (!nextQuestion) {
        console.log("Suggestion page");
        this.calculateSuggestions();
        this.props.handleSuggestionImage();
        this.setState({
          isSurveyFinished: true,
        });
      }
    }
    this.setState({
      question: nextQuestion,
      answer: -1,
      type: nextQuestion.nodeType,
    });
  }

  calculateSuggestions() {
    console.log(this.suggestions);
    this.suggestions.forEach((value, key, _) => {
      let sumOfValues = value.reduce((sum, current) => {
        return sum + current;
      }, 0);
      // calculate the percantage
      let lenOfArray = value.length;
      let percentage = (sumOfValues / lenOfArray) * 10;
      this.percentageMap.set(this.findSuggestion(key), percentage);
    });
  }

  findSuggestion(id) {
    for (let i = 0; i < this.exportedSuggestions.length; ++i) {
      if (this.exportedSuggestions[i].suggestionID === String(id)) {
        return this.exportedSuggestions[i].titleEN;
      }
    }
    return "undefined";
  }

  handleBack() {
    if (
      this.state.type === "Question" &&
      !this.state.question.isLinkToSuggestion &&
      this.state.answer !== -1
    )
      if (
        this.state.question.answers[
          "answer" + this.findGenuineAnswer(this.state.answer)
        ].RelatedToSuggestion.isRelated
      ) {
        const suggestion = this.suggestions.get(
          this.state.question.answers[
            "answer" + this.findGenuineAnswer(this.state.answer)
          ].RelatedToSuggestion.relatedSuggestionID
        );
        if (suggestion) {
          suggestion.pop();
        }
      } else {
        console.log(
          this.state.question.answers[
            "answer" + (3 - this.findGenuineAnswer(this.state.answer))
          ].RelatedToSuggestion.relatedSuggestionID
        );
        this.suggestions.get(
          this.state.question.answers[
            "answer" + (3 - this.findGenuineAnswer(this.state.answer))
          ].RelatedToSuggestion.relatedSuggestionID
        );
        // .pop();
      }
    console.log(this.suggestions);
    this.setState(this.store.pop());
  }

  findQuestionFromId(id) {
    for (let i = 0; i < this.nodes.length; ++i) {
      if (this.nodes[i].nodeID === String(id)) {
        return this.nodes[i];
      }
    }
    return undefined;
  }

  isMarked(answer) {
    return answer === this.state.answer ? "marked" : "notMarked";
  }

  checkLabel(index) {
    if (this.state.type === "Question") {
      return this.state.question.answers["answer" + index]
        .Is_On_Right_in_User_Interface.$numberInt === String(index - 1)
        ? this.state.question.answers["answer" + index].labelEN
        : this.state.question.answers["answer" + (3 - index)].labelEN;
    } else {
      return "";
    }
  }

  render() {
    let questionBool = false;
    if (this.state.type === "Question") {
      questionBool = (
        <div>
          <span className="cstLeftCheckLabelMobile mt-1 mb-3 text-left">
            {this.checkLabel(1)}
          </span>

          <div className="choices justify-content-center">
            <span className="cstLeftCheckLabelDesktop alert alert-dark my-0">
              {this.checkLabel(1)}
            </span>

            <span className="hSpacer"></span>
            {this.numbers.map((number, index) => {
              return (
                <span
                  key={index}
                  onClick={() => this.setAnswer(number)}
                  className={`choice mt-2 ${
                    this.state.type + "C"
                  } ${this.isMarked(number)}`}
                >
                  {number}
                </span>
              );
            })}

            <span className="hSpacer"></span>

            <span className="cstRightCheckLabelDesktop alert alert-dark my-0">
              {this.checkLabel(2)}
            </span>
          </div>

          <span className="cstRightCheckLabelMobile mt-3 mb-2 text-right">
            {this.checkLabel(2)}
          </span>
        </div>
      );
    } else {
      questionBool = <div></div>;
    }

    const defaultRender = (
      <div className="questionContainer">
        <div className="buttonHolder">
          <div className="title">
            {this.moduleStart.textEN}
            <div></div>
            {this.state.type === "Continue" ? "" : this.state.question.titleEN}
          </div>
          <div className="vSpacer"></div>
          {/* <div className="alert alert-primary text-center py-3">
            {this.state.type === "Continue" ? "" : this.state.question.titleEN}
          </div> */}
          <div className="vSpacer"></div>
          <div>{questionBool}</div>
          <div className="vSpacer"></div>
          <button
            className="btn btn-primary float-left"
            onClick={this.handleBack}
          >
            Back
          </button>

          <button
            className={`btn btn-primary float-right ${
              this.store === [] ? "empty" : ""
            }`}
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
    let renderedView;
    const mapSort1 = new Map(
      [...this.percentageMap.entries()].sort((a, b) => b[1] - a[1])
    );
    console.log(mapSort1);
    if (this.state.isSurveyFinished) {
      renderedView = (
        <div className="cstSuggestions">
          <h3 className="py-3">Suggestions</h3>
          <ul>
            {[...this.percentageMap.keys()].map((suggestionID) => {
              if (suggestionID !== "undefined") {
                return (
                  <li className="pb-3" key={suggestionID}>
                    {Math.round(this.percentageMap.get(suggestionID))}%,{" "}
                    {suggestionID}
                  </li>
                );
              } else {
                return true;
              }
            })}
          </ul>
          <div className="text-center py-3">
            <Link
              to="/Modules"
              className="btn btn-primary text-white cstNavItem"
            >
              Go Back to Modules Page
            </Link>
          </div>
        </div>
      );
    } else renderedView = defaultRender;
    return renderedView;
  }
}

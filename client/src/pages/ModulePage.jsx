// import React, { Component, createRef } from "react";
import React, { Component } from "react";
import Loader from "../components/Loader";

import "survey-react/survey.css";
// import axios from "axios";
// import store from "../store";
import Question from "../components/question/Question";

class ModulePage extends Component {
  constructor(props) {
    super(props);
    this.setSuggestionImage = this.setSuggestionImage.bind(this);
    this.state = {
      modulePhotoURL: "0" + this.props.location.moduleId + "_question",
    };
  }

  setSuggestionImage(id = this.props.location.moduleId) {
    this.setState({
      modulePhotoURL: `0${id}_suggestion`,
    });
  }

  render() {
    return (
      <Loader>
        <div className="container">
          <h2 className="flex cstHeaderTitle">
            {this.props.location.moduleTitle}
          </h2>
          <br />
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 card card-block justify-content-center cstQuestionImgCard">
              <img
                src={`${process.env.PUBLIC_URL}/pics/${this.state.modulePhotoURL}.jpg`}
                className="img-fluid img-thumbnail cstQuestionImg"
                alt="Question"
              />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 card card-block justify-content-center cstQuestionDetailsCard">
              <Question
                handleSuggestionImage={this.setSuggestionImage}
                moduleId={this.props.location.moduleId}
              />
            </div>
          </div>
        </div>
      </Loader>
    );
  }
}

export default ModulePage;

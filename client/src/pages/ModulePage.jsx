import React, { Component, createRef } from 'react'
import "survey-react/survey.css"
import axios from 'axios'
import store from '../store'
import Question from '../components/question/Question'

class ModulePage extends Component {
    constructor(props) {
        super(props)
        this.setSuggestionImage = this.setSuggestionImage.bind(this)
        this.state = {
            modulePhotoURL: '0' + this.props.location.moduleId + '_question'
        }
    }

    setSuggestionImage(id=this.props.location.moduleId) {
        this.setState({
            modulePhotoURL: `0${id}_suggestion`
        })
    }

    render() {
        return (
            <div className="container">
                <h2 class="flex">{this.props.location.moduleTitle}</h2>
                < br/>
                <div class="row">
                    <div class="col-3 card card-block">
                        <img src={`${process.env.PUBLIC_URL}/pics/${this.state.modulePhotoURL}.jpg`} alt="Question"/>
                    </div>
                    <div class="col-8 card card-block">
                        <Question handleSuggestionImage={this.setSuggestionImage} moduleId={this.props.location.moduleId}/>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}

export default ModulePage
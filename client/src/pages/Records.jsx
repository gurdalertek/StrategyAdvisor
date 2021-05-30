import React, { Component, useState, useEffect } from 'react'
import store from '../store'
import axios from 'axios'

class Records extends Component {

    componentDidMount() {
        console.log("recordsdayım")
        console.log(store.getState())
    }
    render() {
    

        return (
            <div className="container">
                <h2 className="flex">Records</h2>
                <p>You will see the records here.</p>
                
            </div>
        )
    }
}

  export default Records
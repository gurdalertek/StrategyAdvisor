import React, { Component } from "react";
import Logo from "../pics/logo.png";
import Loader from "../components/Loader";
class Welcome extends Component {
  render() {
    return (
      <Loader>
        <div className="container">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">
                Welcome to StrategyAdvisor Cloud!
              </h1>
              <p className="lead text-muted">
                "StrategyAdvisor Cloud is a rule-based expert system for
                providing strategy recommendations. The software has been
                developed using the graph-based methodology by İlter İrdesel,
                Gürdal Ertek, and Ahmet Demirelli and based on the strategic
                management know-how introduced by A.J. Slywotzky et al. Please
                select the module, answer the questions in order, and obtain the
                list of possible strategies you can apply, together with
                suitability score for each strategy."
              </p>
              <img src={Logo} alt="" />
              {/* {
              <p>
                <a href="#" className="btn btn-primary m-1">
                  Login
                </a>
                <a href="#" className="btn btn-secondary m-1">
                  Register
                </a>
              </p>
            } */}
            </div>
          </section>
        </div>
      </Loader>
    );
  }
}

export default Welcome;

import React, {
  Component,
  // Fragment
} from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  // NavItem,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import RegisterModal from "./auth/RegisterModal";
// import LoginModal from "./auth/LoginModal";
// import Logout from "./auth/Logout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modules, Records, ModulePage, Welcome } from "../pages";
// import * as ReactBootstrap from "react-bootstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    // const { isAuthenticated, user } = this.props.auth;

    // let recordLink;

    // if (isAuthenticated) {
    //   recordLink = (
    //     <Link to="/Records">
    //       <ReactBootstrap.Nav.Link href="#records">
    //         Records
    //       </ReactBootstrap.Nav.Link>
    //     </Link>
    //   );
    // }

    // const authLinks = (
    //   <Fragment>
    //     <NavItem>
    //       <span className="navbar-text mr-3">
    //         <strong>{user ? `Welcome ${user.name}` : ""}</strong>
    //       </span>
    //     </NavItem>
    //     <NavItem>
    //       <Logout />
    //     </NavItem>
    //   </Fragment>
    // );

    // const guestLinks = (
    //   <Fragment>
    //     <NavItem>
    //       <RegisterModal />
    //     </NavItem>
    //     <NavItem>
    //       <LoginModal />
    //     </NavItem>
    //   </Fragment>
    // );

    return (
      <div>
        <Router>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <Link to="/" className="navbar-brand">
                StrategyAdvisor Cloud
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav
                  className="nav nav-pills nav-justified pl-4 cstNavItemUl"
                  navbar
                >
                  <Link
                    to="/Modules"
                    className="nav-link btn btn-sm btn-primary text-white cstNavItem"
                  >
                    Modules
                  </Link>
                </Nav>
              </Collapse>

              {/*
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  {isAuthenticated ? authLinks : guestLinks}
                </Nav>
              </Collapse>
              */}
            </Container>
          </Navbar>

          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/Modules" exact component={Modules} />
            <Route path="/Records" exact component={Records} />
            <Route path="/ModulePage" exact component={ModulePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);

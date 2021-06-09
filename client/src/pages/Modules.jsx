import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

import ChannelImage from "../pics/module_images_700x400/Channel.jpg";
import CustomerImage from "../pics/module_images_700x400/Customer.jpg";
import KnowledgeImage from "../pics/module_images_700x400/Knowledge.jpg";
import MegaImage from "../pics/module_images_700x400/Mega.jpg";
import OrganizationImage from "../pics/module_images_700x400/Organization.jpg";
import ProductImage from "../pics/module_images_700x400/Product.jpg";
import ValueChainImage from "../pics/module_images_700x400/ValueChain.jpg";

class Modules extends Component {
  render() {
    return (
      <Loader>
        <div className="container">
          <h2 className="flex text-uppercase text-center display-4 pb-2">
            Modules
          </h2>
          <br />
          <div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img className="card-img-top" src={ChannelImage} alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">Channel</h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 1,
                        moduleTitle: "Channel",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary" href="/ModulePage">
                        Go to Module
                      </Button> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img className="card-img-top" src={CustomerImage} alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">Customer</h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 2,
                        moduleTitle: "Customer",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary">Go to Module</Button> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img className="card-img-top" src={ValueChainImage} alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">
                      Value Chain
                    </h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 3,
                        moduleTitle: "Value Chain",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary">Go to Module</Button> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img className="card-img-top" src={KnowledgeImage} alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">
                      Knowledge
                    </h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 4,
                        moduleTitle: "Knowledge",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary">Go to Module</Button> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img className="card-img-top" src={MegaImage} alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">Mega</h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 5,
                        moduleTitle: "Mega",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary">Go to Module</Button> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img
                    className="card-img-top"
                    src={OrganizationImage}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">
                      Organization
                    </h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 6,
                        moduleTitle: "Organization",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary">Go to Module</Button> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100 text-center">
                  <img className="card-img-top" src={ProductImage} alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-uppercase mb-3">Product</h4>
                    <Link
                      to={{
                        pathname: "/ModulePage",
                        moduleId: 7,
                        moduleTitle: "Product",
                      }}
                      className="nav-link btn btn-primary text-white"
                    >
                      Go to Module
                      {/* <Button variant="primary">Go to Module</Button> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Loader>
    );
  }
}

export default Modules;

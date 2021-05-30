import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ChannelImage from '../pics/module_images_700x400/Channel.jpg'
import CustomerImage from '../pics/module_images_700x400/Customer.jpg'
import KnowledgeImage from '../pics/module_images_700x400/Knowledge.jpg'
import MegaImage from '../pics/module_images_700x400/Mega.jpg'
import OrganizationImage from '../pics/module_images_700x400/Organization.jpg'
import ProductImage from '../pics/module_images_700x400/Product.jpg'
import ValueChainImage from '../pics/module_images_700x400/ValueChain.jpg'


class Modules extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 class="flex">Modules</h2>
                    <br/>
                    <div>
                    <div class="row">
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={ChannelImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                              Channel
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 1,
                                        moduleTitle: "Channel"
                                      }
                              }>
                                <Button variant="primary" href="/ModulePage">Go to module</Button>
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={CustomerImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                            Customer
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 2,
                                        moduleTitle: "Customer"
                                      }
                              }>
                              <Button variant="primary">Go to module</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={ValueChainImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                            Value Chain
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 3,
                                        moduleTitle: "Value Chain"
                                      }
                              }>
                            <Button variant="primary">Go to module</Button>
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={KnowledgeImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                            Knowledge
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 4,
                                        moduleTitle: "Knowledge"
                                      }
                              }>
                            <Button variant="primary">Go to module</Button>
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={MegaImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                            Mega
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 5,
                                        moduleTitle: "Mega"
                                      }
                              }>
                            <Button variant="primary">Go to module</Button>
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={OrganizationImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                            Organization
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 6,
                                        moduleTitle: "Organization"
                                      }
                              }>
                            <Button variant="primary">Go to module</Button>
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src={ProductImage} alt="" /></a>
                          <div class="card-body">
                            <h4 class="card-title">
                            Product
                            </h4>
                            <Link   to={
                                      {     
                                        pathname: '/ModulePage',
                                        moduleId: 7,
                                        moduleTitle: "Product"
                                      }
                              }>
                            <Button variant="primary">Go to module</Button>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </div>

            
        )
    }
}

export default Modules
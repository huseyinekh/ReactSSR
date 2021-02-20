import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "css-loader?./style.css";
import { Helmet } from "react-helmet";
export default class Layout extends Component {
  reactHelmet() {
    return (
      <Helmet>
        <link rel="stylesheet" href="style.css"></link>
      </Helmet>
    );
  }
  render() {
    return (
      <div className="layout">
        {/* {this.reactHelmet()} */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About_</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

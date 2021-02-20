import React from "react";
import { Helmet } from "react-helmet";

class HomePageComponent extends React.Component {
  clickButton() {
    console.log("JS working");
  }
  reactHelmet() {
    return (
      <Helmet>
        <title>About Title</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.reactHelmet()}
        <h1>About Page PAGE</h1>
        <p>CONTENT</p>

        <button onClick={this.clickButton}>Click Button</button>
      </div>
    );
  }
}
export default HomePageComponent;

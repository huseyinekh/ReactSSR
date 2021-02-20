import React from "react";
import { Helmet } from "react-helmet";
import {Button} from "reactstrap"
const renderCmp=()=>{
    return<div>DIVA</div>
}
class HomePageComponent extends React.Component {
  clickButton() {
    console.log("JS working");
  }
  reactHelmet() {
    return (
      <Helmet>
        <title>Home Title</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.reactHelmet()}
        <h1>HOME PAGE</h1>
        <p>CONTENT</p>
        {renderCmp()}
        <Button>reacstrap button</Button>
        <button onClick={this.clickButton}>Click Button</button>
      </div>
    );
  }
}
export default HomePageComponent;

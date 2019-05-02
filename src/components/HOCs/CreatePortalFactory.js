import React, { Component } from "react";
import ReactDOM from "react-dom";

export const CreatePortalFactory = selector => BaseComponent => {
  let selectedElement;
  if (typeof selector === "object") selectedElement = selector;
  else selectedElement = document[`${selector}`];
  class UpdatedComponent extends Component {
    render() {
      return ReactDOM.createPortal(<BaseComponent />, selectedElement);
    }
  }
  return UpdatedComponent;
};

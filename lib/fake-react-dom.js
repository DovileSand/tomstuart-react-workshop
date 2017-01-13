'use strict';

var React = React || require('./fake-react');

var render = function (element, container) {
  if (typeof element === "string") {
    var textElement = document.createTextNode(element);
    container.appendChild(textElement);
  } else {
    var rendered = document.createElement(element.type)
    Object.keys(element.props).forEach(function(key){
      if (key === 'children') {
        element.props.children.forEach(function(child){
          render(child, rendered)
        })
      } else {
        rendered.setAttribute(key, element.props[key])
      }
    })
    container.appendChild(rendered);
  }
};

var ReactDOM = {
  render: render
};

module.exports = ReactDOM;

'use strict';

var createElement = function (type, props, children) {
  var returnValue =
  {
    type: type,
    props: props || {},
  }
  if (children) {
    returnValue.props.children = children;
  }
  return returnValue;
};

var createClass = function (specification) {
  // TODO your implementation of React.createClass goes here!
};

var React = {
  createElement: createElement,
  createClass: createClass
};

module.exports = React;

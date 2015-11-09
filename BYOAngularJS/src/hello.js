var _ = require('lodash');

module.exports = function sayHello(to) {
    var template = _.template("Hello, <%= name %>!");
    return template({ name: to });
};
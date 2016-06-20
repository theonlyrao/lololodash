var _ = require("lodash");


var pizza = [];

var worker = function(list) {
    _.sortBy(list).map(function(word){
	pizza.push(word.toUpperCase() + "CHAINED");
    });
    return pizza;
};

module.exports = worker;



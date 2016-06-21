var _ = require("lodash");

var worker = function(list) {
    var pizza = [];
    
    _.sortBy(list).map(function(word){
	pizza.push(word.toUpperCase() + "CHAINED");
    });
    return pizza;
};

module.exports = worker;



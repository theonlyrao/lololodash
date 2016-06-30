var _ = require("lodash");

var worker = function(collection) {
    var grouped = _.groupBy(collection, function(order){
	return order.article
    })
    console.log(grouped)
    var output = _.map(grouped, function(grouping){
	console.log(grouping[value])
    })
    _.reduce(collection, function(accumulator, value) {
	return accumulator + value[1];
    }, 0);
};


module.exports = worker;

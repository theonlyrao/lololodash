var _ = require("lodash");

var worker = function(collection) {
    _.reduce(collection, function(result, value) {
	console.log("total: " + result)
	console.log("article #: " + value.article)
	console.log("article quantity: " + value.quantity)
	if (result[value.article]) {
	    console.log("in if")
	    return result[value.article] += value.quantity;
	} else {
	    console.log("in else")
	    return result[value.article] = value.quantity;
	}
	return result;
    }, [{}]);
};


module.exports = worker;

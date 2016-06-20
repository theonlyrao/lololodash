var _ = require("lodash");

var results = {
    hot: [],
    warm: []
};

var worker = function(noIdea) {
    _.forEach(noIdea, function(value, key) {
	if (_.every(value, function(n) {
	    return n > 19;
	})) {
	    results.hot.push(key);
	} else if (_.some(value, function(n){
	    return n > 19;
	})){
	    results.warm.push(key);
	}
    })
    return results;
};

module.exports = worker;

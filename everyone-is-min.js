var _ = require("lodash");

var worker = function(noIdea) {
  var results = {
      hot: [],
      warm: []
  };

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

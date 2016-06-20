var _ = require("lodash");

var worker = function(list) {
    _.forEach(list, function(value, key) {
	if (value.population < 0.5) {
	    value.size = "small";
	} else if (value.population < 1.0) {
	    value.size = "med";
	} else {
	    value.size = "big";
	}
    });
    return list;
};

module.exports = worker;


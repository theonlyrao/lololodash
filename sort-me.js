var _ = require("lodash");

var worker = function(list) {
    return _.orderBy(list, ['quantity'], ['desc']);
};

module.exports = worker;

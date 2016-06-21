var _ = require("lodash")

var worker = function(collection) {
    var pizza = _.groupBy(collection, 'username');
    var results = _.map(pizza, function(value, key) {
	return { username: key, comment_count: _.size(value) }
    });
    var sorted = _.orderBy(results, ['comment_count'], ['desc'])
    return sorted;
};

module.exports = worker;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Array multisort witn O(N*log(N)) complexity
 * Usage:   arrayMultisort((a, b) => a.localeCompare(b))(['c', 'b', 'a'], [1, 2, 3])
 */
var changeOrder = function changeOrder(indices, indicesMap) {
	return function (acc, value, originalIndex) {
		var newIndex = indicesMap[originalIndex];
		acc[newIndex] = value;
		return acc;
	};
};

var arrayMultisort = function arrayMultisort(sortFn) {
	return function (refArray) {
		for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			others[_key - 1] = arguments[_key];
		}

		var indices = refArray.map(function (value, index) {
			return index;
		}) // create indices
		.sort(function (a, b) {
			return sortFn(refArray[a], refArray[b]);
		}); // sort according to refArray
		var indicesMap = indices.reduce(function (acc, newIndex, i) {
			return acc[newIndex] = i, acc;
		}, {}); // for fast index lookup
		return [refArray.reduce(changeOrder(indices, indicesMap), [])].concat(_toConsumableArray(others.map(function (other) {
			return other.reduce(changeOrder(indices, indicesMap), []);
		})));
	};
};

if (typeof module !== 'undefined') {
	module.exports = arrayMultisort;
}
'use strict';

function strictArrayEquals(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((item, index) => JSON.stringify(item) === JSON.stringify(arr2[index]));
}

module.exports = strictArrayEquals;

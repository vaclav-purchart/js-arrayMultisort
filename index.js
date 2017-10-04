/**
 * Array multisort witn O(N*log(N)) complexity
 * Usage:   arrayMultisort((a, b) => a.localeCompare(b))(['c', 'b', 'a'], [1, 2, 3])
 */
const changeOrder = (indices, indicesMap) => (acc, value, originalIndex) => {
	const newIndex = indicesMap[originalIndex]
	acc[newIndex] = value
	return acc
}

const arrayMultisort = (sortFn) => (refArray, ...others) => {
	const indices = refArray
		.map((value, index) => index)  // create indices
		.sort((a, b) => sortFn(refArray[a], refArray[b]))  // sort according to refArray
	const indicesMap = indices.reduce((acc, newIndex, i) => (acc[newIndex] = i, acc), {})  // for fast index lookup
	return [
		refArray.reduce(changeOrder(indices, indicesMap), []),
		...others.map((other) => other.reduce(changeOrder(indices, indicesMap), []))
	]
}

if (process) {
	module.exports = arrayMultisort
}

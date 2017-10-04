const arrayMultisort = require('./index')

const testArrays = (a, b) => {
	try {
		console.assert(JSON.stringify(a) === JSON.stringify(b))
	}
	catch (e) {
		console.error(a, ' != ', b)
		throw e
	}
}
const compareValues = (a, b) => (a - b)
const sort = arrayMultisort(compareValues)

// simple sorting
testArrays(
	sort([3, 4, 1, 2], ['A', 'B', 'C', 'D']),
	[[1, 2, 3, 4], ['C', 'D', 'A', 'B']]
)
// duplicid values
testArrays(
	sort([3, 4, 1, 2], ['A', 'B', 'B', 'D']),
	[[1, 2, 3, 4], ['B', 'D', 'A', 'B']]
)
// more arrays
testArrays(
	sort([3, 4, 1, 2], ['A', 'B', 'C', 'D'], [0.4, 0.2, 0.1, 0.3]),
	[[1, 2, 3, 4], ['C', 'D', 'A', 'B'], [0.1, 0.3, 0.4, 0.2]]
)
// localeCompare
testArrays(
	arrayMultisort((a, b) => a.localeCompare(b))(['á', 'ž', 'ť', 'ď', 'y'], [1, 2, 3, 4, 5]),
	[['á', 'ď', 'ť', 'y', 'ž'], [1, 4, 3, 5, 2]]
)
// no side effects
{
	const refArray = [3, 4, 1, 2]
	const array1 = ['A', 'B', 'C', 'D']
	testArrays(
		sort(refArray, array1),
		[[1, 2, 3, 4], ['C', 'D', 'A', 'B']]
	)

	testArrays(refArray, [3, 4, 1, 2])
	testArrays(array1, ['A', 'B', 'C', 'D'])
}

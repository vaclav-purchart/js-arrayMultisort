const arrayMultisort = require('./index')

const testArrays = (a, b) => {
	console.log(a, b)
	console.assert(JSON.stringify(a) === JSON.stringify(b))
}
const compareValues = (a, b) => a < b ? -1 : (a > b ? 1 : 0)
const sort = arrayMultisort(compareValues)

testArrays(
    sort([3, 4, 1, 2], ['A', 'B', 'C', 'D']),
    [[1, 2, 3, 4], ['C', 'D', 'A', 'B']]
)
testArrays(
    sort([3, 4, 1, 2], ['A', 'B', 'B', 'D']),
    [[1, 2, 3, 4], ['B', 'D', 'A', 'B']]
)

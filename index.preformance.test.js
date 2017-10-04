const {performance} = require('perf_hooks');
const arrayMultisort = require('./index')

const measure = (actionName, action) => {
	const start = performance.now()
	action()
	return performance.now() - start
}

const generateData = (count) => {
	const array1 = [...Array(count).keys()]
	const refArray = array1.concat().reverse()
	return [refArray, array1]
}

const sort = arrayMultisort((a, b) => (a - b))

const counts = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7]

counts.forEach((n) => {
	const [refArray, array1] = generateData(n)
	const timeMs = measure(`sort ${n} items`, () => {
		sort(refArray, array1)
	})
	console.log(`${n};${timeMs.toFixed(2)};${Math.log10(timeMs).toFixed(2)};`)
})
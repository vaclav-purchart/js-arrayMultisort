# js-arrayMultisort
Zero-dependency array multi-sort with O(N*log(N)) complexity. The sort is not necessarily *stable*. Returns a new copy for each sorted array in the list.

```javascript
arrayMultisort((a, b) => (a - b))([3, 4, 1, 2], ['A', 'B', 'C', 'D'])
// returns [[1, 2, 3, 4], ['C', 'D', 'A', 'B']]
```

## Installation and Usage
```bash
npm i array-multisort
```

```javascript
const arrayMultisort = require('array-multisort')
arrayMultisort((a, b) => (a - b))([3, 4, 1, 2], ['A', 'B', 'C', 'D'])
```

## Syntax
`arrayMultisort(compareFunction)(referenceArray[, anotherArray1, anotherArray2, ...])`

### Parameters
**compareFunction**
> Specifies a function that defines the sort order. Same as for [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

**referenceArray**
> The array of elements are sorted according to the return value of the compare function.

**anotherArray1-N**
> Order of elements in these another arrays is changed in the same way as in *referenceArray*. If element on index 1 of the referenceArray was moved to index 5 of the sorted array, element on index 1 of anotherArray1 is moved to a fifth index.

**Return value**
> List of sorted arrays `[[referenceArray], [anotherArray1], ...]`. All arrays are sorted in the same order as the *referenceArray*.

## Usage
**Example 1:**
```javascript
arrayMultisort((a, b) => (a - b))([3, 4, 1, 2], ['A', 'B', 'C', 'D'])
```

Output: `[[1, 2, 3, 4], ['C', 'D', 'A', 'B']]`

**Example 2:**
```javascript
const compare = (a, b) => a.localeCompare(b)
const sort = arrayMultisort(compare)
sort(['c', 'b', 'a'], [1, 2, 3])
```

Output: `[['a', 'b', 'c'], [3, 2, 1]]`

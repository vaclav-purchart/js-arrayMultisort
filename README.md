# js-arrayMultisort
Array multisort with O(N*log(N)) complexity

*Usage:*
`arrayMultisort((a, b) => a.localeCompare(b))(['c', 'b', 'a'], [1, 2, 3])`

Output: `[['a', 'b', 'c'], [3, 2, 1]]`

*Another example:*
```
const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0)
const sort = arrayMultisort(compare)
sort([3, 4, 1, 2], ['A', 'B', 'C', 'D'])
```

Output: `[[1, 2, 3, 4], ['C', 'D', 'A', 'B']]`

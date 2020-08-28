## How to pick a random element
- user's input of names changes the state
- choose a random integer between 0 and the length of the names array, and set it as the lucky index
- use .slice(index, number of elements) and spread operator to remove elements without mutating the original array

```javascript
state = {
  names: [],
  luckyIndex: 0,
}
```

```javascript
const fruits = ['peach', 'pear', 'apple', 'plum']

const newFruits = [...fruits]

newFruits.splice(2, 1)
=> [ 'apple' ]

newFruits
=> [ 'peach', 'pear', 'plum' ]

fruits
=> [ 'peach', 'pear', 'apple', 'plum' ]
```

## How to structure the data
- create a lists array in db.json
- every time a user creates a list, destroy any existing lists
- therefore, there should only ever be one list in db.json at any time
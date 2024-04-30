# HashMap and HashSet JavaScript Implementation 🗺️

This project implements both HashMap and HashSet data structures in JavaScript, providing efficient ways to store and manage collections of keys or key-value pairs.

## Project Goals

-   **Understanding Data Structures:** Implement HashMap and HashSet from scratch to gain a deeper understanding of their underlying principles and mechanisms.
-   **Collision Handling:** Explore and implement collision resolution techniques to handle hash collisions effectively.
-   **Efficiency:** Design and optimize the implementations for efficient insertion, retrieval, and deletion of elements.
-   **Flexibility:** Allow customization of the hash function and other parameters to adapt the data structures to different use cases.
-   **Data Structure Practice:** Gain practical experience in building and working with fundamental data structures in JavaScript.

## Usage

1. import the HashMap and HashSet classes from the main module.

```javascript
import { HashMap, HashSet } from './main';
```

2. Create instances and use the methods:

```javascript
// Create a new HashMap
const myMap = new HashMap();

// Add key-value pairs
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Get a value
const value = myMap.get('key1'); // value = 'value1'

// Create a new HashSet
const mySet = new HashSet();

// Add elements
mySet.add('element1');
mySet.add('element2');

// Check if an element exists
const exists = mySet.has('element1'); // exists = true
```

Complete Example:

```javascript
import { HashMap, HashSet } from './main';

// Using HashMap
const userMap = new HashMap();
userMap.set('user123', { name: 'John', age: 30 });
const userData = userMap.get('user123');
console.log(userData.name); // Output: John

// Using HashSet
const allowedRoles = new HashSet();
allowedRoles.add('admin');
allowedRoles.add('user');
const isAdmin = allowedRoles.has('admin');
console.log(isAdmin); // Output: true
```

## Contributing

Contributions are welcome! Feel free to submit pull requests for bug fixes, improvements, or additional features.

## License

This project is licensed under the [MIT License](LICENSE).

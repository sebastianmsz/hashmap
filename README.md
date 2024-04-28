## HashMap JavaScript Implementation 🗺️

This project implements a HashMap data structure in JavaScript, providing functionalities for storing and retrieving key-value pairs with efficient access and collision handling.

### Project Goals

-   **Understanding HashMaps:** Implement a HashMap from scratch to gain a deeper understanding of its underlying principles and mechanisms.
-   **Collision Handling:** Explore and implement collision resolution techniques, such as separate chaining, to handle hash collisions effectively.
-   **Efficiency:** Design and optimize the HashMap implementation for efficient insertion, retrieval, and deletion of key-value pairs.
-   **Flexibility:** Allow customization of the hash function and other parameters to adapt the HashMap to different use cases.
-   **Data Structure Practice:** Gain practical experience in building and working with fundamental data structures in JavaScript.

### Features

-   **Hashing:** Generates hash codes for keys using a customizable hash function.
-   **Set:** Stores key-value pairs, handling collisions and resizing the underlying data structure as needed.
-   **Get:** Retrieves values associated with given keys.
-   **Has:** Checks if a key exists in the HashMap.
-   **Remove:** Deletes key-value pairs based on keys.
-   **Length:** Returns the number of stored key-value pairs.
-   **Clear:** Removes all entries from the HashMap.
-   **Keys:** Returns an array of all keys in the HashMap.
-   **Values:** Returns an array of all values in the HashMap.
-   **Entries:** Returns an array of key-value pairs.

### Implementation Details

-   The HashMap uses an array of buckets to store key-value pairs.
-   Collision resolution is handled using separate chaining, where each bucket can hold multiple key-value pairs in a linked list.
-   The project includes a basic hash function but allows for customization.
-   The load factor is used to determine when to resize the underlying array to maintain efficiency.

### Usage

To use the HashMap, simply create a new instance and call its methods:

```javascript
const myHashMap = new HashMap();

myHashMap.set('key1', 'value1');
myHashMap.set('key2', 'value2');

const value = myHashMap.get('key1'); // returns 'value1'

const hasKey = myHashMap.has('key2'); // returns true

myHashMap.remove('key1');

const size = myHashMap.length(); // returns 1

// ... and so on
```

## Contributing

Contributions are welcome! Feel free to submit pull requests for bug fixes, improvements, or additional features.

## License

This project is licensed under the [MIT License](LICENSE).

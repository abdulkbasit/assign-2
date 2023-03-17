let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(`Original Array: ${fruits}`);

// Append a string to the end of the array
fruits.push("fig");
console.log(`After appending 'fig': ${fruits}`);

// Prepend a string to the beginning of the array
fruits.unshift("apricot");
console.log(`After prepending 'apricot': ${fruits}`);

// Remove a string from a specific index in the array and replace it with another string
fruits.splice(2, 1, "grape");
console.log(`After replacing 'cherry' with 'grape': ${fruits}`);

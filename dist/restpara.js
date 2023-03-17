"use strict";
function logItems(...items) {
    items.forEach(item => {
        console.log(item);
    });
}
logItems(1, 'two', true); // Output: 1, "two", true

/**
 * Filters an array to return elements within a specified range [a, b]
 * @param {number[]} arr - The input array
 * @param {number} a - The minimum value (inclusive)
 * @param {number} b - The maximum value (inclusive)
 * @returns {number[]} A new array containing elements where a <= element <= b
 */
function filterRange(arr, a, b) {
    return arr.filter(element => element >= a && element <= b);
}

// Export for use in other modules (if using Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filterRange;
}

// Example usage as shown in the problem statement
if (typeof window === 'undefined') {
    // Running in Node.js environment
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    
    console.log('Original array:', arr); // Should show [5, 3, 8, 1] (not modified)
    console.log('Filtered array:', filtered); // Should show [3, 1] (matching values)
}
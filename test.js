// Simple test file for filterRange function
const filterRange = require('./filterRange.js');

function test(description, actual, expected) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    const passed = actualStr === expectedStr;
    
    console.log(`${passed ? '✅' : '❌'} ${description}`);
    if (!passed) {
        console.log(`   Expected: ${expectedStr}`);
        console.log(`   Actual:   ${actualStr}`);
    }
    return passed;
}

function runTests() {
    console.log('Running filterRange tests...\n');
    
    let allPassed = true;
    
    // Test case from the problem statement
    let arr1 = [5, 3, 8, 1];
    let filtered1 = filterRange(arr1, 1, 4);
    allPassed &= test('Basic test case [5, 3, 8, 1] range 1-4', filtered1, [3, 1]);
    allPassed &= test('Original array not modified', arr1, [5, 3, 8, 1]);
    
    // Edge cases
    allPassed &= test('Empty array', filterRange([], 1, 5), []);
    allPassed &= test('No elements in range', filterRange([10, 20, 30], 1, 5), []);
    allPassed &= test('All elements in range', filterRange([2, 3, 4], 1, 5), [2, 3, 4]);
    allPassed &= test('Single element in range', filterRange([3], 1, 5), [3]);
    allPassed &= test('Single element out of range', filterRange([10], 1, 5), []);
    allPassed &= test('Boundary values included', filterRange([1, 2, 5, 6], 1, 5), [1, 2, 5]);
    allPassed &= test('Negative numbers', filterRange([-5, -2, 0, 3, 8], -3, 2), [-2, 0]);
    allPassed &= test('Duplicates preserved', filterRange([2, 2, 3, 3, 4, 4], 2, 3), [2, 2, 3, 3]);
    
    console.log(`\n${allPassed ? '🎉 All tests passed!' : '💥 Some tests failed!'}`);
    return allPassed;
}

runTests();
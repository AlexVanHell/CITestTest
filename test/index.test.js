const sum = require('../index');

test('adds 1 + 2 to equal 3', sumTest);

test('adds 2 + 5 equals to 7', function() {
	expect(sum(2, 5)).toBe(7);
})

function sumTest() {
	expect(sum(1, 2)).toBe(3);
}
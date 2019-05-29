const sum = function (a, b) {
	return a + b;
}

test('adds 1 + 2 to equal 3', sumTest);

test('adds 2 + 5 equals to 7', function () {
	expect(sum(2, 5)).toBe(7);
})

test('adds 2 + 3 equals to 5', function () {
	expect(sum(2, 3)).toBe(5);
})

// Comment

function sumTest() {
	expect(sum(1, 2)).toBe(3);
}
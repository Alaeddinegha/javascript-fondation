'use strict';

describe("max()", function() {
  it("1 & 2 -> 2", function() {
    expect(max(1, 2)).toEqual(2);
  });
  it("2 & 1 -> 2", function() {
    expect(max(2, 1)).toEqual(2);
  });
  it("2 & 2 -> 2", function() {
    expect(max(2, 2)).toEqual(2);
  });
  it("-2 & 2 -> 2", function() {
    expect(max(-2, 2)).toEqual(2);
  });
});

describe("maxOfThree()", function() {
  it("1, 2 & 3 -> 3", function() {
    expect(maxOfThree(1, 2, 3)).toEqual(3);
  });
  it("3, 2 & 1 -> 3", function() {
    expect(maxOfThree(3, 2, 1)).toEqual(3);
  });
  it("-3, 2 & 1 -> 2", function() {
    expect(maxOfThree(-3, 2, 1)).toEqual(2);
  });
});

describe("maxOfArray()", function() {
  it("[0, 1] -> 1", function() {
    expect(maxOfArray([0, 1])).toEqual(1);
  });
  it("[1, 2, 3] -> 3", function() {
    expect(maxOfArray([1, 2, 3])).toEqual(3);
  });
  it("[100, 10, 1] -> 100", function() {
    expect(maxOfArray([100, 10, 1])).toEqual(100);
  });
  it("[-100, 10, 1] -> 10", function() {
    expect(maxOfArray([-100, 10, 1])).toEqual(10);
  });
  it("[0, 2, 4, 6, 8, 10, 12, 14] -> 14", function() {
    expect(maxOfArray([0, 2, 4, 6, 8, 10, 12, 14])).toEqual(14);
  });
});

describe("times()", function() {
  it("[1, 2, 3, 4] -> 24", function() {
    expect(times([1, 2, 3, 4])).toEqual(24);
  });
  it("[2, 6] -> 12", function() {
    expect(times([2, 6])).toEqual(12);
  });
  it("[1, 2, 3, 4, 0] -> 0", function() {
    expect(times([1, 2, 3, 4, 0])).toEqual(0);
  });
});

describe("fact()", function() {
  it("1 -> 1", function() {
    expect(fact(1)).toEqual(1);
  });
  it("2 -> 2", function() {
    expect(fact(2)).toEqual(2);
  });
  it("3 -> 6", function() {
    expect(fact(3)).toEqual(6);
  });
  it("5 -> 120", function() {
    expect(fact(5)).toEqual(120);
  });
});

describe("isVowel()", function() {
  it("'c' -> true", function() {
    expect(isVowel('c')).toBe(false);
  });
  it("'x' -> true", function() {
    expect(isVowel('x')).toBe(false);
  });
  it("'w' -> true", function() {
    expect(isVowel('w')).toBe(false);
  });
  it("'i' -> true", function() {
    expect(isVowel('i')).toBe(true);
  });
  it("'a' -> true", function() {
    expect(isVowel('a')).toBe(true);
  });
});

describe("hasVowel()", function() {
  it("'rst' -> false", function() {
    expect(hasVowel('rst')).toBe(false);
  });
  it("'' -> false", function() {
    expect(hasVowel('')).toBe(false);
  });
  it("'abcd' -> true", function() {
    expect(hasVowel('abcd')).toBe(true);
  });
  it("'xyz' -> true", function() {
    expect(hasVowel('xyz')).toBe(true);
  });
});

describe("translate()", function() {
  it("'' -> ''", function() {
    expect(translate('')).toEqual('');
  });
  it("'hello' -> 'salut'", function() {
    expect(translate('hello')).toEqual('salut');
  });
  it("'hello world' -> 'salut monde'", function() {
    expect(translate('hello world')).toEqual('salut monde');
  });
  it("'goodbye cruel world' -> 'adieu monde cruel'", function() {
    expect(translate('goodbye cruel world')).toEqual('adieu cruel monde');
  });
});
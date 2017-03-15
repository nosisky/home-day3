'use strict'
let find = require('../app/library.js');
describe("Find missing number two lists: ", function() {

  describe("Case for an empty list", function() {

    it("should return 0 for empty list", function() {
      expect(find.findMissing([], [])).toEqual(0);
    });

  });


  describe("Case for less than or more than 2 arguments", function() {

    it("should return `Only Two Arguments are allowed` for []", function() {
      expect(find.findMissing([])).toBe('Only two arguments are allowed');
    });

    it("should return `Only Two Arguments are Allowed` for [][][]", function() {
      expect(find.findMissing([], [], [])).toBe('Only two arguments are allowed');
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(find.findMissing([2], [2])).toEqual(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(find.findMissing([4], [4])).toEqual(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(find.findMissing([7], [7])).toEqual(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(find.findMissing([1, 2], [1, 2, 5])).toEqual(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(find.findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(find.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).toEqual(1);
    });

    it("should return 71 for [15, 24, 37, 46, 511, 666],[15, 24, 71, 37, 46, 511, 666]", function() {
      expect(find.findMissing([15, 24, 37, 46, 511, 666], [15, 24, 71, 37, 46, 511, 666])).toEqual(71);
    });

  });

  describe("Case for lists with unordered entries and a missing number", function() {

    it("should return 69 for [10, 32, 48, 51, 29],[32, 29, 10, 48, 51, 69]", function() {
      expect(find.findMissing([10, 32, 48, 51, 29], [32, 29, 10, 48, 51, 69])).toEqual(69);
    });

    it("should return 48 for [43, 67, 84, 52, 71, 90, 110],[110, 71, 48, 84, 52, 90, 67, 43]", function() {
      expect(find.findMissing([43, 67, 84, 52, 71, 90, 110], [110, 71, 48, 84, 52, 90, 67, 43])).toEqual(48);
    });

    it("should return 94 for [59, 40, 78, 65, 113, 666, 73],[73, 113, 78, 59, 40, 666, 65, 94]", function() {
      expect(find.findMissing([59, 40, 78, 65, 113, 666, 73],[73, 113, 78, 59, 40, 666, 65, 94])).toEqual(94);
    });

  });

});
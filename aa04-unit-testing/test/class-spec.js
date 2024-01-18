const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let word = new Word('hello');
    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word);
    });
  });

  describe("removeVowels function", function () {
    let word = new Word('hello')
    let vowels = 'aeiou'
    it("should return a the word with all vowels removed", function () {
      expect(word.word).to.not.include(vowels);
    });
  });

  describe("removeConsonants function", function () {
    let word = new Word('hello')
    let vowels = 'aeiou'
    it("should return the word with the consonants removed", function () {
      expect(word.word).to.not.include(!vowels);
    });
  });

  describe("pigLatin function", function () {
    let word = new Word('hello')
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin(word.word)).to.deep.equal('ellohay');
    });
  });
});

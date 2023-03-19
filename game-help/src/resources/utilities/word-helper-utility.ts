import wordListJson from "./5-letter-words-alphabetical.json";

/**
 * Mostly just some helper classes
 */
export class WordHelperUtility {

	/**
	 * A list of the valid words considering the restrictions that have been given.
	 * @type {string[]}
	 */
	private _validWords: string[];

	/**
	 * A list of all the words regardless of the restrictions that have been given.
	 * @type {string[]}
	 */
	private _allWords: string[];

	/**
	 * The known first letter of the word. Undefined or empty string if unknown.
	 * @type {string}
	 */
	private _firstLetter: string;

	/**
	 * The second letter of the word.
	 * @type {string}
	 */
	private _secondLetter: string;

	/**
	 * The third letter of the word.
	 * @type {string}
	 */
	private _thirdLetter: string;

	/**
	 * The fourth letter of the word.
	 * @type {string}
	 */
	private _fourthLetter: string;

	/**
	 * The fifth letter of the word.
	 * @type {string}
	 */
	private _fifthLetter: string;

	/**
	 * The list of known invalid first letter(s) of the word. Undefined or empty array if unknown.
	 * @type {[string]}
	 */
	private _excludeFirstLetter: string[];

	/**
	 * The list of known invalid second letter(s) of the word. Undefined or empty array if unknown.
	 * @type {string}
	 */
	private _excludeSecondLetter: string[];

	/**
	 * The list of known invalid third letter(s) of the word. Undefined or empty array if unknown.
	 * @type {string}
	 */
	private _excludeThirdLetter: string[];

	/**
	 * The list of known invalid fourth letter(s) of the word. Undefined or empty array if unknown.
	 * @type {string}
	 */
	private _excludeFourthLetter: string[];

	/**
	 * The list of known invalid fifth letter(s) of the word. Undefined or empty array if unknown.
	 * @type {string}
	 */
	private _excludeFifthLetter: string[];

	/**
	 * Letters that we know the word contains but not which spot in the word
	 * @type {string}
	 */
	private _containsLetters: string;

	/**
	 * Letters to exclude from valid words.
	 * @type {string}
	 */
	private _excludeLetters: string;

	/**
	 * Constructor for WordHelperUtility
	 */
	constructor() {
		this._allWords = wordListJson;
		this._validWords = this._allWords;
		this._firstLetter = "";
	}

	/**
	 * Sets the known first letter of the word.
	 * @param {string} firstLetter The first letter.
	 * @returns {string} The first letter after trying to set it.
	 */
	public setFirstLetter(firstLetter: string) {
		if(firstLetter || this.isEmptyString(firstLetter)) {
			this._firstLetter = firstLetter;
			this._computeValidWords();
		} else {
			console.log("Error setting the first letter, firstLetter = ", firstLetter);
		}
		return this._firstLetter;
	}

	/**
	 * Sets the known second letter of the word.
	 * @param {string} secondLetter The second letter.
	 * @returns {string} The second letter after trying to set it.
	 */
	public setSecondLetter(secondLetter: string) {
		if(secondLetter || this.isEmptyString(secondLetter)) {
			this._secondLetter = secondLetter;
			this._computeValidWords();
		} else {
			console.log("Error setting the second letter, secondLetter = ", secondLetter);
		}
		return this._secondLetter;
	}

	/**
	 * Sets the known third letter of the word.
	 * @param {string} thirdLetter The third letter.
	 * @returns {string} The third letter after trying to set it.
	 */
	public setThirdLetter(thirdLetter: string) {
		if(thirdLetter || this.isEmptyString(thirdLetter)) {
			this._thirdLetter = thirdLetter;
			this._computeValidWords();
		} else {
			console.log("Error setting the third letter, thirdLetter = ", thirdLetter);
		}
		return this._thirdLetter;
	}

	/**
	 * Sets the known fourth letter of the word.
	 * @param {string} fourthLetter The fourth letter.
	 * @returns {string} The fourth letter after trying to set it.
	 */
	public setFourthLetter(fourthLetter: string) {
		if(fourthLetter || this.isEmptyString(fourthLetter)) {
			this._fourthLetter = fourthLetter;
			this._computeValidWords();
		} else {
			console.log("Error setting the fourth letter, fourthLetter = ", fourthLetter);
		}
		return this._fourthLetter;
	}

	/**
	 * Sets the known fifth letter of the word.
	 * @param {string} fifthLetter The fifth letter.
	 * @returns {string} The fifth letter after trying to set it.
	 */
	public setFifthLetter(fifthLetter: string) {
		if(fifthLetter || this.isEmptyString(fifthLetter)) {
			this._fifthLetter = fifthLetter;
			this._computeValidWords();
		} else {
			console.log("Error setting the fifth letter, fifthLetter = ", fifthLetter);
		}
		return this._fifthLetter;
	}

	/**
	 * Sets the known invalid first letter(s) of the word.
	 * @param {string} excludeFirstLetter String of letters to exclude for the first letter.
	 * @returns {string} The first letter exclude list after trying to set it.
	 */
	public setExcludeFirstLetter(excludeFirstLetter: string) {
		if(excludeFirstLetter || this.isEmptyString(excludeFirstLetter)) {
			this._excludeFirstLetter = Array.from(excludeFirstLetter);
			this._computeValidWords();
		} else {
			console.log("Error setting the first letter, excludeFirstLetter = ", excludeFirstLetter);
		}
		return this._excludeFirstLetter;
	}

	/**
	 * Sets the known invalid second letter(s) of the word.
	 * @param {string} excludeSecondLetter String of letters to exclude for the second letter.
	 * @returns {string} The second letter exclude list after trying to set it.
	 */
	public setExcludeSecondLetter(excludeSecondLetter: string) {
		if(excludeSecondLetter || this.isEmptyString(excludeSecondLetter)) {
			this._excludeSecondLetter = Array.from(excludeSecondLetter);
			this._computeValidWords();
		} else {
			console.log("Error setting the second letter, excludeSecondLetter = ", excludeSecondLetter);
		}
		return this._secondLetter;
	}

	/**
	 * Sets the known invalid third letter(s) of the word.
	 * @param {string} excludeThirdLetter String of letters to exclude for the third letter.
	 * @returns {string} The third letter exclude list after trying to set it.
	 */
	public setExcludeThirdLetter(excludeThirdLetter: string) {
		if(excludeThirdLetter || this.isEmptyString(excludeThirdLetter)) {
			this._excludeThirdLetter = Array.from(excludeThirdLetter);
			this._computeValidWords();
		} else {
			console.log("Error setting the third letter, excludeThirdLetter = ", excludeThirdLetter);
		}
		return this._excludeThirdLetter;
	}

	/**
	 * Sets the known invalid fourth letter(s) of the word.
	 * @param {string} excludeFourthLetter String of letters to exclude for the fourth letter.
	 * @returns {string} The fourth letter exclude list after trying to set it.
	 */
	public setExcludeFourthLetter(excludeFourthLetter: string) {
		if(excludeFourthLetter || this.isEmptyString(excludeFourthLetter)) {
			this._excludeFourthLetter = Array.from(excludeFourthLetter);
			this._computeValidWords();
		} else {
			console.log("Error setting the fourth letter, excludeFourthLetter = ", excludeFourthLetter);
		}
		return this._excludeFourthLetter;
	}

	/**
	 * Sets the known invalid fifth letter(s) of the word.
	 * @param {string} excludeFifthLetter String of letters to exclude for the fifth letter.
	 * @returns {string} The fifth letter exclude list after trying to set it.
	 */
	public setExcludeFifthLetter(excludeFifthLetter: string) {
		if(excludeFifthLetter || this.isEmptyString(excludeFifthLetter)) {
			this._excludeFifthLetter = Array.from(excludeFifthLetter);
			this._computeValidWords();
		} else {
			console.log("Error setting the fifth letter, excludeFifthLetter = ", excludeFifthLetter);
		}
		return this._excludeFifthLetter;
	}

	/**
	 * Sets the letters we know are in the word but not where.
	 * @param {string} containsLetters The letters.
	 * @returns {string} The letter after trying to set them.
	 */
	public setContainsLetters(containsLetters: string) {
		if(containsLetters || this.isEmptyString(containsLetters)) {
			this._containsLetters = containsLetters;
			this._computeValidWords();
		} else {
			console.log("Error setting the contains letters, containsLetters = ", containsLetters);
		}
		return this._containsLetters;
	}

	/**
	 * Sets the letters to exclude.
	 * @param {string} excludeLetters The letters to exclude.
	 * @returns {string} The letters after trying to set them.
	 */
	public setExcludeLetters(excludeLetters: string) {
		if(excludeLetters || this.isEmptyString(excludeLetters)) {
			this._excludeLetters = excludeLetters;
			this._computeValidWords();
		} else {
			console.log("Error setting the exclude letters, excludeLetters = ", excludeLetters);
		}
		return this._excludeLetters;
	}

	/**
	 * Computes the list of valid words and saves them to _validWords.
	 */
	private _computeValidWords() {
		this._validWords = this._allWords.filter((word: string) => {return this._checkWord(word)});
	}

	/**
	 * Checks if a string is an empty string.
	 * @param {string} value The string to check.
	 * @returns {boolean} True if the string is empty, false if it isn't.
	 */
	public isEmptyString(value: string): boolean {
		return (typeof value === 'string') && value.length === 0;
	}

	/**
	 * Checks if a given word is valid considering the restrictions that have been set.
	 * @param {string} word The word to check.
	 * @returns {boolean} True if the word is valid, false if it isn't.
	 */
	private _checkWord(word: string) {
		let _isValid = true;

		// Check the letters at specific spots
		_isValid = this._checkLetter(word, this._firstLetter, 0)// Check the first letter
			&& this._checkLetter(word, this._secondLetter, 1)// Check the second letter
			&& this._checkLetter(word, this._thirdLetter, 2)// Check the third letter
			&& this._checkLetter(word, this._fourthLetter, 3)// Check the fourth letter
			&& this._checkLetter(word, this._fifthLetter, 4);// Check the fifth letter

		// Contains letters
		if(_isValid && this._containsLetters) {
			for (let i = 0; i < this._containsLetters.length; i++) {
				if(!this._containsLetter(word, this._containsLetters.charAt(i))) {
					_isValid = false;
				}
			}
		}

		// Exclude letters
		if(_isValid && this._excludeLetters) {
			for (let i = 0; i < this._excludeLetters.length; i++) {
				if(this._containsLetter(word, this._excludeLetters.charAt(i))) {
					_isValid = false;
				}
			}
		}

		return _isValid;
	}

	/**
	 * Compares a given letter to a letter a specified index of a word.
	 * @param {string} word The word to check.
	 * @param {string} letter The letter to check.
	 * @param {number} index The index of the letter you want to check.
	 * @returns {boolean} True if the given letter and the letter of the word are the same, false if they aren't.
	 */
	private _checkLetter(word: string, letter: string, index: number) {
		let _isTheSame = true;

		// Check the letters
		if(word && letter && word.charAt(index) !== letter) {
			_isTheSame = false;
		}

		return _isTheSame;
	}

	/**
	 * Checks if a given letter is in a word.
	 * @param {string} word The word to check.
	 * @param {string} letter The letter to check.
	 * @returns {boolean} True if the given letter and the letter of the word are the same, false if they aren't.
	 */
	private _containsLetter(word: string, letter: string) {
		let _contains = true;

		// Check the letters
		if(word && letter && !word.includes(letter)) {
			_contains = false;
		}

		return _contains;
	}

	/**
	 * Returns the current list of valid words.
	 * @returns {string[]} The current list of valid words
	 */
	public getWords(): string[] {
		return this._validWords;
	}
}

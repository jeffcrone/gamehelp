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
	 * Constructor for WordHelperUtility
	 */
	constructor() {
		this._validWords = wordListJson;
	}

	/**
	 * Returns the current list of valid words.
	 * @returns {string[]} The current list of valid words
	 */
	public getWords(): string[] {
		return this._validWords;
	}
}

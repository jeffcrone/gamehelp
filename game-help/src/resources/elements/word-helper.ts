import {bindable, autoinject} from 'aurelia-framework';
import {WordHelperUtility} from 'resources/utilities/word-helper-utility';

/**
 * Class for the word-helper attribute.
 */
@autoinject
export class WordHelper {

	/**
	 * A list of the valid words considering the restrictions that have been given.
	 * @type {string[]}
	 */
	private _validWords: string[];

	/**
	 * Constructor for WordHelperUtility
	 * @param {WordHelperUtility} _wordHelperUtility A utility class for word helper.
	 */
	constructor(private _wordHelperUtility: WordHelperUtility) {
		this._validWords = this._wordHelperUtility.getWords();
	}
}

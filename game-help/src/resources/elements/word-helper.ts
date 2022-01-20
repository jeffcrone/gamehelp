import {
	bindable,
	autoinject,
	observable
} from 'aurelia-framework';
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
	 * The first letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _firstLetter: string;

	/**
	 * The second letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _secondLetter: string;

	/**
	 * The third letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _thirdLetter: string;

	/**
	 * The fourth letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _fourthLetter: string;

	/**
	 * The fifth letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _fifthLetter: string;

	/**
	 * Letters that we know the word contains but not which spot in the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _containsLetters: string;

	/**
	 * Letters to exclude from valid words.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _excludeLetters: string;

	/**
	 * Constructor for WordHelperUtility
	 * @param {WordHelperUtility} _wordHelperUtility A utility class for word helper.
	 */
	constructor(private _wordHelperUtility: WordHelperUtility) {
		this._validWords = this._wordHelperUtility.getWords();
	}

	/**
	 * Handler function for when one of the letters changed.
	 */
	private _letterChangedHandler() {
		this._wordHelperUtility.setFirstLetter(this._firstLetter);
		this._wordHelperUtility.setSecondLetter(this._secondLetter);
		this._wordHelperUtility.setThirdLetter(this._thirdLetter);
		this._wordHelperUtility.setFourthLetter(this._fourthLetter);
		this._wordHelperUtility.setFifthLetter(this._fifthLetter);
		this._wordHelperUtility.setContainsLetters(this._containsLetters);
		this._wordHelperUtility.setExcludeLetters(this._excludeLetters);
		this._validWords = this._wordHelperUtility.getWords();
	}
}

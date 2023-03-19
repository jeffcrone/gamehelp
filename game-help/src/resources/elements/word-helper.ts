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
	 * Letters that are known not to be the first letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _excludeFirstLetter: string;

	/**
	 * Letters that are known not to be the second letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _excludeSecondLetter: string;

	/**
	 * Letters that are known not to be the third letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _excludeThirdLetter: string;

	/**
	 * Letters that are known not to be the fourth letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _excludeFourthLetter: string;

	/**
	 * Letters that are known not to be the fifth letter of the word.
	 * @type {string}
	 */
	@observable({ changeHandler: '_letterChangedHandler' })
	private _excludeFifthLetter: string;

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
		this._wordHelperUtility.setExcludeFirstLetter(this._excludeFirstLetter);
		this._wordHelperUtility.setExcludeSecondLetter(this._excludeSecondLetter);
		this._wordHelperUtility.setExcludeThirdLetter(this._excludeThirdLetter);
		this._wordHelperUtility.setExcludeFourthLetter(this._excludeFourthLetter);
		this._wordHelperUtility.setExcludeFifthLetter(this._excludeFifthLetter);
		this._wordHelperUtility.setContainsLetters(this._containsLetters);
		this._wordHelperUtility.setExcludeLetters(this._excludeLetters);
		this._validWords = this._wordHelperUtility.getWords();
		console.log("this._excludeFirstLetter = ", this._excludeFirstLetter);
		console.log("this._excludeSecondLetter = ", this._excludeSecondLetter);
		console.log("this._excludeThirdLetter = ", this._excludeThirdLetter);
		console.log("this._excludeFourthLetter = ", this._excludeFourthLetter);
		console.log("this._excludeFifthLetter = ", this._excludeFifthLetter);
	}
}

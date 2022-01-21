import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';
import {WordHelperUtility} from 'resources/utilities/word-helper-utility';

describe('Word Helper Utility Component', () => {
	let _wordHelperUtility: WordHelperUtility;

	beforeEach(() => {
		_wordHelperUtility = new WordHelperUtility();
	});

	it('should find a word if you set all the letters', done => {
		_wordHelperUtility.setFirstLetter("a");
		_wordHelperUtility.setSecondLetter("d");
		_wordHelperUtility.setThirdLetter("m");
		_wordHelperUtility.setFourthLetter("i");
		_wordHelperUtility.setFifthLetter("t");
		expect(_wordHelperUtility.getWords()).toEqual(["admit"]);
		done();
	});

	it('should not find a word if you search for an invalid word', done => {
		_wordHelperUtility.setFirstLetter("a");
		_wordHelperUtility.setSecondLetter("a");
		_wordHelperUtility.setThirdLetter("a");
		_wordHelperUtility.setFourthLetter("a");
		_wordHelperUtility.setFifthLetter("a");
		expect(_wordHelperUtility.getWords()).toEqual([]);
		done();
	});

	describe('isEmptyString', () => {
		it('should return true for an empty string', done => {
			expect(_wordHelperUtility.isEmptyString("")).toEqual(true);
			done();
		});

		it('should return false for null', done => {
			expect(_wordHelperUtility.isEmptyString(null)).toEqual(false);
			done();
		});

		it('should return false for undefined', done => {
			expect(_wordHelperUtility.isEmptyString(undefined)).toEqual(false);
			done();
		});

		it('should return false for a non-empty string', done => {
			expect(_wordHelperUtility.isEmptyString("abc")).toEqual(false);
			done();
		});
	});
});

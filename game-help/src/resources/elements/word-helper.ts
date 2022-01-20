import {bindable, autoinject} from 'aurelia-framework';
import {WordHelperUtility} from 'resources/utilities/word-helper-utility';

@autoinject
export class WordHelper {
	constructor(private wordHelperUtility: WordHelperUtility) {
		//
	}
}

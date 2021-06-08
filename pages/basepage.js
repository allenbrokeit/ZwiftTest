import { Selector, t } from 'testcafe';
import { assertTargetURL } from '../utilities/helper';

export default class BasePage {
    constructor() {}

    async assertURL() {
        await assertTargetURL(this.url);
    }

}
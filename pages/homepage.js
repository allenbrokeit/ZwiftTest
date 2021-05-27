import { Selector, t } from 'testcafe';
import { assertTargetURL, assertTargetPageTitle } from '../utilities/helper';


export default class HomePage {
    constructor() {
        this.acceptCookiesButton = Selector('#truste-consent-button');
        this.learnMoreButton = Selector('button').withAttribute('data-testid', 'button-primary-white');
        this.pageTitle = Selector("title");
        this.pageTitleText = "The at Home Cycling & Running Virtual Training App - Zwift";
        this.url = "https://www.zwift.com/";
    }

    async clickAcceptCookiesButton() {
        await t.click(this.acceptCookiesButton);
    }

    async assertURL() {
        await assertTargetURL(this.url);
    }

    async assertPageTitle() {
        await assertTargetPageTitle(this.pageTitle, this.pageTitleText);
    }

    async assertLearnMoreButtonIsPresent() {
        await t.expect(this.learnMoreButton.exists).ok();
    }
}
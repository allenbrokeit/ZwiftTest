import { Selector } from 'testcafe';

export default class HomePage {
    constructor() {
        this.acceptCookiesButton = Selector('#truste-consent-button');
        this.learnMoreButton = Selector('button').withAttribute('data-testid', 'button-primary-white');
        this.pageTitle = Selector("title");
        this.pageTitleText = "The at Home Cycling & Running Virtual Training App - Zwift";
        this.url = "https://www.zwift.com/";
    }
}
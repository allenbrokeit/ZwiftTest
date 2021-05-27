import { Selector, t } from 'testcafe';


export default class Navigation {
    constructor() {
        this.eventsLink = Selector('span').withText('Events');
        this.leftNav = Selector('ul').withAttribute('data-testid', 'primary-nav-left');
        this.sideNavButton = Selector('button').withAttribute('aria-controls', 'side-nav');
    }

    async assertLeftNavIsPresent() {
        await t.expect(this.leftNav.exists).ok()
    }

    async clickSideNavButton() {
        await t.click(this.sideNavButton);
    }

    async clickEventsLink() {
        await t.click(this.eventsLink);
    }
}
import { Selector } from 'testcafe';

export default class Navigation {
    constructor() {
        this.eventsLink = Selector('span').withText('Events');
        this.leftNav = Selector('ul').withAttribute('data-testid', 'primary-nav-left');
        this.sideNavButton = Selector('button').withAttribute('aria-controls', 'side-nav');
    }
}
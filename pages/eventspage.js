import { Selector, t } from 'testcafe';
import { assertTargetURL } from '../utilities/helper';


export default class EventsPage {
    constructor() {
        this.header = Selector('h1').withExactText('EVENTS');
        this.url = "https://www.zwift.com/events";
        this.filterEventsButton = Selector('button').withAttribute('class', 'filter-toggle');
        this.noResults = Selector('div').withExactText('No results.');
        this.sportLabelCycling = Selector('span').withExactText('CYCLING');
        this.sportLabelRunning = Selector('span').withExactText('RUNNING');
    }

    async assertURL() {
        await assertTargetURL(this.url);
    }

    async assertHeaderIsPresent() {
        await t.expect(this.header.exists).ok();
    }

    async clickFilterEventsButton() {
        await t.click(this.filterEventsButton);
    }

    async assertCyclingEventsDisplayed() {
        await this.assertEventDisplayed(this.sportLabelCycling);
    }

    async assertRunningEventsDisplayed() {
        await this.assertEventDisplayed(this.sportLabelRunning);
    }

    async assertEventDisplayed(label) {
        await t.expect(this.noResults.exists ? true : label.exists).ok();
    }

    async assertCyclingEventsNotDisplayed() {
        await this.assertEventNotDisplayed(this.sportLabelCycling);
    }

    async assertRunningEventsNotDisplayed() {
        await this.assertEventNotDisplayed(this.sportLabelRunning)
    }

    async assertEventNotDisplayed(label) {
        await t.expect(label.exists).notOk();
    }
}
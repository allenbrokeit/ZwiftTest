import { Selector, t } from 'testcafe';


export default class EventsFilterPage {
    constructor() {
        this.applyFiltersButton = Selector('span').withText('APPLY FILTERS');
        this.cyclingButton = Selector('button').withText('Cycling');
        this.title = Selector('p').withExactText('FILTER EVENTS');
        this.intensitiesFirstOption = Selector('button').withExactText('A');
        this.runningButton = Selector('button').withText('Running');
        this.startTimesSecondOption = Selector('button').withExactText('Afternoon');
    }

    async assertTitle() {
        await t.expect(this.title.exists).ok();
    }

    async clickCyclingButton() {
        await t.click(this.cyclingButton);
    }

    async clickApplyFiltersButton() {
        await t.click(this.applyFiltersButton);
    }

    async clickRunningButton() {
        await t.click(this.runningButton);
    }

    async clickIntensitiesFirstOption() {
        await t.click(this.intensitiesFirstOption);
    }

    async clickStartTimesSecondOption() {
        await t.click(this.startTimesSecondOption);
    }
}
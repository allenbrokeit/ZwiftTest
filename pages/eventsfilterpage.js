import { Selector } from 'testcafe';

export default class EventsFilterPage {
    constructor() {
        this.applyFiltersButton = Selector('span').withText('APPLY FILTERS');
        this.cyclingButton = Selector('button').withText('Cycling');
        this.title = Selector('p').withExactText('FILTER EVENTS');
        this.intensitiesFirstOption = Selector('button').withExactText('A');
        this.runningButton = Selector('button').withText('Running');
        this.startTimesSecondOption = Selector('button').withExactText('Afternoon');
    }
}
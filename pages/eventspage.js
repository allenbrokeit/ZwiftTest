import { Selector } from 'testcafe';

export default class EventsPage {
    constructor() {
        this.header = Selector('h1').withExactText('EVENTS');
        this.url = "https://www.zwift.com/events";
        this.filterEventsButton = Selector('button').withAttribute('class', 'filter-toggle');
        this.noResults = Selector('div').withExactText('No results.');
        this.sportLabelCycling = Selector('span').withExactText('CYCLING');
        this.sportLabelRunning = Selector('span').withExactText('RUNNING');
    }
}
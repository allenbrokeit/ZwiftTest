import { Selector, ClientFunction } from 'testcafe';

//region Home Page
const acceptCookiesButton = Selector('#truste-consent-button');
const getLocation = ClientFunction(() => document.location.href);
const homePageTitle = Selector("title");
const homePageTitleText = "The at Home Cycling & Running Virtual Training App - Zwift";
const homeURL = "https://www.zwift.com/";
//endregion

//region Top Nav
const learnMoreButton = Selector('button').withAttribute('data-testid', 'button-primary-white');
const leftNav = Selector('ul').withAttribute('data-testid', 'primary-nav-left');
//endregion

//region Side Nav
const eventsLink = Selector('span').withText('Events');
const sideNavButton = Selector('button').withAttribute('aria-controls', 'side-nav');
//endregion

//region Events Page
const eventsHeader = Selector('h1').withExactText('EVENTS');
const eventsURL = "https://www.zwift.com/events";
const filterEventsButton = Selector('button').withAttribute('class', 'filter-toggle');
const sportLabelCycling = Selector('span').withExactText('CYCLING');
const sportLabelRunning = Selector('span').withExactText('RUNNING');
//endregion

//region Events Filter
const applyFiltersButton = Selector('span').withText('APPLY FILTERS');
const cyclingButton = Selector('button').withText('Cycling');
const filterScreenTitle = Selector('p').withExactText('FILTER EVENTS');
const intensitiesFirstOption = Selector('button').withExactText('A');
const noResults = Selector('div').withExactText('No results.');
const runningButton = Selector('button').withText('Running');
const startTimesSecondOption = Selector('button').withExactText('Afternoon');
//endregion

fixture `Zwift Demo`
.page `https://zwift.com`;

test('Home Page test', async t => {
    await t
    .click(acceptCookiesButton)
    .expect(getLocation()).contains(homeURL)
    .expect(homePageTitle.innerText).eql(homePageTitleText)
    .expect(leftNav.exists).ok()
    .expect(learnMoreButton.exists).ok();
});

test('Events Page test', async t=> {
    // Nav to and verify home page
    await t
    .click(acceptCookiesButton)
    .expect(getLocation()).contains(homeURL)

    // Nav to and verify events page
    .click(sideNavButton)
    .click(eventsLink)
    .expect(getLocation()).contains(eventsURL)
    .expect(eventsHeader.exists).ok()

    // Test filter for cycling results or no results
    .click(filterEventsButton)
    .expect(filterScreenTitle.exists).ok()
    .click(cyclingButton)
    .click(applyFiltersButton)
    .expect(noResults.exists ? true : sportLabelCycling.exists).ok()
    .expect(sportLabelRunning.exists).notOk()

    // Test filter running results or no results
    .click(filterEventsButton)
    .expect(filterScreenTitle.exists).ok()
    .click(runningButton)
    .click(intensitiesFirstOption)
    .click(startTimesSecondOption)
    .click(applyFiltersButton)
    .expect(noResults.exists ? true : sportLabelRunning.exists).ok()
    .expect(sportLabelCycling.exists).notOk();
});
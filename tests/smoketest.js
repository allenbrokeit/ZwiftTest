import { ClientFunction } from 'testcafe';
import HomePage from '../pages/homepage';
import EventsPage from '../pages/eventspage';
import EventsFilterPage from '../pages/eventsfilterpage';
import Navigation from '../pages/navigation';

//region Page Objects
const homePage = new HomePage();
const eventsPage = new EventsPage();
const eventsFilter = new EventsFilterPage();
const navElements = new Navigation();
//endregion

//region Helpers
const getLocation = ClientFunction(() => document.location.href);
//endregion

fixture `Zwift Demo`
.page `https://zwift.com`;

test('Home Page test', async t => {
    await t
    .click(homePage.acceptCookiesButton)
    .expect(getLocation()).contains(homePage.url)
    .expect(homePage.pageTitle.innerText).eql(homePage.pageTitleText)
    .expect(navElements.leftNav.exists).ok()
    .expect(homePage.learnMoreButton.exists).ok();
});

test('Events Page test', async t=> {
    // Nav to and verify home page
    await t
    .click(homePage.acceptCookiesButton)
    .expect(getLocation()).contains(homePage.url)

    // Nav to and verify events page
    .click(navElements.sideNavButton)
    .click(navElements.eventsLink)
    .expect(getLocation()).contains(eventsPage.url)
    .expect(eventsPage.header.exists).ok()

    // Test filter for cycling results or no results
    .click(eventsPage.filterEventsButton)
    .expect(eventsFilter.title.exists).ok()
    .click(eventsFilter.cyclingButton)
    .click(eventsFilter.applyFiltersButton)
    .expect(eventsPage.noResults.exists ? true : eventsPage.sportLabelCycling.exists).ok()
    .expect(eventsPage.sportLabelRunning.exists).notOk()

    // Test filter running results or no results
    .click(eventsPage.filterEventsButton)
    .expect(eventsFilter.title.exists).ok()
    .click(eventsFilter.runningButton)
    .click(eventsFilter.intensitiesFirstOption)
    .click(eventsFilter.startTimesSecondOption)
    .click(eventsFilter.applyFiltersButton)
    .expect(eventsPage.noResults.exists ? true : sportLabelRunning.exists).ok()
    .expect(eventsPage.sportLabelCycling.exists).notOk();
});
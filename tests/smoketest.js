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


fixture `Zwift Demo`
.page `https://zwift.com`
.beforeEach(async t => {
    // Handle Site Cookie Prompt & Validate URL
    await homePage.clickAcceptCookiesButton();
    await homePage.assertURL();
});

test('Home Page Test', async t => {
    await homePage.assertPageTitle();
    await navElements.assertLeftNavIsPresent();
    await homePage.assertLearnMoreButtonIsPresent();
});

test('Events Page Test', async t=> {
    // Nav to and verify events page
    await navElements.clickSideNavButton();
    await navElements.clickEventsLink();
    await eventsPage.assertURL();
    await eventsPage.assertHeaderIsPresent();

    // Test filter for cycling results or no results
    await eventsPage.clickFilterEventsButton();
    await eventsFilter.assertTitle();
    await eventsFilter.clickCyclingButton();
    await eventsFilter.clickApplyFiltersButton();
    await eventsPage.assertCyclingEventsDisplayed();
    await eventsPage.assertRunningEventsNotDisplayed();

    // Test filter for running results or no results
    await eventsPage.clickFilterEventsButton();
    await eventsFilter.assertTitle();
    await eventsFilter.clickRunningButton();
    await eventsFilter.clickIntensitiesFirstOption();
    await eventsFilter.clickStartTimesSecondOption();
    await eventsFilter.clickApplyFiltersButton();
    await eventsPage.assertRunningEventsDisplayed();
    await eventsPage.assertCyclingEventsNotDisplayed();
});
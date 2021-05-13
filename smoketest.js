import { Selector, ClientFunction } from 'testcafe';

const acceptCookiesButton = Selector('#truste-consent-button');
const getLocation = ClientFunction(() => document.location.href);
const homePageTitle = "The at Home Cycling & Running Virtual Training App - Zwift";
// const hamburgerIcon =  Selector("div[aria-label='Open side navigation']");
const leftNav = Selector('ul').withAttribute('data-testid', 'primary-nav-left');
const learnMoreButton = Selector('button').withAttribute('data-testid', 'button-primary-white')

fixture `Zwift Demo`
.page `https://zwift.com`;

test('Home Page test', async t => {
    await t
    .click(acceptCookiesButton)
    .expect(getLocation()).contains('https://www.zwift.com/')
    .expect(Selector("title").innerText).eql(homePageTitle)
    .expect(leftNav.exists).ok()
    .expect(learnMoreButton.exists).ok();
});
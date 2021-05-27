import { t, ClientFunction } from 'testcafe';


export async function assertTargetURL(url) {
    await t.expect(ClientFunction(() => document.location.href)()).contains(url);
}

export async function assertTargetPageTitle(actualTitle, expectedTitle) {
    await t.expect(actualTitle.innerText).eql(expectedTitle)
}


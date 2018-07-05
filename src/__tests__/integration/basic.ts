import { Selector } from 'testcafe';

const tenantId = 'c5a50df2-f24b-4342-9fbd-1c91747ac0cf';
const flowId = '3f95386d-ee6c-447a-b863-a210fe4a4c22';
const player = 'custom-component';

fixture(`Basic Component`).page(`https://flow.manywho.com/${tenantId}/play/${player}/?flow-id=${flowId}`);

test('Renders', async (t) => {
    await t
        .expect(Selector('div.custom-basic').innerText).eql('Basic Custom Component');
});

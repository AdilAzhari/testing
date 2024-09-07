import { Selector } from 'testcafe';

fixture `Check if the HeroSection component exists`
    .page`http://localhost:5173`
    .requestHooks()
    .timeouts({
        pageRequestTimeout: 10000
    });

test('Check if the component exists', async t => {
    const component = Selector('.hero-section'); 
    
    await t
        .expect(component.exists).ok()
});
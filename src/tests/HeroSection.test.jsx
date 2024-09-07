import { Selector } from 'testcafe';

fixture `Check if the HeroSection component exists`
    .page`http://128.0.0.0:5173`

test('Check if the component exists', async t => {
    const component = Selector('.hero-section'); 
    
    await t
        .expect(component.exists).ok()
});

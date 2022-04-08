import { newE2EPage } from '@stencil/core/testing';

describe('first-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<first-button></first-button>');

    const element = await page.find('first-button');
    expect(element).toHaveClass('hydrated');
  });
});

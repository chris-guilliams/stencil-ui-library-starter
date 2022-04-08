import { newSpecPage } from '@stencil/core/testing';
import { FirstButton } from '../first-button';

describe('first-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FirstButton],
      html: `<first-button></first-button>`,
    });
    expect(page.root).toEqualHtml(`
      <first-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </first-button>
    `);
  });
});

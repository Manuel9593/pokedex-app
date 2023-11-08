import { render } from '@testing-library/react';

import PokedexNavbar from './PokedexNavbar';

describe('PokedexNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokedexNavbar />);
    expect(baseElement).toBeTruthy();
  });
});

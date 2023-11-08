import { render } from '@testing-library/react';

import PokeStore from './PokeStore';

describe('PokeStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokeStore />);
    expect(baseElement).toBeTruthy();
  });
});

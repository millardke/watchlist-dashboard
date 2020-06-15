import React from 'react';

import { MockProvider, MockStore } from '../../../testHelpers';
import WatchlistDescription from '../WatchlistDescription';

describe('WatchlistDescription Component', () => {
  it('should render WatchlistDescription', () => {
    const component = MockProvider(<WatchlistDescription />, MockStore);
    expect(component).toMatchSnapshot();
  });
});

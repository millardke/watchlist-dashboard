import React from 'react';

import { MockProvider, MockStore } from '../../../testHelpers';
import App from '../App';

describe('App Component', () => {
  it('should render App', () => {
    const component = MockProvider(<App />, MockStore);
    expect(component).toMatchSnapshot();
  });
});

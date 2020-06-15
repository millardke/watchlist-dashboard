import React from 'react';

import { MockProvider, MockStore } from '../../../testHelpers';
import TopHeader from '../TopHeader';

describe('TopHeader Component', () => {
  it('should render TopHeader', () => {
    const component = MockProvider(<TopHeader />, MockStore);
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import MarketList from '../MarketList';

describe('MarketList Component', () => {
  it('should render MarketList', () => {
    const props = {
      code: 'ABC',
      market: {
        close: 2,
        high: 3,
        low: 1,
        open: 1,
      },
    };

    const component = mount(
      <MarketList code={props.code} market={props.market} />
    );

    expect(component).toMatchSnapshot();
  });
});

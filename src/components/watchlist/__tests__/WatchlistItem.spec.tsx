import React from 'react';
import { mount } from 'enzyme';

import WatchlistItem from '../WatchlistItem';

describe('WatchlistItem Component', () => {
  it('should render WatchlistItem', () => {
    const props = {
      item: {
        code: 'ABC',
        market: {
          close: 2,
          high: 3,
          low: 1,
          open: 1,
        },
      },
      toggleSelection: code => {},
    };

    const component = mount(
      <WatchlistItem
        item={props.item}
        toggleSelection={props.toggleSelection}
      />
    );

    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

export const MockProvider = (children: any, providedStore: any) => {
  const middlewares: any = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore(providedStore);
  const wrapper = mount(<Provider store={store}>{children}</Provider>);

  return wrapper;
};

export const MockStore = () => {
  return {
    watchlist: {
      details: {},
      list: [],
      selected: undefined,
      error: undefined,
    },
  };
};

import { SymbolInterface } from '../model/SymbolModel';

//
// -- Actions Types --
export const FETCH_WATCHLIST = 'FETCH_WATCHLIST';
export const SELECT_WATCHLIST_ITEM = 'SELECT_WATCHLIST_ITEM';
export const DESELECT_WATCHLIST_ITEM = 'DESELECT_WATCHLIST_ITEM';
export const ADD_WATCHLIST_ITEM = 'ADD_WATCHLIST_ITEM';
export const REMOVE_WATCHLIST_ITEM = 'REMOVE_WATCHLIST_ITEM';
export const REFRESH_WATCHLIST = 'REFRESH_WATCHLIST';
export const ITEM_ALREADY_FOUND = 'ITEM_ALREADY_FOUND';

//
// -- Helper Functions --
export const randomizeMarketValues = () => {
  return {
    open: Math.floor(Math.random() * 100),
    close: Math.floor(Math.random() * 100),
    high: Math.floor(Math.random() * 100),
    low: Math.floor(Math.random() * 100),
  };
};

//
// -- Action Creators --

export function fetchWatchlist() {
  return {
    type: FETCH_WATCHLIST,
    payload: [
      {
        code: 'SPY',
        market: randomizeMarketValues(),
      },
      {
        code: 'DJI',
        market: randomizeMarketValues(),
      },
      {
        code: 'RUS',
        market: randomizeMarketValues(),
      },
      {
        code: 'NDX',
        market: randomizeMarketValues(),
      },
      {
        code: 'TSLA',
        market: randomizeMarketValues(),
      },
    ],
  };
}

export function selectWatchistItem(code: string) {
  const payload = {
    selected: code,
    details: {
      name: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  };
  return { type: SELECT_WATCHLIST_ITEM, payload };
}

export function deselectWatchlistItem() {
  return { type: DESELECT_WATCHLIST_ITEM };
}

export function addWatchlistItem(code: string) {
  return (dispatch: any, getState: any) => {
    const { list } = getState().watchlist;

    const foundItem = list.find((item: any) => item.code === code);

    if (foundItem) {
      dispatch({ type: ITEM_ALREADY_FOUND });
    } else {
      const payload: SymbolInterface = {
        code,
        market: randomizeMarketValues(),
      };

      dispatch({ type: ADD_WATCHLIST_ITEM, payload });
    }
  };
}

export function removeWatchlistItem(code: string) {
  return { type: REMOVE_WATCHLIST_ITEM, payload: code };
}

export function refreshWatchlist(current: SymbolInterface[]) {
  const payload = current.map((item: SymbolInterface) => {
    return { ...item, market: randomizeMarketValues() };
  });

  return { type: REFRESH_WATCHLIST, payload };
}

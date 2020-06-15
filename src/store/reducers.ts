import { combineReducers } from 'redux';
import {
  ADD_WATCHLIST_ITEM,
  DESELECT_WATCHLIST_ITEM,
  FETCH_WATCHLIST,
  REMOVE_WATCHLIST_ITEM,
  SELECT_WATCHLIST_ITEM,
  REFRESH_WATCHLIST,
  ITEM_ALREADY_FOUND,
} from './actions';
import { SymbolInterface } from '../model/SymbolModel';

//
// -- Interface --
export interface ActionInterface {
  type: string;
  payload?: any;
}

//
// -- Reducer --
const watchlistReducer = (
  state: any = { list: [] },
  action: ActionInterface
) => {
  switch (action.type) {
    case FETCH_WATCHLIST:
      return { ...state, list: action.payload, error: undefined };
    case ADD_WATCHLIST_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
        error: undefined,
        selected: undefined,
      };
    case REMOVE_WATCHLIST_ITEM:
      return {
        ...state,
        list: state.list.filter(
          (item: SymbolInterface) => item.code !== action.payload
        ),
        error: undefined,
      };
    case SELECT_WATCHLIST_ITEM:
      return {
        ...state,
        selected: action.payload.selected,
        details: action.payload.details,
      };
    case DESELECT_WATCHLIST_ITEM:
      return { ...state, selected: undefined };
    case REFRESH_WATCHLIST:
      return {
        ...state,
        selected: undefined,
        list: action.payload,
        error: undefined,
      };
    case ITEM_ALREADY_FOUND:
      return { ...state, error: 'Item was already added' };
    default:
      return state;
  }
};

export default combineReducers({
  watchlist: watchlistReducer,
});

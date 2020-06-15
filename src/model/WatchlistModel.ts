import { SymbolInterface, SymbolDetailInterface } from './SymbolModel';

export interface WatchlistInterface {
  details: SymbolDetailInterface;
  list: SymbolInterface[];
  selected: string;
  error?: string;
}

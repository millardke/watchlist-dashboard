export interface SymbolInterface {
  code: string;
  market: MarketInterface;
}

export interface MarketInterface {
  close: number;
  high: number;
  low: number;
  open: number;
}

export interface SymbolDetailInterface {
  name: string;
  description: string;
}

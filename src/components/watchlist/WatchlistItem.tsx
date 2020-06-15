import React from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

import MarketList from '../market/MarketList';

import { SymbolInterface } from '../../model/SymbolModel';

//
// -- Interface --
interface WatchlistItemProps {
  item: SymbolInterface;
  toggleSelection: (code: string) => void;
}

//
// -- Styled Components --

const StyledButton = styled(Button)`
  width: 100%;
  padding: 20px;
`;

//
// -- Watchlist Item Component --

const WatchlistItem: React.FunctionComponent<WatchlistItemProps> = (
  props: WatchlistItemProps
) => {
  return (
    <StyledButton onClick={() => props.toggleSelection(props.item.code)}>
      <span>{props.item.code}</span>
      <MarketList code={props.item.code} market={props.item.market} />
    </StyledButton>
  );
};

export default WatchlistItem;

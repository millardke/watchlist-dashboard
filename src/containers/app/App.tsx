import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Divider, Typography } from '@material-ui/core';

import {
  deselectWatchlistItem,
  fetchWatchlist,
  selectWatchistItem,
  removeWatchlistItem,
} from '../../store/actions';
import { SymbolInterface } from '../../model/SymbolModel';
import { RootStateInterface } from '../../model/RootStateModel';

import TopHeader from '../../components/header/TopHeader';
import WatchlistDescription from '../../components/watchlist/WatchlistDescription';
import WatchlistItem from '../../components/watchlist/WatchlistItem';

//
// -- Styled Components --
const StyledContainer = styled(Container)`
  padding: 0;

  &.selected {
    background-color: #e4e6f6;
  }
`;

//
// -- App Component --

const App: React.FunctionComponent = () => {
  const watchlist: SymbolInterface[] = useSelector(
    (state: RootStateInterface) => state.watchlist.list,
    shallowEqual
  );

  const selectedWatchlistItem: string = useSelector(
    (state: RootStateInterface) => state.watchlist.selected
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchlist());
  }, [dispatch]);

  const toggleSelection = (code: string) => {
    if (code === selectedWatchlistItem) {
      dispatch(deselectWatchlistItem());
    } else {
      dispatch(selectWatchistItem(code));
    }
  };

  const removeItem = () => {
    dispatch(removeWatchlistItem(selectedWatchlistItem));
  };

  return (
    <Typography component={'span'}>
      <TopHeader />
      {watchlist.map((item: SymbolInterface) => (
        <StyledContainer
          key={item.code}
          className={selectedWatchlistItem === item.code ? 'selected' : ''}
        >
          <WatchlistItem item={item} toggleSelection={toggleSelection} />
          {selectedWatchlistItem === item.code ? (
            <WatchlistDescription code={item.code} handleClick={removeItem} />
          ) : (
            ''
          )}
          <Divider />
        </StyledContainer>
      ))}
    </Typography>
  );
};

export default App;

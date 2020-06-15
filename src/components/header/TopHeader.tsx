import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { addWatchlistItem, refreshWatchlist } from '../../store/actions';

import { SymbolInterface } from '../../model/SymbolModel';
import { RootStateInterface } from '../../model/RootStateModel';

//
// -- Styled Components

const StyledAppBar = styled(AppBar)`
  margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #80c883;
  }
`;

const StyledSnackbar = styled(Snackbar)`
  &.error .MuiSnackbarContent-root {
    background-color: #d41555;
  }

  .MuiSnackbarContent-root {
    background-color: #4caf50;
    font-weight: 500;
  }
`;

const StyledTextField = styled.input`
  background: transparent;
  border: none;
  color: white;
  margin-left: 20px;
  width: 75px;

  &::placeholder {
    color: white;
  }
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  text-transform: uppercase;
`;

const StyledIconButton = styled(IconButton)`
  width: 25px;
  margin-right: 20px;
`;

//
// -- TopHeader Component --

const TopHeader: React.FunctionComponent = () => {
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const currentData: SymbolInterface[] = useSelector(
    (state: RootStateInterface) => state.watchlist.list,
    shallowEqual
  );

  const errorAdding: string | undefined = useSelector(
    (state: RootStateInterface) => state.watchlist.error
  );

  const dispatch = useDispatch();

  const addToWatchlist = async () => {
    if (code !== '') {
      await dispatch(addWatchlistItem(code.toUpperCase()));
      setMessage(`${code.toUpperCase()} has been added to your watchlist!`);
      setOpen(true);
      setCode('');
    }
  };

  const handleChange = () => (event: any) => {
    setCode(event.target.value);
  };

  const handleRefresh = () => {
    dispatch(refreshWatchlist(currentData));
    setMessage('Data has been refreshed!');
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">Watchlist Dashboard</StyledTypography>
        <StyledTextField
          type="text"
          id="add-symbol-text"
          placeholder="Add Symbol"
          value={code}
          onChange={handleChange()}
          maxLength={5}
        />
        <StyledIconButton
          color="inherit"
          aria-label="add"
          onClick={addToWatchlist}
        >
          <Icon>add_circle</Icon>
        </StyledIconButton>
        <StyledButton variant="contained" onClick={() => handleRefresh()}>
          Refresh Data
        </StyledButton>
      </Toolbar>
      <StyledSnackbar
        className={errorAdding ? 'error' : ''}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message={errorAdding || message}
      />
    </StyledAppBar>
  );
};

export default TopHeader;

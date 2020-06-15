import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { RootStateInterface } from '../../model/RootStateModel';
import { SymbolDetailInterface } from '../../model/SymbolModel';

//
// -- Interface --

interface WatchlistDescriptionProps {
  code: string;
  handleClick: () => void;
}

//
// -- Styled Components --

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledContainer = styled(Container)`
  margin-bottom: 20px;
`;

const StyledSpan = styled.span`
  display: inline-block;
  margin-bottom: 10px;
`;

//
// -- WatchlistDescription Component --

const WatchlistDescription: React.FunctionComponent<WatchlistDescriptionProps> = (
  props: WatchlistDescriptionProps
) => {
  const details: SymbolDetailInterface = useSelector(
    (state: RootStateInterface) => state.watchlist.details,
    shallowEqual
  );

  return (
    <StyledContainer>
      <StyledSpan>Name: {details.name}</StyledSpan>
      <StyledSpan>Description: {details.description}</StyledSpan>
      <StyledButton
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => props.handleClick()}
      >
        Remove {props.code}
      </StyledButton>
    </StyledContainer>
  );
};

export default WatchlistDescription;

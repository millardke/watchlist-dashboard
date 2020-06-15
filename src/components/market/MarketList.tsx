import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { MarketInterface } from '../../model/SymbolModel';

//
// -- Interface --
interface MarketListInterface {
  code: string;
  market: MarketInterface;
}

//
// -- Styled Component
const StyledTextField = styled(TextField)`
  margin-left: 20px;
  max-width: 50px;
  text-align: center;
  width: 50px;

  input {
    cursor: pointer;
  }
`;

//
// -- TextField Component --
const MarketList: React.FunctionComponent<MarketListInterface> = (
  props: MarketListInterface
) => {
  return (
    <>
      <StyledTextField
        id={`${props.code}-open`}
        label="Open"
        defaultValue={props.market.open}
        InputProps={{ readOnly: true }}
        variant="outlined"
      />
      <StyledTextField
        id={`${props.code}-close`}
        label="Close"
        defaultValue={props.market.close}
        InputProps={{ readOnly: true }}
        variant="outlined"
      />
      <StyledTextField
        id={`${props.code}-low`}
        label="Low"
        defaultValue={props.market.low}
        InputProps={{ readOnly: true }}
        variant="outlined"
      />
      <StyledTextField
        id={`${props.code}-high`}
        label="High"
        defaultValue={props.market.high}
        InputProps={{ readOnly: true }}
        variant="outlined"
      />
    </>
  );
};

export default MarketList;

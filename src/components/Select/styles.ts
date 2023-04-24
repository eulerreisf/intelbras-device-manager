import styled from '@emotion/styled';
import { Select as Selection } from '@mui/material';
import { ISelect } from "../../types";

export const Select = styled( Selection ) <Pick<ISelect, 'pmargin'>>`
  margin: ${( { pmargin } ) => pmargin || '-6px 0 0'};
  border-radius: 0;
  height: 46px;
  border: #8B979F solid 1px;
  padding: 5px 20px;
  color: #3E5055;
  font-size: 15px;
  line-height: 40px;
  max-width: 100%;
  background: #fff;
  border-radius: 3px;
  .MuiSelect-select {
    font-size: 0.8em;
    padding-top: 21px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: white !important;
    border-width: 1px !important;
    legend {
      height: unset;
      visibility: unset;
      max-width: unset;
      span {
        opacity: 1;
      }
    }
  }
`;


export const SelectContainer = styled.div`
display: flex;
align-items: center;
`;

export const LabelContainer = styled.div`
display: flex;
width: 150px;
`;


export const InputItemConteiner = styled.div`
width: 300px;
`;

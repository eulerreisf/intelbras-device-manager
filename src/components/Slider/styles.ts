import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { IInput } from '../../types';

export const Input = styled( TextField ) <Pick<IInput, 'space'>>`
  margin: ${( { space } ) => space || '0'};

  .MuiInputBase-root {
    border: #8B979F solid 1px;
    padding: 5px 20px;
    color: #3E5055;
    font-size: 15px;
    line-height: 40px;
    max-width: 100%;
    background: #fff;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 3px;
	  font-weight: 600;

    &.Mui-error {
      color: red;
    }
  }
  .MuiFormLabel-root {
    color: green;

    &.Mui-error {
      color: red;
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: white !important;
    border-width: 1px !important;
  }
`;

export const InputContainer = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`;

export const LabelContainer = styled.div`
display: flex;
width: 150px;
`;

export const InputItemConteiner = styled.div`
width: 300px;
`;
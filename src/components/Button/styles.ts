import styled from '@emotion/styled';
import { Button } from '@mui/material';

export interface IButton {
  rounded: boolean;
  background?: string | undefined;
}

export const StyledButton = styled( Button ) <IButton>`
  pointer-events: ${( props ) => ( props.disabled ? 'none' : null )};
  text-transform: none;
  height: auto;
  padding: 10px 19px !important;
  border-radius: ${( props ) => ( props.rounded ? '5px' : '0' )};
  font-size: 0.875em;
  font-family: inherit;
  font-weight: 500;
  transition: all ease 0.2s;
  min-width: unset !important;
  cursor: ${( props ) => ( props.disabled ? 'not-allowed' : 'pointer' )};
  ${( props ) => {
    switch ( props.color ) {
      case 'primary':
        return `
          background: ${props.disabled ? '#6E5E0014' : '#00a335'};
          color:  ${props.disabled ? '#A0AEC0' : 'blue'}!important;
          min-width: 123px;
          &:hover{
            background: ${'#00863F'};
            opacity: .8;
          }
        `;
      case 'secondary':
        return `
          background: ${props.disabled ? '#efefef' : '#fff'};
          color: ${'#93000A'};
          min-width: 86px;
          border #8b979f;
          &:hover{
            background: ${'#Ebeeee'};
            opacity: .8;
          }
        `;
      case 'info':
        return `
          background: none;
          color: ${'#93000A'};
          min-width: 123px;        
        `;
      case 'error':
        return `
          background: ${'#93000A'};
          color: ${'#93000A'};
          min-width: 123px;    
          &:hover{
            background: #93000A;
            opacity: .8;
          }
        `;
    }
  }};
`;

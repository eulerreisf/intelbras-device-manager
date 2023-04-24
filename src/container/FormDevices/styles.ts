import styled from '@emotion/styled';

import { Drawer, Typography } from '@mui/material';

export const StyledDrawer = styled( Drawer )`
  .MuiDrawer-root,
  .MuiDrawer-paper {
    width: 448px;
    transition: width 0.5s;
  }
`;

export const StyledTypography = styled( Typography )``;

export const StyledHeader = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledContent = styled.div`
  margin-left: 50px;
  align-items: center;
`;

export const StyledInputsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  margin-right: 10px;
`;
export const StyledButtonConteiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 150px;
  margin-top: 20px;
  width: 300px;
  justify-content: space-between;
`;

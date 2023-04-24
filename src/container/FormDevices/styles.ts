import styled from '@emotion/styled';

import { Drawer, Typography } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-root,
  .MuiDrawer-paper {
    width: 448px;
    transition: width 0.5s;
  }
`;

export const StyledTypography = styled(Typography)``;

export const StyledHeader = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledChildren = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 12px;
  margin-right: 12px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledInputsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  margin-right: 10px;
`;
export const StyledButton = styled.div`
  display: flex;
  margin-right: 12px;
  margin-top: 10px;
  align-items: center;
  justify-content: end;
`;

import styled from '@emotion/styled';

import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AccordionSummary,
} from '@mui/material';

type ListProps = {
  open: boolean;
};

export const StyledSummary = styled( AccordionSummary ) <ListProps>`
  .MuiTypography-root {
    display: ${( { open } ) => !open && 'none'};
  }
  #submenu {
    display: ${( { open } ) => !open && 'none'};
  }
`;

export const StyledListButton = styled( ListItemButton ) <ListProps>`
  height: 44px;
  justify-content: ${( { open } ) => ( open ? 'initial' : 'center' )};
  padding: ${( { open } ) => open && '0 15px'};
`;

export const StyledListIcon = styled( ListItemIcon ) <ListProps>`
  color: 'white';
  width: 0;
  margin-right: ${( { open } ) => ( open ? '3' : 'auto' )};
  justify-content: 'center';
`;

export const StyledListText = styled( ListItemText ) <ListProps>`
  color: 'white';
  display: ${( { open } ) => ( open ? 'block' : 'none' )};
`;

export const StyledDrawer = styled( Drawer )`
  color: 'white';

  .MuiSvgIcon-root {
    color: 'white';
  }

  .MuiTypography-root {
    font-size: 14px;
  }

  .MuiDrawer-root,
  .MuiDrawer-paper {
    top: 64px;
    width: ${( { open } ) => ( open ? '232px' : '56px' )};
    background: 'gray';
    transition: width 0.5s;

    .MuiListItemIcon-root {
      min-width: ${( { open } ) => !open && 'unset'};
    }
  }

  .MuiAccordion-root {
    background: transparent;
    margin: unset;
    border: none;
    box-shadow: none;
    position: unset;
  }
`;

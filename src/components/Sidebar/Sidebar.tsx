import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem } from "@mui/material";

import { Settings, Home } from "@mui/icons-material";

import {
  StyledDrawer,
  StyledListButton,
  StyledListIcon,
  StyledListText,
} from "./styles";

export type ListItemProps = {
  text: string;

  icon: React.ReactNode;
  page?: string;
  subMenus: Array<object>;
};

export interface SidebarProps {
  isOpen?: boolean;
}

export default function Sidebar({ isOpen = true }: SidebarProps) {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Pagina Inicial", icon: <Home />, page: "/" },
    { text: "Configurações", icon: <Settings />, page: "/config" },
  ];

  const handleRenderItem = (item: any) => renderItem(item);

  const renderItem = (item: any) => {
    const handleClick = () => {
      navigate(item.page);
    };

    return (
      <>
        <ListItem disablePadding>
          <StyledListButton open={isOpen} onClick={handleClick}>
            <StyledListIcon open={isOpen}>{item.icon}</StyledListIcon>
            <StyledListText open={isOpen}>{item.text}</StyledListText>
          </StyledListButton>
        </ListItem>
      </>
    );
  };

  return (
    <StyledDrawer variant="permanent" anchor="left" open>
      <List>{menuItems.map((item) => handleRenderItem(item))}</List>
    </StyledDrawer>
  );
}

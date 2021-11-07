import React from "react";
import { useStore } from "./../hooks";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { setTheme } from "../services";
import { pages, THEMES } from "../template.data";
import { NavLink } from "react-router-dom";

const Default = () => {
  const { isSidebarOpen, toggleSidebar, setIsThemeFetching,setIsSidebarOpen } = useStore();
  const currentTheme = localStorage.getItem("theme");

  const setThemeAsync = async (theme) => {
    setIsSidebarOpen(false)
    await setTheme(theme, setIsThemeFetching);
    
  };
  return (
    <ProSidebar
      toggled={isSidebarOpen}
      onToggle={toggleSidebar}
      breakPoint={"lg"}
    >
      <SidebarHeader className="bg-primary border-0">
        <Navbar>
          <NavbarBrand className="w-100 text-center text-light m-0">
            React-bootstrap template
          </NavbarBrand>
        </Navbar>
      </SidebarHeader>

      <Menu className="bg-dark p-0" iconShape="circle">
        <SubMenu title="Themes" icon={"T"}>
          {THEMES.map((theme) => (
            <MenuItem
              active={theme === currentTheme}
              className="text-capitalize"
              key={theme}
              onClick={() => setThemeAsync(theme)}
              children={theme}
            />
          ))}
        </SubMenu>

        <SubMenu title="Components" icon={"C"}>
          {pages.map((page) => {
            return (
              <MenuItem className="text-capitalize" key={page} onClick={toggleSidebar}>
                <NavLink to={`/${page}`}>{page}</NavLink>
              </MenuItem>
            );
          })}
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Default;

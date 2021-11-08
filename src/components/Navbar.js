import React, { useEffect, useState } from "react";
import { Container, FormControl, Navbar, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../hooks";
import { setTheme } from "../services";
import { themes, pages } from "./../template.data";
import styled from "styled-components";

const Default = () => {
  const { toggleSidebar } = useStore();
  const [value, setValue] = useState("");
  const [items, setItems] = useState({ pages: [], themes: [] });
  const [isShow, setIsshow] = useState(false);
  const { setIsThemeFetching } = useStore();
  const currentTheme = localStorage.getItem("theme");
  const { pathname } = useLocation();

  const setThemeAsync = async (theme) => {
    await setTheme(theme, setIsThemeFetching);
  };

  useEffect(() => {
    setItems(() => ({
      pages: pages.filter((page) =>
        value ? page.toLowerCase().includes(value.toLowerCase()) : false
      ),
      themes: themes.filter((theme) =>
        value ? theme.toLowerCase().includes(value.toLowerCase()) : false
      ),
    }));
  }, [value]);

  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <DropdownStyled show={isShow} onToggle={setIsshow} align="start">
          <Dropdown.Toggle
            variant="secondary"
            placeholder="Search..."
            as={FormControl}
            type="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClick={(e) => {
              e.stopPropagation();
              setIsshow(true);
            }}
          />
          <DropdownMenuStyled variant="dark">
            <Dropdown.Divider />

            {!!items.pages.length && (
              <Dropdown.Header>Components</Dropdown.Header>
            )}

            {items.pages.map((page) => (
              <Dropdown.Item
                className={"text-capitalize"}
                as={Link}
                key={page}
                to={`/${page}`}
                active={pathname === `/${page}`}
                children={page}
              />
            ))}

            {!!items.themes.length && <Dropdown.Header>Themes</Dropdown.Header>}

            {items.themes.map((theme) => {
              return (
                <Dropdown.Item
                  key={theme}
                  onClick={setThemeAsync.bind(null, theme)}
                  className={"text-capitalize"}
                  active={currentTheme === theme}
                  children={theme}
                />
              );
            })}

            {!!items.themes.length || !!items.pages.length || (
              <Dropdown.ItemText>No result yet </Dropdown.ItemText>
            )}
          </DropdownMenuStyled>
        </DropdownStyled>
        <Navbar.Toggle
          onClick={toggleSidebar}
          aria-controls="basic-navbar-nav"
        />
      </Container>
    </Navbar>
  );
};

export default Default;

const DropdownStyled = styled(Dropdown)`
  width: calc(100% - 70px);
  max-width: 600px;
`;

const DropdownMenuStyled = styled(Dropdown.Menu)`
  width: 100%;
  max-height: 400px;
  overflow: auto;
  padding: 1rem !important;

  top: calc(100% - 3px) !important;

  @media (max-width: 991.9px) {
    width: calc(100% + 70px);
  }
`;

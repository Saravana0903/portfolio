import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./index.css"

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='nav-con'>
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="me-auto">
           SARAVANA ADIRAJU
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href="/"> Home </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About"> About </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects">
                 Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">
                 Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
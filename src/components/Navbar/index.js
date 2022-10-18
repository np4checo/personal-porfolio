import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
        NavbarContainer, 
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLink,  
        NavBtn,
        NavBtnLink,
          
    } from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    dolla
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='about'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='projects'>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='services'>
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/github">
                        GitHub
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        <NavMenu>
            <NavLink to='about'>
                About
            </NavLink>
        </NavMenu>
    </>
  )
}

export default Navbar
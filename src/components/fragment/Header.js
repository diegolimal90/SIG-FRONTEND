import React, { Component } from "react";
import { Navbar, Icon, NavItem, Dropdown, Divider } from 'react-materialize';

class Header extends Component {

    render() {
        return (
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#">Logo</a>}
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="">
                    Getting started
  </NavItem>
                <NavItem href="components.html">
                    Components
  </NavItem>
                <Dropdown
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<a href="#!">Dropdown{' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    <a href="#">
                        one
    </a>
                    <a href="#">
                        two
    </a>
                    <Divider />
                    <a href="#">
                        three
    </a>
                </Dropdown>
            </Navbar>
        );
    }

}
export default Header;
import React, { Component } from "react";
import { Navbar, Icon, NavItem, Dropdown, Divider, SideNav, Button, SideNavItem } from 'react-materialize';
import logoNova from '../../assets/images/logo.png';


class Header extends Component {

    render() {
        return (
            <Navbar 
                className="grey"
                alignLinks="right"
                brand={<a className="brand-logo" href="#"><img className="logo-nova" src={logoNova}/></a>}
                menuIcon={<Icon>i</Icon>}
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
                <SideNav
                    options={{
                    closeOnClick: true,
                    edge: 'right'
                    }}
                    trigger={<a>Usuário <div className="img-perfil--usuario"></div></a>}
                >
                    <SideNavItem
                        user={{
                            background: 'https://placeimg.com/640/480/tech',
                            email: 'renan.scalanti@hotmail.com',
                            name: 'Renan Scalanti'
                        }}
                    userView
                    />
                    <SideNavItem>
                        Profissionais
                    </SideNavItem>
                    <SideNavItem href="#!second">
                        Equipes
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Cadastros
                    </SideNavItem>
                    <SideNavItem
                        href="#!third"
                        waves
                    >
                        Cadastro de profissional
                    </SideNavItem>
                    <SideNavItem>
                        Cadastro de viatura
                    </SideNavItem>
                </SideNav>                
            </Navbar>
        );
    }

}
export default Header;
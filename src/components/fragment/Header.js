import React, { Component } from "react";
import { Navbar, Icon, SideNav, SideNavItem } from 'react-materialize';
import logoNova from '../../assets/images/logo.png';


class Header extends Component {

    render() {
        return (
            <Navbar 
                className="light-blue darken-4"
                alignLinks="left"
                brand={<a className="brand-logo right" href="#/dashboard"><img className="logo-nova" src={logoNova} alt="Logo NOVA"/></a>}
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
                <SideNav
                    options={{
                    closeOnClick: true,
                    edge: 'left'
                    }}
                    trigger={<a className="user" href="/"><Icon>menu</Icon></a>}
                >
                    <SideNavItem
                        user={{
                            background: 'https://placeimg.com/640/480/tech',
                            email: 'admin_sigma@sigma.com',
                            name: 'Administrador'
                        }}
                    userView
                    />
                    <SideNavItem href="#/dashboard">
                        Profissionais
                    </SideNavItem>
                    <SideNavItem href="#/dashboard">
                        Usuário
                    </SideNavItem>
                    <SideNavItem href="#/dashboard">
                        Equipes
                    </SideNavItem>
                    <SideNavItem href="#/dashboard/viatura/cadastrar">
                        Viatura
                    </SideNavItem>
                    <SideNavItem href="#/dashboard/bases-e-unidades/cadastrar">
                        Unidades
                    </SideNavItem>
                    <SideNavItem href="#/dashboard/perfil-equipes/cadastrar">
                        Tipos de equipes
                    </SideNavItem>
                </SideNav>                
            </Navbar>
        );
    }

}
export default Header;
import React, { Component } from "react";
import { Navbar, Icon, SideNav, SideNavItem } from 'react-materialize';
import logoNova from '../../assets/images/logo.png';


class Header extends Component {

    render() {
        return (
            <Navbar 
                className="grey"
                alignLinks="right"
                brand={<a className="brand-logo" href="#/dashboard"><img className="logo-nova" src={logoNova} alt="Logo NOVA"/></a>}
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
                    trigger={<a className="user" href="/">Usuário <div className="img-perfil--usuario"></div></a>}
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
                    <SideNavItem>
                        Equipes
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                        Cadastros
                    </SideNavItem>
                    <SideNavItem href="#/dashboard/viatura/cadastrar">
                        Cadastro de viatura
                    </SideNavItem>
                    <SideNavItem href="#/dashboard/bases-e-unidades/cadastrar">
                        Cadastro de unidades
                    </SideNavItem>
                    <SideNavItem href="#/dashboard/perfil-equipes/cadastrar">
                        Cadastro de tipos de equipes
                    </SideNavItem>
                </SideNav>                
            </Navbar>
        );
    }

}
export default Header;
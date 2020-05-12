import React, { Component } from "react";
import Horario from './Horario';

class Footer extends Component {

    render() {
        return (
            <footer className="light-blue darken-4">
                <div className="row">
                    <Horario />
                </div>
            </footer>
        );
    }

}
export default Footer;
// Class Component

import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="no-margins right">
                <p id="copyrights">
                    <i>Projeto desenvolvido </i>no <b>Curso de Javascript + REACT </b>por <q>Igor Follador</q>
                </p>
            </footer>
        )
    }
}

export default Footer;
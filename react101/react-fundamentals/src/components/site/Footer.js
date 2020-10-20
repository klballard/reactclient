import React from "react";
import { Row } from "reactstrap";  //importing bootstrap in React form

const Footer = () => {
    return ( // displays Eleven Fifty 2020 with a copyright logo
        <footer>
            <Row>
                <p>&copy; Eleven Fifty 2020</p> 
            </Row>
        </footer>
    );
};

export default Footer;
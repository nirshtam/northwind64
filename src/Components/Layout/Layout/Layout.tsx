import { BrowserRouter } from "react-router-dom";
import { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import './Layout.css';

class Layout extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="layout-container">
                <Header />
                <Menu />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
  }
}

export default Layout;
import { Component } from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Home from "../../Home/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <Menu />
        <Main>
          {/* <Home /> */}
          <ContactUs />
        </Main>
        <Footer />
      </div>
    )
  }
}

export default Layout;
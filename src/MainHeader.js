import React from 'react'
import { Menu, Segment, Image, Button, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import LessonButton from './components/LessonButton'

import taliLogo from "../img/talilogo.png"

class MainHeader extends React.Component {

  state = { activeItem: "home" }

  handleMenuItemClick = (e, { name }) => {
    this.setState({ activeItem: name }, () => {
      if (this.state.activeItem === "home") {
        window.location.reload(false);
      }
    })
  };

  handleHeaderImgClick = (e) => {
    this.setState({ activeItem: "home"}, () => {
      window.location.reload(false);
    })
  }

  componentDidMount() {
    const len = document.location.href.split('/').length
    const activeItem = document.location.href.split('/')[len - 1]
    if (activeItem) {
      this.setState({activeItem})
    } else {
      this.setState({activeItem: "home"})
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Segment className="navbar" inverted>
        <Menu inverted pointing secondary>
          <div className="hide-header">
            <Link to="/">
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleMenuItemClick}
              />
            </Link>
            <Link to="/tutorials">
              <Menu.Item
                name="tutorials"
                active={activeItem === "tutorials"}
                onClick={this.handleMenuItemClick}
              />
            </Link>
            <Link to="/">
              <Image
                alt="Tali's Logo"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleHeaderImgClick}
                src={taliLogo}
                centered
              />
            </Link>
            <Link to="/about">
              <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={this.handleMenuItemClick}
              />
            </Link>
            <Link to="/contact">
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleMenuItemClick}
              />
            </Link>
            <Link to="#">
              <LessonButton />
            </Link>
          </div>
          <Link to="/">
            <Image
              className="header-burger"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleHeaderImgClick}
              src={taliLogo}
              centered
              alt="header burger"
            />
          </Link>
          <Dropdown alt="Header burger" className="header-burger" icon="bars">
            <DropdownMenu>
              <Link to="/">
                <DropdownItem text="Home" />
              </Link>
              <Link to="/tutorials">
                <DropdownItem text="Tutorials" />
              </Link>
              <Link to="/about">
                <DropdownItem text="About" />
              </Link>
              <Link to="/contact">
                <DropdownItem text="Contact" />
              </Link>
              <Link>
                <DropdownItem
                  className="timify-button"
                  data-account-id="5e82b61f2ce85164d0d5152b"
                  text="Book a Lesson"
                />
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Menu>
      </Segment>
    );
  }
};

export default MainHeader
import React from 'react'
import { Menu, Segment, Image, Button, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import taliLogo from "../img/talilogo.png"

class MainHeader extends React.Component {

  state = { activeItem: "home" }

  handleMenuItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };

  handleHeaderImgClick = (e) => {
    this.setState({ activeItem: "home"})
  }

  render() {
    const { activeItem } = this.state;

    console.log(activeItem)

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
            <Link to="/about">
              <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={this.handleMenuItemClick}
              />
            </Link>
            <Link to="/">
              <Image
                name="home"
                active={activeItem === "home"}
                onClick={this.handleHeaderImgClick}
                src={taliLogo}
                centered
              />
            </Link>
            <Link to="/contact">
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleMenuItemClick}
              />
            </Link>
            <Link to="/book-lesson">
              <Button 
                primary
                name="book-lesson"
                onClick={this.handleMenuItemClick}
               >
                  Book Now
               </Button>
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
            />
          </Link>
          <Dropdown className="header-burger" icon="bars">
            <DropdownMenu>
              <Link to="/">
                <DropdownItem text="Home" />
              </Link>
              <Link to="/about">
                <DropdownItem text="About" />
              </Link>
              <Link to="/contact">
                <DropdownItem text="Contact" />
              </Link>
              <Link to="/book-lesson">
                <DropdownItem text="Book a Lesson" />
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Menu>
      </Segment>
    );
  }
};

export default MainHeader
import React from 'react'
import { Menu, Segment, Image, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import taliLogo from "../img/talilogo.png"

class MainHeader extends React.Component {

  state = { activeItem: "home" }

  handleMenuItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment className="navbar" inverted>
        <Menu inverted pointing secondary>
          <Link to="/">
            <Menu.Item
              name="Home"
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
              <Image src={taliLogo} centered />
              {/* <Header>RECORDER LESSONS</Header> */}
          </Link>
          <Link to="/">
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleMenuItemClick}
            />
          </Link>
          <Link to="/book-lesson">
            <Button primary>
              Book Now
            </Button>
          </Link>
        </Menu>
      </Segment>
    );
  }
};

export default MainHeader
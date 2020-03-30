import React from 'react'
import { Segment, List, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Segment textAlign="center" id="footer" inverted>
      <List horizontal>
        <List.Item>
          <List.Content>
            <Link to="https://www.facebook.com/talirubinsteinrecorder/"><Icon circular name="facebook" size="big" /></Link>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Link to="https://twitter.com/TaliRubinstein"><Icon circular name="twitter" size="big" /></Link>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Link to="https://www.instagram.com/talirubinstein/"><Icon circular name="instagram" size="big" /></Link>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Link to="https://www.youtube.com/user/TaliRubin"><Icon circular name="youtube" size="big" /></Link>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Link to="https://www.talirubinstein.com"><Icon circular name="globe" size="big" /></Link>
          </List.Content>
        </List.Item>
      </List>
      <Header>Copyright © 2020 Tali Rubinstein</Header>
    </Segment>
  );
}

export default Footer
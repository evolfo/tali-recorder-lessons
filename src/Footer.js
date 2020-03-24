import React from 'react'
import { Segment, List, Icon, Header } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment textAlign="center" id="footer" inverted>
      <List horizontal>
        <List.Item>
          <List.Content>
            <Icon circular name="facebook" size="big" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Icon circular name="twitter" size="big" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Icon circular name="instagram" size="big" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Icon circular name="spotify" size="big" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Icon circular name="youtube" size="big" />
          </List.Content>
        </List.Item>
      </List>
      <Header>Copyright © 2020 Tali Rubinstein</Header>
    </Segment>
  );
}

export default Footer
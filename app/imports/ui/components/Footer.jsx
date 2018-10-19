import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class Footer extends React.Component {

  render() {
    return (
        <Menu borderless className="ui text footer menu">
          <Container>
            <Menu.Item><Icon name='copyright outline'/>2018 Slvsh | All rights reserved</Menu.Item>
            <Menu.Item position='right'>Follow Slvsh</Menu.Item>
            <Menu.Item><Icon name='facebook'/></Menu.Item>
            <Menu.Item><Icon name='twitter square'/></Menu.Item>
            <Menu.Item><Icon name='instagram'/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

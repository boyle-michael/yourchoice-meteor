import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image size="tiny" src={'http://d1tajj9tvz4hqc.cloudfront.net/assets/logo_blue_md-94f051d3d0084c821e18d0376a98da8f.png'}/>
            </Menu.Item>
            <Menu.Item>GAMES</Menu.Item>
            <Menu.Item>THEATER</Menu.Item>
            <Menu.Item>LIBRARY</Menu.Item>
            <Menu.Item>SHOP</Menu.Item>
            <Menu.Item position='right'>SIGN IN</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

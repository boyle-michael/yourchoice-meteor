/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class Middle extends React.Component {

  render() {
    const gridStyle = { height: '300px' };
    const rowStyle = { textAlign: 'center' };
    return (
        <div className="middlepicture">
          <Grid container verticalAlign='middle' style={gridStyle}>
            <Grid.Row columns='one' style={rowStyle}>
              <Grid.Column>
                <h2>S.L.V.S.H.</h2>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='one' style={rowStyle}>
              <Grid.Column>
                <h1>Game 7 || James 'Woodsy' Woods vs. Tom Ritsch || Slvsh Cup Grandvalira</h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='one' style={rowStyle}>
              <Grid.Column>
                <h3>Grandvalira, AD 7 months ago</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

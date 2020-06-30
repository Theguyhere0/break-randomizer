import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Dropdown, Grid, Button, Header, Message} from 'semantic-ui-react';

let actSetList = [];
function getOptions() {
  actSetList.length = 0;
  for (const i in window.localStorage) {
    if (window.localStorage.getItem(i) && i !== "ally-supports-cache") {
      actSetList.push(JSON.parse(window.localStorage.getItem(i)));
    }
  }
}

export default class MainMenu extends Component {
  componentDidMount() {
    getOptions();
  }

  state = {
    title: '',
    activity: ''
  }

// Changes title display to match current value and keeps track of true title
  handleChange = (e, {value}) => this.setState({title: value, activity: ''});

  handleClick = () => {
    let activities, actWeights, actNames, sumWeight, rand;
    activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
    actNames = activities.map(function(e) {
      return e.key;
    });
    actWeights = activities.map(function(e) {
      return e.weight;
    });
    sumWeight = actWeights.reduce(function(a, b) {
      return a + b;
    }, 0);
    rand = Math.floor(Math.random() * sumWeight);
    for (let i = 0; i < actWeights.length; i++) {
      rand -= actWeights[i];
      if (rand < 0) {
        this.setState({activity: actNames[i]});
        break;
      }
    };
  }

  render() {
    return(
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h2 style={{textAlign:'right'}}>Choose Activity Set</h2>
            </Grid.Column>
            <Grid.Column width={5}>
              <Dropdown
              placeholder='Activity Set'
              search
              selection
              options={actSetList}
              onChange={this.handleChange}
              value={this.state.title}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              width={10}
              verticalAlign='middle'
            >
              <Header size='huge'>My break will now be...</Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button
              size='massive'
              primary
              floated='right'
              content='Break Time!'
              onClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Message
                positive
                size='huge'
                content={this.state.activity}
                hidden={!this.state.activity}
                style={{textAlign: 'center'}}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

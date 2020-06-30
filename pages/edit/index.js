import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Grid, Dropdown, Input, Button, Message, Popup, TransitionablePortal, Segment, Header} from 'semantic-ui-react';

let actSetList = [];
function getOptions() {
  actSetList.length = 0;
  for (const i in window.localStorage) {
    if (window.localStorage.getItem(i) && i !== "ally-supports-cache") {
      actSetList.push(JSON.parse(window.localStorage.getItem(i)));
    }
  }
}

export default class CreateList extends Component {
  componentDidMount() {
    getOptions();
  }

  state = {
    actList: '',
    title: '',
    tempName: '',
    aOpen: false,
    nOpen: false,
    iOpen: false
  };

// Adds activity list into local storage
  handleAddition = (e, {value}) => {
    window.localStorage.setItem(value, JSON.stringify({key: value, text: value, value, activities: []}));
    getOptions();
  }

// Changes title display to match current value and keeps track of true title
  handleChange = (e, {value}) => this.setState({actList: value, title: value});

// Allows changes in activity list input field
  handleInputChange = (e, {value}) => this.setState({actList: value});

// Deletes the activity list
  handleDelete = () => {
    window.localStorage.removeItem(this.state.title);
    this.setState({actList: '', title: ''});
    getOptions();
  };

// Ensures no accidental deletion of activity list
  handleAntidelete = () => {
    if (this.state.actList) {
      return(
        <Button
          negative
          content='Comfirm Delete'
          onClick={this.handleDelete}
        />
      );
    } else {
      return(
        <Message
          negative
          content='You cannot delete nothing!'
        />
      );
    }
  }

// Edits the title of the active activity list
  handleEdit = () => {
    if (this.state.title) {
      const activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      window.localStorage.removeItem(this.state.title);
      window.localStorage.setItem(this.state.actList, JSON.stringify({key: this.state.actList, text: this.state.actList, value: this.state.actList, activities}));
      this.setState({title: this.state.actList});
      this.setState({aOpen: true});
      getOptions();
    }
  };

// Allows changes in activity input field
  handleActChange = (e, {value}) => this.setState({tempName: value});

// Adds an activity to the activity list
  handleAdd = () => {
    if (this.state.tempName) {
      let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      activities.push({key: this.state.tempName, weight: 1});
      window.localStorage.setItem(this.state.title, JSON.stringify({key: this.state.title, text: this.state.title, value: this.state.title, activities}));
      this.setState({tempName: ''});
      getOptions();
    }
  };

// Removes an activity from the activity list
  handleRemove = e => {
    let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
    const removed = e.currentTarget.parentNode.parentNode.getAttribute('class').replace('row ', '');
    activities.splice(activities.map(function(e) { return e.key; }).indexOf(removed), 1);
    window.localStorage.setItem(this.state.title, JSON.stringify({key: this.state.title, text: this.state.title, value: this.state.title, activities}));
    this.setState({tempName: this.state.tempName});
    getOptions();
  };

// Modifies the name of an activity
  handleModify = e => {
    if (e.currentTarget.parentNode.querySelector('input').value) {
      let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      const newName = e.currentTarget.parentNode.querySelector('input').value;
      const oldName = e.currentTarget.parentNode.querySelector('input').getAttribute('value');
      activities[activities.map(function(e) { return e.key; }).indexOf(oldName)].key = newName;
      window.localStorage.setItem(this.state.title, JSON.stringify({key: this.state.title, text: this.state.title, value: this.state.title, activities}));
      this.setState({nOpen: true});
      getOptions();
    }
  };

// Increments the weight of an activity
  handleIncrement = e => {
    let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
    const activity = e.currentTarget.parentNode.parentNode.querySelector('input').getAttribute('value');
    activities[activities.map(function(e) { return e.key; }).indexOf(activity)].weight ++;
    window.localStorage.setItem(this.state.title, JSON.stringify({key: this.state.title, text: this.state.title, value: this.state.title, activities}));
    this.setState({tempName: this.state.tempName});
    getOptions();
  };

// Decrements the weight of an activity
  handleDecrement = e => {
    let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
    const activity = e.currentTarget.parentNode.parentNode.querySelector('input').getAttribute('value');
    if (activities[activities.map(function(e) { return e.key; }).indexOf(activity)].weight > 1) {
      activities[activities.map(function(e) { return e.key; }).indexOf(activity)].weight --;
      window.localStorage.setItem(this.state.title, JSON.stringify({key: this.state.title, text: this.state.title, value: this.state.title, activities}));
      this.setState({tempName: this.state.tempName});
      getOptions();
    } else {
      this.setState({iOpen: true});
    }
  };

// Closes portal for activity list title change confirmation
  handleAClose = () => this.setState({aOpen: false});

// Closes portal for activity name change confirmation
  handleNClose = () => this.setState({nOpen: false});

// Closes portal for activity name change confirmation
  handleIClose = () => this.setState({iOpen: false});

  renderActivities() {
    if (this.state.title) {
      if (window.localStorage.getItem(this.state.title)) {
        return (
          JSON.parse(window.localStorage.getItem(this.state.title)).activities.map(activity => {
            return(
              <Grid.Row
                key={activity.key}
                className={activity.key}
              >
                <Grid.Column
                  width={2}
                  textAlign='right'
                  verticalAlign='middle'
                >
                  <Button
                    circular
                    negative
                    icon='minus'
                    size='medium'
                    onClick={this.handleRemove}
                  />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Input
                    action={{
                      color: 'blue',
                      content: 'Edit Name',
                      onClick: this.handleModify
                    }}
                    size='small'
                    fluid
                    defaultValue={activity.key}
                  />
                </Grid.Column>
                <Grid.Column
                  width={2}
                  textAlign='right'
                  verticalAlign='middle'
                >
                  <Button
                    circular
                    negative
                    icon='minus'
                    size='mini'
                    onClick={this.handleDecrement}
                  />
                </Grid.Column>
                <Grid.Column
                  width={1}
                  textAlign='center'
                  verticalAlign='middle'
                >
                  <h2>{activity.weight}</h2>
                </Grid.Column>
                <Grid.Column
                  width={2}
                  verticalAlign='middle'
                >
                  <Button
                    circular
                    positive
                    icon='plus'
                    size='mini'
                    onClick={this.handleIncrement}
                  />
                </Grid.Column>
              </Grid.Row>
            );
          })
        );
      }
    }
  }

  render() {
    return(
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h2 style={{textAlign: 'right'}}>Saved Activity Sets</h2>
            </Grid.Column>
            <Grid.Column width={5}>
              <Dropdown
                placeholder='Activity Set'
                search
                selection
                options={actSetList}
                allowAdditions
                additionLabel='New Activity Set: '
                onAddItem={this.handleAddition}
                onChange={this.handleChange}
                value={this.state.title}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Popup
                trigger={
                  <Input
                    size='large'
                    placeholder='Title'
                    value={this.state.actList}
                    onChange={this.handleInputChange}
                    action
                  >
                    <Popup
                      trigger={
                        <Button
                          negative
                          icon='minus'
                          size='large'
                        />
                      }
                      content={this.handleAntidelete}
                      on='click'
                      position='top center'
                    />
                    <input />
                    <Button
                      color='blue'
                      content='Edit Title'
                      onClick={this.handleEdit}
                      disabled={!this.state.actList}
                    />
                  </Input>
                }
                content={
                  <Message
                    negative
                    content='You cannot title an activity set nothing!'
                  />
                }
                position='top center'
                disabled={!!this.state.actList}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column
              width={9}
              textAlign='center'
              verticalAlign='bottom'
            >
              <Message
                color='blue'
                header='Activity Name'
                content='Name of your break activity.'
              />
            </Grid.Column>
            <Grid.Column
              width={5}
              textAlign='center'
            >
              <Message
                color='red'
                header='Weight'
                content='How much you want to weight an activity to show up. Each unit is like adding another entry into a lottery.'
              />
            </Grid.Column>
          </Grid.Row>
          {this.renderActivities()}
          <Grid.Row>
            <Grid.Column
              width={2}
              textAlign='right'
              verticalAlign='middle'
            >
              <Button
                circular
                positive
                icon='plus'
                size='medium'
                onClick={this.handleAdd}
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <Input
                size='small'
                placeholder='Name'
                fluid
                value={this.state.tempName}
                onChange={this.handleActChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <TransitionablePortal
          onClose={this.handleAClose}
          open={this.state.aOpen}
        >
          <Segment
            textAlign='center'
            vertical
            inverted
            color='green'
            secondary
            style={{
              left: '30%',
              right: '30%',
              minWidth: '370px',
              top: '45%',
              position: 'fixed',
              zIndex: 1000
            }}
          >
            <Header>Activity set title was changed successfully.</Header>
          </Segment>
        </TransitionablePortal>
        <TransitionablePortal
          onClose={this.handleNClose}
          open={this.state.nOpen}
        >
          <Segment
            textAlign='center'
            vertical
            inverted
            color='green'
            tertiary
            style={{
              left: '30%',
              right: '30%',
              minWidth: '350px',
              top: '45%',
              position: 'fixed',
              zIndex: 1000
            }}
          >
            <Header>Activity name was changed successfully.</Header>
          </Segment>
        </TransitionablePortal>
        <TransitionablePortal
          onClose={this.handleIClose}
          open={this.state.iOpen}
        >
          <Segment
            textAlign='center'
            vertical
            inverted
            color='red'
            tertiary
            style={{
              left: '30%',
              right: '30%',
              minWidth: '270px',
              top: '45%',
              position: 'fixed',
              zIndex: 1000
            }}
          >
            <Header>Weight cannot be less than 1.</Header>
          </Segment>
        </TransitionablePortal>
      </Layout>
    );
  }
}

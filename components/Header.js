import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default class Header extends Component {
  render() {
    return (
      <Menu
        header='true'
        size='massive'
        style={{marginTop: '10px'}}
      >
        <Menu.Item header
          name='BREAK RANDOMIZER'
        />
        <Menu.Menu position='right'>
          <Link route='/main'>
            <a className='item'>
              Main
            </a>
          </Link>
          <Link route='/edit'>
            <a className='item'>
              Edit
            </a>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

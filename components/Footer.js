import React from 'react';
import {Message, Grid} from 'semantic-ui-react';

export default () => {
  return(
    <Grid>
      <Grid.Column textAlign='right'>
        <Message
          compact
          size='tiny'
        >
          App designed by Theguyhere
        </Message>
      </Grid.Column>
    </Grid>
  );
}

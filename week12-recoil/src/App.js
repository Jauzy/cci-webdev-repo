import React from 'react';
import Paper from '@material-ui/core/Paper'
import { Route, Switch } from 'react-router-dom'

import List from './Components/List'
import Info from './Components/Info'

function App() {
  return (
    <div style={{
      overflow: 'hidden', width: '100vw', height: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Paper style={{ minWidth: '20em' }} elevation={0}>
        <Switch>
          <Route exact path='/' component={Info} />
          <Route exact path='/add' component={List} />
        </Switch>
      </Paper>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom';
import React from 'react';
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
import {Badge} from './components/Badge';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div>
        <Badge>Grey Label</Badge>&nbsp;
        <Badge variant="red">Red Label</Badge>&nbsp;
        <Badge variant="orange">Orange Label</Badge>&nbsp;
        <Badge variant="yellow">Yellow Label</Badge>&nbsp;
        <Badge variant="seafoam">Seafoam Label</Badge>&nbsp;
        <Badge variant="green">Green Label</Badge>&nbsp;
        <Badge variant="blue">Blue Label</Badge>&nbsp;
        <Badge variant="fuchsia">Fuchsia Label</Badge>
      </div>
      <br/>
      <div>
        <Badge size="S">Grey Label</Badge>&nbsp;
        <Badge size="S" variant="red">Red Label</Badge>&nbsp;
        <Badge size="S" variant="orange">Orange Label</Badge>&nbsp;
        <Badge size="S" variant="yellow">Yellow Label</Badge>&nbsp;
        <Badge size="S" variant="seafoam">Seafoam Label</Badge>&nbsp;
        <Badge size="S" variant="green">Green Label</Badge>&nbsp;
        <Badge size="S" variant="blue">Blue Label</Badge>&nbsp;
        <Badge size="S" variant="fuchsia">Fuchsia Label</Badge>
      </div>
      <br/>
      <div>
        <Badge size="L">Grey Label</Badge>&nbsp;
        <Badge size="L" variant="red">Red Label</Badge>&nbsp;
        <Badge size="L" variant="orange">Orange Label</Badge>&nbsp;
        <Badge size="L" variant="yellow">Yellow Label</Badge>&nbsp;
        <Badge size="L" variant="seafoam">Seafoam Label</Badge>&nbsp;
        <Badge size="L" variant="green">Green Label</Badge>&nbsp;
        <Badge size="L" variant="blue">Blue Label</Badge>&nbsp;
        <Badge size="L" variant="fuchsia">Fuchsia Label</Badge>
      </div>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('hello-example')
);

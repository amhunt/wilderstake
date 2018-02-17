const React = require('react');
const ReactDOM = require('react-dom'); 


/* Import Components */
const Home = require('./components/Home');

ReactDOM.render(
  <Home />,
  document.getElementById('main')
);

ReactDOM.render(
  <Router history={history}>
    <Provider store={store>
      <Switch>
        <Route exact path={'/'} component={Home} />
        
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('main')
);
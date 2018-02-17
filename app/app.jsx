const React = require('react');
const ReactDOM = require('react-dom');

/* Import Components */
const Home = require('./components/Home');

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('main')
);
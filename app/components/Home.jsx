const { BrowserRouter: Router, Route } = require('react-router-dom');

const React = require('react');
const UnorderedList = require('./UnorderedList');
const Header = require('./Header');
const HomeContent = require('./HomeContent');

/* the main page for the index route of this app */
const Home = function() { 
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomeContent} />
    </Router>
  );
}

module.exports = Home;
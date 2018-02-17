const { Router, Route } = require('react-router-dom');

const React = require('react');
const UnorderedList = require('./UnorderedList');
const Header = require('./Header');
const HomeContent = require('./HomeContent');
const Contribute = require('./Contribute');

/* the main page for the index route of this app */
const Home = function() { 
  return (
    <Router>
      <div>
        <Header />
        <div style={{ paddingTop: 50 }}>
          <Route exact path="/" component={HomeContent} />
          <Route path="/about" component={UnorderedList} />
          <Route path="/contribute" component={Contribute} />
          <Route path="/vote" component={UnorderedList} />
        </div>
      </div>
    </Router>
  );
}

module.exports = Home;
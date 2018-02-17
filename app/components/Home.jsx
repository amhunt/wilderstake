const { BrowserRouter, Route } = require('react-router-dom');

const React = require('react');
const UnorderedList = require('./UnorderedList');
const Header = require('./Header');
const HomeContent = require('./HomeContent');

/* the main page for the index route of this app */
const Home = function() { 
  return (
    <BrowserRouter>
      <div style={{ paddingTop: 50 }}>
        <Header />
        <Route exact path="/" component={HomeContent} />
        <Route path="/about" component={UnorderedList} />
        <Route path="/contribute" component={Contribute} />
        <Route path="/vote" component={UnorderedList} />
      </div>
    </BrowserRouter>
  );
}

module.exports = Home;
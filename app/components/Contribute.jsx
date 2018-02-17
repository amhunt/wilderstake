const React = require('react');
const UnorderedList = require('./UnorderedList');
const Header = require('./Header');

/* the main page for the index route of this app */
const Home = function() {
  return (
    <div>
      <div style={{ fontSize: 50, te }}>
        How much Stake would you like to buy?
      </div>
      <UnorderedList />
    </div>
  );
}

module.exports = Home;
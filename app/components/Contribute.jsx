const React = require('react');
const UnorderedList = require('./UnorderedList');
const Header = require('./Header');
const { Button } = require('react-bootstrap');

/* the main page for the index route of this app */
const Contribute = function() {
  return (
    <div>
      <div style={{ fontSize: 50, textAlign: 'center' }}>
        How much Stake would you like to buy?
      </div>
      <div>
        <div style={{ display: 'inline-block' }}>
          <input />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Button> Preserve </Button>
        </div>
      </div>
      <UnorderedList />
    </div>
  );
}

module.exports = Contribute;
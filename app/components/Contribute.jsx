const React = require('react');
const UnorderedList = require('./UnorderedList');
const Header = require('./Header');
const { Button } = require('react-bootstrap');

/* the main page for the index route of this app */
const Contribute = function() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 600, maxWidth: '80%', margin: '0 auto' }}>
          <div style={{ fontSize: 50 }}>
            How much Stake would you like to buy?
          </div>
          <div style={{ paddingTop: 12 }}>
            <div style={{ fontSize: 20, paddingRight: 8, display: 'inline-block', verticalAlign: 'top' }}>
              <input />
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
              <Button style={{ backgroundColor: '#567D3E', color: 'white' }}> Preserve </Button>
            </div>
          </div>
        </div>
      </div>
      <UnorderedList />
    </div>
  );
}

module.exports = Contribute;
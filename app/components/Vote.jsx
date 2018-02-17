const React = require('react');

const properties = [
  {
    name: 'Colorado forest',
    submitter: 'Jamie. L',
    whyDesc: 'This land means so much to me. It runs right b',
    imageUrl: '',
    cost: '',
  },
  {
    name: '',
    whyDesc: '',
    imageUrl: '',
    cost: '',
  },
  {
    name: '',
    whyDesc: '',
    imageUrl: '',
    cost: '',
  },
];

/* the main page for the index route of this app */
const Vote = function() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h2>What should we buy next?</h2>
        <h3>Cast your vote:</h3>
      </div>
      
    </div>
  );
}

module.exports = Vote;
const React = require('react');

const properties = [
  {
    name: 'Colorado forest',
    submitter: 'Jamie. L',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'https://wallup.net/wp-content/uploads/2016/01/275917-landscape-nature-forest-lake-colorful-fall-trees-water-blue-red-yellow-green-aerial_view-748x468.jpg',
    cost: '$9,000',
    votes: '2489',
  },
  {
    name: 'Alaskan Wilderness',
    submitter: 'Jamie. L',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'http://www.dronestagr.am/aerial-lake-meets-forest-chiang-mai-thailand/',
    cost: '$67,000',
    votes: '1805',
  },
  {
    name: 'Oregon Butte',
    submitter: 'Jamie. L',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: '',
    cost: '$90,000',
    votes: '497',
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
      <div>
        
      </div>
    </div>
  );
}

module.exports = Vote;
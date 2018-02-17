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
    imageUrl: 'https://static1.squarespace.com/static/5324cb3ae4b0c5c3326a28c8/533e10bee4b0258f11587f51/55b4210de4b0b31e18d4ff29/1437868302698/echo-lake-ancient-forest-aerial.jpg',
    cost: '$67,000',
    votes: '1805',
  },
  {
    name: 'Oregon Butte, Echo Lake',
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
      <div style={{ textAlign: 'center', paddingBottom: 20 }}>
        <h2>What should we buy next?</h2>
        <h3>Cast your vote:</h3>
      </div>
      <div>
        {properties.map(property => (
          <div style={{ padding: 16, margin: 16, borderColor: '#ddd', borderWidth: 1, borderStyle: 'solid' }} key={property.name} className="container">
            <div style={{ margin: 'auto', maxWidth: '100%' }} className="row">
              <div style={{ height: 300, backgroundImage: `url(${property.imageUrl})` }} className="col-sm-4">
              </div>
              <div style={{ paddingTop: 12, fontSize: 17 }} className="col-sm-8">
                <div>Name of submitter: {property.submitter}</div>
                <div>Submitter's appeal: {property.whyDesc}</div>
                <div>Property cost: {property.cost}</div>
                <div>Current votes: {property.votes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

module.exports = Vote;
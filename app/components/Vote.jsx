const React = require('react');
const Web3 = require('web3');
const { Button } = require('react-bootstrap');

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
    submitter: 'Joseph Q.',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'https://static1.squarespace.com/static/5324cb3ae4b0c5c3326a28c8/533e10bee4b0258f11587f51/55b4210de4b0b31e18d4ff29/1437868302698/echo-lake-ancient-forest-aerial.jpg',
    cost: '$67,000',
    votes: '1805',
  },
  {
    name: 'Oregon Butte, Echo Lake',
    submitter: 'Leonard C.',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'http://www.dronestagr.am/wp-content/uploads/2017/10/Aerial-Lake-700_-1-1200x800.jpg',
    cost: '$90,000',
    votes: '497',
  },
];

const BLOCK_TIME_SEC = 15;

/* the main page for the index route of this app */
class Vote extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      timeRemainingStr: null,
    };
  }
  
  render() {
    if (typeof window.web3 !== 'undefined') {
      console.log('using mist or metamask');
      const newWeb3 = new Web3(window.web3.currentProvider);
      this.web3 = newWeb3;
    } else {
      alert('Please install Mist or MetaMask to use Blockbin');
    }
    let remainingBlocks;
    let timeRemainingStr;
    if (this.web3) {
      this.web3.eth.getBlockNumber((error, result) => {
        remainingBlocks = result % 84000;
        const estRemainingTimeSecs = remainingBlocks * BLOCK_TIME_SEC;
        var date = new Date(null);
        date.setSeconds(estRemainingTimeSecs);
        this.setState( timeRemainingStr: date.toISOString().substr(11, 8)};
      });
    }
  
    return (
      <div>
        <div style={{ textAlign: 'center', paddingBottom: 20 }}>
          <h2>What should we buy next?</h2>
          <h3>Use your stake to vote:</h3>
          {timeRemainingStr && (<Estimate timeRemainingStr={timeRemainingStr} />)}
        </div>
        <div>
          {properties.map(property => (
            <div style={{ padding: 16, margin: '16px auto', width: '90%', borderColor: '#ddd', borderWidth: 1, borderStyle: 'solid' }} key={property.name} className="container">
              <div style={{ margin: 'auto', maxWidth: '100%' }} className="row">
                <div style={{ height: 300, backgroundSize: 'cover', backgroundImage: `url(${property.imageUrl})` }} className="col-sm-4" />
                <div style={{ fontSize: 17 }} className="col-sm-8">
                  <div style={{ fontWeight: 600, paddingTop: 12, fontSize: 22 }}>
                    {property.name}
                  </div>
                  <div>Name of submitter: {property.submitter}</div>
                  <div>Submitter's appeal: {property.whyDesc}</div>
                  <div>Property cost: {property.cost}</div>
                  <div>Current votes: {property.votes}</div>
                  <Button style={{ position: 'absolute' }}>Vote</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

module.exports = Vote;
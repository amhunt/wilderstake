const React = require('react');

const explanationPoints = [
  {
    title: '1. Buy stake',
    description: 'Buy stake for Eth so that you can participate in conservation elections.'
  },
  {
    title: '2. Vote on land to preserve',
    description: 'Propose and vote on plots of land that you find important to preserve.'
  },
  {
    title: '3. We\'ll take care of the rest',
    description: 'We complete the buy orders and add the land to our trust. If the buy is not possible, you\'ll get your tokens back!'
  },
  
];

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const Explanation = function() {
  return (
    <div className="container">
      <div className="row">
        {explanationPoints.map(point => (
          <div className="col-4-sm">
            <div style={{ fontStyle: 'bold' }}>{point.title}</div>
            <div>{point.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

module.exports = Explanation;
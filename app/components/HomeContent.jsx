const React = require('react');
const Explanation = require('./Explanation');
const Header = require('./Header');

/* the main page for the index route of this app */
const HomeContent = function() {
  return (
    <div>
      <div className="container">
        <div style={{ textAlign: 'center' }} className="row">
          <div className="col-sm-6">
            <h1 style={{ paddingTop: 8, color: '#567D3E' }}>
              WilderStake
            </h1>
            <h2 className="bold">
              conservation, together
            </h2>
            <p style={{ paddingTop: 12, fontSize: 24 }}>
              FIll filll fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill fill
            </p>
          </div>
          <div className="col-sm-6">
            <img style={{ width: 500, maxWidth: '100%' }} src="https://cdn.glitch.com/471debc4-30c7-4d8b-8218-7591bd219e08%2Fsergei-akulich-47326.jpg?1518850404671" />
          </div>
        </div>
      </div>
      <Explanation />
    </div>
  );
}

module.exports = HomeContent;
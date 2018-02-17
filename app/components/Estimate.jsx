const React = require('react');

/* the main page for the index route of this app */
const Estimate = function({ timeRemainingStr }) {
  return (
    <div>
      There's an estimated {timeRemainingStr} until the next purchase.
    </div>
  );
}

module.exports = Estimate;


          
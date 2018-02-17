const React = require('react');

/* the main page for the index route of this app */
const Estimate = function({ timeRemaining }) {
  return (
    <div>
      There's an estimated {timeRemaining.toISOString()} until the next purchase.
    </div>
  );
}

module.exports = Estimate;


          
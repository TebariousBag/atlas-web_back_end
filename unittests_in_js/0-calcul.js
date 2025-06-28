#!/usr/bin/node

// sum of rounded a + rounded b
function calculateNumber(a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  return aRound + bRound;
}
// export function
module.exports = calculateNumber;

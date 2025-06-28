#!/usr/bin/node

// sum of rounded a + rounded b
function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  // using switch case for type
  switch (type) {
	case 'SUM':
        return aRound + bRound;
	case 'SUBTRACT':
		return aRound - bRound;
	case 'DIVIDE':
		if (bRound === 0) {
			return 'Error';
		}
		return aRound / bRound;
  }
}
// export function
module.exports = calculateNumber;

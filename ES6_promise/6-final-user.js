import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // using import from 4-user-promise and 5-photo-reject
  // allsettled to wait for all to settle first
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    // map results to status and value
    // if status is fulfilled, value is result.value
    // if status is rejected, value is result.reason.message
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message,
    })));
  }

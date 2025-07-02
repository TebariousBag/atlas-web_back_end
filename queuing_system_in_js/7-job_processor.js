// import library
import kue from 'kue';
// create our queue
const queKue = kue.createQueue();
// the numbers not allowed
const notAllowed = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
  // use job progress, so 0/100 is 0% complete to start
  job.progress(0, 100);
  // if phonenumber is in our notallowed array, send error msg
  if (notAllowed.includes(phoneNumber)) {
    return done(new Error(`Phone number ${phoneNumber} is notAllowed`));
  }
  // at this point 50/100 we say progress is 50% complete
  job.progress(50, 100);
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  done();
}
// 2 is how many jobs to process at a time
queKue.process('push_notification_code_2', 2, (job, done) => {
  // we get the data for phonenumber and message
  const phoneNumber = job.data.phoneNumber;
  const message = job.data.message;
  // and send message
  sendNotification(phoneNumber, message, job, done);
});

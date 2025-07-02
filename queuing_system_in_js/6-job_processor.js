// import the library
import kue from 'kue';
// creat the queue
const queKue = kue.createQueue();
// function logs number and message
function sendNotification(phoneNumber, message) {
	console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

queKue.process('push_notification_code', (newJob, done) => {
  // save the date from newjob
  const phoneNumber = newJob.data.phoneNumber;
  const message = newJob.data.message;
  // send the data
  sendNotification(phoneNumber, message);
  done();
}); 

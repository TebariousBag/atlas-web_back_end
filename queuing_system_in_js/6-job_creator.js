// import the library
import kue from 'kue';
// creat the queue
const queKue = kue.createQueue();
// the jobData format
const jobData = {
  phoneNumber: 'string',
  message: 'string',
}
// new job with our data
const newJob = queKue.create('push_notification_code', jobData);
// job created with no error, it is enqueue
newJob.on('enqueue', () => {
  console.log(`Notification job created: ${newJob.id}`);
});
// when newjob is complete
newJob.on('complete', () => {
	console.log('Notification job completed');
});
// when job failed
newJob.on('failed', () => {
	console.log('Notification job failed');
});
// remember to save the job
newJob.save();

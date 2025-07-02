// import library
import kue from 'kue';

export default function createPushNotificationsJobs(jobs, queue) {
  // if jobs is not an array
  if (!(jobs instanceof Array)) {
    throw new Error('Jobs is not an array');
  }

  // loop through each job
  // create the queue
  jobs.forEach((jobData) => {
    const job = queue.create('push_notification_code_3', jobData);
    // just logging at different phases of queue
	job.on('enqueue', () => {
		console.log(`Notification job created: ${job.id}`);
	})

    job.on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    });

    job.on('failed', (errorMessage) => {
      console.log(`Notification job ${job.id} failed: ${errorMessage}`);
    });

    job.on('progress', (progress) => {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
    // save the job to add to queue
	job.save();
  });
}

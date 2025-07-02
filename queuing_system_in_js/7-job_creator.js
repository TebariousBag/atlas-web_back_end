// import library
import kue from 'kue';


const newJobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];
// create our queue
const queKue = kue.createQueue();
// loop for each object
newJobs.forEach((newJobData) => {
  const newJob = queKue.create('push_notification_code_2', newJobData).save((err) => {
	// if no errors
    if (!err) {
      console.log(`Notification newJob created: ${newJob.id}`);
    }
  });
  // just logging the status of newJobs
  // newJob complete
  newJob.on('complete', () => {
    console.log(`Notification newJob ${newJob.id} completed`);
  });
  // newJob failed
  newJob.on('failed', (failed) => {
    console.log(`Notification newJob ${newJob.id} failed: ${failed}`);
  });
  // newJob progress
  newJob.on('progress', (progress) => {
    console.log(`Notification newJob ${newJob.id} ${progress}% complete`);
  });
}); 

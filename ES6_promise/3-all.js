import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Promise.all one promise that resolves when both promises are resolved
  return Promise.all([uploadPhoto(), createUser()])
    // then is how we handle success cases
    // print body and names
    .then(([uploadPhoto, createUser]) => {
      console.log(`${uploadPhoto.body} ${createUser.firstName} ${createUser.lastName}`);
    })
    // return error if any promise fails
    .catch(() => {
      console.log('Signup system offline');
    });
}

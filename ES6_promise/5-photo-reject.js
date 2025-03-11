export default function uploadPhoto(filename) {
  // return Promise that rejects, remember to use backticks not apostrophes
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

export default function createInt8TypedArray(length, position, value) {
  // make sure position is in range starting at 0
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  // use arraybuffer to get raw length of bytes, this is container for the data
  const buff = new ArrayBuffer(length);
  // view the buffer as int8, allows us to read and write to the buffer
  const view = new Int8Array(buff);
  // set value at that index position we just got
  view[position] = value;
  // return the view of the buffer, we will see the changes here
  return view;
}

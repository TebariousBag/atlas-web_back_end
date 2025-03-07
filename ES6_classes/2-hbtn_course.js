export default class HolbertonCourse {
  // constructor method
  constructor(name, length, students) {
    // name
    this._name = name;

    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    // length
    this._length = length;

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    // students
    this._students = students;
    // I needed help with this part
    // check if students is an array of strings
    // Array.isArray() method determines whether the passed value is an Array.
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
  // getters
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
  // setters
  
}
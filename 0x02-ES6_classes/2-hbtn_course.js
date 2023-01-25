Skip to content
Product
Solutions
Open Source
Pricing
Search
Sign in
Sign up
This repository has been archived by the owner before Nov 9, 2022. It is now read-only.
B3zaleel
/
alx-backend-javascript
Public archive
Code
Issues
Pull requests
Actions
Projects
Security
Insights
alx-backend-javascript/0x02-ES6_classes/2-hbtn_course.js /
@B3zaleel
B3zaleel ✅ Complete task 2
Latest commit 77fe712 on Apr 7, 2022
 History
 1 contributor
71 lines (65 sloc)  1.5 KB

/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
alx-backend-javascript/2-hbtn_course.js at main · B3zaleel/alx-backend-javascript

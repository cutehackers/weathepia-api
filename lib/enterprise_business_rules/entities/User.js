'use strict';

module.exports = class {

  constructor(id = null, firstName, lastName, type, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.type = type;
    this.email = email;
    this.password = password;
  }

};
'use strict';

const Boom = require('@hapi/boom');
const UserRepository = require('../../application_business_rules/repositories/UserRepository');
const UserStoreAdapter = require('../storage/UserStoreAdapter');
const UserSerializer = require('../serializers/UserSerializer');
const ListUsers = require('../../application_business_rules/use_cases/ListUsers');
const CreateUser = require('../../application_business_rules/use_cases/CreateUser');
const GetUser = require('../../application_business_rules/use_cases/GetUser');
const DeleteUser = require('../../application_business_rules/use_cases/DeleteUser');
const ExistsUser = require('../../application_business_rules/use_cases/ExistsUser');

const userRepository = new UserRepository(new UserStoreAdapter());

module.exports = {

  async createUser(request) {
    console.log(`users> createUser: ${request}`);

    // Input
    const { firstName, lastName, type, email, password } = request.payload;

    // Treatment
    var newUser = null
    try {
      // already exists?
      const exists = await ExistsUser(email, { userRepository });
      if (exists) {
        return Boom.conflict(`User aleady exists with the email: ${email}`);
      }

      const user = await CreateUser(firstName, lastName, type, email, password, { userRepository });
      newUser = user;

    } catch(err) {
      console.error(`UserController.createUser: ${err}`)
      return Boom.boomify(err);
    }
    
    // Output
    const userSerializer = new UserSerializer();
    return userSerializer.serialize(newUser);
  },

  async getUsers() {

    // Treatment
    const users = await ListUsers({ userRepository });

    // Output
    const userSerializer = new UserSerializer();
    return users.map(userSerializer.serialize)
  },

  async getUser(request) {

    // Input
    const userId = request.params.id;

    // Treatment
    const user = await GetUser(userId, { userRepository });

    // Output
    if (!user) {
      return Boom.notFound();
    }
    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  },

  async deleteUser(request, h) {

    // Input
    const userId = request.params.id;

    // Treatment
    const result = await DeleteUser(userId, { userRepository });
    if (!result) {
      return Boom.unauthorized('Invlaid user information');
    }

    // Output
    return h.response().code(204);
  },

};

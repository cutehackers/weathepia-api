'use strict';

/**
 * Step 1. setup nodejs packages
 * 
 * npm init
 * yarn add --dev nodemon 
 * yarn add --dev jest
 * 
 * eslint
 * yarn add --dev eslint prettier-eslint-cli prettier-eslint eslint-config-prettier eslint-plugin-prettier
 * 
 * React.js
 * yarn add --dev babel-eslint \
 *   eslint-config-airbnb \
 *   eslint-config-babel \
 *   eslint-plugin-import \
 *   eslint-plugin-react \
 *   eslint-plugin-jsx-a11y
 *
 * non React.js
 *  yarn add --dev babel-eslint \
 *  eslint-config-airbnb-base \
 *  eslint-plugin-import
 *   
 * yarn add @hapi/hapi @hapi/boom @hapi/good @hapi/good-console @hapi/good-squeeze @hapi/inert @hapi/vision @hapi-cors
 * yarn add hapi-swagger
 * yarn add blipp
 * yarn add jsonwebtoken
 * yarn add require-directory
 * yarn add sequelize
 * yarn add pg pg-hstore
 * yarn add dotenv
 * yarn add axios
 * 
 * Step 2. api implementation sequence
 * 1. interface_adapters/controllers/{Name}Controller.js
 * 2. interface_adapters/serializers/{Name}Serializer.js
 * 3. application_business_rules/repositories/{Name}Repository.js
 * 4. interface_adapters/storage/{Name}StoreAdapter.js
 * 5. application_business_rules/use_cases/GetAll{Name}.js
 * 
 */

// Create a server with a host and port
const sequelize = require('./lib/frameworks_drivers/database/sequelize');
const createServer = require('./lib/frameworks_drivers/webserver/server');

// Start the server
const start = async () => {

  // test if the database connection is OK.
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


  // Sequelize to automatically create the table (or modify it as needed) according to your model definition,
  try {
    //await sequelize.drop();
    await sequelize.sync();
    console.log('Connection to DB has been established successfully.');

  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  try {
    const server = await createServer();
    await server.start();

    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
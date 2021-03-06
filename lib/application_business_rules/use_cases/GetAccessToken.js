'use strict';

module.exports = async (email, password, { userRepository, accessTokenManager }) => {
  const user = await userRepository.getByEmail(email);

  if (!user || user.password !== password) {
    throw new Error('Bad credentials');
  }

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    type: user.type,
    token: accessTokenManager.generate({ uid: user.id })
  };
};

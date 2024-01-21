import { faker } from '@faker-js/faker';

export const generateUser = () => {
  const user = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return user;
};

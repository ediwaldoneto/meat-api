/**
 * @file This file contains a temporary implementation of the User model for testing purposes.
 * The users array is hardcoded and will be replaced with a database implementation in the future.
 */
const users = [
  {name: 'João Cara de José', email: 'joao@emil.com'},
  {name: 'Uoxiton Silva', email: 'uoxiton@email.com'},
];

export class User {

  static findAll(): Promise<any[]> {
    return Promise.resolve(users);
  }
}
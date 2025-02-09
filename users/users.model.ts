/**
 * @file This file contains a temporary implementation of the User model for testing purposes.
 * The users array is hardcoded and will be replaced with a database implementation in the future.
 */
const users = [
  {id:'1' , name: 'João Cara de José', email: 'joao@emil.com'},
  {id:'2', name: 'Uoxiton Silva', email: 'uoxiton@email.com'},
];

export class User {

  static findAll(): Promise<any[]> {
    return Promise.resolve(users);
  }

  static findById(id: string): Promise<any> {
    return new Promise(resolve => {
      const filtered = users.filter(user => user.id === id);
      let user = undefined;
      if (filtered.length > 0) {
        user = filtered[0];
      }
      resolve(user);
    });
  }
}
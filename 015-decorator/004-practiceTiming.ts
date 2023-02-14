// this is practice for method decorator and class decorator

import { timing, logTiming } from "./005-timingDecorators";

const delay = <T>(time: number, data: T): Promise<T> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, time)
  );
};

// basic code
// class Users {
//   async getUsers() {
//     return await delay(1000, []);
//   }
//   async getUser(id: number) {
//     return await delay(50, { id: `user: ${id}` });
//   }
// }

@logTiming
class Users {
  // add the decorator into the method that you want to check the timing process
//   @timing()
  async getUsers() {
    return await delay(1000, []);
  }

  @timing()
  async getUser(id: number) {
    return await delay(50, { id: `user: ${id}` });
  }
}

(async function () {
  const users = new Users();

  const userIdentity = await users.getUser(22);
  console.log(`Got ${JSON.stringify(userIdentity)}`);

  //await users.getUser(42);

  //await users.getUsers();

  // @ts-ignore
  console.log(users.__timings)
})(); // automatically run the function

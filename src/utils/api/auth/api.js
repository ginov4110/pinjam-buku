export const userLogin = async (data) => {
  return new Promise((resolve, reject) => {
    const dummyUser = { username: "user", password: "user123" };
    setTimeout(() => {
      if (
        data.username === dummyUser.username &&
        data.password === dummyUser.password
      ) {
        resolve({ message: "Login Success", payload: data });
      } else if (
        data.username === dummyUser.username &&
        data.password !== dummyUser.password
      ) {
        reject({ message: "Invalid password", payload: null });
      } else if (
        data.username !== dummyUser.username &&
        data.password === dummyUser.password
      ) {
        reject({ message: "Invalid username", payload: null });
      } else {
        reject({ message: "Invalid username or password", payload: null });
      }
    }, 1000);
  });
};

export const userRegister = async (data) => {
  return new Promise((resolve, reject) => {
    const dummyUser = { username: "admin", password: "admin123" };

    setTimeout(() => {
      if (
        data.username === dummyUser.username &&
        data.password === dummyUser.password
      ) {
        resolve({ message: "Register Success", payload: data });
      } else {
        reject({ message: "Username already exists", payload: null });
      }
    }, 1000);
  });
};

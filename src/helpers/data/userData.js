// userData.js
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUser = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      // There should be only one value, using array response
      // in case of a duplicate entry for the user
      const userArr = Object.values(response.data);
      if (response.data) {
        resolve(userArr);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const addUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      const keyObj = { id: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, keyObj)
        .then(() => getUser(userObj.uid).then((user) => {
          resolve(user);
        }));
    }).catch((error) => reject(error));
});

const updateUser = (userId, userObj) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}./users/${userId}.json`, userObj)
    .then(() => getUser(userId).then((user) => {
      resolve(user);
    })).catch((error) => reject(error));
});

export {
  getUser, addUser,
  updateUser
};

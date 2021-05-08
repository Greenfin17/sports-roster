// playerData.js

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// Get Players
const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const playerArr = Object.values(response.data);
      if (response.data) {
        resolve(playerArr);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSinglePlayer = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players/${id}.json`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve({});
      }
    }).catch((error) => reject(error));
});

const addPlayer = (uid, playerObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/players.json`, playerObj)
    .then((response) => {
      const keyObj = { id: response.data.name };
      axios.patch(`${dbUrl}/players/${response.data.name}.json`, keyObj)
        .then(() => getPlayers(uid).then((playerArr) => {
          resolve(playerArr);
        }));
    }).catch((error) => reject(error));
});

const updatePlayer = (uid, id, playerObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/players/${id}.json`, playerObj)
    .then(() => getPlayers(uid).then((playerArr) => {
      resolve(playerArr);
    })).catch((error) => reject(error));
});

export {
  getPlayers, getSinglePlayer,
  addPlayer, updatePlayer
};

import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.firebaseArray(data)))
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

const addPlayer = (newObj) => axios.post(`${baseUrl}/players.json`, newObj);

const updatePlayer = (playerId, playerObj) => axios.put(`${baseUrl}/players/${playerId}.json`, playerObj);

export default {
  getPlayersByUid,
  deletePlayer,
  addPlayer,
  updatePlayer,
};

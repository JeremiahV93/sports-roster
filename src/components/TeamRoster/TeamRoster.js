import React from 'react';
import './teamRoster.scss';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

class TeamRoster extends React.Component {
  state = {
    players: [],
    formOpen: false,
    editPlayer: {},
  }

  getPlayerData = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('player data did not load', err));
  }

  componentDidMount() {
    this.getPlayerData();
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayerData();
      })
      .catch((err) => console.error('did not delete player', err));
  }

  createPlayer = (newObj) => {
    playerData.addPlayer(newObj)
      .then(() => {
        this.getPlayerData();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error(err));
  }

  updatePlayer = (playerId, playerObj) => {
    playerData.updatePlayer(playerId, playerObj)
      .then(() => {
        this.getPlayerData();
        this.setState({ editBoard: {}, formOpen: false });
      })
      .catch((err) => console.error(err));
  }

  openEditForm = (playerToEdit) => {
    this.setState({ editBoard: {} });
    this.setState({ formOpen: true, editPlayer: playerToEdit });
  }

  closeForm = () => {
    this.setState({ editBoard: {}, formOpen: false });
  }

  render() {
    const { players, formOpen, editPlayer } = this.state;

    const playerCards = players.map((player) => <Player deletePlayer={this.deletePlayer} player={player} openEditForm={this.openEditForm} key={player.id} />);
    return (
      <div >
        <h1 className='teamName'>Los Angeles Dodgers Roster</h1>
        {
          formOpen
            ? <button className="btn btn-danger" onClick={this.closeForm}> closeForm</button>
            : <button className="btn btn-warning" onClick={() => this.setState({ formOpen: !formOpen })}> Add Player</button>
        }        {formOpen ? <PlayerForm createPlayer={this.createPlayer} player={editPlayer} updatePlayer={this.updatePlayer} /> : ''}
        <div className="card-columns"> {playerCards}</div>
      </div>
    );
  }
}

export default TeamRoster;

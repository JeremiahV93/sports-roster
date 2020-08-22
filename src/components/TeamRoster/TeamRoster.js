import React from 'react';
import './teamRoster.scss';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';

class TeamRoster extends React.Component {
  state = {
    players: [],
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

  render() {
    const { players } = this.state;

    const playerCards = players.map((player) => <Player deletePlayer={this.deletePlayer} player={player} key={player.id} />);
    return (
      <div >
        <h1 className='teamName'>Los Angeles Dodgers Roster</h1>
        <div className="card-columns"> {playerCards}</div>
      </div>
    );
  }
}

export default TeamRoster;

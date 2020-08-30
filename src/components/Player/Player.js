import React from 'react';
import PropTypes from 'prop-types';
import PlayerStats from '../PlayerStats/PlayerStats';
import playerShape from '../../helpers/props/playerShape';
import './player.scss';

class Player extends React.Component {
  static propTypes ={
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
    openEditForm: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, openEditForm } = this.props;
    openEditForm(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div>
        <div className="card flip-card playerCard" >
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img className="card-img-top" src={player.imageUrl} alt="Card cap" />
              <div className="card-img-overlay">
                <p className='team'> Dodgers</p>
                <div className='info'>
                  <h4 className='name'>{player.name}</h4>
                  <h5 className='position'>Position: {player.position}</h5>
                </div>
              </div>
            </div>
            <div className='flip-card-back'>
              <PlayerStats player={player} key={player.id} />
            </div>
          </div>
        </div>
        <button className='btn btn-danger' onClick={this.deletePlayerEvent}>Trade Player</button>
        <button className='btn btn-warning' onClick={this.editPlayerEvent}>Update Player</button>

      </div>
    );
  }
}

export default Player;

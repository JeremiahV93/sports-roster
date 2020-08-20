import React from 'react';
import playerShape from '../../helpers/props/playerShape';
import './player.scss';

class Player extends React.Component {
  static propTypes ={
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
    <div className="card playerCard" >
      <img className="card-img-top" src={player.imageUrl} alt="Card cap" />
      <div className="card-img-overlay">
        <p className='team'> Dodgers</p>
        <div className='info'>
          <h4 className='name'>{player.name}</h4>
          <h5 className='position'>Position: {player.position}</h5>
        </div>
      </div>
    </div>
    );
  }
}

export default Player;

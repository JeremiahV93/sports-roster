import React from 'react';
import playerShape from '../../helpers/props/playerShape';

class Player extends React.Component {
  static propTypes ={
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card" >
      <div className="card-body">
      <img className="card-img-top" src={player.imageUrl} alt="Card cap" />
        <h4 className="card-title">{player.name}</h4>
        <h5>{player.position}</h5>
        </div>
    </div>
    );
  }
}

export default Player;

import React from 'react';
import playerShape from '../../helpers/props/playerShape';
import './PlayerStats.scss';

class PlayerStats extends React.Component {
  static propTypes ={
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    let pitcher = false;
    if (player.position === 'Pitcher') {
      pitcher = true;
    }

    return (
      <div className="container player-stats">
        <h3>Career Stats</h3>
        <div className="row">
            <div className="col-sm-6">
              {pitcher ? <p>ERA:</p> : <p>AVG:</p>}
            </div>
            <div className="col-sm-6">
              {pitcher ? <p>{player.ERA}</p> : <p> 0.{player.AVG}</p>}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
            {pitcher ? <p>SO:</p> : <p>HR:</p>}
            </div>
            <div className="col-sm-6">
            {pitcher ? <p>{player.SO}</p> : <p> {player.HR}</p>}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
            {pitcher ? <p>WHIP:</p> : <p>OPS:</p>}
            </div>
            <div className="col-sm-6">
            {pitcher ? <p>{player.WHIP}</p> : <p> 0.{player.OPS}</p>}
            </div>
        </div>
      </div>
    );
  }
}

export default PlayerStats;

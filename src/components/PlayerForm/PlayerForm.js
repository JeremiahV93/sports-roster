import React from 'react';
import PropType from 'prop-types';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropType.func.isRequired,
    player: PropType.object.isRequired,
    updatePlayer: PropType.func.isRequired,
  }

  state = {
    name: '',
    imageUrl: '',
    position: '',
    ERA: 0,
    WHIP: 0,
    SO: 0,
    AVG: 0,
    OPS: 0,
    HR: 0,
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        name: player.name,
        imageUrl: player.imageUrl,
        position: player.position,
        ERA: player.ERA,
        WHIP: player.WHIP,
        SO: player.SO,
        AVG: player.AVG,
        OPS: player.OPS,
        HR: player.HR,
        isEditing: true,
      });
    }
  }

  createNewPlayer = (e) => {
    e.preventDefault();
    const {
      name,
      position,
      imageUrl,
      ERA,
      WHIP,
      SO,
      AVG,
      OPS,
      HR,
    } = this.state;
    const { createPlayer } = this.props;

    const newPlayer = {
      name,
      position,
      imageUrl,
      uid: authData.getUid(),
    };

    if (position === 'pitcher') {
      newPlayer.ERA = ERA * 100;
      newPlayer.SO = SO;
      newPlayer.WHIP = WHIP * 1;
    } else {
      newPlayer.AVG = AVG * 1000;
      newPlayer.OPS = OPS * 1;
      newPlayer.HR = HR;
    }
    createPlayer(newPlayer);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const {
      name, position, imageUrl, ERA, WHIP, SO, AVG, OPS, HR,
    } = this.state;
    const { player, updatePlayer } = this.props;

    const updatedPlayer = {
      name,
      position,
      imageUrl,
      uid: authData.getUid(),
    };

    if (position === 'pitcher') {
      updatedPlayer.ERA = ERA * 100;
      updatedPlayer.SO = SO;
      updatedPlayer.WHIP = WHIP * 1;
    } else {
      updatedPlayer.AVG = AVG * 1000;
      updatedPlayer.OPS = OPS * 1;
      updatedPlayer.HR = HR;
    }
    updatePlayer(player.id, updatedPlayer);
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeERAEvent = (e) => {
    e.preventDefault();
    this.setState({ ERA: e.target.value });
  }

  changeSOEvent = (e) => {
    e.preventDefault();
    this.setState({ SO: e.target.value });
  }

  changeWHIPEvent = (e) => {
    e.preventDefault();
    this.setState({ WHIP: e.target.value });
  }

  changeAVGEvent = (e) => {
    e.preventDefault();
    this.setState({ AVG: e.target.value });
  }

  changeOPSEvent = (e) => {
    e.preventDefault();
    this.setState({ OPS: e.target.value });
  }

  changeHREvent = (e) => {
    e.preventDefault();
    this.setState({ HR: e.target.value });
  }

  changeUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changePosEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  render() {
    const {
      name,
      position,
      imageUrl,
      ERA,
      SO,
      WHIP,
      AVG,
      HR,
      OPS,
      isEditing,
    } = this.state;
    return (
<form className='col-6 offset-3'>
        <div className="form-group">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeholder="Enter Player name"
            onChange={this.changeNameEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">player Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={imageUrl}
            placeholder="Enter URL"
            onChange={this.changeUrlEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="Position">Position</label>
          <select value={position} onChange={this.changePosEvent} className="form-control" id="position">
            <option>Please Select a Position</option>
            <option value='Pitcher'>Pitcher</option>
            <option value='Infielder'>Infielder</option>
            <option value='Outfielder'>Outfielder</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ERA">Earned Runs Average</label>
          <input
            type="text"
            className="form-control"
            id="ERA"
            value={ERA}
            onChange={this.changeERAEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="SO">Player Srikeouts</label>
          <input
            type="number"
            className="form-control"
            id="SO"
            value={SO}
            onChange={this.changeSOEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="WHIP">Player WHIP</label>
          <input
            type="text"
            className="form-control"
            id="WHIP"
            value={WHIP}
            onChange={this.changeWHIPEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="AVG">Player Batting AVG</label>
          <input
            type="text"
            className="form-control"
            id="AVG"
            value={AVG}
            onChange={this.changeAVGEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="OPS">Player OPS</label>
          <input
            type="text"
            className="form-control"
            id="OPS"
            value={OPS}
            onChange={this.changeOPSEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="HR">Player Home Runs</label>
          <input
            type="number"
            className="form-control"
            id="HR"
            value={HR}
            onChange={this.changeHREvent}
            />
        </div>
        {/* <div className="form-group">
          <label htmlFor="WHIP">player Image URL</label>
          <input
            type="number"
            className="form-control"
            id="imageUrl"
            placeholder="Enter URL"
            onChange={this.changeUrlEvent}
            />
        </div> */}
{
      isEditing
        ? <button className="btn btn-success" onClick={this.editPlayerEvent}>Edit player</button>
        : <button type="submit" className="btn btn-success" onClick={this.createNewPlayer}>Recruit Player</button>

    }      </form>
    );
  }
}

export default PlayerForm;

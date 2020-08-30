import React from 'react';
import PropType from 'prop-types';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropType.func.isRequired,
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
      newPlayer.ERA = ERA;
      newPlayer.SO = SO;
      newPlayer.WHIP = WHIP;
    } else {
      newPlayer.AVG = AVG;
      newPlayer.OPS = OPS;
      newPlayer.HR = HR;
    }
    createPlayer(newPlayer);
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
    this.setState({ ERA: e.target.value * 100 });
  }

  changeSOEvent = (e) => {
    e.preventDefault();
    this.setState({ SO: e.target.value });
  }

  changeWHIPEvent = (e) => {
    e.preventDefault();
    this.setState({ WHIP: e.target.value * 100 });
  }

  changeAVGEvent = (e) => {
    e.preventDefault();
    this.setState({ AVG: e.target.value * 1000 });
  }

  changeOPSEvent = (e) => {
    e.preventDefault();
    this.setState({ OPS: e.target.value * 1 });
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
    return (
<form className='col-6 offset-3'>
        <div className="form-group">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
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
            placeholder="Enter URL"
            onChange={this.changeUrlEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="Position">Position</label>
          <select value={this.state.position} onChange={this.changePosEvent} className="form-control" id="position">
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
            onChange={this.changeERAEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="SO">Player Srikeouts</label>
          <input
            type="number"
            className="form-control"
            id="SO"
            onChange={this.changeSOEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="WHIP">Player WHIP</label>
          <input
            type="text"
            className="form-control"
            id="WHIP"
            onChange={this.changeWHIPEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="AVG">Player Batting AVG</label>
          <input
            type="text"
            className="form-control"
            id="AVG"
            onChange={this.changeAVGEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="OPS">Player OPS</label>
          <input
            type="text"
            className="form-control"
            id="OPS"
            onChange={this.changeOPSEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="HR">Player Home Runs</label>
          <input
            type="number"
            className="form-control"
            id="HR"
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
        <button type="submit" className="btn btn-success" onClick={this.createNewPlayer}>Submit</button>
      </form>
    );
  }
}

export default PlayerForm;

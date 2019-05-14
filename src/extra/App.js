import React, { Component } from 'react';
import Kid from './screens/Kid/Kid';
import Judge from './screens/Judge/Judge';
import Teacher from './screens/Teacher/Teacher';

class App extends Component {
  constructor() {
    super();

    this.state = {
      volume: 0,
      furtherSteps: [],
      qualified: false,
      removeJudges: false,
    }
    this.isQualified = this.isQualified.bind(this);
  }

  isQualified() {
    this.setState({
      qualified: true,
    })
  }

  isKidGone() {
    this.setState({
      removeJudges: true,
    })
  }

  updateEmotion(emotion) {
    this.setState({
      emotion: emotion,
    })
  }

  updateQualification() {
    if (this.state.qualified === false) {
      this.child.qualified();
    }
  }

  updateSteps(furtherSteps) {
    this.setState({
      furtherSteps,
      startedPerforming: true,
    })
  }

  static getDerivedStateFromProps() {
    return { volume: 5 };
  }

  render() {
    const { volume, furtherSteps, emotion, startedPerforming, qualified, removeJudges } = this.state;

    return (
      <div>
        {!qualified && <Kid isKidGone={this.isKidGone.bind(this)} ref={instance => { this.child = instance; }} dressColor="yellow" emotion={emotion} furtherSteps={furtherSteps} startedPerforming={startedPerforming} />}
        <br /><br />
        {!removeJudges && <div>Volume: {volume}</div>}
        {!removeJudges && <Teacher updateSteps={this.updateSteps.bind(this)} />}
        <br /><br />
        {!removeJudges && <Judge updateQualification={this.updateQualification.bind(this)} updateEmotion={this.updateEmotion.bind(this)} />}
        <br /><br />
        <button disabled={removeJudges} onClick={this.isQualified}>Ask the kid to leave</button>
        <br /><br />
        {removeJudges && <div>Show Finished</div>}
      </div>
    );

  }
}

export default App;


  
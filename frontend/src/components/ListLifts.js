import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import LiftCard from './LiftCard';
import CreateLift from './CreateLift'

class ListLifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [],
      addLift: true
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/lifts')
      .then(res => {
        this.setState({
          lifts: res.data
        })
      })
      .catch(err =>{
        console.log(`Error from ListLifts: ${err}`);
      })
  };

  componentDidUpdate(prevstate) {
    if (prevstate.addLift!=this.state.addLift)
    {
      axios
      .get('http://localhost:8080/api/lifts')
      .then(res => {
        this.setState({
          lifts: res.data
        })
      })
      .catch(err =>{
        console.log(`Error from ListLifts: ${err}`);
      })

    }
    
  };

  addLift = () => {
    this.setState({
      addLift:!this.state.addLift
    })
  }

  render() {
    const lifts = this.state.lifts;
    //console.log("ListLifts: " + lifts);
    let liftList;

    if(!lifts) {
      liftList = "You do not have any lifts";
    } else {
      liftList = lifts.map((lift, k) =>
        <LiftCard lift={lift} key={k} />
      );
    }

    return ( 
      
        <div className="row">
          <div className="col padding">
            <CreateLift addLift={this.addLift}/>
          </div>
          <div className="col padding">
            {liftList}
          </div>
        </div>
        
    );
  }
}

export default ListLifts;
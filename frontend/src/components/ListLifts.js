import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    if (prevstate.addLift !== this.state.addLift)
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
          <div className="col-sm-3 sidebar bg-dark">
            
              <br></br><br></br>
              <h1 class="text-white centered">TWO PLATE</h1>
              <hr class="text-white"></hr>

              <Link to='/dashboard'> 
                <h4 class="text-white centered active">
                <span class="icon text-white">
                  <i class="fas fa-chart-line"></i>
                </span>
                  dashboard
                </h4>
              </Link>

              <Link to='/'> 
                <h4 class="text-white centered">
                <span class="icon text-white">
                <i class="fas fa-home"></i>
                </span>
                  landing page
                </h4>
              </Link>

              <CreateLift addLift={this.addLift}/>
            </div>

          <div className="col padding main">
            {liftList}
          </div>
        </div>
        
    );
  }
}

export default ListLifts;
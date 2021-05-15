import React from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';

const LiftCard = (props) => {
    const lift = props.lift;

    var date = new Date(lift.date);
    date = date.toDateString()

    return(
        <div className="card">
          
        <div className="card-header"><span className="set-font">{date}</span> <a href="/dashboard" className="set-font" >Edit</a></div> 
          <div className="card-body">             
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <h1 className="centered">{lift.name}</h1>                   
                </div>
                <div className="col-sm">
                  <h1 className="centered">{lift.weight}</h1>
                  <p className="centered">{lift.metric}</p>
                </div>
                <div className="col-sm">
                  <h1 className="centered"> {lift.set}x{lift.rep} </h1>
                  <p className="centered">setxrep</p>
                </div>
                <div className="col-sm" >
                  <p> {lift.note}</p>
                </div>                  
              </div>
            </div>
          </div>
        </div>
    )
};

export default LiftCard;
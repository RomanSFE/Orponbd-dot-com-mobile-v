import React, { Component } from 'react'
import Countdown from 'react-countdown';
import './timecount.css';

export default class TimeCount extends Component {
    render() {

        // Random component
        const Completionist = () => <span className="time-ccsnst-end-txxt">Offer is End!</span>
        
        // Renderer callback with condition
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span> <span><i class="far fa-clock"></i></span>  {hours}<span className="time-ccnxt-timmx"></span>H : {minutes}<span className="time-ccnxt-timmx"></span>M : {seconds}S<span className="time-ccnxt-timmx"></span></span>;
            // return <span>{days}<span className="time-ccnxt-timmx">D</span>:{hours}<span className="time-ccnxt-timmx">H</span>:{minutes}<span className="time-ccnxt-timmx">M</span>:{seconds}<span className="time-ccnxt-timmx">S</span></span>;
        }
        };

        return (
            <div>
                <Countdown
                    date={Date.now() + 5000000}
                    renderer={renderer}
                />
            </div>
        )
    }
}

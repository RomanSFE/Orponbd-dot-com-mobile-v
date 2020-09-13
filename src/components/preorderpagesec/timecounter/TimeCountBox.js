import React, { Component } from 'react'
import Countdown from 'react-countdown';
import './timecountbox.css';

export default class TimeCountBox extends Component {
    render() {

        // Random component
        const Completionist = () => <span className="time-ccsnst-end-boocx-txxt">Offer is End!</span>
        
        // Renderer callback with condition
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span> <span className="time-ccnxt-booxcx-timmx">{days}D</span> <span className="time-ccnxt-booxcx-timmx">{hours}H</span> <span className="time-ccnxt-booxcx-timmx">{minutes}M</span> <span className="time-ccnxt-booxcx-timmx">{seconds}S</span></span>;
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

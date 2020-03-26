import React, { Component } from 'react';

import './assets/timer.css';

class Chronometer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start_button: 'START'
        }

        this.timer = null;

        this.start = this.start.bind(this);
        this.clean = this.clean.bind(this);
    }

    start() {

        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({start_button: 'START'})
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.time += 0.1;
                this.setState(state);
            }, 100)

            this.setState({start_button: 'STOP'})
        }
    }

    clean() {
        console.log('clean')

        this.setState({time: 0})
    }
    render() {
        return(
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img'/>
                <a className='timer'>{this.state.time.toFixed(1)}</a>
                <div className='controls'>
                    <a className='control' onClick={this.start}>{this.state.start_button}</a>
                    <a className='control' onClick={this.clean}>CLEAN</a>
                </div>
            </div>
        )
    }
}

export default Chronometer;
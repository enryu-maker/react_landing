import React, { Component } from 'react';
import './avtar.css';
import 'tachyons';
export default class Avtar extends Component {
    render() {
        return (
            
                <div className='main ma3 bg-light-blue grow dib pa3 shadow-4 tc justify-around'>
                    <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt='avtar'/>
                    <p className='title'>{this.props.name}</p>
                    <p className='title'>{this.props.work}</p>
                </div>
            
        )
    }
}

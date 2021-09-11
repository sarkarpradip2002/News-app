import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center">
            <div className="spinner-grow text-danger" style={this.props.style} role="status">
               
            </div>
            </div>
        )
    }
}

export default Spinner

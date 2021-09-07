import React, { Component } from 'react'

export class Newspart extends Component {
    render() {
        const {title,description,url,image}=this.props;
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="No photos"/>
                <div className ="card-body">
                <h5 className ="card-title">{title}...</h5>
                <p className ="card-text">{description}...</p>
                <a href={url} target="_blank" rel="noreferrer" className ="btn btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default Newspart

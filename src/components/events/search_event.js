import React, { Component } from 'react';

export default class SeachEvent extends Component {

  render() {
    return (
    	<div className="container form-main input-group input-group-lg">
				<input className="form-control" 
        value={this.props.term} onChange={this.props.handleSearchEvent}  
        placeholder="searching using name or filter"/>
        {this.props.filter !== '' ? (
          <small className="form-text text-muted">`searching using: {this.props.filter}</small>) : null}
			</div>
    );
  }
}
import React, { Component } from 'react';

export default class SeachEvent extends Component {

  render() {
    return (
    	<div className="container form-main">
				<input value={this.props.term} onChange={this.props.handleSearchEvent} />
			</div>
    );
  }
}
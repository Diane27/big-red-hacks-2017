import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
    	<div className="container form-main">
	      <form className="form-group">
	      	<div className="align-self-center">
	      		<div className="col-md-4 ml-md-4">
		        	<label className="form-control">Please fill out the following</label>
		    	</div>
		    </div>
		    <div className="row align-self-center">
		    	<div className="col-md-4 ml-md-4">
		        	<input className="form-control" type="text" placeholder="Location" />
		    	</div>
		    </div>
		    <div className="row align-self-center">
		    	<div className="col-md-4 ml-md-4">
   		        	<input className="form-control" type="text" placeholder="Grade" />
   		    	</div>
   		    </div>
		    <div className="row align-self-center">
		    	<div className="col-md-4 ml-md-4">
		        	<input className="form-control" type="text" placeholder="Subject" />
		    	</div>
		    </div>
		    <div className="row align-self-center">
		    	<div className="col-md-2 ml-md-4">
		        	<button className="form-control btn btn-primary" type="button">Submit</button>
		    	</div>
		    </div>
		  </form>
		</div>
    );
  }
}




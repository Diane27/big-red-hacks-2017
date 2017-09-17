import React, {Component} from 'react'

class EventDetail extends Component{
    constructor(props){
        super(props)

        this.state = {
            'message': ''
        }

        this.handleAddEvent = this.handleAddEvent.bind(this);        
    }

    handleAddEvent(e){
        e.preventDefault();
        const classId = e.target.classId.value.toString();
        let storage;
        
        //create or get localStorage object
        if (!('classEvents' in localStorage)) {
            storage = {};
        }else{
            storage = JSON.parse(localStorage.classEvents)
        }
        
        //create classId if doesn't exist
        if(!(classId in storage)){
            storage[classId] = []
        }

        //append new trip on to class
        storage[classId].push(this.props.event.id);
        localStorage.setItem('classEvents', JSON.stringify(storage));

        this.setState({message: `this event is added to ${classId}`})
    }

    render(){
        const badge_list = this.props.event.subjects.map( (e,i) => {
                return(<h4 key={`${i}-badge`}><span style={{marginRight: '5px'}} className="badge badge-default">{e}</span></h4>)
        })
        return(
            <div>
                <div className="jumbotron jumbotron-fluid center-block" 
                    style={{"background": `url('${this.props.event.image}')`, "textAlign": "center",
                            "backgroundSize" : "cover", "minHeight": "80vh"}}
                    key={this.props.event.id}>
                    <div style={{"opacity": .7 , "margin": "0px 50px", "padding": "10% 0px" ,
                                "backgroundColor": "black", "display": "block"}}> 
                    <h3 className="display-3" 
                        style={{'color': 'white', 'textShadow':'2px 1px black'}}>{this.props.event.name}</h3>
                        <p className="lead" style={{'color': 'white', 'textShadow':'2px 1px black'}}>{this.props.event.details}</p>
                        {badge_list}
                    </div>
                </div>
                <form onSubmit={this.handleAddEvent}>
                    <input type='number' name='classId'/>
                    <button className='btn btn-primary' type='submit'> 
                    send to parents</button>   
                </form> 
                {this.state.message}
            </div>
        )
    }
}

export default EventDetail

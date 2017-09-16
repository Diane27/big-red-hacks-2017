import React from 'react'

const EventDetail = (props) => {
    const badge_list = props.event.subjects.map(e => {
            return(<h4><span style={{marginRight: '5px'}} className="badge badge-default">{e}</span></h4>)
    })
    return(
        <div className="jumbotron jumbotron-fluid center-block" 
            style={{"background": `url('${props.event.image}')`, "text-align": "center",
                    "background-size" : "cover", "min-height": "80vh"}}
            key={props.event.id}>
            <div style={{"opacity": .7 , "margin": "0px 50px", "padding": "10% 0px" ,
                        "background-color": "black", "display": "block"}}> 
            <h3 className="display-3" 
                style={{'color': 'white', 'text-shadow':'2px 1px black'}}>{props.event.name}</h3>
                <p class="lead" style={{'color': 'white', 'text-shadow':'2px 1px black'}}>{props.event.details}</p>
                {badge_list}
            </div>
        </div>
    )
}

export default EventDetail

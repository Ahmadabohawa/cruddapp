import React from 'react'
 
const Courseform=(props)=>{
    return(
        <form onSubmit={props.addcourse}>
            <input type="text" value={props.current} placeholder="course's Name ..." 
            onChange={props.updatecourse}/>
            <button>Add course</button>
        </form>
    )
}
export default Courseform;
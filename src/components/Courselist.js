import React, { Component } from 'react';

class Courselist extends Component{
  state={
    isEdit:false
  }

  //render course
  rendercourse=()=>{
    return(
    <li>
           <span>{this.props.details.name}</span>
           <button onClick={()=> {this.togglestate()}}>Edit course</button>
           <button onClick= {()=> {this.props.deletecourse(this.props.index)}}>Delete Course</button>
        </li>
    )}
      //renderupdateform
    renderupdateform=()=>{
      return(
        <form onSubmit={this.updatecourseitem}>
          <input type="text" defaultValue={this.props.details.name} ref={(v)=>{this.input=v}}/>
          <button>Update Course</button>
        </form>
      )
      }
       
    //بتشتغل هي الدالة update وقت بتكبس على ال 
    //updatecourseitem
    updatecourseitem=(e)=>{
      e.preventDefault();
      this.props.editecourse(this.props.index,this.input.value);
      this.togglestate();
    }
    //togglestate 
    togglestate=()=>{
      let isEdit=this.state.isEdit;
      this.setState({
        isEdit:!isEdit
      })
    }
    
    render(){
      let isEdit=this.state.isEdit;
      return (
        
        //React.Fragment :<li> مباشرة بدي ينحط ال  <ul> بعد ال  div مشان ماينزل ال
        <React.Fragment>
            {isEdit ? this.renderupdateform():this.rendercourse()}
        </React.Fragment> 
    );
   }
  } 
export default Courselist;
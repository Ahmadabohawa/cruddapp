import React,{ Component } from 'react';
import Courseforms from './components/Courseforms'
import Courselist from './components/Courselist';

class App extends Component{
  state={
    courses:[
      {name:"HTML"},
      {name:"Css"},
      {name:"JQuery"}
    ],
    current :''
  }
   //Delete course
   deletecourse=(index)=>{
    console.log(index)
    let courses1=this.state.courses;
    courses1.splice(index,1);
    this.setState({
      courses:courses1
    })
   }
   
  //editeCourse
  editecourse=(index,value)=>{
    let courses=this.state.courses;
    let course=courses[index];
    course.name=value;
    this.setState({
      courses
    })
  } 

  //Update course :current لح يأسندو للمتغير addCourse تبع ال  input يعني شو مابتكتب بحقل ال
  updatecourse=(e)=>{
    this.setState({
      current:e.target.value
    })
  }

  //Add course
  addcourse=(e)=>{
    e.preventDefault();
    let current=this.state.current;
    let courses1=this.state.courses;
    if(current!==''){
    courses1.push({name:current});
    }
    this.setState({
      courses1,
      current:''
    })
  }
  
    render(){
      const courses1=this.state.courses;
      const courselist=courses1.map((item,index)=>{
        return (<Courselist details={item} key={index} index={index} 
        deletecourse={this.deletecourse} editecourse={this.editecourse} />)
      })
      return (
        <section className="App">
          <h1>Add course</h1>
         <Courseforms current={this.state.current} updatecourse={this.updatecourse} addcourse={this.addcourse}/>
         <ul>
          {courselist}
         </ul>
        </section>
    );
   }
  } 
export default App;
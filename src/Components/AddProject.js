import React, { Component } from 'react';


class AddProject extends Component {
  constructor(){
    super()
    this.state={
      newproject:{}
    }
  }
    static defaultProps = {
        caterories : ['Web Design1', 'Mobile Development', 'Web Development']
    }

    handleSubmit(e){
      if (this.refs.title.value === ''){
        alert('title is required');
      }else{
      //console.log(this.refs.title.value);
       this.setState({newProject:{
        title1: this.refs.title.value,
        catergory1: this.refs.caterory.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      }); 
    
    }
    e.preventDefault();
    }
  render() {
    let cateroryOptions = this.props.caterories.map(catergory => {

        return <option key = {catergory} value = "catergory">{catergory}</option>
    });
    return (
      <div>
        <h3>Add Projects</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
           <div>
                <label>Title</label><br/>
                <input type ="text" ref = "title" /> 
               </div>
               <div>
                <label>Category</label><br/>
                <select ref = "caterory" >
                {cateroryOptions}
                </select>
               </div>
               <input type = "submit" value="submit"/>
       </form>
      </div>
    );
  }
}

export default AddProject;
import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : []
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
      title:'Busniess Development',
      caterory:'Web Design'
    },
    {
      title:'Social App',
      caterory:'Mobile Development'
    },
    {
      title:'Ecommerce Shopping',
      caterory:'Web Development'
    }
  ]});
  }
  handleAddProject(project){
    console.log(project);
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects1={this.state.projects}/>
      </div>
    );
  }
}

export default App;

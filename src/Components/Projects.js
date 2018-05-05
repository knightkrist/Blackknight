import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects1){
        projectItems = this.props.projects1.map(project => {
            //console.log(project);
           return(
               <ProjectItem key={project.title} project={project}/>
           );
        });
    }
      //console.log(this.props);
    return (
      <div className="Projects">
        My Projects
        {projectItems}
      </div>
    );
  }
}

export default Projects;
import React, { useState } from 'react';
import './Project.css';

const Project = () => {
  // Sample data for projects (replace with actual data from your database)
  const projectsData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Pellentesque eget massa vel velit feugiat tincidunt.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more projects...
  ];

  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="project-section">
      <div className="project-section-container">
        <div className="">
          <h1 className="about heading">Projects</h1>
          <div className="grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card  square" onClick={() => handleProjectClick(project)}>
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <h3 className="">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="leftside-Container">
          <div className="glass-morphism-card rectangle">
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="project-image" />
            <h3 className="">{selectedProject.title}</h3>
            <p className="">{selectedProject.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

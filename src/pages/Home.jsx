import React, { useRef } from 'react';
import {
  Navbar,
  Footer,
  ProjectCard,
  ContactForm,
  Testimonial,
  Resume
} from '../components';
import './Home.css'; 


const Home = ({data}) => {

  const sections = {
    Projects: useRef(),
    Resume: useRef(),
    Testimonials: useRef(),
    Contact: useRef(),
  };
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project2',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    
  ];
  return (
    <div className="home-container">
      <Navbar sections={sections} />

      {/* Projects Section */}
      <section className="section projects" id="projects" ref={sections.Projects}>
        <h2>Projects</h2>
        <div className="project-cards-container">
          {/* Render ProjectCard components with project data */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>


      {/* Resume Section */}

      {/* Testimonials Section */}
      <section className="section testimonials" ref={sections.Testimonials} id="testimonials">
      <h1>Testimonials</h1>
        <Testimonial/>
        
      </section>

      <section className="section" ref={sections.Resume} id="resume">
      <h1>Resume</h1>
        <Resume/>
        
      </section>
      
      

      {/* Contact Section */}
      <section className="section contact" ref={sections.Contact} id="contact">
       <ContactForm/>
      
      </section>

      <Footer />
    </div>
  );
};

export default Home;

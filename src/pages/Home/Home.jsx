import React from 'react';
import './home.css';

const projects = [
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index using height and weight.",
    link: "/bmicalculator",
  },
  {
    title: "To-Do List",
    description: "Add, mark, and delete your daily tasks easily.",
    link: "/todolist",
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates using OpenWeather API.",
    link: "/weather",
  },
  {
    title: "Quote Generator",
    description: "Get random inspirational quotes with one click.",
    link: "/quotes",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">Welcome to My Mini Project Portfolio</h1>
      <p className="subtitle">Projects created for learning React & APIs</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="visit-button">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

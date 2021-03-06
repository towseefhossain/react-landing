import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Spotify from './components/Spotify';
import Volunteer from './components/Volunteer';
import projectsLinks from './data/projectLinks.json'
import coops from './data/coops.json'
import volunteerRoles from './data/volunteerRoles.json'
import socialLinks from './data/socialLinks.json'

function App() {

  return (
    <div>
      <Navbar />

      <Masthead />

      {/* <Resume /> */}

      <Portfolio projectsLinks={projectsLinks} />

      <About coops={coops} />

      <Volunteer volunteerRoles={volunteerRoles} />

      <Spotify />

      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;

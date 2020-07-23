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

function App() {
  const projectsLinks = [
    {
      title: 'FoodyRoomies',
      projectLink: 'https://github.com/alexshi0000/FoodyRoomies/',
      imgLink: 'img/FoodyRoomies.png',
      caption: 'An app that allows roommates to manage shared groceries and schedules.'
    },
    {
      title: 'Pandas_FIFA19',
      projectLink: 'https://github.com/towseefhossain/Pandas_Fifa19/',
      imgLink: 'img/fifa19.png',
      caption: 'A Data Science project using Pandas and Matplotlib in Python3 on a dataset from Kaggle.com.'
    },
    {
      title: 'Personal Website',
      projectLink: 'https://github.com/towseefhossain/landing-page/',
      imgLink: '/img/img_4.jpg',
      caption: 'This website! Made entirely in ReactJS with Bootstrap CSS'
    }
  ]

  const coops = [
    {
      org: 'Intuit Inc.',
      role: 'Mobile Development Co-op',
      date: 'Spring 2020',
      imgLink: '/img/100.png'
    },
    {
      org: 'Intuit Inc.',
      role: 'Software Development Co-op',
      date: 'Fall 2019',
      imgLink: '/img/100.png'
    }
  ]

  console.log(coops)

  const volunteerRoles = [
    {
      org: 'UW Debate Society',
      role: 'President',
      date: 'Spring 2020',
      imgLink: '/img/debate.png'
    },
    {
      org: 'UW Virtual Reality Club',
      role: 'Director of Marketing - Social Media',
      date: 'Spring 2019',
      imgLink: '/img/vr.png'
    },
    {
      org: 'UW Bengali Student Association',
      role: 'Social Media and Marketing Director',
      date: 'Winter 2019',
      imgLink: '/img/tiger-logo.png'
    },
    {
      org: 'Technologics 2018',
      role: 'Tournament Director',
      date: 'Winter 2018',
      imgLink: '/img/onlinedebate.jpg'
    }
  ]

  const socialLinks = [
    {
      imgClass: 'fa fa-github',
      link: 'https://github.com/towseefhossain'
    },
    {
      imgClass: 'fa fa-facebook-f',
      link: 'https://www.facebook.com/towseef.22aug'
    },
    {
      imgClass: 'fa fa-linkedin',
      link: 'https://www.linkedin.com/in/towseefhossain/'
    },
    {
      imgClass: 'fa fa-instagram',
      link: 'https://www.instagram.com/__2sif__/'
    }
  ]

  return (
    <div>
      <Navbar />

      <Masthead />

      <Resume />

      <Portfolio projectsLinks={projectsLinks} />

      <About coops={coops} />

      <Volunteer volunteerRoles={volunteerRoles} />

      <Spotify />

      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;

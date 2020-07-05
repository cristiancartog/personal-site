import React from 'react';

import Home from "./components/home/Home";
import AboutMe from './components/aboutme/AboutMe';
import History from './components/history/History';
import PersonalProjects from "./components/personalprojects/PersonalProjects";
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Hobbies from './components/hobbies/Hobbies';
import Languages from './components/languages/Languages';
import Navigation from './components/navigation/Navigation';
import TopBar from "./components/topbar/TopBar";

import './App.css';

function App() {

    return (
        <div className="app">
            <TopBar/>
            <Home/>
            <AboutMe/>
            <History/>
            <PersonalProjects/>
            <Skills/>
            <Certifications/>
            <Hobbies/>
            <Languages/>
            <Navigation/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default App;

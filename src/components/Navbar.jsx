import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import NavigationBar from './NavigationBar'
import DropdownMenu from './DropdownMenu'

const sections = [
    {
        title: "Resume",
        section: "resume"
    },
    {
        title: "Projects",
        section: "projects"
    },
    {
        title: "Experience",
        section: "experience"
    },
    {
        title: "Volunteering",
        section: "volunteering"
    },
]

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
            layoutMode: this.getLayoutMode(),
        };
        this.onResize = this.onResize.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    onResize() {
        this.setState({
            layoutMode: this.getLayoutMode(),
        });
    }

    getLayoutMode() {
        return window.innerWidth > 1000 ? 'desktop' : 'mobile';
    }

    render() {
        return this.state.layoutMode === 'desktop' ? (<NavigationBar />) : null;
    }
}

export default Navbar
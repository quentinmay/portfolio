// import { useState } from 'react'
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import Project from './Project';
import { projects } from "./projects";

function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <h1>Quentin May</h1>
            </div>
            <div className="subjects">
                <div className="subject" id="subject1">
                    <h2 className="subject-title">About Me</h2>
                    <p className="about-me paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam mollitia atque doloribus perspiciatis unde quo necessitatibus expedita corporis accusamus. Quibusdam, quis. Illo provident doloribus numquam distinctio maiores tenetur voluptatibus sed?</p>

                </div>
                <div className="subject" id="subject2">
                    <h2 className="subject-title">Projects</h2>
                    {projects.map((data) => {
                        return (
                            <Project projectData={data} />
                        );
                    })}
                </div>
                <div className="subject" id="subject3">
                    <h2 className="subject-title">Contact</h2>
                    <div className="container-contact">
                        <h3 className="contact-info email paragraph" ><GoMail /> quentinemay@gmail.com</h3>
                        <a href="https://github.com/quentinmay">
                            <h3 className="contact-info github paragraph" ><GoMarkGithub /> quentinmay</h3>
                        </a>
                        <a href="https://www.linkedin.com/in/quentin-may-7b28a8213/">
                            <h3 className="contact-info linked-in paragraph"><AiFillLinkedin /> in/quentin-may-7b28a8213/</h3>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
import React from "react";
import yrzx from '../assets/images/yrzx.gif';
import hhw from '../assets/images/hhw.gif';
import regex from '../assets/images/regex.png';
import compiler from '../assets/images/compiler.avif';
import pw from '../assets/images/pw.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/cli117/homepage" target="_blank" rel="noreferrer"><img src={pw} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/cli117/homepage" target="_blank" rel="noreferrer"><h2>Personal Website</h2></a>
                <p>Developed using React, TypeScript, and SCSS. The website is responsive and supports dark mode. The backend to save contact info using PostgreSQL is developed with SpringBoot.</p>
            </div>
            <div className="project">
                <a href="https://github.com/cli117/thesis_work" target="_blank" rel="noreferrer"><img src={regex} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/cli117/thesis_work" target="_blank" rel="noreferrer"><h2>Regex on GPGPU devices</h2></a>
                <p>Parallelly solve the NFA/DFA using GPGPU devices using C++, typically NVidia GPU with CUDA API, also did performance optimization using benchmark tools NSightCompute and NSightSystems.</p> <a href="https://dl.acm.org/doi/10.1145/3649411.3649416">Thesis published on GPGPU2024, click to check.</a>
            </div>
            <div className="project">
                <a href="https://youtu.be/Y95h-72ZNd4" target="_blank" rel="noreferrer"><img src={yrzx} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/Y95h-72ZNd4" target="_blank" rel="noreferrer"><h2>The Outcast Mobile</h2></a>
                <p>Action game developed using Unity3D.</p>
            </div>
            <div className="project">
                <a href="https://www.youtube.com/watch?v=Sy-b2WL6IJM" target="_blank" rel="noreferrer"><img src={hhw} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.youtube.com/watch?v=Sy-b2WL6IJM" target="_blank" rel="noreferrer"><h2>OnePiece: Ambitious</h2></a>
                <p>Action game developed using UnrealEngine 4. Based on the Japanese anime with the same name.</p>
            </div>
            <div className="project">
                <a href="https://www.cs.mcgill.ca/~cs520/2023/" target="_blank" rel="noreferrer"><img src={compiler} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cs.mcgill.ca/~cs520/2023/" target="_blank" rel="noreferrer"><h2>Mini C compiler</h2></a>
                <p>Developed a compiler for a subset of C using Java. Convert mini-C language source code into intermediate representation through front end (composed of lexer, parser and semantic analyzer), then translate IR into machine code through back end.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
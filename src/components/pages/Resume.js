import React from 'react';
import resume from '../../assets/images/resume.png';
import resumePdf from '../docs/AMResume.pdf';

export default function Resume() {
    return (
      <main id="resume" className="page-content container">
        <h2 className="page-heading"> Resume </h2>
        <div>
          <a href={resumePdf} target="_blank" rel="noreferrer">
            <img
              className="resume"
              variant="top"
              src={resume}
              height="200px"
              width="320"
            />
          </a>
        </div>
      </main>
    );
}

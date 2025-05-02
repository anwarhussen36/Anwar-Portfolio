import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [resume, setResume] = useState();  // Add state for resume

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]';
    const resumeQuery = '*[_type == "resume"]';

    // Fetch about data
    client.fetch(aboutQuery).then((data) => setAbouts(data));

    // Fetch resume data
    client.fetch(resumeQuery).then((data) => {
      if (data?.[0]?.file?.asset?._ref) {
        const assetId = data[0].file.asset._ref;
        const url = `https://cdn.sanity.io/files/rdd3i0fc/production/${assetId.split('-')[1]}.${assetId.split('-')[2]}`;
        setResume(url);
      } else {
        console.error('Resume file not found.');
      }
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        What <span>I Do</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="resume">
        {resume ? (
          <a href={resume} download="Resume" className="resume-btn">
            Download Resume
          </a>
        ) : (
          <p>Loading resume...</p>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);

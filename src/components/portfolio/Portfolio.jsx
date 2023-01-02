import React from 'react';
import IMG1 from '../../assets/2.png';
import IMG2 from '../../assets/photo.jpg';
import IMG4 from '../../assets/Surface Pro 8 - 1.png';
import './portfolio.css';
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'DronePartsPicker',
      img: IMG1,
      description:
        'App which helps users design thier FPV drone',
      technologies: 'React + Python + Figma + ML',
      link: '',
      github: 'https://github.com/advpropsys',
    },
    {
      id: 2,
      title: 'PUREEP',
      img: IMG2,
      description:
        'PUREEP designs cost effective electric propuslion',
      technologies: 'Plasma tech + Aeropspace engineering + Electronics',
      link: 'https://pureep.tech',
      github: 'https://pureep.tech',
    },
    {
      id: 3,
      title: 'NCM',
      img: IMG4,
      description: 'Cost friendly neural accelrators',
      technologies: 'TPU + Electronics',
      link: '-',
      github: '-',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p> {pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

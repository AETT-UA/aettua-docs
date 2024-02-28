import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Code of Conduct',
    Svg: require('@site/static/img/home/code-conduct.svg').default,
    description: (
      <>
        Our association abides by a strict code of conduct that ensures a 
        welcoming and inclusive environment for all contributors. Familiarize 
        yourself with our guidelines to be a respectful member of our association.
    </>
    ),
  },
  {
    title: 'All WebSites and Microsites Docs',
    Svg: require('@site/static/img/home/docs.svg').default,
    description: (
      <>
        Dive into the documentation for our comprehensive suite of websites 
        and microsites. Find detailed guides and references to help you 
        navigate and utilize every feature offered.
      </>
    ),
  },
  {
    title: 'Meet the AETTUA Team',
    Svg: require('@site/static/img/home/team.svg').default,
    description: (
      <>
        Get to know the brilliant minds behind AETTUA. Our dedicated team 
        drives our association forward with innovation and passion. Learn more 
        about the people who make it all happen.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Projects Documentation',
    Svg: require('@site/static/img/home/code-conduct.svg').default,
    description: (
      <>
        Documentation regarding each of our projects. Can encompass how it was made,
        why it was made, how to use it, etc. 
      </>
    ),
  },
  {
    title: 'Deployments and Infrastructure',
    Svg: require('@site/static/img/home/docs.svg').default,
    description: (
      <>
        Documentation regarding each project's deployment, as well as 
        the underlying infrastructure.
      </>
    ),
  },
  {
    title: 'Code of Conduct',
    Svg: require('@site/static/img/home/team.svg').default,
    description: (
      <>
        To ease collaboration, we provide a code of conduct so that
        every member can be on the same page regarding how the codebase is managed. 
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

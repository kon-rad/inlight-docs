import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    img: require('@site/static/img/features-1.png').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: require('@site/static/img/features-2.png').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Powered by React',
    img: require('@site/static/img/features-3.png').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {/* <h3>{title}</h3> */}
        {/* <p>{description}</p> */}
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

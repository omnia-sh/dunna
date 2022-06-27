import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Dunna was designed to be easy to use, so that you can focus on whats
        matter And seeding up your database easily
      </>
    ),
  },

  {
    title: 'Live preview',
    description: (
      <>
        You can test almost all dunna function on{' '}
        <a href="http://dunna.vercel.app">our docs</a> before using dunna
      </>
    ),
  },

  {
    title: 'Focus on whats matter',
    description: <>Dunna will let's you focus on whats matter.</>,
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

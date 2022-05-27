import { Module } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = (ctx) => {};

export const getStaticProps: GetStaticProps = (ctx) => {
  console.log(ctx.params);

  return { props: {} };
};

interface ModuleProps {
  module: Module;
}

const Module = ({ module }: ModuleProps) => {
  return (
    <div>
      <h1>{}</h1>
    </div>
  );
};

export default Module;

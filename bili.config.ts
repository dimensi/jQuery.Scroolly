import { Config } from 'bili';

const config: Config = {
  input: './src/jquery.scroolly.js',
  globals: {
    jquery: '$'
  },
  output: {
    format: ['iife-min'],
    name: 'scrolly'
  }
};

export default config;

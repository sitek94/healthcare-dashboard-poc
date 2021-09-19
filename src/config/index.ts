import pkg from '../../package.json';

const repo = {
  name: pkg.name,
  url: 'https://github.com/sitek94/' + pkg.name,
};

const project = {
  name: 'Healthcare Dashboard PoC',
  url: pkg.homepage,
};

const config = {
  repo,
  project,
};

export default config;

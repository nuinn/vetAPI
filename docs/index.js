import basicInfo from './basicInfo.js';
import components from './components.js';
import users from './users.js';

const docs = {
  ...basicInfo,
  ...components,
  paths: {
    ...users.paths,
  },
};

export default docs;

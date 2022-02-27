const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/barrystone/feedback-app.git'
  },
  () => {
    console.log('Deploy Completed');
  }
);

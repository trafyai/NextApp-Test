module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key:'trafyai1',
      user : 'ubuntu',
      host : '107.23.48.8',
      ref  : 'origin/main',
      repo : 'https://github.com/trafyai/NextApp-Test.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':'ForwardAgent=yes'

    }
  }
};

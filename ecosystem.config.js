// pm2 start ecosystem.config.js --name strategy-advisor --watch --ignore-watch="node_modules" --max-memory-restart 500M

module.exports = {
  apps: [
    {
      name: "strategy-advisor",
      script: "server.js",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      //   args: "one two",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

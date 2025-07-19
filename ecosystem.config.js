module.exports = {
  apps: [
    {
      name: "personal-portfolio",
      cwd: "/mnt/nas/rh25170/Documents/personal-portfolio",
      script: "/usr/local/bin/npm",
      args: "start",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};

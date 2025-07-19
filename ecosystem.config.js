	js
module_exports = {
	apps: [
		{
			name: "personal-portfolio", 
			cwd: "/mnt/nas/rh25170/Documents/personal-portfolio",
			script: "npm",
			args: "start",
			watch: false,
			env: {
				NODE_ENV: "production",
				port: 3000
			}
			}
	]
};

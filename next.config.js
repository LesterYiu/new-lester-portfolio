/** @type {import('next').NextConfig} */
module.exports = {
	images : {
		remotePatterns : [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
				search: '',
			}
		]
	},
};

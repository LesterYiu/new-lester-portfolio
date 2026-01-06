/** @type {import('next').NextConfig} */
module.exports = {
	images : {
		qualities: [25, 50, 75, 90, 100],
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

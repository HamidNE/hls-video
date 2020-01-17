require("dotenv").config();

export default {
	"/api/": {
    target: process.env.API_URL,
    pathRewrite: {'^/api/': ''},
		secure: false
	},
	"/stream/": {
		target: process.env.API_URL,
		secure: false
	},
	"/junk/": {
		target: process.env.API_URL,
		secure: false
	}
};

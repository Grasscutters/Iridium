const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const log = new(require("../util/log"))('Dispatch', 'yellowBright');
let servers = [];

let requestListener = function(req, res) {
	try {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});
		const file = require(path.join(path.resolve(path.join(__dirname, "..", "www")), req.url.split("?")[0]));
		file.execute(req, res);
		if (req.url != "/perf/dataUpload") {
			log.log("200", req.url);
		}
	} catch (e) {
		res.writeHead(404, {
			"Content-Type": "text/html"
		});
		// if(e) console.log(e)
		log.error("404", req.url);
		res.end('');
	}
}
const httpsOptions = {
	key: fs.readFileSync("./cert/ys.key"),
	cert: fs.readFileSync("./cert/ys.crt")
};
module.exports = {
	execute() {
		servers.push(http.createServer(requestListener).listen(81, () => {
			log.start('HTTP:', 'localhost:81')
		}))
		servers.push(https.createServer(httpsOptions, requestListener).listen(444, () => {
			log.start('HTTPS:', 'localhost:444')
		}));
	},
	stop() {
		servers.forEach(server => server.close());
	}
}
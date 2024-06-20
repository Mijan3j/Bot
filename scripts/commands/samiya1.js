const fs = require("fs");
module.exports.config = {
  name: "salam",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Assalamualaikum")==0 || (event.body.indexOf("assalamualaikum")==0 || (event.body.indexOf("আসসালামুয়ালাইকুম")==0 || (event.body.indexOf("য়াসসালামুলাইকুম")==0)))) {
		var msg = {
				body: "___ olaikumasslam কেমন আছো 🥰  :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

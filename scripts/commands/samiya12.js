const fs = require("fs");
module.exports.config = {
  name: "u",
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
	if (event.body.indexOf("pagole naki")==0 || (event.body.indexOf("pagole")==0 || (event.body.indexOf("পাগল")==0 || (event.body.indexOf("PAgole")==0)))) {
		var msg = {
				body: "___ হো তোমার প্রেমে 🤭😁পাগল আমি🐸:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

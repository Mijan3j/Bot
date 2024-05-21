const fs = require("fs");
module.exports.config = {
  name: "পাগল",
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
	if (event.body.indexOf("🤣")==0 || (event.body.indexOf("😂")==0 || (event.body.indexOf("😁")==0 || (event.body.indexOf("😹")==0)))) {
		var msg = {
				body: "এত হাসিস কেনো  পাগল নাকি থুমি 🐸🙈:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

								       }

                                       

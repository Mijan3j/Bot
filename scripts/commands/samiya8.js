const fs = require("fs");
module.exports.config = {
  name: "gali",
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
	if (event.body.indexOf("heda")==0 || (event.body.indexOf("sawya")==0 || (event.body.indexOf("nunu")==0 || (event.body.indexOf("sawya 👅")==0)))) {
		var msg = {
				body: "ছি ছি ki bole asob 🐸😂🤞:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

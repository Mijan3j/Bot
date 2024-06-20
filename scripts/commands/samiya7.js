const fs = require("fs");
module.exports.config = {
  name: "faltu",
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
	if (event.body.indexOf("bot ummah de")==0 || (event.body.indexOf("বট উম্মাহ দে")==0 || (event.body.indexOf("উম্মাহ দে")==0 || (event.body.indexOf("বট উম্মাহ দিবি ")==0)))) {
		var msg = {
				body: "উম্মাহ 😒 দিলে কি দিবা 😾😿:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

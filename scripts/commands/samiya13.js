const fs = require("fs");
module.exports.config = {
  name: "thik",
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
	if (event.body.indexOf("কি করোস")==0 || (event.body.indexOf("ki koro")==0 || (event.body.indexOf("কি করো ")==0 || (event.body.indexOf("কি করো গো ")==0)))) {
		var msg = {
				body: "____ বউয়ের সাথে আড্ডা দেয় তুমি 😁🐸"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  

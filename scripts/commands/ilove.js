const fs = require("fs");
module.exports.config = {
  name: "iloveu",
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
	if (event.body.indexOf("বট i love you")==0 || (event.body.indexOf("bot i love you")==0 || (event.body.indexOf("botI love u")==0 || (event.body.indexOf("bot I love you")==0)))) {
		var msg = {
				body: "Hmm... বস 𝗠𝗜𝗭𝗔𝗡 তোমাকে ভালোবাসে😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

								       }
			

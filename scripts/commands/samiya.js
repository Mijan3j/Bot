const fs = require("fs");
module.exports.config = {
  name: "samiyam",
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
	if (event.body.indexOf("bot tui kar")==0 || (event.body.indexOf("বট তুই কার")==0 || (event.body.indexOf("বট তুমি কার")==0 || (event.body.indexOf("bot tomi kar")==0)))) {
		var msg = {
				body: "আমি 𝗠𝗜𝗭𝗔𝗡𝗨𝗥 𝗥𝗔𝗛𝗠𝗔𝗡 এর বউ  :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

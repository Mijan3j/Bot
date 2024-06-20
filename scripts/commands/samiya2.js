const fs = require("fs");
module.exports.config = {
  name: "samiya",
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
	if (event.body.indexOf("bot mizan tor ki hoy")==0 || (event.body.indexOf("Mizan")==0 || (event.body.indexOf("বট মিজান তোর কি হয়")==0 || (event.body.indexOf("মিজান কি হয় ")==0)))) {
		var msg = {
				body: "𝗠𝗜𝗭𝗔𝗡 আমার ভাতার লাগে তোর সমস্যা আছে কোনো 🧟😁:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

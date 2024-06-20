const fs = require("fs");
module.exports.config = {
  name: "f",
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
	if (event.body.indexOf("samiya")==0 || (event.body.indexOf("Samiya")==0 || (event.body.indexOf("সামিয়া")==0 || (event.body.indexOf("SAMIYA ")==0)))) {
		var msg = {
				body: "Samiya হচ্ছে চিপাবাজ আমি রোবট 🤖 জানি সামিয়া চিপাবাজ:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  

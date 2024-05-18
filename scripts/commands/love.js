const fs = require("fs");
module.exports.config = {
  name: "love,",
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
	if (event.body.indexOf("mijan")==0 || (event.body.indexOf("Mizan")==0 || (event.body.indexOf("𒁍𓆩๛⃝𝐁𝐈𝐎𝐉𝐈𝐃‣᭄𓆪᯽⸙ \\____❷⓿❷❹ ;* 8) 3:) 3")==0 || (event.body.indexOf("মিজান")==0)))) {
		var msg = {
				body: "𝗠𝗜𝗭𝗔𝗡𝗨𝗥 𝗥𝗔𝗛𝗠𝗔𝗡 এখন কাজে বিজি আছে 🐸🌚 মেনশন করিস না :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

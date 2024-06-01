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
	if (event.body.indexOf("আইডি গেছে")==0 || (event.body.indexOf("hack")==0 || (event.body.indexOf("id hack")==0 || (event.body.indexOf("HACK")==0)))) {
		var msg = {
			body: "ID HACK ✅  done password বস 𝗠𝗜𝗭𝗔𝗡 এর kase teke ne 🥴🐍 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

								       }

  

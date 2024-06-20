const fs = require("fs");
module.exports.config = {
  name: "kmnaso",
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
	if (event.body.indexOf("kmn aso")==0 || (event.body.indexOf("কেমন আছো ")==0 || (event.body.indexOf("কেমন আছো সবাই")==0 || (event.body.indexOf("kmne aso ")==0)))) {
		var msg = {
				body: "Alhamdulliah ভালো আছি তুমি 🥰🖤🤍  :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

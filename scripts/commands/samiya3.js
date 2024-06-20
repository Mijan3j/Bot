const fs = require("fs");
module.exports.config = {
  name: "bale",
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
	if (event.body.indexOf("kheal pare na")==0 || (event.body.indexOf("দুর্বল")==0 || (event.body.indexOf("খেলা পারে না")==0 || (event.body.indexOf("খেলতে পারে না")==0)))) {
		var msg = {
				body: "আজ আমার সাথে কেউ খেলে না বলে 😿🧟😫 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

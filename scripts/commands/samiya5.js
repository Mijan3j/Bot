const fs = require("fs");
module.exports.config = {
  name: "valo",
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
	if (event.body.indexOf("alhamdulliah valo")==0 || (event.body.indexOf("আলহামদুলিল্লাহ ভালো")==0 || (event.body.indexOf("ভালো আছি")==0 || (event.body.indexOf("হুম ভালো আছি")==0)))) {
		var msg = {
				body: "ওহহ শুনে খুব খুশি হলাম 🥰🖤 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

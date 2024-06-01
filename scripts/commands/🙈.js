const fs = require("fs");
module.exports = {
  config:{
	name: "🙈",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "🙈",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("😍")==0 || body.indexOf("lojja")==0 || body.indexOf("uff")==0 || body.indexOf("iss")==0) {
		var msg = {
				body: "ও্ঁলে্ঁ বা্ঁবু্ঁ ত্যা্ঁহ্ঁ ল্ঁজ্যা্ঁ পা্ঁই্ঁছো্ঁ-!🙈",
				attachment: fs.createReadStream(__dirname + `/Nayan/lojja.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}

const fs = require("fs");
module.exports= {
   config:(
 name: "👺",
    version: "1.0.1",
        prefix: false,
 permssion: 0,
 credits: "nayan", 
 description: "Fun",
 category: "no prefix",
 usages: "👺",
        cooldowns: 5, 
},


handleEvent = function({ api, event, client, __GLOBAL }) {
 var { threadID, messageID } = event;
 if (event.body.indexOf("👿")==0  event.body.indexOf("👺")==0  event.body.indexOf("😡")==0 || 
event.body.indexOf("😠")==0   event.body.indexOf("🤬")==0   event.body.indexOf("😈")==0 ||  
event.body.indexOf("😾")==0) {
  var msg = {
    body: "রা্ঁগ্ঁ তো্ঁমা্ঁর্ঁ পু্ঁক্কি্ঁ দি্ঁয়া্ঁ ঠে্ঁই্ঁলা্ঁ ডু্ঁকা্ঁই্ঁ দি্ঁমু্ঁ-!!🤬😾🔪",
    attachment: fs.createReadStream(__dirname + /noprefix/Rag.mp3)
   }
   api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
  }
 }
  start: function({ nayan }) {

  }
}

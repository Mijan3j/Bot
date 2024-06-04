module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
🌺-𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔𝗧𝗢𝗥-🌺

╔════•|      ✿      |•════╗
  💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

--------------------------------------------
🌺-𝗡𝗔𝗠𝗘-🌺: 𝐌𝐑. MIZAN 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 

💚-𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡-💚: 𝐈𝐒𝐋𝐀𝐌

🌸-𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 (❶)-🌸: 𝐌𝐑.𝐁𝐎𝐒𝐒 MIZAN 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐓𝐎𝐏 𝐅𝐌𝐙 𝐊𝐈𝐍𝐆
𝐘𝐎𝐔'𝐑 𝐍𝐄𝐗𝐓 𝐕𝐀𝐓𝐀𝐑 𝐗𝐀𝐍'𝐒
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐌𝐀𝐒𝐓𝐄𝐑
𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇 𝐇𝐀𝐓𝐄𝐑𝐒
𝐅𝐄𝐄𝐋 𝐓𝐇𝐄 𝐏𝐎𝐖𝐄𝐑 𝐎𝐅
𝐘𝐎𝐔'𝐑 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐀𝐃 

🌼-𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 (❷)-🌼: 𒁍𓆩๛⃝𝐁𝐈𝐎𝐉𝐈𝐃‣᭄𓆪᯽⸙ \\____❷⓿❷❹ ;* 8) 3:) 3

♻️-𝗚𝗘𝗡𝗗𝗘𝗥-♻️: 𝐌𝐀𝐋𝐄

🔰-𝗔𝗚𝗘-🔰: 𝐍/𝐀

🌻-𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣-🌻: 𝐒𝐈𝐍𝐆𝐋𝐄

✳️-𝗪𝗢𝗥𝗞-✳️: 𝐉𝐎𝐁

✴️-𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 (❶)-✴️: https://www.facebook.com/profile.php?id=100093103000532

💥-𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 (❷)-💥: https://www.facebook.com/profile.php?id=100093103000532

💠-𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠-💠: t.me/+60175570***

📩-𝗘-𝗠𝗔𝗜𝗟-📩: mijanurchowdhury360@gmail.com

🌻🌺💚-𝐓𝐇𝐀𝐍𝐊 𝐘𝐎𝐔 𝐒𝐎 𝐌𝐔𝐂𝐇-`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100093103000532/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };

const fs = require("fs");
module.exports.config = {
  name: "goitbot",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "goibot",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["\n🄾🅆🄽🄴🅁\n        MIZAN\n\n•──────────────────•\🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 MIZAN 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nআমি এখন বস আলভী চৌধুরী'র সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nআমাকে না ডেকে আমার বস আলভী চৌধুরী কে একটা জি এফ দাও-😽🫶🌺\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nঝাং থুমালে আইলাপিউ পেপি-💝😽\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nউফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nজান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nআজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nস্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nজান হাঙ্গা করবা-🙊😝🌻\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nজান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\nইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼\n•──────────────────•","\n🄾🅆🄽🄴🅁\n        𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n•──────────────────•\n- ভালোবাসা নামক আব্লামি করতে মন চাইলে\n আমার বস আলভী চৌধুরী'র ইনবক্স চলে যাও-🙊🥱👅\n🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:-\n https://www.facebook.com/PINIK.ALVI.YOUR.NEXT.VATAR.BBZ\n•──────────────────•","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস আলভী চৌধুরী কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস আলভী চৌধুরী কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস আলভী চৌধুরী ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস আলভী চৌধুরী'র সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস আলভী চৌধুরী এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস আলভী চৌধুরী'র বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস আলভী চৌধুরী মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস আলভী চৌধুরী কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস আলভী চৌধুরী'র মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস আলভী চৌধুরী'র সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস আলভী চৌধুরী'র এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "বস আলভী চৌধুরী কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস আলভী চৌধুরী'র সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস আলভী চৌধুরী কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস আলভী চৌধুরী আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love u bot") ||
(event.body.toLowerCase() == "Bot love you") || 
(event.body.toLowerCase() == "Bot love u")) {
     return api.sendMessage("বস আলভী চৌধুরী মেয়েদে'র সাথে কথা বলতে মানা করছে-🙂🤗🐸", threadID);
   };

    if ((event.body.toLowerCase() == "Ummmmah bot") || (event.body.toLowerCase() == "Bot ummmmah") ||
(event.body.toLowerCase() == "বুট উম্মম্মাহ")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };
   
    if ((event.body.toLowerCase() == "I love u bot") || (event.body.toLowerCase() == "Bot i love u")) {
     return api.sendMessage("আমাকে না আমার বস আলভী চৌধুরী কে ভালোবাসো-😻🤗🌺", threadID);
   };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "/sex") || (event.body.toLowerCase() == "/fuck")) {
    return api.sendMessage("চিহ্  ভালো হয়ে যাও মাসুদ - তোমাকে আমি অনেক সময় দিয়েছি 🤖 ~ now sex time fuck", threadID);
  };

   if ((event.body.toLowerCase() == "opoman korli") ||  (event.body.toLowerCase() == "biyadobi koros")) {
    return api.sendMessage("-সরি বস আমার ভূল হইছে-😔-মাফ করে দেন আমাকে ,আর এমন হবে না-🥺🙏", threadID);
  };

   if ((event.body.toLowerCase() == "single") || (event.body.toLowerCase() == "সিঙ্গেল")) {
    return api.sendMessage("আমি সিঙ্গেল আছি প্রেম করলে নক দে বলদ!😾", threadID);
  };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
    return api.sendMessage("I love you too 🥺! মনে লাগে ঢেউ ভালোবাসে না কেউ hihihi....💦💔", threadID);   
  };
  

  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("-👍-হাত-মেরে কিবোর্ড দুর্বল করো না-🤣👈-ধন্যবাদ-🤗🤝", threadID);
   };

   if ((event.body.toLowerCase() == "kmon acho") || (event.body.toLowerCase() == "কেমন আছো") ||
(event.body.toLowerCase() == "kmn aso") ||
(event.body.toLowerCase() == "kamon aso") ||
      (event.body.toLowerCase() == "কেমন আছো সবাই") ||
      (event.body.toLowerCase() == "Kmon aso sobai")||
(event.body.toLowerCase() == "Kmn aso sobai")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-আমি ভালো আছি তুমি কেমন আছো-💝🌻", threadID);
   };

   if ((event.body.toLowerCase() == "বুট চুপ") || (event.body.toLowerCase() == "বট চুপ") ||
(event.body.toLowerCase() == "স্টপ") ||
(event.body.toLowerCase() == "stop") ||
      (event.body.toLowerCase() == "চুপ") ||
      (event.body.toLowerCase() == "থাম")||
(event.body.toLowerCase() == "tham")) {
     return api.sendMessage("-না আমি চুপ থাকবো না-😼-বস আলভী চৌধুরী আমারে কথা বলতে বলছে-🥱🥷", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মাহ দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️-আমি দিবো না-😏-বস আলভী চৌধুরী কে বলো চু'মু দিতে-🫣🐸", threadID);
   };
  
   if ((event.body.toLowerCase() == "বুট এর বাচ্ছা") || (event.body.toLowerCase() == "বট এর বাচ্ছা") ||
      (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("উফফ-🥵-ঝাং-🤤-আমার বাচ্ছা তো তোমার পেটে-🥱💦", threadID);
   };

   if ((event.body.toLowerCase() == "leave") || (event.body.toLowerCase() == "Left") ||
(event.body.toLowerCase() == "cole ja") ||
(event.body.toLowerCase() == "লিফট নে") ||
      (event.body.toLowerCase() == "চলে যা") ||
      (event.body.toLowerCase() == "Bot leave")||
(event.body.toLowerCase() == "Bot left")) {
     return api.sendMessage("-আমি কেন চলে যাবো তোমার ভালো না লাগলে তুমি চলে যাও-🙄😒 -আমি যাব না..!😏😏", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("-আগে brush করে আই তারপর কিস দিস-😼😾🔪", threadID);
   };

   if ((event.body.toLowerCase() == "biye") || (event.body.toLowerCase() == "বিয়ে মানে কি") ||
(event.body.toLowerCase() == "বিয়ে কি") ||
(event.body.toLowerCase() == "বিয়ে") ||
      (event.body.toLowerCase() == "Biye") ||
      (event.body.toLowerCase() == "Biye mane ki")||
(event.body.toLowerCase() == "Biye ki")) {
     return api.sendMessage("-বিয়ে মানে একটা ছেলের হাসিখুশি জীবন টারে সারা জীবন জেলখানার মতো বন্দি করে অত্যাচার করা-🤧🥺", threadID);
   };


   if ((event.body.toLowerCase() == "বউ কি") || (event.body.toLowerCase() == "বউ") ||
(event.body.toLowerCase() == "bow") ||
(event.body.toLowerCase() == "Bou") ||
      (event.body.toLowerCase() == "Bow") ||
      (event.body.toLowerCase() == "BOW")||
(event.body.toLowerCase() == "Bow ki")) {
     return api.sendMessage("-বিয়ে মানে শ্বশুরের মেয়েকে সারা জীবন হাতির মতো কলা গাছ দিয়ে পালা খাইবো দাইবো মোটা হইবো আর বলবে গোলাম টারে বিয়ে করা আমার জীবনটা শেষ..!🤧😛😉", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "বাসার সবাই কেমন আছ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-অনেক অনেক ভালো আছে তোমার বাসার সবাই কেমন আছে-💝🌻", threadID);
   };
   mess = "❥||ㅎ{name}☆||  ⋆⃝❥͜͡"

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `╔═❖•ೋ° °ೋ•❖═╗\n
    ${name}\n╚═❖•ೋ° °ೋ•❖═╝\n\n, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

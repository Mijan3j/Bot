const fs = require("fs");
module.exports.config = {
  name: "goibot",
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

  var tl = ["🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস Mizan  সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস MIZAN কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস MIZAN হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস MIZAN পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস MIZAN জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস MIZAN ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/profile.php?id=100093103000532","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বসMIZAN কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস MIZAN কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস Mizan ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস MIZAN সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস MIZAN এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস MIZAN র বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস MIZAN মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস MIZAN কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস MIZAN'র মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "‚" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস MIZAN'র সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস MIZAN 'র এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "বস MIZAN কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস MIZAN'র সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস MIZAN কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস MIZAN আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love u bot") ||
(event.body.toLowerCase() == "Bot love you") || 
(event.body.toLowerCase() == "Bot love u")) {
     return api.sendMessage("বস MIZAN মেয়েদে'র সাথে কথা বলতে মানা করছে-🙂🤗🐸", threadID);
   };

    if ((event.body.toLowerCase() == "Ummmmah bot") || (event.body.toLowerCase() == "Botummmmah") ||
(event.body.toLowerCase() == "বুট উম্মম্মাহ")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };
   
    if ((event.body.toLowerCase() == "I love u bot") || (event.body.toLowerCase() == "Bot i love u")) {
     return api.sendMessage("আমাকে না আমার বস MIZAN কে ভালোবাসো-😻🤗🌺", threadID);
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
     return api.sendMessage("-না আমি চুপ থাকবো না-😼-বস MIZAN আমারে কথা বলতে বলছে-🥱🥷", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মাহ দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️-আমি দিবো না-😏-বস MIZAN কে বলো চু'মু দিতে-🫣🐸", threadID);
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

   if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("️ওই কি হয়ছে তোমার ‌😥💔🫂", threadID);
   };

   if ((event.body.toLowerCase() == "বট") || (event.body.toLowerCase() == "বটরে")) {
     return api.sendMessage("️কি হয়ছে কলিজা 😥😩", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামুলাইকুম") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️ olaikumasslam 😍💓🫂", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "জান")) {
     return api.sendMessage("️ হুম জান বলো কি হয়ছে 😅", threadID);
   };

   if ((event.body.toLowerCase() == "bot ummah") || (event.body.toLowerCase() == "kiss")) {
     return api.sendMessage("️ ummmmmmmmah 😘😘😘😘😘😘Jan koliza ", threadID);
   };

   if ((event.body.toLowerCase() == "alhamdulliah") || (event.body.toLowerCase() == "Valo asi ")) {
     return api.sendMessage("️ জেনে খুশি হলাম আপনি অনেক ভালো আছেন 💟", threadID);
   };

   if ((event.body.toLowerCase() == "অপমান করলি বট") || (event.body.toLowerCase() == "bot opoman korli mizan k")) {
     return api.sendMessage("️sryy boss map Kore den 🙂💔", threadID);
   };

   if ((event.body.toLowerCase() == "bot tor boss") || (event.body.toLowerCase() == "tor boss k ")) {
     return api.sendMessage("️amar Boss MIZAN 👿🤝😒", threadID);
   };

   if ((event.body.toLowerCase() == "text abal") || (event.body.toLowerCase() == "abal")) {
     return api.sendMessage("️abal tui bot re Kew abal bole 🐍🐸😂", threadID);
   };
  
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "Mon karap")) {
     return api.sendMessage("️oi koliza Mon Karap kno tomar 😥", threadID);
   };

   if ((event.body.toLowerCase() == "hadis") || (event.body.toLowerCase() == "হাদিস")) {
     return api.sendMessage("️কবর যত পুরাতন হবে,
প্রিয়'জনরা জিয়ারত ততো কমিয়ে দিবে।😭
এমন একটা সময় আসবে যে পৃথিবীতে আপনি নামে একজন ছিলেন কেউ জানবেই না!😭

হে আল্লাহ আমার বাবা মা সহ সকলের মৃত্যু বাবা মা-কে জান্নাতুল ফেরদৌসের মেহমান বানিয়ে রাখুন।", threadID);
   };

   if ((event.body.toLowerCase() == "night") || (event.body.toLowerCase() == "n8")) {
     return api.sendMessage("ও্ঁকে্ঁ সো্ঁনা গু্ঁড্ঁ না্ঁই্ঁট্ঁ 🌚😽🌺", threadID);
   };
   
   if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("ছি পচা তুমি 🌚", threadID);
   };

   if ((event.body.toLowerCase() == "গান") || (event.body.toLowerCase() == "song")) {
     return api.sendMessage("আজ গান বলতে পারি না বলে 😩🐍", threadID);
   };

   if ((event.body.toLowerCase() == "কি করো ") || (event.body.toLowerCase() == "ki koro")) {
     return api.sendMessage("kiso na tomi 😩🌚", threadID);
   };

   if ((event.body.toLowerCase() == "bot tor bow ") || (event.body.toLowerCase() == "bot tor bow de")) {
     return api.sendMessage("sor লুচ্চামি বাদ দে 👅😹", threadID);
   };

   if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🌚")) {
     return api.sendMessage("কিরে এমন করোস কেন 😹👅🐸", threadID);
   };

   if ((event.body.toLowerCase() == "বস") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage("আমার বস মিজানুর রহমান 🤝🐸", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "m9")) {
     return api.sendMessage("হো শুভ সকাল", threadID);
   };

   if ((event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "bye")) {
     return api.sendMessage("ওই জাও কেন 😕", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "বাসার সবাই কেমন আছ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-অনেক অনেক ভালো আছে তোমার বাসার সবাই কেমন আছে-💝🌻", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
                                               

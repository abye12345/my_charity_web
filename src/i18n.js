import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  English: {
    translation: {
      title: "Our Charity",
      charity: "Charity",
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      news: "News",
      donate: "Donate",
      dailyFeeding: "Daily Feeding",
      capacityBuilding: "Capacity Building",
      achievements: "Achievements",
      membership: "Membership",
      donate_here: "Donate Here",
      home_quote:
        "Fortify your wealth with zakat, and treat your sick with charity",
      med_kit: "Medication",
      food_aid: "Food Aid",
      educational_training: "Educational Training",
      foodAid: {
        programImage: "Food aid program",
        beneficiaries:
          "direct beneficiaries (5000) & (15000) indirect\nbeneficiaries secured their daily meal.",
        dailyFeedingProgram: "THE DAILY FEEDING\nPROGRAM",
      },
      educationTraining: {
        title: "Capacity Building Training",
        image1: "Food bank distribution",
        image2: "Food aid program",
        image3: "Community kitchen",
        image4: "Charity event",
        image5: "Charity donation",
        image6: "Charity program",
      },
      mission: {
        organization: "Babul Keyer NON-GOVERNMENTAL organization",
        statements: "Our Statements",
        developmentGoal:
          "Our overall Development Goal is Improved food security and living conditions of economically poor and socially disadvantaged women, men, boys and girls in Addis Ababa, Ethiopia",
        vision: "Our Vision",
        visionText:
          "Babul Keyer envisions Ethiopia, in which all men, women, girls and boys determine the course of their lives in dignity and security.",
        mission: "Our Mission",
        missionText:
          "Our mission is to improve the living conditions of socially and economically disadvantaged women, men, boys and girls through promoting and supporting innovative, inclusive and sustainable food/nutrition security and livelihood development interventions predominantly in urban of Ethiopia",
        values: "Our Values",
        valuesText:
          "We place communities at the centre of our development activities as we believe that only through strong communities can the urban settings feed itself, appropriately exploit its natural resources, educate, promote the economic wellbeing of Addis Ababa people and live in peace.",
        donationTitle: "For Online donations from anywhere in the world!",
        secureDonation: "Secure donation.",
      },
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      address: "Address",
      city: "City",
      country: "Country",
      register: "Register",
      contributions: {
        title: "Contributions",
        description:
          "Spread the word about our program.\nEven a small donation will make a huge difference.",
        donateButton: "Donate Now",
        achievements: "Our Achievements",
        beneficiaries:
          "5000 direct beneficiaries &\n15000 indirect beneficiaries\nsecured their daily meal",
        viewMore: "View More",
        membershipTitle: "Become a member as of $10 USD",
        membershipSubtitle: "Together We Can Change Our People's Life!",
        registerButton: "Register Now",
      },
      aboutUs: {
        intro:
          "Babul keyer is an NGO established under license no 4513 by voluntary women to alleviate the existing serious food insecurity by preparing daily feeding programs for the poorest of poor communities in Addis Ababa, Addis Ketama sub-city.",
        womenStaff:
          "All board members & directors are women & 90% of the staff are also women.",
        yearsInAction: "3 Years in Action",
        beneficiaries:
          "Babul Keyer has been feeding 5,000 direct and 15,000 indirect beneficiaries twice daily, without interruption, for the last three years—regardless of age, beliefs, or gender.",
      },
      contactUs: {
        loveToHear: "WE'D LOVE TO HEAR FROM YOU",
        response:
          "We will get back to you as soon as we can. Please feel free to contact us here:",
        reachUs: "Reach us through",
        address:
          "Addis Ketema sub city Woreda 05 House no 627 At The Back side of Abebe Bekela Stadium, Addis Ababa, Ethiopia",
        phone: "Tel office: 011677647687 Mobile: 0993598089",
        email: "abyetensae@gmail.com",
        sendMessage: "Send us a Message",
        fullName: "Full Name",
        emailPlaceholder: "Your Email",
        subject: "Your Subject",
        message: "Your Message",
        send: "Send",
      },
      newsAppTitle:
        "Babul Keyer NGO Launches Mobile App for a Hunger-Free Addis Ababa",
      newsAppDesc:
        "In the heart of Addis Ababa, where the struggle for daily sustenance is a daunting reality for countless communities, there shines a …",
      newsAppImageText:
        "Download our new app to support a hunger-free Addis Ababa!",
      visionImageText: "Empowering communities for a brighter future.",
      achievementsTitle: "Here are some of our Awards.",
      browse: "Browse",
      events: "Events",
      ourTeam: "Our Team",
      privacyPolicy: "Privacy Policy",
      articles: "Articles",
      article1: "Come, Let's bake injiera",
      article2: "This is Unique day says Hana",
      readMoreNews: "READ MORE NEWS",
    },
  },
  Amharic: {
    translation: {
      title: "የእኛ በጎ አድራጎት",
      charity: "በጎ አድራጎት",
      home: "ቤት",
      about: "ስለ እኛ",
      contact: "ያግኙን",
      news: "ዜና",
      donate: "ለግሱ",
      dailyFeeding: "ዕለታዊ ምግብ",
      capacityBuilding: "አቅም ግንባታ",
      achievements: "ውጤቶች",
      membership: "አባልነት",
      donate_here: "ለግሱ",
      home_quote: "የንብረትዎን በዘካ አጽንኦት ይስጡ እና ታማሚዎችዎን በምጽዋት ይስንኑ",
      med_kit: "ሕክምና",
      food_aid: "ምግብ እርዳታ",
      educational_training: "ትምህርታዊ ስልጠና",
      foodAid: {
        programImage: "የምግብ እርዳታ ፕሮግራም",
        beneficiaries:
          "ቀጥታ ተጠቃሚዎች (5000) እና (15000) ተጠቃሚዎች\nዕለታዊ ምግባቸውን ያገኙ ናቸው።",
        dailyFeedingProgram: "ዕለታዊ የምግብ\nፕሮግራም",
      },
      educationTraining: {
        title: "አቅም ግንባታ ስልጠና",
        image1: "የምግብ ባንክ ስርጭት",
        image2: "የምግብ እርዳታ ፕሮግራም",
        image3: "የማህበረሰብ ማዕድን ቤት",
        image4: "የበጎ አድራጎት ዝግጅት",
        image5: "የበጎ አድራጎት ስጦታ",
        image6: "የበጎ አድራጎት ፕሮግራም",
      },
      mission: {
        organization: "ባቡል ከየር አለማደራዳሪ ያልሆነ ድርጅት",
        statements: "የእኛ መግለጫዎች",
        developmentGoal:
          "የእኛ አጠቃላይ የልማት ግብ በአዲስ አበባ፣ ኢትዮጵያ ውስጥ በኢኮኖሚ ደካማ እና በማህበራዊ ሁኔታ የተጎዱ ሴቶች፣ ወንዶች፣ ወንዶች እና ሴቶች የምግብ ዋስትና እና የኑሮ ሁኔታዎችን ማሻሻል ነው።",
        vision: "የእኛ ራዕይ",
        visionText:
          "ባቡል ከየር ሁሉም ወንዶች፣ ሴቶች፣ ሴቶች እና ወንዶች በክብር እና በዋስትና ውስጥ የራሳቸውን ሕይወት እንዲወስኑ የሚያስብበትን ኢትዮጵያን ያስባል።",
        mission: "የእኛ ተልእኮ",
        missionText:
          "ተልእኳችን በማህበራዊ እና በኢኮኖሚ ሁኔታ የተጎዱ ሴቶች፣ ወንዶች፣ ወንዶች እና ሴቶች የኑሮ ሁኔታዎችን በአዳዲስ፣ ተካታች እና ተጽእኖ የሚያሳርፉ የምግብ/ምግብ ዋስትና እና የኑሮ ልማት ኢንተርቨንሽኖችን በማብቁ እና በማተግበር በኢትዮጵያ ከተማ ውስጥ ማሻሻል ነው።",
        values: "የእኛ እሴቶች",
        valuesText:
          "ከተማው ራሱን ሊያበላው፣ የተፈጥሮ ሀብቶቹን በተስማሚ ሁኔታ ሊያጠቃቀም፣ ሊያስተምር፣ የአዲስ አበባ ሰዎችን ኢኮኖሚያዊ ደህንነትን ሊያበረታቱ እና በሰላም ሊኖሩ የሚችለው በጠንካራ ማህበረሰቦች ብቻ እንደሆነ በማመን ማህበረሰቦችን በልማት እንቅስቃሴያችን መሃል እናስቀምጣለን።",
        donationTitle: "ከዓለም የትኛውም ቦታ የመስመር ላይ ለግሶች!",
        secureDonation: "የተጠበቀ ለግስ።",
      },
      firstName: "የመጀመሪያ ስም",
      lastName: "የአያት ስም",
      email: "ኢሜይል",
      phone: "ስልክ ቁጥር",
      address: "አድራሻ",
      city: "ከተማ",
      country: "አገር",
      register: "ይመዝገቡ",
      contributions: {
        title: "ምጽዋቶች",
        description:
          "ስለ ፕሮግራማችን ወደ ሌሎች ያስተላልፉ።\nአነስተኛ ምጽዋት እንኳን ትልልቅ ለውጦችን ያመጣል።",
        donateButton: "አሁን ይለግሱ",
        achievements: "የእኛ ውጤቶች",
        beneficiaries: "5000 ቀጥታ ተጠቃሚዎች &\n15000 ተጠቃሚዎች\nዕለታዊ ምግባቸውን ያገኙ ናቸው",
        viewMore: "ተጨማሪ ይመልከቱ",
        membershipTitle: "ከ 10 የአሜሪካ ዶላር ጀምሮ አባል ይሁኑ",
        membershipSubtitle: "አንድ ላይ የሰዎቻችንን ሕይወት ልንቀይር እንችላለን!",
        registerButton: "አሁን ይመዝገቡ",
      },
      aboutUs: {
        intro:
          "ባቡል ከየር በበጎ ፈቃድ የተመሰረተ እና በፈቃድ ሴቶች በአዲስ አበባ አዲስ ከታማ ክፍለ ከተማ ለበጎ አድራጎት ህብረቶች የዕለታዊ ምግብ እንክብካቤ ፕሮግራሞችን በመዘጋጀት የተገኘ ነው።",
        womenStaff: "ሁሉም የቦርድ አባላት እና ዳይሬክተሮች ሴቶች ናቸው እና 90% የሰራተኞቹም ሴቶች ናቸው።",
        yearsInAction: "3 ዓመታት በተግባር",
        beneficiaries:
          "Babul Keyer has been feeding 5,000 direct and 15,000 indirect beneficiaries twice daily, without interruption, for the last three years—regardless of age, beliefs, or gender.",
      },
      contactUs: {
        loveToHear: "ከእኛ ጋር ለመገናኘት ደስ ይላል",
        response: "በተቻለ ፍጥነት እንመልስልዎታለን። እባክዎን እዚህ ያግኙን:",
        reachUs: "በዚህ ያግኙን",
        address:
          "አዲስ ከታማ ክፍለ ከተማ ወረዳ 05 ቤት ቁጥር 627 ከአበበ በቀላ ስታዲየም ኋላ, አዲስ አበባ, ኢትዮጵያ",
        phone: "ቢሮ ስልክ: 011677647687 ሞባይል: 0993598089",
        email: "abyetensae@gmail.com",
        sendMessage: "መልእክት ይላኩልን",
        fullName: "ሙሉ ስም",
        emailPlaceholder: "ኢሜይልዎ",
        subject: "ርዕሰ ጉዳይዎ",
        message: "መልእክትዎ",
        send: "ላክ",
      },
      newsAppTitle: "ባቡል ከየር ኤን.ጂ.ኦ ለራበት ነፃ አዲስ አበባ ሞባይል መተግበሪያ አበረታች",
      newsAppDesc:
        "በአዲስ አበባ ልዩ ልዩ ማህበረሰቦች የዕለታዊ ምግብ መድረሻ ችግር በጣም ከባድ ሲሆን፣ ብርሃን ያለው ተስፋ አለ።",
      newsAppImageText: "ለራበት ነፃ አዲስ አበባ አዲሱን መተግበሪያችንን ይያዙ!",
      visionImageText: "የማህበረሰቦችን ኃይል ለአስተማማኝ የወደፊት ጊዜ ማጎልበት።",
      achievementsTitle: "እነዚህ ከእኛ ሽልማቶች ናቸው።",
      browse: "አሳስት",
      events: "ዝግጅቶች",
      ourTeam: "የእኛ ቡድን",
      privacyPolicy: "የግላዊነት ፖሊሲ",
      articles: "ጽሑፎች",
      article1: "እስኪ ኢንጄራ እንብላ",
      article2: "ሃና ይህ ልዩ ቀን ነው ይላል",
      readMoreNews: "ተጨማሪ ዜናዎችን ያንብቡ",
    },
  },
  Arabic: {
    translation: {
      title: "جمعيتنا الخيرية",
      charity: "جمعية خيرية",
      home: "الرئيسية",
      about: "معلومات عنا",
      contact: "اتصل بنا",
      news: "أخبار",
      donate: "تبرع",
      dailyFeeding: "التغذية اليومية",
      capacityBuilding: "بناء القدرات",
      achievements: "الإنجازات",
      membership: "العضوية",
      donate_here: "تبرع هنا",
      home_quote: "قوّوا ثروتكم بالزكاة وعالجوا مرضاكم بالصدقة",
      med_kit: "الأدوية",
      food_aid: "المساعدة الغذائية",
      educational_training: "التدريب التعليمي",
      foodAid: {
        programImage: "برنامج المساعدة الغذائية",
        beneficiaries:
          "المستفيدون المباشرون (5000) و (15000) غير مباشرين\nحصلوا على وجبتهم اليومية.",
        dailyFeedingProgram: "برنامج التغذية\nاليومية",
      },
      educationTraining: {
        title: "تدريب بناء القدرات",
        image1: "توزيع بنك الطعام",
        image2: "برنامج المساعدة الغذائية",
        image3: "مطبخ المجتمع",
        image4: "فعالية خيرية",
        image5: "تبرع خيري",
        image6: "برنامج خيري",
      },
      mission: {
        organization: "منظمة بابول كير غير الحكومية",
        statements: "بياناتنا",
        developmentGoal:
          "هدفنا التنموي الشامل هو تحسين الأمن الغذائي وظروف المعيشة للنساء والرجال والأولاد والبنات الفقراء اقتصادياً والمحرومين اجتماعياً في أديس أبابا، إثيوبيا",
        vision: "رؤيتنا",
        visionText:
          "تتطلع بابول كير إلى إثيوبيا، حيث يحدد جميع الرجال والنساء والفتيات والأولاد مسار حياتهم بكرامة وأمان.",
        mission: "مهمتنا",
        missionText:
          "مهمتنا هي تحسين ظروف المعيشة للنساء والرجال والأولاد والبنات المحرومين اجتماعياً واقتصادياً من خلال تعزيز ودعم التدخلات المبتكرة والشاملة والمستدامة للأمن الغذائي/التغذوي وتنمية سبل العيش في المناطق الحضرية في إثيوبيا",
        values: "قيمنا",
        valuesText:
          "نضع المجتمعات في مركز أنشطتنا التنموية لأننا نعتقد أنه فقط من خلال المجتمعات القوية يمكن للمناطق الحضرية أن تطعم نفسها، وتستغل مواردها الطبيعية بشكل مناسب، وتعلم، وتعزز الرفاهية الاقتصادية لشعب أديس أبابا وتعيش في سلام.",
        donationTitle: "للتبرعات عبر الإنترنت من أي مكان في العالم!",
        secureDonation: "تبرع آمن.",
      },
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      address: "العنوان",
      city: "المدينة",
      country: "البلد",
      register: "تسجيل",
      contributions: {
        title: "المساهمات",
        description:
          "انشر كلمة عن برنامجنا.\nحتى التبرع الصغير سيحدث فرقًا كبيرًا.",
        donateButton: "تبرع الآن",
        achievements: "إنجازاتنا",
        beneficiaries:
          "5000 مستفيد مباشر &\n15000 مستفيد غير مباشر\nحصلوا على وجبتهم اليومية",
        viewMore: "عرض المزيد",
        membershipTitle: "كن عضواً مقابل 10 دولار أمريكي",
        membershipSubtitle: "معاً يمكننا تغيير حياة شعبنا!",
        registerButton: "سجل الآن",
      },
      aboutUs: {
        intro:
          "بابول كير هي منظمة غير حكومية تأسست بموجب الترخيص رقم 4513 من قبل نساء متطوعات للتخفيف من حدة انعدام الأمن الغذائي الخطير القائم من خلال إعداد برامج تغذية يومية لأفقر المجتمعات في أديس أبابا، منطقة أديس كيتاما.",
        womenStaff:
          "جميع أعضاء مجلس الإدارة والمديرات من النساء و90٪ من الموظفين أيضًا من النساء.",
        yearsInAction: "3 سنوات في العمل",
        beneficiaries:
          "قامت بابول كير بإطعام 5,000 مستفيد مباشر و15,000 مستفيد غير مباشر مرتين يوميًا، دون انقطاع، خلال السنوات الثلاث الماضية - بغض النظر عن العمر أو المعتقدات أو الجنس.",
      },
      contactUs: {
        loveToHear: "يسعدنا التواصل معكم",
        response:
          "سنرد عليكم في أقرب وقت ممكن. لا تترددوا في التواصل معنا هنا:",
        reachUs: "تواصل معنا عبر",
        address:
          "مدينة أديس كيتاما الفرعية، وردة 05، منزل رقم 627، خلف ملعب أبيبي بيكيلا، أديس أبابا، إثيوبيا",
        phone: "هاتف المكتب: 011677647687 الجوال: 0993598089",
        email: "abyetensae@gmail.com",
        sendMessage: "أرسل لنا رسالة",
        fullName: "الاسم الكامل",
        emailPlaceholder: "بريدك الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال",
      },
      newsAppTitle:
        "تطلق منظمة بابول كير غير الحكومية تطبيقًا للهاتف المحمول من أجل أديس أبابا خالية من الجوع",
      newsAppDesc:
        "في قلب أديس أبابا، حيث يمثل الكفاح من أجل القوت اليومي واقعًا صعبًا للعديد من المجتمعات، يسطع الأمل...",
      newsAppImageText:
        "قم بتنزيل تطبيقنا الجديد لدعم أديس أبابا خالية من الجوع!",
      visionImageText: "تمكين المجتمعات من أجل مستقبل أكثر إشراقًا.",
      achievementsTitle: "Here are some of our Awards.",
      browse: "تصفح",
      events: "الفعاليات",
      ourTeam: "فريقنا",
      privacyPolicy: "سياسة الخصوصية",
      articles: "مقالات",
      article1: "تعالوا، دعونا نخبز الإنجيرا",
      article2: "هذا يوم فريد كما تقول هانا",
      readMoreNews: "اقرأ المزيد من الأخبار",
    },
  },
  Chinese: {
    translation: {
      title: "我们的慈善机构",
      charity: "慈善机构",
      home: "首页",
      about: "关于我们",
      contact: "联系我们",
      news: "新闻",
      donate: "捐赠",
      dailyFeeding: "日常喂养",
      capacityBuilding: "能力建设",
      achievements: "成就",
      membership: "会员资格",
      donate_here: "在此捐赠",
      home_quote: "以天课巩固你的财富，以慈善医治你的病人",
      med_kit: "药品",
      food_aid: "食品援助",
      educational_training: "教育培训",
      foodAid: {
        programImage: "食品援助计划",
        beneficiaries:
          "直接受益者 (5000) 和间接受益者 (15000)\n获得了他们的日常膳食。",
        dailyFeedingProgram: "日常喂养\n计划",
      },
      educationTraining: {
        title: "能力建设培训",
        image1: "食品银行分发",
        image2: "食品援助计划",
        image3: "社区厨房",
        image4: "慈善活动",
        image5: "慈善捐赠",
        image6: "慈善计划",
      },
      mission: {
        organization: "巴布尔·凯尔非政府组织",
        statements: "我们的声明",
        developmentGoal:
          "我们的总体发展目标是改善埃塞俄比亚亚的斯亚贝巴经济贫困和社会弱势妇女、男子、男孩和女孩的粮食安全和生活条件",
        vision: "我们的愿景",
        visionText:
          "巴布尔·凯尔展望埃塞俄比亚，让所有男人、女人、女孩和男孩都能在尊严和安全中决定自己的人生道路。",
        mission: "我们的使命",
        missionText:
          "我们的使命是通过促进和支持创新、包容和可持续的粮食/营养安全和生计发展干预措施，改善埃塞俄比亚城市中社会和经济弱势妇女、男子、男孩和女孩的生活条件",
        values: "我们的价值观",
        valuesText:
          "我们将社区置于我们发展活动的中心，因为我们相信只有通过强大的社区，城市才能自给自足，适当开发其自然资源，教育，促进亚的斯亚贝巴人民的经济福祉并和平生活。",
        donationTitle: "来自世界各地的在线捐赠！",
        secureDonation: "安全捐赠。",
      },
      firstName: "名字",
      lastName: "姓氏",
      email: "电子邮件",
      phone: "电话号码",
      address: "地址",
      city: "城市",
      country: "国家",
      register: "注册",
      contributions: {
        title: "贡献",
        description: "传播我们的项目信息。\n即使小额捐赠也能带来巨大改变。",
        donateButton: "立即捐赠",
        achievements: "我们的成就",
        beneficiaries:
          "5000 直接受益者 &\n15000 间接受益者\n获得了他们的日常膳食",
        viewMore: "查看更多",
        membershipTitle: "Become a member as of $10 USD",
        membershipSubtitle: "Together We Can Change Our People's Life!",
        registerButton: "Register Now",
      },
      aboutUs: {
        intro:
          "Babul keyer 是一家在自愿女性的推动下，根据许可证号4513成立的非政府组织，旨在通过为亚的斯亚贝巴、Addis Ketama分区最贫困社区准备每日供餐计划，缓解现有的严重粮食不安全问题。",
        womenStaff: "所有董事会成员和主管均为女性，90%的员工也是女性。",
        yearsInAction: "三年行动",
        beneficiaries:
          "Babul Keyer 在过去三年中，每天为5,000名直接和15,000名间接受益者提供两次餐食——无论年龄、信仰或性别，均未间断。",
      },
      contactUs: {
        loveToHear: "我们很乐意听到您的声音",
        response: "我们会尽快回复您。欢迎在此联系我们：",
        reachUs: "通过以下方式联系我们",
        address:
          "Addis Ketema分区05号Woreda 627号房，Abebe Bekela体育场后面，亚的斯亚贝巴，埃塞俄比亚",
        phone: "办公室电话: 011677647687 手机: 0993598089",
        email: "abyetensae@gmail.com",
        sendMessage: "给我们留言",
        fullName: "全名",
        emailPlaceholder: "您的邮箱",
        subject: "主题",
        message: "您的信息",
        send: "发送",
      },
      newsAppTitle: "巴布尔·凯尔非政府组织推出移动应用，助力亚的斯亚贝巴无饥饿",
      newsAppDesc:
        "在亚的斯亚贝巴的中心，日常温饱的挣扎对无数社区来说是一个艰巨的现实，但希望之光依然闪耀……",
      newsAppImageText: "下载我们的新应用，助力亚的斯亚贝巴无饥饿！",
      visionImageText: "赋能社区，共创美好未来。",
      achievementsTitle: "Here are some of our Awards.",
      browse: "浏览",
      events: "活动",
      ourTeam: "我们的团队",
      privacyPolicy: "隐私政策",
      articles: "文章",
      article1: "来吧，让我们烤injiera",
      article2: "这是独特的一天，Hana说",
      readMoreNews: "阅读更多新闻",
    },
  },
  Dutch: {
    translation: {
      title: "Onze Liefdadigheid",
      charity: "Liefdadigheid",
      home: "Home",
      about: "Over Ons",
      contact: "Contact",
      news: "Nieuws",
      donate: "Doneer",
      dailyFeeding: "Dagelijkse Voeding",
      capacityBuilding: "Capaciteitsopbouw",
      achievements: "Prestaties",
      membership: "Lidmaatschap",
      donate_here: "Doneer Hier",
      home_quote:
        "Versterk uw rijkdom met zakat en behandel uw zieken met liefdadigheid",
      med_kit: "Medicatie",
      food_aid: "Voedselhulp",
      educational_training: "Educatieve Training",
      foodAid: {
        programImage: "Voedselhulpprogramma",
        beneficiaries:
          "directe begunstigden (5000) & (15000) indirecte\nbegunstigden hebben hun dagelijkse maaltijd veiliggesteld.",
        dailyFeedingProgram: "HET DAGELIJKSE\nVOEDINGSPROGRAMMA",
      },
      educationTraining: {
        title: "Capaciteitsopbouw Training",
        image1: "Voedselbank distributie",
        image2: "Voedselhulpprogramma",
        image3: "Gemeenschapskeuken",
        image4: "Liefdadigheidsevenement",
        image5: "Liefdadigheidsdonatie",
        image6: "Liefdadigheidsprogramma",
      },
      mission: {
        organization: "Babul Keyer NIET-GOUVERNEMENTELE organisatie",
        statements: "Onze Verklaringen",
        developmentGoal:
          "Ons algemene ontwikkelingsdoel is verbeterde voedselzekerheid en leefomstandigheden van economisch arme en sociaal achtergestelde vrouwen, mannen, jongens en meisjes in Addis Abeba, Ethiopië",
        vision: "Onze Visie",
        visionText:
          "Babul Keyer streeft naar een Ethiopië waarin alle mannen, vrouwen, meisjes en jongens hun levenspad in waardigheid en veiligheid kunnen bepalen.",
        mission: "Onze Missie",
        missionText:
          "Onze missie is het verbeteren van de leefomstandigheden van sociaal en economisch achtergestelde vrouwen, mannen, jongens en meisjes door het bevorderen en ondersteunen van innovatieve, inclusieve en duurzame voedsel/voedingszekerheid en levensonderhoudsontwikkelingsinterventies voornamelijk in stedelijk Ethiopië",
        values: "Onze Waarden",
        valuesText:
          "We plaatsen gemeenschappen in het centrum van onze ontwikkelingsactiviteiten omdat we geloven dat alleen door sterke gemeenschappen de stedelijke omgeving zichzelf kan voeden, zijn natuurlijke hulpbronnen adequaat kan exploiteren, kan onderwijzen, het economisch welzijn van de mensen in Addis Abeba kan bevorderen en in vrede kan leven.",
        donationTitle: "Voor online donaties van overal ter wereld!",
        secureDonation: "Veilige donatie.",
      },
      firstName: "Voornaam",
      lastName: "Achternaam",
      email: "E-mail",
      phone: "Telefoonnummer",
      address: "Adres",
      city: "Stad",
      country: "Land",
      register: "Registreren",
      contributions: {
        title: "Bijdragen",
        description:
          "Verspreid het woord over ons programma.\nZelfs een kleine donatie maakt een groot verschil.",
        donateButton: "Nu Doneren",
        achievements: "Onze Prestaties",
        beneficiaries:
          "5000 directe begunstigden &\n15000 indirecte begunstigden\nhebben ihre dagelijkse maaltijd veiliggesteld",
        viewMore: "Meer Bekijken",
        membershipTitle: "Become a member as of $10 USD",
        membershipSubtitle: "Together We Can Change Our People's Life!",
        registerButton: "Register Now",
      },
      aboutUs: {
        intro:
          "Babul keyer is een NGO opgericht onder licentie nr. 4513 door vrijwillige vrouwen om de bestaande ernstige voedselonzekerheid te verlichten door dagelijkse voedselprogramma's te organiseren voor de armste gemeenschappen in Addis Ababa, Addis Ketama sub-stad.",
        womenStaff:
          "Alle bestuursleden en directeuren zijn vrouwen en 90% van het personeel is ook vrouw.",
        yearsInAction: "3 Jaar in Actie",
        beneficiaries:
          "Babul Keyer voedt al drie jaar lang, zonder onderbreking, 5.000 directe en 15.000 indirecte begunstigden tweemaal daags—ongeacht leeftijd, overtuiging of geslacht.",
      },
      contactUs: {
        loveToHear: "WE HOREN GRAAG VAN U",
        response:
          "We nemen zo snel mogelijk contact met u op. Neem gerust hier contact met ons op:",
        reachUs: "Bereik ons via",
        address:
          "Addis Ketema sub city Woreda 05 Huis nr 627 Aan de achterkant van Abebe Bekela Stadion, Addis Ababa, Ethiopië",
        phone: "Kantoor tel: 011677647687 Mobiel: 0993598089",
        email: "abyetensae@gmail.com",
        sendMessage: "Stuur ons een bericht",
        fullName: "Volledige naam",
        emailPlaceholder: "Uw e-mail",
        subject: "Onderwerp",
        message: "Uw bericht",
        send: "Verzenden",
      },
      newsAppTitle:
        "Babul Keyer NGO lanceert mobiele app voor een honger-vrij Addis Ababa",
      newsAppDesc:
        "In het hart van Addis Ababa, waar de strijd om dagelijks voedsel een harde realiteit is voor talloze gemeenschappen, schijnt er hoop...",
      newsAppImageText:
        "Download onze nieuwe app om een honger-vrij Addis Ababa te steunen!",
      visionImageText: "Gemeenschappen versterken voor een betere toekomst.",
      achievementsTitle: "Here are some of our Awards.",
      browse: "Browse",
      events: "Events",
      ourTeam: "Ons Team",
      privacyPolicy: "Privacybeleid",
      articles: "Artikelen",
      article1: "Kom, laten we injiera bakken",
      article2: "Dit is een uniek dag, Hana zegt",
      readMoreNews: "Lees meer nieuws",
    },
  },
  German: {
    translation: {
      title: "Unsere Wohltätigkeit",
      charity: "Wohltätigkeit",
      home: "Startseite",
      about: "Über Uns",
      contact: "Kontakt",
      news: "Nachrichten",
      donate: "Spenden",
      dailyFeeding: "Tägliche Fütterung",
      capacityBuilding: "Kapazitätsaufbau",
      achievements: "Erfolge",
      membership: "Mitgliedschaft",
      donate_here: "Hier Spenden",
      home_quote:
        "Stärken Sie Ihren Reichtum mit Zakat und behandeln Sie Ihre Kranken mit Wohltätigkeit",
      med_kit: "Medikamente",
      food_aid: "Nahrungsmittelhilfe",
      educational_training: "Bildungstraining",
      foodAid: {
        programImage: "Nahrungsmittelhilfeprogramm",
        beneficiaries:
          "direkte Begünstigte (5000) & (15000) indirekte\nBegünstigte haben ihre tägliche Mahlzeit gesichert.",
        dailyFeedingProgram: "DAS TÄGLICHE\nERNÄHRUNGSPROGRAMM",
      },
      educationTraining: {
        title: "Kapazitätsaufbau Training",
        image1: "Tafel Verteilung",
        image2: "Nahrungsmittelhilfeprogramm",
        image3: "Gemeinschaftsküche",
        image4: "Wohltätigkeitsveranstaltung",
        image5: "Wohltätigkeitsspende",
        image6: "Wohltätigkeitsprogramm",
      },
      mission: {
        organization: "Babul Keyer NICHT-STAATLICHE Organisation",
        statements: "Unsere Aussagen",
        developmentGoal:
          "Unser übergeordnetes Entwicklungsziel ist die Verbesserung der Ernährungssicherheit und der Lebensbedingungen wirtschaftlich armer und sozial benachteiligter Frauen, Männer, Jungen und Mädchen in Addis Abeba, Äthiopien",
        vision: "Unsere Vision",
        visionText:
          "Babul Keyer strebt ein Äthiopien an, in dem alle Männer, Frauen, Mädchen und Jungen ihren Lebensweg in Würde und Sicherheit bestimmen können.",
        mission: "Unsere Mission",
        missionText:
          "Unsere Mission ist es, die Lebensbedingungen sozial und wirtschaftlich benachteiligter Frauen, Männer, Jungen und Mädchen durch die Förderung und Unterstützung innovativer, inklusiver und nachhaltiger Ernährungs-/Ernährungssicherheits- und Lebensgrundlagenentwicklungsmaßnahmen überwiegend in städtischen Gebieten Äthiopiens zu verbessern",
        values: "Unsere Werte",
        valuesText:
          "Wir stellen Gemeinschaften in den Mittelpunkt unserer Entwicklungsaktivitäten, da wir glauben, dass nur durch starke Gemeinschaften die städtische Umgebung sich selbst ernähren, ihre natürlichen Ressourcen angemessen nutzen, bilden, das wirtschaftliche Wohlergehen der Menschen in Addis Abeba fördern und in Frieden leben kann.",
        donationTitle: "Für Online-Spenden von überall auf der Welt!",
        secureDonation: "Sichere Spende.",
      },
      firstName: "Voornaam",
      lastName: "Achternaam",
      email: "E-mail",
      phone: "Telefoonnummer",
      address: "Adres",
      city: "Stad",
      country: "Land",
      register: "Registrieren",
      contributions: {
        title: "Beiträge",
        description:
          "Verbreiten Sie die Nachricht über unser Programm.\nSelbst eine kleine Spende macht einen großen Unterschied.",
        donateButton: "Jetzt Spenden",
        achievements: "Unsere Erfolge",
        beneficiaries:
          "5000 direkte Begünstigte &\n15000 indirekte Begünstigte\nhaben ihre tägliche Mahlzeit gesichert",
        viewMore: "Mehr Anzeigen",
        membershipTitle: "Become a member as of $10 USD",
        membershipSubtitle: "Together We Can Change Our People's Life!",
        registerButton: "Register Now",
      },
      aboutUs: {
        intro:
          "Babul Keyer ist eine NGO, die unter der Lizenznummer 4513 von freiwilligen Frauen gegründet wurde, um die bestehende schwere Ernährungsunsicherheit zu lindern, indem sie tägliche Ernährungsprogramme für die ärmsten Gemeinden in Addis Abeba, Addis Ketama, vorbereitet.",
        womenStaff:
          "Alle Vorstandsmitglieder und Direktoren sind Frauen und 90% der Mitarbeiter sind ebenfalls Frauen.",
        yearsInAction: "3 Jahre im Einsatz",
        beneficiaries:
          "Babul Keyer hat in den letzten drei Jahren ohne Unterbrechung 5.000 direkte und 15.000 indirekte Begünstigte zweimal täglich ernährt – unabhängig von Alter, Glauben oder Geschlecht.",
      },
      contactUs: {
        loveToHear: "WIR WÜRDEN GERNE VON IHNEN HÖREN",
        response:
          "Wir melden uns so schnell wie möglich bei Ihnen. Kontaktieren Sie uns gerne hier:",
        reachUs: "Erreichen Sie uns über",
        address:
          "Addis Ketema Sub City Woreda 05 Haus Nr. 627 Hinter dem Abebe Bekela Stadion, Addis Abeba, Äthiopien",
        phone: "Büro Tel: 011677647687 Mobil: 0993598089",
        email: "abyetensae@gmail.com",
        sendMessage: "Senden Sie uns eine Nachricht",
        fullName: "Vollständiger Name",
        emailPlaceholder: "Ihre E-Mail",
        subject: "Betreff",
        message: "Ihre Nachricht",
        send: "Senden",
      },
      newsAppTitle:
        "Babul Keyer NGO startet Mobile App für ein hungerfreies Addis Abeba",
      newsAppDesc:
        "Im Herzen von Addis Abeba, wo der tägliche Kampf um Nahrung für unzählige Gemeinschaften harte Realität ist, gibt es einen Hoffnungsschimmer...",
      newsAppImageText:
        "Laden Sie unsere neue App herunter, um ein hungerfreies Addis Abeba zu unterstützen!",
      visionImageText: "Gemeinschaften stärken für eine bessere Zukunft.",
      achievementsTitle: "Here are some of our Awards.",
      browse: "Browse",
      events: "Events",
      ourTeam: "Unser Team",
      privacyPolicy: "Datenschutzrichtlinie",
      articles: "Artikel",
      article1: "Komm, lassen wir injiera backen",
      article2: "Das ist ein einzigartiges Tag, Hana sagt",
      readMoreNews: "Mehr News lesen",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "English",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;

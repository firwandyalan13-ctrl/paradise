/* ─────────────────────────────────────────────────────────────
   Paradise Dive Tulamben — i18n
   Languages: EN · ZH · DE · RU · JA · KO · FR
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  /* ═══════════ TRANSLATIONS ═══════════ */
  const T = {

    /* ── ENGLISH ── */
    en: {
      'nav.home':'Home','nav.sites':'Dive Sites','nav.gallery':'Gallery','nav.courses':'Courses','nav.plan':'Plan Your Trip',
      'hero.eyebrow':'Official Site &nbsp;·&nbsp; Tulamben, Bali, Indonesia',
      'hero.subtitle':'Walk off the beach. Descend into legend.',
      'hero.scroll':'SCROLL',
      'trust.padi':'PADI Certified Instructors','trust.max4':'Max 4 Divers Per Guide',
      'trust.photos':'Free Photos &amp; Videos','trust.equipment':'All Equipment Included','trust.booking':'Instant WhatsApp Booking',
      'intro.label':'Why Tulamben?',
      'intro.heading':'No Boat.<br>No Crowds.<br>Just Pure Diving.',
      'intro.body':"Walk straight off a black sand beach and drop into one of Asia's most celebrated dive sites. The USAT Liberty wreck — a 120-metre WWII cargo ship — starts at just 3 metres depth, making it accessible to everyone. 400+ species of fish call it home. Dawn dives are nearly empty. The water is always warm. This is diving the way it should be.",
      'intro.room-btn':'View Room Tour',
      'stat.wreck':'Metres of Wreck to Explore','stat.species':'Species Living on the Wreck',
      'stat.shallow':'Shallowest Entry — No Boat Needed','stat.temp':'Warm Water Every Single Day',
      'story.label':'A Legend Born From War',
      'story.heading':'Torpedoed in 1942.<br>Yours to Explore Today.',
      'story.body':"January 11, 1942 — a Japanese torpedo strikes the USAT Liberty in the Lombok Strait. The crippled ship is beached on Tulamben's black sand shore, where she rests for 20 years. Then in 1963, Mount Agung erupts — tremors push her into the sea, and a legend is born. Today she lies at 3 to 30 metres, her coral-covered hull teeming with 400+ species. One of the most accessible wreck dives on the planet — and it's right here.",
      'sites.label':'Choose Your Adventure','sites.heading':'Three Dives.<br>Three Worlds.',
      'c1.badge':'Top Pick','c1.title':'USAT Liberty<br>Wreck','c1.tag1':'Depth 3–30m','c1.tag2':'All Levels','c1.tag3':'Night Dive',
      'c1.desc':"The soul of Tulamben. At roughly 120 metres long, the Liberty lies so close to shore that you simply wade in from the black sand beach — making it one of the most accessible wreck dives in the world. The hull stretches from 5 to 30 metres, offering something for every level from OWD beginners to seasoned tech divers. Giant groupers, bigeye trevally schools and barracuda patrol this steel forest day and night.",
      'c1.accordion':'Site Details',
      'c1.f1':'Shore dive — no boat needed','c1.f2':'Shallowest point ~3 metres','c1.f3':'Outstanding night diving','c1.f4':'Resident Napoleon wrasse',
      'c1.f5':'Bow propeller still visible','c1.f6':'Extremely high coral coverage','c1.f7':'Mild current, vis 10–25m','c1.f8':'Diveable year-round',
      'c2.badge':'Dramatic Wall','c2.title':'Tulamben<br>Drop Off','c2.tag1':'Depth 5–60m','c2.tag2':'Intermediate+','c2.tag3':'Current',
      'c2.desc':"Located about 100 metres north of the Liberty wreck, the Tulamben Drop Off is a sheer vertical wall plunging from 5 metres into the abyss. The face is smothered in soft corals, sea fans and sponges hiding all manner of tiny creatures. On the plateau above, huge parrotfish and sea turtles are regular visitors — and with luck, a manta ray may glide up silently from the deep.",
      'c2.accordion':'Site Details',
      'c2.f1':'Shore dive, black sand entry','c2.f2':'Lush soft coral wall','c2.f3':'Bumphead parrotfish common','c2.f4':'Occasional manta ray',
      'c2.f5':'Cooler at depth ~24°C','c2.f6':'AOW certification advised','c2.f7':'Sunrise light is magical','c2.f8':'Variable current — stay alert',
      'c3.badge':'Beginner Friendly','c3.title':'Coral Garden','c3.tag1':'Depth 5–18m','c3.tag2':'Beginners','c3.tag3':'Macro Paradise',
      'c3.desc':"Just south of the Liberty wreck lies a vivid shallow coral garden — the perfect playground for underwater photographers and newly certified OWD divers. Coral diversity here is exceptional: dozens of nudibranch species, pygmy seahorses and ghost pipefish hide among the rubble on every dive, turning every descent into a treasure hunt.",
      'c3.accordion':'Site Details',
      'c3.f1':'Shallow, great for beginners','c3.f2':'Pygmy seahorses frequent','c3.f3':'Dozens of nudibranch species','c3.f4':'Best visibility in the morning',
      'c3.f5':'First choice for macro photography','c3.f6':'Almost no current','c3.f7':'Ghost pipefish &amp; lionfish','c3.f8':'Easily combined with the wreck',
      'gallery.label':'Our Facility','gallery.heading':'The Dive<br>Centre','gallery.hint':'Drag to explore — professional gear, warm spaces, everything included',
      'prac.label':'Before You Dive','prac.heading':"Everything You Need.<br>Nothing You Don't.",'prac.body':"First time in Bali or a seasoned diver — here's everything to make your Tulamben trip effortless.",
      'p1.label':'Getting There','p1.title':'From Denpasar','p1.desc':'Drive approximately 2.5 hours from Ngurah Rai International Airport, skirting the slopes of Mount Agung through stunning volcanic scenery.','p1.value':'~2.5 hrs',
      'p2.label':'Best Season','p2.title':'Dry Season is King','p2.desc':'April to November brings the dry season with visibility exceeding 30 metres. Tulamben is diveable year-round; wet season may reduce visibility slightly.','p2.value':'Apr — Nov',
      'p3.label':'Dive Style','p3.title':'Just Walk In','p3.desc':"No boat. No waiting. No seasickness. Every site is a shore dive — simply walk off the black sand beach and you're in.",'p3.value':'All Shore',
      'p4.label':'Water Temp','p4.title':'Warm &amp; Comfortable','p4.desc':'Surface water sits at 26–29°C year-round. A 3mm wetsuit is sufficient; consider 5mm for deeper dives or night sessions.','p4.value':'26–29°C',
      'p5.label':'Opening Promo','p5.title':'Best Price, Direct','p5.desc':'Skip the middleman. Book directly and get our best rate — 4-hour guided dive, all gear included. Confirmed instantly via WhatsApp.','p5.value':'Rp 1.000.000 / 4h',
      'p6.label':'Certification','p6.title':'All Levels Welcome','p6.desc':"OWD holders can dive the wreck's shallow zone and Coral Garden. AOW unlocks the Drop Off deep wall. No cert? Try a Discover Scuba course.",'p6.value':'OWD to start',
      'tips.label':'Certification','tips.heading':'Learn to Dive<br>in Paradise','tips.body':'All courses taught by PADI-certified instructors. Small groups, personalised attention, world-class dive sites as your classroom.',
      'tip1.tag':'Beginner · No Experience Needed','tip1.title':'Open Water Diver','tip1.desc':"The world's most popular scuba certification. 3–4 days of theory, pool sessions &amp; 4 open-water dives on the Liberty Wreck. Certified for life.",'tip1.btn':'Learn More →',
      'tip2.tag':'Intermediate · OWD Required','tip2.title':'Advanced Open Water','tip2.desc':"Push deeper (30 m), master buoyancy, navigate currents. 5 specialty dives including deep &amp; underwater navigation at Tulamben's best sites.",'tip2.btn':'Learn More →',
      'tip3.tag':'Specialty · AOWD Required','tip3.title':'Rescue Diver','tip3.desc':'The course that changes how you dive forever. Learn to prevent and manage dive emergencies. Highly recommended before going professional.','tip3.btn':'Learn More →',
      'tip4.tag':'Specialty · OWD Required','tip4.title':'Nitrox (EANx)','tip4.desc':'Dive longer, surface more refreshed. Enriched Air certification lets you extend your bottom time and reduce nitrogen loading on multi-dive days.','tip4.btn':'Learn More →',
      'courses.label':'Get In The Water','courses.heading':'Your First Breath<br>Underwater Awaits','courses.body':'No experience? No problem. All equipment included. Our expert guides have thousands of dives on this exact reef.',
      'pr1.hot':'Hot','pr1.cat':'Try it today — no cert needed','pr1.title':'Intro Dive','pr1.r1':'One dive','pr1.r2':'Two dives','pr1.r3':'Three dives','pr1.btn':'Learn More →',
      'pr2.cat':'Specialty Experience','pr2.title':'Muck Diving','pr2.r1':'One Muck Dive','pr2.r2':'Two Muck Dives',
      'pr3.cat':'Certified divers','pr3.title':'Guided Dive','pr3.r1':'One dive','pr3.r2':'Two dives','pr3.r3':'Three dives','pr3.r4':'Night dive','pr3.btn':'Learn More →',
      'cta.heading':'Don\'t Just Dream It.<br><span style="color:var(--accent);font-style:italic;">Dive It.</span>',
      'cta.sub':'Spots fill fast — especially at dawn. Message us on WhatsApp and get confirmed in minutes. Your underwater adventure starts now.',
      'cta.primary':'Book Now — Instant Confirmation','cta.ghost':'See All Prices',
      'ft.addr-lbl':'Address','ft.hours-lbl':'Opening Hours','ft.hours-val':'Opens 9:00 AM daily<br>Dive by appointment available',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>Instant booking confirmation',
      'ft.lang-lbl':'Languages','ft.lang-val':'English &amp; Indonesian<br>PADI certified instructors',
      'ft.copy':'© 2026 Paradise Dive Tulamben · Bali, Indonesia',
      'wa.btn':'Book Now','room.title':'Room Tour',
      'modal.book':'📲 Book Now on WhatsApp','modal.book.course':'📲 Book This Course on WhatsApp',
    },

    /* ── CHINESE 中文 ── */
    zh: {
      'nav.home':'首页','nav.sites':'潜水点','nav.gallery':'相册','nav.courses':'课程','nav.plan':'行程规划',
      'hero.eyebrow':'官方网站 &nbsp;·&nbsp; 巴厘岛图兰奔，印度尼西亚',
      'hero.subtitle':'踏上沙滩，潜入传奇。','hero.scroll':'滚动',
      'trust.padi':'PADI认证教练','trust.max4':'每位导潜最多4名','trust.photos':'免费照片和视频','trust.equipment':'全套设备包含','trust.booking':'WhatsApp即时预约',
      'intro.label':'为什么选择图兰奔？','intro.heading':'无需船只。<br>无需排队。<br>纯粹潜水。',
      'intro.body':'直接从黑沙滩步行入水，潜入亚洲最著名的潜水点之一。USAT Liberty沉船——一艘长120米的二战货船——最浅仅3米，适合所有人体验。400多种鱼类在此栖居。黎明潜水几乎无人，水温常年温暖。这才是潜水本来的样子。',
      'intro.room-btn':'查看房间实拍',
      'stat.wreck':'可探索沉船长度（米）','stat.species':'沉船上的鱼类种数','stat.shallow':'最浅入水点——无需船只','stat.temp':'全年温暖水温',
      'story.label':'战火中诞生的传奇','story.heading':'1942年被鱼雷击中。<br>如今等你探索。',
      'story.body':'1942年1月11日——一颗日本鱼雷击中USAT Liberty，令其搁浅在图兰奔的黑沙岸边。1963年阿贡火山喷发，震动将其推入大海，传奇就此诞生。如今船体躺在3至30米深处，珊瑚覆盖的船壳上栖居着400多种生物。这是全球最易抵达的沉船潜水点之一——就在眼前。',
      'sites.label':'选择你的冒险','sites.heading':'三个潜点。<br>三个世界。',
      'c1.badge':'首选推荐','c1.title':'USAT Liberty<br>沉船','c1.tag1':'深度 3–30m','c1.tag2':'全级别','c1.tag3':'夜潜',
      'c1.desc':'图兰奔的灵魂所在。约120米长的Liberty沉船距岸极近，从黑沙滩直接涉水即可进入——是世界上可达性最高的沉船潜点之一。船体从5至30米不等，适合从初级开放水域到专业技术潜水员的各个层次。巨型石斑鱼、条纹鲹群和梭鱼日夜巡游于这片钢铁丛林。',
      'c1.accordion':'潜点详情',
      'c1.f1':'岸潜——无需船只','c1.f2':'最浅约3米','c1.f3':'精彩的夜间潜水','c1.f4':'常驻拿破仑鱼',
      'c1.f5':'船头螺旋桨依然可见','c1.f6':'珊瑚覆盖率极高','c1.f7':'水流温和，能见度10–25m','c1.f8':'全年可潜',
      'c2.badge':'震撼峭壁','c2.title':'图兰奔<br>断崖','c2.tag1':'深度 5–60m','c2.tag2':'中级以上','c2.tag3':'有流',
      'c2.desc':'位于Liberty沉船以北约100米处，图兰奔断崖是一面从5米陡降入深渊的垂直峭壁。崖面覆满软珊瑚、海扇和海绵，藏匿着无数细小生物。上方台地上，巨型鹦嘴鱼和海龟时常出没——若运气好，还可能看到一只蝠鲼从深处悄然升起。',
      'c2.accordion':'潜点详情',
      'c2.f1':'岸潜，黑沙入水','c2.f2':'丰茂的软珊瑚墙','c2.f3':'凸额鹦嘴鱼常见','c2.f4':'偶见蝠鲼',
      'c2.f5':'深处水温约24°C','c2.f6':'建议持AOW证书','c2.f7':'日出时光线梦幻','c2.f8':'水流多变——保持警觉',
      'c3.badge':'适合初学者','c3.title':'珊瑚花园','c3.tag1':'深度 5–18m','c3.tag2':'初学者','c3.tag3':'微距天堂',
      'c3.desc':'Liberty沉船以南是一片色彩斑斓的浅水珊瑚花园——水下摄影师和初级开放水域潜水员的理想乐园。珊瑚多样性极为丰富：裸腮类物种、侏儒海马和鬼管鱼在礁石间藏匿，每次下潜都像一场宝藏寻觅之旅。',
      'c3.accordion':'潜点详情',
      'c3.f1':'水浅，适合初学者','c3.f2':'侏儒海马常见','c3.f3':'数十种裸腮类生物','c3.f4':'上午能见度最佳',
      'c3.f5':'微距摄影首选','c3.f6':'几乎无水流','c3.f7':'鬼管鱼 &amp; 蓑鲉','c3.f8':'可与沉船潜点组合',
      'gallery.label':'我们的设施','gallery.heading':'潜水<br>中心','gallery.hint':'拖动浏览——专业装备，温馨空间，一切包含',
      'prac.label':'潜水前须知','prac.heading':'应有尽有。<br>简单纯粹。','prac.body':'无论是初次来到巴厘岛还是资深潜水员，这里为您准备好了一切，让图兰奔之旅轻松无忧。',
      'p1.label':'如何抵达','p1.title':'从登巴萨出发','p1.desc':'从伍拉·赖国际机场驾车约2.5小时，途经阿贡火山壮观的火山地貌。','p1.value':'约2.5小时',
      'p2.label':'最佳季节','p2.title':'旱季最佳','p2.desc':'4月至11月旱季，能见度超过30米。图兰奔全年均可潜水；雨季能见度略有下降。','p2.value':'4月 — 11月',
      'p3.label':'潜水方式','p3.title':'直接下水','p3.desc':'无需船只，无需等待，无需担心晕船。所有潜点均为岸潜——直接从黑沙滩走入水中即可。','p3.value':'全部岸潜',
      'p4.label':'水温','p4.title':'温暖舒适','p4.desc':'全年水面温度26–29°C。3mm潜水服即可；深潜或夜潜建议5mm。','p4.value':'26–29°C',
      'p5.label':'开业优惠','p5.title':'直接预约最优价','p5.desc':'跳过中间商，直接预约享最优价格——4小时导潜，全套装备包含，WhatsApp即时确认。','p5.value':'Rp 1.000.000 / 4小时',
      'p6.label':'证书要求','p6.title':'全级别欢迎','p6.desc':'持开放水域证书可潜探沉船浅区和珊瑚花园。高级开放水域证书可解锁断崖深墙。没有证书？报名体验潜水课程。','p6.value':'开放水域起步',
      'tips.label':'认证课程','tips.heading':'在天堂<br>学习潜水','tips.body':'所有课程由PADI认证教练授课。小班教学，个性化辅导，世界级潜点就是您的课堂。',
      'tip1.tag':'初学者 · 无需经验','tip1.title':'开放水域潜水员','tip1.desc':'全球最受欢迎的水肺潜水认证。3–4天理论、泳池训练及4次Liberty沉船开放水域潜水。终身有效。','tip1.btn':'了解更多 →',
      'tip2.tag':'中级 · 需持OWD证书','tip2.title':'高级开放水域','tip2.desc':'潜得更深（30米），掌握浮力，驾驭水流。5次专项潜水，包含深潜和水下导航。','tip2.btn':'了解更多 →',
      'tip3.tag':'专项 · 需持AOWD证书','tip3.title':'救援潜水员','tip3.desc':'改变您潜水方式的课程。学习预防和处理潜水紧急情况，强烈建议专业化前完成。','tip3.btn':'了解更多 →',
      'tip4.tag':'专项 · 需持OWD证书','tip4.title':'高氧（EANx）','tip4.desc':'潜得更久，出水更清醒。富氧空气认证让您延长底部时间，减少多次潜水的氮气负荷。','tip4.btn':'了解更多 →',
      'courses.label':'立即入水','courses.heading':'您的首次水下<br>呼吸等待着您','courses.body':'零经验？没问题。全套装备包含。我们的专业向导在这片礁石上拥有数千次潜水经验。',
      'pr1.hot':'热门','pr1.cat':'今天就试——无需证书','pr1.title':'体验潜水','pr1.r1':'一次潜水','pr1.r2':'两次潜水','pr1.r3':'三次潜水','pr1.btn':'了解更多 →',
      'pr2.cat':'专项体验','pr2.title':'淤泥潜水','pr2.r1':'一次淤泥潜','pr2.r2':'两次淤泥潜',
      'pr3.cat':'持证潜水员','pr3.title':'导潜服务','pr3.r1':'一次潜水','pr3.r2':'两次潜水','pr3.r3':'三次潜水','pr3.r4':'夜潜','pr3.btn':'了解更多 →',
      'cta.heading':'别只是梦想，<br><span style="color:var(--accent);font-style:italic;">去潜水吧。</span>',
      'cta.sub':'名额有限——尤其是黎明潜水。通过WhatsApp联系我们，几分钟内即可确认。您的水下冒险现在开始。',
      'cta.primary':'立即预约——即时确认','cta.ghost':'查看全部价格',
      'ft.addr-lbl':'地址','ft.hours-lbl':'营业时间','ft.hours-val':'每日上午9:00开始<br>可按预约安排潜水',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>即时预约确认',
      'ft.lang-lbl':'语言','ft.lang-val':'英语 &amp; 印尼语<br>PADI认证教练',
      'ft.copy':'© 2026 Paradise Dive Tulamben · 印度尼西亚巴厘岛',
      'wa.btn':'立即预约','room.title':'房间实拍',
      'modal.book':'📲 通过WhatsApp预约','modal.book.course':'📲 通过WhatsApp预约此课程',
    },

    /* ── GERMAN Deutsch ── */
    de: {
      'nav.home':'Start','nav.sites':'Tauchplätze','nav.gallery':'Galerie','nav.courses':'Kurse','nav.plan':'Reiseplanung',
      'hero.eyebrow':'Offizielle Website &nbsp;·&nbsp; Tulamben, Bali, Indonesien',
      'hero.subtitle':'Vom Strand direkt ins Wasser. Tauche in die Legende.','hero.scroll':'SCROLLEN',
      'trust.padi':'PADI-zertifizierte Instruktoren','trust.max4':'Max. 4 Taucher pro Guide',
      'trust.photos':'Fotos &amp; Videos kostenlos','trust.equipment':'Komplette Ausrüstung inklusive','trust.booking':'Sofortbuchung per WhatsApp',
      'intro.label':'Warum Tulamben?','intro.heading':'Kein Boot.<br>Keine Massen.<br>Nur pures Tauchen.',
      'intro.body':'Spaziere direkt von einem Strand aus schwarzem Sand ins Wasser und tauche in eines der bekanntesten Tauchgebiete Asiens. Das USAT-Liberty-Wrack — ein 120 Meter langes Frachtschiff aus dem Zweiten Weltkrieg — beginnt bereits bei 3 Metern Tiefe und ist für alle zugänglich. Über 400 Fischarten haben hier ihr Zuhause. Morgentauchgänge sind fast menschenleer. Das Wasser ist stets warm.',
      'intro.room-btn':'Zimmer ansehen',
      'stat.wreck':'Meter Wrack zu erkunden','stat.species':'Arten am Wrack','stat.shallow':'Flachster Einstieg — kein Boot nötig','stat.temp':'Warmes Wasser ganzjährig',
      'story.label':'Eine Legende aus dem Krieg','story.heading':'Torpediert 1942.<br>Heute dein Abenteuer.',
      'story.body':'11. Januar 1942 — ein japanischer Torpedo trifft die USAT Liberty in der Lombok-Straße. Das beschädigte Schiff strandet am schwarzen Sandstrand von Tulamben, wo es 20 Jahre ruht. 1963 bricht der Vulkan Agung aus — Erdbeben schieben das Wrack ins Meer, und eine Legende entsteht. Heute liegt es zwischen 3 und 30 Metern, sein korallenbewachsener Rumpf wimmelt von über 400 Arten.',
      'sites.label':'Wähle dein Abenteuer','sites.heading':'Drei Tauchgänge.<br>Drei Welten.',
      'c1.badge':'Top-Empfehlung','c1.title':'USAT Liberty<br>Wrack','c1.tag1':'Tiefe 3–30m','c1.tag2':'Alle Niveaus','c1.tag3':'Nachttauchen',
      'c1.desc':'Die Seele von Tulamben. Mit rund 120 Metern Länge liegt die Liberty so nah am Ufer, dass man einfach vom schwarzen Sandstrand ins Wasser waten kann — einer der zugänglichsten Wracktauchgänge weltweit. Der Rumpf erstreckt sich von 5 bis 30 Metern und bietet etwas für jeden.',
      'c1.accordion':'Tauchplatzdaten',
      'c1.f1':'Küstentauchgang — kein Boot nötig','c1.f2':'Flachste Stelle ~3 Meter','c1.f3':'Hervorragendes Nachttauchen','c1.f4':'Ansässiger Napoleonbarsch',
      'c1.f5':'Bugpropeller noch sichtbar','c1.f6':'Extrem hohe Korallenbedeckung','c1.f7':'Leichte Strömung, Sicht 10–25m','c1.f8':'Ganzjährig tauchbar',
      'c2.badge':'Dramatische Wand','c2.title':'Tulamben<br>Drop Off','c2.tag1':'Tiefe 5–60m','c2.tag2':'Fortgeschrittene+','c2.tag3':'Strömung',
      'c2.desc':'Etwa 100 Meter nördlich des Liberty-Wracks ist der Tulamben Drop Off eine senkrechte Wand, die von 5 Metern in die Tiefe stürzt. Die Fläche ist überwuchert von Weichkorallen, Seefächern und Schwämmen. Auf dem Plateau darüber sind riesige Papageienfische und Meeresschildkröten häufige Gäste.',
      'c2.accordion':'Tauchplatzdaten',
      'c2.f1':'Küstentauchgang, Schwarzsandeinstieg','c2.f2':'Üppige Weichkorallenwand','c2.f3':'Buckelpapageienfisch häufig','c2.f4':'Gelegentlich Mantarochen',
      'c2.f5':'Kühler in der Tiefe ~24°C','c2.f6':'AOW-Zertifizierung empfohlen','c2.f7':'Sonnenaufgangslicht magisch','c2.f8':'Wechselnde Strömung — aufmerksam bleiben',
      'c3.badge':'Anfängerfreundlich','c3.title':'Korallengarten','c3.tag1':'Tiefe 5–18m','c3.tag2':'Anfänger','c3.tag3':'Makro-Paradies',
      'c3.desc':'Südlich des Liberty-Wracks liegt ein farbenprächtiger flacher Korallengarten — idealer Spielplatz für Unterwasserfotografen und frisch zertifizierte OWD-Taucher. Nacktschnecken, Zwergseepferdchen und Geisterpfeifenfische verstecken sich bei jedem Tauchgang im Geröll.',
      'c3.accordion':'Tauchplatzdaten',
      'c3.f1':'Flach, ideal für Anfänger','c3.f2':'Zwergseepferdchen häufig','c3.f3':'Dutzende Nacktschneckenarten','c3.f4':'Beste Sicht am Morgen',
      'c3.f5':'Erste Wahl für Makrofotografie','c3.f6':'Fast keine Strömung','c3.f7':'Geisterpfeifenfisch &amp; Rotfeuerfisch','c3.f8':'Leicht mit dem Wrack kombinierbar',
      'gallery.label':'Unsere Einrichtung','gallery.heading':'Das Tauch<br>zentrum','gallery.hint':'Ziehen zum Erkunden — professionelle Ausrüstung, alles inklusive',
      'prac.label':'Vor dem Tauchgang','prac.heading':'Alles was du brauchst.<br>Nichts was du nicht brauchst.','prac.body':'Ob zum ersten Mal auf Bali oder erfahrener Taucher — hier ist alles für einen entspannten Tulamben-Trip.',
      'p1.label':'Anreise','p1.title':'Ab Denpasar','p1.desc':'Ca. 2,5 Stunden Fahrt vom Flughafen Ngurah Rai entlang der Hänge des Agung durch beeindruckende Vulkanlandschaft.','p1.value':'~2,5 Std.',
      'p2.label':'Beste Reisezeit','p2.title':'Trockenzeit ist König','p2.desc':'April bis November: Trockenzeit mit Sichtweiten über 30 Meter. Tulamben ist ganzjährig tauchbar; Regenzeit reduziert die Sicht leicht.','p2.value':'Apr — Nov',
      'p3.label':'Tauchstil','p3.title':'Einfach reinspazieren','p3.desc':'Kein Boot. Kein Warten. Keine Seekrankheit. Alle Plätze sind Küstentauchgänge — einfach vom schwarzen Sandstrand ins Wasser.','p3.value':'Nur Küste',
      'p4.label':'Wassertemperatur','p4.title':'Warm &amp; Angenehm','p4.desc':'Oberflächentemperatur ganzjährig 26–29°C. Ein 3-mm-Anzug reicht; für Tief- oder Nachttauchgänge empfiehlt sich 5 mm.','p4.value':'26–29°C',
      'p5.label':'Eröffnungsangebot','p5.title':'Bester Preis, direkt','p5.desc':'Kein Mittelsmann. Direkt buchen und Bestpreis sichern — 4-Stunden-Guided-Dive, Ausrüstung inklusive, sofort per WhatsApp bestätigt.','p5.value':'Rp 1.000.000 / 4 Std.',
      'p6.label':'Zertifizierung','p6.title':'Alle Niveaus willkommen','p6.desc':'OWD-Inhaber dürfen den Flachwasserbereich des Wracks und den Korallengarten erkunden. AOW öffnet die Tiefwand. Kein Schein? Discover Scuba ausprobieren.','p6.value':'Ab OWD',
      'tips.label':'Zertifizierung','tips.heading':'Tauchen lernen<br>im Paradies','tips.body':'Alle Kurse mit PADI-zertifizierten Instruktoren. Kleine Gruppen, persönliche Betreuung, Weltklasse-Tauchplätze als Klassenzimmer.',
      'tip1.tag':'Anfänger · Keine Erfahrung nötig','tip1.title':'Open Water Diver','tip1.desc':'Die weltweit beliebteste Taucher­zertifizierung. 3–4 Tage Theorie, Pool-Training &amp; 4 Freiwassertauchgänge am Liberty-Wrack. Lebenslang zertifiziert.','tip1.btn':'Mehr erfahren →',
      'tip2.tag':'Fortgeschrittene · OWD erforderlich','tip2.title':'Advanced Open Water','tip2.desc':'Tiefer tauchen (30 m), Auftrieb meistern, Strömungen navigieren. 5 Specialty-Tauchgänge inkl. Tief- und Unterwassernavigation.','tip2.btn':'Mehr erfahren →',
      'tip3.tag':'Specialty · AOWD erforderlich','tip3.title':'Rescue Diver','tip3.desc':'Der Kurs, der dein Tauchen für immer verändert. Lerne Tauchunfälle zu verhindern und zu managen. Sehr empfohlen vor dem Profiweg.','tip3.btn':'Mehr erfahren →',
      'tip4.tag':'Specialty · OWD erforderlich','tip4.title':'Nitrox (EANx)','tip4.desc':'Länger tauchen, erholter auftauchen. Enriched-Air-Zertifizierung für mehr Grundzeit und weniger Stickstoffbelastung bei Mehrfachtauchgängen.','tip4.btn':'Mehr erfahren →',
      'courses.label':'Ins Wasser','courses.heading':'Dein erster<br>Atemzug unter Wasser','courses.body':'Keine Erfahrung? Kein Problem. Komplette Ausrüstung inklusive. Unsere Guides haben tausende Tauchgänge auf diesem Riff.',
      'pr1.hot':'Beliebt','pr1.cat':'Heute ausprobieren — kein Schein nötig','pr1.title':'Einführungstauchgang','pr1.r1':'Ein Tauchgang','pr1.r2':'Zwei Tauchgänge','pr1.r3':'Drei Tauchgänge','pr1.btn':'Mehr erfahren →',
      'pr2.cat':'Specialty-Erlebnis','pr2.title':'Muck Diving','pr2.r1':'Ein Muck-Tauchgang','pr2.r2':'Zwei Muck-Tauchgänge',
      'pr3.cat':'Zertifizierte Taucher','pr3.title':'Geführter Tauchgang','pr3.r1':'Ein Tauchgang','pr3.r2':'Zwei Tauchgänge','pr3.r3':'Drei Tauchgänge','pr3.r4':'Nachttauchgang','pr3.btn':'Mehr erfahren →',
      'cta.heading':'Nicht nur träumen.<br><span style="color:var(--accent);font-style:italic;">Tauchen.</span>',
      'cta.sub':'Plätze sind begehrt — besonders bei Sonnenaufgang. Schreib uns auf WhatsApp und werde in Minuten bestätigt.',
      'cta.primary':'Jetzt buchen — Sofortbestätigung','cta.ghost':'Alle Preise ansehen',
      'ft.addr-lbl':'Adresse','ft.hours-lbl':'Öffnungszeiten','ft.hours-val':'Täglich ab 9:00 Uhr<br>Tauchgänge nach Termin',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>Sofortige Buchungsbestätigung',
      'ft.lang-lbl':'Sprachen','ft.lang-val':'Englisch &amp; Indonesisch<br>PADI-zertifizierte Instruktoren',
      'ft.copy':'© 2026 Paradise Dive Tulamben · Bali, Indonesien',
      'wa.btn':'Jetzt buchen','room.title':'Zimmer Tour',
      'modal.book':'📲 Jetzt per WhatsApp buchen','modal.book.course':'📲 Kurs per WhatsApp buchen',
    },

    /* ── RUSSIAN Русский ── */
    ru: {
      'nav.home':'Главная','nav.sites':'Места дайвинга','nav.gallery':'Галерея','nav.courses':'Курсы','nav.plan':'Планирование',
      'hero.eyebrow':'Официальный сайт &nbsp;·&nbsp; Туламбен, Бали, Индонезия',
      'hero.subtitle':'Ступи с пляжа. Погрузись в легенду.','hero.scroll':'ЛИСТАТЬ',
      'trust.padi':'Инструкторы с сертификатом PADI','trust.max4':'Не более 4 дайверов на гида',
      'trust.photos':'Фото и видео бесплатно','trust.equipment':'Всё снаряжение включено','trust.booking':'Моментальное бронирование в WhatsApp',
      'intro.label':'Почему Туламбен?','intro.heading':'Никаких лодок.<br>Никакой толпы.<br>Только дайвинг.',
      'intro.body':'Зайди прямо в воду с чёрного песчаного пляжа и окажись на одном из самых известных мест погружения в Азии. Затонувший USAT Liberty — грузовое судно времён Второй мировой длиной 120 метров — начинается всего на 3 метрах глубины. Здесь обитает более 400 видов рыб. Ранние утренние погружения почти без людей. Вода всегда тёплая.',
      'intro.room-btn':'Посмотреть номера',
      'stat.wreck':'Метров затонувшего судна','stat.species':'Видов рыб на обломках','stat.shallow':'Самое мелкое место — лодка не нужна','stat.temp':'Тёплая вода круглый год',
      'story.label':'Легенда, рождённая войной','story.heading':'Торпедирован в 1942 году.<br>Твой сегодня.',
      'story.body':'11 января 1942 года — японская торпеда поражает USAT Liberty в Ломбокском проливе. Повреждённое судно садится на мель у берегов Туламбена и пролежит там 20 лет. В 1963 году извержение Агунга толкает его в море — и рождается легенда. Сегодня оно лежит на глубине от 3 до 30 метров, покрытый кораллами корпус кишит более чем 400 видами.',
      'sites.label':'Выбери своё приключение','sites.heading':'Три погружения.<br>Три мира.',
      'c1.badge':'Топ выбор','c1.title':'USAT Liberty<br>Обломки','c1.tag1':'Глубина 3–30м','c1.tag2':'Все уровни','c1.tag3':'Ночное погружение',
      'c1.desc':'Душа Туламбена. Liberty длиной около 120 метров лежит так близко к берегу, что можно войти в воду прямо с чёрного пляжа — одно из самых доступных мест крушения в мире. Корпус уходит с 5 до 30 метров, предлагая что-то для каждого уровня от новичков до технических дайверов.',
      'c1.accordion':'О месте',
      'c1.f1':'Береговое погружение — лодка не нужна','c1.f2':'Мелчайшая точка ~3 метра','c1.f3':'Отличный ночной дайвинг','c1.f4':'Постоянная наполеон-рыба',
      'c1.f5':'Носовой пропеллер ещё виден','c1.f6':'Очень высокий коралловый покров','c1.f7':'Слабое течение, видимость 10–25м','c1.f8':'Можно нырять круглый год',
      'c2.badge':'Впечатляющая стена','c2.title':'Туламбен<br>Дроп-офф','c2.tag1':'Глубина 5–60м','c2.tag2':'Средний уровень+','c2.tag3':'Течение',
      'c2.desc':'Примерно в 100 метрах к северу от обломков Liberty — отвесная вертикальная стена, уходящая с 5 метров в бездну. Покрыта мягкими кораллами, морскими веерами и губками. На плато выше регулярно появляются крупные рыбы-попугаи и морские черепахи.',
      'c2.accordion':'О месте',
      'c2.f1':'Береговое погружение, чёрный песок','c2.f2':'Пышная стена мягких кораллов','c2.f3':'Горбатый попугай часто встречается','c2.f4':'Изредка скат-манта',
      'c2.f5':'Прохладнее на глубине ~24°C','c2.f6':'Рекомендуется сертификат AOW','c2.f7':'Рассветный свет волшебен','c2.f8':'Переменное течение — будь внимателен',
      'c3.badge':'Для начинающих','c3.title':'Коралловый сад','c3.tag1':'Глубина 5–18м','c3.tag2':'Начинающие','c3.tag3':'Макро рай',
      'c3.desc':'К югу от Liberty — яркий мелководный коралловый сад, идеальный для подводных фотографов и недавно сертифицированных дайверов. Разнообразие кораллов исключительное: десятки видов голожаберных моллюсков, карликовые морские коньки и рыбы-призраки прячутся в камнях.',
      'c3.accordion':'О месте',
      'c3.f1':'Мелко, отлично для новичков','c3.f2':'Карликовые морские коньки часто встречаются','c3.f3':'Десятки видов голожаберных','c3.f4':'Лучшая видимость утром',
      'c3.f5':'Первый выбор для макрофотографии','c3.f6':'Почти нет течения','c3.f7':'Рыбы-призраки &amp; крылатки','c3.f8':'Легко совместить с обломками',
      'gallery.label':'Наш центр','gallery.heading':'Дайв<br>центр','gallery.hint':'Потяни для просмотра — профессиональное снаряжение, всё включено',
      'prac.label':'Перед погружением','prac.heading':'Всё что нужно.<br>Ничего лишнего.','prac.body':'Впервые на Бали или опытный дайвер — здесь всё, что сделает вашу поездку в Туламбен комфортной.',
      'p1.label':'Как добраться','p1.title':'Из Денпасара','p1.desc':'Примерно 2,5 часа езды от международного аэропорта Нгурах Рай вдоль склонов Агунга через живописный вулканический ландшафт.','p1.value':'~2,5 ч.',
      'p2.label':'Лучший сезон','p2.title':'Сухой сезон — лучший','p2.desc':'С апреля по ноябрь сухой сезон: видимость превышает 30 метров. Туламбен доступен круглый год; в сезон дождей видимость немного ниже.','p2.value':'Апр — Ноя',
      'p3.label':'Стиль погружения','p3.title':'Просто зайди','p3.desc':'Никаких лодок. Никакого ожидания. Никакой морской болезни. Все места — береговые погружения, прямо с чёрного пляжа.','p3.value':'Только берег',
      'p4.label':'Температура воды','p4.title':'Тепло и комфортно','p4.desc':'Поверхностная температура воды 26–29°C круглый год. Гидрокостюм 3 мм достаточен; для глубоких погружений рекомендуется 5 мм.','p4.value':'26–29°C',
      'p5.label':'Акция при открытии','p5.title':'Лучшая цена напрямую','p5.desc':'Без посредников. Бронируй напрямую и получи лучшую цену — 4-часовое сопровождаемое погружение, всё снаряжение включено. Подтверждение сразу в WhatsApp.','p5.value':'Rp 1.000.000 / 4 ч.',
      'p6.label':'Сертификация','p6.title':'Любой уровень','p6.desc':'Обладатели OWD могут нырять на мелководье обломков и в коралловом саду. AOW открывает глубокую стену Дроп-офф. Нет сертификата? Попробуй Discover Scuba.','p6.value':'OWD и выше',
      'tips.label':'Сертификация','tips.heading':'Научись нырять<br>в раю','tips.body':'Все курсы ведут инструкторы с сертификатом PADI. Небольшие группы, индивидуальный подход, лучшие места погружений как аудитория.',
      'tip1.tag':'Начинающий · Без опыта','tip1.title':'Open Water Diver','tip1.desc':'Самая популярная сертификация по дайвингу в мире. 3–4 дня теории, бассейна и 4 открытых погружений на обломках Liberty. Сертификат на всю жизнь.','tip1.btn':'Подробнее →',
      'tip2.tag':'Средний · Нужен OWD','tip2.title':'Advanced Open Water','tip2.desc':'Ныряй глубже (30 м), освой плавучесть, навигацию в течении. 5 специальных погружений, включая глубоководное и навигационное.','tip2.btn':'Подробнее →',
      'tip3.tag':'Специализация · Нужен AOWD','tip3.title':'Rescue Diver','tip3.desc':'Курс, который навсегда изменит твой подход к дайвингу. Научись предотвращать аварийные ситуации и управлять ими.','tip3.btn':'Подробнее →',
      'tip4.tag':'Специализация · Нужен OWD','tip4.title':'Найтрокс (EANx)','tip4.desc':'Дольше под водой, бодрее на поверхности. Сертификация на обогащённый воздух позволяет увеличить время на дне и снизить азотную нагрузку.','tip4.btn':'Подробнее →',
      'courses.label':'В воду','courses.heading':'Твой первый вдох<br>под водой ждёт','courses.body':'Нет опыта? Не беда. Снаряжение включено. Наши гиды совершили тысячи погружений именно на этом рифе.',
      'pr1.hot':'Хит','pr1.cat':'Попробуй сегодня — сертификат не нужен','pr1.title':'Ознакомительное погружение','pr1.r1':'Одно погружение','pr1.r2':'Два погружения','pr1.r3':'Три погружения','pr1.btn':'Подробнее →',
      'pr2.cat':'Специальный опыт','pr2.title':'Мак-дайвинг','pr2.r1':'Одно погружение','pr2.r2':'Два погружения',
      'pr3.cat':'Для сертифицированных','pr3.title':'С гидом','pr3.r1':'Одно погружение','pr3.r2':'Два погружения','pr3.r3':'Три погружения','pr3.r4':'Ночное погружение','pr3.btn':'Подробнее →',
      'cta.heading':'Не просто мечтай.<br><span style="color:var(--accent);font-style:italic;">Ныряй.</span>',
      'cta.sub':'Места кончаются быстро — особенно на рассвете. Напиши нам в WhatsApp и получи подтверждение за несколько минут.',
      'cta.primary':'Забронировать — мгновенное подтверждение','cta.ghost':'Все цены',
      'ft.addr-lbl':'Адрес','ft.hours-lbl':'Часы работы','ft.hours-val':'Открыто с 9:00 ежедневно<br>Погружения по записи',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>Мгновенное подтверждение',
      'ft.lang-lbl':'Языки','ft.lang-val':'Английский &amp; Индонезийский<br>Инструкторы с сертификатом PADI',
      'ft.copy':'© 2026 Paradise Dive Tulamben · Бали, Индонезия',
      'wa.btn':'Забронировать','room.title':'Тур по номерам',
      'modal.book':'📲 Забронировать в WhatsApp','modal.book.course':'📲 Записаться на курс в WhatsApp',
    },

    /* ── JAPANESE 日本語 ── */
    ja: {
      'nav.home':'ホーム','nav.sites':'ダイブサイト','nav.gallery':'ギャラリー','nav.courses':'コース','nav.plan':'旅行計画',
      'hero.eyebrow':'公式サイト &nbsp;·&nbsp; バリ島トゥランベン、インドネシア',
      'hero.subtitle':'ビーチから海へ。伝説の世界に潜ろう。','hero.scroll':'スクロール',
      'trust.padi':'PADI認定インストラクター','trust.max4':'1ガイドにつき最大4名',
      'trust.photos':'写真・動画無料','trust.equipment':'全機材込み','trust.booking':'WhatsAppで今すぐ予約',
      'intro.label':'なぜトゥランベン？','intro.heading':'ボート不要。<br>人混みなし。<br>純粋なダイビング。',
      'intro.body':'黒砂のビーチからそのまま海へ入り、アジア有数の名ダイブスポットへ。USAT Liberty沈船は全長120メートルの第二次世界大戦の貨物船で、水深わずか3メートルから始まるため誰でも楽しめます。400種以上の魚が生息し、夜明けのダイビングはほぼ貸し切り。水温も一年中温かく、これこそ理想のダイビングです。',
      'intro.room-btn':'お部屋を見る',
      'stat.wreck':'探索できる沈船の長さ（m）','stat.species':'沈船に生息する魚の種数','stat.shallow':'最浅エントリー — ボート不要','stat.temp':'年間を通じた温かい水温',
      'story.label':'戦争から生まれた伝説','story.heading':'1942年に撃沈。<br>今、あなたが探索する番。',
      'story.body':'1942年1月11日——日本の魚雷がロンボク海峡でUSAT Libertyを撃沈。損傷した船はトゥランベンの黒砂浜に座礁し、20年間そのままに。1963年のアグン山噴火による地震がついに船を海中へ押し込み、伝説が誕生しました。今日、船体は水深3〜30メートルに横たわり、400種以上の生物に覆われています。',
      'sites.label':'あなたの冒険を選ぼう','sites.heading':'3つのダイブ。<br>3つの世界。',
      'c1.badge':'トップピック','c1.title':'USAT Liberty<br>沈船','c1.tag1':'水深 3〜30m','c1.tag2':'全レベル','c1.tag3':'ナイトダイブ',
      'c1.desc':'トゥランベンの魂。約120メートルのLibertyは岸に非常に近く、黒砂ビーチから直接入水できる世界有数のアクセスしやすい沈船ダイブです。船体は水深5〜30メートルに広がり、OWD初心者からテックダイバーまであらゆるレベルに対応します。',
      'c1.accordion':'サイト詳細',
      'c1.f1':'ビーチダイブ — ボート不要','c1.f2':'最浅約3メートル','c1.f3':'素晴らしいナイトダイビング','c1.f4':'ナポレオンフィッシュが常駐',
      'c1.f5':'船首スクリューが今も見える','c1.f6':'非常に高いサンゴ被覆率','c1.f7':'穏やかな流れ、視界10〜25m','c1.f8':'年間を通じてダイブ可能',
      'c2.badge':'迫力の壁','c2.title':'トゥランベン<br>ドロップオフ','c2.tag1':'水深 5〜60m','c2.tag2':'中級以上','c2.tag3':'流れあり',
      'c2.desc':'Liberty沈船から北へ約100メートル。5メートルから深淵へと落ち込む垂直の壁。壁面はソフトコーラル、ウミウチワ、スポンジに覆われ、様々な小生物が潜んでいます。上部の台地には大型のブダイや海ガメが頻繁に現れます。',
      'c2.accordion':'サイト詳細',
      'c2.f1':'ビーチダイブ、黒砂エントリー','c2.f2':'豊かなソフトコーラルの壁','c2.f3':'バンプヘッドパロットフィッシュ頻出','c2.f4':'時折マンタが現れる',
      'c2.f5':'深場は約24°Cとやや冷たい','c2.f6':'AOW認定を推奨','c2.f7':'朝日の光が幻想的','c2.f8':'流れが変わりやすい — 注意が必要',
      'c3.badge':'初心者向け','c3.title':'コーラルガーデン','c3.tag1':'水深 5〜18m','c3.tag2':'初心者','c3.tag3':'マクロの楽園',
      'c3.desc':'Liberty沈船の南側に広がる鮮やかな浅瀬のサンゴ礁。水中カメラマンやOWD取得したばかりのダイバーに最適な場所です。ウミウシ、ピグミーシーホース、ゴーストパイプフィッシュなどが潜むたびに宝探しのような体験を提供します。',
      'c3.accordion':'サイト詳細',
      'c3.f1':'浅め、初心者に最適','c3.f2':'ピグミーシーホースが頻出','c3.f3':'数十種類のウミウシ','c3.f4':'午前中が最も視界がよい',
      'c3.f5':'マクロ写真の第一候補','c3.f6':'ほぼ流れなし','c3.f7':'ゴーストパイプフィッシュ &amp; ミノカサゴ','c3.f8':'沈船と組み合わせやすい',
      'gallery.label':'施設紹介','gallery.heading':'ダイブ<br>センター','gallery.hint':'ドラッグして探索 — プロ仕様の機材、すべて込み',
      'prac.label':'ダイブ前に','prac.heading':'必要なものはすべてここに。<br>余分なものは何もない。','prac.body':'バリ初訪問でも経験豊富なダイバーでも、トゥランベンでの旅を快適にするための情報が揃っています。',
      'p1.label':'アクセス','p1.title':'デンパサールから','p1.desc':'グラライ国際空港から約2.5時間のドライブ。アグン山の麓を通る壮大な火山景観が続きます。','p1.value':'約2.5時間',
      'p2.label':'ベストシーズン','p2.title':'乾季が最高','p2.desc':'4〜11月の乾季は透明度30メートル超。トゥランベンは通年ダイブ可能ですが、雨季は透明度がやや下がります。','p2.value':'4月 — 11月',
      'p3.label':'ダイブスタイル','p3.title':'そのまま入水','p3.desc':'ボート不要。待ち時間なし。船酔いなし。全サイトがビーチダイブで、黒砂ビーチから直接入れます。','p3.value':'全てビーチエントリー',
      'p4.label':'水温','p4.title':'快適な温かさ','p4.desc':'年間を通じて水面温度は26〜29°C。3mmウェットスーツで十分。深場や夜潜には5mmを推奨。','p4.value':'26〜29°C',
      'p5.label':'オープニング特典','p5.title':'直接予約が最安値','p5.desc':'仲介業者なし。直接予約で最安値を。4時間ガイドダイブ、全機材込み。WhatsAppで即時確認。','p5.value':'Rp 1.000.000 / 4時間',
      'p6.label':'認定','p6.title':'全レベル歓迎','p6.desc':'OWD取得者は沈船の浅いエリアとコーラルガーデンへ潜れます。AOWでドロップオフの深い壁が解放。未取得の方はディスカバースクーバをどうぞ。','p6.value':'OWDから',
      'tips.label':'ライセンス取得','tips.heading':'天国で<br>ダイビングを学ぼう','tips.body':'全コースをPADI認定インストラクターが指導。少人数制、きめ細かい指導、世界クラスのダイブサイトが教室です。',
      'tip1.tag':'初心者 · 経験不要','tip1.title':'オープンウォーターダイバー','tip1.desc':'世界で最も人気のスキューバ認定コース。3〜4日間の学科・プール・海洋実習4回（Liberty沈船）。生涯有効の認定証。','tip1.btn':'詳しく見る →',
      'tip2.tag':'中級 · OWD取得者向け','tip2.title':'アドバンスオープンウォーター','tip2.desc':'より深く（30m）潜り、中性浮力をマスター、流れを読む。ディープとナビゲーションを含む5本のスペシャルティダイブ。','tip2.btn':'詳しく見る →',
      'tip3.tag':'スペシャルティ · AOWD取得者向け','tip3.title':'レスキューダイバー','tip3.desc':'ダイビングへの向き合い方が変わるコース。緊急事態を予防・管理する方法を学ぶ。プロを目指す前に強く推奨。','tip3.btn':'詳しく見る →',
      'tip4.tag':'スペシャルティ · OWD取得者向け','tip4.title':'ナイトロックス（EANx）','tip4.desc':'長く潜って、楽に浮上。エンリッチドエア認定でボトムタイムを延ばし、複数本ダイブ時の窒素負荷を軽減。','tip4.btn':'詳しく見る →',
      'courses.label':'海へ飛び込もう','courses.heading':'水中での<br>最初の一息が待っている','courses.body':'経験なし？問題なし。全機材込み。私たちのガイドはこのリーフで数千回潜った経験があります。',
      'pr1.hot':'人気','pr1.cat':'今日体験 — 認定不要','pr1.title':'体験ダイビング','pr1.r1':'1ダイブ','pr1.r2':'2ダイブ','pr1.r3':'3ダイブ','pr1.btn':'詳しく見る →',
      'pr2.cat':'スペシャルティ体験','pr2.title':'マックダイビング','pr2.r1':'1ダイブ','pr2.r2':'2ダイブ',
      'pr3.cat':'認定ダイバー向け','pr3.title':'ガイドダイブ','pr3.r1':'1ダイブ','pr3.r2':'2ダイブ','pr3.r3':'3ダイブ','pr3.r4':'ナイトダイブ','pr3.btn':'詳しく見る →',
      'cta.heading':'夢見るだけじゃなく。<br><span style="color:var(--accent);font-style:italic;">潜ろう。</span>',
      'cta.sub':'特に夜明けダイブは早い者勝ち。WhatsAppでメッセージを送れば数分で確認完了。あなたの水中の冒険が今始まる。',
      'cta.primary':'今すぐ予約 — 即時確認','cta.ghost':'全料金を見る',
      'ft.addr-lbl':'住所','ft.hours-lbl':'営業時間','ft.hours-val':'毎日午前9時オープン<br>予約制でのダイブも可能',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>予約即時確認',
      'ft.lang-lbl':'言語','ft.lang-val':'英語・インドネシア語<br>PADI認定インストラクター',
      'ft.copy':'© 2026 Paradise Dive Tulamben · インドネシア・バリ',
      'wa.btn':'今すぐ予約','room.title':'ルームツアー',
      'modal.book':'📲 WhatsAppで今すぐ予約','modal.book.course':'📲 WhatsAppでコースを予約',
    },

    /* ── KOREAN 한국어 ── */
    ko: {
      'nav.home':'홈','nav.sites':'다이브 사이트','nav.gallery':'갤러리','nav.courses':'코스','nav.plan':'여행 계획',
      'hero.eyebrow':'공식 사이트 &nbsp;·&nbsp; 발리 툴람벤, 인도네시아',
      'hero.subtitle':'해변을 걷다, 전설 속으로 잠수하세요.','hero.scroll':'스크롤',
      'trust.padi':'PADI 공인 강사','trust.max4':'가이드당 최대 4명',
      'trust.photos':'사진·영상 무료 제공','trust.equipment':'전 장비 포함','trust.booking':'WhatsApp 즉시 예약',
      'intro.label':'왜 툴람벤인가?','intro.heading':'보트 불필요.<br>인파 없음.<br>순수한 다이빙.',
      'intro.body':'검은 모래 해변에서 바로 물속으로 걸어 들어가 아시아 최고의 다이브 사이트 중 하나를 탐험하세요. USAT Liberty 침몰선은 120미터 길이의 2차 세계대전 화물선으로, 수심 3미터부터 시작해 누구에게나 접근 가능합니다. 400종 이상의 물고기가 서식하며, 새벽 다이빙은 거의 혼자 즐길 수 있습니다.',
      'intro.room-btn':'객실 보기',
      'stat.wreck':'탐험 가능한 침몰선 길이(m)','stat.species':'침몰선에 서식하는 어종','stat.shallow':'최소 수심 — 보트 불필요','stat.temp':'연중 따뜻한 수온',
      'story.label':'전쟁에서 태어난 전설','story.heading':'1942년 어뢰 공격.<br>지금은 당신의 모험.',
      'story.body':'1942년 1월 11일 — 일본 어뢰가 롬복 해협에서 USAT Liberty를 격침했습니다. 손상된 배는 툴람벤 해변에 좌초되어 20년을 머뭅니다. 1963년 아궁 화산 폭발로 인한 지진이 배를 바다로 밀어넣으며 전설이 탄생했습니다. 오늘날 선체는 수심 3~30미터에 자리하며, 400종 이상의 생물로 가득합니다.',
      'sites.label':'모험을 선택하세요','sites.heading':'세 번의 다이브.<br>세 개의 세계.',
      'c1.badge':'추천','c1.title':'USAT Liberty<br>침몰선','c1.tag1':'수심 3~30m','c1.tag2':'모든 레벨','c1.tag3':'야간 다이빙',
      'c1.desc':'툴람벤의 심장. 약 120미터 길이의 Liberty는 해안에서 매우 가까워 검은 모래 해변에서 바로 걸어 들어갈 수 있는 세계 최고의 접근성을 자랑하는 침몰선 다이브입니다.',
      'c1.accordion':'사이트 정보',
      'c1.f1':'비치 다이빙 — 보트 불필요','c1.f2':'최소 수심 ~3미터','c1.f3':'훌륭한 야간 다이빙','c1.f4':'나폴레온피시 상주',
      'c1.f5':'선수 프로펠러 여전히 보임','c1.f6':'매우 높은 산호 밀도','c1.f7':'약한 조류, 시야 10~25m','c1.f8':'연중 다이빙 가능',
      'c2.badge':'드라마틱한 벽','c2.title':'툴람벤<br>드롭 오프','c2.tag1':'수심 5~60m','c2.tag2':'중급 이상','c2.tag3':'조류',
      'c2.desc':'Liberty 침몰선에서 북쪽으로 약 100미터 떨어진 곳에 있는 수직 절벽. 5미터부터 심해로 급강하하며, 소프트 코랄과 해양 부채, 해면으로 뒤덮여 있습니다. 대형 앵무새고기와 바다거북이 자주 나타납니다.',
      'c2.accordion':'사이트 정보',
      'c2.f1':'비치 다이빙, 검은 모래 진입','c2.f2':'풍부한 소프트 코랄 벽','c2.f3':'혹등 앵무새고기 자주 출몰','c2.f4':'가끔 만타레이 출현',
      'c2.f5':'심층부 약 24°C로 시원','c2.f6':'AOW 자격증 권장','c2.f7':'일출 때 빛이 환상적','c2.f8':'조류 변동 — 주의 필요',
      'c3.badge':'초보자 환영','c3.title':'코랄 가든','c3.tag1':'수심 5~18m','c3.tag2':'초보자','c3.tag3':'매크로 낙원',
      'c3.desc':'Liberty 침몰선 남쪽에 자리한 화려한 얕은 산호 정원. 수중 사진가와 갓 취득한 OWD 다이버에게 완벽한 장소입니다. 갯민숭달팽이 수십 종, 피그미 해마, 고스트 파이프피시가 매 다이빙마다 보물찾기 같은 경험을 선사합니다.',
      'c3.accordion':'사이트 정보',
      'c3.f1':'얕음, 초보자에게 이상적','c3.f2':'피그미 해마 자주 발견','c3.f3':'수십 종의 갯민숭달팽이','c3.f4':'오전 시야가 최고',
      'c3.f5':'매크로 사진 1순위','c3.f6':'조류 거의 없음','c3.f7':'고스트 파이프피시 &amp; 쏠배감펭','c3.f8':'침몰선과 연계 용이',
      'gallery.label':'다이브 센터','gallery.heading':'센터<br>시설','gallery.hint':'드래그해서 탐색 — 전문 장비, 따뜻한 공간, 모두 포함',
      'prac.label':'다이빙 전 준비','prac.heading':'필요한 건 다 있습니다.<br>없어도 될 건 없습니다.','prac.body':'발리 첫 방문이든 숙련된 다이버든, 툴람벤 여행을 위한 모든 정보가 여기 있습니다.',
      'p1.label':'교통편','p1.title':'덴파사르에서 출발','p1.desc':'응우라라이 국제공항에서 약 2.5시간 드라이브. 아궁 화산 기슭을 따라 장관의 화산 풍경을 감상하며 이동합니다.','p1.value':'약 2.5시간',
      'p2.label':'베스트 시즌','p2.title':'건기가 최고','p2.desc':'4~11월 건기에는 시야가 30미터를 넘습니다. 툴람벤은 연중 다이빙 가능하며, 우기에는 시야가 약간 낮아집니다.','p2.value':'4월 — 11월',
      'p3.label':'다이빙 방식','p3.title':'그냥 걸어 들어가세요','p3.desc':'보트 없음. 대기 없음. 뱃멀미 없음. 모든 사이트가 비치 다이빙 — 검은 모래 해변에서 바로 입수합니다.','p3.value':'전부 비치 다이빙',
      'p4.label':'수온','p4.title':'따뜻하고 편안함','p4.desc':'연중 수면 수온 26~29°C. 3mm 웻슈트로 충분하며, 딥 다이빙이나 야간 다이빙엔 5mm를 권장합니다.','p4.value':'26~29°C',
      'p5.label':'오픈 프로모션','p5.title':'직접 예약 최저가','p5.desc':'중간 업체 없이 직접 예약해서 최저가를 누리세요. 4시간 가이드 다이빙, 전 장비 포함, WhatsApp 즉시 확인.','p5.value':'Rp 1.000.000 / 4시간',
      'p6.label':'자격증','p6.title':'모든 레벨 환영','p6.desc':'OWD 취득자는 침몰선 얕은 구역과 코랄 가든을 다이빙할 수 있습니다. AOW는 드롭 오프 심층 벽을 개방합니다. 자격증 없으세요? 체험 다이빙을 먼저.','p6.value':'OWD부터 시작',
      'tips.label':'자격증 취득','tips.heading':'천국에서<br>다이빙을 배우세요','tips.body':'모든 코스는 PADI 공인 강사가 진행합니다. 소수 정예, 개인 맞춤 지도, 세계적인 다이브 사이트가 교실입니다.',
      'tip1.tag':'초보자 · 경험 불필요','tip1.title':'오픈 워터 다이버','tip1.desc':'세계에서 가장 인기 있는 스쿠버 자격증. 3~4일간의 이론·수영장·해양 실습 4회(Liberty 침몰선). 평생 유효.','tip1.btn':'자세히 보기 →',
      'tip2.tag':'중급 · OWD 필요','tip2.title':'어드밴스드 오픈 워터','tip2.desc':'더 깊이(30m) 잠수하고, 부력을 마스터하며, 조류를 헤쳐나가세요. 딥·내비게이션 포함 5회 스페셜티 다이빙.','tip2.btn':'자세히 보기 →',
      'tip3.tag':'스페셜티 · AOWD 필요','tip3.title':'레스큐 다이버','tip3.desc':'다이빙 방식을 영원히 바꾸는 코스. 다이빙 응급 상황을 예방하고 관리하는 법을 배웁니다. 프로로 가기 전 강력 추천.','tip3.btn':'자세히 보기 →',
      'tip4.tag':'스페셜티 · OWD 필요','tip4.title':'나이트록스 (EANx)','tip4.desc':'더 오래 잠수하고, 더 상쾌하게 부상하세요. 엔리치드 에어 자격증으로 바텀 타임을 늘리고 질소 부하를 줄이세요.','tip4.btn':'자세히 보기 →',
      'courses.label':'물속으로','courses.heading':'수중에서의<br>첫 호흡이 기다립니다','courses.body':'경험 없어도 됩니다. 전 장비 포함. 저희 가이드는 이 리프에서 수천 번의 다이빙 경력을 보유하고 있습니다.',
      'pr1.hot':'인기','pr1.cat':'지금 바로 — 자격증 불필요','pr1.title':'체험 다이빙','pr1.r1':'1회 다이빙','pr1.r2':'2회 다이빙','pr1.r3':'3회 다이빙','pr1.btn':'자세히 보기 →',
      'pr2.cat':'스페셜티 체험','pr2.title':'먹 다이빙','pr2.r1':'1회 다이빙','pr2.r2':'2회 다이빙',
      'pr3.cat':'자격증 보유 다이버','pr3.title':'가이드 다이빙','pr3.r1':'1회 다이빙','pr3.r2':'2회 다이빙','pr3.r3':'3회 다이빙','pr3.r4':'야간 다이빙','pr3.btn':'자세히 보기 →',
      'cta.heading':'꿈만 꾸지 말고.<br><span style="color:var(--accent);font-style:italic;">다이빙하세요.</span>',
      'cta.sub':'자리가 빨리 찹니다 — 특히 새벽 다이빙은요. WhatsApp으로 문의하시면 몇 분 안에 확인해 드립니다.',
      'cta.primary':'지금 예약 — 즉시 확인','cta.ghost':'전체 가격 보기',
      'ft.addr-lbl':'주소','ft.hours-lbl':'운영 시간','ft.hours-val':'매일 오전 9시 오픈<br>예약 다이빙 가능',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>즉시 예약 확인',
      'ft.lang-lbl':'언어','ft.lang-val':'영어 &amp; 인도네시아어<br>PADI 공인 강사',
      'ft.copy':'© 2026 Paradise Dive Tulamben · 인도네시아 발리',
      'wa.btn':'지금 예약','room.title':'객실 투어',
      'modal.book':'📲 WhatsApp으로 예약','modal.book.course':'📲 WhatsApp으로 코스 예약',
    },

    /* ── FRENCH Français ── */
    fr: {
      'nav.home':'Accueil','nav.sites':'Sites de plongée','nav.gallery':'Galerie','nav.courses':'Formations','nav.plan':'Préparer le voyage',
      'hero.eyebrow':'Site officiel &nbsp;·&nbsp; Tulamben, Bali, Indonésie',
      'hero.subtitle':'De la plage à la légende.','hero.scroll':'DÉFILER',
      'trust.padi':'Instructeurs certifiés PADI','trust.max4':'Max 4 plongeurs par guide',
      'trust.photos':'Photos &amp; vidéos offertes','trust.equipment':'Équipement complet inclus','trust.booking':'Réservation instantanée WhatsApp',
      'intro.label':'Pourquoi Tulamben ?','intro.heading':'Sans bateau.<br>Sans foule.<br>Juste la plongée.',
      'intro.body':"Marche directement depuis une plage de sable noir et plonge dans l'un des sites les plus célèbres d'Asie. L'épave USAT Liberty — un cargo de la Seconde Guerre mondiale de 120 mètres — commence à seulement 3 mètres de profondeur, accessible à tous. Plus de 400 espèces y vivent. Les plongées à l'aube sont presque désertes. L'eau est toujours chaude.",
      'intro.room-btn':'Voir les chambres',
      'stat.wreck':"Mètres d'épave à explorer",'stat.species':"Espèces vivant sur l'épave",'stat.shallow':'Entrée la plus proche — sans bateau','stat.temp':"Eau chaude toute l'année",
      'story.label':'Une légende née de la guerre','story.heading':"Torpillé en 1942.<br>À vous d'explorer aujourd'hui.",
      'story.body':"11 janvier 1942 — une torpille japonaise frappe l'USAT Liberty dans le détroit de Lombok. Le navire endommagé s'échoue sur la plage de sable noir de Tulamben, où il repose pendant 20 ans. En 1963, l'éruption du mont Agung le pousse dans la mer — une légende est née. Aujourd'hui il gît entre 3 et 30 mètres, sa coque couverte de coraux grouillant de plus de 400 espèces.",
      'sites.label':'Choisissez votre aventure','sites.heading':'Trois plongées.<br>Trois mondes.',
      'c1.badge':'Coup de cœur','c1.title':'Épave<br>USAT Liberty','c1.tag1':'Profondeur 3–30m','c1.tag2':'Tous niveaux','c1.tag3':'Plongée de nuit',
      'c1.desc':"L'âme de Tulamben. Longue d'environ 120 mètres, la Liberty est si proche du rivage qu'on entre dans l'eau depuis la plage — l'une des épaves les plus accessibles au monde. La coque s'étend de 5 à 30 mètres, offrant quelque chose pour chaque niveau.",
      'c1.accordion':'Détails du site',
      'c1.f1':'Plongée de rive — sans bateau','c1.f2':'Point le plus haut ~3 mètres','c1.f3':'Excellente plongée nocturne','c1.f4':'Napoléon résident',
      'c1.f5':'Hélice de proue encore visible','c1.f6':'Très forte couverture coralienne','c1.f7':'Courant faible, visibilité 10–25m','c1.f8':"Plongeable toute l'année",
      'c2.badge':'Paroi spectaculaire','c2.title':'Drop Off<br>de Tulamben','c2.tag1':'Profondeur 5–60m','c2.tag2':'Intermédiaire+','c2.tag3':'Courant',
      'c2.desc':"Situé à environ 100 mètres au nord de l'épave Liberty, le Drop Off est une paroi verticale plongeant de 5 mètres vers l'abîsse. La façade est tapissée de coraux mous, gorgones et éponges. Sur le plateau au-dessus, de gros poissons-perroquets et des tortues sont des visiteurs réguliers.",
      'c2.accordion':'Détails du site',
      'c2.f1':'Plongée de rive, entrée sable noir','c2.f2':'Paroi de coraux mous luxuriante','c2.f3':'Poisson-perroquet bossu fréquent','c2.f4':'Raie manta occasionnelle',
      'c2.f5':'Plus frais en profondeur ~24°C','c2.f6':'Certification AOW recommandée','c2.f7':'Lumière magique au lever du soleil','c2.f8':'Courant variable — rester vigilant',
      'c3.badge':'Idéal débutants','c3.title':'Jardin de corail','c3.tag1':'Profondeur 5–18m','c3.tag2':'Débutants','c3.tag3':'Paradis macro',
      'c3.desc':"Au sud de l'épave Liberty, un magnifique jardin de corail peu profond — terrain de jeu idéal pour les photographes et les plongeurs OWD récemment certifiés. Des dizaines d'espèces de nudibranches, hippocampes pygmées et poissons fantômes se cachent dans les rochers.",
      'c3.accordion':'Détails du site',
      'c3.f1':'Peu profond, idéal débutants','c3.f2':'Hippocampes pygmées fréquents','c3.f3':"Dizaines d'espèces de nudibranches",'c3.f4':'Meilleure visibilité le matin',
      'c3.f5':'Premier choix pour macro','c3.f6':'Quasiment sans courant','c3.f7':'Poisson fantôme &amp; poisson-lion','c3.f8':"Facilement combiné avec l'épave",
      'gallery.label':'Notre centre','gallery.heading':'Le centre<br>de plongée','gallery.hint':'Glissez pour explorer — équipement professionnel, tout inclus',
      'prac.label':'Avant de plonger','prac.heading':"Tout ce qu'il vous faut.<br>Rien de superflu.",'prac.body':'Première fois à Bali ou plongeur expérimenté — voici tout pour rendre votre séjour à Tulamben sans effort.',
      'p1.label':'Y arriver','p1.title':'Depuis Denpasar','p1.desc':"Environ 2h30 de route depuis l'aéroport international Ngurah Rai, en longeant les pentes du mont Agung dans un paysage volcanique magnifique.",'p1.value':'~2h30',
      'p2.label':'Meilleure saison','p2.title':'La saison sèche règne','p2.desc':"Avril à novembre : saison sèche avec une visibilité dépassant 30 mètres. Tulamben est plongeable toute l'année ; la saison des pluies réduit légèrement la visibilité.",'p2.value':'Avr — Nov',
      'p3.label':'Style de plongée','p3.title':"Il suffit d'entrer",'p3.desc':"Pas de bateau. Pas d'attente. Pas de mal de mer. Tous les sites sont en plongée de rive — entrez simplement depuis la plage de sable noir.",'p3.value':'Tout depuis la rive',
      'p4.label':"Température de l'eau",'p4.title':'Chaud &amp; confortable','p4.desc':"Température de surface 26–29°C toute l'année. Une combinaison 3 mm suffit ; préférez 5 mm pour les plongées profondes ou nocturnes.",'p4.value':'26–29°C',
      'p5.label':"Promo d'ouverture",'p5.title':'Meilleur prix en direct','p5.desc':'Évitez les intermédiaires. Réservez directement pour le meilleur tarif — plongée guidée de 4h, tout équipement compris. Confirmation instantanée via WhatsApp.','p5.value':'Rp 1.000.000 / 4h',
      'p6.label':'Certification','p6.title':'Tous niveaux bienvenus','p6.desc':"Les plongeurs OWD peuvent explorer la zone peu profonde de l'épave et le jardin de corail. L'AOW ouvre la paroi profonde du Drop Off. Sans brevet ? Essayez le Discover Scuba.",'p6.value':'OWD pour commencer',
      'tips.label':'Formations','tips.heading':'Apprenez à plonger<br>au paradis','tips.body':'Toutes les formations sont dispensées par des instructeurs certifiés PADI. Petits groupes, accompagnement personnalisé, sites de plongée de classe mondiale.',
      'tip1.tag':'Débutant · Aucune expérience','tip1.title':'Open Water Diver','tip1.desc':"La certification de plongée la plus populaire au monde. 3–4 jours de théorie, bassin &amp; 4 plongées en mer sur l'épave Liberty. Certifié à vie.",'tip1.btn':'En savoir plus →',
      'tip2.tag':'Intermédiaire · OWD requis','tip2.title':'Advanced Open Water','tip2.desc':"Plongez plus profond (30 m), maîtrisez la flottabilité, naviguez dans les courants. 5 plongées spécialité dont profondeur &amp; navigation.",'tip2.btn':'En savoir plus →',
      'tip3.tag':'Spécialité · AOWD requis','tip3.title':'Rescue Diver','tip3.desc':"Le cours qui change votre façon de plonger pour toujours. Apprenez à prévenir et gérer les urgences. Fortement recommandé avant de devenir professionnel.",'tip3.btn':'En savoir plus →',
      'tip4.tag':'Spécialité · OWD requis','tip4.title':'Nitrox (EANx)','tip4.desc':"Plongez plus longtemps, remontez plus reposé. La certification Enriched Air étend votre temps de fond et réduit la charge en azote sur les multi-plongées.",'tip4.btn':'En savoir plus →',
      'courses.label':"À l'eau",'courses.heading':"Votre premier souffle<br>sous l'eau vous attend",'courses.body':"Sans expérience ? Pas de problème. Tout l'équipement inclus. Nos guides ont des milliers de plongées sur ce récif.",
      'pr1.hot':'Populaire','pr1.cat':"Essayez aujourd'hui — sans brevet",'pr1.title':'Plongée découverte','pr1.r1':'Une plongée','pr1.r2':'Deux plongées','pr1.r3':'Trois plongées','pr1.btn':'En savoir plus →',
      'pr2.cat':'Expérience spécialité','pr2.title':'Muck Diving','pr2.r1':'Une plongée muck','pr2.r2':'Deux plongées muck',
      'pr3.cat':'Plongeurs certifiés','pr3.title':'Plongée guidée','pr3.r1':'Une plongée','pr3.r2':'Deux plongées','pr3.r3':'Trois plongées','pr3.r4':'Plongée nocturne','pr3.btn':'En savoir plus →',
      'cta.heading':'Ne vous contentez pas de rêver.<br><span style="color:var(--accent);font-style:italic;">Plongez.</span>',
      'cta.sub':"Les places partent vite — surtout à l'aube. Écrivez-nous sur WhatsApp et obtenez une confirmation en quelques minutes.",
      'cta.primary':'Réserver — Confirmation immédiate','cta.ghost':'Voir tous les tarifs',
      'ft.addr-lbl':'Adresse','ft.hours-lbl':'Horaires','ft.hours-val':'Ouvert dès 9h00 tous les jours<br>Plongées sur rendez-vous',
      'ft.wa-lbl':'WhatsApp','ft.wa-val':'<a href="https://wa.me/60128001317?text=Hi%20Paradise%20Dive%20Tulamben!%20I%27d%20like%20to%20book%20a%20dive.%20Please%20let%20me%20know%20your%20availability%20%F0%9F%A4%BF" target="_blank" rel="noopener">+60 12-8001317</a><br>Confirmation de réservation instantanée',
      'ft.lang-lbl':'Langues','ft.lang-val':'Anglais &amp; Indonésien<br>Instructeurs certifiés PADI',
      'ft.copy':'© 2026 Paradise Dive Tulamben · Bali, Indonésie',
      'wa.btn':'Réserver','room.title':'Visite des chambres',
      'modal.book':'📲 Réserver sur WhatsApp','modal.book.course':'📲 Réserver la formation sur WhatsApp',
    },
  }; // end T

  /* ═══════════ SELECTOR MAP ═══════════
     Each entry: [cssSelector, translationKey]
     Elements targeted by innerHTML.
  ════════════════════════════════════ */
  const MAP = [
    // Nav links (match nav + footer)
      ['.nav-links a[href="#home"]','nav.home'],
      ['.nav-links a[href="#sites"]','nav.sites'],
      ['.nav-links a[href="#gallery"]','nav.gallery'],
      ['.nav-links a[href="#courses"]','nav.courses'],
      ['.nav-links a[href="#practical"]','nav.plan'],
      ['.nav-links a[href="#tips"]','nav.courses'],

    // Hero
    ['.hero-eyebrow','hero.eyebrow'],
    ['.hero-subtitle','hero.subtitle'],
    ['.scroll-label','hero.scroll'],

    // Trust bar
    ['.trust-item:nth-child(1) .trust-text','trust.padi'],
    ['.trust-item:nth-child(3) .trust-text','trust.max4'],
    ['.trust-item:nth-child(5) .trust-text','trust.photos'],
    ['.trust-item:nth-child(7) .trust-text','trust.equipment'],
    ['.trust-item:nth-child(9) .trust-text','trust.booking'],

    // Intro
    ['#intro .section-title','intro.label'],
    ['#intro .section-heading','intro.heading'],
    ['#intro .section-body','intro.body'],
    ['.room-btn-text','intro.room-btn'],

    // Stats
    ['.stat-grid .stat-box:nth-child(1) .stat-label','stat.wreck'],
    ['.stat-grid .stat-box:nth-child(2) .stat-label','stat.species'],
    ['.stat-grid .stat-box:nth-child(3) .stat-label','stat.shallow'],
    ['.stat-grid .stat-box:nth-child(4) .stat-label','stat.temp'],

    // Story
    ['#story .section-title','story.label'],
    ['#story .section-heading','story.heading'],
    ['#story .section-body','story.body'],

    // Sites header
    ['#sites .sites-header .section-title','sites.label'],
    ['#sites .sites-header .section-heading','sites.heading'],

    // Dive card 1 (2nd child of #sites — 1st is sites-header)
    ['#sites .dive-card:nth-child(2) .card-badge','c1.badge'],
    ['#sites .dive-card:nth-child(2) .card-title','c1.title'],
    ['#sites .dive-card:nth-child(2) .card-tag:nth-child(1)','c1.tag1'],
    ['#sites .dive-card:nth-child(2) .card-tag:nth-child(2)','c1.tag2'],
    ['#sites .dive-card:nth-child(2) .card-tag:nth-child(3)','c1.tag3'],
    ['#sites .dive-card:nth-child(2) .card-desc','c1.desc'],
    ['#sites .dive-card:nth-child(2) .acc-text','c1.accordion'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(1)','c1.f1'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(2)','c1.f2'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(3)','c1.f3'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(4)','c1.f4'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(5)','c1.f5'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(6)','c1.f6'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(7)','c1.f7'],
    ['#sites .dive-card:nth-child(2) .facts-list li:nth-child(8)','c1.f8'],

    // Dive card 2
    ['#sites .dive-card:nth-child(3) .card-badge','c2.badge'],
    ['#sites .dive-card:nth-child(3) .card-title','c2.title'],
    ['#sites .dive-card:nth-child(3) .card-tag:nth-child(1)','c2.tag1'],
    ['#sites .dive-card:nth-child(3) .card-tag:nth-child(2)','c2.tag2'],
    ['#sites .dive-card:nth-child(3) .card-tag:nth-child(3)','c2.tag3'],
    ['#sites .dive-card:nth-child(3) .card-desc','c2.desc'],
    ['#sites .dive-card:nth-child(3) .acc-text','c2.accordion'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(1)','c2.f1'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(2)','c2.f2'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(3)','c2.f3'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(4)','c2.f4'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(5)','c2.f5'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(6)','c2.f6'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(7)','c2.f7'],
    ['#sites .dive-card:nth-child(3) .facts-list li:nth-child(8)','c2.f8'],

    // Dive card 3
    ['#sites .dive-card:nth-child(4) .card-badge','c3.badge'],
    ['#sites .dive-card:nth-child(4) .card-title','c3.title'],
    ['#sites .dive-card:nth-child(4) .card-tag:nth-child(1)','c3.tag1'],
    ['#sites .dive-card:nth-child(4) .card-tag:nth-child(2)','c3.tag2'],
    ['#sites .dive-card:nth-child(4) .card-tag:nth-child(3)','c3.tag3'],
    ['#sites .dive-card:nth-child(4) .card-desc','c3.desc'],
    ['#sites .dive-card:nth-child(4) .acc-text','c3.accordion'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(1)','c3.f1'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(2)','c3.f2'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(3)','c3.f3'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(4)','c3.f4'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(5)','c3.f5'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(6)','c3.f6'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(7)','c3.f7'],
    ['#sites .dive-card:nth-child(4) .facts-list li:nth-child(8)','c3.f8'],

    // Gallery
    ['#gallery .section-title','gallery.label'],
    ['#gallery .section-heading','gallery.heading'],
    ['.gallery-hint','gallery.hint'],

    // Practical
    ['#practical .section-title','prac.label'],
    ['#practical .prac-heading','prac.heading'],
    ['#practical .section-body','prac.body'],
    ['.prac-grid .prac-box:nth-child(1) .prac-label','p1.label'],
    ['.prac-grid .prac-box:nth-child(1) .prac-title','p1.title'],
    ['.prac-grid .prac-box:nth-child(1) .prac-desc','p1.desc'],
    ['.prac-grid .prac-box:nth-child(1) .prac-value','p1.value'],
    ['.prac-grid .prac-box:nth-child(2) .prac-label','p2.label'],
    ['.prac-grid .prac-box:nth-child(2) .prac-title','p2.title'],
    ['.prac-grid .prac-box:nth-child(2) .prac-desc','p2.desc'],
    ['.prac-grid .prac-box:nth-child(2) .prac-value','p2.value'],
    ['.prac-grid .prac-box:nth-child(3) .prac-label','p3.label'],
    ['.prac-grid .prac-box:nth-child(3) .prac-title','p3.title'],
    ['.prac-grid .prac-box:nth-child(3) .prac-desc','p3.desc'],
    ['.prac-grid .prac-box:nth-child(3) .prac-value','p3.value'],
    ['.prac-grid .prac-box:nth-child(4) .prac-label','p4.label'],
    ['.prac-grid .prac-box:nth-child(4) .prac-title','p4.title'],
    ['.prac-grid .prac-box:nth-child(4) .prac-desc','p4.desc'],
    ['.prac-grid .prac-box:nth-child(4) .prac-value','p4.value'],
    ['.prac-grid .prac-box:nth-child(5) .prac-label','p5.label'],
    ['.prac-grid .prac-box:nth-child(5) .prac-title','p5.title'],
    ['.prac-grid .prac-box:nth-child(5) .prac-desc','p5.desc'],
    ['.prac-grid .prac-box:nth-child(5) .prac-value','p5.value'],
    ['.prac-grid .prac-box:nth-child(6) .prac-label','p6.label'],
    ['.prac-grid .prac-box:nth-child(6) .prac-title','p6.title'],
    ['.prac-grid .prac-box:nth-child(6) .prac-desc','p6.desc'],
    ['.prac-grid .prac-box:nth-child(6) .prac-value','p6.value'],

    // Tips / courses
    ['#tips .section-title','tips.label'],
    ['#tips .section-heading','tips.heading'],
    ['#tips .section-body','tips.body'],
    ['.tips-grid .tip-card:nth-child(1) .tip-tag','tip1.tag'],
    ['.tips-grid .tip-card:nth-child(1) .tip-title','tip1.title'],
    ['.tips-grid .tip-card:nth-child(1) .tip-desc','tip1.desc'],
    ['.tips-grid .tip-card:nth-child(1) .btn-learn-more','tip1.btn'],
    ['.tips-grid .tip-card:nth-child(2) .tip-tag','tip2.tag'],
    ['.tips-grid .tip-card:nth-child(2) .tip-title','tip2.title'],
    ['.tips-grid .tip-card:nth-child(2) .tip-desc','tip2.desc'],
    ['.tips-grid .tip-card:nth-child(2) .btn-learn-more','tip2.btn'],
    ['.tips-grid .tip-card:nth-child(3) .tip-tag','tip3.tag'],
    ['.tips-grid .tip-card:nth-child(3) .tip-title','tip3.title'],
    ['.tips-grid .tip-card:nth-child(3) .tip-desc','tip3.desc'],
    ['.tips-grid .tip-card:nth-child(3) .btn-learn-more','tip3.btn'],
    ['.tips-grid .tip-card:nth-child(4) .tip-tag','tip4.tag'],
    ['.tips-grid .tip-card:nth-child(4) .tip-title','tip4.title'],
    ['.tips-grid .tip-card:nth-child(4) .tip-desc','tip4.desc'],
    ['.tips-grid .tip-card:nth-child(4) .btn-learn-more','tip4.btn'],

    // Pricing
    ['#courses .section-title','courses.label'],
    ['#courses .section-heading','courses.heading'],
    ['#courses .section-body','courses.body'],
    ['.pricing-grid .pricing-card:nth-child(1) .pricing-hot','pr1.hot'],
    ['.pricing-grid .pricing-card:nth-child(1) .pricing-category','pr1.cat'],
    ['.pricing-grid .pricing-card:nth-child(1) .pricing-title','pr1.title'],
    ['.pricing-grid .pricing-card:nth-child(1) .pricing-row:nth-child(5) .pricing-name','pr1.r1'],
    ['.pricing-grid .pricing-card:nth-child(1) .pricing-row:nth-child(6) .pricing-name','pr1.r2'],
    ['.pricing-grid .pricing-card:nth-child(1) .pricing-row:nth-child(7) .pricing-name','pr1.r3'],
    ['.pricing-grid .pricing-card:nth-child(1) .btn-learn-more','pr1.btn'],
    ['.pricing-grid .pricing-card:nth-child(2) .pricing-category','pr2.cat'],
    ['.pricing-grid .pricing-card:nth-child(2) .pricing-title','pr2.title'],
    ['.pricing-grid .pricing-card:nth-child(2) .pricing-row:nth-child(3) .pricing-name','pr2.r1'],
    ['.pricing-grid .pricing-card:nth-child(2) .pricing-row:nth-child(4) .pricing-name','pr2.r2'],
    ['.pricing-grid .pricing-card:nth-child(3) .pricing-category','pr3.cat'],
    ['.pricing-grid .pricing-card:nth-child(3) .pricing-title','pr3.title'],
    ['.pricing-grid .pricing-card:nth-child(3) .pricing-row:nth-child(3) .pricing-name','pr3.r1'],
    ['.pricing-grid .pricing-card:nth-child(3) .pricing-row:nth-child(4) .pricing-name','pr3.r2'],
    ['.pricing-grid .pricing-card:nth-child(3) .pricing-row:nth-child(5) .pricing-name','pr3.r3'],
    ['.pricing-grid .pricing-card:nth-child(3) .pricing-row:nth-child(6) .pricing-name','pr3.r4'],
    ['.pricing-grid .pricing-card:nth-child(3) .btn-learn-more','pr3.btn'],

    // CTA
    ['.cta-heading','cta.heading'],
    ['.cta-sub','cta.sub'],
    ['.btn-primary','cta.primary'],
    ['.btn-ghost','cta.ghost'],

    // Footer contact
    ['.footer-contact-item:nth-child(1) .footer-contact-label','ft.addr-lbl'],
    ['.footer-contact-item:nth-child(2) .footer-contact-label','ft.hours-lbl'],
    ['.footer-contact-item:nth-child(2) .footer-contact-value','ft.hours-val'],
    ['.footer-contact-item:nth-child(3) .footer-contact-label','ft.wa-lbl'],
    ['.footer-contact-item:nth-child(3) .footer-contact-value','ft.wa-val'],
    ['.footer-contact-item:nth-child(4) .footer-contact-label','ft.lang-lbl'],
    ['.footer-contact-item:nth-child(4) .footer-contact-value','ft.lang-val'],
    ['.footer-copy','ft.copy'],

    // WhatsApp float & room tour
    ['.wa-btn-text','wa.btn'],
    ['.room-modal-title','room.title'],

    // Modal book buttons
    ['#owd-modal .modal-book-btn','modal.book.course'],
    ['#aowd-modal .modal-book-btn','modal.book.course'],
    ['#rescue-modal .modal-book-btn','modal.book.course'],
    ['#nitrox-modal .modal-book-btn','modal.book.course'],
    ['#intro-dive-modal .modal-book-btn','modal.book'],
    ['#guided-dive-modal .modal-book-btn','modal.book'],
  ];

  /* ═══════════ APPLY LANGUAGE ═══════════ */
  function applyLang(lang) {
    const t = T[lang] || T.en;
    MAP.forEach(function(entry) {
      var sel = entry[0], key = entry[1];
      var val = t[key];
      if (val == null) return;
      document.querySelectorAll(sel).forEach(function(el) {
        el.innerHTML = val;
      });
    });
    document.documentElement.lang = lang;
  }

  /* ═══════════ PUBLIC: setLang ═══════════ */
  var LABELS = { en:'EN', zh:'中', de:'DE', ru:'RU', ja:'JA', ko:'한', fr:'FR' };
  window.setLang = function(lang) {
    applyLang(lang);
    try { localStorage.setItem('pdt-lang', lang); } catch(e) {}
    // Update URL so Google can index each language version
    try {
      var url = new URL(window.location.href);
      if (lang === 'en') { url.searchParams.delete('lang'); } else { url.searchParams.set('lang', lang); }
      history.replaceState(null, '', url.toString());
    } catch(e) {}
    // Update switcher active state
    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    var code = document.getElementById('langCurrentCode');
    if (code) code.textContent = LABELS[lang] || 'EN';
    // Close dropdown
    var sw = document.getElementById('langSwitcher');
    if (sw) sw.classList.remove('open');
  };

  /* ═══════════ INIT ═══════════ */
  document.addEventListener('DOMContentLoaded', function() {
    // Read language from URL param first, then localStorage, then default EN
    var saved = 'en';
    try {
      var urlLang = new URL(window.location.href).searchParams.get('lang');
      if (urlLang && T[urlLang]) { saved = urlLang; }
      else { saved = localStorage.getItem('pdt-lang') || 'en'; }
    } catch(e) { saved = 'en'; }
    if (saved !== 'en') {
      window.setLang(saved);
    } else {
      // Mark EN as active
      document.querySelectorAll('.lang-option').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === 'en');
      });
    }

    // Dropdown toggle
    var btn = document.getElementById('langBtn');
    var sw  = document.getElementById('langSwitcher');
    if (btn && sw) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        sw.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(sw.classList.contains('open')));
      });
      document.addEventListener('click', function() {
        sw.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
      sw.addEventListener('click', function(e) { e.stopPropagation(); });
    }
  });

})();

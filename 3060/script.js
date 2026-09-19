// 数据模型 - 按照您提供的格式
const websiteData = [
            {
                id: 1,
                title: "标准查询",
                icon: "fa-code",
                websites: [
                    { name: "全国认证认可信息公共服务平台", url: "http://cx.cnca.cn/CertECloud/index/index/page", desc: "全国认证认可信息公共服务平台" },
                    { name: "全国标准信息公共服务平台", url: "https://std.samr.gov.cn/", desc: "全国标准信息公共服务平台" },
                    { name: "国家标准全文公开系统", url: "https://openstd.samr.gov.cn/bzgk/gb/index", desc: "国家标准全文公开系统" },
                    { name: "MDSAP标准", url: "https://www.fda.gov/medical-devices/medical-device-single-audit-program-mdsap/mdsap-audit-procedures-and-forms", desc: "MDSAP Audit Procedures and Forms | FDA" },
                    { name: "ISO官网", url: "https://www.iso.org/home.html", desc: "ISO官网" },
                    { name: "GRI标准", url: "https://www.globalreporting.org", desc: "GRI标准下载" },
                    { name: "SASB标准", url: "https://www.sasb.org", desc: "SASB标准下载" },
                    { name: "TCFD", url: "https://www.tcfdhub.org", desc: "气候相关财务信息披露工作组（TCFD）建议案" },
                    { name: "IIRC", url: "https://integratedreporting.org", desc: "国际综合报告委员会（IIRC）框架" },
                    { name: "CDP", url: "https://www.cdp.net/zh", desc: "碳信息披露项目(官网" },
                    { name: "CDSB", url: "https://www.cdsb.net/", desc: "气候披露标准委员会" },
                    { name: "ISSB", url: "https://www.ifrs.org/", desc: "国际可持续发展准则委员会" },
                    { name: "化学品安全法规标准信息平台", url: "https://law.chemicalsafety.org.cn/", desc: "化学品标准下载" }
                ]
            },
            {
                id: 2,
                title: "效率工具",
                icon: "fa-paint-brush",
                websites: [
                    { name: "drow.io", url: "https://app.diagrams.net/", desc: "流程图" },
                    { name: "Excalidraw", url: "https://excalidraw.com/", desc: "流程图" },
                    { name: "process on", url: "https://www.processon.com/login", desc: "流程图" },
                    { name: "WordClouds", url: "https://www.wordclouds.com/", desc: "词云" },
                    { name: "Smallpdf", url: "https://smallpdf.com/cn/unlock-pdf", desc: "PDF工具" },
                    { name: "ALL TO ALL", url: "https://www.alltoall.net/", desc: "PDF工具" },
                    { name: "Dpdf", url: "https://www.dpdf.com/", desc: "PDF工具" },
                    { name: "Ilovepdf", url: "https://www.ilovepdf.com/", desc: "PDF工具" },
                    { name: "PDF24 Tools", url: "https://tools.pdf24.org/zh/", desc: "PDF工具" },
                    { name: "Stirling PDF", url: "https://stirlingpdf.io/?lang=zh_CN", desc: "PDF工具" },
                    { name: "超级PDF", url: "https://xpdf.cn/", desc: "PDF工具" },
                    { name: "EPUB.to", url: "https://www.epub.to/pdf/?lang=zh", desc: "EPUB转PDF" },
                    { name: "在线HEIC转PDF", url: "https://heictopdf.run/zh", desc: "HEIC转PDF" },
                    { name: "ScanNerd", url: "https://scannerd.co/zh", desc: "扫描成PDF" },
                    { name: "CDKM", url: "https://cdkm.com/", desc: "文件格式转换" },
                    { name: "Convertio", url: "https://convertio.co/zh/", desc: "格式转换工具" },
                    { name: "Aconvert", url: "https://www.aconvert.com/cn/", desc: "格式转换工具" },
                    { name: "imgdiet", url: "https://www.imgdiet.com/zh-CN", desc: "图片压缩工具" },
                    { name: "极速图片压缩器", url: "https://www.zgcoder.com/tic/", desc: "图片压缩工具" },
                    { name: "Free Tinypng", url: "https://free.tinypng.site/", desc: "图片压缩工具" },
                    { name: "记灵在线工具", url: "https://remeins.com/", desc: "记灵在线工具" },
                    { name: "FileCodeBox", url: "https://share.lanol.cn/#/", desc: "文件快递柜" },
                    { name: "文叔叔", url: "https://www.wenshushu.cn/", desc: "文件快递柜" },
                    { name: "zrfme", url: "https://mail.zrfme.com/", desc: "临时邮箱" },
                    { name: "临时邮箱", url: "https://tempmailto.online/zh/", desc: "临时邮箱" },
                    { name: "MoeMail", url: "https://moemail.app/", desc: "临时邮箱" },
                    { name: "时间瓶子", url: "https://timebottle.toolooz.com/", desc: "时间小工具" },
                    { name: "Microsoft SAM TTS", url: "https://samtts.com/", desc: "文字转语音" },
                    { name: "gantt-chart", url: "https://gantt.vicsdf.com/", desc: "甘特图生成" },
                    { name: "中国传统色", url: "https://noneko.cn/", desc: "色系查询" }
                ]
            },
            {
                id: 3,
                title: "专业软件",
                icon: "fa-graduation-cap",
                websites: [
                    { name: "格式工厂", url: "https://www.jinzhoutool.com/bing189107598/gszhgc.html?jx=s6.p569917310.g1180877375523224.k73805272990168.c73805046769292&msclkid=b5aec0a6f768170e05daa812f93eb59d", desc: "格式转换" },
                    { name: "ev录屏", url: "https://www.sootool.net/nexus/bi1/evluping.shtml?msclkid=1ea8e3bd237c12b4823d8b092c630dd1", desc: "录屏" },
                    { name: "Everything", url: "https://www.voidtools.com/zh-cn/downloads/", desc: "文件检索" },
                    { name: "PixPin", url: "https://pixpin.cn/", desc: "截长图" },
                    { name: "FastStone Capture", url: "https://www.faststonecapture.cn/", desc: "截长图" },
                    { name: "Fengling", url: "https://fengling.nocmt.com/", desc: "剪贴板同步" },
                    { name: "方方格子", url: "http://www.ffcell.com/", desc: "excel插件" },
                    { name: "51PPT模板", url: "https://www.51pptmoban.com/ppt-soft/", desc: "PPT插件" },
                    { name: "Office Tool Plus", url: "https://otp.landian.vip/zh-cn/#google_vignette", desc: "一键部署Office" }
                ]
            },
            {
                id: 4,
                title: "模板下载",
                icon: "fa-cubes",
                websites: [
                    { name: "微软officePLUS", url: "https://www.officeplus.cn/", desc: "ppt/word/excel" },
                    { name: "优品PPT", url: "https://www.ypppt.com/", desc: "ppt/ppt元素/课件/字体" },
                    { name: "爱PPT", url: "https://www.2ppt.com/", desc: "ppt" },
                    { name: "第1PPT", url: "https://www.1ppt.com/tags/419/", desc: "ppt/ppt元素/字体/音效/课件" }
                ]
            },
            {
                id: 5,
                title: "常用网站",
                icon: "fa-bar-chart",
                websites: [
                  { name: "微软翻译", url: "https://cn.bing.com/translator", desc: "在线翻译" },
                  { name: "DeepL翻译", url: "https://www.deepl.com/zh/translator", desc: "在线翻译" },
                  { name: "有道翻译", url: "https://fanyi.youdao.com/#/TextTranslate", desc: "在线翻译" },
                  { name: "163邮箱", url: "https://mail.163.com/", desc: "邮箱" },
                  { name: "问卷星", url: "https://www.wjx.cn/newwjx/manage/myquestionnaires.aspx?randomt=1744110951", desc: "问卷调查" },
                  { name: "知乎", url: "https://www.zhihu.com/", desc: "知乎" },
                  { name: "百度一下", url: "https://www.baidu.com/index.php?tn=75144485_2_dg&ch=1", desc: "百度搜索" },
                  { name: "123云盘", url: "https://www.123pan.com/", desc: "网盘" },
                  { name: "阿里云盘", url: "https://www.alipan.com/", desc: "网盘" }
                ]
            },
            {
                id: 6,
                title: "AI大模型",
                icon: "fa-line-chart",
                websites: [
                    { name: "DeepSeek", url: "https://chat.deepseek.com/sign_in", desc: "在线AI" },
                    { name: "ima", url: "https://ima.qq.com/?webFrom=10000028", desc: "在线AI" },
                    { name: "豆包", url: "https://www.doubao.com/chat/?channel=baidu_pz&from_login=1", desc: "在线AI" },
                    { name: "百度AI", url: "https://chat.baidu.com/search?isShowHello=1&extParams=%7B%22out_enter_type%22%3A%22sidebar_dialog%22%2C%22enter_type%22%3A%22sidebar_dialog%22%2C%22forceRefresh%22%3Atrue%7D", desc: "在线AI" },
                    { name: "腾讯元宝", url: "https://yuanbao.tencent.com/chat/naQivTmsDa", desc: "在线AI" },
                    { name: "小艺", url: "https://xiaoyi.huawei.com/chat/", desc: "华为小艺AI" },
                    { name: "CodeBuddy", url: "https://copilot.tencent.com/chat/", desc: "腾讯云代码助手" },
                    { name: "扣子空间", url: "https://space.coze.cn/?from=landingpage&keywordid=%E6%89%A3%E5%AD%90%E7%A9%BA%E9%97%B4-&msclkid=beda8a449f5a1495141ee2f6e949910b&utm_campaign=486599295&utm_content=home&utm_id=0&utm_medium=sem&utm_source=bing&utm_source_platform=pc&utm_term=coze_bing_sem_dm_cpc_pc_czkj_pp_guanw_1&category=7524912604796452873", desc: "在线AI" },
                    { name: "秘塔AI搜索", url: "https://metaso.cn/", desc: "在线AI" },
                    { name: "飞书多维表格", url: "https://acnkgpefayvj.feishu.cn/base", desc: "在线AI" },
                    { name: "天工AI", url: "https://www.tiangong.cn/", desc: "在线AI" },
                    { name: "文小言", url: "https://yiyan.baidu.com/", desc: "在线AI" },
                    { name: "ChatGPT", url: "https://chatgpt.com", desc: "AI软件" }
                ]
            },
            {
                id: 7,
                title: "国内法规/认证信息",
                icon: "fa-newspaper-o",
                websites: [
                    { name: "国家法律法规数据库", url: "https://flk.npc.gov.cn/index", desc: "国家法律法规数据库" },
                    { name: "国家市场监督管理总局", url: "https://www.samr.gov.cn/", desc: "国家市场监督管理总局" },
                    { name: "国家药品监督管理局", url: "https://www.nmpa.gov.cn/index.html", desc: "国家药品监督管理局" },
                    { name: "国家税务总局", url: "https://www.chinatax.gov.cn/", desc: "国家税务总局" },
                    { name: "国家知识产权局", url: "http://www.cnipa.gov.cn/", desc: "国家知识产权局" },
                    { name: "国家发展和改革委员会", url: "https://www.ndrc.gov.cn/", desc: "国家发展和改革委员会" },
                    { name: "国家标准化管理委员会", url: "https://www.sac.gov.cn/index.html", desc: "国家标准化管理委员会" },
                    { name: "国家卫生健康委员会", url: "http://www.nhc.gov.cn/", desc: "国家卫生健康委员会" },
                    { name: "中国合格评定国家认可委员会", url: "https://ltbzh.mofcom.gov.cn/ltbz/view/bzfk/listBzfk.jsp", desc: "中国合格评定国家认可委员会" },
                    { name: "卫健委政务服务平台", url: "https://www.nhc.gov.cn/wjw/wsbzxx/wsbz.shtml", desc: "国家卫生健康委员会政务服务平台" },  
                    { name: "食品生产许可获证查询", url: "https://spaqjg.e-cqs.cn/spscxk/", desc: "食品生产许可获证查询" },
                    { name: "特种设备公示信息查询", url: "https://cnse.samr.gov.cn/info-pub/pub", desc: "特种设备公示信息查询" },
                    { name: "国家企业信用信息公示系统", url: "http://www.gsxt.gov.cn/", desc: "国家企业信用信息公示系统" }, 
                    { name: "食品经营许可管理系统", url: "https://spjyxk.gsxt.gov.cn/cfdaPub/index/page/", desc: "食品经营许可管理系统" },
                    { name: "职业卫生技术服务机构信息系统", url: "https://jsfw.zyjkfw.cn/", desc: "全国职业卫生放射卫生技术服务机构管理信息系统" },
                    { name: "中国电子质量监督(e-CQS)公共服务门户", url: "https://psp.e-cqs.cn/egov/iwantMore.jsp?type=1", desc: "中国电子质量监督(e-CQS)公共服务门户" },
                    { name: "中央人民政府", url: "https://www.gov.cn/", desc: "中央人民政府" },
                    { name: "生态环境部", url: "https://www.mee.gov.cn/", desc: "生态环境部" },
                    { name: "商务部", url: "https://ltbzh.mofcom.gov.cn/ltbz/view/bzfk/listBzfk.jsp", desc: "商务部" },
                    { name: "应急管理部", url: "https://www.mem.gov.cn/fw/flfgbz/bz/bzwb/", desc: "应急管理部" },
                    { name: "人力资源和社会保障部", url: "https://www.mohrss.gov.cn/", desc: "人力资源和社会保障部" },
                    { name: "司法部", url: "http://www.moj.gov.cn/", desc: "司法部" },
                    { name: "财政部", url: "http://www.mof.gov.cn/", desc: "财政部" },
                    { name: "外交部", url: "https://www.fmprc.gov.cn/", desc: "外交部" },
                    { name: "科学技术部", url: "https://www.most.gov.cn/", desc: "科学技术部" },
                    { name: "工业和信息化部", url: "https://www.miit.gov.cn/", desc: "工业和信息化部" },
                    { name: "住房和城乡建设部", url: "https://www.mohurd.gov.cn/xinwen/jsyw/index.html", desc: "住房和城乡建设部" },
                    { name: "海关总署", url: "http://www.customs.gov.cn/", desc: "海关总署" }
                ]
            },
            {
                id: 8,
                title: "国内医疗器械合规要求",
                icon: "fa-bolt",
                websites: [
                    { name: "医疗器械注册人委托生产监督管理的公告", url: "https://www.nmpa.gov.cn/xxgk/fgwj/xzhgfxwj/20240403170020128.html", desc: "医疗器械法规" },
                    { name: "医疗器械监督管理条例", url: "https://www.nmpa.gov.cn/xxgk/fgwj/flxzhfg/20250416172904188.html", desc: "医疗器械法规" },
                    { name: "医疗器械委托生产质量协议编制指南", url: "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20220324170135111.html", desc: "医疗器械法规" },
                    { name: "医疗器械跨区域委托生产协同监管工作的意见", url: "https://www.nmpa.gov.cn/xxgk/fgwj/gzwj/gzwjylqx/20220402144923121.html", desc: "医疗器械法规" },
                    { name: "《医疗器械生产质量管理规范》", url: "https://www.nmpa.gov.cn/yaowen/ypjgyw/ylqxyw/20251104174018114.html", desc: "医疗器械法规" },
                    { name: "医疗器械生产监督管理办法", url: "https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_fc2666aec99f4b5d996faa13c4aed7a3.html", desc: "医疗器械法规" },
                    { name: "医疗器械说明书和标签管理规定", url: "https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_0b21c1f7edae42d1a1653a98d28ea99b.html", desc: "医疗器械法规" },
                    { name: "全面深化药品医疗器械监管改革促进医药产业高质量发展的意见", url: "https://www.nmpa.gov.cn/xxgk/fgwj/qita/20250103170940152.html", desc: "医疗器械法规" },
                    { name: "医疗器械生产经营分级监管工作的指导意见", url: "https://www.nmpa.gov.cn/xxgk/fgwj/gzwj/gzwjylqx/20220909171207137.html", desc: "医疗器械法规" },
                ]
            },
            {
                id: 9,
                title: "法规（国外）",
                icon: "fa-tasks",
                websites: [
                    { name: "美国FDA", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm/", desc: "产品注册查询" },
                    { name: "美国CFR", url: "https://www.ecfr.gov/", desc: "Code of Federal Regulations" },
                    { name: "加拿大卫生局（注册）", url: "https://health-products.canada.ca/mdall-limh/prepareSearch?type=active", desc: "产品注册查询" },
                    { name: "加拿大法规SOR/98-282", url: "https://lois-laws.justice.gc.ca/eng/regulations/SOR-98-282/index.html", desc: "SOR/98-282法规下载" },
                    { name: "欧盟EUR-Lex（MDR_IVDR）", url: "https://eur-lex.europa.eu/homepage.html", desc: "EU 2017/745下载" },
                    { name: "REACH清单", url: "https://echa.europa.eu/candidate-list-table", desc: "REACH查询" },
                    { name: "日本PMDA（注册）", url: "https://www.pmda.go.jp/review-services/drug-reviews/foreign-mfr/0003.html", desc: "产品注册查询" },
                    { name: "澳大利亚TGA", url: "https://www.tga.gov.au/", desc: "澳大利亚医疗器械" },
                    { name: "德国MPG", url: "https://www.gesetze-im-internet.de/mpg/", desc: "德国医疗器械" },
                    { name: "德国BfArM", url: "https://www.bfarm.de/DE/Medizinprodukte/Ueberblick/Gesetze-und-Verordnungen/_node.html", desc: "德国医疗器械" },
                    { name: "国际电工委员会（IEC）", url: "https://webstore.iec.ch/", desc: "国际电工委员会（IEC）" }
                ]
            },
            {
                id: 10,
                title: "学教程",
                icon: "fa-cloud",
                websites: [
                    { name: "技能看点", url: "https://wrf00123.github.io/tool6.html", desc: "教程查询" },
                    { name: "懒人Excel", url: "https://www.lanrenexcel.com/", desc: "Excel教程" },
                    { name: "Excel之家", url: "https://www.excelhome.net/", desc: "Excel教程" },
                    { name: "Word联盟", url: "https://www.wordlm.cn/", desc: "Word教程" },
                    { name: "优品PPT", url: "https://www.ypppt.com/jiaocheng/", desc: "PPT教程" },
                    { name: "51PPT模板", url: "https://www.51pptmoban.com/jiaocheng/", desc: "PPT教程" },
                    { name: "我要自学网", url: "https://www.51zxw.net/List.aspx?cid=3", desc: "PPT教程" },
                    { name: "方方格子不显示", url: "http://ffcell.com/WenKu/Data/2016051616004881.html", desc: "方方格子不显示教程" }
                ]
            },
             {
                id: 11,
                title: "开发工具",
                icon: "fa-cloud",
                websites: [
                    { name: "文本对比", url: "https://wrf00123.github.io/wrf/tool1.html", desc: "工具" },
                    { name: "PDF水印移除", url: "https://wrf00123.github.io/wrf/tool2.html", desc: "工具" },
                    { name: "PDF预览", url: "https://wrf00123.github.io/wrf/tool3.html", desc: "工具" },
                    { name: "批量PDF打印助手", url: "https://wrf00123.github.io/wrf/tool7.html", desc: "工具" },    
                    { name: "音频剪辑", url: "https://wrf00123.github.io/wrf/tool4.html", desc: "工具" },
                    { name: "安全检查", url: "https://wrf00123.github.io/wrf/tool5.html", desc: "工具" },
                    { name: "组织结构血脉图", url: "https://wrf00123.github.io/wrf/tool6.html", desc: "工具" },
                    { name: "地图旅行规划", url: "https://wrf00123.github.io/wrf/tool8.html", desc: "工具" }, 
                    { name: "沉浸式时钟", url: "https://wrf00123.github.io/wrf/tool9.html", desc: "工具" }, 
                    { name: "名片生成", url: "https://wrf00123.github.io/wrf/tool10.html", desc: "工具" }, 
                       
                ]
            },
            {
                id: 12,
                title: "学习网站",
                icon: "fa-bolt",
                websites: [
                    { name: "多邻国", url: "https://www.duolingo.com/learn", desc: "英语学习" },
                    { name: "VOA Learning English", url: "https://learningenglish.voanews.com/", desc: "英语学习" },
                    { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/", desc: "英语学习" },
                    { name: "英语巴士网", url: "https://www.engbus.cn/", desc: "英语学习" },
                    { name: "英语口语网", url: "http://www.ny-yy.com/", desc: "英语学习" },
                    { name: "Ries", url: "https://ries.ai/zh/learn-english", desc: "英语学习" },
                    { name: "LetMeEnglish.com", url: "https://letmeenglish.com/", desc: "英语学习" },
                    { name: "English Daily", url: "https://englishdaily.ai/", desc: "英语学习" },
                    { name: "英语小说网", url: "https://yingyuxiaoshuo.com/", desc: "英语小说" }
                ]
            }
          
        ];

// ===== 皮肤（主题）配置：共 10 款皮肤 =====
// ===== 皮肤（主题）配置：共 12 款（7 款浅色 + 5 款深色） =====
const SKINS = [
    { id: 'ios-light', name: '苹果浅色', dark: false, colors: ['#fbfcfe', '#007aff', '#5ac8fa'] },
    { id: 'ocean',     name: '海洋蓝',   dark: false, colors: ['#f2fbfd', '#0891b2', '#38bdf8'] },
    { id: 'forest',    name: '森林绿',   dark: false, colors: ['#f4fcf6', '#16a34a', '#4ade80'] },
    { id: 'sakura',    name: '樱花粉',   dark: false, colors: ['#fff7fb', '#ff4d79', '#ffa3c0'] },
    { id: 'sunset',    name: '暖阳橙',   dark: false, colors: ['#fffaf2', '#f97316', '#fbbf24'] },
    { id: 'graphite',  name: '石墨灰',   dark: false, colors: ['#f8f9fb', '#4b5563', '#9ca3af'] },
    { id: 'lavender',  name: '薰衣草',   dark: false, colors: ['#faf9ff', '#7c3aed', '#c4b5fd'] },
    { id: 'ios-dark',  name: '苹果深色', dark: true,  colors: ['#0b0e13', '#0a84ff', '#64d2ff'] },
    { id: 'midnight',  name: '暗夜紫',   dark: true,  colors: ['#150e2e', '#a78bfa', '#c4b5fd'] },
    { id: 'nebula',    name: '星云粉',   dark: true,  colors: ['#25091f', '#f472b6', '#f9a8d4'] },
    { id: 'nord',      name: '极地冰蓝', dark: true,  colors: ['#101a24', '#7dd3fc', '#a5f3fc'] },
    { id: 'cyber',     name: '赛博绿',   dark: true,  colors: ['#04180f', '#00e39a', '#6bffd0'] }
];

// 存储键
const SKIN_STORAGE_KEY = 'bookmarks-skin';
const THEME_STORAGE_KEY = 'bookmarks-theme'; // 兼容旧版本的主题键
const FAVORITES_STORAGE_KEY = 'bookmarks-favorites';
const TASKBAR_STORAGE_KEY = 'bookmarks-taskbar'; // 底部菜单栏显示状态
const FAVORITES_ID = -1; // "收藏"虚拟分类ID

// 状态管理
let currentCategory = 0; // 0表示显示全部，-1表示收藏
let isDarkMode = false;
let currentSkin = 'ios-light';
let searchQuery = '';
let moreMenuSearchQuery = '';
let hasRenderedOnce = false; // 仅首次渲染时播放入场动画
let isTaskbarVisible = true; // 底部一级菜单栏是否显示
// 收藏集合（以网址URL为唯一标识）
let favoriteUrls = new Set(loadFavorites());

// DOM元素
const bookmarksContainer = document.getElementById('bookmarksContainer');
const bottomMenu = document.getElementById('bottomMenu');
const moreMenu = document.getElementById('moreMenu');
const moreCategories = document.getElementById('moreCategories');
const skinToggle = document.getElementById('skinToggle');
const skinPanel = document.getElementById('skinPanel');
const skinGrid = document.getElementById('skinGrid');
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');
const settingsFavorites = document.getElementById('settingsFavorites');
const settingsFavCount = document.getElementById('settingsFavCount');
const settingsTaskbar = document.getElementById('settingsTaskbar');
const settingsTaskbarSwitch = document.getElementById('settingsTaskbarSwitch');
const settingsShortcuts = document.getElementById('settingsShortcuts');
const shortcutModal = document.getElementById('shortcutModal');
const shortcutModalClose = document.getElementById('shortcutModalClose');
const taskbarHandle = document.getElementById('taskbarHandle');
const searchClear = document.getElementById('searchClear');
const toastEl = document.getElementById('toast');
const searchInput = document.getElementById('searchInput');

const searchBox = document.getElementById('searchBox');
const moreMenuSearch = document.getElementById('moreMenuSearch');

// 本地存储的安全读写（隐私模式下 localStorage 可能不可用）
function storageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function storageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // 忽略存储异常（例如隐私模式 / 存储已满）
    }
}

// ===== 通用小工具 =====
// 转义 HTML，避免数据中的特殊字符破坏页面结构
function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// 初始化
function init() {
    renderSkinGrid();
    initSkin();
    initTaskbar();
    renderCategories();
    renderBookmarks();
    updateFavoritesCountUI();
    updateSearchClear();
    setupEventListeners();
}

// 渲染分类菜单 - 固定8个按钮（全部 + 前6个分类 + 更多）
function renderCategories() {
    // 清空底部菜单
    bottomMenu.innerHTML = '';
    
    // 添加"全部"菜单项（第一个按钮）
    const allMenuItem = createMenuItem(0, "全部", "fas fa-globe", currentCategory === 0);
    bottomMenu.appendChild(allMenuItem);
    
    // 添加前6个分类（第2-7个按钮）
    const categoriesToShow = websiteData.slice(0, 6);
    categoriesToShow.forEach(category => {
        const isActive = currentCategory === category.id;
        // 根据分类名称设置合适的图标
        let icon = category.icon;
        switch(category.title) {
            case "国际标准":
                icon = "fa-flag";
                break;
            case "国家标准":
                icon = "fa-book";
                break;
            case "行业标准":
                icon = "fa-industry";
                break;
            case "地方标准":
                icon = "fa-map-marker-alt";
                break;
            case "团体标准":
                icon = "fa-users";
                break;
            case "其他标准":
                icon = "fa-file-alt";
                break;
            case "资质查询":
                icon = "fa-id-card";
                break;
            case "程序开发":
                icon = "fa-code";
                break;
            case "办公工具":
                icon = "fa-desktop";
                break;
            case "效率工具":
                icon = "fa-bolt";
                break;
            case "专业软件":
                icon = "fa-cogs";
                break;
            case "模板下载":
                icon = "fa-download";
                break;
            case "图库":
                icon = "fa-images";
                break;
            case "常用网站":
                icon = "fa-link";
                break;
            case "AI模型":
                icon = "fa-robot";
                break;
            case "国内法规":
                icon = "fa-gavel";
                break;
            case "合同范本":
                icon = "fa-file-contract";
                break;
            case "学教程":
                icon = "fa-graduation-cap";
                break;
            case "学习网站":
                icon = "fa-book-open";
                break;
            case "资源网站":
                icon = "fa-folder-open";
                break;
            case "科普网站":
                icon = "fa-lightbulb";
                break;
            case "有趣网站":
                icon = "fa-gamepad";
                break;
            case "邮箱":
                icon = "fa-envelope";
                break;
            case "采购平台":
                icon = "fa-shopping-cart";
                break;
            case "招聘平台":
                icon = "fa-user-plus";
                break;
            case "其他":
                icon = "fa-ellipsis-h";
                break;
            default:
                icon = "fa-search";
        }
        const menuItem = createMenuItem(category.id, category.title, `fas ${icon}`, isActive);
        bottomMenu.appendChild(menuItem);
    });
    
    // 添加"更多"按钮（第8个按钮）
    const moreMenuItem = document.createElement('div');
    moreMenuItem.className = 'menu-item';
    moreMenuItem.id = 'moreMenuItem';
    moreMenuItem.innerHTML = `
        <i class="fas fa-ellipsis-h"></i>
        <span>更多</span>
    `;
    moreMenuItem.addEventListener('click', toggleMoreMenu);
    bottomMenu.appendChild(moreMenuItem);
    
    // 渲染更多菜单内容
    renderMoreCategories();
    
    // 添加网址征集按钮
    addUrlCollectionButton();
}

// 创建菜单项
function createMenuItem(id, title, icon, isActive) {
    const menuItem = document.createElement('div');
    menuItem.className = `menu-item ${isActive ? 'active' : ''}`;
    menuItem.dataset.id = id;
    menuItem.innerHTML = `
        <i class="${icon}"></i>
        <span>${title}</span>
    `;
    
    menuItem.addEventListener('click', () => {
        selectCategory(id);
    });
    
    return menuItem;
}

// 统一处理分类切换（含收藏）
function selectCategory(id) {
    currentCategory = id;
    searchQuery = '';
    searchInput.value = '';
    moreMenuSearchQuery = '';
    moreMenuSearch.value = '';
    
    renderBookmarks();
    updateActiveMenu();
    
    // 关闭更多菜单（如果打开）
    moreMenu.classList.remove('active');
    
    // 同步"更多"菜单中的高亮状态
    renderMoreCategories();
    
    // 切换分类后回到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 创建"更多"菜单中的分类项
function createMoreCategoryItem(id, title, icon, count) {
    const item = document.createElement('div');
    item.className = `more-category-item ${currentCategory === id ? 'active' : ''}`;
    item.innerHTML = `
        <div class="more-category-name">
            <i class="fas ${icon}"></i> ${title}
        </div>
        <div class="more-category-count">${count}</div>
    `;
    item.addEventListener('click', () => selectCategory(id));
    return item;
}

// 渲染更多分类
function renderMoreCategories() {
    moreCategories.innerHTML = '';
    
    // 先添加"全部"分类按钮
    const totalCount = websiteData.reduce((sum, cat) => sum + cat.websites.length, 0);
    moreCategories.appendChild(createMoreCategoryItem(0, '全部', 'fa-globe', totalCount));
    
    // 筛选更多分类
    let filteredCategories = [];
    
    if (moreMenuSearchQuery) {
        // 仅搜索分类名称
        const searchLower = moreMenuSearchQuery.toLowerCase();
        filteredCategories = websiteData.filter(category => 
            category.title.toLowerCase().includes(searchLower)
        );
    } else {
        // 显示所有分类
        filteredCategories = [...websiteData];
    }
    
    // 渲染筛选后的分类
    filteredCategories.forEach(category => {
        // 自动统计网址数量
        const count = category.websites.length;
        
        // 根据分类名称设置合适的图标
        let icon = category.icon;
        switch(category.title) {
            case "国际标准":
                icon = "fa-flag";
                break;
            case "国家标准":
                icon = "fa-book";
                break;
            case "行业标准":
                icon = "fa-industry";
                break;
            case "地方标准":
                icon = "fa-map-marker-alt";
                break;
            case "团体标准":
                icon = "fa-users";
                break;
            case "其他标准":
                icon = "fa-file-alt";
                break;
            case "资质查询":
                icon = "fa-id-card";
                break;
            case "程序开发":
                icon = "fa-code";
                break;
            case "办公工具":
                icon = "fa-desktop";
                break;
            case "效率工具":
                icon = "fa-bolt";
                break;
            case "专业软件":
                icon = "fa-cogs";
                break;
            case "模板下载":
                icon = "fa-download";
                break;
            case "图库":
                icon = "fa-images";
                break;
            case "常用网站":
                icon = "fa-link";
                break;
            case "AI模型":
                icon = "fa-robot";
                break;
            case "国内法规":
                icon = "fa-gavel";
                break;
            case "合同范本":
                icon = "fa-file-contract";
                break;
            case "学教程":
                icon = "fa-graduation-cap";
                break;
            case "学习网站":
                icon = "fa-book-open";
                break;
            case "资源网站":
                icon = "fa-folder-open";
                break;
            case "科普网站":
                icon = "fa-lightbulb";
                break;
            case "有趣网站":
                icon = "fa-gamepad";
                break;
            case "邮箱":
                icon = "fa-envelope";
                break;
            case "采购平台":
                icon = "fa-shopping-cart";
                break;
            case "招聘平台":
                icon = "fa-user-plus";
                break;
            case "其他":
                icon = "fa-ellipsis-h";
                break;
            default:
                icon = "fa-search";
        }
        
        moreCategories.appendChild(createMoreCategoryItem(category.id, category.title, icon, count));
    });
    
    // 如果没有匹配的分类且不是空搜索，显示提示
    if (filteredCategories.length === 0 && moreMenuSearchQuery) {
        const noResults = document.createElement('div');
        noResults.className = 'more-category-item';
        noResults.innerHTML = `
            <div class="more-category-name">
                未找到匹配的分类
            </div>
        `;
        moreCategories.appendChild(noResults);
    }
}

// 添加网址征集按钮
function addUrlCollectionButton() {
    // 创建网址征集按钮
    const collectionButton = document.createElement('a');
    collectionButton.className = 'icon-btn';
    collectionButton.href = 'https://www.wjx.top/vm/wAGGMpW.aspx#';
    collectionButton.target = '_blank';
    collectionButton.rel = 'noopener noreferrer';
    collectionButton.innerHTML = `
        <i class="fas fa-plus-circle"></i>
    `;
    collectionButton.title = '网址征集';
    
    // 添加到主题切换按钮容器中，使所有按钮相邻
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        headerActions.insertBefore(collectionButton, null);
    } else {
        // 如果没有header-actions容器，添加到header末尾
        const header = document.querySelector('.header');
        header.appendChild(collectionButton);
    }
}

// 切换更多菜单
function toggleMoreMenu(e) {
    if (e) e.stopPropagation();
    moreMenu.classList.toggle('active');
    
    // 移除自动聚焦，只有点击搜索框时才弹出键盘
}

// 为更多菜单搜索框添加点击事件，确保点击时能正确聚焦
moreMenuSearch.addEventListener('click', (e) => {
    e.stopPropagation();
    moreMenuSearch.focus();
});

// 渲染书签卡片
function renderBookmarks() {
    // 清空容器
    bookmarksContainer.innerHTML = '';
    
    // 筛选网址
    let filteredWebsites = [];
    
    if (currentCategory === FAVORITES_ID) {
        // 显示所有已收藏的网址
        filteredWebsites = getAllWebsites().filter(website => favoriteUrls.has(website.url));
    } else if (currentCategory === 0) {
        // 显示全部网址
        websiteData.forEach(category => {
            filteredWebsites.push(...category.websites.map(website => ({
                ...website,
                categoryId: category.id,
                categoryTitle: category.title
            })));
        });
    } else {
        // 显示当前分类的网址
        const category = websiteData.find(cat => cat.id === currentCategory);
        if (category) {
            filteredWebsites = category.websites.map(website => ({
                ...website,
                categoryId: category.id,
                categoryTitle: category.title
            }));
        }
    }
    
    // 应用搜索过滤
    if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        filteredWebsites = filteredWebsites.filter(website => 
            website.name.toLowerCase().includes(searchLower) ||
            (website.desc && website.desc.toLowerCase().includes(searchLower))
        );
        
        // 排序：名称匹配优先于用途匹配
        filteredWebsites.sort((a, b) => {
            const aNameMatch = a.name.toLowerCase().includes(searchLower);
            const bNameMatch = b.name.toLowerCase().includes(searchLower);
            const aDescMatch = a.desc && a.desc.toLowerCase().includes(searchLower);
            const bDescMatch = b.desc && b.desc.toLowerCase().includes(searchLower);
            
            // 名称匹配优先
            if (aNameMatch && !bNameMatch) return -1;
            if (!aNameMatch && bNameMatch) return 1;
            
            // 其次是描述匹配
            if (aDescMatch && !bDescMatch) return -1;
            if (!aDescMatch && bDescMatch) return 1;
            
            // 都匹配或都不匹配时按名称字母顺序
            return a.name.localeCompare(b.name, 'zh-CN');
        });
    }
    
    // 如果没有网址，显示提示
    if (filteredWebsites.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'no-results';
        if (searchQuery) {
            emptyMessage.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>没有找到网址</h3>
                <p>未找到与"${searchQuery}"相关的网址</p>
            `;
        } else if (currentCategory === FAVORITES_ID) {
            emptyMessage.innerHTML = `
                <i class="far fa-heart"></i>
                <h3>还没有收藏任何网址</h3>
                <p>点击卡片右上角的爱心图标，即可把常用网址加入收藏</p>
            `;
        } else {
            emptyMessage.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>没有找到网址</h3>
                <p>当前分类没有网址</p>
            `;
        }
        bookmarksContainer.appendChild(emptyMessage);
        hasRenderedOnce = true;
        return;
    }
    
    // 按分类分组网址（仅当显示全部且没有搜索时）
    if (currentCategory === 0 && !searchQuery) {
        // 显示所有分类的网址，按分类分组
        const categoriesWithWebsites = websiteData.filter(category => {
            const categoryWebsites = filteredWebsites.filter(
                website => website.categoryId === category.id
            );
            return categoryWebsites.length > 0;
        });
        
        categoriesWithWebsites.forEach(category => {
            const categoryWebsites = filteredWebsites.filter(
                website => website.categoryId === category.id
            );
            renderCategorySection(category, categoryWebsites);
        });
    } else {
        // 显示当前分类的网址或搜索结果
        let category;
        if (currentCategory === 0) {
            category = {
                id: 0,
                title: searchQuery ? `搜索结果: "${searchQuery}"` : "全部网址",
                icon: "fa-globe"
            };
        } else if (currentCategory === FAVORITES_ID) {
            category = {
                id: FAVORITES_ID,
                title: searchQuery ? `收藏中搜索: "${searchQuery}"` : "我的收藏",
                icon: "fa-heart"
            };
        } else {
            category = websiteData.find(cat => cat.id === currentCategory);
        }
            
        if (category) {
            renderCategorySection(category, filteredWebsites);
        }
    }
    
    hasRenderedOnce = true;
}

// ===== 收藏功能 =====
// 读取本地保存的收藏
function loadFavorites() {
    try {
        const raw = storageGet(FAVORITES_STORAGE_KEY);
        if (!raw) return [];
        const list = JSON.parse(raw);
        return Array.isArray(list) ? list.filter(item => typeof item === 'string') : [];
    } catch (e) {
        return [];
    }
}

// 保存收藏到本地
function saveFavorites() {
    storageSet(FAVORITES_STORAGE_KEY, JSON.stringify([...favoriteUrls]));
}

// 获取所有网址（附带所属分类信息）
function getAllWebsites() {
    const all = [];
    websiteData.forEach(category => {
        category.websites.forEach(website => {
            all.push({
                ...website,
                categoryId: category.id,
                categoryTitle: category.title
            });
        });
    });
    return all;
}

// 切换收藏状态，返回切换后的状态
function toggleFavorite(url) {
    let isFav;
    if (favoriteUrls.has(url)) {
        favoriteUrls.delete(url);
        isFav = false;
    } else {
        favoriteUrls.add(url);
        isFav = true;
    }
    saveFavorites();
    return isFav;
}

// 更新卡片收藏按钮外观
function updateFavButton(favBtn, card, isFav) {
    favBtn.classList.toggle('active', isFav);
    favBtn.title = isFav ? '取消收藏' : '加入收藏';
    favBtn.setAttribute('aria-label', favBtn.title);
    favBtn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
    card.classList.toggle('is-favorite', isFav);
    
    // 播放一次心形跳动动画
    favBtn.classList.remove('pop');
    void favBtn.offsetWidth; // 触发重排以重启动画
    favBtn.classList.add('pop');
}

// 刷新设置面板中的收藏数量与状态
function updateFavoritesCountUI() {
    if (settingsFavCount) {
        settingsFavCount.textContent = favoriteUrls.size;
        settingsFavCount.classList.toggle('empty', favoriteUrls.size === 0);
    }
    if (settingsFavorites) {
        settingsFavorites.classList.toggle('active', currentCategory === FAVORITES_ID);
    }
}

// 打开"我的收藏"视图（设置面板 / 快捷键 F）
function openFavorites(silent) {
    selectCategory(FAVORITES_ID);
    if (!silent) {
        toast(favoriteUrls.size > 0
            ? `我的收藏：共 ${favoriteUrls.size} 个网址`
            : '还没有收藏任何网址', 'fa-heart');
    }
}

// 渲染分类部分
function renderCategorySection(category, websites) {
    // 使用文档片段减少DOM操作，避免闪烁
    const fragment = document.createDocumentFragment();
    
    // 创建分类标题 - 全部文字改为灰色
    const categoryTitle = document.createElement('h2');
    categoryTitle.className = 'category-title';
    
    // 根据分类名称设置合适的图标，与菜单栏保持一致
    let icon = category.icon;
    switch(category.title) {
        case "国际标准":
            icon = "fa-flag";
            break;
        case "国家标准":
            icon = "fa-book";
            break;
        case "行业标准":
            icon = "fa-industry";
            break;
        case "地方标准":
            icon = "fa-map-marker-alt";
            break;
        case "团体标准":
            icon = "fa-users";
            break;
        case "其他标准":
            icon = "fa-file-alt";
            break;
        case "资质查询":
            icon = "fa-id-card";
            break;
        case "程序开发":
            icon = "fa-code";
            break;
        case "办公工具":
            icon = "fa-desktop";
            break;
        case "效率工具":
            icon = "fa-bolt";
            break;
        case "专业软件":
            icon = "fa-cogs";
            break;
        case "模板下载":
            icon = "fa-download";
            break;
        case "图库":
            icon = "fa-images";
            break;
        case "常用网站":
            icon = "fa-link";
            break;
        case "AI模型":
            icon = "fa-robot";
            break;
        case "国内法规":
            icon = "fa-gavel";
            break;
        case "合同范本":
            icon = "fa-file-contract";
            break;
        case "学教程":
            icon = "fa-graduation-cap";
            break;
        case "学习网站":
            icon = "fa-book-open";
            break;
        case "资源网站":
            icon = "fa-folder-open";
            break;
        case "科普网站":
            icon = "fa-lightbulb";
            break;
        case "有趣网站":
            icon = "fa-gamepad";
            break;
        case "邮箱":
            icon = "fa-envelope";
            break;
        case "采购平台":
            icon = "fa-shopping-cart";
            break;
        case "招聘平台":
            icon = "fa-user-plus";
            break;
        case "其他":
            icon = "fa-ellipsis-h";
            break;
        default:
            // 处理搜索结果、全部网址和收藏的情况
            if (category.title.includes("收藏")) {
                icon = "fa-heart";
            } else if (category.title.includes("搜索结果") || category.title.includes("全部网址")) {
                icon = "fa-globe";
            } else {
                icon = "fa-search";
            }
    }
    
    categoryTitle.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${escapeHtml(category.title)}</span>
        <span class="cat-count">${websites.length}</span>
    `;
    fragment.appendChild(categoryTitle);
    
    // 创建网址网格
    const bookmarksGrid = document.createElement('div');
    bookmarksGrid.className = 'bookmarks-grid' + (hasRenderedOnce ? '' : ' animate-in');
    
    // 添加网址卡片：只展示名称 / 简介 / 分类，不展示网址与首字图标
    websites.forEach((website, index) => {
        const isFav = favoriteUrls.has(website.url);
        const card = document.createElement('a');
        card.className = 'bookmark-card' + (isFav ? ' is-favorite' : '');
        card.href = website.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.style.animationDelay = `${Math.min(index, 12) * 25}ms`;
        card.innerHTML = `
            <div class="card-top">
                <span class="fav-btn${isFav ? ' active' : ''}" role="button" tabindex="-1"
                      title="${isFav ? '取消收藏' : '加入收藏'}" aria-label="${isFav ? '取消收藏' : '加入收藏'}">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </span>
            </div>
            <div class="bookmark-title">${escapeHtml(website.name)}</div>
            <div class="bookmark-desc">${escapeHtml(website.desc || '')}</div>
            <div class="card-foot">
                <span class="bookmark-category">${escapeHtml(website.categoryTitle || category.title)}</span>
            </div>
        `;
        
        // 收藏按钮：阻止卡片跳转，只切换收藏状态
        const favBtn = card.querySelector('.fav-btn');
        favBtn.addEventListener('click', (e) => {
            // 阻止卡片本身的跳转，只切换收藏状态
            e.preventDefault();
            const nowFavorite = toggleFavorite(website.url);
            updateFavButton(favBtn, card, nowFavorite);
            toast(nowFavorite ? '已加入收藏' : '已取消收藏', nowFavorite ? 'fa-heart' : 'fa-heart-crack');
            
            // 同步设置面板中的收藏数量
            updateFavoritesCountUI();
            
            if (currentCategory === FAVORITES_ID) {
                // 在收藏列表中取消收藏后自动刷新列表（等心形动画播完）
                setTimeout(renderBookmarks, 260);
            }
        });
        
        bookmarksGrid.appendChild(card);
    });
    
    fragment.appendChild(bookmarksGrid);
    
    // 一次性添加到DOM，减少重排重绘
    bookmarksContainer.appendChild(fragment);
}

// 更新活动菜单项
function updateActiveMenu() {
    // 移除所有菜单项的active类
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 找到对应的菜单项并添加active类（收藏视图不在菜单栏中，故此处不会命中）
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (parseInt(item.dataset.id) === currentCategory) {
            item.classList.add('active');
        }
    });
    
    // 更新更多菜单中的active状态
    document.querySelectorAll('.more-category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 收藏视图时高亮设置按钮，提示当前处于收藏页
    if (settingsToggle) {
        settingsToggle.classList.toggle('is-active', currentCategory === FAVORITES_ID);
    }
    updateFavoritesCountUI();
}

// ===== 面板控制 =====
// 关闭全部弹出面板，返回是否有面板被关闭
function closeAllPanels() {
    let closed = false;
    if (closeShortcuts()) closed = true;
    [skinPanel, settingsPanel].forEach(panel => {
        if (panel && panel.classList.contains('active')) {
            panel.classList.remove('active');
            closed = true;
        }
    });
    if (moreMenu.classList.contains('active')) {
        moreMenu.classList.remove('active');
        closed = true;
    }
    return closed;
}

// 打开指定面板（同时关闭其他面板）
function openPanel(panel) {
    const wasActive = panel.classList.contains('active');
    closeAllPanels();
    if (!wasActive) {
        panel.classList.add('active');
    }
}

// ===== 快捷键支持 =====
// 判断当前焦点是否在输入框内（此时不响应字母快捷键）
function isTypingTarget(el) {
    if (!el) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

// "/" 聚焦搜索框
function focusSearch() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    searchInput.focus();
    if (searchInput.value) searchInput.select();
}

// 清除搜索内容
function clearSearch(silent) {
    if (!searchQuery && !searchInput.value) return false;
    searchInput.value = '';
    searchQuery = '';
    updateSearchClear();
    renderBookmarks();
    if (!silent) toast('已清除搜索', 'fa-eraser');
    return true;
}

// 搜索框清除按钮的显示状态
function updateSearchClear() {
    if (!searchClear) return;
    const hasValue = !!searchInput.value;
    searchClear.classList.toggle('visible', hasValue);
    if (searchBox) searchBox.classList.toggle('has-value', hasValue);
}

// Shift + ? / 设置面板入口：打开快捷键说明弹窗（独立弹窗）
function openShortcuts() {
    if (!shortcutModal) return;
    closeAllPanels();
    shortcutModal.classList.add('active');
    shortcutModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (shortcutModalClose) shortcutModalClose.focus();
}

// 关闭快捷键说明弹窗，返回是否真的关闭了
function closeShortcuts() {
    if (!shortcutModal || !shortcutModal.classList.contains('active')) return false;
    shortcutModal.classList.remove('active');
    shortcutModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    return true;
}

// 键盘快捷键总入口
function handleShortcutKeys(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    
    const key = e.key;
    
    // Esc：优先关闭面板，其次清空搜索
    if (key === 'Escape') {
        if (closeAllPanels()) return;
        if (clearSearch()) return;
        if (document.activeElement) document.activeElement.blur();
        return;
    }
    
    // 快捷键弹窗打开时，只响应 Esc 关闭
    if (shortcutModal && shortcutModal.classList.contains('active')) return;

    // 正在输入时不触发字母快捷键
    if (isTypingTarget(e.target)) return;
    
    // Shift + ? ：打开快捷键说明
    if (key === '?' || key === '？') {
        e.preventDefault();
        openShortcuts();
        return;
    }
    
    // / ：聚焦搜索框
    if (key === '/') {
        e.preventDefault();
        focusSearch();
        return;
    }
    
    switch (key.toLowerCase()) {
        case 't': // 切换皮肤
            e.preventDefault();
            cycleSkin();
            break;
        case 'f': // 查看收藏
            e.preventDefault();
            openFavorites();
            break;
        case 'h': // 显示 / 隐藏底部菜单栏
            e.preventDefault();
            toggleTaskbar();
            break;
        default:
            break;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // ===== 顶部按钮 =====
    // 设置面板（收藏 / 快捷键说明 / 菜单栏开关）
    settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        openPanel(settingsPanel);
    });
    settingsPanel.addEventListener('click', (e) => e.stopPropagation());
    
    // 皮肤面板
    skinToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        openPanel(skinPanel);
    });
    skinPanel.addEventListener('click', (e) => e.stopPropagation());
    
    // 点击页面其他位置时关闭所有面板
    document.addEventListener('click', () => {
        closeAllPanels();
    });
    
    // ===== 设置面板内的操作 =====
    settingsFavorites.addEventListener('click', () => {
        settingsPanel.classList.remove('active');
        openFavorites();
    });
    
    settingsTaskbar.addEventListener('click', () => {
        toggleTaskbar();
    });

    // ===== 快捷键说明弹窗 =====
    if (settingsShortcuts) {
        settingsShortcuts.addEventListener('click', (e) => {
            e.stopPropagation();
            openShortcuts();
        });
    }
    if (shortcutModal) {
        shortcutModal.addEventListener('click', (e) => {
            e.stopPropagation();
            // 点击遮罩空白处关闭
            if (e.target === shortcutModal) closeShortcuts();
        });
    }
    if (shortcutModalClose) {
        shortcutModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeShortcuts();
        });
    }
    


    // ===== 品牌 Logo：一键回到「全部」 =====
    const brandHome = document.getElementById('brandHome');
    if (brandHome) {
        brandHome.addEventListener('click', (e) => {
            e.preventDefault();
            selectCategory(0);
        });
    }
    // ===== 搜索 =====
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        updateSearchClear();
        renderBookmarks();
    });
    
    searchClear.addEventListener('click', (e) => {
        e.stopPropagation();
        clearSearch();
        searchInput.focus();
    });
    
    // 更多菜单搜索框
    moreMenuSearch.addEventListener('input', (e) => {
        moreMenuSearchQuery = e.target.value.trim();
        renderMoreCategories();
    });
    
    // 点击其他地方关闭更多菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#moreMenuItem') && !e.target.closest('#moreMenu')) {
            moreMenu.classList.remove('active');
        }
    });
    
    // ===== 底部菜单栏折叠 / 唤起 =====
    taskbarHandle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTaskbar();
    });
    
    // ===== 键盘快捷键 =====
    document.addEventListener('keydown', handleShortcutKeys);
    
    // 修复更多菜单滚动问题
    moreMenu.addEventListener('wheel', (e) => {
        // 阻止事件冒泡，防止滚动传播到body
        e.stopPropagation();
        
        // 检查是否需要滚动更多菜单
        const moreMenuCategories = document.querySelector('.more-menu-categories');
        const isAtTop = moreMenuCategories.scrollTop === 0;
        const isAtBottom = moreMenuCategories.scrollHeight - moreMenuCategories.scrollTop === moreMenuCategories.clientHeight;
        
        // 如果正在向上滚动且已经在顶部，或者向下滚动且已经在底部
        // 则阻止默认行为，防止body滚动
        if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // 阻止更多菜单区域外的滚动传播
    document.addEventListener('wheel', (e) => {
        if (moreMenu.classList.contains('active') && 
            !e.target.closest('.more-menu') && 
            !e.target.closest('#moreMenuItem')) {
            // 当更多菜单打开且滚动事件发生在菜单外时，阻止body滚动
            e.preventDefault();
        }
    }, { passive: false });
    
    // 优化滚动性能，减少卡片闪烁
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        // 清除之前的定时器
        clearTimeout(scrollTimeout);
        
        // 在滚动期间暂停部分动画
        document.querySelectorAll('.bookmark-card').forEach(card => {
            card.style.transition = 'none';
        });
        
        // 设置新的定时器
        scrollTimeout = setTimeout(() => {
            // 滚动停止后，恢复动画
            document.querySelectorAll('.bookmark-card').forEach(card => {
                card.style.transition = '';
            });
        }, 100);
    }, false);
}

// ===== 底部菜单栏：折叠隐藏 / 重新唤起 =====
// 初始化菜单栏显示状态（读取上次的选择）
function initTaskbar() {
    setTaskbarVisible(storageGet(TASKBAR_STORAGE_KEY) !== '0', true);
}

// 设置菜单栏显示 / 隐藏
function setTaskbarVisible(visible, silent) {
    isTaskbarVisible = visible;
    
    document.body.classList.toggle('menu-hidden', !visible);
    bottomMenu.classList.toggle('collapsed', !visible);
    
    // 手柄在两种状态下复用：展开时朝下、隐藏时朝上并带文字
    taskbarHandle.classList.toggle('restore', !visible);
    taskbarHandle.classList.remove('expanded');
    taskbarHandle.innerHTML = visible
        ? '<i class="fas fa-chevron-down"></i>'
        : '<i class="fas fa-chevron-up"></i>';
    taskbarHandle.title = visible ? '隐藏底部菜单栏（H）' : '显示底部菜单栏（H）';
    taskbarHandle.setAttribute('aria-label', taskbarHandle.title);
    
    // 同步设置面板中的开关
    if (settingsTaskbarSwitch) {
        settingsTaskbarSwitch.classList.toggle('on', visible);
    }
    if (settingsTaskbar) {
        settingsTaskbar.setAttribute('aria-checked', String(visible));
    }
    
    // 隐藏菜单栏时收起"更多"面板
    if (!visible) {
        moreMenu.classList.remove('active');
    }
    
    storageSet(TASKBAR_STORAGE_KEY, visible ? '1' : '0');
    
    if (!silent) {
        toast(visible ? '已显示底部菜单栏' : '已隐藏底部菜单栏（按 H 可恢复）',
              visible ? 'fa-eye' : 'fa-eye-slash');
    }
}

// 切换菜单栏显示状态
function toggleTaskbar() {
    setTaskbarVisible(!isTaskbarVisible);
}
// ===== 皮肤（主题）系统 =====
// 初始化皮肤：读取本地设置（兼容旧版仅 light/dark 的主题设置）
function initSkin() {
    let saved = storageGet(SKIN_STORAGE_KEY);
    if (!saved || !SKINS.some(skin => skin.id === saved)) {
        const legacy = storageGet(THEME_STORAGE_KEY);
        saved = legacy === 'dark' ? 'ios-dark' : 'ios-light';
    }
    applySkin(saved);
}

// 应用指定皮肤
function applySkin(skinId) {
    let skin = SKINS.find(item => item.id === skinId);
    if (!skin) skin = SKINS[0];
    
    currentSkin = skin.id;
    isDarkMode = skin.dark;
    
    document.documentElement.setAttribute('data-theme', skin.id);
    document.body.classList.toggle('dark-mode', skin.dark);
    
    storageSet(SKIN_STORAGE_KEY, skin.id);
    storageSet(THEME_STORAGE_KEY, skin.dark ? 'dark' : 'light');
    
    updateSkinGridActiveState();


    // 皮肤切换后重绘卡片，使卡片图标配色跟随新皮肤
    if (hasRenderedOnce) renderBookmarks();
}

// 快捷键 T：按顺序循环切换皮肤
function cycleSkin() {
    const index = SKINS.findIndex(item => item.id === currentSkin);
    const next = SKINS[(index + 1) % SKINS.length];
    applySkin(next.id);
    toast(`切换到「${next.name}」（按 T 继续切换）`, 'fa-palette');
}

// 渲染皮肤选择面板
function renderSkinGrid() {
    if (!skinGrid) return;
    skinGrid.innerHTML = '';

    if (skinCountTip) skinCountTip.textContent = SKINS.length + ' 款主题';

    // 按「浅色 / 深色」分组展示，共 12 款
    ['light', 'dark'].forEach(group => {
        const list = SKINS.filter(skin => (group === 'dark') === skin.dark);
        if (!list.length) return;

        const label = document.createElement('div');
        label.className = 'skin-group';
        label.innerHTML = group === 'dark'
            ? '<i class="fas fa-moon"></i> 深色主题'
            : '<i class="fas fa-sun"></i> 浅色主题';
        skinGrid.appendChild(label);

        list.forEach(skin => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'skin-swatch';
            item.dataset.skin = skin.id;
            item.title = skin.name + '（' + (skin.dark ? '深色' : '浅色') + '）';
            item.innerHTML = `
                <span class="skin-preview" style="background:linear-gradient(135deg, ${skin.colors[0]} 0%, ${skin.colors[2]} 100%);--p2:${skin.colors[1]};--p3:${skin.colors[1]};">
                    <i class="fas fa-check"></i>
                </span>
                <span class="skin-info">
                    <span class="skin-name">${skin.name}</span>
                    <span class="skin-mode">${skin.dark ? '深色' : '浅色'}</span>
                </span>
            `;
            item.addEventListener('click', () => {
                applySkin(skin.id);
                skinPanel.classList.remove('active');
                toast(`已切换为「${skin.name}」`, 'fa-palette');
            });
            skinGrid.appendChild(item);
        });
    });

    updateSkinGridActiveState();
}

// 更新皮肤面板的选中状态
function updateSkinGridActiveState() {
    if (!skinGrid) return;
    skinGrid.querySelectorAll('.skin-swatch').forEach(item => {
        item.classList.toggle('active', item.dataset.skin === currentSkin);
    });
}

// 轻提示
let toastTimer = null;
function toast(message, icon) {
    if (!toastEl) return;
    toastEl.innerHTML = `<i class="fas ${icon || 'fa-check-circle'}"></i><span>${message}</span>`;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1600);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

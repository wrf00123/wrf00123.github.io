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

// 状态管理
let currentCategory = 0; // 0表示显示全部
let isDarkMode = false;
let searchQuery = '';
let moreMenuSearchQuery = '';

// DOM元素
const bookmarksContainer = document.getElementById('bookmarksContainer');
const bottomMenu = document.getElementById('bottomMenu');
const moreMenu = document.getElementById('moreMenu');
const moreCategories = document.getElementById('moreCategories');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const searchInput = document.getElementById('searchInput');
const moreMenuSearch = document.getElementById('moreMenuSearch');

// 初始化
function init() {
    renderCategories();
    renderBookmarks();
    setupEventListeners();
    
    // 检查用户是否已设置主题偏好
    const savedTheme = localStorage.getItem('bookmarks-theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
}

// 渲染分类菜单 - 固定8个按钮
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
        // 更新当前分类并重新渲染书签
        currentCategory = id;
        searchQuery = '';
        searchInput.value = '';
        moreMenuSearchQuery = '';
        moreMenuSearch.value = '';
        
        renderBookmarks();
        updateActiveMenu();
        
        // 关闭更多菜单（如果打开）
        moreMenu.classList.remove('active');
    });
    
    return menuItem;
}

// 渲染更多分类
function renderMoreCategories() {
    moreCategories.innerHTML = '';
    
    // 先添加"全部"分类按钮
    const allCategoryItem = document.createElement('div');
    allCategoryItem.className = `more-category-item ${currentCategory === 0 ? 'active' : ''}`;
    allCategoryItem.innerHTML = `
        <div class="more-category-name">
            <i class="fas fa-globe"></i> 全部
        </div>
        <div class="more-category-count">${websiteData.reduce((sum, cat) => sum + cat.websites.length, 0)}</div>
    `;
    allCategoryItem.addEventListener('click', () => {
        currentCategory = 0;
        searchQuery = '';
        searchInput.value = '';
        moreMenuSearchQuery = '';
        moreMenuSearch.value = '';
        
        renderBookmarks();
        updateActiveMenu();
        moreMenu.classList.remove('active');
        
        // 重新渲染更多分类（恢复默认视图）
        renderMoreCategories();
    });
    moreCategories.appendChild(allCategoryItem);
    
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
        const categoryItem = document.createElement('div');
        categoryItem.className = `more-category-item ${currentCategory === category.id ? 'active' : ''}`;
        
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
        
        categoryItem.innerHTML = `
            <div class="more-category-name">
                <i class="fas ${icon}"></i> ${category.title}
            </div>
            <div class="more-category-count">${count}</div>
        `;
        categoryItem.addEventListener('click', () => {
            currentCategory = category.id;
            searchQuery = '';
            searchInput.value = '';
            moreMenuSearchQuery = '';
            moreMenuSearch.value = '';
            
            renderBookmarks();
            updateActiveMenu();
            moreMenu.classList.remove('active');
            
            // 重新渲染更多分类（恢复默认视图）
            renderMoreCategories();
        });
        moreCategories.appendChild(categoryItem);
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
    collectionButton.className = 'theme-toggle';
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
    
    if (currentCategory === 0) {
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
        emptyMessage.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>没有找到网址</h3>
            <p>${searchQuery ? `未找到与"${searchQuery}"相关的网址` : '当前分类没有网址'}</p>
        `;
        bookmarksContainer.appendChild(emptyMessage);
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
        const category = currentCategory === 0 
            ? { 
                id: 0, 
                title: searchQuery ? `搜索结果: "${searchQuery}"` : "全部网址", 
                icon: "fa-globe" 
              }
            : websiteData.find(cat => cat.id === currentCategory);
            
        if (category) {
            renderCategorySection(category, filteredWebsites);
        }
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
            // 处理搜索结果和全部网址的情况
            if (category.title.includes("搜索结果") || category.title.includes("全部网址")) {
                icon = "fa-globe";
            } else {
                icon = "fa-search";
            }
    }
    
    categoryTitle.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${category.title} <span style="color: var(--text-secondary); font-weight: 600;">(${websites.length})</span></span>
    `;
    fragment.appendChild(categoryTitle);
    
    // 创建网址网格
    const bookmarksGrid = document.createElement('div');
    bookmarksGrid.className = 'bookmarks-grid';
    
    // 添加网址卡片 - 不显示网址地址
    websites.forEach((website, index) => {
        const card = document.createElement('a');
        card.className = 'bookmark-card';
        card.href = website.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.innerHTML = `
            <div class="bookmark-title">${website.name}</div>
            <div class="bookmark-desc">${website.desc || ''}</div>
            <div class="bookmark-category">${website.categoryTitle || category.title}</div>
        `;
        
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
    
    // 找到对应的菜单项并添加active类
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
}

// 设置事件监听器
function setupEventListeners() {
    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);
    
    // 顶部搜索框
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderBookmarks();
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
    
    // 键盘快捷键：ESC关闭更多菜单
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && moreMenu.classList.contains('active')) {
            moreMenu.classList.remove('active');
        }
    });
    
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

// 切换主题
function toggleTheme() {
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// 启用深色模式
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeIcon.className = 'fas fa-sun';
    isDarkMode = true;
    localStorage.setItem('bookmarks-theme', 'dark');
}

// 禁用深色模式
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeIcon.className = 'fas fa-moon';
    isDarkMode = false;
    localStorage.setItem('bookmarks-theme', 'light');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

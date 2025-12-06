// 示例网址数据 - 新的嵌套分类格式
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
                    { name: "小绿典", url: "https://dljs123.com/#/search/criteria", desc: "标准下载" },
                    { name: "食品伙伴网", url: "http://down.foodmate.net/wap/", desc: "食品标准下载" },
                    { name: "标准图集学习交流", url: "https://jzxx.vip/search/pan_view_search.html", desc: "标准下载" },
                    { name: "化学品安全法规标准信息平台", url: "https://law.chemicalsafety.org.cn/", desc: "化学品标准下载" },
                    { name: "协筑资源", url: "https://www.webfree.net/home", desc: "建筑标准下载" }
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
                    { name: "中国传统色", url: "https://noneko.cn/", desc: "色系查询" },
                    { name: "鼠标测试", url: "https://www.setupcheck.tech/zh/tools/mouse", desc: "电脑硬件测试" }
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
                    { name: "FastStone Capture", url: "https://www.faststonecapture.cn/", desc: "截长图" },
                    { name: "小旺AI截图", url: "https://www.xiaowang.com/", desc: "截长图" },
                    { name: "PixPin", url: "https://pixpin.cn/", desc: "截长图" },
                    { name: "Fengling", url: "https://fengling.nocmt.com/", desc: "剪贴板同步" },
                    { name: "方方格子", url: "http://www.ffcell.com/", desc: "excel插件" },
                    { name: "51PPT模板", url: "https://www.51pptmoban.com/ppt-soft/", desc: "PPT插件" },
                    { name: "Office Tool Plus", url: "https://otp.landian.vip/zh-cn/#google_vignette", desc: "一键部署Office" },
                    { name: "机查查", url: "https://devink.techartlife.com/zh/", desc: "机查查" }
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
                    { name: "第1PPT", url: "https://www.1ppt.com/tags/419/", desc: "ppt/ppt元素/字体/音效/课件" }, 
                    { name: "枣知网", url: "https://www.51zaozhi.com/", desc: "ppt/word/excel" },
                    { name: "GitCode", url: "https://gitcode.com/Open-source-documentation-tutorial", desc: "开源文档下载" },
                    { name: "知识星球", url: "https://wx.zsxq.com/login", desc: "资料下载" },
                    { name: "百度文库", url: "https://wenku.baidu.com/?fr=brandad_2&_wkts_=1755328356957", desc: "资料下载" },
                    { name: "腾讯文档", url: "https://docs.qq.com/desktop/?nlc=1", desc: "资料下载" },
                    { name: "仪器信息网", url: "https://www.instrument.com.cn/", desc: "资料下载" }
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
                    { name: "ChatGPT", url: "https://chatgpt.com", desc: "AI软件" },
                    { name: "文小言", url: "http://www.wenxiaoyan.com/pc", desc: "AI软件" }
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
                id: 9,
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
                id: 10,
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
                    { name: "英语小说网", url: "https://yingyuxiaoshuo.com/", desc: "英语小说" },
                    { name: "小故事铺", url: "https://storynook.cn/", desc: "小故事" },
                    { name: "网上厨房", url: "https://www.xiaochushuo.com/", desc: "菜谱查询" }
                ]
            },
          {
                id: 11,
                title: "其他",
                icon: "fa-bolt",
                websites: [
                    { name: "天下老照片", url: "http://www.laozhaopian5.com/", desc: "老照片" },
                ]
            }
        ];// DOM元素
const searchInput = document.getElementById('searchInput');
const websitesGrid = document.getElementById('websitesGrid');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
let categoryBtns = document.querySelectorAll('.category-btn');
let menuSearchBtn = document.getElementById('menuSearchBtn');
const menuSearchModal = document.getElementById('menuSearchModal');
const menuSearchInput = document.getElementById('menuSearchInput');
const menuSearchResults = document.getElementById('menuSearchResults');
const overlay = document.getElementById('overlay');

// 从websiteData中动态提取分类数据
const categories = [
    { id: 'all', name: '全部' },
    ...websiteData.map(category => ({
        id: category.id.toString(),
        name: category.title
    }))
];

// 当前状态
let currentCategory = 'all';
let currentSearchTerm = '';

// 初始化函数
function init() {
    // 动态生成分类菜单
    generateCategoryMenu();
    
    // 绑定事件监听器
    bindEventListeners();
    
    // 渲染初始网址列表
    renderWebsites();
    
    // 检查本地存储的主题偏好
    checkThemePreference();
}

// 动态生成分类菜单
function generateCategoryMenu() {
    // 获取分类菜单容器
    const categoryMenu = document.querySelector('.category-menu');
    
    // 清空现有菜单
    categoryMenu.innerHTML = '';
    
    // 添加菜单搜索按钮（四叶草图标）到最左侧
    const searchBtn = document.createElement('button');
    searchBtn.className = 'menu-search-btn';
    searchBtn.id = 'menuSearchBtn';
    searchBtn.innerHTML = '🍀'; // 四叶草图标
    searchBtn.title = '菜单搜索';
    categoryMenu.appendChild(searchBtn);
    
    // 添加全部分类按钮
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.dataset.category = 'all';
    allBtn.textContent = '全部';
    categoryMenu.appendChild(allBtn);
    
    // 限制底部显示的菜单数量（最多显示10个，包括"全部"和"菜单搜索"）
    const maxDisplayCount = 10;
    const categoriesToDisplay = websiteData.slice(0, maxDisplayCount - 2); // 减去"全部"和"菜单搜索"
    
    // 添加部分分类按钮到底部菜单
    categoriesToDisplay.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.category = category.id.toString();
        btn.textContent = category.title;
        categoryMenu.appendChild(btn);
    });
    
    // 更新分类按钮引用
    categoryBtns = document.querySelectorAll('.category-btn');
    menuSearchBtn = document.getElementById('menuSearchBtn');
    
    // 绑定分类按钮事件
    bindCategoryEvents();
}

// 绑定事件监听器
function bindEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);
    
    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);
    
    // 菜单搜索输入
    menuSearchInput.addEventListener('input', handleMenuSearch);
    
    // 遮罩层点击关闭菜单
    overlay.addEventListener('click', closeMenuSearch);
}

// 绑定分类按钮事件
function bindCategoryEvents() {
    // 分类菜单
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', handleCategoryChange);
    });
    
    // 菜单搜索按钮
    menuSearchBtn.addEventListener('click', toggleMenuSearch);
}

// 渲染网址列表
function renderWebsites() {
    // 获取所有网址并添加分类ID
    let allWebsites = [];
    websiteData.forEach(category => {
        allWebsites = [...allWebsites, ...category.websites.map(website => ({
            ...website,
            category: category.id.toString()
        }))];
    });
    
    // 过滤网址
    const filteredWebsites = allWebsites.filter(website => {
        // 当没有搜索词时，只显示当前分类的网站
        // 当有搜索词时，忽略分类过滤，搜索所有分类
        const matchesCategory = (currentSearchTerm === '' && (currentCategory === 'all' || website.category === currentCategory)) || 
                              (currentSearchTerm !== '' && true);
        const matchesSearch = currentSearchTerm === '' || 
            website.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            website.desc.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    // 优化搜索结果排序：按匹配度排序
    let sortedWebsites = filteredWebsites;
    if (currentSearchTerm) {
        const searchTerm = currentSearchTerm.toLowerCase();
        sortedWebsites = filteredWebsites.sort((a, b) => {
            const scoreA = calculateMatchScore(a, searchTerm);
            const scoreB = calculateMatchScore(b, searchTerm);
            return scoreB - scoreA; // 降序排列，分数高的排在前面
        });
    }
    
    // 清空网格
    websitesGrid.innerHTML = '';
    
    // 渲染过滤后的网址
    if (sortedWebsites.length === 0) {
        // 显示空状态
        websitesGrid.innerHTML = `
            <div class="empty-state">
                <h3>没有找到匹配的网址</h3>
                <p>请尝试调整搜索条件或分类</p>
            </div>
        `;
        return;
    }
    
    sortedWebsites.forEach(website => {
        const websiteCard = createWebsiteCard(website);
        websitesGrid.appendChild(websiteCard);
    });
}

// 计算匹配分数
function calculateMatchScore(website, searchTerm) {
    let score = 0;
    const nameLower = website.name.toLowerCase();
    const descLower = website.desc.toLowerCase();
    
    // 完全匹配网站名称，最高优先级
    if (nameLower === searchTerm) {
        score += 100;
    }
    // 网站名称以搜索词开头
    else if (nameLower.startsWith(searchTerm)) {
        score += 80;
    }
    // 网站名称包含搜索词
    else if (nameLower.includes(searchTerm)) {
        score += 60;
    }
    // 网站描述包含搜索词
    else if (descLower.includes(searchTerm)) {
        score += 40;
    }
    
    // 匹配长度加分
    score += searchTerm.length * 2;
    
    return score;
}

// 创建网址卡片
function createWebsiteCard(website) {
    const card = document.createElement('div');
    card.className = 'website-card';
    card.innerHTML = `
        <h3>${website.name}</h3>
        <p>${website.desc}</p>
        <span class="website-category">${getCategoryName(website.category)}</span>
    `;
    
    // 添加点击事件，点击卡片打开网址
    card.addEventListener('click', () => {
        window.open(website.url, '_blank', 'noopener noreferrer');
    });
    
    // 优化触摸反馈
    card.addEventListener('touchstart', () => {
        card.style.transform = 'scale(0.98)';
        card.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('touchend', () => {
        card.style.transform = 'scale(1)';
    });
    
    card.addEventListener('touchcancel', () => {
        card.style.transform = 'scale(1)';
    });
    
    return card;
}

// 获取分类中文名称
function getCategoryName(categoryId) {
    if (categoryId === 'all') {
        return '全部';
    }
    const category = websiteData.find(cat => cat.id.toString() === categoryId);
    return category ? category.title : categoryId;
}

// 处理搜索
function handleSearch(e) {
    currentSearchTerm = e.target.value;
    renderWebsites();
}

// 处理分类切换
function handleCategoryChange(e) {
    const category = e.target.dataset.category;
    
    // 更新当前分类
    currentCategory = category;
    
    // 清空搜索框
    searchInput.value = '';
    currentSearchTerm = '';
    
    // 更新所有分类按钮状态（包括底部菜单和搜索弹窗中的按钮）
    const allCategoryBtns = document.querySelectorAll('.category-btn');
    allCategoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // 关闭菜单搜索弹窗
    closeMenuSearch();
    
    // 重新渲染网址列表
    renderWebsites();
}

// 切换主题
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // 更新主题图标
    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '🌙';
        // 保存主题偏好到本地存储
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌞';
        localStorage.setItem('theme', 'light');
    }
}

// 检查主题偏好
function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 如果本地存储有主题，使用本地存储的主题；否则使用系统偏好
    const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    if (isDark) {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.textContent = '🌞';
    }
}

// 提前预渲染菜单搜索结果，避免点击时的延迟
function preRenderMenuSearch() {
    renderMenuSearchResults();
}

// 绑定菜单搜索结果点击事件（只绑定一次）
menuSearchResults.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        handleCategoryChange(e);
    }
});

// 切换菜单搜索弹窗
function toggleMenuSearch() {
    menuSearchModal.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // 如果打开弹窗，重置搜索状态
    if (menuSearchModal.classList.contains('active')) {
        // 清空搜索框
        searchInput.value = '';
        currentSearchTerm = '';
        // 重新渲染网址列表
        renderWebsites();
        
        // 清空菜单搜索输入
        menuSearchInput.value = '';
        // 重新渲染所有分类，确保显示全部菜单按钮
        renderMenuSearchResults('');
        // 阻止页面滚动
        document.body.style.overflow = 'hidden';
    } else {
        // 恢复页面滚动
        document.body.style.overflow = 'auto';
    }
}

// 关闭菜单搜索弹窗
function closeMenuSearch() {
    menuSearchModal.classList.remove('active');
    overlay.classList.remove('active');
    // 恢复页面滚动
    document.body.style.overflow = 'auto';
}

// 处理菜单搜索 - 优化搜索性能，使用防抖
let searchTimeout;
function handleMenuSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    // 清除之前的定时器
    clearTimeout(searchTimeout);
    
    // 设置新的定时器，延迟200ms执行搜索，避免频繁渲染
    searchTimeout = setTimeout(() => {
        renderMenuSearchResults(searchTerm);
    }, 200);
}

// 统计每个分类的网址数量
function getCategoryCount(categoryId) {
    if (categoryId === 'all') {
        let total = 0;
        websiteData.forEach(category => {
            total += category.websites.length;
        });
        return total;
    }
    const category = websiteData.find(cat => cat.id.toString() === categoryId);
    return category ? category.websites.length : 0;
}

// 缓存分类数量，避免重复计算
const categoryCountCache = {};

// 优化的分类数量统计函数
function getCategoryCount(categoryId) {
    // 检查缓存
    if (categoryCountCache[categoryId]) {
        return categoryCountCache[categoryId];
    }
    
    let count;
    if (categoryId === 'all') {
        count = 0;
        websiteData.forEach(category => {
            count += category.websites.length;
        });
    } else {
        const category = websiteData.find(cat => cat.id.toString() === categoryId);
        count = category ? category.websites.length : 0;
    }
    
    // 缓存结果
    categoryCountCache[categoryId] = count;
    return count;
}

// 预创建所有分类按钮，避免重复创建
const allCategoryButtons = [];

// 初始化分类按钮缓存
function initCategoryButtons() {
    categories.forEach(category => {
        const count = getCategoryCount(category.id);
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.dataset.category = category.id;
        button.innerHTML = `${category.name} <span style="font-size: 12px; opacity: 0.7; font-weight: normal;">(${count})</span>`;
        
        // 添加点击事件
        button.addEventListener('click', handleCategoryChange);
        
        // 优化触摸反馈
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
            button.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('touchend', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('touchcancel', () => {
            button.style.transform = 'scale(1)';
        });
        
        allCategoryButtons.push(button);
    });
}

// 渲染菜单搜索结果 - 优化版
function renderMenuSearchResults(searchTerm = '') {
    // 清空搜索结果
    menuSearchResults.innerHTML = '';
    
    // 过滤分类
    const searchLower = searchTerm.toLowerCase();
    const filteredCategories = categories.filter(category => {
        return category.name.toLowerCase().includes(searchLower);
    });
    
    // 生成HTML字符串，显示分类数量
    let buttonsHTML = '';
    
    // 生成HTML，包含分类数量
    filteredCategories.forEach(category => {
        const count = getCategoryCount(category.id);
        // 显示分类名称和数量
        buttonsHTML += `<button class="category-btn" data-category="${category.id}">${category.name} (${count})</button>`;
    });
    
    // 一次性添加所有HTML，减少DOM操作
    menuSearchResults.innerHTML = buttonsHTML;
    
    // 事件监听器已在页面加载时绑定，无需重复绑定
}

// 初始化应用
init();

// 页面加载完成后预渲染菜单搜索结果，提高响应速度
window.addEventListener('DOMContentLoaded', preRenderMenuSearch);
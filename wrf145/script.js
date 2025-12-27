// 数据模型 - 按照您提供的格式
const websiteData = [
            {
                id: 1,
                title: "国际标准",
                icon: "fa-search",
                websites: [
                    { name: "ISO官网", url: "https://www.iso.org/iso-update.html", desc: "标准每月发布的报告" },
                    { name: "IEC", url: "https://webstore.iec.ch/", desc: "电工电子领域国际标准" },
                    { name: "IMDRF", url: "https://www.imdrf.org/", desc: "国际医疗器械监管机构论坛" },
                    { name: "ITU", url: "https://webstore.iec.ch/", desc: "全球电信标准化" },
                    { name: "MDSAP（日本、巴西、澳大利亚）", url: "https://www.fda.gov/medical-devices/medical-device-single-audit-program-mdsap/mdsap-international-regulations-english-australia-brazil-canada-japan-and-usa", desc: "MDSAP五国的QMS相关法规" },
                    { name: "MDSAP标准", url: "https://www.fda.gov/medical-devices/medical-device-single-audit-program-mdsap/mdsap-audit-procedures-and-forms", desc: "MDSAP Audit Procedures and Forms | FDA" },
                    { name: "REACH清单", url: "https://echa.europa.eu/candidate-list-table", desc: "REACH查询" },
                    { name: "EUL", url: "https://www.who.int/teams/regulation-prequalification/eul/", desc: "WHO白名单" },
                    { name: "ICH", url: "https://www.ich.org/", desc: "人用药品技术要求国际协调理事会" },
                    { name: "PIC/S", url: "https://picscheme.org/", desc: "国际药品认证合作组织" },  
                    { name: "amfori", url: "https://www.amfori.org/amfori-bsci/", desc: "BSCI" },  
                    { name: "GRS标准", url: "https://textileexchange.org/recycled-claim-global-recycled-standard/", desc: "全球回收标准" }, 
                    { name: "GRI标准", url: "https://www.globalreporting.org", desc: "GRI标准下载" },
                    { name: "SASB标准", url: "https://www.sasb.org", desc: "SASB标准下载" },
                    { name: "FDA（注册）", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm/", desc: "美国医疗器械注册查询" },
                    { name: "最新的医疗器械指南文件", url: "https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products/recent-final-medical-device-guidance-documents", desc: "美国FDA" },
                    { name: "历史发布的医疗器械相关指南文件", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/guidance-documents-medical-devices-and-radiation-emitting-products", desc: "美国FDA" },
                    { name: "医疗器械数据库", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/medical-device-databases", desc: "美国FDA" },
                    { name: "510(k) Premarket Notification", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm", desc: "美国FDA" },
                    { name: "产品分类数据库", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpcd/classification.cfm", desc: "美国FDA" },
                    { name: " CDRH学习", url: "https://www.fda.gov/training-and-continuing-education/cdrh-learn美国FDA", desc: "美国FDA" },
                    { name: "FDA认可标准数据库", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfStandards/search.cfm", desc: "美国FDA" },
                    { name: "自由信息法案", url: "https://www.fda.gov/regulatory-information/freedom-information", desc: "美国FDA" },
                    { name: "UDI", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/unique-device-identification-system-udi-system#ruleguidance", desc: "美国FDA" },
                    { name: "FDA账号注册与登录", url: "https://www.access.fda.gov/oaa/logonFlow.htm?execution=e1s1", desc: "美国FDA" },
                    { name: "FDA法规简介", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance", desc: "美国FDA" },
                    { name: "FDA MDSAP", url: "https://www.fda.gov/medical-devices/cdrh-international-affairs/medical-device-single-audit-program-mdsap", desc: "美国FDA" },
                    { name: "MDR信息上报", url: "https://www.fda.gov/medical-devices/medical-device-safety/reporting-allegations-regulatory-misconduct", desc: "美国FDA" },
                    { name: "召回数据库", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRES/res.cfm", desc: "美国FDA" },
                    { name: "GUDID数据库", url: "https://accessgudid.nlm.nih.gov/", desc: "美国FDA" },
                    { name: "联邦公报", url: "https://www.federalregister.gov/", desc: "美国联邦政府的官方日报" },
                    { name: "CFR", url: "https://www.ecfr.gov/", desc: "美国联邦政府规章制度汇编" },
                    { name: "医药与食品联邦法规", url: "https://www.ecfr.gov/current/title-21", desc: "美国CFR" },
                    { name: "OSHA的国家认可测试实验室 (NRTL) 计划", url: "https://www.osha.gov/nationally-recognized-testing-laboratory-program", desc: "美国劳工部" },
                    { name: "ASQ", url: "https://asq.org/", desc: "美国质量协会" },
                    { name: "ASTM标准", url: "https://store.astm.org/products-services/standards-and-publications/standards.html", desc: "美国材料实验协会" },
                    { name: "EMA", url: "https://www.ema.europa.eu/en/homepage", desc: "欧洲药品管理总局" },
                    { name: "EN标准", url: "https://www.cencenelec.eu/", desc: "EN欧洲标准" },
                    { name: "欧盟EUR-Lex（MDR_IVDR）", url: "https://eur-lex.europa.eu/homepage.html", desc: "EU 2017/745下载" },
                    { name: "欧盟医疗器械信息", url: "https://ec.europa.eu/health/md_sector/overview_en", desc: "信息" },
                    { name: "欧盟公共健康最新资讯", url: "https://health.ec.europa.eu/latest-updates_en", desc: "资讯" },
                    { name: "欧盟器械最新资讯", url: "https://ec.europa.eu/health/medical-devices-sector/latest-updates_en", desc: "资讯" },
                    { name: "欧盟通用规范", url: "https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives_en", desc: "通用规范/指南" },
                    { name: "欧盟医疗器械协调小组", url: "https://ec.europa.eu/health/md_sector/new_regulations/guidance_en", desc: "MDCG模块医疗器械的相关指南" },
                    { name: "EUDAMED", url: "https://health.ec.europa.eu/medical-devices-eudamed/overview_en", desc: "欧盟医疗器械数据库系统" },
                    { name: "TeamNB", url: "https://www.team-nb.org/", desc: "公告机构组织发布的信息（OJ、MDCG）" },
                    { name: "CAMD", url: "https://www.camd-europe.eu/news/", desc: "各主管当局的小组发布文章（如IVDR过渡期解答）" },
                    { name: "NBOG", url: "https://www.nbog.eu/nbog-documents/", desc: "MDD下公告机构指导文件（NBOG）" },
                    { name: "MEDDEV指南", url: "https://ec.europa.eu/health/md_sector/current_directives_en", desc: "MEDDEV更新的医疗器械指南文件" },
                    { name: "东盟ASEAN官网", url: "https://asean.org/", desc: "关注医疗器械法规的变化" },
                    { name: "ASEAN DOCS", url: "https://docs.asean.org/SitePages/DocumentSearch.aspx", desc: "指南文件检索" },
                    { name: "加拿大卫生局（注册）", url: "https://health-products.canada.ca/mdall-limh/prepareSearch?type=active", desc: "加拿大医疗器械注册查询" },
                    { name: "加拿大法规SOR/98-282", url: "https://lois-laws.justice.gc.ca/eng/regulations/SOR-98-282/index.html", desc: "SOR/98-282法规下载" },
                    { name: "加拿大MDR", url: "https://laws-lois.justice.gc.ca/eng/regulations/", desc: "关注加拿大MDR医疗器械法规的变化" },
                    { name: "加拿大医疗器械最新消息", url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/what-new.html", desc: "关注加拿大医疗器械相关的最新动态" },
                    { name: "日本PMDA（注册）", url: "https://www.pmda.go.jp/review-services/drug-reviews/foreign-mfr/0003.html", desc: "医疗器械注册查询" },
                    { name: "日本法规翻译", url: "https://www.japaneselawtranslation.go.jp/en/laws", desc: "关注日本医疗器械法规的变化" },
                    { name: "厚生劳动省官网", url: "https://www.mhlw.go.jp/english/index.html", desc: "药品和医疗器械" },
                    { name: "英国医疗器械监管", url: "https://www.gov.uk/topic/medicines-medical-devices-blood/medical-devices-regulation-safety", desc: "关注英国医疗器械相关的最新动态" },
                    { name: "英国医疗器械指南", url: "https://www.gov.uk/government/collections/new-guidance-and-information-for-industry-from-the-mhra", desc: "关注英国医疗器械相关的最新动态" },
                    { name: "TGA法规", url: "https://www.legislation.gov.au/Search/Therapeutic%20Goods", desc: "澳大利亚TGA法规" },
                    { name: "TGA", url: "https://www.tga.gov.au/resources", desc: "所有指南文件的检索" },
                    { name: "TAG公告", url: "https://www.tga.gov.au/resources/publication/publications", desc: "公告" },
                    { name: "TAG", url: "https://www.tga.gov.au/news/news", desc: "最新资讯发布" },
                    { name: "TAG征求意见稿", url: "https://www.tga.gov.au/resources/consultation", desc: "征求意见稿" },
                    { name: "ANVISA官网", url: "https://www.gov.br/anvisa/pt-br", desc: "巴西" },
                    { name: "第三方咨询机构Emergo", url: "https://www.emergobyul.com/resources/regulations-brazil", desc: "巴西Resolution-RDC-16-2013（BGMP）GMP要求" },
                    { name: "Basic UDI-DI生成", url: "https://www.gs1.org/services/gmn-generator", desc: "" },
                    { name: "德国MPG", url: "https://www.gesetze-im-internet.de/mpg/", desc: "德国医疗器械" },
                    { name: "德国Bfarm", url: "https://www.bfarm.de/EN/News/News-from-the-divisions/Medical-devices-news/_node.html", desc: "德国主管当局信息更新" },
                    { name: "MDA", url: "https://www.mda.gov.my/", desc: "马来西亚医疗器械法规及指南文件" },
                    { name: "食品和药品安全部官网", url: "https://www.mfds.go.kr/eng/index.do", desc: "韩国食品和药品" },
                    { name: "瑞士联邦法律", url: "https://www.fedlex.admin.ch/eli/cc/2020/552/en", desc: "瑞士法规" },
                    { name: "瑞士卫生部", url: "https://www.swissmedic.ch/swissmedic/en/home/news.html", desc: "关注瑞士医疗器械法规变化" },
                    { name: "菲律宾FDA官网", url: "https://www.fda.gov.ph/", desc: "关注菲律宾医疗器械法规的变化" },
                    { name: "TCFD", url: "https://www.tcfdhub.org", desc: "气候相关财务信息披露工作组（TCFD）建议案" },
                    { name: "IIRC", url: "https://integratedreporting.org", desc: "国际综合报告委员会（IIRC）框架" },
                    { name: "CDP", url: "https://www.cdp.net/zh", desc: "碳信息披露项目(官网" },
                    { name: "CDSB", url: "https://www.cdsb.net/", desc: "气候披露标准委员会" },
                    { name: "ISSB", url: "https://www.ifrs.org/", desc: "国际可持续发展准则委员会" }
                ]
            },
          {
                id: 2,
                title: "国家标准",
                icon: "fa-search",
                websites: [
                    { name: "全国标准信息公共服务平台", url: "https://std.samr.gov.cn/", desc: "国家/行业/地方/团体/企业/国际/国外标准" },
                    { name: "国家标准全文公开系统", url: "https://openstd.samr.gov.cn/bzgk/gb/index", desc: "GB/GBT/GBZ" },
                    { name: "国际国家标准互查", url: "https://std.samr.gov.cn/gb/search/gbAdvancedSearch?type=std", desc: "ISO标准号查找国家标准号" },
                    { name: "国家卫生健康委员会", url: "https://www.nhc.gov.cn/wjw/wsbzxx/wsbz.shtml", desc: "GBZT/WST/GBZ" },  
                    { name: "国家计量技术规范公开系统", url: "http://jjg.spc.org.cn/", desc: "JJG/JJF标准下载" },
                    { name: "国家药品监督管理局1", url: "https://www.nmpa.gov.cn/xxgk/fgwj/index.html", desc: "GB/GBT/YYT标准" },
                    { name: "国家药品监督管理局2", url: "http://app.nifdc.org.cn/biaogzx/qxqwk.do", desc: "GB/GBT/YYT标准" },
                    { name: "国家药品监督管理局3", url: "http://app.nifdc.org.cn/jianybz/jybzTwoGj.do?formAction=listQxtjbz", desc: "GBT标准下载" },
                    { name: "国家药品监督管理局4", url: "http://app.nifdc.org.cn/jianybz/jybzTwoGj.do?formAction=listYlqx", desc: "GB标准下载" },
                    { name: "中国国家标准化管理委员会", url: "https://www.sac.gov.cn/", desc: "中国国家标准化管理委员会" },
                    { name: "中国政府网", url: "https://www.gov.cn/", desc: "中国政府网" },
                    { name: "中国标准信息服务网", url: "https://www.sacinfo.cn/", desc: "标准文档检索" }
                ]
            },
          {
                id: 3,
                title: "行业标准",
                icon: "fa-search",
                websites: [
                    { name: "行业标准信息服务平台", url: "https://hbba.sacinfo.org.cn/", desc: "行标综合平台" },
                    { name: "国家药品监督管理局医疗器械技术", url: "https://www.cmde.org.cn/flfg/zdyz/flmlbzh/flmlylqx/index.html", desc: "YYT标准下载" },
                    { name: "食品安全国家标准数据检索平台", url: "https://sppt.cfsa.net.cn:8086/db", desc: "GB/GBT/GBJ标准下载" },
                    { name: "国家食品安全风险评估中心", url: "https://cfsa.net.cn/spaqbz/index.shtml", desc: "标准" },
                    { name: "国家工程建设标准化信息网", url: "https://www.ccsn.org.cn/", desc: "GB/GBT/GBJ标准下载" },
                    { name: "化学品安全法规标准信息平台", url: "https://law.chemicalsafety.org.cn/", desc: "化学品标准下载" },
                    { name: "生态环境部", url: "https://www.mee.gov.cn/ywgz/gtfwyhxpgl/wxfw/", desc: "危险废物" },
                    { name: "国家应急管理部", url: "https://www.mem.gov.cn/fw/flfgbz/bz/bzwb/", desc: "AQ/AQT/YGT/XFT/MT标准下载" },
                    { name: "中华人民共和国商务部", url: "https://www.mem.gov.cn/fw/flfgbz/bz/bzwb/", desc: "SBT/WMT标准下载" },
                    { name: "自然资源标准化信息服务平台", url: "http://www.nrsis.org.cn/portal/xxcx/std", desc: "TDT/TD/HYT/CHT/CH标准下载" },
                    { name: "中国证券监督管理委员", url: "https://www.csrc.gov.cn/", desc: "标准" },
                    { name: "国家文物局", url: "http://www.ncha.gov.cn/col/col2423/index.html", desc: "WWT标准下载" },
                    { name: "矿山安全监察局", url: "https://www.chinamine-safety.gov.cn/zfxxgk/fdzdgknr/zcfg/hybz_01/mkanj/", desc: "MTT/MT标准下载" },
                    { name: "铁路技术标准信息服务平台", url: "https://biaozhun.tdpress.com/", desc: "TB标准下载" },
                    { name: "中国电力企业联合会", url: "https://dls.cec.org.cn/zhongdianlianbiaozhun/", desc: "TCEC标准下载" },
                    { name: "交通运输部", url: "https://jtst.mot.gov.cn/arch/prof", desc: "JT标准下载" },
                    { name: "中国气象局", url: "https://www.cma.gov.cn/", desc: "标准" },
                    { name: "交通水利局", url: "https://wtis.mot.gov.cn/syportalapply/sysnoticezl/indexzl", desc: "JTS标准下载" },
                    { name: "交通运输部公路局", url: "https://xxgk.mot.gov.cn/2020/jigou/?gk=5", desc: "JTG标准下载" },
                    { name: "中国物流与采购联合会", url: "http://wlbz.chinawuliu.com.cn/bzxmjh/", desc: "WB标准下载" },
                    { name: "国家邮政局", url: "https://www.spb.gov.cn/gjyzj/c100009/c100012/common_list.shtml", desc: "YZ标准下载" },
                    { name: "海关总署技贸措施网", url: "http://www.tbtsps.cn", desc: "GB/GBT/GBZ/GA/GAT/DB/LDT/WST/DAT/YYT/T../RBT/DL../HJ/JBT/QCT标准下载" },
                    { name: "资本市场标准网", url: "http://www.csisc.cn/zbscbzw/c100208/yfb_gb_list.shtml#bzyfb", desc: "JR标准下载" },
                    { name: "全国金融标准化技术委员会", url: "https://cfstc.pbc.gov.cn/bzgk/", desc: "标准" },
                    { name: "国家广播电视总局", url: "http://www.nrta.gov.cn/col/col3715/index.html", desc: "GYT/GYJ标准下载" },
                    { name: "国家民政部", url: "https://www.mca.gov.cn/gdnps/pc/index.jsp?mtype=1", desc: "MZT标准下载" },
                    { name: "国家生态环境部", url: "https://www.mee.gov.cn/ywgz/fgbz/bz/bzjd/", desc: "标准下载" },
                    { name: "民用航空局", url: "https://www.caac.gov.cn/XXGK/XXGK/index_172.html?fl=15", desc: "CTSO/MHT/SC/JJF标准下载" },
                    { name: "文化和旅游部", url: "https://zwgk.mct.gov.cn/zfxxgkml/447/471/index_3081.html", desc: "WHT/LBT标准下载" },
                    { name: "国家气象局", url: "https://www.cma.gov.cn/zfxxgk/gknr/flfgbz/bz/index_4.html", desc: "QX/IDM标准下载" },
                    { name: "国家粮食和物资储备局", url: "https://www.lswz.gov.cn/html/ywpd/bzzl/lybz.shtml", desc: "LST标准下载" },
                    { name: "国家档案局", url: "https://www.saac.gov.cn/daj/hybz/dabz_list.shtml", desc: "DA标准下载" },
                    { name: "水利部国际合作与科技司", url: "http://gjkj.mwr.gov.cn/jsjd1/bzh/bzhfbgg/index.htm", desc: "SL标准" },
                    { name: "人力资源与社会保障部", url: "https://www.mohrss.gov.cn/SYrlzyhshbzb/zwgk/ghcw/bz/index.html", desc: "LDT标准下载" },
                    { name: "国家林业和草原局", url: "https://www.forestry.gov.cn/govpublic-index.htm", desc: "标准" },
                    { name: "密码行业标准化技术委员会", url: "http://www.gmbz.org.cn/main/bzlb.html", desc: "标准" },
                    { name: "认证认可标准化信息服务平台", url: "http://rbtest.cnca.cn/portal/xxcx/std", desc: "GBT/RBT标准下载" },
                    { name: "住房和城乡建设部", url: "https://www.mohurd.gov.cn/gongkai/fdzdgknr/bzgg/index.html", desc: "CJ/JC/JG标准下载" },
                    { name: "体育标准化信息平台", url: "http://125.35.8.38/tybz/home/standard", desc: "标准" },
                    { name: "国家体育总局体育器材装备中心", url: "https://cfsa.net.cn/spaqbz/index.shtml", desc: "标准" },
                    { name: "农业农村部", url: "https://www.moa.gov.cn/gk/", desc: "标准下载" },
                    { name: "中华人民共和国工业和信息化部", url: "https://www.miit.gov.cn/search/zcwjk.html?websiteid=110000000000000&pg=&p=&tpl=14&category=183&q=", desc: "标准" },
                    { name: "公安部", url: "app.mps.gov.cn/gdnps/index.jsp#", desc: "标准下载" }
                ]
            },
          {
                id: 4,
                title: "地方标准",
                icon: "fa-search",
                websites: [
                    { name: "地方标准信息服务平台", url: "https://dbba.sacinfo.org.cn/", desc: "标准下载" },
                    { name: "北京市市场监督管理局", url: "https://scjgj.beijing.gov.cn/cxfw/", desc: "标准下载" },
                    { name: "山西省市场监督管理局（知识产权局）", url: "https://scjgj.shanxi.gov.cn/gzzt/bzgl/dfbzcx/index.shtml", desc: "DB标准下载" },
                    { name: "安徽省标准化信息服务", url: "https://bzxx.ahbz.org.cn/standInfo.html?tab=2", desc: "标准下载" },
                    { name: "福建省标准信息服务平台", url: "http://pt.fjbz.org.cn:8060/StandardSearch/StdSearch.aspx", desc: "标准下载" },
                    { name: "河南省地方标准公共服务平台", url: "http://www.hndb41.com/", desc: "标准下载" },
                    { name: "成都市市场监督管理局（市知识产权局）", url: "https://scjg.chengdu.gov.cn/cdscjgj/c133654/nav_list.shtml", desc: "标准下载" },
                    { name: "重庆市智慧市场监督一体化平台", url: "http://db.cqis.cn/LocalStandard/Index", desc: "标准下载" },
                    { name: "四川省市场监督管理局（省知识/省食品）", url: "http://scjgj.sh.gov.cn/1468/", desc: "标准" },
                    { name: "上海市市场监督管理局", url: "http://scjgj.sh.gov.cn/1468/", desc: "标准" },
                    { name: "浙江标准在线", url: "https://zlzx.zjamr.zj.gov.cn/bzzx/", desc: "标准" },
                    { name: "内蒙古标准文献公共服务平台", url: "http://www.imisinfo.cn/#/", desc: "标准" },
                    { name: "江西省质量和标准化研究院", url: "http://www.jxbz.org.cn/ZJHome/LocalStandard?TID=35", desc: "标准" },
                    { name: "甘肃省地方标准全文公开信息平台", url: "http://www.gsdfbz.cn/theme/default/index", desc: "标准" },
                    { name: "湖南省地方标准网", url: "https://db43.hnbzw.com/", desc: "标准" },
                    { name: "卫生部-医疗器械官网", url: "https://www.mdd.gov.hk/tc/home/index.html", desc: "香港医疗器械" }
                ]
            },
          {
                id: 5,
                title: "团体标准",
                icon: "fa-search",
                websites: [
                    { name: "全国团体标准信息平台", url: "https://www.ttbz.org.cn/Home/Standard", desc: "标准下载" },
                    { name: "中关村材料试验技术联盟", url: "http://www.cstm.com.cn/channel/details/3-1-cstmbiaozhun?page=1", desc: "CSTM标准下载" },
                    { name: "中国航空器拥有者及驾驶员协会", url: "https://www.aopa.org.cn/portal/modules/group/2", desc: "TAOPA标准下载" },
                    { name: "中国教育装备行业协会", url: "https://www.ceeia.cn/news/55/", desc: "TJYBZ标准下载" },
                    { name: "中国锻压协会", url: "http://www.china-metalforming-fabrication.com/bz/bz0", desc: "TCCMI标准下载" },
                    { name: "中国家用纺织品行业协会", url: "https://npoall.com/", desc: "标准" },
                    { name: "中国焊接协会", url: "http://www.china-weldnet.com/specialist-standard", desc: "标准下载" },
                    { name: "中国家用电器协会", url: "https://www.cheaa.org/channels/419.html", desc: "标准下载" },
                    { name: "中国食品工业协会", url: "https://www.cnfia.cn/archives/20486", desc: "标准下载" }
                ]
            },
          {
                id: 6,
                title: "其他标准",
                icon: "fa-search",
                websites: [
                    { name: "企业标准信息公共服务平台", url: "https://www.qybz.org.cn/", desc: "标准下载" },
                    { name: "国家统计局", url: "https://www.stats.gov.cn/", desc: "标准" },
                    { name: "中关村材料试验技术联盟", url: "https://www.ccs.org.cn/ccswz/special?columnid=201900002000000016&id=0", desc: "标准" },
                    { name: "食典通", url: "https://www.sdtdata.com/fx/fcv1/tsLibIndex", desc: "GB/NY/LS/SC/QB标准下载" },
                    { name: "中国就业培训技术指导中心", url: "https://chinajob.mohrss.gov.cn/ywpd/pxjd/rmzt/zyjnbz/zcwj/", desc: "标准下载" },
                    { name: "小绿典", url: "https://dljs123.com/#/search/criteria", desc: "标准下载" },
                    { name: "蒲公英", url: "https://www.ouryao.com/forum.php", desc: "医疗标准下载（论坛）" },
                    { name: "标准网", url: "https://bbs.biaozhuns.com//home.php?mod=space&uid=2047951&do=profile&mycenter=1&mobile=2", desc: "标准下载（论坛）每72h限1次" },
                    { name: "QPDCA", url: "https://www.qpdca.com/portal.php", desc: "汽车行业论坛" },
                    { name: "电子工程世界", url: "https://download.eeworld.com.cn/", desc: "电子工程论坛" },
                    { name: "六西格玛品质网", url: "https://www.6sq.net/portal/", desc: "六西格玛专业论坛" },
                    { name: "学兔兔", url: "http://www.bzfxw.com/", desc: "标准下载(每日限3次)" },
                    { name: "艾索管理咨询", url: "http://www.iso-iso9000.com/", desc: "标准下载" },
                    { name: "标准下载网1", url: "https://www.bzxz.net/gb/", desc: "标准下载" },
                    { name: "食品伙伴网1", url: "http://down.foodmate.net/wap/", desc: "食品标准下载" },
                    { name: "食品伙伴网2", url: "http://down.foodmate.net/", desc: "食品标准下载" },
                    { name: "协筑资源", url: "https://www.webfree.net/home", desc: "建筑标准下载" },
                    { name: "标准下载网2", url: "https://www.315368.com/", desc: "标准下载" },
                    { name: "标准图集学习交流", url: "https://jzxx.vip/search/pan_view_search.html", desc: "标准下载" }   
                ]
            },
          {
                id: 7,
                title: "资质查询",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "全国认证认可信息公共服务平台", url: "http://cx.cnca.cn/CertECloud/index/index/page", desc: "认证资质查询" },
                    { name: "中国合格评定国家认可委员会", url: "https://www.cnas.org.cn/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "全国排污许可证管理信息平台", url: "https://permit.mee.gov.cn/permitExt/outside/PageQueryServlet?pageno=1&type=Law", desc: "排污许可证" },
                    { name: "高新技术企业认定工作网", url: "http://www.innocom.gov.cn/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "建筑工程施工许可证电子证照查询", url: "https://jzsc.mohurd.gov.cn/data/elePermit?ref=https%3A%2F%2Fszsyw.cn", desc: "资质查询" },
                    { name: "全国建筑企业资质查询系统", url: "https://www.jzzzcx.cn/?ref=https://szsyw.cn#/", desc: "资质查询" },
                    { name: "食品生产许可获证查询", url: "https://spaqjg.e-cqs.cn/spscxk/", desc: "食品生产许可获证查询" },
                    { name: "食品经营许可管理系统", url: "https://spjyxk.gsxt.gov.cn/cfdaPub/index/page/", desc: "食品经营许可管理系统" },
                    { name: "法人库特殊食品监管子库信息查询系统", url: "https://tszkcx.gsxt.gov.cn/corplib_public/ent_search?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "特殊食品信息查询平台", url: "http://ypzsx.gsxt.gov.cn/specialfood/?ref=https://szsyw.cn#/food", desc: "资质查询" },
                    { name: "全国快递业务许可", url: "https://zwfw.spb.gov.cn/xkqy?ref=https://szsyw.cn", desc: "资质查询" }, 
                    { name: "商业特许经营信息管理", url: "http://txjy.syggs.mofcom.gov.cn/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "质量证书查询", url: "https://www.cqc.com.cn/www/chinese/zscx/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "特种设备公示信息查询", url: "https://cnse.samr.gov.cn/info-pub/pub", desc: "特种设备公示信息查询" },
                    { name: "技能证书", url: "https://zscx.osta.org.cn/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "安标国家矿用产品安全标志中心", url: "https://www.aqbz.org/?ref=https://szsyw.cn#/home", desc: "资质查询" },
                    { name: "电信业务市场综合管理信息系统", url: "https://tsm.miit.gov.cn/dxxzsp/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "新闻总署从业机构和产品查询", url: "https://www.nppa.gov.cn/bsfw/cyjghcpcx/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "演出行业协会", url: "https://capa.com.cn/?ref=https://szsyw.cn#/index/HomePage", desc: "资质查询" },
                    { name: "新闻记者证查询", url: "https://press.nppa.gov.cn/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "全国矿业权人勘查开采信息管理系统", url: "https://kyqgs.mnr.gov.cn/index.jhtml?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "保险中介许可", url: "https://xkz.nfra.gov.cn/zj/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "保险许可证", url: "https://xkz.nfra.gov.cn/bx/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "金融许可证", url: "https://xkz.nfra.gov.cn/jr/?ref=https://szsyw.cn", desc: "资质查询" },
                    { name: "中食药监管信息查询平台", url: "http://www.cfdacx.com/?ref=https://szsyw.cn", desc: "资质查询" } 
                ]
            },
          
          {
                id: 8,
                title: "程序开发",
                icon: "fa-bolt",
                websites: [
                    { name: "AQL抽样", url: "https://wrf00123.github.io/tool3.html", desc: "查询程序" },
                    { name: "专业术语查询", url: "https://wrf00123.github.io/tool9.html", desc: "查询程序" },
                    { name: "标准代号查询", url: "https://wrf00123.github.io/tool11.html", desc: "查询程序" },
                    { name: "二维码批量生成", url: "https://wrf00123.github.io/tool12.html", desc: "条码工具" },
                    { name: "国家标准状态查询", url: "https://wrf00123.github.io/tool15.html", desc: "查询程序" },
                    { name: "国家/地区/品牌查询", url: "https://wrf00123.github.io/tool2.html", desc: "查询程序" },
                    { name: "部门编号查询", url: "https://wrf00123.github.io/tool7.html", desc: "查询程序" },
                    { name: "图书账号", url: "https://wrf00123.github.io/tool16.html", desc: "图书账号" },
                    { name: "时间计划小程序", url: "https://wrf00123.github.io/tool8.html", desc: "日期计划程序" },
                    { name: "时光计算器", url: "https://wrf00123.github.io/tool4.html", desc: "日期计算" },
                    { name: "RGB调色板", url: "https://wrf00123.github.io/tool13.html", desc: "调色板" },
                    {  name: "单位换算器", url: "https://wrf00123.github.io/tool14.html", desc: "单位换算器" },
                    { name: "html导出", url: "https://wrf00123.github.io/tool5.html", desc: "html工具" },
                    { name: "txt导出", url: "https://wrf00123.github.io/tool17.html", desc: "txt工具" },
                    { name: "不良影响演示", url: "https://wrf00123.github.io/tool10.html", desc: "演示工具" },
                    { name: "生日祝福", url: "https://wrf00123.github.io/tool18.html", desc: "演示工具" }
                ]
            },
            {
                id: 9,
                title: "办公工具",
                icon: "fa-bolt",
                websites: [
                    { name: "drow.io", url: "https://app.diagrams.net/", desc: "流程图" },
                    { name: "Excalidraw", url: "https://excalidraw.com/", desc: "流程图" },
                    { name: "process on", url: "https://www.processon.com/login", desc: "流程图" },
                    { name: "在线思维导图", url: "https://1000tool.com/office/mind-map", desc: "思维导图" },
                    { name: "paddleOCR", url: "https://aistudio.baidu.com/paddleocr", desc: "OCR" },
                    { name: "Deepseek OCR", url: "https://deepseek-ocr.aws.xin/", desc: "OCR" },
                    { name: "WordClouds", url: "https://www.wordclouds.com", desc: "词云" },
                    { name: "优词云", url: "https://www.uciyun.com/", desc: "词云" },
                    { name: "词云", url: "https://wordcloud.online/zh", desc: "词云" },
                    { name: "二维工坊", url: "https://tools.2weima.com/ciyun", desc: "词云" },
                    { name: "造字侠词云", url: "http://wordcloud.reeji.com/", desc: "词云" },
                    { name: "WORD ART", url: "https://wordart.com/", desc: "词云" },
                    { name: "chatexcel", url: "https://chatexcel.com/#/", desc: "AI excel" },
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
                    { name: "To ePub", url: "https://toepub.com/zh/", desc: "电子书格式转换" },
                    { name: "markdowntoword", url: "https://markdowntoword.io/zh/tools/markdown-to-pdf", desc: "Markdown转pdf" },
                    { name: "markdowntopdf", url: "https://markdowntopdf.co/zh", desc: "Markdown转pdf" },
                    { name: "Boost tool", url: "https://boost-tool.com/zh/tools/md_pdf", desc: "Markdown转pdf" },
                    { name: "Markdown编辑器", url: "https://mdeditor.net/zh/", desc: "Markdown转pdf" },
                    { name: "易转换", url: "https://www.easeconvert.com/markdown/", desc: "Markdown转pdf" },
                    { name: "Markdown Online", url: "https://www.markdownonline.net/zh/", desc: "Markdown编辑器" },
                    { name: "文字转手写", url: "https://text-to-handwriting.org/zh", desc: "文字转手写" },
                    { name: "白描网页版", url: "https://web.baimiaoapp.com/", desc: "文字提取工具" },
                    { name: "ChartCube", url: "https://chartcube.alipay.com/", desc: "可视化图表制作" },
                    { name: "富婆图表", url: "https://www.richcharts.com/", desc: "可视化图表制作" },
                    { name: "Recorder Online", url: "https://recorder-online.com/zh", desc: "在线录屏" },
                    { name: "在线解压缩包", url: "https://unziponline.org/", desc: "在线解压缩包" },
                    { name: "网页转换助手", url: "http://mmhtml.com/zh/", desc: "网页转换助手" },
                    { name: "pad ws交互白板", url: "https://pad.ws/", desc: "演示白板" },
                    { name: "在线白板", url: "https://toolwa.com/whiteboard/", desc: "演示白板" },
                    { name: "FileCodeBox", url: "https://share.lanol.cn/#/", desc: "文件快递柜" },
                    { name: "文叔叔", url: "https://www.wenshushu.cn/", desc: "文件快递柜" },
                    { name: "MuseTransfer", url: "https://musetransfer.com/", desc: "文件快递柜" },
                    { name: "Wormhole:https", url: "https://wormhole.app/", desc: "文件快递柜" },
                    { name: "轻松传", url: "https://easychuan.cn/", desc: "文件快递柜" },
                    { name: "gantt-chart", url: "https://gantt.vicsdf.com/", desc: "甘特图生成" },
                    { name: "发票查验", url: "https://inv-veri.chinatax.gov.cn/", desc: "发票查验" },
                    { name: "发票提取助手", url: "https://airegex.cn/", desc: "发票提取" },
                    { name: "天眼查", url: "https://www.tianyancha.com/", desc: "企业查询" },
                    { name: "企查查", url: "https://www.qcc.com/", desc: "企业查询" },
                    { name: "爱企查", url: "https://aiqicha.baidu.com/", desc: "企业查询" },
                    { name: "启信宝", url: "https://www.qixin.com/", desc: "企业查询" }
                ]
            },
          {
                id: 10,
                title: "效率工具",
                icon: "fa-bolt",
                websites: [
                    { name: "HTML工具", url: "https://www.jyshare.com/front-end/61/", desc: "HTML工具" },
                    { name: "兔兔图床", url: "https://tutu.to/#google_vignette", desc: "免费图片托管平台" },
                    { name: "路过图床", url: "https://imgse.com/", desc: "免费图片托管平台（每日限8）" },
                    { name: "黑猫图床", url: "https://img.hmvod.cc/", desc: "图床" },
                    { name: "bkhtmltopdf", url: "https://demo.bkhtmltopdf.com/ui/#/html-to-pdf", desc: "html转pdf" },
                    { name: "草料二维码", url: "https://cli.im/", desc: "文件转二维码" },
                    { name: "篡改猴脚本", url: "https://greasyfork.qytechs.cn/zh-CN/scripts/by-site/bilibili.com", desc: "文件转二维码" },
                    { name: "Clarity", url: "https://clarity.microsoft.com/demo/projects/view/3t0wlogvdz/dashboard?date=Last%203%20days", desc: "网站使用统计工具" },
                    { name: "Tiny Wow", url: "https://tinywow.com/", desc: "工具汇集" },
                    { name: "SVG Repo", url: "https://www.svgrepo.com/", desc: "图标工具" },
                    { name: "imgdiet", url: "https://www.imgdiet.com/zh-CN", desc: "图片压缩工具" },
                    { name: "极速图片压缩器", url: "https://www.zgcoder.com/tic/", desc: "图片压缩工具" },
                    { name: "Free Tinypng", url: "https://free.tinypng.site/", desc: "图片压缩工具" },
                    { name: "照片转手绘", url: "https://www.picturetodrawing.org/zh", desc: "照片转手绘" },
                    { name: "Copicseal", url: "https://copicseal.kohai.top/", desc: "照片加水印" },
                    { name: "EXIF Frame", url: "https://exifframe.org/zh", desc: "照片加水印" },
                    { name: "pick free", url: "https://www.pickfree.cn/", desc: "图片/视频/音效/音乐下载" },
                    { name: "123APPs", url: "https://online-video-cutter.com/projects", desc: "视频去水印" },
                    { name: "DiffRhythm", url: "https://diffrhythm.com/zh", desc: "AI音乐生成" },
                    { name: "牛五音乐网", url: "http://www.6002255.com/", desc: "音乐下载" },
                    { name: "lucida", url: "https://lucida.to/", desc: "音乐下载" },
                    { name: "制片帮素材", url: "https://stock.zhipianbang.com/", desc: "音效下载" },
                    { name: "Pic to Ico", url: "https://cn.pic2ico.com/", desc: "转成Ico格式" },
                    { name: "url/html转换md", url: "https://www.helloworld.net/html2md", desc: "url/html转换md" },
                    { name: "Icon Maker", url: "https://ray.so/icon", desc: "Ico图标制作" },
                    { name: "YEELOGO", url: "http://www.yeelogo.com/#/", desc: "logo制作" },
                    { name: "在线工具", url: "https://d1tools.com/tools", desc: "在线工具" },
                    { name: "跟哈工具", url: "https://genha.com/", desc: "跟哈工具" },
                    { name: "记灵在线工具", url: "https://remeins.com/", desc: "记灵在线工具" },
                    { name: "微信文件传输助手", url: "https://filehelper.weixin.qq.com/", desc: "文件传输" },
                    { name: "搜索公众号文章", url: "https://weixin.sogou.com/", desc: "公众号文章" },
                    { name: "GitHub Proxy", url: "https://ghfast.top/", desc: "GitHub加速下载" },
                    { name: "虾壳", url: "https://xiake.pro/", desc: "GitHub加速下载" },
                    { name: "时间瓶子", url: "https://timebottle.toolooz.com/", desc: "时间小工具" },
                    { name: "极简番茄", url: "https://t.kuaitu.cc/", desc: "时间小工具" },
                    { name: "clipchamp", url: "https://app.clipchamp.com/", desc: "文字转语音" },
                    { name: "AI speaker", url: "https://ai-speaker.net/", desc: "文字转语音" },
                    { name: "Microsoft SAM TTS", url: "https://samtts.com/", desc: "文字转语音" },
                    { name: "TTS", url: "https://t.leftsite.cn/", desc: "文字转语音" },
                    { name: "TTS-Online", url: "https://acgn.ttson.cn/", desc: "文字转语音" },
                    { name: "Azure TTS Web", url: "https://tts.femoon.top/cn", desc: "文字转语音" },
                    { name: "EasyVoice", url: "https://easyvoice.ioplus.tech/", desc: "小说转语音工具" },
                    { name: "在线转盘", url: "https://wheelpage.com/zh/", desc: "抽奖" },
                    { name: "歌曲海", url: "https://www.gequhai.com/", desc: "搜歌词" },
                    { name: "歌词易", url: "https://geciyi.com/", desc: "搜歌词" },
                    { name: "LRC字幕编辑", url: "https://sanmusen214.github.io/web_lyric_editor/", desc: "字幕编辑" },
                    { name: "字幕工具箱", url: "https://zm.i8k.tv/", desc: "字幕编辑" },
                    { name: "字幕拼图", url: "https://quotemaker.cc/zh/", desc: "字幕拼图" },
                    { name: "专业提词器", url: "https://www.best-teleprompter.com/zh", desc: "提词器" },
                    { name: "词咕咕", url: "https://cugo.toolooz.com/", desc: "提词器" },
                    { name: "Sign", url: "https://www.signo.cc/", desc: "流动字" },
                    { name: "人民币大写转换功能", url: "https://www.dapidan.cn/app/rmb-daxie/", desc: "转换器" },
                    { name: "英文字母大小写转换", url: "https://www.dapidan.cn/app/zimu-daxiaoxie/", desc: "转换器" },
                    { name: "汉语拼音转换器", url: "https://www.dapidan.cn/app/pinyin/", desc: "转换器" },
                    { name: "农历公历转换工具", url: "https://www.dapidan.cn/app/rili-zhuanhuan/", desc: "转换器" },
                    { name: "简体繁体转换", url: "https://1000tool.com/text/chineseConvert", desc: "转换器" },
                    { name: "中国传统色", url: "https://noneko.cn/", desc: "色系查询" },
                    { name: "颜色代码表", url: "https://www.ysdaima.com/", desc: "色系查询" },
                    { name: "BrandColors", url: "https://brandcolors.net/?ref=https://szsyw.cn", desc: "色系查询" },
                    { name: "LOL Colors", url: "https://www.webdesignrankings.com/resources/lolcolors/?ref=https://szsyw.cn", desc: "色系查询" },
                    { name: "Webgradients", url: "https://webgradients.com/?ref=https://szsyw.cn", desc: "色系查询" },
                    { name: "Hidden word", url: "https://hidden-word.top/", desc: "Hidden word" },
                    { name: "测速网", url: "https://www.speedtest.cn/?src=www.jspoo.com", desc: "测网速" },
                    { name: "鼠标测试", url: "https://www.setupcheck.tech/zh/tools/mouse", desc: "电脑硬件测试" },
                    { name: "手机号码归属地查询", url: "https://toolwa.com/phone/", desc: "归属地查询" },
                    { name: "重量换算", url: "https://1000tool.com/unit/weight", desc: "计算器" },
                    { name: "长度换算", url: "https://1000tool.com/unit/length", desc: "计算器" },
                    { name: "温度换算", url: "https://1000tool.com/unit/temperature", desc: "计算器" },
                    { name: "生日年龄计算器", url: "https://toolwa.com/age/", desc: "计算器" },
                    { name: "在线育儿补贴计算器", url: "https://uutool.cn/children-allowance/", desc: "计算器" },
                    { name: "劳法计算器", url: "https://web.laofa.com/calculator/?src=www.jspoo.com", desc: "计算器" }
                  
                ]
            },
            {
                id: 11,
                title: "专业软件",
                icon: "fa-cogs",
                websites: [
                    { name: "FMEA COACH", url: "https://www.fmeacoach.com/#/", desc: "免费版FMEA 软件（终身免费）" },
                    { name: "FreeSPC", url: "https://www.comcw.cn/pcsoft/6534.html", desc: "开源免费的 SPC 软件" },
                    { name: "格式工厂", url: "http://pcgeshi.com/", desc: "格式转换" },
                    { name: "ev录屏", url: "https://www.sootool.net/nexus/bi1/evluping.shtml?msclkid=1ea8e3bd237c12b4823d8b092c630dd1", desc: "录屏" },
                    { name: "Everything", url: "https://www.voidtools.com/zh-cn/downloads/", desc: "文件检索" },
                    { name: "Umi-OCR", url: "https://gitee.com/mirrors/Umi-OCR#https://gitee.com/link?target=https%3A%2F%2Fhiroi-sora.lanzoul.com%2Fs%2Fumi-ocr", desc: "OCR" },
                    { name: "FastStone Capture", url: "https://www.faststonecapture.cn/", desc: "截长图" },
                    { name: "小旺AI截图", url: "https://www.xiaowang.com/", desc: "截长图" },
                    { name: "PixPin", url: "https://pixpin.cn/", desc: "截长图" },
                    { name: "鹰迅办公", url: "https://www.inxunoffice.com/", desc: "批量文档处理" },
                    { name: "我的ABC软件工具箱", url: "https://www.wodeabc.com/", desc: "批量文档处理" },
                    { name: "7-Zip", url: "https://www.7-zip.org/", desc: "解压" },
                    { name: "PeaZip", url: "https://peazip.github.io/download-installer-p-windows.html", desc: "解压" },
                    { name: "Bandizip", url: "https://www.bandisoft.com/bandizip/", desc: "解压" },
                    { name: "搜狗输入法", url: "https://shurufa.sogou.com/wap/pc", desc: "输入法" },
                    { name: "讯飞输入法", url: "https://srf.xunfei.cn/index.html#/", desc: "输入法" },
                    { name: "百度输入法", url: "https://shurufa.baidu.com/default", desc: "输入法" },
                    { name: "微信输入法", url: "https://z.weixin.qq.com/", desc: "输入法" },
                    { name: "WPS", url: "https://z.weixin.qq.com/", desc: "文字处理" },
                    { name: "水豚鼠标助手", url: "https://shuitunapp.com/?ref=https://szsyw.cn", desc: "屏幕演示" },
                    { name: "Fengling", url: "https://fengling.nocmt.com/", desc: "剪贴板同步" },
                    { name: "方方格子", url: "http://www.ffcell.com/", desc: "excel插件" },
                    { name: "图床上传工具", url: "https://www.52pojie.cn/thread-2009036-1-1.html", desc: "免费图床上传工具" },
                    { name: "51PPT模板", url: "https://www.51pptmoban.com/ppt-soft/", desc: "PPT插件" },
                    { name: "Reeden", url: "https://reeden.app/cn", desc: "电子书阅读器" },
                    { name: "Office Tool Plus", url: "https://otp.landian.vip/zh-cn/#google_vignette", desc: "一键部署Office" },
                    { name: "机查查", url: "https://devink.techartlife.com/zh/", desc: "机查查" }
                ]
            },
            {
                id: 12,
                title: "模板下载",
                icon: "fa-download",
                websites: [
                    { name: "微软officePLUS", url: "https://www.officeplus.cn/", desc: "ppt/word/excel" },
                    { name: "优品PPT", url: "https://www.ypppt.com/", desc: "ppt/ppt元素/课件/字体" },
                    { name: "爱PPT", url: "https://www.2ppt.com/", desc: "ppt" },
                    { name: "第1PPT", url: "https://www.1ppt.com/tags/419/", desc: "ppt/ppt元素/字体/音效/课件" },
                    { name: "站长素材", url: "https://sc.chinaz.com/ppt/", desc: "ppt/图片/简历/字体/音效/PSD" },
                    { name: "51PPT模板", url: "https://www.51pptmoban.com/", desc: "ppt/ppt工具箱" },
                    { name: "PPT超级市场", url: "https://www.pptsupermarket.com/", desc: "ppt/ppt元素" }, 
                    { name: "枣知网", url: "https://www.51zaozhi.com/", desc: "ppt/word/excel" },
                    { name: "量子办公", url: "http://jiezouba.com/index.html", desc: "范本" },
                    { name: "简历下载", url: "https://jianlixiazai.cn/", desc: "简历" },
                    { name: "UP简历", url: "https://upcv.tech/?invite=INV0B8V447K", desc: "简历" },
                    { name: "文档解析助手", url: "http://125.208.22.28:8080/zhushou/?code=3pK8duHBI1LFszVyj", desc: "文档解析助手" },
                    { name: "大角牛下载助手", url: "https://dajiaoniu.site/Monkeys/BDWKWEB/index.html ", desc: "文档下载" },
                    { name: "办公汇", url: "https://www.bgbgh.com/", desc: "文档下载（每日1次）" },
                    { name: "GitCode", url: "https://gitcode.com/Open-source-documentation-tutorial", desc: "开源文档下载" },
                    { name: "Z-Library", url: "https://zh.zlib.by/", desc: "书籍下载" },
                    { name: "鸠摩搜书", url: "https://www.jiumodiary.com/", desc: "书籍下载" },
                    { name: "时光图书馆", url: "https://atimebook.com/", desc: "书籍下载" },
                    { name: "SaltyLeo", url: "https://tstrs.me/search", desc: "书籍下载" },
                    { name: "书格", url: "https://www.shuge.org/", desc: "书籍下载" },
                    { name: "读书阁", url: "https://duzhege.cn/", desc: "电子杂志下载" },
                    { name: "文捕", url: "https://www.blog-keeper.com/", desc: "文章解析工具" },
                    { name: "知识星球", url: "https://wx.zsxq.com/login", desc: "资料下载" },
                    { name: "百度文库", url: "https://wenku.baidu.com/?fr=brandad_2&_wkts_=1755328356957", desc: "资料下载" },
                    { name: "道客巴巴", url: "https://m.doc88.com/", desc: "资料下载" },
                    { name: "豆丁", url: "https://www.docin.com/", desc: "资料下载" },
                    { name: "原创力文档", url: "https://max.book118.com/", desc: "资料下载" },
                    { name: "腾讯文档", url: "https://docs.qq.com/desktop/?nlc=1", desc: "资料下载" },
                    { name: "仪器信息网", url: "https://www.instrument.com.cn/", desc: "资料下载" },
                    { name: "OpenSpeedy", url: "https://github.com/game1024/OpenSpeedy", desc: "百度网盘加速" },
                    { name: "飞搜侠", url: "https://www.feisoo.com/", desc: "云盘搜索" },
                    { name: "小兔搜搜", url: "https://xiaotusoso.com/", desc: "云盘搜索" },
                    { name: "如风搜", url: "https://sobaozang.com/", desc: "云盘搜索" },
                    { name: "我能搜", url: "https://www.wnsearch.top/", desc: "夸克网盘搜索" },
                    { name: "学搜搜", url: "https://www.xuesousou.net/", desc: "云盘搜索" },
                    { name: "学霸盘", url: "https://www.xuebapan.com/", desc: "云盘搜索" },
                    { name: "西瓜搜搜", url: "http://www.xgsoso.com/", desc: "百度云搜索" },
                    { name: "秒搜", url: "https://miaosou.fun/", desc: "云盘搜索" },
                    { name: "爱盘搜", url: "https://aipanso.com/", desc: "云盘搜索" },
                    { name: "小白盘", url: "https://www.xiaobaipan.com/", desc: "云盘搜索" },
                    { name: "易搜", url: "https://yiso.fun/", desc: "云盘搜索" },
                    { name: "趣盘搜", url: "https://pan.funletu.com/", desc: "云盘搜索" },
                    { name: "盘他一下", url: "https://panothers.com/", desc: "云盘搜索" },
                    { name: "UP云搜", url: "https://www.upyunso.com/", desc: "云盘搜索" },
                    { name: "千帆搜索", url: "https://pan.qianfan.app/", desc: "云盘搜索" },
                    { name: "快手视频解析", url: "https://kuaishou-video-download.com/zh", desc: "短视频下载" },
                    { name: "小红书视频解析", url: "https://www.xhs-download.org/zh", desc: "短视频下载" },
                    { name: "考拉解析", url: "http://www.zanqianba.com/", desc: "短视频下载" },
                    { name: "电脑系统office激活", url: "https://github.com/massgravel/Microsoft-Activation-Scripts", desc: "电脑系统" },
                    { name: "极简系统", url: "https://www.sysmini.com/", desc: "电脑系统" },
                    { name: "MSDN系统", url: "https://www.xitongku.com/?src=www.jspoo.com", desc: "电脑系统" },
                    { name: "HelloWindows.cn", url: "https://hellowindows.cn/", desc: "电脑系统" },
                    { name: "动系统", url: "https://www.dongxitong.com/", desc: "电脑系统" },
                    { name: "山己几子木", url: "https://msdn.sjjzm.com/win11.html?src=www.jspoo.com", desc: "电脑系统" }
                ]
            },
          {
                id: 13,
                title: "图库",
                icon: "fa-globe",
                websites: [
                  { name: "Unsplash", url: "https://unsplash.com", desc: "图" },
                  { name: "Pixabay", url: "https://www.pixabay.com", desc: "图" },
                  { name: "Reshot", url: "https://www.reshot.com", desc: "图" },
                  { name: "Colorhub", url: "https://colorhub.me", desc: "图" },
                  { name: "Wallpaper Cave", url: "https://wallpapercave.com/", desc: "电脑壁纸" },
                  { name: "暖糖壁纸", url: "https://www.nuantang.net/", desc: "电脑壁纸" },
                  { name: "轻壁纸", url: "https://qingbizhi.com/", desc: "电脑壁纸" },
                  { name: "大图居", url: "https://www.datuju.com/bizhi/", desc: "电脑壁纸" },
                  { name: "哲风壁纸", url: "https://haowallpaper.com/", desc: "电脑壁纸" },
                  { name: "恋风壁纸", url: "https://www.luvbree.com/", desc: "电脑壁纸（不登录免5/天，登录免15/天）" }
                  
                ]
            },
            {
                id: 14,
                title: "常用网站",
                icon: "fa-globe",
                websites: [
                  { name: "GitHub", url: "https://github.com/", desc: "GitHud" },
                  { name: "微软翻译", url: "https://cn.bing.com/translator", desc: "在线翻译" },
                  { name: "DeepL翻译", url: "https://www.deepl.com/zh/translator", desc: "在线翻译" },
                  { name: "有道翻译", url: "https://fanyi.youdao.com/#/TextTranslate", desc: "在线翻译" },
                  { name: "谷歌翻译", url: "https://translate.google.com/", desc: "在线翻译" },
                  { name: "问卷星", url: "https://www.wjx.cn/newwjx/manage/myquestionnaires.aspx?randomt=1744110951", desc: "问卷调查" },
                  { name: "知乎", url: "https://www.zhihu.com/", desc: "搜索" },
                  { name: "百度一下", url: "https://www.baidu.com/index.php?tn=75144485_2_dg&ch=1", desc: "搜索" },
                  { name: "Bing", url: "https://cn.bing.com/", desc: "搜索" },
                  { name: "微信公众平台", url: "https://mp.weixin.qq.com/", desc: "自媒体" },
                  { name: "视频号助手", url: "https://channels.weixin.qq.com/login.html", desc: "自媒体" },
                  { name: "抖音", url: "https://www.douyin.com//", desc: "自媒体" },
                  { name: "小红书", url: "https://www.xiaohongshu.com/explore?language=zh-CN", desc: "自媒体" },
                  { name: "头条号", url: "https://mp.toutiao.com/auth/page/login?redirect_url=JTJGcHJvZmlsZV92NCUyRg==", desc: "自媒体" },
                  { name: "快手", url: "https://www.kuaishou.com/brilliant", desc: "自媒体" },
                  { name: "腾讯微视", url: "https://h5.weishi.qq.com/weishi/account/login?r_url=http%3A%2F%2Fmedia.weishi.qq.com%2F", desc: "自媒体" },
                  { name: "123云盘", url: "https://www.123pan.com/", desc: "网盘" },
                  { name: "夸克网盘", url: "https://pan.quark.cn/", desc: "网盘" },
                  { name: "阿里云盘", url: "https://www.alipan.com/", desc: "网盘" }
                ]
            },
            {
                id: 15,
                title: "AI模型",
                icon: "fa-microchip",
                websites: [
                    { name: "DeepSeek", url: "https://chat.deepseek.com/sign_in", desc: "在线AI" },
                    { name: "ima", url: "https://ima.qq.com/?webFrom=10000028", desc: "在线AI" },
                    { name: "豆包", url: "https://www.doubao.com/chat/?channel=baidu_pz&from_login=1", desc: "在线AI" },
                    { name: "sora", url: "https://sora.chatgpt.com/explore", desc: "视视频生成" },
                    { name: "腾讯元宝", url: "https://yuanbao.tencent.com/chat/naQivTmsDa", desc: "在线AI" },
                    { name: "千问", url: "https://www.qianwen.com/chat", desc: "在线AI" },
                    { name: "WPS灵犀", url: "https://lingxi.wps.cn/echo", desc: "AI生成文档" },
                    { name: "飞书多维表格", url: "https://acnkgpefayvj.feishu.cn/base", desc: "在线AI" },
                    { name: "Xiaomi MlMo Studio", url: "https://aistudio.xiaomimimo.com/#/ ", desc: "小米AI" },
                    { name: "inviteChain", url: "https://invite-chain.vercel.app/", desc: "sora邀请码获取" },
                    { name: "MindVideo", url: "https://www.mindvideo.ai/zh/text-to-video/", desc: "视频生成" },
                    { name: "去sora2水印", url: "https://nosorawm.app/zh", desc: "去sora2水印" },
                    { name: "即梦AI", url: "https://jimeng.jianying.com/ai-tool/home/?utm_medium=bingpc&utm_source=pinzhuan&utm_campaign=button", desc: "视频生成" },
                    { name: "可灵AI", url: "https://app.klingai.com/cn/image-to-video/frame-mode/new?ra=4", desc: "视频生成" },
                    { name: "腾讯混元AI视频", url: "https://video.hunyuan.tencent.com/login?redirect=/?utm_source=maomu.com", desc: "视频生成" },
                    { name: "百度AI", url: "https://chat.baidu.com/search?isShowHello=1&extParams=%7B%22out_enter_type%22%3A%22sidebar_dialog%22%2C%22enter_type%22%3A%22sidebar_dialog%22%2C%22forceRefresh%22%3Atrue%7D", desc: "在线AI" },
                    { name: "讯飞星火", url: "https://xinghuo.xfyun.cn/", desc: "在线AI" },
                    { name: "火山方舟", url: "https://www.volcengine.com/experience/ark", desc: "在线AI" },
                    { name: "腾讯问卷", url: "https://wj.qq.com/ai/generate.html", desc: "AI生成问卷" },
                    { name: "小艺", url: "https://xiaoyi.huawei.com/chat/", desc: "华为小艺AI" },
                    { name: "小布助手", url: "https://xiaobu.coloros.com/chat", desc: "OPPO小布AI" },
                    { name: "灵光", url: "https://www.lingguang.com/chat", desc: "在线AI" },
                    { name: "扣子空间", url: "https://space.coze.cn/?from=landingpage&keywordid=%E6%89%A3%E5%AD%90%E7%A9%BA%E9%97%B4-&msclkid=beda8a449f5a1495141ee2f6e949910b&utm_campaign=486599295&utm_content=home&utm_id=0&utm_medium=sem&utm_source=bing&utm_source_platform=pc&utm_term=coze_bing_sem_dm_cpc_pc_czkj_pp_guanw_1&category=7524912604796452873", desc: "在线AI" },
                    { name: "TRAE", url: "https://www.trae.cn/sem?utm_source=bing&utm_medium=bing_sem&utm_campaign=486432838&utm_term=trae_bing_sem_dm_pc_cpc_tongy_aibczs_dmsc_1&msclkid=631e30d0a1751fa2ce4e582fd990f7a3", desc: "代码生成软件" },
                    { name: "CodeBuddy", url: "https://copilot.tencent.com/?utm_source=maomu.com", desc: "代码生成软件" },
                    { name: "腾讯云代码助手", url: "https://copilot.tencent.com/chat/", desc: "代码生成" },
                    { name: "秘塔AI搜索", url: "https://metaso.cn/", desc: "在线AI" },
                    { name: "知乎直答", url: "https://zhida.zhihu.com/?utm_source=maomu.com", desc: "在线AI" },
                    { name: "纳米AI", url: "https://www.n.cn/?utm_source=maomu.com", desc: "在线AI" },
                    { name: "墨刀AI", url: "https://modao.cc/?utm_source=maomu.com#", desc: "在线AI" },
                    { name: "天工AI", url: "https://www.tiangong.cn/", desc: "在线AI" },
                    { name: "腾讯混元", url: "https://hunyuan.tencent.com/?utm_source=maomu.com", desc: "在线AI" },
                    { name: "夸克AI", url: "https://ai.quark.cn/?utm_source=maomu.com", desc: "在线AI" },
                    { name: "ChatGPT", url: "https://chatgpt.com", desc: "在线AI" },
                    { name: Google AI Studio", url: "https://aistudio.google.com/", desc: "在线AI" },
                    { name: "文小言", url: "https://yiyan.baidu.com/", desc: "在线AI" }
                ]
            },
            {
                id: 16,
                title: "国内法规",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "全球法规网", url: "https://policy.mofcom.gov.cn/law/index.shtml", desc: "全球法规网" },
                    { name: "最高人民法院公报", url: "http://gongbao.court.gov.cn/?ref=https://szsyw.cn", desc: "最高人民法院公报" },
                    { name: "国家法律法规数据库", url: "https://flk.npc.gov.cn/index", desc: "国家法律法规数据库" },
                    { name: "国家规章库", url: "https://www.gov.cn/zhengce/xxgk/gjgzk/index.htm?searchWord=", desc: "国家规章库" },
                    { name: "HSE.zone", url: "https://www.hse.zone/index.html", desc: "法律法规更新平台" },
                    { name: "合规网", url: "http://www.csrcare.com/", desc: "EHS合规管理" },
                    { name: "国家市场监督管理总局", url: "https://www.samr.gov.cn/", desc: "国家市场监督管理总局" },
                    { name: "国家税务总局", url: "https://www.chinatax.gov.cn/", desc: "国家税务总局" },
                    { name: "国家知识产权局", url: "http://www.cnipa.gov.cn/", desc: "国家知识产权局" },
                    { name: "国家发展和改革委员会", url: "https://www.ndrc.gov.cn/", desc: "国家发展和改革委员会" },
                    { name: "国家企业信用信息公示系统", url: "http://www.gsxt.gov.cn/", desc: "企业工商/行政处罚/经营异常/违法查询" }, 
                    { name: "中国裁判文书网", url: "https://wenshu.court.gov.cn/", desc: "企业涉诉信息查询" }, 
                    { name: "中国执行信息公开网", url: "https://zxgk.court.gov.cn/", desc: "企业执行案件/失信被执行人/限制消费人员" }, 
                    { name: "职业卫生技术服务机构信息系统", url: "https://jsfw.zyjkfw.cn/", desc: "全国职业卫生放射卫生技术服务机构管理信息系统" },
                    { name: "中国电子质量监督(e-CQS)公共服务门户", url: "https://psp.e-cqs.cn/egov/iwantMore.jsp?type=1", desc: "中国电子质量监督(e-CQS)公共服务门户" },
                    { name: "证券期货法规数据库系统", url: "https://neris.csrc.gov.cn/falvfagui/?ref=https://szsyw.cn", desc: "证券期货法规数据库系统" },
                    { name: "中央人民政府", url: "https://www.gov.cn/", desc: "中央人民政府" },
                    { name: "司法部", url: "http://www.moj.gov.cn/", desc: "司法部" },
                    { name: "财政部", url: "http://www.mof.gov.cn/", desc: "财政部" },
                    { name: "外交部", url: "https://www.fmprc.gov.cn/", desc: "外交部" },
                    { name: "科学技术部", url: "https://www.most.gov.cn/", desc: "科学技术部" }
                ]
            },
          {
                id: 17,
                title: "合同范本",
                icon: "fa-book",
                websites: [
                    { name: "合同示范文本库", url: "https://htsfwb.samr.gov.cn/", desc: "国家市场监督总局合同范本" },
                    { name: "广西合同格式", url: "http://221.7.197.159:8088/www/template_list.aspx?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "武汉合同格式", url: "https://scjgj.wuhan.gov.cn/bsfw/htgl_65/htfb/?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "河南合同格式", url: "https://scjg.henan.gov.cn/ztzl/htsfwb/", desc: "合同范本" },
                    { name: "杭州市合同格式", url: "https://scjg.hangzhou.gov.cn/col/col1694849/index.html?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "广州市合同格式", url: "https://scjgj.gz.gov.cn/zwfw/fwxz/htsfwb/?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "上海市合同格式", url: "https://scjgj.sh.gov.cn/057/?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "黑龙江合同格式", url: "http://amr.hlj.gov.cn/", desc: "合同范本" },
                    { name: "新疆维吾尔自治区合同格式", url: "https://scjgj.xinjiang.gov.cn/xjaic/htsfwb/202001/be58291df7344eb8be772d64d8ad71ea.shtml?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "深圳市合同格式", url: "https://amr.sz.gov.cn/zxbs/zhxx/htsf/index.html", desc: "合同范本" },
                    { name: "华律合同范本库", url: "https://www.66law.cn/contractmodel/?ref=https://szsyw.cn", desc: "合同范本" },
                    { name: "法律图书馆", url: "http://www.law-lib.com/htfb/合同范本", desc: "合同范本" },
                    { name: "法律家", url: "http://www.fae.cn/", desc: "合同范本" }
                ]
            },
            {
                id: 18,
                title: "学教程",
                icon: "fa-book",
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
                id: 19,
                title: "学习网站",
                icon: "fa-graduation-cap",
                websites: [
                    { name: "麦肯锡中国", url: "https://www.mckinsey.com.cn/", desc: "麦肯锡季刊/行业研究报告/管理案例" },
                    { name: "世界经理人", url: "https://www.ceconline.com/", desc: "商业管理资讯/经理人社区/职业发展" },
                    { name: "OBPM", url: "http://www.obpm.org/download.html#", desc: "流程管理开放平台" },
                    { name: "PMI", url: "https://www.pmichina.org/", desc: "项目管理协会" },
                    { name: "终身教育平台", url: "https://le.ouchn.cn/home", desc: "学习" },
                    { name: "数字素养网", url: "https://szsyw.cn/jiaoshi", desc: "学习" },
                    { name: "国家中小学云课堂", url: "https://web-bd.ykt.eduyun.cn/", desc: "学习" },
                    { name: "语文迷", url: "https://www.yuwenmi.com/?ref=https://szsyw.cn", desc: "学习" },
                    { name: "第一范文网", url: "https://www.diyifanwen.com/", desc: "范文学习" },
                    { name: "优文网", url: "https://www.unjs.com/", desc: "范文学习" },
                    { name: "天天作文网", url: "https://www.t262.com/?ref=https://szsyw.cn", desc: "作文学习" },
                    { name: "查字典作文网", url: "https://zuowen.chazidian.com/", desc: "作文学习" },
                    { name: "大学生自学网", url: "http://v.dxsbb.com/index.html", desc: "学习" },
                    { name: "大学资源网", url: "https://www.dxzy163.com/", desc: "学习" },
                    { name: "淘宝教育", url: "https://daxue.taobao.com/", desc: "学习" },
                    { name: "学堂在线", url: "https://www.xuetangx.com/", desc: "学习" },
                    { name: "多邻国", url: "https://www.duolingo.com/learn", desc: "英语学习" },
                    { name: "VOA Learning English", url: "https://learningenglish.voanews.com/", desc: "英语学习" },
                    { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/", desc: "英语学习" },
                    { name: "可可英语", url: "语https://www.kekenet.com/", desc: "英语学习" },
                    { name: "英语巴士网", url: "https://www.engbus.cn/", desc: "英语学习" },
                    { name: "英语口语网", url: "http://www.ny-yy.com/", desc: "英语学习" },
                    { name: "Ries", url: "https://ries.ai/zh/learn-english", desc: "英语学习" },
                    { name: "LetMeEnglish.com", url: "https://letmeenglish.com/", desc: "英语学习" },
                    { name: "English Daily", url: "https://englishdaily.ai/", desc: "英语学习" },
                    { name: "田间小站", url: "https://www.tjxz.cc/", desc: "英语学习" },
                    { name: "英语小说网", url: "https://yingyuxiaoshuo.com/", desc: "英语小说" },
                    { name: "元素周期表", url: "https://pt.ziziyi.com/", desc: "元素周期表" },
                    { name: "元素周期表2", url: "https://www.dapidan.cn/app/yuansu-zqb/", desc: "元素周期表" },
                    { name: "历史人物网", url: "https://www.lishirenwu.com/?src=www.jspoo.com", desc: "历史人物网" },
                    { name: "看典古籍", url: "https://www.kandianguji.com/?src=www.jspoo.com", desc: "看典古籍" },
                    { name: "中国历史朝代顺序表", url: "https://www.lishimingren.com/chaodai/?src=www.jspoo.com", desc: "中国历史朝代顺序表" },
                    { name: "中国历史地名", url: "https://newarchive.ihp.sinica.edu.tw/hplname/placename/basic/", desc: "中国历史地名" },
                    { name: "中国诗人资料馆", url: "https://www.shiren.org/?src=www.jspoo.com", desc: "中国诗人资料馆" },
                    { name: "世界各国国旗", url: "https://flagpedia.asia/?src=www.jspoo.com", desc: "世界各国国旗" },
                    { name: "小故事铺", url: "https://storynook.cn/", desc: "小故事" },
                    { name: "汉字笔顺", url: "https://www.hanzipi.com/?src=www.jspoo.com", desc: "汉字笔顺" },
                    { name: "普通高等学校名单", url: "https://uutool.cn/info-college/", desc: "普通高等学校名单" },
                    { name: "下厨房", url: "https://m.xiachufang.com/", desc: "菜谱查询" },
                    { name: "网上厨房", url: "https://www.xiaochushuo.com/", desc: "菜谱查询" }
                ]
            },
          {
                id: 20,
                title: "资源网站",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "科淘科研导航", url: "https://www.bioscitao.com/", desc: "资源合集" },
                    { name: "理白嫖资源站", url: "https://byepiao.com/", desc: "资源合集" },
                    { name: "聚神铺导航", url: "https://www.jspoo.com/", desc: "资源合集" },
                    { name: "数智未来", url: "https://diglit.cn/", desc: "资源合集" },
                    { name: "吾爱破解", url: "https://www.52pojie.cn/", desc: "资源合集" },
                    { name: "乐于分享网", url: "https://fffxx.com/page/2", desc: "软件分享" },
                    { name: "开源精选", url: "https://www.ossnav.com/", desc: "软件/工具分享" },
                    { name: "白嫖资源网", url: "https://free.baipiao.top/", desc: "软件/工具分享" },
                    { name: "FMHY", url: "https://fmhy.net/", desc: "资源合集" },
                    { name: "优设导航", url: "https://hao.uisdc.com/", desc: "资源合集" },
                    { name: "HiPPTer", url: "https://www.hippter.com/", desc: "资源合集" },
                    { name: "YOYO导航", url: "https://yoyonav.com/", desc: "资源合集" },
                    { name: "库房kf369.cn", url: "https://kf369.cn/#term-2资源集合", desc: "资源合集" },
                    { name: "万有导航", url: "https://wanyouw.com/", desc: "资源合集" },
                    { name: "办公人导航", url: "https://www.bgrdh.com/", desc: "资源合集" },
                    { name: "toolfk", url: "https://www.toolfk.com/", desc: "资源合集" },
                    { name: "一糖导航", url: "https://iitang.com/#term-6115", desc: "资源合集" },
                    { name: "slaw", url: "https://www.oslaw.cn/site-nav", desc: "资源合集" }
                  
                ]
            },
          {
                id: 21,
                title: "科普网站",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "未来论坛", url: "https://www.futureforum.org.cn/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "中国消防杂志网", url: "https://zgxf.magtechjournal.com/CN/home", desc: "科普" },
                    { name: "科普中国网", url: "https://www.kepuchina.cn/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "中国气象科普网", url: "http://www.qxkp.net/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "中国科普博览", url: "https://www.kepu.net.cn/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "科学网", url: "https://www.sciencenet.cn/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "中国数字科技馆", url: "https://www.cdstm.cn/", desc: "科普" },
                    { name: "中国国家地理", url: "http://www.dili360.com/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "果壳科技有意思", url: "https://www.guokr.com/", desc: "科普" },
                    { name: "维科普", url: "https://www.wkepu.com/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "中国考古", url: "http://kaogu.cssn.cn/zwb/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "网易探索", url: "https://discovery.163.com/?ref=https://szsyw.cn", desc: "科普" },
                    { name: "实时台风消息", url: "https://typhoon.slt.zj.gov.cn/#/", desc: "科普" }
                ]
            },
          {
                id: 22,
                title: "有趣网站",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "各种测试", url: "https://www.zxgj.cn/?src=www.jspoo.com", desc: "测试" },
                    { name: "在线空调", url: "https://toolwa.com/ac/", desc: "模拟" },
                    { name: "XP系统模拟器", url: "https://hackspoof.tonghei.com/windows-xp-simulator/", desc: "模拟" },
                    { name: "wins98系统模拟器", url: "https://www.windows93.net/#!/", desc: "模拟" },
                    { name: "抛硬币", url: "https://uutool.cn/coin/", desc: "模拟" },
                    { name: "3D地球", url: "https://3d-app.yunser.com/earth/", desc: "模拟" },
                    { name: "地球旧照", url: "https://3d-app.yunser.com/plateMotion/", desc: "模拟" },
                    { name: "请画一个小人", url: "https://www.webhek.com/post/draw-a-stickman/", desc: "游戏" },
                    { name: "到底是谁没动", url: "http://emojisandearthporn.com/", desc: "游戏" },
                    { name: "在线拼魔方", url: "https://tools.bqrdh.com/rubiks-cube/", desc: "游戏" },
                    { name: "小霸王", url: "https://www.yikm.net/", desc: "游戏" },
                    { name: "自由钢琴", url: "https://www.autopiano.cn/#google_vignette", desc: "游戏" },
                    { name: "Poki", url: "https://poki.com/zh", desc: "游戏" },
                    { name: "千米游戏", url: "https://www.yikm.net/", desc: "游戏" },
                    { name: "Weave Silk", url: "http://weavesilk.com/", desc: "对称光影绘画工具" },
                    { name: "Bongo Cat", url: "https://bongo.cat/", desc: "互动网站" },
                    { name: "全球气候", url: "https://zoom.earth/", desc: "环境" },
                    { name: "环游世界", url: "https://www.airpano.org.cn/", desc: "风景" },
                    { name: "狗屁不通文章生成器", url: "https://suulnnka.github.io/BullshitGenerator/index.html", desc: "文章" },
                    { name: "能不能好好说话", url: "https://lab.magiconch.com/nbnhhsh/", desc: "句子" },
                    { name: "彩虹屁生成器", url: "https://chp.shadiao.pro/?from_nmsl", desc: "句子" },
                    { name: "励志句子", url: "https://1000tool.com/text/lizhi", desc: "句子" },
                    { name: "毒鸡汤", url: "https://1000tool.com/text/duJiTang", desc: "句子" },
                    { name: "中午吃什么", url: "https://chishenme.xyz/", desc: "句子" },
                ]
            },
          {
                id: 23,
                title: "邮箱",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "163邮箱", url: "https://mail.163.com/", desc: "邮箱" },
                    { name: "QQ邮箱", url: "https://mail.qq.com/", desc: "邮箱" },
                    { name: "126邮箱", url: "https://126.com/", desc: "邮箱" },
                    { name: "139邮箱", url: "https://mail.10086.cn/default.html?mtime=2", desc: "邮箱" },
                    { name: "189邮箱", url: "https://webmail30.189.cn/w2/index.html", desc: "邮箱" },
                    { name: "Gmail", url: "https://workspace.google.com/intl/zh-CN/gmail/", desc: "邮箱" },
                    { name: "outlook", url: "https://www.microsoft.com/zh-cn/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fmail%2f0%2f%3fnlp%3d0&sdf=0", desc: "邮箱" },
                    { name: "腾讯企业邮箱", url: "https://exmail.qq.com/login", desc: "邮箱" },
                    { name: "Yeah邮箱", url: "https://www.yeah.net/", desc: "邮箱" },
                    { name: "阿里邮箱", url: "https://www.ali-exmail.cn/Land/", desc: "邮箱" },
                    { name: "沃邮箱", url: "https://mail.wo.cn/#mobile", desc: "邮箱" },
                    { name: "搜狐闪电邮箱", url: "https://mail.sohu.com/fe/#/login", desc: "邮箱" },
                    { name: "tom邮箱", url: "https://mail.tom.com/", desc: "邮箱" },
                    { name: "新浪邮箱", url: "https://mail.sina.com.cn/", desc: "邮箱" },
                    { name: "Foxmail", url: "https://www.foxmail.com/", desc: "邮箱软件" },
                    { name: "Temporam", url: "https://www.temporam.com/zh", desc: "临时邮箱" },
                    { name: "zrfme", url: "https://mail.zrfme.com/", desc: "临时邮箱" },
                    { name: "临时邮箱", url: "https://tempmailto.online/zh/", desc: "临时邮箱" },
                    { name: "MoeMail", url: "https://moemail.app/", desc: "临时邮箱" }
                ]
            },
           {
                id: 24,
                title: "采购平台",
                icon: "fa-ellipsis-h",
                websites: [
                  { name: "淘宝网", url: "https://www.taobao.com/", desc: "采购平台" },
                    { name: "天猫", url: "https://www.tmall.com/", desc: "采购平台" },
                    { name: "京东", url: "https://www.jd.com/", desc: "采购平台" },
                    { name: "亚马逊", url: "https://www.amazon.com/", desc: "采购平台" },
                    { name: "苏宁易购", url: "https://www.suning.com/", desc: "采购平台" },
                    { name: "唯品会", url: "https://www.vip.com/", desc: "采购平台" },
                    { name: "网易严选", url: "https://you.163.com/", desc: "采购平台" },
                    { name: "当当网", url: "https://www.dangdang.com/", desc: "采购平台" },
                    { name: "国美", url: "https://sitemap.gome.com.cn/", desc: "采购平台" }
                ]
            },
          {
                id: 25,
                title: "招聘平台",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "Boss直聘", url: "https://www.zhipin.com/shenzhen/?seoRefer=index", desc: "招聘平台" },
                    { name: "智联招聘", url: "https://landing.zhaopin.com/register?identity=b&channel_name=baidu_sem_track&callback_id=glUmbr78&_data_version=0.6.1&channel_utm_content=jp&project=zlclient&channel_utm_medium=ocpc&tid=xTB&channel_link_type=web&channel_utm_source=baidusem_b&hash_key=MLJV6l8drfs4MKSgEAHR&sat_cf=2&channel_utm_term=19909&_channel_track_key=RLzoh25z&link_version=1&channel_keyword_id=700612665649&channel_ad_id=84616067013&channel_account_id=37244504&channel_keyword=%E6%99%BA%E8%81%94%E4%BA%BA%E6%89%8D%E7%BD%91%E6%8B%9B%E8%81%98%E7%BD%91%E5%AE%98%E7%BD%91&channel_adgroup_id=9149067349&channel_campaign_id=396370102&bd_vid=8629845013051779149", desc: "招聘平台" },
                    { name: "前程无忧", url: "https://mkt.51job.com/tg/sem/lp2025/LP_2025_CB4.html?from=bingpz&partner=SEM_pcbingpz_02", desc: "招聘平台" },
                    { name: "中国公共招聘网", url: "http://job.mohrss.gov.cn/", desc: "招聘平台" },
                    { name: "国资央企招聘平台", url: "https://cujiuye.iguopin.com/", desc: "招聘平台" },
                    { name: "湖南人才网", url: "https://www.hnrcsc.com/#/", desc: "招聘平台" },
                    { name: "南方人才网", url: "https://www.job168.com/", desc: "招聘平台" },
                    { name: "四川人才网", url: "https://www.scrc168.com/", desc: "招聘平台" },
                    { name: "广东人才网", url: "https://www.gdrc.com/", desc: "招聘平台" }
                ]
            },
          
          {
                id: 26,
                title: "其他",
                icon: "fa-ellipsis-h",
                websites: [
                    { name: "天下老照片", url: "http://www.laozhaopian5.com/", desc: "老照片" },
                    { name: "影视", url: "https://yinghezhinan.com/sites/zaixian/", desc: "影视" }
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
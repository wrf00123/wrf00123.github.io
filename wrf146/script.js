// 完整的网站数据
const websiteData = [
    {
        id: 1,
        title: "国际标准",
        icon: "fa-globe",
        subCategories: [
            {
                name: "ISO与国际组织",
                websites: [
                    { title: "ISO国际标准化组织", desc: "全球最权威的标准化机构，制定国际标准", url: "https://www.iso.org", icon: "fa-file-alt" },
                    { title: "IEC国际电工委员会", desc: "制定电气、电子和相关技术领域的国际标准", url: "https://www.iec.ch", icon: "fa-bolt" },
                    { title: "ITU国际电信联盟", desc: "联合国专门机构，管理电信和信息通信技术", url: "https://www.itu.int", icon: "fa-phone" },
                    { title: "IEEE电气电子工程师学会", desc: "全球最大的专业技术组织之一", url: "https://www.ieee.org", icon: "fa-microchip" },
                    { title: "W3C万维网联盟", desc: "制定Web标准的国际权威组织", url: "https://www.w3.org", icon: "fa-globe" },
                    { title: "IETF互联网工程任务组", desc: "互联网技术标准制定组织", url: "https://www.ietf.org", icon: "fa-network-wired" }
                ]
            },
            {
                name: "欧盟与环保标准",
                websites: [
                    { title: "欧盟委员会", desc: "欧盟的执行机构，制定欧盟政策和法律", url: "https://ec.europa.eu", icon: "fa-landmark" },
                    { title: "REACH法规", desc: "欧盟关于化学品注册、评估、许可和限制的法规", url: "https://echa.europa.eu", icon: "fa-flask" },
                    { title: "CE认证", desc: "欧盟市场准入标志", url: "https://ec.europa.eu/growth/tools-databases/nando/", icon: "fa-check-circle" },
                    { title: "RoHS指令", desc: "限制在电子电气设备中使用某些有害物质", url: "https://ec.europa.eu/environment/waste/rohs_en.htm", icon: "fa-leaf" }
                ]
            },
            {
                name: "国际认证",
                websites: [
                    { title: "UL认证", desc: "全球领先的产品安全认证机构", url: "https://www.ul.com", icon: "fa-shield-alt" },
                    { title: "TÜV莱茵", desc: "德国技术监督协会，知名认证机构", url: "https://www.tuv.com", icon: "fa-certificate" },
                    { title: "SGS通标", desc: "全球领先的检验、鉴定、测试和认证机构", url: "https://www.sgs.com", icon: "fa-search" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "国家标准",
        icon: "fa-flag",
        subCategories: [
            {
                name: "中国标准",
                websites: [
                    { title: "国家标准全文公开系统", desc: "免费查阅中国国家标准全文", url: "https://openstd.samr.gov.cn", icon: "fa-book" },
                    { title: "全国标准信息公共服务平台", desc: "中国国家标准化管理委员会官方平台", url: "https://std.samr.gov.cn", icon: "fa-database" },
                    { title: "中国标准服务网", desc: "提供标准查询、购买和咨询服务", url: "https://www.cssn.net.cn", icon: "fa-globe-china" },
                    { title: "国家计量院", desc: "中国最高计量科学研究机构", url: "https://www.nim.ac.cn", icon: "fa-ruler-combined" }
                ]
            },
            {
                name: "美国标准",
                websites: [
                    { title: "ANSI美国国家标准学会", desc: "美国自愿性标准体系的协调机构", url: "https://www.ansi.org", icon: "fa-flag-usa" },
                    { title: "ASTM国际", desc: "全球领先的自愿性共识标准制定组织", url: "https://www.astm.org", icon: "fa-flask-vial" },
                    { title: "API美国石油学会", desc: "石油天然气行业标准制定机构", url: "https://www.api.org", icon: "fa-oil-can" }
                ]
            },
            {
                name: "其他国家",
                websites: [
                    { title: "BSI英国标准协会", desc: "全球首个国家标准组织", url: "https://www.bsigroup.com", icon: "fa-flag-england" },
                    { title: "DIN德国标准化学会", desc: "德国国家标准组织", url: "https://www.din.de", icon: "fa-flag-germany" },
                    { title: "JIS日本工业标准", desc: "日本国家级标准", url: "https://www.jisc.go.jp", icon: "fa-flag-japan" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "行业标准",
        icon: "fa-industry",
        subCategories: [
            {
                name: "信息技术",
                websites: [
                    { title: "全国信息技术标准化技术委员会", desc: "负责信息技术领域标准化工作", url: "https://www.cesi.cn", icon: "fa-laptop-code" },
                    { title: "中国电子技术标准化研究院", desc: "电子信息技术领域权威研究机构", url: "https://www.cesi.ac.cn", icon: "fa-microchip" },
                    { title: "W3C中国", desc: "万维网联盟中国总部", url: "https://www.chinaw3c.org", icon: "fa-code" }
                ]
            },
            {
                name: "建筑工程",
                websites: [
                    { title: "住建部标准定额司", desc: "住房和城乡建设部标准管理机构", url: "https://www.mohurd.gov.cn", icon: "fa-building" },
                    { title: "中国建筑标准设计研究院", desc: "建筑标准研究和设计机构", url: "https://www.chinabuildingcenter.com", icon: "fa-drafting-compass" }
                ]
            },
            {
                name: "医药卫生",
                websites: [
                    { title: "国家药典委员会", desc: "国家药品标准管理机构", url: "https://www.chp.org.cn", icon: "fa-pills" },
                    { title: "医疗器械标准管理中心", desc: "医疗器械标准管理机构", url: "https://www.nifdc.org.cn", icon: "fa-heartbeat" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "设计工具",
        icon: "fa-palette",
        subCategories: [
            {
                name: "UI/UX设计",
                websites: [
                    { title: "Figma", desc: "强大的在线协作设计工具", url: "https://www.figma.com", icon: "fa-pen-fancy" },
                    { title: "Sketch", desc: "Mac平台专业设计工具", url: "https://www.sketch.com", icon: "fa-paint-brush" },
                    { title: "Adobe XD", desc: "Adobe旗下UI/UX设计工具", url: "https://www.adobe.com/products/xd.html", icon: "fa-adobe" },
                    { title: "FigJam", desc: "Figma旗下在线白板协作工具", url: "https://www.figma.com/figjam", icon: "fa-sticky-note" }
                ]
            },
            {
                name: "图形设计",
                websites: [
                    { title: "Adobe Photoshop", desc: "全球最流行的图像处理软件", url: "https://www.adobe.com/products/photoshop.html", icon: "fa-image" },
                    { title: "Adobe Illustrator", desc: "矢量图形设计行业标准", url: "https://www.adobe.com/products/illustrator.html", icon: "fa-vector-square" },
                    { title: "GIMP", desc: "开源免费的图像编辑工具", url: "https://www.gimp.org", icon: "fa-palette" }
                ]
            },
            {
                name: "原型设计",
                websites: [
                    { title: "Axure", desc: "专业的交互原型设计工具", url: "https://www.axure.com", icon: "fa-sitemap" },
                    { title: "Principle", desc: "Mac平台交互动画设计工具", url: "https://principleformac.com", icon: "fa-play-circle" },
                    { title: "ProtoPie", desc: "高保真原型设计工具", url: "https://www.protopie.io", icon: "fa-cube" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "开发资源",
        icon: "fa-code",
        subCategories: [
            {
                name: "代码托管",
                websites: [
                    { title: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com", icon: "fab fa-github" },
                    { title: "GitLab", desc: "强大的Git仓库管理平台", url: "https://gitlab.com", icon: "fab fa-gitlab" },
                    { title: "Gitee", desc: "中国领先的代码托管平台", url: "https://gitee.com", icon: "fa-code-branch" }
                ]
            },
            {
                name: "前端开发",
                websites: [
                    { title: "MDN Web Docs", desc: "Mozilla官方网络技术文档", url: "https://developer.mozilla.org", icon: "fa-book-open" },
                    { title: "Can I Use", desc: "浏览器兼容性查询工具", url: "https://caniuse.com", icon: "fa-check-square" },
                    { title: "caniuse", desc: "前端特性兼容性查询", url: "https://caniuse.com", icon: "fa-browser" },
                    { title: "CodePen", desc: "前端代码在线展示和分享", url: "https://codepen.io", icon: "fa-code" }
                ]
            },
            {
                name: "后端开发",
                websites: [
                    { title: "Stack Overflow", desc: "全球最大的程序员问答社区", url: "https://stackoverflow.com", icon: "fab fa-stack-overflow" },
                    { title: "DZone", desc: "开发者社区和技术资讯平台", url: "https://dzone.com", icon: "fa-newspaper" },
                    { title: "Dev.to", desc: "开发者社区平台", url: "https://dev.to", icon: "fa-users" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "AI工具",
        icon: "fa-robot",
        subCategories: [
            {
                name: "通用AI",
                websites: [
                    { title: "ChatGPT", desc: "OpenAI开发的对话式AI", url: "https://chat.openai.com", icon: "fa-comments" },
                    { title: "Claude", desc: "Anthropic开发的AI助手", url: "https://claude.ai", icon: "fa-brain" },
                    { title: "Gemini", desc: "Google开发的AI模型", url: "https://gemini.google.com", icon: "fa-star" },
                    { title: "Perplexity", desc: "AI驱动的搜索引擎", url: "https://www.perplexity.ai", icon: "fa-search" }
                ]
            },
            {
                name: "图像生成",
                websites: [
                    { title: "Midjourney", desc: "强大的AI图像生成工具", url: "https://www.midjourney.com", icon: "fa-images" },
                    { title: "DALL-E", desc: "OpenAI开发的图像生成模型", url: "https://openai.com/dall-e-3", icon: "fa-palette" },
                    { title: "Stable Diffusion", desc: "开源的AI图像生成模型", url: "https://stability.ai", icon: "fa-sparkles" }
                ]
            },
            {
                name: "编程辅助",
                websites: [
                    { title: "GitHub Copilot", desc: "AI编程助手", url: "https://github.com/copilot", icon: "fa-robot" },
                    { title: "Cursor", desc: "AI代码编辑器", url: "https://cursor.so", icon: "fa-keyboard" },
                    { title: "Tabnine", desc: "AI代码补全工具", url: "https://www.tabnine.com", icon: "fa-code" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "素材资源",
        icon: "fa-images",
        subCategories: [
            {
                name: "免费图库",
                websites: [
                    { title: "Unsplash", desc: "高质量免费图片素材库", url: "https://unsplash.com", icon: "fa-camera" },
                    { title: "Pexels", desc: "免费高清照片和视频", url: "https://www.pexels.com", icon: "fa-photo-video" },
                    { title: "Pixabay", desc: "免费图片、视频和音乐", url: "https://pixabay.com", icon: "fa-images" },
                    { title: "Freepik", desc: "免费矢量图和PSD素材", url: "https://www.freepik.com", icon: "fa-shapes" }
                ]
            },
            {
                name: "图标资源",
                websites: [
                    { title: "Font Awesome", desc: "最流行的图标字体库", url: "https://fontawesome.com", icon: "fa-icons" },
                    { title: "Iconfont", desc: "阿里巴巴矢量图标库", url: "https://www.iconfont.cn", icon: "fa-palette" },
                    { title: "Flaticon", desc: "海量免费图标素材", url: "https://www.flaticon.com", icon: "fa-star" },
                    { title: "Feather Icons", desc: "简洁优美的开源图标", url: "https://feathericons.com", icon: "fa-feather" }
                ]
            },
            {
                name: "字体资源",
                websites: [
                    { title: "Google Fonts", desc: "Google免费字体库", url: "https://fonts.google.com", icon: "fa-font" },
                    { title: "字体天下", desc: "中文字体下载", url: "https://www.fonts.net.cn", icon: "fa-chinese-yuan-sign" },
                    { title: "Font Squirrel", desc: "免费商用字体", url: "https://www.fontsquirrel.com", icon: "fa-font" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "效率工具",
        icon: "fa-bolt",
        subCategories: [
            {
                name: "笔记文档",
                websites: [
                    { title: "Notion", desc: "全能型笔记和协作工具", url: "https://www.notion.so", icon: "fa-book" },
                    { title: "Obsidian", desc: "基于本地文件的知识库工具", url: "https://obsidian.md", icon: "fa-gem" },
                    { title: "语雀", desc: "蚂蚁集团推出的知识库", url: "https://www.yuque.com", icon: "fa-sparrow" },
                    { title: "飞书文档", desc: "字节跳动推出的协作文档", url: "https://www.feishu.cn", icon: "fa-file-alt" }
                ]
            },
            {
                name: "项目管理",
                websites: [
                    { title: "Trello", desc: "看板式项目管理工具", url: "https://trello.com", icon: "fa-columns" },
                    { title: "Asana", desc: "团队协作和项目管理", url: "https://asana.com", icon: "fa-tasks" },
                    { title: "Jira", desc: "专业的敏捷项目管理工具", url: "https://www.atlassian.com/software/jira", icon: "fa-bug" },
                    { title: "Monday.com", desc: "直观的项目管理平台", url: "https://monday.com", icon: "fa-calendar-check" }
                ]
            },
            {
                name: "云端存储",
                websites: [
                    { title: "Dropbox", desc: "知名的云存储服务", url: "https://www.dropbox.com", icon: "fa-cloud" },
                    { title: "Google Drive", desc: "Google云端硬盘", url: "https://drive.google.com", icon: "fab fa-google-drive" },
                    { title: "OneDrive", desc: "微软云存储服务", url: "https://onedrive.live.com", icon: "fab fa-microsoft" },
                    { title: "百度网盘", desc: "国内常用的云存储", url: "https://pan.baidu.com", icon: "fa-cloud-download-alt" }
                ]
            }
        ]
    }
];

// 状态管理
let currentCategoryId = 0; // 0 表示全部
let currentSubCategoryIndex = -1; // -1 表示该分类下的全部，当 currentCategoryId 为 0 时表示选中的一级分类 ID
let sidebarSearchText = '';
let mainSearchText = '';

// DOM 元素
const sidebarNavEl = document.getElementById('sidebarNav');
const pageTitleEl = document.getElementById('pageTitle');
const pageCountEl = document.getElementById('pageCount');
const subMenuBarEl = document.getElementById('subMenuBar');
const bookmarksContainerEl = document.getElementById('bookmarksContainer');
const themeToggleEl = document.getElementById('themeToggle');
const sidebarSearchInputEl = document.getElementById('sidebarSearchInput');
const mainSearchInputEl = document.getElementById('mainSearchInput');
const collectBtnEl = document.getElementById('collectBtn');

// 计算分类的网站总数
function countWebsitesInCategory(category) {
    let count = 0;
    if (category.subCategories) {
        for (const subCat of category.subCategories) {
            if (subCat.websites) {
                count += subCat.websites.length;
            }
        }
    }
    return count;
}

// 计算所有网站总数
function countAllWebsites() {
    let count = 0;
    for (const category of websiteData) {
        count += countWebsitesInCategory(category);
    }
    return count;
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleEl.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleEl.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// 切换主题
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleEl.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// 清空搜索词
function clearSearchInputs() {
    sidebarSearchInputEl.value = '';
    sidebarSearchText = '';
    mainSearchInputEl.value = '';
    mainSearchText = '';
}

// 渲染侧边栏导航
function renderSidebarNav() {
    let html = `
        <div class="nav-item ${currentCategoryId === 0 ? 'active' : ''}" data-id="0">
            <div class="nav-item-left">
                <i class="fas fa-th-large"></i>
                <span>全部</span>
            </div>
            <span class="nav-item-count">${countAllWebsites()}</span>
        </div>
    `;

    for (const category of websiteData) {
        // 侧边栏搜索过滤
        if (sidebarSearchText && !category.title.toLowerCase().includes(sidebarSearchText.toLowerCase())) {
            continue;
        }
        
        html += `
            <div class="nav-item ${currentCategoryId === category.id ? 'active' : ''}" data-id="${category.id}">
                <div class="nav-item-left">
                    <i class="fas ${category.icon}"></i>
                    <span>${category.title}</span>
                </div>
                <span class="nav-item-count">${countWebsitesInCategory(category)}</span>
            </div>
        `;
    }

    sidebarNavEl.innerHTML = html;

    // 绑定点击事件
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => {
            clearSearchInputs();
            const id = parseInt(el.dataset.id);
            currentCategoryId = id;
            currentSubCategoryIndex = -1; // 重置选中状态
            renderSidebarNav();
            renderSubMenu();
            renderBookmarks();
        });
    });
}

// 渲染二级菜单
function renderSubMenu() {
    let html = '';

    if (currentCategoryId === 0) {
        // 全部模式下：显示所有一级分类作为二级菜单
        const totalCount = countAllWebsites();
        html += `
            <div class="sub-nav-item ${currentSubCategoryIndex === -1 ? 'active' : ''}" data-index="-1">
                <span>全部</span>
                <span class="sub-nav-count">(${totalCount})</span>
            </div>
        `;

        websiteData.forEach(category => {
            const count = countWebsitesInCategory(category);
            html += `
                <div class="sub-nav-item ${currentSubCategoryIndex === category.id ? 'active' : ''}" data-index="${category.id}">
                    <span>${category.title}</span>
                    <span class="sub-nav-count">(${count})</span>
                </div>
            `;
        });

        subMenuBarEl.innerHTML = html;

        // 绑定点击事件
        document.querySelectorAll('.sub-nav-item').forEach(el => {
            el.addEventListener('click', () => {
                clearSearchInputs();
                const id = parseInt(el.dataset.index);
                currentSubCategoryIndex = id;
                renderSubMenu();
                renderBookmarks();
            });
        });
        return;
    }

    // 普通分类模式
    const category = websiteData.find(c => c.id === currentCategoryId);
    if (!category || !category.subCategories) {
        subMenuBarEl.innerHTML = '';
        return;
    }

    // 添加"全部"选项
    const totalCount = countWebsitesInCategory(category);
    html += `
        <div class="sub-nav-item ${currentSubCategoryIndex === -1 ? 'active' : ''}" data-index="-1">
            <span>全部</span>
            <span class="sub-nav-count">(${totalCount})</span>
        </div>
    `;

    // 添加各个子分类
    category.subCategories.forEach((subCat, index) => {
        const count = subCat.websites ? subCat.websites.length : 0;
        html += `
            <div class="sub-nav-item ${currentSubCategoryIndex === index ? 'active' : ''}" data-index="${index}">
                <span>${subCat.name}</span>
                <span class="sub-nav-count">(${count})</span>
            </div>
        `;
    });

    subMenuBarEl.innerHTML = html;

    // 绑定点击事件
    document.querySelectorAll('.sub-nav-item').forEach(el => {
        el.addEventListener('click', () => {
            clearSearchInputs();
            const index = parseInt(el.dataset.index);
            currentSubCategoryIndex = index;
            renderSubMenu();
            renderBookmarks();
        });
    });
}

// 获取需要展示的网站列表（带搜索权重排序）
function getFilteredWebsites() {
    let websites = [];

    // 1. 先根据分类过滤
    if (currentCategoryId === 0) {
        // 全部模式
        if (currentSubCategoryIndex === -1) {
            // 显示所有网站
            for (const category of websiteData) {
                if (category.subCategories) {
                    for (const subCat of category.subCategories) {
                        if (subCat.websites) {
                            for (const site of subCat.websites) {
                                websites.push({
                                    ...site,
                                    categoryTitle: category.title,
                                    subCategoryName: subCat.name
                                });
                            }
                        }
                    }
                }
            }
        } else {
            // 显示选中的一级分类的所有网站
            const category = websiteData.find(c => c.id === currentSubCategoryIndex);
            if (category && category.subCategories) {
                for (const subCat of category.subCategories) {
                    if (subCat.websites) {
                        for (const site of subCat.websites) {
                            websites.push({
                                ...site,
                                categoryTitle: category.title,
                                subCategoryName: subCat.name
                            });
                        }
                    }
                }
            }
        }
    } else {
        // 普通分类模式
        const category = websiteData.find(c => c.id === currentCategoryId);
        if (category && category.subCategories) {
            if (currentSubCategoryIndex === -1) {
                // 该分类下的全部
                for (const subCat of category.subCategories) {
                    if (subCat.websites) {
                        for (const site of subCat.websites) {
                            websites.push({
                                ...site,
                                categoryTitle: category.title,
                                subCategoryName: subCat.name
                            });
                        }
                    }
                }
            } else {
                // 特定子分类
                const subCat = category.subCategories[currentSubCategoryIndex];
                if (subCat && subCat.websites) {
                    for (const site of subCat.websites) {
                        websites.push({
                            ...site,
                            categoryTitle: category.title,
                            subCategoryName: subCat.name
                        });
                    }
                }
            }
        }
    }

    // 2. 再根据主搜索框过滤（带权重）
    if (mainSearchText) {
        const searchLower = mainSearchText.toLowerCase();
        const weightedSites = [];

        for (const site of websites) {
            let weight = 0;
            const titleLower = site.title.toLowerCase();
            const descLower = (site.desc || '').toLowerCase();

            // 标题匹配权重更高
            if (titleLower.includes(searchLower)) {
                weight += 100;
                // 越靠前匹配权重越高
                const index = titleLower.indexOf(searchLower);
                weight += (100 - index);
            }

            // 描述匹配权重较低
            if (descLower.includes(searchLower)) {
                weight += 50;
                const index = descLower.indexOf(searchLower);
                weight += (50 - Math.min(index, 50));
            }

            if (weight > 0) {
                weightedSites.push({ site, weight });
            }
        }

        // 按权重排序（权重高的在前）
        weightedSites.sort((a, b) => b.weight - a.weight);
        websites = weightedSites.map(ws => ws.site);
    }

    return websites;
}

// 渲染网站卡片
function renderBookmarks() {
    const websites = getFilteredWebsites();

    // 更新标题
    if (currentCategoryId === 0) {
        // 全部模式
        if (currentSubCategoryIndex === -1) {
            pageTitleEl.textContent = '全部';
        } else {
            // 选中了某个一级分类
            const category = websiteData.find(c => c.id === currentSubCategoryIndex);
            pageTitleEl.textContent = category ? category.title : '全部';
        }
    } else {
        // 普通分类模式
        const category = websiteData.find(c => c.id === currentCategoryId);
        pageTitleEl.textContent = category ? category.title : '';
    }
    pageCountEl.textContent = `(${websites.length})`;

    if (websites.length === 0) {
        bookmarksContainerEl.innerHTML = `
            <div class="no-results">
                <i class="fas fa-inbox"></i>
                <h3>没有找到相关网站</h3>
                <p>试试其他关键词或分类</p>
            </div>
        `;
        return;
    }

    // 渲染卡片
    let cardsHtml = '<div class="bookmarks-grid">';
    for (const site of websites) {
        cardsHtml += `
            <a href="${site.url}" target="_blank" class="bookmark-card" data-card="1">
                <div class="bookmark-title">${site.title}</div>
                <div class="bookmark-desc">${site.desc || ''}</div>
            </a>
        `;
    }
    cardsHtml += '</div>';

    bookmarksContainerEl.innerHTML = cardsHtml;

    // 绑定卡片点击事件 - 清空搜索词
    document.querySelectorAll('.bookmark-card').forEach(card => {
        card.addEventListener('click', (e) => {
            clearSearchInputs();
            // 我们不阻止默认行为，让链接正常跳转
        });
    });
}

// 网址征集功能
function handleCollectClick() {
    alert('感谢您的关注！\n\n网址征集功能正在开发中，敬请期待...\n\n您可以通过以下方式联系我们：\nEmail: contact@example.com');
}

// 事件绑定
function bindEvents() {
    themeToggleEl.addEventListener('click', toggleTheme);
    sidebarSearchInputEl.addEventListener('input', (e) => {
        sidebarSearchText = e.target.value;
        renderSidebarNav();
    });
    mainSearchInputEl.addEventListener('input', (e) => {
        mainSearchText = e.target.value;
        renderBookmarks();
    });
    collectBtnEl.addEventListener('click', handleCollectClick);
}

// 初始化
function init() {
    initTheme();
    bindEvents();
    renderSidebarNav();
    renderSubMenu();
    renderBookmarks();
}

// 启动
init();

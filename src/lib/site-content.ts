export type Locale = "zh" | "en";

export type Localized = {
  zh: string;
  en: string;
};

export const text = (value: Localized, locale: string) =>
  locale === "en" ? value.en : value.zh;

export type FrontierReference = {
  label: Localized;
  href: string;
};

export type NewsFrontier = {
  source: string;
  title: Localized;
  desc: Localized;
  references: FrontierReference[];
};

export const heroSlides = [
  {
    image: "/images/site/field-directional-drilling-rig.webp",
    kicker: {
      zh: "地面定向多分支井 · 区域超前治理",
      en: "Surface directional drilling and regional pre-treatment",
    },
    title: {
      zh: "定向多分支井精准穿越富水构造靶区，构建超前探查、注浆改造与区域治理通道",
      en: "Directional multilateral wells target water-rich structures for pre-detection, grouting and regional treatment",
    },
    subtitle: {
      zh: "面向深部灰岩含水层、断层破碎带和隐伏陷落柱，开展长距离轨迹控制、靶向钻进与治理效果验证。",
      en: "Long-distance trajectory control and targeted drilling for limestone aquifers, fault zones and concealed collapse columns.",
    },
  },
  {
    image: "/images/site/das-monitoring-command.webp",
    kicker: {
      zh: "DAS 波场监测 · 智能预警",
      en: "DAS wavefield monitoring and intelligent warning",
    },
    title: {
      zh: "DAS 分布式光纤波场感知采动裂隙演化，捕捉底板破坏与突水前兆信号",
      en: "DAS wavefield sensing tracks mining-induced fractures and early water-inrush signals",
    },
    subtitle: {
      zh: "融合振动响应、微震活动、水文响应和采掘时序，推动矿山水害监测从离散观测进入连续波场解释。",
      en: "Integrating vibration, microseismicity, hydrological response and mining sequences for continuous wavefield interpretation.",
    },
  },
  {
    image: "/images/site/geophysical-3d-interpretation.webp",
    kicker: {
      zh: "三维地震 · 矿井电法 · 数值模拟",
      en: "3D seismic, mine geophysics and numerical modeling",
    },
    title: {
      zh: "三维地震、矿井电法与数值反演重建透明水文地质模型，识别隐蔽导水通道",
      en: "3D seismic, mine geophysics and inversion rebuild transparent hydrogeological models",
    },
    subtitle: {
      zh: "以多源地球物理场、钻孔揭露和水文地质约束联合反演，为防治水方案设计提供可解释证据链。",
      en: "Joint inversion of geophysical fields, boreholes and hydrogeological constraints for evidence-based scheme design.",
    },
  },
];

export const strengthStats = [
  { value: "300+", label: { zh: "矿井水害防治项目", en: "Mine water projects" } },
  { value: "120+", label: { zh: "SCI 论文", en: "SCI papers" } },
  { value: "20+", label: { zh: "授权发明", en: "Granted inventions" } },
  { value: "5+", label: { zh: "矿井水害防治专著", en: "Monographs" } },
];

export const serviceChain = [
  {
    title: { zh: "风险识别", en: "Risk identification" },
    desc: {
      zh: "梳理充水水源、导水通道、隔水层稳定性与采动扰动条件，形成可用于决策的风险分区。",
      en: "Identify water sources, conductive pathways, aquiclude stability and mining disturbance for decision-ready zoning.",
    },
  },
  {
    title: { zh: "超前治理", en: "Pre-treatment" },
    desc: {
      zh: "面向地面定向多分支井、注浆改造、疏水降压与帷幕截流，优化治理参数与施工路径。",
      en: "Optimize drilling, grouting, dewatering and curtain interception parameters before mining.",
    },
  },
  {
    title: { zh: "成效评价", en: "Effectiveness verification" },
    desc: {
      zh: "以钻探、物探、DAS 监测、涌水量与水化学等多源证据验证治理效果。",
      en: "Verify treatment effectiveness through drilling, geophysics, DAS, inflow and hydrochemical evidence.",
    },
  },
  {
    title: { zh: "持续优化", en: "Continuous optimization" },
    desc: {
      zh: "把项目复盘沉淀为矿井防治水标准、培训课程和长期技术顾问体系。",
      en: "Convert project reviews into mine standards, training and long-term technical advisory systems.",
    },
  },
];

export const researchDirections = [
  {
    title: { zh: "DAS 地震波场理论与监测", en: "DAS seismic wavefield monitoring" },
    desc: {
      zh: "研究分布式光纤传感在底板破坏、含水层扰动和隐伏构造识别中的动态响应。",
      en: "DAS-based dynamic recognition of floor failure, aquifer disturbance and concealed structures.",
    },
    image: "/images/site/das-monitoring-command.webp",
  },
  {
    title: { zh: "深部灰岩含水层超前区域治理", en: "Regional treatment of deep limestone aquifers" },
    desc: {
      zh: "围绕高承压水、强径流补给和复杂构造，开展探查、注浆、降压与效果评价协同设计。",
      en: "Integrated exploration, grouting, dewatering and verification under high-pressure aquifers.",
    },
    image: "/images/site/field-directional-drilling-rig.webp",
  },
  {
    title: { zh: "三维地震与矿井电法综合解释", en: "Integrated 3D seismic and mine electrical interpretation" },
    desc: {
      zh: "融合三维地震、瞬变电磁、直流电法和钻孔资料，提升断层、陷落柱和富水异常识别精度。",
      en: "Fusing 3D seismic, TEM, DC methods and borehole data for better anomaly recognition.",
    },
    image: "/images/site/geophysical-3d-interpretation.webp",
  },
  {
    title: { zh: "高承压水治理效果评价体系", en: "Verification system for high-pressure water control" },
    desc: {
      zh: "形成面向验收的序列验证评价方法，让治理投入、风险降低和生产接续可量化。",
      en: "Acceptance-oriented sequential verification to quantify treatment value and risk reduction.",
    },
    image: "/images/site/das-monitoring-command.webp",
  },
];

export const representativeProjects = [
  {
    tag: { zh: "EPC 总承包", en: "EPC" },
    title: {
      zh: "中国黄金集团纱岭金矿超高承压水涌突致灾机理及防治研究",
      en: "Ultra-high pressure water inrush control for Shaling Gold Mine, China Gold Group",
    },
    image: "/images/site/field-directional-drilling-rig.webp",
    desc: {
      zh: "合同额 4293.846277 万元，围绕超高承压水涌突机制、防治设计与治理效果评价形成成套技术成果。",
      en: "A RMB 42.94 million EPC project covering mechanism research, prevention design and effectiveness verification.",
    },
  },
  {
    tag: { zh: "带压开采", en: "Mining above confined aquifers" },
    title: {
      zh: "山东能源邱集、赵官、新驿等矿井多采区防治水安全论证",
      en: "Water hazard safety evaluation for multiple Shandong Energy mining districts",
    },
    image: "/images/site/das-monitoring-command.webp",
    desc: {
      zh: "服务多个采区顶底板岩溶水害超前治理效果评价、带压开采安全论证与隐蔽灾害治理。",
      en: "Safety evaluation, treatment verification and concealed hazard control across several working districts.",
    },
  },
  {
    tag: { zh: "隐伏构造", en: "Concealed structures" },
    title: {
      zh: "淮北矿业隐伏陷落柱突水机理及快速查治关键技术研究",
      en: "Rapid investigation and control of concealed collapse-column water inrush for Huaibei Mining",
    },
    image: "/images/site/geophysical-3d-interpretation.webp",
    desc: {
      zh: "针对隐伏陷落柱、断层导水和采动扰动耦合问题，建立风险识别与快速查治技术路线。",
      en: "A technical route for coupled collapse-column, fault conductivity and mining disturbance risk.",
    },
  },
  {
    tag: { zh: "下组煤评价", en: "Lower coal seam assessment" },
    title: {
      zh: "潞安司马煤业下组煤突水危险性评价及防治技术研究",
      en: "Water inrush risk evaluation for lower coal seams at Sima Coal Mine",
    },
    image: "/images/site/chief-engineer-salon.webp",
    desc: {
      zh: "为下组煤开采水文地质条件、突水危险性评价、防治水技术路线提供系统支撑。",
      en: "Systematic support for hydrogeology, water-inrush risk and prevention technology planning.",
    },
  },
];

export const newsFrontiers: NewsFrontier[] = [
  {
    source: "DAS",
    title: {
      zh: "DAS 正在从油气与隧道监测走向矿井水害早期识别",
      en: "DAS is moving from energy and tunnel monitoring to mine water hazard warning",
    },
    desc: {
      zh: "分布式光纤声波传感可连续获取振动与波场响应，为底板破坏、裂隙导水和异常突水前兆识别提供新型数据底座。",
      en: "Distributed acoustic sensing captures continuous wavefield responses for floor failure and water-conducting fracture warning.",
    },
    references: [
      {
        label: {
          zh: "IJRMMS 2025：DAS 用于长壁煤矿",
          en: "IJRMMS 2025: DAS for longwall coal mines",
        },
        href: "https://www.sciencedirect.com/science/article/pii/S136516092500067X",
      },
      {
        label: {
          zh: "Scientific Reports 2025：DAS 矿产勘查",
          en: "Scientific Reports 2025: DAS for mineral exploration",
        },
        href: "https://www.nature.com/articles/s41598-025-29964-6",
      },
    ],
  },
  {
    source: "Directional drilling",
    title: {
      zh: "地面定向多分支井成为区域超前治理的重要工程手段",
      en: "Surface directional multi-branch drilling is becoming a key regional treatment method",
    },
    desc: {
      zh: "定向钻进可以把钻孔轨迹精准送达富水异常体、断层带和灰岩含水层，为注浆改造和效果检验提供工程通道。",
      en: "Directional drilling places boreholes precisely into anomalies, faults and aquifers for grouting and verification.",
    },
    references: [
      {
        label: {
          zh: "IMWA：水害精准探测与高效治理",
          en: "IMWA: accurate detection and efficient control",
        },
        href: "https://www.imwa.info/docs/imwa_2018/IMWA2018_Dong_815.pdf",
      },
      {
        label: {
          zh: "Coal Science and Technology 2024：地面定向钻注浆",
          en: "Coal Science and Technology 2024: directional drilling grouting",
        },
        href: "https://www.mtkxjs.com.cn/en/article/doi/10.12438/cst.2023-1261",
      },
    ],
  },
  {
    source: "3D seismic",
    title: {
      zh: "三维地震与透明地质正在重构矿井隐蔽灾害识别",
      en: "3D seismic and transparent geology are reshaping concealed hazard recognition",
    },
    desc: {
      zh: "高精度三维地震结合钻探和矿井物探，可提高断层、陷落柱、古河道和富水区的综合解释可靠度。",
      en: "High-resolution 3D seismic fused with drilling and mine geophysics improves interpretation reliability.",
    },
    references: [
      {
        label: {
          zh: "Scientific Reports 2024：矿井突水三维建模",
          en: "Scientific Reports 2024: 3D modeling of mine water inrush",
        },
        href: "https://www.nature.com/articles/s41598-024-54180-z",
      },
      {
        label: {
          zh: "Water 2024：物探-钻探-水化学耦合识别",
          en: "Water 2024: geophysical-drilling-hydrochemical detection",
        },
        href: "https://www.mdpi.com/2073-4441/16/18/2619",
      },
    ],
  },
  {
    source: "Mine electrical methods",
    title: {
      zh: "矿井电法从单次探测走向动态监测和多源融合",
      en: "Mine electrical methods are moving toward dynamic monitoring and multi-source fusion",
    },
    desc: {
      zh: "瞬变电磁、直流电法和电阻率成像可以与涌水量、水化学、DAS 数据协同，用于富水异常复核和治理闭环。",
      en: "TEM, DC methods and resistivity imaging can be fused with inflow, hydrochemistry and DAS data.",
    },
    references: [
      {
        label: {
          zh: "Applied Sciences 2024：SUTEM 多含水层探测",
          en: "Applied Sciences 2024: SUTEM for multilayer aquifers",
        },
        href: "https://www.mdpi.com/2076-3417/14/20/9358",
      },
      {
        label: {
          zh: "Applied Sciences 2022：TEM 探测含水陷落柱",
          en: "Applied Sciences 2022: TEM for water-bearing collapse columns",
        },
        href: "https://www.mdpi.com/2076-3417/12/22/11331",
      },
    ],
  },
];

export const safetyLessons = [
  {
    title: { zh: "采掘前必须查清充水水源、通道和强度", en: "Clarify sources, pathways and intensity before mining" },
    desc: {
      zh: "把“哪里有水、怎么导水、采动后会不会失稳”作为防治水设计的第一问题。",
      en: "Water source, pathway and mining-induced instability are the first design questions.",
    },
  },
  {
    title: { zh: "底板突水评价不能只看单一突水系数", en: "Do not rely on a single water-inrush coefficient" },
    desc: {
      zh: "应联合构造、隔水层、应力、采动破坏和治理效果形成综合判据。",
      en: "Use structure, aquiclude, stress, mining damage and treatment effect as combined criteria.",
    },
  },
  {
    title: { zh: "区域治理要有可验证的验收指标", en: "Regional treatment needs verifiable acceptance indicators" },
    desc: {
      zh: "钻孔、注浆量、压水试验、物探异常和水文响应应形成序列验证链。",
      en: "Boreholes, grouting, pressure tests, geophysical anomalies and hydrological response form a verification chain.",
    },
  },
  {
    title: { zh: "总工程师要掌握水害风险的动态变化", en: "Chief engineers should track dynamic water-risk changes" },
    desc: {
      zh: "风险不是一次报告就结束，必须随采掘接续、构造揭露和监测数据持续修正。",
      en: "Risk evolves with mining sequence, exposed structures and monitoring data.",
    },
  },
];

export const expertGroups = {
  chiefScientists: [
    {
      name: "胡彦博",
      role: { zh: "研究院首席科学家、技术顾问", en: "Institute Chief Scientist and Technical Advisor" },
      credential: { zh: "博士-副教授", en: "PhD · Associate Professor" },
      image: "/images/site/njtech-center-p03-01-blue.webp",
      desc: {
        zh: "地质资源与地质工程专业博士、副教授、地质工程系主任，矿井水害防治研究中心主任。曾在徐州矿务集团矿建项目担任技术员、技术主管、总工程师、生产副总经理、安全副总经理、副总经理（主持工作），兼任山东能源集团鲁西矿业科技副总等职务。",
        en: "PhD in Geological Resources and Geological Engineering, associate professor, chair of geological engineering and director of the Mine Water Hazard Prevention Research Center, with field leadership experience in mining construction and technology management.",
      },
      highlights: {
        zh: ["DAS 波场监测", "高承压水治理评价", "50+ 防治水项目"],
        en: ["DAS wavefield monitoring", "High-pressure water control", "50+ projects"],
      },
    },
  ],
  advisors: [
    {
      name: "王慧明",
      role: { zh: "能源矿业战略发展高级顾问", en: "Senior Advisor for Energy and Mining Strategy" },
      credential: { zh: "博士-教授级高工", en: "PhD · Professor-level Senior Engineer" },
      image: "/images/site/wang-huiming-blue.webp",
      desc: {
        zh: "工学博士，研究员级高级工程师、高级政工师。长期深耕能源与矿业领域，曾任大型矿业集团董事长、总经理和大型央企煤炭产业负责人，擅长集团化治理、重大工程组织与风险管控。",
        en: "PhD in Engineering and professor-level senior engineer with decades of leadership in energy and mining engineering, major project organization and risk governance.",
      },
      academicDesc: {
        zh: "工学博士，教授级高工，复旦大学 - 研究生导师\n曾任：\n华电国际 - 巡视专员、正主任级\n中国华电集团煤炭产业部 - 主任\n华电国际 - 副总经理、党委委员\n中国华电山西能源集团 - 副总经理、党组成员\n江苏省矿业工程集团 - 董事长、总经理\n江苏华美工程建设集团 - 总经理\n徐矿集团国际经济技术合作公司 - 总经理\n徐州矿务局矿业公司 - 总经理\n徐州矿务局三河尖煤矿 - 党委书记",
        en: "PhD in Engineering, professor-level senior engineer, postgraduate supervisor at Fudan University.\nFormer roles include senior leadership positions at Huadian International Power, China Huadian Shanxi Energy Group, Jiangsu Mining Engineering Group, Jiangsu Huamei Engineering Construction Group and Xuzhou Mining Group.",
      },
      highlights: {
        zh: ["重大工程组织", "产业资源协同", "矿山运营管理"],
        en: ["Major project organization", "Industry network", "Mine operation governance"],
      },
    },
  ],
  pool: [
    {
      name: "王启庆",
      role: { zh: "专家库成员", en: "Expert Pool Member" },
      credential: { zh: "博士-教授", en: "PhD · Professor" },
      image: "/images/site/njtech-center-p04-01.webp",
      desc: {
        zh: "教授、博士生导师，主持深地国家科技重大专项子课题、国家自然科学基金等项目，发表论文 50 余篇。",
        en: "Professor and doctoral supervisor with major national and NSFC project experience.",
      },
    },
    {
      name: "刘瑜",
      role: { zh: "专家库成员", en: "Expert Pool Member" },
      credential: { zh: "博士-副教授", en: "PhD · Associate Professor" },
      image: "/images/site/njtech-center-p04-02-blue.webp",
      desc: {
        zh: "深部采动国家重点实验室副教授、硕士生导师，研究水文地质、矿井水害防治与矿井水资源保护利用。",
        en: "Associate professor focused on hydrogeology, mine water hazard prevention and water resource protection.",
      },
    },
    {
      name: "刘士亮",
      role: { zh: "专家库成员", en: "Expert Pool Member" },
      credential: { zh: "博士-教授", en: "PhD · Professor" },
      image: "/images/site/njtech-center-p05-01-blue.webp",
      desc: {
        zh: "教授、博士生导师，长期从事水文地质、工程地质、环境地质与地下工程灾害评价研究，发表 SCI 论文 30 余篇。",
        en: "Professor and doctoral supervisor specializing in hydrogeology and underground engineering hazards.",
      },
    },
    {
      name: "朱厅恩",
      role: { zh: "专家库成员", en: "Expert Pool Member" },
      credential: { zh: "博士-副教授", en: "PhD · Associate Professor" },
      image: "/images/site/njtech-center-p05-02-blue.webp",
      desc: {
        zh: "副教授、硕士生导师，研究水文地质工程地质、矿山灾害地质和矿井水害防治，担任多本国际期刊审稿人。",
        en: "Associate professor focused on mine hydrogeology, engineering geology and mine water hazard prevention.",
      },
    },
  ],
};

export const heroExpertShowcase = [
  ...expertGroups.advisors,
  ...expertGroups.chiefScientists,
  ...expertGroups.pool,
];

export const chiefEngineerHome = {
  image: "/images/site/chief-engineer-salon.webp",
  title: {
    zh: "煤矿总工程技术交流之家",
    en: "Chief Engineers Technical Exchange Home",
  },
  desc: {
    zh: "面向煤矿总工程师、地测副总、防治水副总和生产技术负责人，建设第一批 200 个矿井总工程师席位，形成案例复盘、专家会诊、前沿学习和项目协同的高端技术共同体。",
    en: "A high-level technical community for chief engineers, geology leaders and water-control managers, starting with 200 mine seats.",
  },
  items: [
    { zh: "闭门技术沙龙", en: "Closed-door technical salons" },
    { zh: "典型水害案例复盘", en: "Case review of water hazards" },
    { zh: "专家快速会诊", en: "Rapid expert consultation" },
    { zh: "防治水标准化课题", en: "Standardization projects" },
  ],
};

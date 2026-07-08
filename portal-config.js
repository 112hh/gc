(function attachPortalConfigShared(global) {
  const defaultPortalPlatformConfig = {
    browserTitle: "工程细胞主题库门户",
    siteTitle: "工程细胞主题库门户",
    subtitle: "合成生物学 · 数据驱动",
    description:
      "覆盖微生物细胞工厂构建全生命周期，围绕基因型-表型关联、多组学、发酵过程、培养营养四大核心数据库，构建面向实际研发门户的高质量展示与分析入口。",
    logoImage: "",
    heroAudienceLabel: "面向对象",
    heroAudienceTags: ["高校", "科研院所", "相关企业"],
    heroTags: ["全基因组关联分析", "代谢网络模型", "三级质控"],
    heroStats: [
      { value: "130万+", label: "数据条目" },
      { value: "4", label: "核心数据库" },
      { value: "3", label: "级质控体系" }
    ],
    heroFeatureTitle: "面向实际研发门户的高保真入口体验",
    heroFeatureDescription:
      "围绕工程细胞主题库的核心内容，统一呈现实验场景、数据能力和业务分析入口，兼顾展示质感与后续开发落地。",
    heroDashboardTitle: "平台运行概览",
    heroDashboardRows: [
      { label: "数据资源", value: "130万+" },
      { label: "核心数据库", value: "4类" },
      { label: "质控体系", value: "三级" }
    ],
    heroSummaryTitle: "门户聚焦",
    heroSummaryItems: [
      { label: "资源组织", value: "四大核心数据库统一浏览" },
      { label: "业务闭环", value: "采集、质控、分析、应用一体化承接" },
      { label: "开发导向", value: "按真实门户要求优化交互与素材" }
    ],
    valueTitle: "平台价值定位",
    valueDescription:
      "围绕微生物细胞工厂构建全生命周期，建设覆盖四大核心数据集的标准化平台，以全基因组关联挖掘与代谢网络模型为技术驱动。",
    valueItems: [
      {
        detailKey: "value-gpa",
        badge: "VALUE 01",
        title: "基因型-表型关联",
        summary:
          "通过全基因组关联分析（GWAS）挖掘未知关联基因及其位点，打通从测序数据到菌株改造的知识转化链路。"
      },
      {
        detailKey: "value-omics",
        badge: "VALUE 02",
        title: "多组学整合",
        summary:
          "整合基因组、转录组、蛋白组、代谢组等多维数据，构建代谢网络模型，支撑功能基因筛选与系统解读。"
      },
      {
        detailKey: "value-fermentation",
        badge: "VALUE 03",
        title: "发酵过程优化",
        summary:
          "基于全维度发酵过程数据采集与分析，结合代谢网络优化与人工神经网络模型，提升发酵效率与产物得率。"
      },
      {
        detailKey: "value-nutrition",
        badge: "VALUE 04",
        title: "培养营养体系",
        summary:
          "系统化沉淀培养营养数据，覆盖多种工业底盘菌株培养条件，支撑培养基配方优化与工艺放大。"
      },
      {
        detailKey: "value-efficiency",
        badge: "VALUE 05",
        title: "科研降本增效",
        summary:
          "通过高质量数据治理与深度清洗，保障数据可追溯、可复用，降低重复试错成本，提升科研资源利用效率。"
      }
    ],
    flowTitle: "整体流程",
    flowDescription:
      "数据标准体系建立，连接多源数据入库、三级质量控制、四大数据库构建与数据应用平台服务。",
    flowItems: [
      {
        step: "1",
        title: "标准体系",
        summary:
          "GPA 采集标准化、工程细胞模型标准化、小中试条件数字化标准化以及菌株保护加密标准化。"
      },
      {
        step: "2",
        title: "数据入库",
        summary: "整合工业底盘菌实验数据、多组学数据、发酵全维度数据与外部公开数据。"
      },
      {
        step: "3",
        title: "三级质控",
        summary: "围绕 GPA、组学、发酵三类数据开展采集规范性、一致性与生物学合理性三级校验。"
      },
      {
        step: "4",
        title: "数据库构建",
        summary: "形成基因型-表型关联、多组学、发酵过程、培养营养四大核心数据库。"
      },
      {
        step: "5",
        title: "应用平台",
        summary: "提供知识网络图谱、参数预测模型与基因型组合优化预测等门户能力。"
      }
    ],
    databasesTitle: "核心数据库",
    databasesDescription:
      "四大核心数据集，覆盖基因型-表型关联、多组学、发酵过程、培养营养全维度内容。",
    databaseItems: [
      {
        detailKey: "db-gpa",
        count: "≥ 50万条",
        title: "基因型-表型关联数据集",
        summary:
          "自有数据 40 万条，公开数据 10 万条。基于 GWAS 全基因组关联分析，挖掘工业底盘菌株的高产关联基因靶点。",
        tags: ["GWAS", "SNP", "QTL", "基因靶点", "表型数据", "关联位点"]
      },
      {
        detailKey: "db-omics",
        count: "≥ 30万条",
        title: "多组学数据集",
        summary:
          "自有数据 16 万条，公开数据 12 万条，论文及其他数据 2 万条，覆盖基因组、转录组、蛋白组、代谢组等多维数据。",
        tags: ["基因组", "转录组", "蛋白组", "代谢组", "代谢网络", "功能注释"]
      },
      {
        detailKey: "db-process",
        count: "≥ 20万条",
        title: "发酵过程数据集",
        summary:
          "自有数据 8 万条，公开数据 12 万条，覆盖温度、pH、溶氧、搅拌转速、生物量、代谢物浓度等全维度过程参数。",
        tags: ["发酵参数", "代谢物", "补料策略", "放大工艺", "ANN优化"]
      },
      {
        detailKey: "db-nutrition",
        count: "≥ 30万条",
        title: "培养营养数据集",
        summary:
          "自有数据 14 万条，公开数据 16 万条，论文及其他 1,000 条，系统化沉淀培养营养配方，支撑培养基优化与工艺放大。",
        tags: ["碳源", "氮源", "微量元素", "培养基", "生长曲线", "营养配方"]
      }
    ],
    datavizTitle: "数据总览",
    datavizDescription:
      "数据体量达到 TB 级别，年度新增 300-500 条记录，三级质控体系保障数据质量与可复用性。",
    datavizQualityTitle: "三级质量控制体系",
    datavizQualityParagraphs: [
      "围绕 GPA、组学、发酵三类数据分别实施三级校验。",
      "第一级：采集规范性，确保数据采集过程符合标准化流程。",
      "第二级：一致性校验，通过多元数据交叉验证排除异常值。",
      "第三级：生物学合理性，由领域专家审核，确保数据符合生物学规律。",
      "以标准化高质量数据集赋能合成生物学研究，深度清洗保障数据可追溯、可复用。"
    ],
    datavizMetrics: [
      { value: "TB", label: "数据体量级别" },
      { value: "300-500", label: "年新增记录" },
      { value: "4", label: "数据库主域" }
    ],
    datavizChartTitle: "四大数据库数据分布",
    datavizChartLegend: ["基因型-表型关联", "多组学", "发酵过程", "培养营养"],
    scenesTitle: "场景应用",
    scenesDescription:
      "覆盖基因型-表型分析、组学数据分析、发酵过程分析、全流程数据分析四大应用场景。",
    scenesNavTitle: "应用场景",
    sceneItems: [
      {
        panelId: "scene-1",
        detailKey: "scene-gpa",
        tab: "基因型-表型分析",
        title: "GPA 数据分析 + GWAS 全基因组关联分析",
        summary:
          "挖掘未知关联基因及其位点，加速从测序数据到菌株改造的知识转化。基于自有 40 万+ 基因型-表型关联数据，结合统计遗传学方法进行显著性关联挖掘。",
        focusTitle: "关键能力",
        bullets: [
          "围绕产量、耐受性、生长速率等关键性状进行位点挖掘与候选基因筛选。",
          "支持基因型与表型的联合质控，缩短从原始测序结果到可解释结论的分析链路。",
          "输出显著位点、候选靶点和实验验证建议，承接后续菌株改造决策。"
        ],
        metrics: [
          { value: "GWAS", label: "核心方法" },
          { value: "GPA", label: "输入数据" },
          { value: "候选位点", label: "输出结果" }
        ],
        chartTitle: "关键性状关联位点分布"
      },
      {
        panelId: "scene-2",
        detailKey: "scene-omics",
        tab: "组学数据分析",
        title: "基因组代谢网络模型构建",
        summary:
          "整合 GPA 数据进行多组学关联解读，构建基因组规模代谢网络模型（GSMM），实现从基因型到代谢表型的系统预测与功能基因筛选。",
        focusTitle: "关键能力",
        bullets: [
          "联动基因组、转录组、蛋白组与代谢组信息，形成统一通路解释框架。",
          "支持模型构建、功能注释映射与关键通量节点识别，提升机制解释深度。",
          "输出重点通路、功能基因组合和模型推演结果，辅助后续实验设计。"
        ],
        metrics: [
          { value: "GSMM", label: "核心模型" },
          { value: "多组学", label: "分析维度" },
          { value: "功能基因", label: "输出结果" }
        ],
        chartTitle: "多组学覆盖度评估"
      },
      {
        panelId: "scene-3",
        detailKey: "scene-process",
        tab: "发酵过程分析",
        title: "代谢网络优化 + 人工神经网络优化",
        summary:
          "基于发酵过程全维度数据，结合代谢网络模型与人工神经网络（ANN），预测最佳发酵条件组合，提升发酵效率与产物得率。",
        focusTitle: "关键能力",
        bullets: [
          "融合批次过程参数、传感器数据和代谢物结果，识别关键控制窗口。",
          "构建参数预测与异常识别模型，辅助判断补料、温度和溶氧的调控策略。",
          "输出最佳控制区间与风险提示，服务中试放大和工艺持续优化。"
        ],
        metrics: [
          { value: "ANN", label: "核心方法" },
          { value: "过程参数", label: "输入数据" },
          { value: "优化策略", label: "输出结果" }
        ],
        chartTitle: "参数预测与实测对比"
      },
      {
        panelId: "scene-4",
        detailKey: "scene-full",
        tab: "全流程数据分析",
        title: "知识网络图谱构建 + 参数预测模型",
        summary:
          "整合四大数据库，构建知识网络图谱，实现基因型组合优化预测，为工程菌株理性设计提供全流程数据支撑。",
        focusTitle: "关键能力",
        bullets: [
          "串联数据检索、图谱构建、模型预测与研发决策，形成闭环式协同工作台。",
          "在多源数据之间建立实体关系和证据链，强化结论追溯与模型可解释性。",
          "输出基因型组合建议、参数预测结果和专题分析报告，支撑跨团队协同。"
        ],
        metrics: [
          { value: "全流程", label: "覆盖链路" },
          { value: "知识图谱", label: "核心资产" },
          { value: "组合预测", label: "输出结果" }
        ],
        chartTitle: "知识网络图谱示意"
      }
    ],
    toolsTitle: "工具算法",
    toolsDescription: "检测工具、分析算法、优化算法、平台工具四大类能力，全方位支撑工程细胞研究。",
    toolItems: [
      {
        detailKey: "tool-physical",
        badge: "SENSOR",
        title: "物理传感器",
        summary: "温度、pH、溶氧、搅拌转速等实时监测发酵过程关键物理参数。"
      },
      {
        detailKey: "tool-bio",
        badge: "SENSOR",
        title: "生物传感器",
        summary: "生物量、代谢物浓度、酶活检测等能力，实时反馈细胞生理状态。"
      },
      {
        detailKey: "tool-gwas",
        badge: "ANALYSIS",
        title: "GWAS 全基因组关联分析",
        summary: "基于统计遗传学方法挖掘基因型-表型显著关联，定位关键功能基因与位点。"
      },
      {
        detailKey: "tool-gsmm",
        badge: "MODEL",
        title: "基因组代谢网络模型",
        summary: "支撑 GSMM 构建与 FBA 分析，预测基因敲除或过表达对代谢通量的影响。"
      },
      {
        detailKey: "tool-metabolic",
        badge: "OPTIMIZE",
        title: "代谢网络优化",
        summary: "围绕通量平衡分析与代谢工程靶点预测，优化碳流分配并提升目标产物得率。"
      },
      {
        detailKey: "tool-ann",
        badge: "PREDICT",
        title: "人工神经网络（ANN）",
        summary: "基于深度学习进行发酵参数预测与优化，自适应调整培养策略。"
      },
      {
        detailKey: "tool-knowledge",
        badge: "KNOWLEDGE",
        title: "知识网络图谱",
        summary: "对多源异构数据进行关联挖掘，构建基因、代谢、表型之间的知识图谱。"
      },
      {
        detailKey: "tool-portal",
        badge: "PORTAL",
        title: "信息管理系统",
        summary: "提供统一的数据管理入口，支撑检索、可视化分析与报告生成。"
      }
    ],
    casesTitle: "合作案例",
    casesDescription: "面向基因科技、生命科学、微生物研发与农业微生物领域的头部机构合作场景。",
    caseItems: [
      {
        detailKey: "case-bgi",
        unit: "华大基因（BGI）",
        title: "工业底盘菌株高产关联基因靶点挖掘",
        direction: "基因科技头部企业",
        summary:
          "基于全基因组关联分析（GWAS），联合挖掘工业底盘菌株的高产关联基因靶点，共建基因型-表型关联数据集，加速知识转化。"
      },
      {
        detailKey: "case-01life",
        unit: "零一生命（01 LIFE）",
        title: "微生物代谢通路优化与功能基因筛选",
        direction: "生命科学与健康领域",
        summary:
          "依托多组学数据集与代谢网络模型，合作开展微生物代谢通路优化，筛选关键功能基因组合，缩短工程菌株理性设计周期。"
      },
      {
        detailKey: "case-xbiome",
        unit: "未知君（XBIOME）",
        title: "培养条件参数预测与发酵工艺放大",
        direction: "微生物组研发",
        summary:
          "利用发酵过程数据集与人工神经网络优化算法，协同进行培养条件参数预测与发酵工艺放大，提升中试转化成功率。"
      },
      {
        detailKey: "case-sicau",
        unit: "四川农业大学",
        title: "饲用/农用工程菌株高效构建",
        direction: "农业微生物科研",
        summary:
          "基于培养营养数据集与基因组代谢网络模型，开展农业微生物菌株的基因型-表型关联研究，推动工程菌株高效构建。"
      }
    ],
    footerTitle: "工程细胞主题库 · 科学数据中心",
    footerDescription:
      "围绕微生物细胞工厂构建全生命周期，形成覆盖基因型-表型关联、多组学、发酵过程、培养营养四大核心数据集的标准化平台，以全基因组关联挖掘与代谢网络模型为技术驱动。",
    footerHighlight: "三级质控体系 · 深度清洗治理 · 数据可追溯可复用 · TB 级数据体量 · 年度持续新增",
    copyright: "工程细胞主题库门户 · 面向实际研发场景的高保真数据门户原型",
    links: [
      { name: "平台价值", url: "#value" },
      { name: "整体流程", url: "#flow" },
      { name: "核心数据库", url: "#databases" },
      { name: "数据总览", url: "#dataviz" },
      { name: "场景应用", url: "#scenes" },
      { name: "工具算法", url: "#tools" },
      { name: "合作案例", url: "#cases" }
    ],
    contactUnit: "工程细胞研究中心",
    contactPhone: "0755-83949389",
    contactAddress: "广东省深圳市工程细胞主题库示范应用中心",
    qrTitle: "官方服务二维码",
    qrImage: ""
  };

  function portalClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function isPlainObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }

  function mergePortalConfig(base, override) {
    if (!isPlainObject(base) || !isPlainObject(override)) {
      return override === undefined ? base : override;
    }
    const next = { ...base };
    Object.keys(override).forEach((key) => {
      const current = override[key];
      if (Array.isArray(current)) {
        next[key] = current.slice();
        return;
      }
      next[key] = mergePortalConfig(base[key], current);
    });
    return next;
  }

  function normalizeStringList(list, fallback) {
    const source = Array.isArray(list) ? list : fallback;
    return fallback.map((item, index) => String(source[index] ?? item ?? "").trim());
  }

  function normalizePairList(list, fallback, mode = "value-label") {
    const source = Array.isArray(list) ? list : fallback;
    return fallback.map((item, index) => {
      const current = source[index] || item || {};
      if (mode === "label-value") {
        return {
          label: String(current.label ?? item.label ?? "").trim(),
          value: String(current.value ?? item.value ?? "").trim()
        };
      }
      return {
        value: String(current.value ?? item.value ?? "").trim(),
        label: String(current.label ?? item.label ?? "").trim()
      };
    });
  }

  function normalizeObjectList(list, fallback, mapper) {
    const source = Array.isArray(list) ? list : fallback;
    return fallback.map((item, index) => mapper(source[index] || item || {}, item, index));
  }

  function normalizeLinks(list, fallback) {
    const source = Array.isArray(list) && list.length ? list : fallback;
    return source
      .map((item) => ({
        name: String(item?.name || "").trim(),
        url: String(item?.url || "").trim()
      }))
      .filter((item) => item.name || item.url);
  }

  function normalizePortalPlatformConfig(config) {
    const merged = mergePortalConfig(portalClone(defaultPortalPlatformConfig), config || {});
    merged.heroAudienceTags = normalizeStringList(merged.heroAudienceTags, defaultPortalPlatformConfig.heroAudienceTags);
    merged.heroTags = normalizeStringList(merged.heroTags, defaultPortalPlatformConfig.heroTags);
    merged.heroStats = normalizePairList(merged.heroStats, defaultPortalPlatformConfig.heroStats);
    merged.heroDashboardRows = normalizePairList(merged.heroDashboardRows, defaultPortalPlatformConfig.heroDashboardRows, "label-value");
    merged.heroSummaryItems = normalizePairList(merged.heroSummaryItems, defaultPortalPlatformConfig.heroSummaryItems, "label-value");
    merged.valueItems = normalizeObjectList(merged.valueItems, defaultPortalPlatformConfig.valueItems, (item, fallback) => ({
      detailKey: fallback.detailKey,
      badge: String(item.badge ?? fallback.badge ?? "").trim(),
      title: String(item.title ?? fallback.title ?? "").trim(),
      summary: String(item.summary ?? fallback.summary ?? "").trim()
    }));
    merged.flowItems = normalizeObjectList(merged.flowItems, defaultPortalPlatformConfig.flowItems, (item, fallback) => ({
      step: String(item.step ?? fallback.step ?? "").trim(),
      title: String(item.title ?? fallback.title ?? "").trim(),
      summary: String(item.summary ?? fallback.summary ?? "").trim()
    }));
    merged.databaseItems = normalizeObjectList(merged.databaseItems, defaultPortalPlatformConfig.databaseItems, (item, fallback) => ({
      detailKey: fallback.detailKey,
      count: String(item.count ?? fallback.count ?? "").trim(),
      title: String(item.title ?? fallback.title ?? "").trim(),
      summary: String(item.summary ?? fallback.summary ?? "").trim(),
      tags: normalizeStringList(item.tags, fallback.tags)
    }));
    merged.datavizQualityParagraphs = normalizeStringList(
      merged.datavizQualityParagraphs,
      defaultPortalPlatformConfig.datavizQualityParagraphs
    );
    merged.datavizMetrics = normalizePairList(merged.datavizMetrics, defaultPortalPlatformConfig.datavizMetrics);
    merged.datavizChartLegend = normalizeStringList(
      merged.datavizChartLegend,
      defaultPortalPlatformConfig.datavizChartLegend
    );
    merged.sceneItems = normalizeObjectList(merged.sceneItems, defaultPortalPlatformConfig.sceneItems, (item, fallback) => ({
      panelId: fallback.panelId,
      detailKey: fallback.detailKey,
      tab: String(item.tab ?? fallback.tab ?? "").trim(),
      title: String(item.title ?? fallback.title ?? "").trim(),
      summary: String(item.summary ?? fallback.summary ?? "").trim(),
      focusTitle: String(item.focusTitle ?? fallback.focusTitle ?? "").trim(),
      bullets: normalizeStringList(item.bullets, fallback.bullets),
      metrics: normalizePairList(item.metrics, fallback.metrics),
      chartTitle: String(item.chartTitle ?? fallback.chartTitle ?? "").trim()
    }));
    merged.toolItems = normalizeObjectList(merged.toolItems, defaultPortalPlatformConfig.toolItems, (item, fallback) => ({
      detailKey: fallback.detailKey,
      badge: String(item.badge ?? fallback.badge ?? "").trim(),
      title: String(item.title ?? fallback.title ?? "").trim(),
      summary: String(item.summary ?? fallback.summary ?? "").trim()
    }));
    merged.caseItems = normalizeObjectList(merged.caseItems, defaultPortalPlatformConfig.caseItems, (item, fallback) => ({
      detailKey: fallback.detailKey,
      unit: String(item.unit ?? fallback.unit ?? "").trim(),
      title: String(item.title ?? fallback.title ?? "").trim(),
      direction: String(item.direction ?? fallback.direction ?? "").trim(),
      summary: String(item.summary ?? fallback.summary ?? "").trim()
    }));
    merged.links = normalizeLinks(merged.links, defaultPortalPlatformConfig.links);
    return merged;
  }

  global.PortalConfigShared = {
    defaultPortalPlatformConfig,
    normalizePortalPlatformConfig,
    portalClone
  };
})(window);

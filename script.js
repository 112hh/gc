const authScreens = {
  login: {
    heroTitle: ["专业的细胞工程", "数据管理平台"],
    bullets: [
      "海量细胞株数据资源",
      "标准化数据管理流程",
      "智能检索与分析工具",
      "多团队协作支持"
    ],
    title: "欢迎回来",
    subtitle: "请登录您的账户以访问平台资源"
  },
  register: {
    heroTitle: ["加入我们的", "科研协作社区"],
    bullets: [
      "共享最新细胞研究成果",
      "获取专业数据分析工具",
      "参与多机构合作项目",
      "获得技术支持与培训"
    ],
    title: "创建账号",
    subtitle: "填写信息注册成为平台用户"
  },
  recover: {
    heroTitle: ["找回您的", "账户访问权限"],
    bullets: [
      "通过注册邮箱快速重置密码",
      "多重验证保障账户安全",
      "如有问题请联系系统管理员"
    ],
    title: "忘记密码",
    subtitle: "通过注册邮箱重置您的账户密码"
  }
};

const sensorModules = {
  physical: {
    key: "physical",
    label: "物理传感器",
    listBreadcrumb: ["首页", "数据管理", "物理传感器"],
    formBreadcrumb: ["首页", "数据管理", "物理传感器", "新增物理参数录入"],
    batchTitle: "批次列表",
    batchIcon: "i-list",
    recordTitle: "录入记录列表",
    summary: [
      { value: "256", label: "总记录数", tone: "blue" },
      { value: "198", label: "正常数", tone: "green" },
      { value: "42", label: "预警数", tone: "orange" },
      { value: "16", label: "异常数", tone: "red" }
    ],
    entryTitle: "物理参数",
    entryTitleIcon: "i-file",
    formSectionTitle: "基础信息",
    formMetricTitle: "物理参数",
    importTitle: "批量导入物理参数数据",
    thresholdTitle: "物理参数阈值配置",
    detailTitle: "物理参数记录详情",
    importVariant: "simple",
    batches: [
      {
        id: "CHO-K1-202401140800-高浓度",
        cellName: "CHO-K1",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-14 08:00 ~ 2024-01-16 08:00",
        records: [
          {
            id: "p-1",
            time: "2024-01-15 10:30:00",
            user: "张三",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "温度", value: "37.5℃", tone: "normal" },
              { label: "压力", value: "1.2kPa", tone: "normal" },
              { label: "pH", value: "6.85", tone: "normal" },
              { label: "溶氧", value: "5.6mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "37.5 ℃" },
              { label: "罐内压力", value: "1.2 kPa" },
              { label: "搅拌速度", value: "320 rpm" },
              { label: "气体流量", value: "2.1 L/min" },
              { label: "pH值", value: "6.85" },
              { label: "溶解氧浓度", value: "5.6 mg/L" },
              { label: "溶解CO₂浓度", value: "45.2 mg/L" },
              { label: "排气O₂分压", value: "18.5 %" },
              { label: "排气CO₂分压", value: "0.06 %" }
            ]
          },
          {
            id: "p-2",
            time: "2024-01-15 11:00:00",
            user: "李四",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "温度", value: "37.8℃", tone: "warning" },
              { label: "压力", value: "1.3kPa", tone: "normal" },
              { label: "pH", value: "6.92", tone: "normal" },
              { label: "溶氧", value: "5.4mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "37.8 ℃" },
              { label: "罐内压力", value: "1.3 kPa" },
              { label: "搅拌速度", value: "360 rpm" },
              { label: "气体流量", value: "2.4 L/min" },
              { label: "pH值", value: "6.92" },
              { label: "溶解氧浓度", value: "5.4 mg/L" },
              { label: "溶解CO₂浓度", value: "48.6 mg/L" },
              { label: "排气O₂分压", value: "17.8 %" },
              { label: "排气CO₂分压", value: "0.08 %" }
            ]
          },
          {
            id: "p-3",
            time: "2024-01-15 11:30:00",
            user: "王五",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "温度", value: "38.5℃", tone: "error" },
              { label: "压力", value: "1.6kPa", tone: "normal" },
              { label: "pH", value: "5.8", tone: "error" },
              { label: "溶氧", value: "4.2mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "38.5 ℃" },
              { label: "罐内压力", value: "1.6 kPa" },
              { label: "搅拌速度", value: "510 rpm" },
              { label: "气体流量", value: "3.2 L/min" },
              { label: "pH值", value: "5.8" },
              { label: "溶解氧浓度", value: "4.2 mg/L" },
              { label: "溶解CO₂浓度", value: "88.4 mg/L" },
              { label: "排气O₂分压", value: "14.7 %" },
              { label: "排气CO₂分压", value: "0.11 %" }
            ]
          }
        ]
      },
      {
        id: "HEK293-202401160730-低浓度",
        cellName: "HEK293",
        badge: "低浓度",
        badgeClass: "badge-low",
        statusText: "预警",
        tone: "warning",
        period: "2024-01-16 07:30 ~ 2024-01-17 06:00",
        records: [
          {
            id: "p-4",
            time: "2024-01-16 08:30:00",
            user: "陈晨",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "温度", value: "36.8℃", tone: "normal" },
              { label: "压力", value: "1.1kPa", tone: "normal" },
              { label: "pH", value: "7.11", tone: "warning" },
              { label: "溶氧", value: "4.6mg/L", tone: "warning" }
            ],
            detail: [
              { label: "温度", value: "36.8 ℃" },
              { label: "罐内压力", value: "1.1 kPa" },
              { label: "搅拌速度", value: "285 rpm" },
              { label: "气体流量", value: "1.9 L/min" },
              { label: "pH值", value: "7.11" },
              { label: "溶解氧浓度", value: "4.6 mg/L" },
              { label: "溶解CO₂浓度", value: "52.0 mg/L" },
              { label: "排气O₂分压", value: "16.3 %" },
              { label: "排气CO₂分压", value: "0.07 %" }
            ]
          }
        ]
      },
      {
        id: "BHK21-202401170620-中浓度",
        cellName: "BHK21",
        badge: "中浓度",
        badgeClass: "badge-mid",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-17 06:20 ~ 2024-01-18 09:20",
        records: [
          {
            id: "p-5",
            time: "2024-01-17 09:30:00",
            user: "周璇",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "温度", value: "37.2℃", tone: "normal" },
              { label: "压力", value: "1.3kPa", tone: "normal" },
              { label: "pH", value: "6.83", tone: "normal" },
              { label: "溶氧", value: "5.1mg/L", tone: "normal" }
            ],
            detail: [
              { label: "温度", value: "37.2 ℃" },
              { label: "罐内压力", value: "1.3 kPa" },
              { label: "搅拌速度", value: "330 rpm" },
              { label: "气体流量", value: "2.0 L/min" },
              { label: "pH值", value: "6.83" },
              { label: "溶解氧浓度", value: "5.1 mg/L" },
              { label: "溶解CO₂浓度", value: "43.2 mg/L" },
              { label: "排气O₂分压", value: "18.8 %" },
              { label: "排气CO₂分压", value: "0.05 %" }
            ]
          }
        ]
      },
      {
        id: "CHO-S-202401180810-高浓度",
        cellName: "CHO-S",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "异常",
        tone: "error",
        period: "2024-01-18 08:10 ~ 2024-01-18 22:10",
        records: [
          {
            id: "p-6",
            time: "2024-01-18 10:10:00",
            user: "郑宁",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "温度", value: "38.7℃", tone: "error" },
              { label: "压力", value: "1.8kPa", tone: "warning" },
              { label: "pH", value: "5.6", tone: "error" },
              { label: "溶氧", value: "4.0mg/L", tone: "warning" }
            ],
            detail: [
              { label: "温度", value: "38.7 ℃" },
              { label: "罐内压力", value: "1.8 kPa" },
              { label: "搅拌速度", value: "560 rpm" },
              { label: "气体流量", value: "3.4 L/min" },
              { label: "pH值", value: "5.6" },
              { label: "溶解氧浓度", value: "4.0 mg/L" },
              { label: "溶解CO₂浓度", value: "91.3 mg/L" },
              { label: "排气O₂分压", value: "14.2 %" },
              { label: "排气CO₂分压", value: "0.12 %" }
            ]
          }
        ]
      }
    ],
    basicFields: [
      { label: "批次号", type: "select", value: "", placeholder: "请选择批次号" },
      { label: "录入时间", type: "datetime", value: "2026/04/10 14:46" },
      { label: "录入人员", type: "text", placeholder: "输入录入人员姓名" },
      { label: "开始发酵时间", type: "date", placeholder: "yyyy/mm/日 --:--" },
      { label: "结束发酵时间", type: "date", placeholder: "yyyy/mm/日 --:--" }
    ],
    paramFields: [
      { label: "温度(℃)", placeholder: "输入温度值", hint: "阈值: 25.0 - 36.0 ℃" },
      { label: "罐内压力(kPa)", placeholder: "输入压力值", hint: "阈值: 0.8 - 1.5 kPa" },
      { label: "搅拌速度(rpm)", placeholder: "输入搅拌速度", hint: "阈值: 100 - 500 rpm" },
      { label: "气体流量(L/min)", placeholder: "输入气体流量", hint: "阈值: 0.5 - 3.0 L/min" },
      { label: "pH值", placeholder: "输入pH值", hint: "阈值: 6.0 - 8.0" },
      { label: "溶解氧浓度(mg/L)", placeholder: "输入溶解氧浓度", hint: "阈值: 2.0 - 8.0 mg/L" },
      { label: "溶解CO₂浓度(mg/L)", placeholder: "输入溶解CO₂浓度", hint: "阈值: 10 - 100 mg/L" },
      { label: "排气O₂分压(%)", placeholder: "输入排气O₂分压", hint: "阈值: 15 - 21 %" },
      { label: "排气CO₂分压(%)", placeholder: "输入排气CO₂分压", hint: "阈值: 0.03 - 0.1 %" }
    ],
    thresholdRows: [
      { label: "温度(℃)", min: "25.0", max: "38.0", alert: "37.0" },
      { label: "罐内压力(kPa)", min: "0.8", max: "1.5", alert: "1.4" },
      { label: "搅拌速度(rpm)", min: "100", max: "500", alert: "450" },
      { label: "气体流量(L/min)", min: "0.5", max: "3.0", alert: "2.8" },
      { label: "pH值", min: "6.0", max: "8.0", alert: "7.5" },
      { label: "溶解氧浓度(mg/L)", min: "2.0", max: "8.0", alert: "7.0" },
      { label: "溶解CO₂浓度(mg/L)", min: "10.0", max: "100.0", alert: "90.0" },
      { label: "排气O₂分压(%)", min: "15.0", max: "21.0", alert: "20.0" },
      { label: "排气CO₂分压(%)", min: "0.03", max: "0.1", alert: "0.09" }
    ]
  },
  biological: {
    key: "biological",
    label: "生物传感器",
    listBreadcrumb: ["首页", "数据管理", "生物传感器"],
    formBreadcrumb: ["首页", "数据管理", "生物传感器", "新增代谢物录入"],
    batchTitle: "批次列表",
    batchIcon: "i-table",
    recordTitle: "录入记录列表",
    summary: [
      { value: "256", label: "总记录数", tone: "blue" },
      { value: "198", label: "正常数", tone: "green" },
      { value: "42", label: "预警数", tone: "orange" },
      { value: "16", label: "异常数", tone: "red" }
    ],
    entryTitle: "代谢物参数(16种多通道目标信号)",
    entryTitleIcon: "i-info",
    formSectionTitle: "基础信息",
    formMetricTitle: "代谢物参数",
    importTitle: "批量导入数据",
    thresholdTitle: "代谢物阈值配置",
    detailTitle: "代谢物记录详情",
    importVariant: "confirm",
    batches: [
      {
        id: "FB20240101001",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-14 08:00 ~ 2024-01-16 08:00",
        records: [
          {
            id: "b-1",
            time: "2024-01-15 10:30:00",
            user: "张三",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "谷氨酸", value: "12.5 g/L", tone: "normal" },
              { label: "葡萄糖", value: "45.2 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.8 g/L", tone: "normal" },
              { label: "乳酸", value: "8.6 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "12.5 g/L" },
              { label: "葡萄糖", value: "45.2 g/L" },
              { label: "丙酮酸", value: "2.8 g/L" },
              { label: "乳酸", value: "8.6 g/L" },
              { label: "柠檬酸", value: "4.2 g/L" },
              { label: "甘氨酸", value: "1.2 g/L" },
              { label: "谷氨酰胺", value: "3.5 g/L" },
              { label: "精氨酸", value: "2.1 g/L" }
            ]
          },
          {
            id: "b-2",
            time: "2024-01-15 11:00:00",
            user: "李四",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "谷氨酸", value: "18.5 g/L", tone: "warning" },
              { label: "葡萄糖", value: "52.1 g/L", tone: "normal" },
              { label: "丙酮酸", value: "3.2 g/L", tone: "normal" },
              { label: "乳酸", value: "9.1 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "18.5 g/L" },
              { label: "葡萄糖", value: "52.1 g/L" },
              { label: "丙酮酸", value: "3.2 g/L" },
              { label: "乳酸", value: "9.1 g/L" },
              { label: "柠檬酸", value: "4.9 g/L" },
              { label: "甘氨酸", value: "1.8 g/L" },
              { label: "谷氨酰胺", value: "4.0 g/L" },
              { label: "精氨酸", value: "2.7 g/L" }
            ]
          },
          {
            id: "b-3",
            time: "2024-01-15 11:30:00",
            user: "王五",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "谷氨酸", value: "35.2 g/L", tone: "error" },
              { label: "葡萄糖", value: "68.5 g/L", tone: "error" },
              { label: "丙酮酸", value: "9.8 g/L", tone: "error" },
              { label: "乳酸", value: "7.5 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "35.2 g/L" },
              { label: "葡萄糖", value: "68.5 g/L" },
              { label: "丙酮酸", value: "9.8 g/L" },
              { label: "乳酸", value: "7.5 g/L" },
              { label: "柠檬酸", value: "6.3 g/L" },
              { label: "甘氨酸", value: "4.4 g/L" },
              { label: "谷氨酰胺", value: "7.8 g/L" },
              { label: "精氨酸", value: "5.6 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240102001",
        badge: "低浓度",
        badgeClass: "badge-low",
        statusText: "预警",
        tone: "warning",
        period: "2024-01-17 09:00 ~ 2024-01-18 04:00",
        records: [
          {
            id: "b-4",
            time: "2024-01-16 09:20:00",
            user: "赵宁",
            statusText: "预警",
            statusClass: "is-warning",
            metrics: [
              { label: "谷氨酸", value: "16.8 g/L", tone: "warning" },
              { label: "葡萄糖", value: "48.2 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.7 g/L", tone: "normal" },
              { label: "乳酸", value: "8.0 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "16.8 g/L" },
              { label: "葡萄糖", value: "48.2 g/L" },
              { label: "丙酮酸", value: "2.7 g/L" },
              { label: "乳酸", value: "8.0 g/L" },
              { label: "柠檬酸", value: "4.0 g/L" },
              { label: "甘氨酸", value: "1.1 g/L" },
              { label: "谷氨酰胺", value: "3.1 g/L" },
              { label: "精氨酸", value: "2.0 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240103001",
        badge: "中浓度",
        badgeClass: "badge-mid",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-18 07:00 ~ 2024-01-18 22:00",
        records: [
          {
            id: "b-5",
            time: "2024-01-17 14:20:00",
            user: "陆然",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "谷氨酸", value: "11.9 g/L", tone: "normal" },
              { label: "葡萄糖", value: "42.1 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.1 g/L", tone: "normal" },
              { label: "乳酸", value: "6.9 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "11.9 g/L" },
              { label: "葡萄糖", value: "42.1 g/L" },
              { label: "丙酮酸", value: "2.1 g/L" },
              { label: "乳酸", value: "6.9 g/L" },
              { label: "柠檬酸", value: "3.6 g/L" },
              { label: "甘氨酸", value: "0.9 g/L" },
              { label: "谷氨酰胺", value: "2.8 g/L" },
              { label: "精氨酸", value: "1.8 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240104001",
        badge: "其他",
        badgeClass: "badge-other",
        statusText: "异常",
        tone: "error",
        period: "2024-01-19 05:10 ~ 2024-01-19 16:30",
        records: [
          {
            id: "b-6",
            time: "2024-01-19 09:20:00",
            user: "高源",
            statusText: "异常",
            statusClass: "is-error",
            metrics: [
              { label: "谷氨酸", value: "31.6 g/L", tone: "error" },
              { label: "葡萄糖", value: "61.5 g/L", tone: "error" },
              { label: "丙酮酸", value: "9.2 g/L", tone: "error" },
              { label: "乳酸", value: "10.1 g/L", tone: "warning" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "31.6 g/L" },
              { label: "葡萄糖", value: "61.5 g/L" },
              { label: "丙酮酸", value: "9.2 g/L" },
              { label: "乳酸", value: "10.1 g/L" },
              { label: "柠檬酸", value: "6.0 g/L" },
              { label: "甘氨酸", value: "4.1 g/L" },
              { label: "谷氨酰胺", value: "7.1 g/L" },
              { label: "精氨酸", value: "5.3 g/L" }
            ]
          }
        ]
      },
      {
        id: "FB20240105001",
        badge: "高浓度",
        badgeClass: "badge-high",
        statusText: "运行中",
        tone: "running",
        period: "2024-01-20 08:00 ~ 2024-01-20 18:00",
        records: [
          {
            id: "b-7",
            time: "2024-01-20 10:00:00",
            user: "林泽",
            statusText: "正常",
            statusClass: "is-normal",
            metrics: [
              { label: "谷氨酸", value: "13.6 g/L", tone: "normal" },
              { label: "葡萄糖", value: "46.3 g/L", tone: "normal" },
              { label: "丙酮酸", value: "2.6 g/L", tone: "normal" },
              { label: "乳酸", value: "8.2 g/L", tone: "normal" }
            ],
            detailCards: [
              { label: "谷氨酸", value: "13.6 g/L" },
              { label: "葡萄糖", value: "46.3 g/L" },
              { label: "丙酮酸", value: "2.6 g/L" },
              { label: "乳酸", value: "8.2 g/L" },
              { label: "柠檬酸", value: "3.8 g/L" },
              { label: "甘氨酸", value: "1.0 g/L" },
              { label: "谷氨酰胺", value: "3.0 g/L" },
              { label: "精氨酸", value: "2.2 g/L" }
            ]
          }
        ]
      }
    ],
    basicFields: [
      { label: "批次号", type: "select", value: "FB20240101001(高浓度)" },
      { label: "发酵物名称", type: "text", placeholder: "输入发酵物名称" },
      { label: "录入时间", type: "datetime", value: "2026/04/10 14:46" },
      { label: "录入人员", type: "text", placeholder: "输入录入人员姓名" },
      { label: "开始发酵时间", type: "date", placeholder: "yyyy/mm/日 --:--" },
      { label: "结束发酵时间", type: "date", placeholder: "yyyy/mm/日 --:--" }
    ],
    paramFields: [
      { label: "谷氨酸(g/L)", value: "0.00", hint: "0 - 50 g/L" },
      { label: "葡萄糖(g/L)", value: "0.00", hint: "0 - 100 g/L" },
      { label: "丙酮酸(g/L)", value: "0.00", hint: "0 - 10 g/L" },
      { label: "甘氨酸(g/L)", value: "0.00", hint: "0 - 5 g/L" },
      { label: "谷氨酰胺(g/L)", value: "0.00", hint: "0 - 8 g/L" },
      { label: "精氨酸(g/L)", value: "0.00", hint: "0 - 5 g/L" },
      { label: "组氨酸(g/L)", value: "0.00", hint: "0 - 3 g/L" },
      { label: "色氨酸(g/L)", value: "0.00", hint: "0 - 4 g/L" },
      { label: "乳酸(g/L)", value: "0.00", hint: "0 - 15 g/L" },
      { label: "铵根离子(mmol/L)", value: "0.00", hint: "0 - 200 mmol/L" },
      { label: "柠檬酸(g/L)", value: "0.00", hint: "0 - 10 g/L" },
      { label: "亮氨酸(g/L)", value: "0.00", hint: "0 - 6 g/L" },
      { label: "异亮氨酸(g/L)", value: "0.00", hint: "0 - 4 g/L" },
      { label: "甲硫氨酸(g/L)", value: "0.00", hint: "0 - 3 g/L" },
      { label: "半胱氨酸(g/L)", value: "0.00", hint: "0 - 2 g/L" },
      { label: "赖氨酸(g/L)", value: "0.00", hint: "0 - 8 g/L" }
    ],
    thresholdRows: [
      { label: "谷氨酸(g/L)", min: "0.00", max: "50.00", alert: "45.00" },
      { label: "葡萄糖(g/L)", min: "0.00", max: "100.00", alert: "90.00" },
      { label: "丙酮酸(g/L)", min: "0.00", max: "10.00", alert: "8.00" },
      { label: "甘氨酸(g/L)", min: "0.00", max: "5.00", alert: "4.50" },
      { label: "谷氨酰胺(g/L)", min: "0.00", max: "8.00", alert: "7.00" },
      { label: "精氨酸(g/L)", min: "0.00", max: "5.00", alert: "4.50" },
      { label: "组氨酸(g/L)", min: "0.00", max: "3.00", alert: "2.70" },
      { label: "色氨酸(g/L)", min: "0.00", max: "4.00", alert: "3.60" },
      { label: "乳酸(g/L)", min: "0.00", max: "15.00", alert: "13.50" },
      { label: "铵根离子(mmol/L)", min: "0.00", max: "200.00", alert: "180.00" }
    ]
  }
};

const analysisPages = {
  dashboard: {
    key: "dashboard",
    title: "数据看板",
    breadcrumb: ["首页", "数据统计", "数据看板"],
    headerTools: false
  },
  catalog: {
    key: "catalog",
    title: "数据资源目录",
    breadcrumb: ["首页", "数据统计", "数据资源目录"],
    primaryButton: "",
    headerTools: true,
    categories: [
      {
        name: "基因型表型关联数据集",
        desc: "沉淀工程细胞基因型、突变位点、表型指标与关联分析结果",
        count: "4库",
        records: "2,186万",
        tone: "is-blue"
      },
      {
        name: "多组学数据集",
        desc: "整合基因组、转录组、蛋白组、代谢组及通路注释数据",
        count: "5库",
        records: "3,214万",
        tone: "is-green"
      },
      {
        name: "发酵过程数据集",
        desc: "汇聚批次、工艺参数、传感器曲线、过程控制与产物输出",
        count: "4库",
        records: "2,018万",
        tone: "is-orange"
      },
      {
        name: "工程细胞培养营养数据集",
        desc: "梳理培养基配方、营养组分、补料策略与细胞生长响应",
        count: "3库",
        records: "1,224万",
        tone: "is-purple"
      }
    ],
    rows: [
      {
        id: "catalog-gpa-core",
        name: "GPA基因型表型关联核心库",
        category: "基因型表型关联数据集",
        scope: "SNP/Indel、目标产物、产量、生长速率、显著关联位点",
        fields: "cell_id, genotype_id, phenotype_value, p_value, effect_size",
        records: "856万",
        format: "Parquet",
        updateCycle: "每周",
        owner: "基因型-表型分析组",
        standardizedAt: "2026-05-12",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-gpa-marker",
        name: "工程细胞分子标记库",
        category: "基因型表型关联数据集",
        scope: "候选基因、调控元件、标记组合、表型贡献度",
        fields: "marker_id, gene_symbol, variant_type, trait, confidence",
        records: "438万",
        format: "CSV",
        updateCycle: "每月",
        owner: "分子设计组",
        standardizedAt: "2026-05-09",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-omics-panorama",
        name: "多组学整合全景库",
        category: "多组学数据集",
        scope: "基因组、转录组、蛋白组、代谢组、通路映射",
        fields: "sample_id, omics_type, feature_id, expression_value, pathway_id",
        records: "1,326万",
        format: "HDF5",
        updateCycle: "每日",
        owner: "多组学分析组",
        standardizedAt: "2026-05-18",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-omics-pathway",
        name: "代谢通路注释与通量库",
        category: "多组学数据集",
        scope: "反应、代谢物、酶、通量预测、靶点推荐",
        fields: "reaction_id, metabolite_id, enzyme_id, flux_value, target_rank",
        records: "742万",
        format: "JSON",
        updateCycle: "每周",
        owner: "代谢网络组",
        standardizedAt: "2026-05-16",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-process-batch",
        name: "发酵批次过程参数库",
        category: "发酵过程数据集",
        scope: "温度、pH、DO、搅拌、补料、产物浓度时间序列",
        fields: "batch_id, time_point, temperature, ph, dissolved_oxygen, titer",
        records: "986万",
        format: "Timeseries",
        updateCycle: "实时",
        owner: "发酵过程分析组",
        standardizedAt: "2026-05-21",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-process-control",
        name: "发酵过程控制策略库",
        category: "发酵过程数据集",
        scope: "控制策略、告警阈值、优化动作、过程质量评价",
        fields: "strategy_id, batch_id, parameter, threshold, action, outcome",
        records: "312万",
        format: "SQL",
        updateCycle: "每日",
        owner: "过程控制组",
        standardizedAt: "2026-05-20",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-nutrition-medium",
        name: "培养基配方与营养组分库",
        category: "工程细胞培养营养数据集",
        scope: "碳源、氮源、氨基酸、无机盐、维生素、补料浓度",
        fields: "medium_id, component_name, concentration, unit, feed_stage",
        records: "684万",
        format: "CSV",
        updateCycle: "每周",
        owner: "培养营养组",
        standardizedAt: "2026-05-19",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      },
      {
        id: "catalog-nutrition-response",
        name: "营养条件-细胞响应库",
        category: "工程细胞培养营养数据集",
        scope: "营养变量、细胞密度、活性、产物生成速率、消耗速率",
        fields: "experiment_id, nutrient_id, cell_density, viability, uptake_rate",
        records: "540万",
        format: "Parquet",
        updateCycle: "每月",
        owner: "细胞培养组",
        standardizedAt: "2026-05-15",
        status: { text: "已标准化", className: "is-valid" },
        actions: [
          { id: "detail", label: "查看详情", tone: "blue" }
        ]
      }
    ],
    columns: [
      { key: "name", label: "数据库名称" },
      { key: "category", label: "资源类型" },
      { key: "fields", label: "核心字段" },
      { key: "records", label: "数据量" },
      { key: "format", label: "格式" },
      { key: "status", label: "标准化状态" },
      { key: "actions", label: "操作" }
    ],
    footer: "共 8 条记录，每页 10 条"
  },
  gene: {
    key: "gene",
    title: "基因型-表型数据分析",
    breadcrumb: ["首页", "数据分析", "基因型-表型数据分析"],
    primaryButton: "新增分析项目",
    headerTools: true,
    filters: [
      { label: "项目名称", type: "input", placeholder: "请输入项目名称" },
      { label: "菌株类型", type: "select", options: ["全部", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "表型类型", type: "select", options: ["全部", "产量", "生长速率", "底物利用率"] },
      { label: "分析状态", type: "select", options: ["全部", "已完成", "分析中", "失败"] }
    ],
    columns: [
      { key: "name", label: "项目名称" },
      { key: "strain", label: "菌株类型" },
      { key: "phenotype", label: "表型类型" },
      { key: "status", label: "分析状态" },
      { key: "samples", label: "样本数" },
      { key: "sites", label: "显著位点" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "高产L-赖氨酸菌株筛选",
        strain: "大肠杆菌",
        phenotype: "产量",
        status: { text: "已完成", className: "is-done" },
        samples: "1,256",
        sites: "48",
        createdAt: "2024-01-15 10:30",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "删除", tone: "danger" },
          { label: "上传数据集", tone: "danger" },
          { label: "分析结果", tone: "blue" },
          { label: "查看详情", tone: "blue" }
        ]
      },
      {
        name: "乙醇耐受性酵母菌株分析",
        strain: "酵母菌",
        phenotype: "生长速率",
        status: { text: "分析中", className: "is-progress" },
        samples: "892",
        sites: "-",
        createdAt: "2024-01-18 14:20",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "删除", tone: "danger" },
          { label: "上传数据集", tone: "danger" },
          { label: "分析结果", tone: "blue" },
          { label: "查看详情", tone: "blue" }
        ]
      },
      {
        name: "芽孢杆菌蛋白酶表达优化",
        strain: "芽孢杆菌",
        phenotype: "底物利用率",
        status: { text: "失败", className: "is-fail" },
        samples: "456",
        sites: "-",
        createdAt: "2024-01-20 09:15",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "删除", tone: "danger" },
          { label: "上传数据集", tone: "danger" },
          { label: "分析结果", tone: "blue" },
          { label: "查看详情", tone: "blue" }
        ]
      }
    ],
    footer: "共 3 条记录"
  },
  omics: {
    key: "omics",
    title: "组学数据分析",
    breadcrumb: ["首页", "数据管理", "组学数据分析"],
    primaryButton: "新建组学数据分析项目",
    headerTools: true,
    stats: [
      { icon: "i-folder", iconClass: "is-blue", value: "28", label: "代谢模型数量" },
      { icon: "i-user", iconClass: "is-green", value: "1,856", label: "平均代谢数" },
      { icon: "i-doc", iconClass: "is-yellow", value: "4,231", label: "平均基因数" },
      { icon: "i-bars", iconClass: "is-cyan", value: "2.34", label: "目标通量 (mmol/g/h)" }
    ],
    filters: [
      { label: "模型名称", type: "input", placeholder: "请输入模型名称" },
      { label: "菌株类型", type: "select", options: ["全部", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "模型类型", type: "select", options: ["全部", "基于基因组", "基于代谢组", "基于转录组"] },
      { label: "状态", type: "select", options: ["全部", "已验证", "优化中", "验证中"] }
    ],
    columns: [
      { key: "name", label: "模型名称" },
      { key: "strain", label: "菌株类型" },
      { key: "type", label: "模型类型" },
      { key: "reactions", label: "反应数" },
      { key: "metabolites", label: "代谢物数" },
      { key: "flux", label: "预测通量" },
      { key: "status", label: "状态" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "大肠杆菌K-12中心代谢模型",
        strain: "大肠杆菌",
        type: "基于基因组",
        reactions: "2,156",
        metabolites: "1,892",
        flux: "3.24",
        status: { text: "已验证", className: "is-valid" },
        createdAt: "2024-01-15 10:30",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "酿酒酵母中心碳代谢模型",
        strain: "酵母菌",
        type: "基于代谢组",
        reactions: "1,876",
        metabolites: "1,423",
        flux: "8.56",
        status: { text: "已验证", className: "is-valid" },
        createdAt: "2024-01-18 14:20",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "枯草芽孢杆菌蛋白合成模型",
        strain: "芽孢杆菌",
        type: "基于转录组",
        reactions: "3,245",
        metabolites: "2,156",
        flux: "1.89",
        status: { text: "优化中", className: "is-progress" },
        createdAt: "2024-01-20 09:15",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "大肠杆菌L-赖氨酸合成模型",
        strain: "大肠杆菌",
        type: "基于基因组",
        reactions: "2,456",
        metabolites: "2,023",
        flux: "2.34",
        status: { text: "验证中", className: "is-pending" },
        createdAt: "2024-01-22 16:45",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "酵母菌类胡萝卜素合成模型",
        strain: "酵母菌",
        type: "基于代谢组",
        reactions: "1,654",
        metabolites: "1,287",
        flux: "0.78",
        status: { text: "已验证", className: "is-valid" },
        createdAt: "2024-01-25 11:00",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  process: {
    key: "process",
    title: "发酵过程数据分析",
    breadcrumb: ["首页", "数据分析", "发酵过程数据分析"],
    primaryButton: "新建发酵过程分析项目",
    headerTools: true,
    filters: [
      { label: "模型名称", type: "input", placeholder: "请输入模型名称" },
      { label: "菌株类型", type: "select", options: ["全部", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "优化目标", type: "select", options: ["全部", "产量最大化", "生成速率最大化", "底物利用最大化"] },
      { label: "状态", type: "select", options: ["全部", "已验证", "验证中", "待验证"] }
    ],
    columns: [
      { key: "name", label: "模型名称" },
      { key: "model", label: "模型类型" },
      { key: "strain", label: "菌株类型" },
      { key: "goal", label: "优化目标" },
      { key: "createdAt", label: "创建时间" },
      { key: "status", label: "状态" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "谷氨酸发酵过程优化",
        model: "代谢网络模型",
        strain: "谷氨酸棒杆菌",
        goal: "产量最大化",
        createdAt: "2024-01-15 10:30",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "LSTM发酵预测模型",
        model: "神经网络模型",
        strain: "大肠杆菌",
        goal: "生成速率最大化",
        createdAt: "2024-01-18 14:20",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "酵母菌乙醇发酵优化",
        model: "代谢网络模型",
        strain: "酵母菌",
        goal: "底物利用最大化",
        createdAt: "2024-01-20 09:15",
        status: { text: "验证中", className: "is-progress" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "芽孢杆菌蛋白酶发酵模型",
        model: "神经网络模型",
        strain: "芽孢杆菌",
        goal: "产量最大化",
        createdAt: "2024-01-22 16:45",
        status: { text: "待验证", className: "is-pending" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "大肠杆菌有机酸发酵优化",
        model: "代谢网络模型",
        strain: "大肠杆菌",
        goal: "生成速率最大化",
        createdAt: "2024-01-25 11:00",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  full: {
    key: "full",
    title: "全流程数据分析",
    breadcrumb: ["首页", "数据管理", "全流程数据分析"],
    primaryButton: "新建分析项目",
    headerTools: true,
    filters: [
      { label: "项目名称", type: "input", placeholder: "请输入项目名称" },
      { label: "菌株类型", type: "select", options: ["全部", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "分析状态", type: "select", options: ["全部", "已完成", "进行中", "待分析"] }
    ],
    columns: [
      { key: "name", label: "项目名称" },
      { key: "strain", label: "菌株类型" },
      { key: "status", label: "分析状态" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        name: "谷氨酸全流程优化分析",
        strain: "谷氨酸棒杆菌",
        status: { text: "已完成", className: "is-done" },
        createdAt: "2024-01-15 10:30",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "赖氨酸生产菌株全流程分析",
        strain: "大肠杆菌",
        status: { text: "进行中", className: "is-progress" },
        createdAt: "2024-01-18 14:20",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "乙醇发酵全流程优化",
        strain: "酵母菌",
        status: { text: "待分析", className: "is-pending" },
        createdAt: "2024-01-20 09:15",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "芽孢杆菌蛋白酶全流程分析",
        strain: "芽孢杆菌",
        status: { text: "已完成", className: "is-done" },
        createdAt: "2024-01-22 16:45",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        name: "有机酸生产菌株全流程优化",
        strain: "大肠杆菌",
        status: { text: "进行中", className: "is-progress" },
        createdAt: "2024-01-25 11:00",
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "查看结果", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  service: {
    key: "service",
    title: "工程细胞服务",
    breadcrumb: ["首页", "服务管理", "工程细胞服务"],
    primaryButton: "新增工程细胞",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "1,256", label: "工程细胞总数" },
      { icon: "i-doc", iconClass: "is-green", value: "3,892", label: "培养批次数量" },
      { icon: "i-file", iconClass: "is-yellow", value: "5,678", label: "检测记录数量" },
      { icon: "i-bars", iconClass: "is-cyan", value: "2,156", label: "工程应用数量" }
    ],
    filters: [
      { label: "细胞编号", type: "input", placeholder: "请输入细胞编号" },
      { label: "细胞名称", type: "input", placeholder: "请输入细胞名称" },
      { label: "菌株类型", type: "select", options: ["全部", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { label: "状态", type: "select", options: ["全部", "已验证", "验证中", "待验证"] }
    ],
    columns: [
      { key: "code", label: "细胞编号" },
      { key: "name", label: "细胞名称" },
      { key: "strain", label: "菌株类型" },
      { key: "gene", label: "基因型" },
      { key: "status", label: "状态" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      {
        code: "EC001",
        name: "高产L-赖氨酸工程菌",
        strain: "谷氨酸棒杆菌",
        gene: "lysC::338V, ask::P48S, hom::303V",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC002",
        name: "高效乙醇生产菌株",
        strain: "大肠杆菌",
        gene: "pdc::Δ, adh::过表达, glc::高效转运",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC003",
        name: "耐高温酵母工程菌",
        strain: "酵母菌",
        gene: "crtYB::过表达, crtI::突变, HSP::热稳定",
        status: { text: "验证中", className: "is-progress" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC004",
        name: "蛋白酶高产菌株",
        strain: "芽孢杆菌",
        gene: "aprE::强启动子, nprB::敲除抑制",
        status: { text: "待验证", className: "is-pending" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      },
      {
        code: "EC005",
        name: "有机酸工程菌",
        strain: "大肠杆菌",
        gene: "fum::Δ, ppc::过表达, frd::强化",
        status: { text: "已验证", className: "is-valid" },
        actions: [
          { label: "编辑", tone: "blue" },
          { label: "详情", tone: "blue" },
          { label: "删除", tone: "danger" }
        ]
      }
    ],
    footer: "共 5 条记录，每页 10 条"
  }
};

const systemPages = {
  "system-users": {
    key: "system-users",
    title: "用户管理",
    breadcrumb: ["首页", "系统管理", "用户管理"],
    primaryButton: "新增用户",
    headerTools: true,
    stats: [
      { icon: "i-user", iconClass: "is-blue", value: "128", label: "用户总数" },
      { icon: "i-check", iconClass: "is-green", value: "112", label: "启用用户" },
      { icon: "i-lock", iconClass: "is-yellow", value: "16", label: "冻结用户" },
      { icon: "i-clock", iconClass: "is-cyan", value: "24", label: "今日登录" }
    ],
    filters: [
      { label: "用户姓名", type: "input", placeholder: "请输入用户姓名" },
      { label: "账号", type: "input", placeholder: "请输入登录账号" },
      { label: "所属角色", type: "select", options: ["全部", "系统管理员", "研发主管", "实验员", "访客"] },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "name", label: "用户姓名" },
      { key: "account", label: "登录账号" },
      { key: "role", label: "所属角色" },
      { key: "department", label: "所属部门" },
      { key: "status", label: "状态" },
      { key: "lastLogin", label: "最后登录时间" }
    ],
    rows: [
      { id: "user-1", name: "张明", account: "zhangming", role: "系统管理员", department: "平台运维部", status: { text: "启用", className: "is-valid" }, lastLogin: "2026-05-18 09:32" },
      { id: "user-2", name: "李倩", account: "liqian", role: "研发主管", department: "菌株研发部", status: { text: "启用", className: "is-valid" }, lastLogin: "2026-05-18 08:46" },
      { id: "user-3", name: "王超", account: "wangchao", role: "实验员", department: "发酵实验室", status: { text: "停用", className: "is-pending" }, lastLogin: "2026-05-16 18:15" },
      { id: "user-4", name: "赵琳", account: "zhaolin", role: "访客", department: "合作机构", status: { text: "启用", className: "is-valid" }, lastLogin: "2026-05-18 10:05" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-roles": {
    key: "system-roles",
    title: "角色管理",
    breadcrumb: ["首页", "系统管理", "角色管理"],
    primaryButton: "新增角色",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "8", label: "角色总数" },
      { icon: "i-bars", iconClass: "is-green", value: "42", label: "权限节点数" },
      { icon: "i-user", iconClass: "is-yellow", value: "128", label: "角色关联用户" },
      { icon: "i-doc", iconClass: "is-cyan", value: "6", label: "系统内置角色" }
    ],
    filters: [
      { label: "角色名称", type: "input", placeholder: "请输入角色名称" },
      { label: "角色编码", type: "input", placeholder: "请输入角色编码" },
      { label: "类型", type: "select", options: ["全部", "系统内置", "自定义"] },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "name", label: "角色名称" },
      { key: "code", label: "角色编码" },
      { key: "type", label: "角色类型" },
      { key: "userCount", label: "关联用户数" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" }
    ],
    rows: [
      { id: "role-1", name: "系统管理员", code: "admin", type: "系统内置", userCount: "3", status: { text: "启用", className: "is-valid" }, updatedAt: "2026-05-10 14:00" },
      { id: "role-2", name: "研发主管", code: "rd_manager", type: "自定义", userCount: "12", status: { text: "启用", className: "is-valid" }, updatedAt: "2026-05-12 09:20" },
      { id: "role-3", name: "实验员", code: "lab_operator", type: "自定义", userCount: "46", status: { text: "启用", className: "is-valid" }, updatedAt: "2026-05-15 16:40" },
      { id: "role-4", name: "访客", code: "guest", type: "系统内置", userCount: "8", status: { text: "停用", className: "is-pending" }, updatedAt: "2026-05-08 11:30" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-menus": {
    key: "system-menus",
    title: "菜单管理",
    breadcrumb: ["首页", "系统管理", "菜单管理"],
    primaryButton: "新增菜单",
    headerTools: true,
    stats: [
      { icon: "i-doc", iconClass: "is-blue", value: "26", label: "菜单总数" },
      { icon: "i-table", iconClass: "is-green", value: "6", label: "一级菜单" },
      { icon: "i-bars", iconClass: "is-yellow", value: "14", label: "二级菜单" },
      { icon: "i-settings", iconClass: "is-cyan", value: "6", label: "按钮权限" }
    ],
    filters: [
      { label: "菜单名称", type: "input", placeholder: "请输入菜单名称" },
      { label: "菜单类型", type: "select", options: ["全部", "目录", "菜单", "按钮"] },
      { label: "显示状态", type: "select", options: ["全部", "显示", "隐藏"] },
      { label: "权限标识", type: "input", placeholder: "请输入权限标识" }
    ],
    columns: [
      { key: "name", label: "菜单名称" },
      { key: "type", label: "菜单类型" },
      { key: "route", label: "路由地址" },
      { key: "permission", label: "权限标识" },
      { key: "status", label: "显示状态" },
      { key: "sort", label: "排序" }
    ],
    rows: [
      { id: "menu-1", name: "系统管理", type: "目录", route: "/system", permission: "system", status: { text: "显示", className: "is-valid" }, sort: "90" },
      { id: "menu-2", name: "用户管理", type: "菜单", route: "/system/users", permission: "system:user:view", status: { text: "显示", className: "is-valid" }, sort: "91" },
      { id: "menu-3", name: "角色管理", type: "菜单", route: "/system/roles", permission: "system:role:view", status: { text: "显示", className: "is-valid" }, sort: "92" },
      { id: "menu-4", name: "平台配置", type: "菜单", route: "/system/config", permission: "system:config:view", status: { text: "隐藏", className: "is-pending" }, sort: "95" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-logs": {
    key: "system-logs",
    title: "操作日志",
    breadcrumb: ["首页", "系统管理", "操作日志"],
    primaryButton: "导出日志",
    headerTools: true,
    stats: [
      { icon: "i-clock", iconClass: "is-blue", value: "2,856", label: "日志总量" },
      { icon: "i-check", iconClass: "is-green", value: "2,801", label: "成功操作" },
      { icon: "i-warning", iconClass: "is-yellow", value: "41", label: "告警记录" },
      { icon: "i-lock", iconClass: "is-cyan", value: "14", label: "失败操作" }
    ],
    filters: [
      { label: "操作人", type: "input", placeholder: "请输入操作人" },
      { label: "操作模块", type: "select", options: ["全部", "用户管理", "角色管理", "菜单管理", "平台配置", "接口管理", "算法管理", "数据管理"] },
      { label: "操作结果", type: "select", options: ["全部", "成功", "失败"] },
      { label: "IP地址", type: "input", placeholder: "请输入IP地址" }
    ],
    columns: [
      { key: "name", label: "操作人" },
      { key: "module", label: "操作模块" },
      { key: "content", label: "操作内容" },
      { key: "ip", label: "IP地址" },
      { key: "status", label: "操作结果" },
      { key: "createdAt", label: "操作时间" }
    ],
    rows: [
      { id: "log-1", name: "张明", module: "用户管理", content: "新增用户“刘畅”", ip: "10.10.1.25", status: { text: "成功", className: "is-valid" }, createdAt: "2026-05-18 09:40" },
      { id: "log-2", name: "李倩", module: "角色管理", content: "修改角色权限“研发主管”", ip: "10.10.1.41", status: { text: "成功", className: "is-valid" }, createdAt: "2026-05-18 10:12" },
      { id: "log-3", name: "王超", module: "平台配置", content: "更新预警阈值参数", ip: "10.10.1.63", status: { text: "失败", className: "is-fail" }, createdAt: "2026-05-18 10:26" },
      { id: "log-4", name: "赵琳", module: "菜单管理", content: "调整菜单排序", ip: "10.10.1.88", status: { text: "成功", className: "is-valid" }, createdAt: "2026-05-18 11:03" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-config": {
    key: "system-config",
    title: "平台配置",
    breadcrumb: ["首页", "系统管理", "平台配置"],
    primaryButton: "新增配置",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "18", label: "配置项总数" },
      { icon: "i-check", iconClass: "is-green", value: "12", label: "已启用配置" },
      { icon: "i-warning", iconClass: "is-yellow", value: "3", label: "待确认配置" },
      { icon: "i-doc", iconClass: "is-cyan", value: "6", label: "通知模板数" }
    ],
    filters: [
      { label: "配置名称", type: "input", placeholder: "请输入配置名称" },
      { label: "配置分组", type: "select", options: ["全部", "基础配置", "安全配置", "通知配置", "存储配置"] },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] },
      { label: "配置编码", type: "input", placeholder: "请输入配置编码" }
    ],
    columns: [
      { key: "name", label: "配置名称" },
      { key: "code", label: "配置编码" },
      { key: "group", label: "配置分组" },
      { key: "value", label: "当前值" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" }
    ],
    rows: [
      { id: "config-1", name: "登录失败锁定次数", code: "security.lock.threshold", group: "安全配置", value: "5 次", status: { text: "启用", className: "is-valid" }, updatedAt: "2026-05-10 09:00" },
      { id: "config-2", name: "会话超时时间", code: "security.session.timeout", group: "安全配置", value: "30 分钟", status: { text: "启用", className: "is-valid" }, updatedAt: "2026-05-11 14:30" },
      { id: "config-3", name: "告警通知模板", code: "notify.alert.template", group: "通知配置", value: "模板A", status: { text: "启用", className: "is-valid" }, updatedAt: "2026-05-14 16:10" },
      { id: "config-4", name: "对象存储桶名称", code: "storage.bucket.name", group: "存储配置", value: "ai-test-prod", status: { text: "停用", className: "is-pending" }, updatedAt: "2026-05-16 10:45" }
    ],
    footer: "共 4 条记录，每页 10 条"
  }
};

Object.assign(analysisPages, systemPages);

Object.assign(systemPages, {
  "system-users": {
    key: "system-users",
    title: "用户管理",
    breadcrumb: ["首页", "系统管理", "用户管理"],
    primaryButton: "新增用户",
    headerTools: true,
    stats: [
      { icon: "i-user", iconClass: "is-blue", value: "4", label: "用户总数" },
      { icon: "i-check", iconClass: "is-green", value: "3", label: "启用用户" },
      { icon: "i-lock", iconClass: "is-yellow", value: "1", label: "停用用户" },
      { icon: "i-clock", iconClass: "is-cyan", value: "3", label: "今日登录" }
    ],
    filters: [
      { label: "用户名", type: "input", placeholder: "请输入用户名" },
      { label: "姓名", type: "input", placeholder: "请输入姓名" },
      { label: "手机号", type: "input", placeholder: "请输入手机号" },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "username", label: "用户名" },
      { key: "name", label: "姓名" },
      { key: "mobile", label: "手机号" },
      { key: "gender", label: "性别" },
      { key: "email", label: "邮箱" },
      { key: "organization", label: "所属机构" },
      { key: "status", label: "状态" },
      { key: "createdAt", label: "创建时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "user-1", username: "admin", name: "张明", mobile: "13800138001", gender: "男", email: "zhangming@gkexin.cn", organization: "国科信平台主管部", status: { text: "启用" }, createdAt: "2026-05-12 09:32" },
      { id: "user-2", username: "liqian", name: "李倩", mobile: "13900139002", gender: "女", email: "liqian@gkexin.cn", organization: "菌株研发中心", status: { text: "启用" }, createdAt: "2026-05-13 10:18" },
      { id: "user-3", username: "wangchao", name: "王超", mobile: "13700137003", gender: "男", email: "wangchao@gkexin.cn", organization: "发酵实验室", status: { text: "停用" }, createdAt: "2026-05-15 14:06" },
      { id: "user-4", username: "zhaolin", name: "赵琳", mobile: "13600136004", gender: "女", email: "zhaolin@gkexin.cn", organization: "合作机构管理组", status: { text: "启用" }, createdAt: "2026-05-17 08:52" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-roles": {
    key: "system-roles",
    title: "角色管理",
    breadcrumb: ["首页", "系统管理", "角色管理"],
    primaryButton: "新增角色",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "4", label: "角色总数" },
      { icon: "i-bars", iconClass: "is-green", value: "42", label: "权限节点数" },
      { icon: "i-user", iconClass: "is-yellow", value: "69", label: "关联用户数" },
      { icon: "i-doc", iconClass: "is-cyan", value: "2", label: "系统内置角色" }
    ],
    filters: [
      { label: "角色名称", type: "input", placeholder: "请输入角色名称" },
      { label: "角色编码", type: "input", placeholder: "请输入角色编码" },
      { label: "角色类型", type: "select", options: ["全部", "系统内置", "自定义"] },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "name", label: "角色名称" },
      { key: "code", label: "角色编码" },
      { key: "type", label: "角色类型" },
      { key: "userCount", label: "关联用户数" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "role-1", name: "系统管理员", code: "admin", type: "系统内置", userCount: "3", status: { text: "启用" }, updatedAt: "2026-05-10 14:00" },
      { id: "role-2", name: "研发主管", code: "rd_manager", type: "自定义", userCount: "12", status: { text: "启用" }, updatedAt: "2026-05-12 09:20" },
      { id: "role-3", name: "实验员", code: "lab_operator", type: "自定义", userCount: "46", status: { text: "启用" }, updatedAt: "2026-05-15 16:40" },
      { id: "role-4", name: "访客", code: "guest", type: "系统内置", userCount: "8", status: { text: "停用" }, updatedAt: "2026-05-08 11:30" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-menus": {
    key: "system-menus",
    title: "菜单管理",
    breadcrumb: ["首页", "系统管理", "菜单管理"],
    primaryButton: "新增菜单",
    headerTools: true,
    stats: [
      { icon: "i-doc", iconClass: "is-blue", value: "5", label: "菜单总数" },
      { icon: "i-table", iconClass: "is-green", value: "1", label: "一级菜单" },
      { icon: "i-bars", iconClass: "is-yellow", value: "3", label: "二级菜单" },
      { icon: "i-settings", iconClass: "is-cyan", value: "1", label: "按钮权限" }
    ],
    filters: [
      { label: "菜单名称", type: "input", placeholder: "请输入菜单名称" },
      { label: "菜单类型", type: "select", options: ["全部", "目录", "菜单", "按钮"] },
      { label: "显示状态", type: "select", options: ["全部", "显示", "隐藏"] },
      { label: "权限标识", type: "input", placeholder: "请输入权限标识" }
    ],
    columns: [
      { key: "name", label: "菜单名称" },
      { key: "type", label: "菜单类型" },
      { key: "route", label: "路由地址" },
      { key: "permission", label: "权限标识" },
      { key: "status", label: "显示状态" },
      { key: "sort", label: "排序" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "menu-1", name: "系统管理", type: "目录", route: "/system", permission: "system", status: { text: "显示" }, sort: "90" },
      { id: "menu-2", name: "用户管理", type: "菜单", route: "/system/users", permission: "system:user:view", status: { text: "显示" }, sort: "91" },
      { id: "menu-3", name: "角色管理", type: "菜单", route: "/system/roles", permission: "system:role:view", status: { text: "显示" }, sort: "92" },
      { id: "menu-4", name: "审核管理", type: "菜单", route: "/system/audit", permission: "system:audit:view", status: { text: "显示" }, sort: "94" },
      { id: "menu-5", name: "平台配置", type: "菜单", route: "/system/config", permission: "system:config:view", status: { text: "隐藏" }, sort: "95" },
      { id: "menu-6", name: "门户页配置", type: "菜单", route: "/system/portal-config", permission: "system:portal:view", status: { text: "显示" }, sort: "96" },
      { id: "menu-7", name: "导出日志", type: "按钮", route: "-", permission: "system:log:export", status: { text: "显示" }, sort: "97" }
    ],
    footer: "共 5 条记录，每页 10 条"
  },
  "system-logs": {
    key: "system-logs",
    title: "操作日志",
    breadcrumb: ["首页", "系统管理", "操作日志"],
    primaryButton: "导出日志",
    headerTools: true,
    stats: [
      { icon: "i-clock", iconClass: "is-blue", value: "4", label: "日志总量" },
      { icon: "i-check", iconClass: "is-green", value: "3", label: "成功操作" },
      { icon: "i-warning", iconClass: "is-yellow", value: "1", label: "异常记录" },
      { icon: "i-lock", iconClass: "is-cyan", value: "1", label: "失败操作" }
    ],
    filters: [
      { label: "操作人", type: "input", placeholder: "请输入操作人" },
      { label: "操作模块", type: "select", options: ["全部", "用户管理", "角色管理", "菜单管理", "审核管理", "平台配置", "门户页配置"] },
      { label: "操作结果", type: "select", options: ["全部", "成功", "失败"] },
      { label: "IP地址", type: "input", placeholder: "请输入IP地址" }
    ],
    columns: [
      { key: "name", label: "操作人" },
      { key: "module", label: "操作模块" },
      { key: "content", label: "操作内容" },
      { key: "ip", label: "IP地址" },
      { key: "status", label: "操作结果" },
      { key: "createdAt", label: "操作时间" }
    ],
    rows: [
      { id: "log-1", name: "张明", module: "用户管理", content: "新增用户“刘畅”", ip: "10.10.1.25", status: { text: "成功" }, createdAt: "2026-05-18 09:40" },
      { id: "log-2", name: "李倩", module: "角色管理", content: "修改角色权限“研发主管”", ip: "10.10.1.41", status: { text: "成功" }, createdAt: "2026-05-18 10:12" },
      { id: "log-3", name: "王超", module: "平台配置", content: "更新预警阈值参数", ip: "10.10.1.63", status: { text: "失败" }, createdAt: "2026-05-18 10:26" },
      { id: "log-4", name: "赵琳", module: "菜单管理", content: "调整菜单排序", ip: "10.10.1.88", status: { text: "成功" }, createdAt: "2026-05-18 11:03" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-config": {
    key: "system-config",
    title: "平台配置",
    breadcrumb: ["首页", "系统管理", "平台配置"],
    primaryButton: "新增配置",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "4", label: "配置项总数" },
      { icon: "i-check", iconClass: "is-green", value: "3", label: "启用配置" },
      { icon: "i-warning", iconClass: "is-yellow", value: "1", label: "停用配置" },
      { icon: "i-doc", iconClass: "is-cyan", value: "2", label: "基础配置" }
    ],
    filters: [
      { label: "配置名称", type: "input", placeholder: "请输入配置名称" },
      { label: "配置分组", type: "select", options: ["全部", "基础配置", "安全配置", "通知配置", "存储配置"] },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] },
      { label: "配置编码", type: "input", placeholder: "请输入配置编码" }
    ],
    columns: [
      { key: "name", label: "配置名称" },
      { key: "code", label: "配置编码" },
      { key: "group", label: "配置分组" },
      { key: "value", label: "当前值" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "config-1", name: "登录失败锁定次数", code: "security.lock.threshold", group: "安全配置", value: "5 次", status: { text: "启用" }, updatedAt: "2026-05-10 09:00" },
      { id: "config-2", name: "会话超时时间", code: "security.session.timeout", group: "安全配置", value: "30 分钟", status: { text: "启用" }, updatedAt: "2026-05-11 14:30" },
      { id: "config-3", name: "告警通知模板", code: "notify.alert.template", group: "通知配置", value: "模板A", status: { text: "启用" }, updatedAt: "2026-05-14 16:10" },
      { id: "config-4", name: "对象存储桶名称", code: "storage.bucket.name", group: "存储配置", value: "ai-test-prod", status: { text: "停用" }, updatedAt: "2026-05-16 10:45" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-audit": {
    key: "system-audit",
    title: "审核入库管理",
    breadcrumb: ["主题应用", "工程细胞入库审核"],
    primaryButton: "",
    headerTools: true,
    stats: [
      { icon: "i-clock", iconClass: "is-yellow", value: "2", label: "待审核记录" },
      { icon: "i-check", iconClass: "is-green", value: "1", label: "已入库记录" },
      { icon: "i-warning", iconClass: "is-cyan", value: "1", label: "审核不通过" },
      { icon: "i-doc", iconClass: "is-blue", value: "4", label: "总记录数" }
    ],
    filters: [
      { label: "审核标题", type: "input", placeholder: "请输入审核标题" },
      { label: "审核类型", type: "select", options: ["全部", "数据入库", "服务发布", "门户内容", "权限变更"] },
      { label: "审核状态", type: "select", options: ["全部", "待审核", "审核中", "已通过", "已退回"] },
      { label: "提交人", type: "input", placeholder: "请输入提交人" }
    ],
    columns: [
      { key: "submittedAt", label: "提交时间" },
      { key: "name", label: "数据名称" },
      { key: "dataType", label: "数据类型" },
      { key: "flowType", label: "流程类型" },
      { key: "status", label: "审核状态" },
      { key: "storageResult", label: "入库结果" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "audit-1", materialType: "cell", name: "谷氨酸高产工程菌株", alias: "EC-GLU-001", dataType: "菌株基础数据", flowType: "工程细胞数据上传", type: "数据入库", submitter: "李倩", reviewer: "张明", status: { text: "审核中" }, storageResult: "待审核入库", submittedAt: "2026-04-15 14:32" },
      { id: "audit-2", materialType: "cell", name: "赖氨酸高产工程菌株", alias: "EC-LYS-018", dataType: "可视化文件", flowType: "工程细胞数据上传", type: "数据入库", submitter: "王超", reviewer: "李倩", status: { text: "审核通过" }, storageResult: "已完成入库", submittedAt: "2026-04-12 16:45" },
      { id: "audit-3", materialType: "genotype", name: "谷氨酸菌株GPA数据", alias: "GPA-20260415", dataType: "关联分析结果", flowType: "基因型-表型数据提交", type: "数据入库", submitter: "赵琳", reviewer: "张明", status: { text: "待审核" }, storageResult: "待审核入库", submittedAt: "2026-04-11 10:18" },
      { id: "audit-4", materialType: "omics", name: "多组学代谢网络模型", alias: "GSMM-v2", dataType: "模型文件", flowType: "组学数据入库", type: "数据入库", submitter: "陈晨", reviewer: "张明", status: { text: "审核不通过" }, storageResult: "已驳回", submittedAt: "2026-04-09 09:20" },
      { id: "audit-5", materialType: "process", name: "发酵过程批次数据", alias: "FB20260412", dataType: "过程时序数据", flowType: "发酵过程数据同步", type: "数据入库", submitter: "周宁", reviewer: "李倩", status: { text: "审核中" }, storageResult: "待审核入库", submittedAt: "2026-04-08 13:36" },
      { id: "audit-6", materialType: "nutrition", name: "培养基营养组分方案", alias: "MED-OPT-007", dataType: "配方数据", flowType: "培养营养数据上传", type: "数据入库", submitter: "刘洋", reviewer: "张明", status: { text: "审核通过" }, storageResult: "已完成入库", submittedAt: "2026-04-06 15:04" }
    ],
    footer: "共 6 条记录，每页 10 条"
  },
  "system-portal-config": {
    key: "system-portal-config",
    title: "门户页配置",
    breadcrumb: ["首页", "系统管理", "门户页配置"],
    primaryButton: "新增门户配置",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "9", label: "配置项总数" },
      { icon: "i-check", iconClass: "is-green", value: "8", label: "已启用" },
      { icon: "i-warning", iconClass: "is-yellow", value: "1", label: "草稿项" },
      { icon: "i-doc", iconClass: "is-cyan", value: "9", label: "门户区块" }
    ],
    filters: [
      { label: "配置名称", type: "input", placeholder: "请输入配置名称" },
      { label: "页面区块", type: "select", options: ["全部", "首页首屏", "平台价值", "整体流程", "核心数据库", "数据总览", "场景应用", "工具算法", "合作案例", "页脚与导航"] },
      { label: "发布状态", type: "select", options: ["全部", "启用", "草稿", "停用"] },
      { label: "更新人", type: "input", placeholder: "请输入更新人" }
    ],
    columns: [
      { key: "name", label: "配置名称" },
      { key: "section", label: "页面区块" },
      { key: "contentType", label: "内容类型" },
      { key: "owner", label: "更新人" },
      { key: "status", label: "发布状态" },
      { key: "updatedAt", label: "更新时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "portal-1", name: "首页首屏与门户概览", section: "首页首屏", contentType: "文案配置", owner: "张明", status: { text: "启用" }, updatedAt: "2026-05-18 10:12" },
      { id: "portal-2", name: "平台价值定位卡片", section: "平台价值", contentType: "卡片配置", owner: "赵琳", status: { text: "启用" }, updatedAt: "2026-05-18 11:36" },
      { id: "portal-3", name: "整体流程步骤说明", section: "整体流程", contentType: "步骤配置", owner: "李倩", status: { text: "启用" }, updatedAt: "2026-05-17 17:28" },
      { id: "portal-4", name: "核心数据库展示内容", section: "核心数据库", contentType: "卡片配置", owner: "王超", status: { text: "启用" }, updatedAt: "2026-05-16 15:04" },
      { id: "portal-5", name: "数据总览说明与指标", section: "数据总览", contentType: "图文配置", owner: "张明", status: { text: "启用" }, updatedAt: "2026-05-15 14:20" },
      { id: "portal-6", name: "场景应用内容编排", section: "场景应用", contentType: "场景配置", owner: "赵琳", status: { text: "草稿" }, updatedAt: "2026-05-15 10:08" },
      { id: "portal-7", name: "工具算法能力卡片", section: "工具算法", contentType: "卡片配置", owner: "李倩", status: { text: "启用" }, updatedAt: "2026-05-14 18:05" },
      { id: "portal-8", name: "合作案例展示信息", section: "合作案例", contentType: "案例配置", owner: "王超", status: { text: "启用" }, updatedAt: "2026-05-14 16:42" },
      { id: "portal-9", name: "页脚导航与联系信息", section: "页脚与导航", contentType: "链接配置", owner: "张明", status: { text: "启用" }, updatedAt: "2026-05-14 09:30" }
    ],
    footer: "共 9 条记录，每页 10 条"
  },
  "system-apis": {
    key: "system-apis",
    title: "接口管理",
    breadcrumb: ["首页", "系统管理", "接口管理"],
    primaryButton: "新增接口",
    headerTools: true,
    stats: [
      { icon: "i-doc", iconClass: "is-blue", value: "4", label: "接口总数" },
      { icon: "i-check", iconClass: "is-green", value: "3", label: "启用接口" },
      { icon: "i-clock", iconClass: "is-yellow", value: "3", label: "今日调用接口" },
      { icon: "i-warning", iconClass: "is-cyan", value: "1", label: "停用接口" }
    ],
    filters: [
      { label: "接口名称", type: "input", placeholder: "请输入接口名称" },
      { label: "接口编码", type: "input", placeholder: "请输入接口编码" },
      { label: "请求方式", type: "select", options: ["全部", "GET", "POST", "PUT", "DELETE"] },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "name", label: "接口名称" },
      { key: "code", label: "接口编码" },
      { key: "method", label: "请求方式" },
      { key: "path", label: "接口地址" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "api-1", name: "菌株基础信息接口", code: "api_cell_base", method: "GET", path: "/api/cells/base", status: { text: "启用" }, updatedAt: "2026-05-18 09:20" },
      { id: "api-2", name: "发酵批次写入接口", code: "api_batch_write", method: "POST", path: "/api/batches", status: { text: "启用" }, updatedAt: "2026-05-19 14:05" },
      { id: "api-3", name: "分析结果同步接口", code: "api_result_sync", method: "PUT", path: "/api/analysis/result", status: { text: "停用" }, updatedAt: "2026-05-20 11:42" },
      { id: "api-4", name: "对象存储回调接口", code: "api_storage_callback", method: "POST", path: "/api/storage/callback", status: { text: "启用" }, updatedAt: "2026-05-21 16:18" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-algorithms": {
    key: "system-algorithms",
    title: "算法管理",
    breadcrumb: ["首页", "系统管理", "算法管理"],
    primaryButton: "新增算法",
    headerTools: true,
    stats: [
      { icon: "i-settings", iconClass: "is-blue", value: "4", label: "算法总数" },
      { icon: "i-check", iconClass: "is-green", value: "3", label: "启用算法" },
      { icon: "i-bars", iconClass: "is-yellow", value: "3", label: "算法类型数" },
      { icon: "i-warning", iconClass: "is-cyan", value: "1", label: "停用算法" }
    ],
    filters: [
      { label: "算法名称", type: "input", placeholder: "请输入算法名称" },
      { label: "算法类型", type: "select", options: ["全部", "关联分析", "预测分析", "优化分析", "质控分析"] },
      { label: "版本", type: "input", placeholder: "请输入算法版本" },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "name", label: "算法名称" },
      { key: "type", label: "算法类型" },
      { key: "version", label: "版本" },
      { key: "packageName", label: "算法代码包" },
      { key: "runtime", label: "运行环境" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "algo-1", name: "基因型关联分析算法", type: "关联分析", version: "v2.3.1", packageName: "gene_relation_v2.3.1.zip", packageSize: "18.6 MB", runtime: "Python", status: { text: "启用" }, updatedAt: "2026-05-17 10:08" },
      { id: "algo-2", name: "产量区间预测算法", type: "预测分析", version: "v1.8.4", packageName: "yield_forecast_v1.8.4.zip", packageSize: "26.3 MB", runtime: "Python", status: { text: "启用" }, updatedAt: "2026-05-18 15:36" },
      { id: "algo-3", name: "发酵参数寻优算法", type: "优化分析", version: "v3.0.0", packageName: "ferment_opt_v3.0.0.tar.gz", packageSize: "42.8 MB", runtime: "Java", status: { text: "停用" }, updatedAt: "2026-05-20 09:18" },
      { id: "algo-4", name: "组学数据质控算法", type: "质控分析", version: "v1.2.6", packageName: "omics_qc_v1.2.6.zip", packageSize: "15.1 MB", runtime: "R", status: { text: "启用" }, updatedAt: "2026-05-21 13:52" }
    ],
    footer: "共 4 条记录，每页 10 条"
  },
  "system-datasets": {
    key: "system-datasets",
    title: "数据管理",
    breadcrumb: ["首页", "系统管理", "数据管理"],
    primaryButton: "新增数据",
    headerTools: true,
    stats: [
      { icon: "i-table", iconClass: "is-blue", value: "4", label: "数据总数" },
      { icon: "i-check", iconClass: "is-green", value: "3", label: "启用数据" },
      { icon: "i-doc", iconClass: "is-yellow", value: "4", label: "数据分类数" },
      { icon: "i-warning", iconClass: "is-cyan", value: "1", label: "停用数据" }
    ],
    filters: [
      { label: "数据名称", type: "input", placeholder: "请输入数据名称" },
      { label: "数据分类", type: "select", options: ["全部", "过程数据", "组学数据", "模型数据", "基础数据"] },
      { label: "数据源", type: "input", placeholder: "请输入数据源" },
      { label: "状态", type: "select", options: ["全部", "启用", "停用"] }
    ],
    columns: [
      { key: "name", label: "数据名称" },
      { key: "category", label: "数据分类" },
      { key: "source", label: "数据源" },
      { key: "format", label: "存储格式" },
      { key: "status", label: "状态" },
      { key: "updatedAt", label: "更新时间" },
      { key: "actions", label: "操作" }
    ],
    rows: [
      { id: "data-1", name: "发酵过程批次数据", category: "过程数据", source: "实验平台", format: "Parquet", status: { text: "启用" }, updatedAt: "2026-05-16 09:26" },
      { id: "data-2", name: "菌株多组学整合数据", category: "组学数据", source: "组学中心", format: "CSV", status: { text: "启用" }, updatedAt: "2026-05-18 11:40" },
      { id: "data-3", name: "算法训练样本库", category: "模型数据", source: "算法中心", format: "JSON", status: { text: "停用" }, updatedAt: "2026-05-19 17:12" },
      { id: "data-4", name: "主题库编码字典", category: "基础数据", source: "系统维护", format: "XLSX", status: { text: "启用" }, updatedAt: "2026-05-21 08:55" }
    ],
    footer: "共 4 条记录，每页 10 条"
  }
});

const systemFormConfigs = {
  "system-users": {
    title: "用户",
    fields: [
      { name: "username", label: "用户名", placeholder: "请输入用户名" },
      { name: "name", label: "姓名", placeholder: "请输入姓名" },
      { name: "role", label: "所属角色", type: "select", options: ["系统管理员", "研发主管", "实验员", "访客"] },
      { name: "department", label: "所属部门", placeholder: "请输入所属部门" },
      { name: "mobile", label: "手机号", placeholder: "请输入手机号" },
      { name: "gender", label: "性别", type: "select", options: ["男", "女", "未知"] },
      { name: "email", label: "邮箱", placeholder: "请输入邮箱" },
      { name: "organization", label: "所属机构", placeholder: "请输入所属机构" },
      { name: "statusText", label: "状态", type: "select", options: ["启用", "停用"] }
    ]
  },
  "system-roles": {
    title: "角色",
    fields: [
      { name: "name", label: "角色名称", placeholder: "请输入角色名称" },
      { name: "code", label: "角色编码", placeholder: "请输入角色编码" },
      { name: "type", label: "角色类型", type: "select", options: ["系统内置", "自定义"] },
      { name: "statusText", label: "状态", type: "select", options: ["启用", "停用"] }
    ]
  },
  "system-menus": {
    title: "菜单",
    fields: [
      { name: "name", label: "菜单名称", placeholder: "请输入菜单名称" },
      { name: "type", label: "菜单类型", type: "select", options: ["目录", "菜单", "按钮"] },
      { name: "route", label: "路由地址", placeholder: "请输入路由地址" },
      { name: "permission", label: "权限标识", placeholder: "请输入权限标识" },
      { name: "statusText", label: "显示状态", type: "select", options: ["显示", "隐藏"] },
      { name: "sort", label: "排序", placeholder: "请输入排序值" }
    ]
  },
  "system-config": {
    title: "配置",
    fields: [
      { name: "name", label: "配置名称", placeholder: "请输入配置名称" },
      { name: "code", label: "配置编码", placeholder: "请输入配置编码" },
      { name: "group", label: "配置分组", type: "select", options: ["基础配置", "安全配置", "通知配置", "存储配置"] },
      { name: "value", label: "当前值", placeholder: "请输入当前值" },
      { name: "statusText", label: "状态", type: "select", options: ["启用", "停用"] }
    ]
  },
  "system-apis": {
    title: "接口",
    fields: [
      { name: "name", label: "接口名称", placeholder: "请输入接口名称" },
      { name: "code", label: "接口编码", placeholder: "请输入接口编码" },
      { name: "method", label: "请求方式", type: "select", options: ["GET", "POST", "PUT", "DELETE"] },
      { name: "path", label: "接口地址", placeholder: "请输入接口地址" },
      { name: "statusText", label: "状态", type: "select", options: ["启用", "停用"] }
    ]
  },
  "system-algorithms": {
    title: "算法",
    fields: [
      { name: "name", label: "算法名称", placeholder: "请输入算法名称" },
      { name: "type", label: "算法类型", type: "select", options: ["关联分析", "预测分析", "优化分析", "质控分析"] },
      { name: "version", label: "版本", placeholder: "请输入算法版本" },
      { name: "packageName", label: "算法代码包", type: "file", accept: ".zip,.tar,.gz,.rar,.7z", placeholder: "支持 zip / tar.gz / rar / 7z，单文件不超过 200MB" },
      { name: "runtime", label: "运行环境", type: "select", options: ["Python", "Java", "R", "MATLAB"] },
      { name: "statusText", label: "状态", type: "select", options: ["启用", "停用"] }
    ]
  },
  "system-datasets": {
    title: "数据",
    fields: [
      { name: "name", label: "数据名称", placeholder: "请输入数据名称" },
      { name: "category", label: "数据分类", type: "select", options: ["过程数据", "组学数据", "模型数据", "基础数据"] },
      { name: "source", label: "数据源", placeholder: "请输入数据源" },
      { name: "format", label: "存储格式", type: "select", options: ["CSV", "JSON", "Parquet", "XLSX"] },
      { name: "statusText", label: "状态", type: "select", options: ["启用", "停用"] }
    ]
  },
  "system-audit": {
    title: "入库审核记录",
    fields: [
      { name: "name", label: "材料名称", placeholder: "请输入材料或数据名称" },
      { name: "alias", label: "材料编号", placeholder: "请输入材料编号或数据编号" },
      { name: "materialType", label: "主题类型", type: "select", options: ["cell", "genotype", "omics", "process", "nutrition"] },
      { name: "dataType", label: "数据类型", placeholder: "请输入数据类型" },
      { name: "flowType", label: "流程类型", placeholder: "请输入流程类型" },
      { name: "submitter", label: "提交人", placeholder: "请输入提交人" },
      { name: "reviewer", label: "审核人", placeholder: "请输入审核人" },
      { name: "statusText", label: "审核状态", type: "select", options: ["待审核", "审核中", "审核通过", "审核不通过"] },
      { name: "storageResult", label: "入库结果", type: "select", options: ["待审核入库", "已完成入库", "已驳回"] }
    ]
  },
  "system-portal-config": {
    title: "门户配置",
    fields: [
      { name: "name", label: "配置名称", placeholder: "请输入配置名称" },
      { name: "section", label: "页面区块", type: "select", options: ["首页首屏", "平台价值", "整体流程", "核心数据库", "数据总览", "场景应用", "工具算法", "合作案例", "页脚与导航"] },
      { name: "contentType", label: "内容类型", type: "select", options: ["文案配置", "卡片配置", "步骤配置", "图文配置", "场景配置", "案例配置", "链接配置"] },
      { name: "owner", label: "更新人", placeholder: "请输入更新人" },
      { name: "statusText", label: "发布状态", type: "select", options: ["启用", "草稿", "停用"] }
    ]
  }
};

Object.assign(analysisPages, systemPages);

const commonFieldRules = {
  username: "4-20位字母、数字或下划线，建议唯一",
  name: "2-50字符，必填项建议同类唯一",
  mobile: "11位中国大陆手机号，1开头",
  email: "合法邮箱格式，最多64字符",
  organization: "2-50字符，可填机构/高校/企业名称",
  statusText: "仅可选择当前枚举状态",
  code: "2-30字符，支持字母、数字、中横线、下划线，建议唯一",
  description: "可选，最多500字符，特殊字符提交后需转义展示",
  threshold: "0-1之间的小数，默认0.05，最多6位小数",
  datasetName: "2-50字符，建议同项目下唯一",
  datasetType: "仅支持 VCF、BED、FAM、PHE、CSV",
  datasetSize: "正数，单位MB/GB，需与真实文件大小一致"
};

const labelFieldRules = {
  "用户名": "4-20位字母、数字或下划线，建议唯一",
  "姓名": "2-20字符，支持中文或英文",
  "所属机构": "2-50字符，可填机构/高校/企业名称",
  "密码": "8-20位，需包含字母、数字和特殊字符",
  "新密码": "8-20位，需包含字母、数字和特殊字符",
  "确认密码": "必须与上一次输入的密码一致",
  "图片验证码": "4位验证码，刷新后旧验证码失效",
  "验证码": "4位验证码，大小写不敏感",
  "批次号": "必填，只能选择已有批次",
  "录入时间": "必填，日期时间格式，不得晚于当前时间24小时以上",
  "录入人员": "必填，2-20字符",
  "开始发酵时间": "必填，不得晚于结束发酵时间",
  "结束发酵时间": "必填，不得早于开始发酵时间",
  "发酵物名称": "必填，2-50字符",
  "项目名称": "必填，2-50字符，建议唯一",
  "项目描述": "可选，最多500字符",
  "项目分析描述": "可选，最多500字符",
  "模型名称": "必填，2-50字符，建议唯一",
  "模型描述": "可选，最多500字符",
  "菌株类型": "必填，只能选择列表中的菌株类型",
  "表型类型": "必填，只能选择产量、生长速率、底物利用率",
  "分析方法": "必填，只能选择当前枚举方法",
  "显著性阈值": "必填，0-1之间的小数，默认0.05",
  "数据集名称": "必填，2-50字符",
  "数据类型": "必填，需与上传文件后缀一致",
  "数据大小": "必填，正数，示例：256.78 MB",
  "模型来源": "必填，文件导入时建议同步上传模型文件",
  "模型类型": "必填，只能选择当前枚举模型",
  "优化目标": "必填，只能选择当前枚举目标",
  "选择分析模块": "必选，至少选择1个分析模块",
  "手机号": "必填，11位中国大陆手机号",
  "邮箱": "必填，合法邮箱格式，最多64字符",
  "性别": "必填，只能选择男、女、未知",
  "角色名称": "必填，2-30字符，建议唯一",
  "角色编码": "必填，2-30位小写字母、数字或下划线，建议唯一",
  "角色类型": "必填，只能选择系统内置或自定义",
  "菜单名称": "必填，2-30字符，同层级建议唯一",
  "菜单类型": "必填，只能选择目录、菜单、按钮",
  "路由地址": "目录/菜单以/开头，按钮可为-",
  "权限标识": "必填，建议格式 module:resource:action",
  "显示状态": "必填，只能选择显示或隐藏",
  "排序": "必填，0-999整数",
  "配置名称": "必填，2-50字符，建议唯一",
  "配置编码": "必填，建议格式 group.name.key，建议唯一",
  "配置分组": "必填，只能选择当前配置分组",
  "当前值": "必填，1-500字符，按配置类型进一步限制",
  "状态": "必填，只能选择当前枚举状态"
};

const serviceFieldRules = {
  code: "必填，2-30字符，支持字母、数字、中横线、下划线，建议唯一",
  name: "必填，2-50字符",
  strain: "必填，只能选择当前菌株类型",
  statusText: "必填，只能选择已验证、验证中、待验证",
  gene: "可选，最多500字符",
  description: "可选，最多500字符",
  cultureCode: "必填，2-30字符，建议唯一",
  cultureMode: "必填，只能选择当前培养方式",
  temperature: "必填，0-100，最多1位小数，单位℃",
  ph: "必填，0-14，最多2位小数",
  rpm: "必填，0-2000整数，单位rpm",
  cultureStatus: "必填，只能选择已完成、优化中、待验证",
  mediumFormula: "可选，最多1000字符",
  optimizationRecord: "可选，最多1000字符",
  testCode: "必填，2-30字符，建议唯一",
  testItem: "必填，只能选择当前检测项目",
  testMethod: "必填，只能选择当前检测方法",
  cellActivity: "必填，只能选择高、中、低",
  cellPurity: "必填，只能选择高、中、低",
  testResult: "必填，只能选择符合预期、需优化、待复核",
  testDescription: "可选，最多500字符",
  applicationCode: "必填，2-30字符，建议唯一",
  scenarioType: "必填，只能选择当前应用场景类型",
  applicationField: "必填，2-50字符",
  applicationStatus: "必填，只能选择已验证、验证中、待验证",
  applicationContent: "可选，最多1000字符"
};

const systemFieldRules = {
  "system-users": {
    username: "必填，4-20位字母、数字或下划线，建议唯一",
    name: "必填，2-20字符，支持中文或英文",
    mobile: "必填，11位中国大陆手机号",
    gender: "必填，只能选择男、女、未知",
    email: "必填，合法邮箱格式，最多64字符",
    organization: "必填，2-50字符",
    statusText: "必填，只能选择启用或停用"
  },
  "system-roles": {
    name: "必填，2-30字符，建议唯一",
    code: "必填，2-30位小写字母、数字或下划线，建议唯一",
    type: "必填，只能选择系统内置或自定义",
    statusText: "必填，只能选择启用或停用"
  },
  "system-menus": {
    name: "必填，2-30字符，同层级建议唯一",
    type: "必填，只能选择目录、菜单、按钮",
    route: "目录/菜单以/开头，按钮可为-",
    permission: "必填，建议格式 module:resource:action",
    statusText: "必填，只能选择显示或隐藏",
    sort: "必填，0-999整数"
  },
  "system-config": {
    name: "必填，2-50字符，建议唯一",
    code: "必填，建议格式 group.name.key，建议唯一",
    group: "必填，只能选择当前配置分组",
    value: "必填，1-500字符，按配置类型进一步限制",
    statusText: "必填，只能选择启用或停用"
  },
  "system-audit": {
    name: "必填，2-80字符，建议明确描述审核对象",
    alias: "可选，建议填写材料编号或数据编号",
    materialType: "必填，只能选择当前主题类型",
    dataType: "必填，建议明确文件或数据类型",
    flowType: "必填，建议与入库流程名称一致",
    submitter: "必填，2-20字符",
    reviewer: "必填，2-20字符",
    statusText: "必填，只能选择待审核、审核中、审核通过或审核不通过",
    storageResult: "必填，只能选择待审核入库、已完成入库或已驳回"
  },
  "system-portal-config": {
    name: "必填，2-50字符，建议与门户区块名称一致",
    section: "必填，只能选择当前门户页面区块",
    contentType: "必填，只能选择当前内容类型",
    owner: "必填，2-20字符",
    statusText: "必填，只能选择启用、草稿或停用"
  },
  "system-apis": {
    name: "必填，2-50字符，建议与业务接口名称一致",
    code: "必填，2-40字符，建议使用 api_ 前缀英文编码",
    method: "必填，只能选择 GET、POST、PUT、DELETE 中的一项",
    path: "必填，应以 /api/ 开头，建议与服务路由保持一致",
    statusText: "必填，只能选择启用或停用"
  },
  "system-algorithms": {
    name: "必填，2-50字符，建议与算法服务名称保持一致",
    type: "必填，只能选择当前枚举中的算法类型",
    version: "必填，建议采用 v主版本.次版本.修订号 格式",
    runtime: "必填，只能选择当前支持的运行环境",
    statusText: "必填，只能选择启用或停用"
  },
  "system-datasets": {
    name: "必填，2-50字符，建议与数据资产名称保持一致",
    category: "必填，只能选择当前枚举中的数据分类",
    source: "必填，2-50字符，填写真实数据来源系统或部门",
    format: "必填，只能选择当前支持的存储格式",
    statusText: "必填，只能选择启用或停用"
  }
};

const sensorLabelRules = {
  "温度(℃)": "必填，25.0-38.0，预警值37.0，最多1位小数",
  "罐内压力(kPa)": "必填，0.8-1.5，预警值1.4，最多1位小数",
  "搅拌速度(rpm)": "必填，100-500整数，预警值450",
  "气体流量(L/min)": "必填，0.5-3.0，预警值2.8，最多1位小数",
  "pH值": "必填，6.00-8.00，预警值7.50，最多2位小数",
  "溶解氧浓度(mg/L)": "必填，2.0-8.0，预警值7.0，最多1位小数",
  "溶解CO₂浓度(mg/L)": "必填，10.0-100.0，预警值90.0，最多1位小数",
  "排气O₂分压(%)": "必填，15.0-21.0，预警值20.0，最多1位小数",
  "排气CO₂分压(%)": "必填，0.03-0.10，预警值0.09，最多2位小数",
  "谷氨酸(g/L)": "必填，0-50，最多2位小数",
  "葡萄糖(g/L)": "必填，0-100，最多2位小数",
  "丙酮酸(g/L)": "必填，0-10，最多2位小数",
  "甘氨酸(g/L)": "必填，0-5，最多2位小数",
  "谷氨酰胺(g/L)": "必填，0-8，最多2位小数",
  "精氨酸(g/L)": "必填，0-5，最多2位小数",
  "组氨酸(g/L)": "必填，0-3，最多2位小数",
  "色氨酸(g/L)": "必填，0-4，最多2位小数",
  "乳酸(g/L)": "必填，0-15，最多2位小数",
  "铵根离子(mmol/L)": "必填，0-200，最多2位小数",
  "柠檬酸(g/L)": "必填，0-10，最多2位小数",
  "亮氨酸(g/L)": "必填，0-6，最多2位小数",
  "异亮氨酸(g/L)": "必填，0-4，最多2位小数",
  "甲硫氨酸(g/L)": "必填，0-3，最多2位小数",
  "半胱氨酸(g/L)": "必填，0-2，最多2位小数",
  "赖氨酸(g/L)": "必填，0-8，最多2位小数"
};

function renderRequirementHint(rule, tone = "") {
  if (!rule) {
    return "";
  }
  const items = Array.isArray(rule) ? rule : [rule];
  return `
    <p class="field-rule-hint ${tone ? `is-${tone}` : ""}">
      <span class="header-icon">${icon("i-info")}</span>
      <span>${items.map((item) => escapeHtml(item)).join("；")}</span>
    </p>
  `;
}

function getFieldRule(field = {}, source = "") {
  if (field.rule) {
    return field.rule;
  }
  const rawName = String(field.name || "").replace(/^analysis-/, "");
  if (source && systemFieldRules[source]?.[rawName]) {
    return systemFieldRules[source][rawName];
  }
  return commonFieldRules[rawName] || labelFieldRules[field.label] || sensorLabelRules[field.label] || "";
}

const geneProjectLibrary = {
  "gene-lysine": {
    id: "gene-lysine",
    name: "高产L-赖氨酸菌株筛选",
    strain: "大肠杆菌",
    phenotype: "产量",
    method: "GWAS分析",
    threshold: "0.05",
    status: "已完成",
    samples: "1,256",
    sites: "48",
    createdAt: "2024-01-15 10:30",
    updatedAt: "2024-01-16 16:20",
    description:
      "针对L-赖氨酸高产菌株进行全基因组关联分析，筛选与产量相关的显著位点，为后续菌株改造提供分子标记。",
    metrics: [
      { label: "总样本数量", value: "1,256" },
      { label: "显著位点数量", value: "48" },
      { label: "高度显著数量", value: "12" },
      { label: "平均P值", value: "0.023" }
    ],
    points: [
      { x: 6, y: 28 }, { x: 10, y: 35 }, { x: 14, y: 18 }, { x: 18, y: 54, highlight: true },
      { x: 24, y: 22 }, { x: 28, y: 31 }, { x: 33, y: 47, highlight: true }, { x: 37, y: 26 },
      { x: 42, y: 34 }, { x: 47, y: 16 }, { x: 52, y: 58, highlight: true }, { x: 57, y: 24 },
      { x: 62, y: 36 }, { x: 67, y: 20 }, { x: 72, y: 43, highlight: true }, { x: 78, y: 30 },
      { x: 84, y: 48, highlight: true }, { x: 90, y: 21 }
    ],
    pValueBars: [12, 18, 30, 44, 52, 38, 28, 18, 10],
    chromosomeBars: [
      { label: "Chr1", value: 18 },
      { label: "Chr2", value: 24 },
      { label: "Chr3", value: 12 },
      { label: "Chr4", value: 35 },
      { label: "Chr5", value: 28 },
      { label: "Chr6", value: 16 },
      { label: "Chr7", value: 22 },
      { label: "Chr8", value: 14 }
    ],
    snps: [
      { rank: 1, chromosome: "Chr4", position: "2,345,678", snpId: "rsLys0001", pValue: "2.3e-08", effect: "0.81", gene: "lysA" },
      { rank: 2, chromosome: "Chr7", position: "1,023,546", snpId: "rsLys0002", pValue: "3.1e-08", effect: "0.76", gene: "metB" },
      { rank: 3, chromosome: "Chr2", position: "845,233", snpId: "rsLys0003", pValue: "4.5e-08", effect: "0.72", gene: "thrC" },
      { rank: 4, chromosome: "Chr5", position: "3,112,890", snpId: "rsLys0004", pValue: "6.2e-08", effect: "0.68", gene: "dapA" },
      { rank: 5, chromosome: "Chr1", position: "654,782", snpId: "rsLys0005", pValue: "7.6e-08", effect: "0.64", gene: "asd" },
      { rank: 6, chromosome: "Chr8", position: "2,904,118", snpId: "rsLys0006", pValue: "9.5e-08", effect: "0.61", gene: "pyc" },
      { rank: 7, chromosome: "Chr6", position: "1,765,903", snpId: "rsLys0007", pValue: "1.2e-07", effect: "0.58", gene: "ppc" },
      { rank: 8, chromosome: "Chr3", position: "915,420", snpId: "rsLys0008", pValue: "1.4e-07", effect: "0.55", gene: "zwf" },
      { rank: 9, chromosome: "Chr5", position: "1,449,721", snpId: "rsLys0009", pValue: "1.9e-07", effect: "0.51", gene: "gdhA" },
      { rank: 10, chromosome: "Chr4", position: "3,582,116", snpId: "rsLys0010", pValue: "2.4e-07", effect: "0.49", gene: "lysC" }
    ],
    prediction: {
      combo: "lysA + metB + thrC",
      yield: "12.56 g/L",
      interval: "11.23 - 13.89 g/L",
      confidence: "92.5%"
    },
    dataset: {
      name: "L-赖氨酸表型型数据_V2",
      type: "VCF",
      size: "256.78 MB",
      sites: "2,456,789",
      uploadedAt: "2024-01-15 10:35:00",
      preview: [
        { chrom: "1", pos: "10231", id: "rs100001", ref: "A", alt: "G", qual: "98.6", filter: "PASS", info: "DP=118;AF=0.42" },
        { chrom: "1", pos: "11852", id: "rs100002", ref: "C", alt: "T", qual: "99.1", filter: "PASS", info: "DP=126;AF=0.38" },
        { chrom: "2", pos: "845233", id: "rsLys0003", ref: "G", alt: "A", qual: "97.8", filter: "PASS", info: "DP=132;AF=0.55" },
        { chrom: "4", pos: "2345678", id: "rsLys0001", ref: "T", alt: "C", qual: "99.5", filter: "PASS", info: "DP=144;AF=0.61" },
        { chrom: "7", pos: "1023546", id: "rsLys0002", ref: "A", alt: "T", qual: "98.9", filter: "PASS", info: "DP=121;AF=0.53" }
      ],
      qualityStats: [
        { value: "98.5%", label: "数据完整度" },
        { value: "Q30", label: "平均碱基质量" },
        { value: "52.3%", label: "GC含量" },
        { value: "125.6x", label: "平均测序深度" }
      ],
      qualityBars: [42, 56, 78, 94, 100, 88, 70, 48]
    }
  },
  "gene-ethanol": {
    id: "gene-ethanol",
    name: "乙醇耐受酵母菌株分析",
    strain: "酵母菌",
    phenotype: "生长速率",
    method: "关联分析",
    threshold: "0.05",
    status: "分析中",
    samples: "892",
    sites: "16",
    createdAt: "2024-01-18 14:20",
    updatedAt: "2024-01-19 09:15",
    description: "围绕乙醇耐受表型筛选关键突变位点，构建酵母耐受调控候选基因列表。",
    metrics: [
      { label: "总样本数量", value: "892" },
      { label: "显著位点数量", value: "16" },
      { label: "高度显著数量", value: "4" },
      { label: "平均P值", value: "0.041" }
    ],
    points: [
      { x: 8, y: 20 }, { x: 14, y: 24 }, { x: 20, y: 29 }, { x: 27, y: 36 }, { x: 34, y: 44, highlight: true },
      { x: 41, y: 27 }, { x: 48, y: 31 }, { x: 56, y: 41, highlight: true }, { x: 65, y: 25 }, { x: 74, y: 38 },
      { x: 82, y: 46, highlight: true }, { x: 90, y: 28 }
    ],
    pValueBars: [10, 14, 22, 34, 40, 31, 20, 12],
    chromosomeBars: [
      { label: "Chr1", value: 12 },
      { label: "Chr2", value: 16 },
      { label: "Chr3", value: 8 },
      { label: "Chr4", value: 22 },
      { label: "Chr5", value: 11 },
      { label: "Chr6", value: 9 }
    ],
    snps: [
      { rank: 1, chromosome: "Chr4", position: "1,248,009", snpId: "rsEth0001", pValue: "1.3e-06", effect: "0.52", gene: "HSP30" },
      { rank: 2, chromosome: "Chr2", position: "542,884", snpId: "rsEth0002", pValue: "2.8e-06", effect: "0.49", gene: "PDR1" },
      { rank: 3, chromosome: "Chr6", position: "904,221", snpId: "rsEth0003", pValue: "4.7e-06", effect: "0.44", gene: "TPS1" },
      { rank: 4, chromosome: "Chr1", position: "422,019", snpId: "rsEth0004", pValue: "9.1e-06", effect: "0.41", gene: "SNF1" }
    ],
    prediction: {
      combo: "HSP30 + PDR1 + TPS1",
      yield: "8.41 h-1",
      interval: "7.82 - 8.96 h-1",
      confidence: "88.2%"
    },
    dataset: {
      name: "乙醇耐受菌株数据集_A1",
      type: "VCF",
      size: "184.32 MB",
      sites: "1,823,504",
      uploadedAt: "2024-01-18 14:35:00",
      preview: [
        { chrom: "1", pos: "22018", id: "rs200001", ref: "G", alt: "A", qual: "97.1", filter: "PASS", info: "DP=102;AF=0.31" },
        { chrom: "2", pos: "542884", id: "rsEth0002", ref: "T", alt: "C", qual: "98.0", filter: "PASS", info: "DP=136;AF=0.48" },
        { chrom: "4", pos: "1248009", id: "rsEth0001", ref: "A", alt: "G", qual: "99.0", filter: "PASS", info: "DP=128;AF=0.54" }
      ],
      qualityStats: [
        { value: "97.2%", label: "数据完整度" },
        { value: "Q28", label: "平均碱基质量" },
        { value: "49.7%", label: "GC含量" },
        { value: "108.4x", label: "平均测序深度" }
      ],
      qualityBars: [36, 50, 68, 82, 90, 76, 60, 38]
    }
  },
  "gene-bacillus": {
    id: "gene-bacillus",
    name: "芽孢杆菌蛋白酶表达优化",
    strain: "芽孢杆菌",
    phenotype: "底物利用率",
    method: "候选位点分析",
    threshold: "0.05",
    status: "失败",
    samples: "456",
    sites: "0",
    createdAt: "2024-01-20 09:15",
    updatedAt: "2024-01-20 18:40",
    description: "尝试构建蛋白酶高表达相关位点模型，当前因样本分层不足导致结果未通过质控。",
    metrics: [
      { label: "总样本数量", value: "456" },
      { label: "显著位点数量", value: "0" },
      { label: "高度显著数量", value: "0" },
      { label: "平均P值", value: "0.118" }
    ],
    points: [
      { x: 10, y: 15 }, { x: 18, y: 18 }, { x: 26, y: 12 }, { x: 34, y: 21 },
      { x: 42, y: 17 }, { x: 50, y: 19 }, { x: 58, y: 14 }, { x: 66, y: 22 },
      { x: 74, y: 16 }, { x: 82, y: 18 }
    ],
    pValueBars: [16, 22, 24, 28, 26, 20, 14, 10],
    chromosomeBars: [
      { label: "Chr1", value: 4 },
      { label: "Chr2", value: 6 },
      { label: "Chr3", value: 3 },
      { label: "Chr4", value: 5 }
    ],
    snps: [
      { rank: 1, chromosome: "Chr2", position: "884,121", snpId: "rsBac0001", pValue: "3.2e-04", effect: "0.18", gene: "aprE" },
      { rank: 2, chromosome: "Chr4", position: "1,044,228", snpId: "rsBac0002", pValue: "5.1e-04", effect: "0.16", gene: "degU" }
    ],
    prediction: {
      combo: "aprE + degU + spo0A",
      yield: "6.28 %",
      interval: "5.81 - 6.72 %",
      confidence: "71.4%"
    },
    dataset: {
      name: "蛋白酶筛选批次_B4",
      type: "CSV",
      size: "78.45 MB",
      sites: "438,226",
      uploadedAt: "2024-01-20 09:40:00",
      preview: [
        { chrom: "2", pos: "884121", id: "rsBac0001", ref: "C", alt: "A", qual: "92.6", filter: "PASS", info: "DP=89;AF=0.28" },
        { chrom: "4", pos: "1044228", id: "rsBac0002", ref: "A", alt: "G", qual: "93.1", filter: "PASS", info: "DP=94;AF=0.22" }
      ],
      qualityStats: [
        { value: "93.8%", label: "数据完整度" },
        { value: "Q25", label: "平均碱基质量" },
        { value: "44.1%", label: "GC含量" },
        { value: "86.2x", label: "平均测序深度" }
      ],
      qualityBars: [20, 34, 48, 62, 58, 42, 26, 16]
    }
  }
};

Object.assign(analysisPages.gene, {
  title: "基因型-表型数据分析",
  breadcrumb: ["首页", "数据分析", "基因型-表型数据分析"],
  primaryButton: "新增分析项目",
  headerTools: true,
  stats: [
    { icon: "i-folder", iconClass: "is-blue", value: "12", label: "分析项目总数" },
    { icon: "i-user", iconClass: "is-green", value: "3,584", label: "累计样本数量" },
    { icon: "i-bars", iconClass: "is-yellow", value: "124", label: "显著位点总数" },
    { icon: "i-chart", iconClass: "is-cyan", value: "8", label: "已完成项目" }
  ],
  filters: [
    { label: "项目名称", type: "input", placeholder: "请输入项目名称" },
    { label: "菌株类型", type: "select", options: ["全部", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
    { label: "表型类型", type: "select", options: ["全部", "产量", "生长速率", "底物利用率"] },
    { label: "分析状态", type: "select", options: ["全部", "已完成", "分析中", "失败"] }
  ],
  columns: [
    { key: "name", label: "项目名称" },
    { key: "strain", label: "菌株类型" },
    { key: "phenotype", label: "表型类型" },
    { key: "status", label: "分析状态" },
    { key: "samples", label: "样本数" },
    { key: "sites", label: "显著位点" },
    { key: "createdAt", label: "创建时间" },
    { key: "actions", label: "操作" }
  ],
  rows: [
    {
      id: "gene-lysine",
      name: "高产L-赖氨酸菌株筛选",
      strain: "大肠杆菌",
      phenotype: "产量",
      status: { text: "已完成", className: "is-done" },
      samples: "1,256",
      sites: "48",
      createdAt: "2024-01-15 10:30",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" },
        { id: "upload", label: "上传数据集", tone: "blue" },
        { id: "result", label: "分析结果", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" }
      ]
    },
    {
      id: "gene-ethanol",
      name: "乙醇耐受酵母菌株分析",
      strain: "酵母菌",
      phenotype: "生长速率",
      status: { text: "分析中", className: "is-progress" },
      samples: "892",
      sites: "-",
      createdAt: "2024-01-18 14:20",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" },
        { id: "upload", label: "上传数据集", tone: "blue" },
        { id: "result", label: "分析结果", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" }
      ]
    },
    {
      id: "gene-bacillus",
      name: "芽孢杆菌蛋白酶表达优化",
      strain: "芽孢杆菌",
      phenotype: "底物利用率",
      status: { text: "失败", className: "is-fail" },
      samples: "456",
      sites: "-",
      createdAt: "2024-01-20 09:15",
      actions: [
        { id: "edit", label: "编辑", tone: "blue" },
        { id: "delete", label: "删除", tone: "danger" },
        { id: "upload", label: "上传数据集", tone: "blue" },
        { id: "result", label: "分析结果", tone: "blue" },
        { id: "detail", label: "查看详情", tone: "blue" }
      ]
    }
  ],
  footer: "共 3 条记录，每页 10 条"
});

const gpaTabs = [
  { key: "search", label: "GPA检索" },
  { key: "path", label: "调控路径挖掘" },
  { key: "dataset", label: "数据集生成" },
  { key: "analysis", label: "统计/AI分析" },
  { key: "model", label: "模型训练" },
  { key: "design", label: "设计方案生成" },
  { key: "dbtl", label: "DBTL验证" }
];

const gpaQuickTags = [
  { label: "番茄红素-产率", compound: "番茄红素", phenotype: "产率", chassis: "酵母" },
  { label: "苯砜-耐受", compound: "苯砜", phenotype: "耐受", chassis: "酵母" },
  { label: "温度耐受", compound: "", phenotype: "温度耐受", chassis: "" },
  { label: "盐浓度耐受", compound: "", phenotype: "盐浓度耐受", chassis: "" }
];

const gpaPhenotypeOptions = ["产率", "耐受", "温度耐受", "盐浓度耐受", "生长速率", "产物活性", "细胞稳定性", "特殊性状"];

const gpaSearchRecords = [
  {
    id: "gpa-genea",
    gene: "GeneA",
    perturbation: "过表达",
    strength: "0.92",
    source: "公开数据+实验",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    desc: "在苯砜耐受条件下与目标表型强相关，适合进入调控网络验证。",
    relations: ["GeneA 激活 GeneB", "GeneA 抑制 GeneC", "GeneD 激活 GeneA"]
  },
  {
    id: "gpa-geneb",
    gene: "GeneB",
    perturbation: "敲除",
    strength: "0.87",
    source: "公开数据",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    desc: "敲除后目标表型提升，需结合隐藏关闭路径判断对生长的影响。",
    relations: ["GeneB 抑制 GeneC", "GeneF 激活 GeneB"]
  },
  {
    id: "gpa-genec",
    gene: "GeneC",
    perturbation: "点突变",
    strength: "0.85",
    source: "实验",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    desc: "突变位点对耐受表型贡献较高，建议作为模型特征保留。",
    relations: ["GeneC 关闭 GeneE"]
  },
  {
    id: "gpa-gened",
    gene: "GeneD",
    perturbation: "启动子替换",
    strength: "0.81",
    source: "公开数据",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    desc: "调控表达水平改变后可间接激活 GeneA。",
    relations: ["GeneD 激活 GeneA"]
  },
  {
    id: "gpa-crte",
    gene: "CrtE",
    perturbation: "过表达",
    strength: "0.90",
    source: "实验",
    compound: "番茄红素",
    phenotype: "产率",
    chassis: "酵母",
    desc: "番茄红素产率提升的主要候选基因，适合生成设计方案。",
    relations: ["CrtE 激活 CrtB", "ERG9 抑制 CrtE"]
  },
  {
    id: "gpa-genee",
    gene: "GeneE",
    perturbation: "过表达",
    strength: "0.79",
    source: "公开数据",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    desc: "与隐藏关闭路径相关的候选基因，可作为负向对照。",
    relations: ["GeneC 关闭 GeneE"]
  },
  {
    id: "gpa-genef",
    gene: "GeneF",
    perturbation: "启动子替换",
    strength: "0.84",
    source: "实验",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    desc: "GeneF 对 GeneA 的调控在目标条件下被激活，适合进入路径分析。",
    relations: ["GeneF 激活 GeneA", "GeneF 激活 GeneB"]
  },
  {
    id: "gpa-hsp30",
    gene: "HSP30",
    perturbation: "过表达",
    strength: "0.88",
    source: "公开数据",
    compound: "",
    phenotype: "温度耐受",
    chassis: "酵母",
    desc: "温度耐受快捷入口对应的典型热休克基因。",
    relations: ["HSP30 维持温度稳态"]
  },
  {
    id: "gpa-hog1",
    gene: "HOG1",
    perturbation: "敲除",
    strength: "0.83",
    source: "实验",
    compound: "",
    phenotype: "盐浓度耐受",
    chassis: "酵母",
    desc: "盐浓度耐受快捷入口对应的渗透压应答基因。",
    relations: ["HOG1 响应高盐环境"]
  }
];

const gpaInitialPaths = [
  {
    id: "path-native-ab",
    type: "固有路径",
    path: "GeneA → GeneB",
    relation: "激活",
    source: "公开数据库",
    status: "待确认",
    desc: "细胞正常生理状态下已存在的调控关系。",
    evidence: "文献与公开GPA数据库均命中"
  },
  {
    id: "path-native-bc",
    type: "固有路径",
    path: "GeneB → GeneC",
    relation: "抑制",
    source: "公开数据库",
    status: "待确认",
    desc: "原有抑制关系会影响目标组合的生长速率。",
    evidence: "基线条件下关系稳定"
  },
  {
    id: "path-hidden-fa",
    type: "隐藏激活路径",
    path: "GeneF → GeneA",
    relation: "新激活",
    source: "GPA差异分析",
    status: "重点关注",
    desc: "目标表型条件下，原本不活跃的 GeneF 到 GeneA 调控被激活。",
    evidence: "目标条件对比基线显著增强"
  },
  {
    id: "path-hidden-ce",
    type: "隐藏关闭路径",
    path: "GeneC → GeneE",
    relation: "被关闭",
    source: "GPA差异分析",
    status: "待确认",
    desc: "目标表型条件下，原有调控关系失活，可作为排除或弱化方向。",
    evidence: "目标条件对比基线显著降低"
  }
];

const gpaInitialDatasets = [
  { id: "ds-benzenesulfone", name: "苯砜耐受GPA", source: "检索生成", records: 1240, features: 15, status: "就绪", time: "01-16", locked: true, note: "由 GPA 检索结果生成" },
  { id: "ds-lycopene", name: "酵母番茄红素GPA", source: "实验导入", records: 3500, features: 22, status: "就绪", time: "01-15", locked: false, note: "实验累积数据" },
  { id: "ds-temperature", name: "温度耐受公开数据", source: "公开数据", records: 8200, features: 18, status: "处理中", time: "01-14", locked: true, note: "公开数据同步任务" },
  { id: "ds-salt", name: "盐浓度耐受", source: "检索生成", records: 560, features: 12, status: "异常", time: "01-13", locked: false, note: "需补齐缺失特征" }
];

const gpaInitialModels = [
  { id: "model-benzenesulfone", name: "苯砜耐受预测模型", algorithm: "随机森林", datasetId: "ds-benzenesulfone", dataset: "苯砜耐受GPA", accuracy: "0.89", r2: "0.88", rmse: "0.28", status: "已完成", version: "v1.0", locked: true },
  { id: "model-lycopene", name: "番茄红素产率模型", algorithm: "XGBoost", datasetId: "ds-lycopene", dataset: "酵母番茄红素GPA", accuracy: "0.92", r2: "0.91", rmse: "0.23", status: "已完成", version: "v1.0", locked: false },
  { id: "model-temperature", name: "温度耐受模型", algorithm: "SVM", datasetId: "ds-temperature", dataset: "温度耐受公开数据", accuracy: "--", r2: "--", rmse: "--", status: "训练中", version: "v0.9", locked: true }
];

const gpaInitialDesigns = [
  {
    id: "design-001",
    name: "苯砜耐受最优基因型组合-001",
    target: "苯砜耐受",
    modelId: "model-benzenesulfone",
    datasetId: "ds-benzenesulfone",
    modelName: "苯砜耐受预测模型",
    round: 1,
    status: "迭代中",
    createdAt: "2024-01-16 15:00",
    genes: [
      { gene: "GeneA", perturbation: "过表达", lift: "+23.5%" },
      { gene: "GeneB", perturbation: "敲除", lift: "+18.2%" },
      { gene: "GeneC", perturbation: "点突变", lift: "+12.8%" },
      { gene: "GeneD", perturbation: "启动子替换", lift: "+9.1%" }
    ],
    dbtl: [
      { round: "第1轮", stage: "Design", status: "完成", result: "生成方案" },
      { round: "第1轮", stage: "Build", status: "完成", result: "菌株构建" },
      { round: "第1轮", stage: "Test", status: "待录入", result: "等待表型值" },
      { round: "第1轮", stage: "Learn", status: "待执行", result: "等待模型更新" }
    ]
  }
];

const defaultGeneVisuals = {
  points: [
    { x: 8, y: 22 },
    { x: 14, y: 30 },
    { x: 20, y: 18 },
    { x: 26, y: 42, highlight: true },
    { x: 32, y: 24 },
    { x: 38, y: 36 },
    { x: 44, y: 20 },
    { x: 50, y: 48, highlight: true },
    { x: 58, y: 28 },
    { x: 66, y: 33 },
    { x: 74, y: 18 },
    { x: 82, y: 40, highlight: true },
    { x: 90, y: 26 }
  ],
  pValueBars: [12, 18, 24, 38, 48, 42, 30, 18, 10],
  chromosomeBars: [
    { label: "Chr1", value: 8 },
    { label: "Chr2", value: 13 },
    { label: "Chr3", value: 10 },
    { label: "Chr4", value: 15 },
    { label: "Chr5", value: 9 },
    { label: "Chr6", value: 6 }
  ],
  preview: [
    { chrom: "1", pos: "10231", id: "rs100001", ref: "A", alt: "G", qual: "98.6", filter: "PASS", info: "DP=118;AF=0.42" },
    { chrom: "2", pos: "845233", id: "rs100002", ref: "C", alt: "T", qual: "97.4", filter: "PASS", info: "DP=121;AF=0.38" },
    { chrom: "4", pos: "2345678", id: "rs100003", ref: "G", alt: "A", qual: "99.1", filter: "PASS", info: "DP=136;AF=0.55" }
  ],
  qualityBars: [30, 44, 60, 82, 96, 86, 62, 40]
};

function toNumberValue(value) {
  const numeric = Number(String(value || "0").replaceAll(",", ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function buildGeneRow(project) {
  return {
    id: project.id,
    name: project.name,
    strain: project.strain,
    phenotype: project.phenotype,
    status: { text: project.status, className: project.status === "已完成" ? "is-done" : project.status === "分析中" ? "is-progress" : "is-fail" },
    samples: project.samples,
    sites: project.sites,
    createdAt: project.createdAt,
    actions: [
      { id: "edit", label: "编辑", tone: "blue" },
      { id: "delete", label: "删除", tone: "danger" },
      { id: "upload", label: "上传数据集", tone: "blue" },
      { id: "result", label: "分析结果", tone: "blue" },
      { id: "detail", label: "查看详情", tone: "blue" }
    ]
  };
}

function buildFallbackGeneProject(project) {
  const siteCount = toNumberValue(project.sites);
  const sampleCount = toNumberValue(project.samples);
  const highlightCount = siteCount > 0 ? Math.max(1, Math.min(12, Math.ceil(siteCount / 4))) : 0;

  return {
    ...project,
    metrics: [
      { label: "总样本数量", value: project.samples || "0" },
      { label: "显著位点数量", value: project.sites || "0" },
      { label: "高度显著数量", value: String(highlightCount) },
      { label: "平均P值", value: siteCount > 0 ? "0.041" : "--" }
    ],
    points: defaultGeneVisuals.points,
    pValueBars: defaultGeneVisuals.pValueBars,
    chromosomeBars: defaultGeneVisuals.chromosomeBars,
    snps:
      siteCount > 0
        ? [
            {
              rank: 1,
              chromosome: "Chr4",
              position: "2,345,678",
              snpId: `rs${project.id.slice(-4)}001`,
              pValue: "3.2e-06",
              effect: "0.42",
              gene: "candidateA"
            }
          ]
        : [],
    prediction: {
      combo: siteCount > 0 ? "candidateA + candidateB + candidateC" : "待系统分析",
      yield: sampleCount > 0 ? "待模型输出" : "--",
      interval: sampleCount > 0 ? "待模型输出" : "--",
      confidence: siteCount > 0 ? "80.0%" : "--"
    },
    dataset: {
      name: project.dataset?.name || `${project.name}_数据集`,
      type: project.dataset?.type || "VCF",
      size: project.dataset?.size || "0 MB",
      sites: project.dataset?.sites || "0",
      uploadedAt: project.dataset?.uploadedAt || "--",
      preview: defaultGeneVisuals.preview,
      qualityStats: [
        { value: sampleCount > 0 ? "96.2%" : "--", label: "数据完整度" },
        { value: sampleCount > 0 ? "Q28" : "--", label: "平均碱基质量" },
        { value: sampleCount > 0 ? "50.1%" : "--", label: "GC含量" },
        { value: sampleCount > 0 ? "102.4x" : "--", label: "平均测序深度" }
      ],
      qualityBars: defaultGeneVisuals.qualityBars
    }
  };
}

function hydrateGeneProject(project) {
  const template = geneProjectLibrary[project.id];
  const merged = template
    ? {
        ...template,
        ...project,
        metrics: template.metrics,
        points: template.points,
        pValueBars: template.pValueBars,
        chromosomeBars: template.chromosomeBars,
        snps: template.snps,
        prediction: template.prediction,
        dataset: {
          ...template.dataset,
          ...project.dataset,
          preview: template.dataset.preview,
          qualityStats: template.dataset.qualityStats,
          qualityBars: template.dataset.qualityBars
        }
      }
    : buildFallbackGeneProject(project);

  geneProjectLibrary[project.id] = merged;
  return merged;
}

function syncGeneProjects(projects) {
  const hydrated = projects.map(hydrateGeneProject);
  analysisPages.gene.rows = hydrated.map(buildGeneRow);
  analysisPages.gene.footer = `共 ${hydrated.length} 条记录，每页 10 条`;
  analysisPages.gene.stats = [
    { icon: "i-folder", iconClass: "is-blue", value: String(hydrated.length), label: "分析项目总数" },
    {
      icon: "i-user",
      iconClass: "is-green",
      value: hydrated.reduce((sum, item) => sum + toNumberValue(item.samples), 0).toLocaleString("zh-CN"),
      label: "累计样本数量"
    },
    {
      icon: "i-bars",
      iconClass: "is-yellow",
      value: hydrated.reduce((sum, item) => sum + toNumberValue(item.sites), 0).toLocaleString("zh-CN"),
      label: "显著位点总数"
    },
    {
      icon: "i-chart",
      iconClass: "is-cyan",
      value: String(hydrated.filter((item) => item.status === "已完成").length),
      label: "已完成项目"
    }
  ];
}

const persistedAnalysisModules = ["omics", "process", "full", "service"];

const analysisFormConfigs = {
  omics: {
    title: "组学数据分析",
    fields: [
      { name: "name", label: "模型名称", placeholder: "请输入模型名称" },
      { name: "strain", label: "菌株类型", type: "select", options: ["大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "type", label: "模型类型", type: "select", options: ["基于基因组", "基于代谢组", "基于转录组"] },
      { name: "reactions", label: "反应数", placeholder: "请输入反应数" },
      { name: "metabolites", label: "代谢物数", placeholder: "请输入代谢物数" },
      { name: "flux", label: "预测通量", placeholder: "请输入预测通量" },
      { name: "statusText", label: "状态", type: "select", options: ["已验证", "优化中", "验证中"] }
    ]
  },
  process: {
    title: "发酵过程分析",
    fields: [
      { name: "name", label: "模型名称", placeholder: "请输入模型名称" },
      { name: "model", label: "模型类型", type: "select", options: ["代谢网络模型", "神经网络模型"] },
      { name: "strain", label: "菌株类型", type: "select", options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "goal", label: "优化目标", type: "select", options: ["产量最大化", "生成速率最大化", "底物利用最大化"] },
      { name: "statusText", label: "状态", type: "select", options: ["已验证", "验证中", "待验证"] }
    ]
  },
  full: {
    title: "全流程数据分析",
    fields: [
      { name: "name", label: "项目名称", placeholder: "请输入项目名称" },
      { name: "strain", label: "菌株类型", type: "select", options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "statusText", label: "分析状态", type: "select", options: ["已完成", "进行中", "待分析"] }
    ]
  },
  service: {
    title: "工程细胞服务",
    fields: [
      { name: "code", label: "细胞编号", placeholder: "请输入细胞编号" },
      { name: "name", label: "细胞名称", placeholder: "请输入细胞名称" },
      { name: "strain", label: "菌株类型", type: "select", options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"] },
      { name: "gene", label: "基因型", type: "textarea", full: true, placeholder: "请输入基因型描述" },
      { name: "statusText", label: "状态", type: "select", options: ["已验证", "验证中", "待验证"] }
    ]
  }
};

Object.assign(analysisFormConfigs, systemFormConfigs);

const omicsModelLibrary = {
  "omics-1": {
    source: "文件导入",
    fileName: "model_v2.xml",
    type: "基于基因组",
    targetProduct: "乙酸",
    description:
      "基于大肠杆菌 K-12 基因组构建的中心代谢网络模型，覆盖糖酵解、TCA 循环与磷酸戊糖途径等关键通路。",
    pathwayNodes: [
      { label: "葡萄糖", className: "is-substrate" },
      { label: "G6P", className: "is-substrate" },
      { label: "F6P", className: "is-substrate" },
      { label: "PYR", className: "is-middle" },
      { label: "磷酸戊糖途径", className: "is-key" },
      { label: "TCA循环", className: "is-target" },
      { label: "ATP", className: "is-substrate" },
      { label: "NADH", className: "is-energy" },
      { label: "乙醇", className: "is-substrate" },
      { label: "乙酸", className: "is-target" }
    ],
    optimizationTargets: [
      { gene: "pyk", reaction: "丙酮酸激酶", action: "上调", actionClass: "is-up", gain: "+35%" },
      { gene: "pflB", reaction: "丙酮酸甲酸裂解酶", action: "下调", actionClass: "is-down", gain: "+28%" },
      { gene: "ldhA", reaction: "乳酸脱氢酶", action: "敲除", actionClass: "is-remove", gain: "+22%" }
    ],
    gpaCards: {
      networkNodes: [
        { label: "gene_001", className: "is-gene", style: "left:14%;top:58%;" },
        { label: "vgra_002", className: "is-gene", style: "left:32%;top:38%;" },
        { label: "M_G6P", className: "is-metabolite", style: "left:12%;top:28%;" },
        { label: "代谢物", className: "is-metabolite", style: "left:40%;top:82%;" },
        { label: "R2", className: "is-reaction", style: "left:37%;top:52%;" },
        { label: "R1", className: "is-reaction", style: "left:22%;top:43%;" },
        { label: "gene_003", className: "is-gene", style: "left:49%;top:80%;" }
      ],
      panoramaBars: [
        { label: "糖酵解", width: 34, className: "is-substrate" },
        { label: "TCA循环", width: 28, className: "is-middle" },
        { label: "乙酸", width: 20, className: "is-target" },
        { label: "NADH", width: 16, className: "is-energy" },
        { label: "磷酸戊糖途径", width: 18, className: "is-key" }
      ],
      balanceBars: [
        { label: "糖酵解", a: 86, b: 79, c: 90 },
        { label: "TCA循环", a: 74, b: 68, c: 61 },
        { label: "氨基酸合成", a: 70, b: 60, c: 76 },
        { label: "脂肪酸代谢", a: 46, b: 38, c: 52 },
        { label: "核苷酸合成", a: 54, b: 48, c: 42 }
      ],
      energyNodes: [
        { label: "乙酰辅酶A", className: "is-middle", style: "left:48%;top:18%;" },
        { label: "琥珀酰辅酶A", className: "is-energy", style: "left:70%;top:28%;" },
        { label: "FADH2", className: "is-metabolite", style: "left:28%;top:48%;" },
        { label: "NADPH", className: "is-key", style: "left:24%;top:70%;" },
        { label: "ATP", className: "is-target", style: "left:70%;top:70%;" },
        { label: "NADH", className: "is-gene", style: "left:48%;top:78%;" }
      ],
      forecastLine: [0.6, 1.1, 2.0, 3.6, 5.2, 7.8, 10.1]
    }
  }
};

const processModelLibrary = {
  "process-1": {
    description:
      "基于全基因组代谢网络模型的谷氨酸发酵过程优化，通过调整培养参数实现产量最大化目标。",
    improvement: "+18.5%",
    paramCount: "24",
    currentYield: "85.2 g/L",
    optimizedYield: "100.9 g/L",
    confidenceRange: "98.5 - 103.3 g/L",
    processNodes: [
      { label: "葡萄糖", className: "is-substrate" },
      { label: "G6P", className: "is-substrate" },
      { label: "F6P", className: "is-middle" },
      { label: "PEP", className: "is-key" },
      { label: "丙酮酸", className: "is-target" },
      { label: "谷氨酸棒杆菌", className: "is-energy" },
      { label: "TCA循环", className: "is-process" }
    ],
    optimizationParams: [
      { name: "培养温度", current: "37℃", suggested: "35℃", impact: "高", impactClass: "is-high" },
      { name: "pH值", current: "7.0", suggested: "7.2", impact: "高", impactClass: "is-high" },
      { name: "搅拌转速", current: "500 rpm", suggested: "600 rpm", impact: "中", impactClass: "is-mid" },
      { name: "气体流量", current: "1.5 L/min", suggested: "2.0 L/min", impact: "中", impactClass: "is-mid" },
      { name: "压力", current: "1.0 kPa", suggested: "1.2 kPa", impact: "低", impactClass: "is-low" }
    ]
  },
  "process-2": {
    description:
      "结合时序发酵数据建立 LSTM 预测模型，用于动态调整控制参数并提高生成速率。",
    improvement: "+12.4%",
    paramCount: "18",
    currentYield: "68.4 g/L",
    optimizedYield: "76.9 g/L",
    confidenceRange: "74.3 - 78.2 g/L",
    processNodes: [
      { label: "糖酵解", className: "is-substrate" },
      { label: "PYR", className: "is-middle" },
      { label: "乙酰辅酶A", className: "is-key" },
      { label: "产物池", className: "is-target" },
      { label: "LSTM模型", className: "is-energy" },
      { label: "TCA循环", className: "is-process" }
    ],
    optimizationParams: [
      { name: "培养温度", current: "36℃", suggested: "34℃", impact: "高", impactClass: "is-high" },
      { name: "DO值", current: "28%", suggested: "32%", impact: "高", impactClass: "is-high" },
      { name: "补料速率", current: "1.2 mL/min", suggested: "1.6 mL/min", impact: "中", impactClass: "is-mid" }
    ]
  }
};

const fullProjectLibrary = {
  "full-1": {
    description: "整合基因型-表型分析、组学数据分析、发酵过程分析和专利风险分析，提供全流程优化方案。",
    modules: ["genotype", "omics", "process"],
    targetProduct: "L-谷氨酸",
    patentRisk: "中等风险 共12项专利风险",
    gpaSummary: {
      projectName: "谷氨酸高产菌株GPA分析",
      strain: "谷氨酸棒杆菌",
      significantSites: "23个",
      recommendedGenes: "glnA(AA)+gdh(AA)",
      improvement: "+18.5%"
    },
    processSummary: {
      modelName: "谷氨酸发酵过程优化",
      modelType: "代谢网络模型",
      strain: "谷氨酸棒杆菌",
      goal: "产量最大化",
      improvement: "+18.5%"
    },
    gpaDetail: {
      networkNodes: [
        { label: "pyc", className: "is-gene", style: "left:24%;top:32%;" },
        { label: "TCA循环", className: "is-path", style: "left:28%;top:56%;" },
        { label: "α-酮戊二酸", className: "is-metabolite", style: "left:47%;top:50%;" },
        { label: "gdh", className: "is-gene", style: "left:58%;top:64%;" },
        { label: "L-谷氨酸", className: "is-metabolite", style: "left:55%;top:30%;" },
        { label: "glnA", className: "is-gene", style: "left:64%;top:44%;" },
        { label: "产量表型", className: "is-phenotype", style: "left:73%;top:29%;" },
        { label: "氮代谢", className: "is-path", style: "left:63%;top:10%;" }
      ],
      pathwayTable: [
        { pathway: "谷氨酸合成增强回路", genes: "glnA, gdh", mode: "过表达", effect: "产量提升15-20%", confidence: "高" },
        { pathway: "氮代谢优化回路", genes: "gltA, pyc", mode: "弱化抑制", effect: "底物利用率提升12%", confidence: "高" },
        { pathway: "能量代谢平衡回路", genes: "sucA, sdhA", mode: "调控表达", effect: "生长速率提升8%", confidence: "中" }
      ],
      patents: [
        { no: "CN201810123456", title: "谷氨酸高产菌株构建方法", owner: "某生物科技公司", risk: "高风险", riskClass: "is-high", status: "有效" },
        { no: "CN201920123789", title: "基因工程菌株发酵工艺", owner: "某研究院", risk: "中风险", riskClass: "is-mid", status: "有效" },
        { no: "US20201234567", title: "Microbial strain optimization", owner: "Foreign Corp", risk: "中风险", riskClass: "is-mid", status: "审查中" }
      ]
    },
    predictDetail: {
      comprehensivePrediction: {
        yield: "9.3 g/L",
        confidence: "92%",
        cycle: "42 h",
        cost: "下降15%",
        recommendation: "采用glnA/gdh组合并将pH稳定在7.2，分段提升葡萄糖流加速率。"
      },
      paramSuggestions: [
        { name: "发酵温度", current: "37℃", optimized: "35℃", gain: "+5.2%", level: 82 },
        { name: "pH值", current: "7.0", optimized: "7.2", gain: "+3.8%", level: 70 },
        { name: "搅拌转速", current: "200 rpm", optimized: "250 rpm", gain: "+2.5%", level: 58 },
        { name: "葡萄糖流加速率", current: "5 g/L/h", optimized: "6.5 g/L/h", gain: "+4.1%", level: 76 },
        { name: "氮源添加量", current: "3 g/L", optimized: "4 g/L", gain: "+2.9%", level: 62 }
      ],
      materialStats: [
        { label: "葡萄糖转化率", value: "↑12.3%", sub: "0.45→0.51 g/g" },
        { label: "氮源利用率", value: "↑8.7%", sub: "78%→85%" },
        { label: "发酵周期", value: "↓6h", sub: "48h→42h" },
        { label: "生产成本", value: "↓15%", sub: "预计节省" }
      ],
      chartPoints: {
        current: [0, 2.6, 4.6, 5.9, 6.8, 7.3, 7.6, 7.8],
        optimized: [0, 4.1, 6.2, 7.6, 8.5, 9.0, 9.2, 9.3],
        predicted: [0, 4.0, 6.1, 7.5, 8.4, 8.9, 9.1, 9.3]
      }
    }
  },
  "full-2": {
    description: "围绕赖氨酸生产菌株开展基因型、发酵和风险数据协同分析，形成分阶段优化建议。",
    modules: ["genotype", "process", "patent"],
    targetProduct: "L-赖氨酸",
    patentRisk: "中等风险 共8项专利风险"
  }
};

const serviceWizardSteps = [
  { step: 1, label: "细胞基本信息" },
  { step: 2, label: "培养与优化" },
  { step: 3, label: "分析与检测" },
  { step: 4, label: "工程化应用" }
];

const serviceCellLibrary = {
  "service-1": {
    basicInfo: {
      code: "EC001",
      name: "高产L-赖氨酸工程菌",
      strain: "谷氨酸棒杆菌",
      gene: "lysC::338V, ask::P48S, hom::303V",
      statusText: "已验证",
      description:
        "经过多轮代谢工程改造的高产L-赖氨酸工程菌株，通过过表达关键代谢通路基因和敲除竞争途径，显著提高了L-赖氨酸的产量。"
    },
    cultureInfo: {
      cultureCode: "CB001",
      cultureMode: "摇瓶培养",
      mediumFormula: "葡萄糖 80 g/L；玉米浆 20 g/L；(NH4)2SO4 25 g/L；KH2PO4 1.0 g/L；MgSO4·7H2O 0.5 g/L",
      temperature: "30",
      ph: "7.0",
      rpm: "200",
      cultureStatus: "已完成",
      optimizationRecord: "通过补料节奏调整与氨源分段添加，细胞生长稳定，L-赖氨酸积累期较初始方案提升约 18.5%。"
    },
    analysisInfo: {
      testCode: "JC001",
      testItem: "细胞活性检测",
      testMethod: "流式细胞术",
      cellActivity: "高",
      cellPurity: "高",
      testResult: "符合预期",
      testDescription:
        "检测结果显示该工程菌在稳定表达阶段保持较高细胞活性与纯度，目标代谢通路表达均衡，未发现明显退化现象。"
    },
    applicationInfo: {
      applicationCode: "YY001",
      scenarioType: "生物制造",
      applicationField: "生物制造 - 生物药物",
      applicationStatus: "已验证",
      applicationContent:
        "适用于L-赖氨酸及其衍生物规模化生物制造，可用于后续发酵放大验证、工艺包输出与产业化评估。"
    }
  },
  "service-2": {
    basicInfo: {
      code: "EC002",
      name: "高效乙醇生产菌株",
      strain: "大肠杆菌",
      gene: "pdc::over, adh::up, glc::transport",
      statusText: "已验证",
      description: "针对乙醇高效合成构建的工程细胞，优化糖代谢流分配，兼顾快速生长和目标产物积累。"
    },
    cultureInfo: {
      cultureCode: "CB002",
      cultureMode: "发酵罐培养",
      mediumFormula: "葡萄糖 60 g/L；酵母粉 15 g/L；蛋白胨 10 g/L；MgSO4 0.8 g/L；微量元素 1 mL/L",
      temperature: "32",
      ph: "6.8",
      rpm: "350",
      cultureStatus: "已完成",
      optimizationRecord: "在分批补料和微氧策略下乙醇转化率保持稳定，副产物积累显著降低。"
    },
    analysisInfo: {
      testCode: "JC002",
      testItem: "代谢产物检测",
      testMethod: "HPLC",
      cellActivity: "中",
      cellPurity: "高",
      testResult: "符合预期",
      testDescription: "发酵末期乙醇浓度和底物利用率均达到预设区间，工程改造方向有效。"
    },
    applicationInfo: {
      applicationCode: "YY002",
      scenarioType: "生物制造",
      applicationField: "生物能源 - 乙醇生产",
      applicationStatus: "已验证",
      applicationContent: "可用于高浓度乙醇生产工艺验证与中试放大，也适合后续耐受性定向进化工作。"
    }
  }
};

function createServiceDefaultSections() {
  return {
    basicInfo: {
      code: "",
      name: "",
      strain: "谷氨酸棒杆菌",
      gene: "",
      statusText: "已验证",
      description: ""
    },
    cultureInfo: {
      cultureCode: "",
      cultureMode: "摇瓶培养",
      mediumFormula: "",
      temperature: "30",
      ph: "7.0",
      rpm: "200",
      cultureStatus: "已完成",
      optimizationRecord: ""
    },
    analysisInfo: {
      testCode: "",
      testItem: "细胞活性检测",
      testMethod: "流式细胞术",
      cellActivity: "高",
      cellPurity: "高",
      testResult: "符合预期",
      testDescription: ""
    },
    applicationInfo: {
      applicationCode: "",
      scenarioType: "生物制造",
      applicationField: "",
      applicationStatus: "已验证",
      applicationContent: ""
    }
  };
}

function createServiceEmptyDraft() {
  return {
    code: "",
    name: "",
    strain: "",
    gene: "",
    statusText: "",
    description: "",
    cultureCode: "",
    cultureMode: "",
    mediumFormula: "",
    temperature: "",
    ph: "",
    rpm: "",
    cultureStatus: "",
    optimizationRecord: "",
    testCode: "",
    testItem: "",
    testMethod: "",
    cellActivity: "",
    cellPurity: "",
    testResult: "",
    testDescription: "",
    applicationCode: "",
    scenarioType: "",
    applicationField: "",
    applicationStatus: "",
    applicationContent: ""
  };
}

function statusTextToClass(value) {
  const statusMap = {
    已验证: "is-valid",
    优化中: "is-progress",
    验证中: "is-pending",
    已完成: "is-done",
    进行中: "is-progress",
    待分析: "is-pending",
    待验证: "is-pending"
  };
  return statusMap[value] || "is-progress";
}

function buildFallbackOmicsItem(item) {
  return {
    ...item,
    source: item.source || "文件导入",
    fileName: item.fileName || "model.xml",
    type: item.type || "基于基因组",
    targetProduct: item.targetProduct || "乙酸",
    description: item.description || "用于代谢网络分析与优化的组学模型。",
    pathwayNodes: omicsModelLibrary["omics-1"].pathwayNodes,
    optimizationTargets: omicsModelLibrary["omics-1"].optimizationTargets,
    gpaCards: omicsModelLibrary["omics-1"].gpaCards
  };
}

function hydrateOmicsItem(item) {
  const preset = omicsModelLibrary[item.id];
  const hydrated = preset
    ? {
        ...preset,
        ...item
      }
    : buildFallbackOmicsItem(item);

  omicsModelLibrary[item.id] = {
    pathwayNodes: preset?.pathwayNodes || omicsModelLibrary["omics-1"].pathwayNodes,
    optimizationTargets: preset?.optimizationTargets || omicsModelLibrary["omics-1"].optimizationTargets,
    gpaCards: preset?.gpaCards || omicsModelLibrary["omics-1"].gpaCards,
    ...hydrated
  };

  return omicsModelLibrary[item.id];
}

function buildFallbackProcessItem(item) {
  return {
    ...item,
    description: item.description || "基于发酵过程模型进行参数优化与产量预测。",
    improvement: item.improvement || "+10.0%",
    paramCount: item.paramCount || "12",
    currentYield: item.currentYield || "80.0 g/L",
    optimizedYield: item.optimizedYield || "88.0 g/L",
    confidenceRange: item.confidenceRange || "84.0 - 90.0 g/L",
    processNodes: processModelLibrary["process-1"].processNodes,
    optimizationParams: processModelLibrary["process-1"].optimizationParams
  };
}

function hydrateProcessItem(item) {
  const preset = processModelLibrary[item.id];
  const hydrated = preset
    ? {
        ...preset,
        ...item
      }
    : buildFallbackProcessItem(item);

  processModelLibrary[item.id] = {
    processNodes: preset?.processNodes || processModelLibrary["process-1"].processNodes,
    optimizationParams: preset?.optimizationParams || processModelLibrary["process-1"].optimizationParams,
    ...hydrated
  };

  return processModelLibrary[item.id];
}

function buildFallbackFullItem(item) {
  return {
    ...item,
    id: item.id || "full-1",
    name: item.name || "全流程项目",
    description: item.description || "整合多模块分析结果，输出全流程优化建议。",
    modules: item.modules || ["genotype", "omics", "process"],
    targetProduct: item.targetProduct || "L-谷氨酸",
    patentRisk: item.patentRisk || "中等风险 共6项专利风险",
    gpaSummary: fullProjectLibrary["full-1"].gpaSummary,
    processSummary: fullProjectLibrary["full-1"].processSummary,
    gpaDetail: fullProjectLibrary["full-1"].gpaDetail,
    predictDetail: fullProjectLibrary["full-1"].predictDetail
  };
}

function hydrateFullItem(item) {
  const preset = fullProjectLibrary[item.id];
  const defaults = fullProjectLibrary["full-1"];
  const hydrated = preset
    ? {
        ...preset,
        ...item
      }
    : buildFallbackFullItem(item);

  fullProjectLibrary[item.id] = {
    ...defaults,
    ...hydrated,
    id: hydrated.id || item.id || "full-1",
    name: hydrated.name || item.name || "全流程项目",
    gpaSummary: {
      ...defaults.gpaSummary,
      ...(preset?.gpaSummary || {}),
      ...(hydrated.gpaSummary || {})
    },
    processSummary: {
      ...defaults.processSummary,
      ...(preset?.processSummary || {}),
      ...(hydrated.processSummary || {})
    },
    gpaDetail: {
      ...defaults.gpaDetail,
      ...(preset?.gpaDetail || {}),
      ...(hydrated.gpaDetail || {}),
      networkNodes: hydrated.gpaDetail?.networkNodes || preset?.gpaDetail?.networkNodes || defaults.gpaDetail.networkNodes,
      pathwayTable: hydrated.gpaDetail?.pathwayTable || preset?.gpaDetail?.pathwayTable || defaults.gpaDetail.pathwayTable,
      patents: hydrated.gpaDetail?.patents || preset?.gpaDetail?.patents || defaults.gpaDetail.patents
    },
    predictDetail: {
      ...defaults.predictDetail,
      ...(preset?.predictDetail || {}),
      ...(hydrated.predictDetail || {}),
      comprehensivePrediction: {
        ...defaults.predictDetail.comprehensivePrediction,
        ...(preset?.predictDetail?.comprehensivePrediction || {}),
        ...(hydrated.predictDetail?.comprehensivePrediction || {})
      },
      paramSuggestions:
        hydrated.predictDetail?.paramSuggestions || preset?.predictDetail?.paramSuggestions || defaults.predictDetail.paramSuggestions,
      materialStats: hydrated.predictDetail?.materialStats || preset?.predictDetail?.materialStats || defaults.predictDetail.materialStats,
      chartPoints: {
        ...defaults.predictDetail.chartPoints,
        ...(preset?.predictDetail?.chartPoints || {}),
        ...(hydrated.predictDetail?.chartPoints || {})
      }
    }
  };

  return fullProjectLibrary[item.id];
}

function buildFallbackServiceItem(item) {
  const defaults = createServiceDefaultSections();
  const basicInfo = {
    ...defaults.basicInfo,
    ...(item.basicInfo || {}),
    code: item.code || item.basicInfo?.code || defaults.basicInfo.code,
    name: item.name || item.basicInfo?.name || defaults.basicInfo.name,
    strain: item.strain || item.basicInfo?.strain || defaults.basicInfo.strain,
    gene: item.gene || item.basicInfo?.gene || defaults.basicInfo.gene,
    statusText: item.status?.text || item.statusText || item.basicInfo?.statusText || defaults.basicInfo.statusText,
    description: item.description || item.basicInfo?.description || defaults.basicInfo.description
  };
  const cultureInfo = {
    ...defaults.cultureInfo,
    ...(item.cultureInfo || {})
  };
  const analysisInfo = {
    ...defaults.analysisInfo,
    ...(item.analysisInfo || {})
  };
  const applicationInfo = {
    ...defaults.applicationInfo,
    ...(item.applicationInfo || {})
  };
  const statusText = item.status?.text || item.statusText || basicInfo.statusText || "已验证";

  return {
    ...item,
    code: basicInfo.code,
    name: basicInfo.name,
    strain: basicInfo.strain,
    gene: basicInfo.gene,
    description: basicInfo.description,
    basicInfo,
    cultureInfo,
    analysisInfo,
    applicationInfo,
    statusText,
    status: item.status?.text
      ? item.status
      : {
          text: statusText,
          className: statusTextToClass(statusText)
        }
  };
}

function hydrateServiceItem(item) {
  const preset = serviceCellLibrary[item.id];
  const hydrated = preset
    ? buildFallbackServiceItem({
        ...preset,
        ...item,
        basicInfo: {
          ...(preset.basicInfo || {}),
          ...(item.basicInfo || {})
        },
        cultureInfo: {
          ...(preset.cultureInfo || {}),
          ...(item.cultureInfo || {})
        },
        analysisInfo: {
          ...(preset.analysisInfo || {}),
          ...(item.analysisInfo || {})
        },
        applicationInfo: {
          ...(preset.applicationInfo || {}),
          ...(item.applicationInfo || {})
        }
      })
    : buildFallbackServiceItem(item);

  if (item.id) {
    serviceCellLibrary[item.id] = hydrated;
  }

  return hydrated;
}

function buildServiceDraft(item = null) {
  const current = item ? hydrateServiceItem(item) : buildFallbackServiceItem({});
  return {
    ...createServiceEmptyDraft(),
    code: current.basicInfo.code,
    name: current.basicInfo.name,
    strain: current.basicInfo.strain,
    gene: current.basicInfo.gene,
    statusText: current.basicInfo.statusText,
    description: current.basicInfo.description,
    cultureCode: current.cultureInfo.cultureCode,
    cultureMode: current.cultureInfo.cultureMode,
    mediumFormula: current.cultureInfo.mediumFormula,
    temperature: current.cultureInfo.temperature,
    ph: current.cultureInfo.ph,
    rpm: current.cultureInfo.rpm,
    cultureStatus: current.cultureInfo.cultureStatus,
    optimizationRecord: current.cultureInfo.optimizationRecord,
    testCode: current.analysisInfo.testCode,
    testItem: current.analysisInfo.testItem,
    testMethod: current.analysisInfo.testMethod,
    cellActivity: current.analysisInfo.cellActivity,
    cellPurity: current.analysisInfo.cellPurity,
    testResult: current.analysisInfo.testResult,
    testDescription: current.analysisInfo.testDescription,
    applicationCode: current.applicationInfo.applicationCode,
    scenarioType: current.applicationInfo.scenarioType,
    applicationField: current.applicationInfo.applicationField,
    applicationStatus: current.applicationInfo.applicationStatus,
    applicationContent: current.applicationInfo.applicationContent
  };
}

function syncServiceDraftFromDom() {
  if (state.modal?.type !== "analysis-form" || state.modal.moduleKey !== "service") {
    return createServiceEmptyDraft();
  }

  const values = [...document.querySelectorAll("[data-service-field]")].reduce((result, node) => {
    result[node.dataset.serviceField] = node.value.trim();
    return result;
  }, {});

  const nextDraft = {
    ...createServiceEmptyDraft(),
    ...(state.modal.serviceDraft || {}),
    ...values
  };

  state.modal = {
    ...state.modal,
    serviceDraft: nextDraft
  };

  return nextDraft;
}

function buildServicePayload(values, current = null) {
  const draft = {
    ...createServiceEmptyDraft(),
    ...(current ? buildServiceDraft(current) : {}),
    ...values
  };
  const statusText = draft.statusText || current?.status?.text || "已验证";

  return {
    ...(current || {}),
    code: draft.code,
    name: draft.name,
    strain: draft.strain,
    gene: draft.gene,
    description: draft.description,
    basicInfo: {
      code: draft.code,
      name: draft.name,
      strain: draft.strain,
      gene: draft.gene,
      statusText,
      description: draft.description
    },
    cultureInfo: {
      cultureCode: draft.cultureCode,
      cultureMode: draft.cultureMode,
      mediumFormula: draft.mediumFormula,
      temperature: draft.temperature,
      ph: draft.ph,
      rpm: draft.rpm,
      cultureStatus: draft.cultureStatus,
      optimizationRecord: draft.optimizationRecord
    },
    analysisInfo: {
      testCode: draft.testCode,
      testItem: draft.testItem,
      testMethod: draft.testMethod,
      cellActivity: draft.cellActivity,
      cellPurity: draft.cellPurity,
      testResult: draft.testResult,
      testDescription: draft.testDescription
    },
    applicationInfo: {
      applicationCode: draft.applicationCode,
      scenarioType: draft.scenarioType,
      applicationField: draft.applicationField,
      applicationStatus: draft.applicationStatus,
      applicationContent: draft.applicationContent
    },
    statusText,
    statusClass: statusTextToClass(statusText)
  };
}

function normalizeAnalysisAction(action) {
  if (!action) {
    return null;
  }

  const label = String(action.label || "").trim();
  const explicitId = String(action.id || "").trim();
  const normalizedId =
    explicitId ||
    {
      编辑: "edit",
      编辑模型: "edit",
      详情: "detail",
      查看详情: "detail",
      查看结果: "detail",
      上传数据集: "upload",
      分析结果: "result",
      删除: "delete"
    }[label] ||
    "";

  return {
    ...action,
    id: normalizedId || explicitId || label
  };
}

function normalizeAnalysisActions(moduleKey, actions) {
  const resultLabelModules = new Set(["omics", "process", "full"]);
  const normalized = (actions || [])
    .map(normalizeAnalysisAction)
    .filter(Boolean)
    .map((action) =>
      resultLabelModules.has(moduleKey) && action.id === "detail"
        ? { ...action, label: "查看结果" }
        : action
    );
  const validIds = new Set(["edit", "detail", "delete", "upload", "result", "view"]);

  if (normalized.length && normalized.every((action) => validIds.has(String(action.id || "").trim().toLowerCase()))) {
    return normalized;
  }

  return [
    { id: "edit", label: "编辑", tone: "blue" },
    { id: "detail", label: resultLabelModules.has(moduleKey) ? "查看结果" : moduleKey === "service" ? "详情" : "查看详情", tone: "blue" },
    { id: "delete", label: "删除", tone: "danger" }
  ];
}

function normalizeAnalysisRow(moduleKey, item) {
  const sourceItem =
    moduleKey === "omics"
      ? hydrateOmicsItem(item)
      : moduleKey === "process"
        ? hydrateProcessItem(item)
        : moduleKey === "full"
          ? hydrateFullItem(item)
          : moduleKey === "service"
            ? hydrateServiceItem(item)
            : item;
  const config = analysisFormConfigs[moduleKey];
  return {
    ...sourceItem,
    id: sourceItem.id,
    status: sourceItem.status?.text
      ? sourceItem.status
      : {
          text: sourceItem.statusText || "进行中",
          className: statusTextToClass(sourceItem.statusText || "进行中")
        },
    actions:
      sourceItem.actions ||
      (moduleKey === "service"
        ? [
            { id: "edit", label: "编辑", tone: "blue" },
            { id: "detail", label: "详情", tone: "blue" },
            { id: "delete", label: "删除", tone: "danger" }
          ]
        : [
            { id: "edit", label: "编辑", tone: "blue" },
            { id: "detail", label: ["omics", "process", "full"].includes(moduleKey) ? "查看结果" : "查看详情", tone: "blue" },
            { id: "delete", label: "删除", tone: "danger" }
          ])
  };
}

function syncAnalysisModule(moduleKey, items) {
  const rows = (items || []).map((item) => normalizeAnalysisRow(moduleKey, item));
  analysisPages[moduleKey].rows = rows;
  analysisPages[moduleKey].footer = `共 ${rows.length} 条记录，每页 10 条`;
}

const __normalizeAnalysisRowWithActionIds = normalizeAnalysisRow;
normalizeAnalysisRow = function normalizeAnalysisRowWithActionIds(moduleKey, item) {
  const row = __normalizeAnalysisRowWithActionIds(moduleKey, item);
  return {
    ...row,
    actions: normalizeAnalysisActions(moduleKey, row.actions)
  };
};

async function loadAnalysisModules() {
  const results = await Promise.all(
    persistedAnalysisModules.map((moduleKey) => apiRequest(`/api/analysis-items?module=${moduleKey}`))
  );

  results.forEach((payload, index) => {
    syncAnalysisModule(persistedAnalysisModules[index], payload.items || []);
  });
}

const SYSTEM_PAGE_STORE_KEY = "engineering-cell-admin-system-pages-v1";
const PORTAL_PLATFORM_CONFIG_KEY = "engineering-cell-portal-platform-config-v1";
const portalConfigUtils = window.PortalConfigShared || {};
const defaultPortalPlatformConfig = portalConfigUtils.defaultPortalPlatformConfig
  ? portalConfigUtils.portalClone(portalConfigUtils.defaultPortalPlatformConfig)
  : {};
const systemInteractiveModules = [
  "system-users",
  "system-roles",
  "system-menus",
  "system-config",
  "system-audit",
  "system-portal-config",
  "system-apis",
  "system-algorithms",
  "system-datasets"
];

function systemDeepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function systemPadDatePart(value) {
  return String(value).padStart(2, "0");
}

function systemTodayString() {
  const now = new Date();
  return `${now.getFullYear()}-${systemPadDatePart(now.getMonth() + 1)}-${systemPadDatePart(now.getDate())}`;
}

function systemNowDateTimeString() {
  const now = new Date();
  return `${now.getFullYear()}-${systemPadDatePart(now.getMonth() + 1)}-${systemPadDatePart(now.getDate())} ${systemPadDatePart(now.getHours())}:${systemPadDatePart(now.getMinutes())}`;
}

function moduleTitleForLog(moduleKey) {
  return (
    systemPages[moduleKey]?.title ||
    analysisPages[moduleKey]?.title ||
    sensorModules[moduleKey]?.label ||
    {
      auth: "登录认证",
      gene: "基因型-表型分析"
    }[moduleKey] ||
    moduleKey ||
    "系统"
  );
}

function getCurrentOperatorName() {
  return state.currentUser?.name || getCurrentUserProfile().name || "张明";
}

function appendOperationLog(moduleKey, content, statusText = "成功") {
  const page = systemPages["system-logs"];
  if (!page) {
    return;
  }
  page.rows.unshift({
    id: `log-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    name: getCurrentOperatorName(),
    module: moduleTitleForLog(moduleKey),
    content,
    ip: "127.0.0.1",
    status: {
      text: statusText,
      className: statusText === "成功" ? "is-valid" : "is-fail"
    },
    createdAt: systemNowDateTimeString()
  });
  page.rows = page.rows.slice(0, 200);
  refreshSystemPageMeta("system-logs");
  writeSystemPageStore();
}

function generateSystemLocalId(prefix) {
  const randomPart =
    globalThis.crypto?.randomUUID?.().replaceAll("-", "").slice(0, 8) ||
    Math.random().toString(16).slice(2, 10);
  return `${prefix}_${randomPart}`;
}

function getSystemStatusClass(moduleKey, statusText = "") {
  const mapping = {
    "system-users": { 启用: "is-valid", 停用: "is-pending" },
    "system-roles": { 启用: "is-valid", 停用: "is-pending" },
    "system-menus": { 显示: "is-valid", 隐藏: "is-pending" },
    "system-logs": { 成功: "is-valid", 失败: "is-fail" },
    "system-config": { 启用: "is-valid", 停用: "is-pending" },
    "system-audit": { 待审核: "is-pending", 审核中: "is-warning", 审核通过: "is-valid", 审核不通过: "is-fail", 已通过: "is-valid", 已退回: "is-fail" },
    "system-portal-config": { 启用: "is-valid", 草稿: "is-pending", 停用: "is-pending" },
    "system-apis": { 启用: "is-valid", 停用: "is-pending" },
    "system-algorithms": { 启用: "is-valid", 停用: "is-pending" },
    "system-datasets": { 启用: "is-valid", 停用: "is-pending" }
  };
  return mapping[moduleKey]?.[statusText] || "is-valid";
}

function getSystemToggleTargetStatus(moduleKey, currentStatus = "") {
  if (moduleKey === "system-menus") {
    return currentStatus === "显示" ? "隐藏" : "显示";
  }
  if (moduleKey === "system-audit") {
    return ["待审核", "审核中"].includes(currentStatus) ? "审核通过" : "待审核";
  }
  if (moduleKey === "system-portal-config") {
    return currentStatus === "启用" ? "停用" : "启用";
  }
  return currentStatus === "启用" ? "停用" : "启用";
}

function getSystemRowDisplayName(moduleKey, row = {}) {
  if (moduleKey === "system-users") {
    return row.name || row.username || row.id || "-";
  }
  return row.name || row.code || row.id || "-";
}

function buildSystemActions(moduleKey, statusText = "") {
  if (!systemInteractiveModules.includes(moduleKey)) {
    return [];
  }
  const toggleLabel = getSystemToggleTargetStatus(moduleKey, statusText);
  const actions = [
    { id: "detail", label: "查看详情", tone: "blue" },
    { id: "edit", label: "编辑", tone: "blue" },
    { id: "toggle", label: toggleLabel, tone: toggleLabel === "停用" || toggleLabel === "隐藏" || toggleLabel === "待审核" ? "danger" : "blue" },
    { id: "delete", label: "删除", tone: "danger" }
  ];
  if (moduleKey === "system-users") {
    actions.splice(1, 0, { id: "assign-role", label: "分配角色", tone: "blue" });
  }
  if (moduleKey === "system-roles") {
    actions.splice(1, 0, { id: "permission", label: "配置权限", tone: "blue" });
  }
  return actions;
}

function hydrateSystemRow(moduleKey, row = {}) {
  const statusText = row.status?.text || row.statusText || "";
  return {
    ...row,
    status: {
      text: statusText,
      className: row.status?.className || getSystemStatusClass(moduleKey, statusText)
    },
    actions: buildSystemActions(moduleKey, statusText)
  };
}

function refreshSystemPageMeta(moduleKey) {
  const page = systemPages[moduleKey];
  if (!page) {
    return;
  }

  page.rows = (page.rows || []).map((row) => hydrateSystemRow(moduleKey, row));
  page.footer = `共 ${page.rows.length} 条记录，每页 10 条`;

  if (moduleKey === "system-users") {
    const enabled = page.rows.filter((row) => row.status.text === "启用").length;
    const disabled = page.rows.filter((row) => row.status.text === "停用").length;
    const todayLogins = page.rows.filter((row) => String(row.createdAt || "").startsWith(systemTodayString())).length;
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(enabled);
    page.stats[2].value = String(disabled);
    page.stats[3].value = String(todayLogins);
  }

  if (moduleKey === "system-roles") {
    page.stats[0].value = String(page.rows.length);
    page.stats[2].value = String(page.rows.reduce((sum, row) => sum + Number(row.userCount || 0), 0));
    page.stats[3].value = String(page.rows.filter((row) => row.type === "系统内置").length);
  }

  if (moduleKey === "system-menus") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.type === "目录").length);
    page.stats[2].value = String(page.rows.filter((row) => row.type === "菜单").length);
    page.stats[3].value = String(page.rows.filter((row) => row.type === "按钮").length);
  }

  if (moduleKey === "system-logs") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.status.text === "成功").length);
    page.stats[2].value = String(page.rows.filter((row) => row.status.text === "失败").length);
    page.stats[3].value = String(page.rows.filter((row) => row.status.text === "失败").length);
  }

  if (moduleKey === "system-config") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.status.text === "启用").length);
    page.stats[2].value = String(page.rows.filter((row) => row.status.text === "停用").length);
    page.stats[3].value = String(page.rows.filter((row) => row.group === "基础配置").length);
  }

  if (moduleKey === "system-audit") {
    page.stats[0].value = String(page.rows.filter((row) => ["待审核", "审核中"].includes(row.status.text)).length);
    page.stats[1].value = String(page.rows.filter((row) => ["审核通过", "已通过"].includes(row.status.text)).length);
    page.stats[2].value = String(page.rows.filter((row) => ["审核不通过", "已退回"].includes(row.status.text)).length);
    page.stats[3].value = String(page.rows.length);
  }

  if (moduleKey === "system-portal-config") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.status.text === "启用").length);
    page.stats[2].value = String(page.rows.filter((row) => row.status.text === "草稿").length);
    page.stats[3].value = String(new Set(page.rows.map((row) => row.section).filter(Boolean)).size);
  }

  if (moduleKey === "system-apis") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.status.text === "启用").length);
    page.stats[2].value = String(page.rows.filter((row) => ["GET", "POST"].includes(row.method)).length);
    page.stats[3].value = String(page.rows.filter((row) => row.status.text === "停用").length);
  }

  if (moduleKey === "system-algorithms") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.status.text === "启用").length);
    page.stats[2].value = String(new Set(page.rows.map((row) => row.type).filter(Boolean)).size);
    page.stats[3].value = String(page.rows.filter((row) => row.status.text === "停用").length);
  }

  if (moduleKey === "system-datasets") {
    page.stats[0].value = String(page.rows.length);
    page.stats[1].value = String(page.rows.filter((row) => row.status.text === "启用").length);
    page.stats[2].value = String(new Set(page.rows.map((row) => row.category).filter(Boolean)).size);
    page.stats[3].value = String(page.rows.filter((row) => row.status.text === "停用").length);
  }
}

function serializeSystemRows(rows = []) {
  return rows.map((row) => {
    const nextRow = systemDeepClone(row);
    delete nextRow.actions;
    return nextRow;
  });
}

function readSystemPageStore() {
  try {
    const raw = window.localStorage.getItem(SYSTEM_PAGE_STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function writeSystemPageStore() {
  try {
    const payload = Object.fromEntries(
      Object.keys(systemPages).map((moduleKey) => [moduleKey, serializeSystemRows(systemPages[moduleKey].rows || [])])
    );
    window.localStorage.setItem(SYSTEM_PAGE_STORE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("system page store write failed", error);
  }
}

function normalizePortalConfig(config = {}) {
  if (typeof portalConfigUtils.normalizePortalPlatformConfig === "function") {
    return portalConfigUtils.normalizePortalPlatformConfig(config || {});
  }
  return {
    ...defaultPortalPlatformConfig,
    ...(config || {})
  };
}

function readPortalPlatformConfig() {
  try {
    const raw = window.localStorage.getItem(PORTAL_PLATFORM_CONFIG_KEY);
    return normalizePortalConfig(raw ? JSON.parse(raw) : defaultPortalPlatformConfig);
  } catch (error) {
    return normalizePortalConfig(defaultPortalPlatformConfig);
  }
}

function writePortalPlatformConfig(config) {
  const nextConfig = normalizePortalConfig(config);
  window.localStorage.setItem(PORTAL_PLATFORM_CONFIG_KEY, JSON.stringify(nextConfig));
  return nextConfig;
}

function resetPortalPlatformConfig() {
  window.localStorage.removeItem(PORTAL_PLATFORM_CONFIG_KEY);
  return normalizePortalConfig(defaultPortalPlatformConfig);
}

function collectPortalObjectGroup(group, fallback = []) {
  const next = fallback.map((item) => systemDeepClone(item));
  document.querySelectorAll(`[data-portal-object-group="${group}"]`).forEach((node) => {
    const index = Number(node.dataset.portalObjectIndex);
    const field = node.dataset.portalObjectField;
    const format = node.dataset.portalObjectFormat || "text";
    const pairMode = node.dataset.portalObjectPairMode || "value-label";
    if (!next[index]) {
      next[index] = {};
    }
    next[index][field] =
      format === "lines" || format === "pairs"
        ? parsePortalMultiline(node.value.trim(), format, pairMode)
        : node.value.trim();
  });
  return next;
}

function collectPortalConfigFormValues() {
  const config = normalizePortalConfig(readPortalPlatformConfig());
  document.querySelectorAll("[data-portal-field]").forEach((node) => {
    config[node.dataset.portalField] = node.value.trim();
  });
  document.querySelectorAll("[data-portal-list-field]").forEach((node) => {
    const field = node.dataset.portalListField;
    const format = node.dataset.portalListFormat || "lines";
    const pairMode = node.dataset.portalListPairMode || "value-label";
    config[field] = parsePortalMultiline(node.value.trim(), format, pairMode);
  });
  const linksByIndex = {};
  document.querySelectorAll("[data-portal-link-field]").forEach((node) => {
    const index = node.dataset.portalLinkIndex;
    const field = node.dataset.portalLinkField;
    linksByIndex[index] = {
      ...(linksByIndex[index] || {}),
      [field]: node.value.trim()
    };
  });
  config.links = Object.keys(linksByIndex)
    .sort((a, b) => Number(a) - Number(b))
    .map((index) => linksByIndex[index])
    .filter((link) => link.name || link.url);
  config.valueItems = collectPortalObjectGroup("valueItems", config.valueItems);
  config.flowItems = collectPortalObjectGroup("flowItems", config.flowItems);
  config.databaseItems = collectPortalObjectGroup("databaseItems", config.databaseItems);
  config.sceneItems = collectPortalObjectGroup("sceneItems", config.sceneItems);
  config.toolItems = collectPortalObjectGroup("toolItems", config.toolItems);
  config.caseItems = collectPortalObjectGroup("caseItems", config.caseItems);
  return normalizePortalConfig(config);
}

function refreshPortalLinkList(config) {
  const list = document.querySelector("[data-portal-link-list]");
  if (list) {
    list.innerHTML = renderPortalLinkRows(config.links);
  }
}

function savePortalConfigFromForm() {
  const config = collectPortalConfigFormValues();
  if (!config.browserTitle || !config.siteTitle || !config.description) {
    showToast("请完整填写平台标题、门户主标题和门户简介");
    return null;
  }
  let saved = null;
  try {
    saved = writePortalPlatformConfig(config);
  } catch (error) {
    showToast("配置保存失败，图片或内容可能超过浏览器本地存储限制");
    return null;
  }
  const page = systemPages["system-portal-config"];
  if (page?.rows?.length) {
    page.rows = page.rows.map((row) =>
      hydrateSystemRow("system-portal-config", {
        ...row,
        owner: getCurrentOperatorName(),
        status: { text: "启用", className: getSystemStatusClass("system-portal-config", "启用") },
        updatedAt: systemNowDateTimeString()
      })
    );
    refreshSystemPageMeta("system-portal-config");
    writeSystemPageStore();
  }
  appendOperationLog("system-portal-config", "保存门户页平台配置");
  return saved;
}

function applyPersistedSystemPages() {
  const store = readSystemPageStore();
  Object.keys(systemPages).forEach((moduleKey) => {
    if (Array.isArray(store[moduleKey])) {
      systemPages[moduleKey].rows = systemDeepClone(store[moduleKey]);
    }
    refreshSystemPageMeta(moduleKey);
    analysisPages[moduleKey] = systemPages[moduleKey];
  });
}

function getSystemRow(moduleKey, itemId) {
  return systemPages[moduleKey]?.rows.find((row) => row.id === itemId) || null;
}

function getSystemPageKeyFromPrimaryAction(actionValue = "") {
  if (isSystemMenu(actionValue)) {
    return actionValue;
  }
  return Object.keys(systemPages).find((moduleKey) => systemPages[moduleKey].primaryButton === actionValue) || "";
}

function buildSystemPayload(moduleKey, values, current = null) {
  if (moduleKey === "system-users") {
    const statusText = values.statusText || current?.status?.text || "启用";
    return {
      id: current?.id || generateSystemLocalId("user"),
      username: values.username || current?.username || "",
      name: values.name || current?.name || "",
      account: values.username || current?.account || current?.username || "",
      role: values.role || current?.role || "访客",
      department: values.department || values.organization || current?.department || "",
      mobile: values.mobile || current?.mobile || "",
      gender: values.gender || current?.gender || "",
      email: values.email || current?.email || "",
      organization: values.organization || current?.organization || "",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      createdAt: current?.createdAt || systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-roles") {
    const statusText = values.statusText || current?.status?.text || "启用";
    return {
      id: current?.id || generateSystemLocalId("role"),
      name: values.name || current?.name || "",
      code: values.code || current?.code || "",
      type: values.type || current?.type || "自定义",
      permissions: values.permissions || current?.permissions || ["dashboard:view"],
      userCount: current?.userCount || "0",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      updatedAt: systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-menus") {
    const statusText = values.statusText || current?.status?.text || "显示";
    return {
      id: current?.id || generateSystemLocalId("menu"),
      name: values.name || current?.name || "",
      type: values.type || current?.type || "菜单",
      route: values.route || current?.route || "",
      permission: values.permission || current?.permission || "",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      sort: values.sort || current?.sort || "100"
    };
  }

  if (moduleKey === "system-config") {
    const statusText = values.statusText || current?.status?.text || "启用";
    return {
      id: current?.id || generateSystemLocalId("config"),
      name: values.name || current?.name || "",
      code: values.code || current?.code || "",
      group: values.group || current?.group || "基础配置",
      value: values.value || current?.value || "",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      updatedAt: systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-audit") {
    const statusText = values.statusText || current?.status?.text || "待审核";
    const storageResult =
      values.storageResult ||
      current?.storageResult ||
      (["审核通过", "已通过"].includes(statusText) ? "已完成入库" : ["审核不通过", "已退回"].includes(statusText) ? "已驳回" : "待审核入库");
    return {
      id: current?.id || generateSystemLocalId("audit"),
      name: values.name || current?.name || "",
      alias: values.alias || current?.alias || "",
      materialType: values.materialType || current?.materialType || "cell",
      dataType: values.dataType || current?.dataType || "菌株基础数据",
      flowType: values.flowType || current?.flowType || "工程细胞数据上传",
      type: values.type || current?.type || "数据入库",
      submitter: values.submitter || current?.submitter || getCurrentOperatorName(),
      reviewer: values.reviewer || current?.reviewer || "张明",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      storageResult,
      submittedAt: current?.submittedAt || systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-portal-config") {
    const statusText = values.statusText || current?.status?.text || "草稿";
    return {
      id: current?.id || generateSystemLocalId("portal"),
      name: values.name || current?.name || "",
      section: values.section || current?.section || "首页首屏",
      contentType: values.contentType || current?.contentType || "文本",
      owner: values.owner || current?.owner || getCurrentOperatorName(),
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      updatedAt: systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-apis") {
    const statusText = values.statusText || current?.status?.text || "启用";
    return {
      id: current?.id || generateSystemLocalId("api"),
      name: values.name || current?.name || "",
      code: values.code || current?.code || "",
      method: values.method || current?.method || "GET",
      path: values.path || current?.path || "",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      updatedAt: systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-algorithms") {
    const statusText = values.statusText || current?.status?.text || "启用";
    return {
      id: current?.id || generateSystemLocalId("algo"),
      name: values.name || current?.name || "",
      type: values.type || current?.type || "关联分析",
      version: values.version || current?.version || "",
      packageName: values.packageName || current?.packageName || "",
      packageSize: values.packageSize || current?.packageSize || "",
      runtime: values.runtime || current?.runtime || "Python",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      updatedAt: systemNowDateTimeString()
    };
  }

  if (moduleKey === "system-datasets") {
    const statusText = values.statusText || current?.status?.text || "启用";
    return {
      id: current?.id || generateSystemLocalId("data"),
      name: values.name || current?.name || "",
      category: values.category || current?.category || "过程数据",
      source: values.source || current?.source || "",
      format: values.format || current?.format || "CSV",
      status: { text: statusText, className: getSystemStatusClass(moduleKey, statusText) },
      updatedAt: systemNowDateTimeString()
    };
  }

  return current || {};
}

const rolePermissionNodes = [
  { group: "数据看板", items: [{ code: "dashboard:view", label: "查看数据看板" }, { code: "dashboard:export", label: "导出看板报表" }] },
  {
    group: "发酵过程数据检测工具",
    items: [
      { code: "sensor:physical:manage", label: "物理传感器管理" },
      { code: "sensor:biological:manage", label: "生物传感器管理" },
      { code: "sensor:threshold:edit", label: "阈值配置" },
      { code: "sensor:import", label: "批量导入" }
    ]
  },
  {
    group: "数据分析",
    items: [
      { code: "analysis:gpa:manage", label: "基因型-表型数据分析" },
      { code: "analysis:omics:manage", label: "组学数据分析" },
      { code: "analysis:process:manage", label: "发酵过程数据分析" },
      { code: "analysis:full:manage", label: "全流程数据分析" }
    ]
  },
  {
    group: "系统管理",
      items: [
        { code: "system:user:manage", label: "用户管理" },
        { code: "system:role:permission", label: "角色权限配置" },
        { code: "system:menu:manage", label: "菜单权限配置" },
        { code: "system:api:manage", label: "接口管理" },
        { code: "system:algorithm:manage", label: "算法管理" },
        { code: "system:data:manage", label: "数据管理" },
        { code: "system:log:export", label: "操作日志导出" }
      ]
    }
];

function renderAssignRoleModal(itemId) {
  const user = getSystemRow("system-users", itemId);
  if (!user) {
    return "";
  }
  const enabledRoles = (systemPages["system-roles"]?.rows || []).filter((role) => role.status?.text !== "停用");
  return renderGeneModalShell({
    title: "分配角色",
    sizeClass: "is-gene-form",
    body: `
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>${escapeHtml(user.name || user.account)}</h4><p class="section-caption">为当前用户选择一个系统角色，保存后同步更新用户列表并写入操作日志。</p></div>
        </div>
        <div class="gene-form-grid">
          ${renderGeneField({
            name: "assignRole",
            label: "所属角色",
            type: "select",
            value: user.role || enabledRoles[0]?.name || "访客",
            options: enabledRoles.map((role) => role.name),
            rule: "必选，角色权限会影响菜单和按钮可见范围"
          })}
        </div>
      </section>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-system-submit="assign-role|system-users|${itemId}">保存角色</button>
    `
  });
}

function renderRolePermissionModal(itemId) {
  const role = getSystemRow("system-roles", itemId);
  if (!role) {
    return "";
  }
  const selected = new Set(role.permissions || ["dashboard:view", "analysis:gpa:manage"]);
  const body = rolePermissionNodes
    .map(
      (group) => `
        <section class="gene-section-card">
          <div class="gene-section-head"><h4>${escapeHtml(group.group)}</h4></div>
          <div class="permission-node-grid">
            ${group.items
              .map(
                (item) => `
                  <label class="permission-node">
                    <input type="checkbox" data-permission-node="${escapeHtml(item.code)}" ${selected.has(item.code) ? "checked" : ""} />
                    <span>${escapeHtml(item.label)}</span>
                    <em>${escapeHtml(item.code)}</em>
                  </label>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
  return renderGeneModalShell({
    title: `配置权限 - ${role.name}`,
    sizeClass: "is-gene-large",
    body: `${body}${renderRequirementHint("权限保存后会更新角色权限节点，并进入操作日志。", "strong")}`,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-system-submit="permission|system-roles|${itemId}">保存权限</button>
    `
  });
}

async function submitSystemAction(action, moduleKey, itemId = "") {
  const page = systemPages[moduleKey];
  if (!page) {
    return;
  }

  if (action === "export") {
    exportOperationLogs();
    appendOperationLog("system-logs", "导出操作日志");
    return;
  }

  const rowIndex = page.rows.findIndex((row) => row.id === itemId);
  const current = rowIndex >= 0 ? page.rows[rowIndex] : null;

  if (action === "create" || action === "edit") {
    const values = getAnalysisFormValues();
    const nextRow = hydrateSystemRow(moduleKey, buildSystemPayload(moduleKey, values, current));
    if (action === "create") {
      page.rows.unshift(nextRow);
    } else if (rowIndex >= 0) {
      page.rows.splice(rowIndex, 1, nextRow);
    }
    refreshSystemPageMeta(moduleKey);
    writeSystemPageStore();
    appendOperationLog(moduleKey, `${action === "create" ? "新增" : "编辑"}${moduleTitleForLog(moduleKey)}：${getSystemRowDisplayName(moduleKey, nextRow)}`);
    return;
  }

  if (action === "assign-role" && current) {
    const values = getGeneFormValues();
    const roleName = values.assignRole || current.role || "访客";
    page.rows.splice(rowIndex, 1, hydrateSystemRow(moduleKey, { ...current, role: roleName }));
    refreshSystemPageMeta(moduleKey);
    writeSystemPageStore();
    appendOperationLog(moduleKey, `为用户“${getSystemRowDisplayName(moduleKey, current)}”分配角色“${roleName}”`);
    return;
  }

  if (action === "permission" && current) {
    const permissions = [...document.querySelectorAll("[data-permission-node]")]
      .filter((node) => node.checked)
      .map((node) => node.dataset.permissionNode);
    page.rows.splice(rowIndex, 1, hydrateSystemRow(moduleKey, { ...current, permissions, updatedAt: systemNowDateTimeString() }));
    refreshSystemPageMeta(moduleKey);
    writeSystemPageStore();
    appendOperationLog(moduleKey, `修改角色权限“${getSystemRowDisplayName(moduleKey, current)}”，权限节点${permissions.length}个`);
    return;
  }

  if (action === "toggle" && current) {
    const nextStatusText = getSystemToggleTargetStatus(moduleKey, current.status.text);
    page.rows.splice(
      rowIndex,
      1,
      hydrateSystemRow(moduleKey, {
        ...current,
        status: {
          text: nextStatusText,
          className: getSystemStatusClass(moduleKey, nextStatusText)
        }
      })
    );
    refreshSystemPageMeta(moduleKey);
    writeSystemPageStore();
    appendOperationLog(moduleKey, `${nextStatusText}${moduleTitleForLog(moduleKey)}：${getSystemRowDisplayName(moduleKey, current)}`);
    return;
  }

  if (action === "delete" && current) {
    page.rows.splice(rowIndex, 1);
    refreshSystemPageMeta(moduleKey);
    writeSystemPageStore();
    appendOperationLog(moduleKey, `删除${moduleTitleForLog(moduleKey)}：${getSystemRowDisplayName(moduleKey, current)}`);
  }
}

function renderSystemToggleModal(moduleKey, itemId) {
  const row = getSystemRow(moduleKey, itemId);
  if (!row) {
    return "";
  }

  const actionLabel = getSystemToggleTargetStatus(moduleKey, row.status.text);
  const name = getSystemRowDisplayName(moduleKey, row);

  return renderGeneModalShell({
    title: `确认${actionLabel}`,
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定要${actionLabel}该记录吗？</h4>
        <p>${escapeHtml(name)}</p>
        <span>确认后将立即更新当前记录状态，刷新页面后仍会保留。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-system-submit="toggle|${moduleKey}|${itemId}">确认${actionLabel}</button>
    `
  });
}

function renderSystemExportModal(moduleKey) {
  return renderGeneModalShell({
    title: "导出操作日志",
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-doc")}</div>
        <h4>确认导出当前操作日志吗？</h4>
        <p>导出范围为当前页面已展示的日志记录。</p>
        <span>确认后将生成导出任务，便于后续统一下载留档。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-system-submit="export|${moduleKey}|">确认导出</button>
    `
  });
}

function exportOperationLogs() {
  const rows = [
    ["操作人", "操作模块", "操作内容", "IP地址", "操作结果", "操作时间"],
    ...(systemPages["system-logs"]?.rows || []).map((row) => [
      row.name,
      row.module,
      row.content,
      row.ip,
      row.status?.text || "",
      row.createdAt
    ])
  ];
  downloadCsvFile("工程细胞操作日志.csv", rows);
}

function exportGeneResult(projectId) {
  const project = getGeneProject(projectId);
  const rows = [
    ["项目名称", project.name],
    ["菌株类型", project.strain],
    ["表型类型", project.phenotype],
    ["分析方法", project.method],
    ["显著性阈值", project.threshold],
    ["推荐基因型组合", project.prediction?.combo || ""],
    ["预测产量", project.prediction?.yield || ""],
    ["置信区间", project.prediction?.interval || ""],
    ["置信度", project.prediction?.confidence || ""],
    [],
    ["显著位点", "染色体", "位置", "P值", "效应值", "关联基因"]
  ];
  project.snps.forEach((snp) => {
    rows.push([snp.snpId, snp.chromosome, snp.position, snp.pValue, snp.effect, snp.gene]);
  });
  downloadCsvFile(`${project.name}_GPA分析结果.csv`, rows);
  appendOperationLog("gene", `导出GPA分析结果：${project.name}`);
}

function mergeSensorRecord(moduleKey, record) {
  const module = sensorModules[moduleKey];
  let batch = module.batches.find((item) => item.id === record.batchId);
  if (!batch) {
    batch = {
      id: record.batchId,
      badge: "新增",
      badgeClass: "badge-other",
      statusText: "运行中",
      tone: "running",
      period: "系统新增批次",
      records: []
    };
    module.batches.unshift(batch);
  }

  if (!batch.records.find((item) => item.id === record.id)) {
    batch.records.unshift(record);
  }
}

function sensorBatchConcentrationMeta(concentration = "中浓度") {
  const mapping = {
    高浓度: { badge: "高浓度", badgeClass: "badge-high" },
    中浓度: { badge: "中浓度", badgeClass: "badge-mid" },
    低浓度: { badge: "低浓度", badgeClass: "badge-low" }
  };
  return mapping[concentration] || mapping["中浓度"];
}

function normalizeBatchCellName(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^\u4e00-\u9fa5A-Za-z0-9_-]/g, "");
}

function generateSensorBatchId(cellName = "", date = new Date(), concentration = "中浓度") {
  const normalizedName = normalizeBatchCellName(cellName) || "CELL";
  const pad = (value) => String(value).padStart(2, "0");
  const timestamp = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}${pad(date.getHours())}${pad(date.getMinutes())}`;
  return `${normalizedName}-${timestamp}-${concentration || "中浓度"}`;
}

function getSensorBatch(moduleKey, batchId) {
  return sensorModules[moduleKey]?.batches.find((item) => item.id === batchId) || null;
}

function buildSensorBatchPayload(values = {}, current = null) {
  const cellName = String(values.cellName || "").trim();
  const concentration = String(values.concentration || current?.badge || "中浓度").trim();
  const id = String(values.batchId || "").trim() || generateSensorBatchId(cellName, new Date(), concentration);
  const meta = sensorBatchConcentrationMeta(concentration);
  return {
    ...current,
    id,
    cellName,
    badge: meta.badge,
    badgeClass: meta.badgeClass,
    statusText: current?.statusText || "运行中",
    tone: current?.tone || "running",
    period: current?.period || "新建批次，等待录入",
    records: current?.records || []
  };
}

function upsertSensorBatch(moduleKey, mode, originalBatchId, values) {
  const module = sensorModules[moduleKey];
  if (!module) {
    throw new Error("未找到传感器模块");
  }
  const current = originalBatchId ? getSensorBatch(moduleKey, originalBatchId) : null;
  const payload = buildSensorBatchPayload(values, current);
  if (!payload.id) {
    throw new Error("请输入批次号");
  }
  if (module.batches.some((item) => item.id === payload.id && item.id !== originalBatchId)) {
    throw new Error("批次号已存在，请更换后再保存");
  }
  if (mode === "edit" && current) {
    const index = module.batches.findIndex((item) => item.id === originalBatchId);
    module.batches[index] = payload;
    if (state.activeBatch[moduleKey] === originalBatchId) {
      state.activeBatch[moduleKey] = payload.id;
    }
    return payload;
  }
  module.batches.unshift(payload);
  state.activeBatch[moduleKey] = payload.id;
  state.pagination[moduleKey] = 1;
  return payload;
}

function deleteSensorBatch(moduleKey, batchId) {
  const module = sensorModules[moduleKey];
  if (!module) {
    throw new Error("未找到传感器模块");
  }
  const index = module.batches.findIndex((item) => item.id === batchId);
  if (index < 0) {
    throw new Error("未找到批次");
  }
  if (module.batches.length <= 1) {
    throw new Error("至少保留一个批次");
  }
  module.batches.splice(index, 1);
  if (state.activeBatch[moduleKey] === batchId) {
    state.activeBatch[moduleKey] = module.batches[0]?.id || "";
    state.pagination[moduleKey] = 1;
  }
}

function recalcSensorSummary(moduleKey) {
  const records = sensorModules[moduleKey].batches.flatMap((batch) => batch.records);
  sensorModules[moduleKey].summary = [
    { value: String(records.length), label: "总记录数", tone: "blue" },
    { value: String(records.filter((item) => item.statusClass === "is-normal").length), label: "正常数", tone: "green" },
    { value: String(records.filter((item) => item.statusClass === "is-warning").length), label: "预警数", tone: "orange" },
    { value: String(records.filter((item) => item.statusClass === "is-error").length), label: "异常数", tone: "red" }
  ];
}

async function loadSensorRecords() {
  const results = await Promise.all([
    apiRequest("/api/sensor-records?module=physical"),
    apiRequest("/api/sensor-records?module=biological")
  ]);

  ["physical", "biological"].forEach((moduleKey, index) => {
    (results[index].items || []).forEach((record) => {
      mergeSensorRecord(moduleKey, record);
    });
    recalcSensorSummary(moduleKey);
  });
}

const state = {
  scene: "auth",
  authView: "login",
  activeMenu: "dashboard",
  dashboardRange: "week",
  dashboardChartRanges: {
    storage: "30d",
    resource: "30d",
    audit: "30d",
    ranking: "30d"
  },
  sensorView: {
    physical: "list",
    biological: "list"
  },
  activeBatch: {
    physical: sensorModules.physical.batches[0].id,
    biological: sensorModules.biological.batches[0].id
  },
  statusFilter: {
    physical: "all",
    biological: "all"
  },
  pagination: {
    physical: 1,
    biological: 1,
    catalog: 1,
    gene: 1,
    omics: 1,
    process: 1,
    full: 1,
    service: 1
  },
  catalogFilters: {
    keyword: "",
    category: "全部",
    format: "全部",
    status: "全部"
  },
  analysisFilters: {},
  auditMaterialType: "cell",
  auditStatus: "all",
  algorithmPlayground: {
    activeId: "algo-1",
    language: "python",
    form: {
      target_type: "industry",
      time_range: "2020-2024",
      comparison_targets: "research_institutes"
    },
    result: ""
  },
  algorithmUploadDraft: {
    fileName: "",
    fileSize: 0
  },
  gpa: {
    tab: "search",
    compound: "苯砜",
    phenotype: "耐受",
    chassis: "酵母",
    pathType: "",
    pathSource: "",
    pathLayout: "力导向",
    selectedGene: "gpa-genea",
    selectedPath: "path-hidden-fa",
    selectedDataset: "ds-benzenesulfone",
    selectedModel: "model-benzenesulfone",
    selectedDesign: "design-001",
    pathContext: "苯砜 + 耐受",
    statTab: "pca",
    statRunning: false,
    statDone: false,
    aiStep: 1,
    aiTraining: false,
    aiTrained: false,
    importFileName: "",
    importFileSize: 0
  },
  gpaPaths: gpaInitialPaths.map((item) => ({ ...item })),
  gpaDatasets: gpaInitialDatasets.map((item) => ({ ...item })),
  gpaModels: gpaInitialModels.map((item) => ({ ...item })),
  gpaDesigns: gpaInitialDesigns.map((item) => ({ ...item, genes: item.genes.map((gene) => ({ ...gene })), dbtl: item.dbtl.map((stage) => ({ ...stage })) })),
  openNavGroup: "",
  standardsModule: "gpa",
  qualityModule: "gpa",
  modal: null,
  sidebarOpen: false,
  currentUser: null,
  captchaCodes: {
    login: "",
    register: "",
    recover: ""
  }
};

analysisPages.standards = {
  key: "standards",
  title: "工程细胞数据标准体系",
  breadcrumb: ["首页", "工程细胞主题库", "工程细胞数据标准体系"],
  primaryButton: "",
  headerTools: false,
  filters: [],
  columns: [],
  rows: []
};

const ingestionPageConfig = {
  "ingestion-gpa": {
    title: "GPA数据管理",
    breadcrumb: ["首页", "工程细胞数据入库", "GPA数据管理"],
    entryPage: "gpa-wet"
  },
  "ingestion-omics": {
    title: "多组学数据管理",
    breadcrumb: ["首页", "工程细胞数据入库", "多组学数据管理"],
    entryPage: "multiomics-research"
  },
  "ingestion-fermentation": {
    title: "发酵过程数据",
    breadcrumb: ["首页", "工程细胞数据入库", "发酵过程数据"],
    entryPage: "ferm-scale"
  }
};

Object.entries(ingestionPageConfig).forEach(([key, config]) => {
  analysisPages[key] = {
    key,
    title: config.title,
    breadcrumb: config.breadcrumb,
    primaryButton: "",
    headerTools: false,
    filters: [],
    columns: [],
    rows: []
  };
});

const qualityPageConfig = {
  "quality-gpa": {
    title: "GPA 数据质量控制",
    breadcrumb: ["首页", "工程细胞质量控制", "GPA 数据质量控制"],
    panel: "gpa"
  },
  "quality-omics": {
    title: "组学数据质量控制",
    breadcrumb: ["首页", "工程细胞质量控制", "组学数据质量控制"],
    panel: "omics"
  },
  "quality-ferment": {
    title: "发酵过程数据质控",
    breadcrumb: ["首页", "工程细胞质量控制", "发酵过程数据质控"],
    panel: "ferment"
  }
};

Object.entries(qualityPageConfig).forEach(([key, config]) => {
  analysisPages[key] = {
    key,
    title: config.title,
    breadcrumb: config.breadcrumb,
    primaryButton: "",
    headerTools: false,
    filters: [],
    columns: [],
    rows: []
  };
});

const algorithmCapabilityLibrary = {
  "algo-1": {
    title: "基础指标分析模型",
    subtitle: "用于对专题对象进行基础指标统计、对比和量化分析，是科技专题分析的基础支撑能力。",
    featureTags: ["基础指标统计分析", "多维度对比分析", "量化评估与趋势分析"],
    sceneTags: ["产业规模统计", "发展水平对比", "趋势研判"],
    endpoint: "/api/v1/basic-indicator-analysis",
    requestExample: {
      python: String.raw`# keyword="import requests"
# keyword="import json"

url = "https://api.example.com/api/v1/basic-indicator-analysis"
headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_API_KEY"
}

data = {
  "target_type": "industry",
  "time_range": "2020-2024",
  "comparison_targets": "research_institutes"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,
      curl: String.raw`curl --request POST "https://api.example.com/api/v1/basic-indicator-analysis" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data '{
    "target_type": "industry",
    "time_range": "2020-2024",
    "comparison_targets": "research_institutes"
  }'`,
      nodejs: String.raw`const response = await fetch("https://api.example.com/api/v1/basic-indicator-analysis", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    target_type: "industry",
    time_range: "2020-2024",
    comparison_targets: "research_institutes"
  })
});

const result = await response.json();
console.log(result);`
    },
    responseExample: String.raw`{
  "code": 200,
  "message": "success",
  "data": {
    "tool": "基础指标分析模型",
    "result": {
      "time_range": "2020-2024",
      "target_type": "industry",
      "analysis_results": [
        { "indicator": "市场规模", "value": 1250.5, "unit": "亿元", "growth_rate": 15.3 },
        { "indicator": "企业数量", "value": 8542, "unit": "家", "growth_rate": 12.8 }
      ]
    },
    "meta": {
      "processing_time": 0.123,
      "timestamp": "2026-04-21T10:55:45.549Z"
    }
  }
}`,
    testOutput: String.raw`{
  "tool": "基础指标分析模型",
  "status": "success",
  "summary": "已完成 2020-2024 年 industry 对象基础指标分析",
  "highlights": [
    "市场规模同比增长 15.3%",
    "企业数量增长 12.8%",
    "科研院所对比维度已纳入输出"
  ]
}`
  },
  "algo-2": {
    title: "区间预测分析模型",
    subtitle: "用于专题对象未来区间变化预测，支持趋势判断、风险预警和策略建议输出。",
    featureTags: ["趋势区间预测", "关键指标波动评估", "风险预警输出"],
    sceneTags: ["年度趋势预测", "技术路线评估", "能力波动预警"],
    endpoint: "/api/v1/range-prediction-analysis",
    requestExample: {
      python: String.raw`import requests

response = requests.post(
  "https://api.example.com/api/v1/range-prediction-analysis",
  headers={"Authorization": "Bearer YOUR_API_KEY"},
  json={
    "target_type": "enterprise",
    "time_range": "2022-2026",
    "comparison_targets": "universities"
  }
)

print(response.json())`,
      curl: String.raw`curl -X POST "https://api.example.com/api/v1/range-prediction-analysis" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"target_type":"enterprise","time_range":"2022-2026","comparison_targets":"universities"}'`,
      nodejs: String.raw`const res = await fetch("https://api.example.com/api/v1/range-prediction-analysis", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: "Bearer YOUR_API_KEY" },
  body: JSON.stringify({ target_type: "enterprise", time_range: "2022-2026", comparison_targets: "universities" })
});
console.log(await res.json());`
    },
    responseExample: String.raw`{
  "code": 200,
  "message": "success",
  "data": {
    "tool": "区间预测分析模型",
    "forecast_window": "2022-2026",
    "prediction": {
      "innovation_index": "78.6-84.1",
      "risk_level": "medium",
      "key_driver": "研发投入持续提升"
    }
  }
}`,
    testOutput: String.raw`{
  "tool": "区间预测分析模型",
  "status": "success",
  "summary": "企业对象预测已完成，输出 2022-2026 趋势区间",
  "risk_level": "medium"
}`
  },
  "algo-3": {
    title: "参数寻优分析模型",
    subtitle: "支持多目标约束下的关键参数组合寻优，适用于复杂业务场景的策略模拟与方案推荐。",
    featureTags: ["多目标参数寻优", "约束条件求解", "推荐方案输出"],
    sceneTags: ["资源配置优化", "专题方案组合", "参数敏感度分析"],
    endpoint: "/api/v1/parameter-optimization-analysis",
    requestExample: {
      python: String.raw`payload = {
  "target_type": "institution",
  "time_range": "2021-2025",
  "comparison_targets": "enterprise"
}`,
      curl: String.raw`curl -X POST "https://api.example.com/api/v1/parameter-optimization-analysis" -d '{"target_type":"institution"}'`,
      nodejs: String.raw`console.log("parameter optimization request ready");`
    },
    responseExample: String.raw`{
  "code": 200,
  "message": "success",
  "data": {
    "tool": "参数寻优分析模型",
    "best_plan": "方案 B",
    "score": 92.4
  }
}`,
    testOutput: String.raw`{
  "tool": "参数寻优分析模型",
  "status": "offline",
  "summary": "当前模型已停用，暂不支持在线测试"
}`
  },
  "algo-4": {
    title: "组学质控分析模型",
    subtitle: "用于识别数据异常、评估样本质量并输出清洗建议，支撑后续分析任务稳定运行。",
    featureTags: ["样本质量评估", "异常检测", "清洗建议生成"],
    sceneTags: ["数据入库前质控", "批次比对", "异常样本识别"],
    endpoint: "/api/v1/omics-qc-analysis",
    requestExample: {
      python: String.raw`print("omics qc request demo")`,
      curl: String.raw`curl https://api.example.com/api/v1/omics-qc-analysis`,
      nodejs: String.raw`console.log("omics qc demo")`
    },
    responseExample: String.raw`{
  "code": 200,
  "message": "success",
  "data": {
    "tool": "组学质控分析模型",
    "qc_score": 96.2,
    "recommendation": "建议保留当前样本集"
  }
}`,
    testOutput: String.raw`{
  "tool": "组学质控分析模型",
  "status": "success",
  "summary": "样本集质量评估完成，整体质量良好"
}`
  }
};

const defaultLoginCredentials = {
  account: "zhangming",
  password: "Admin@123456"
};

const AUTH_SESSION_KEY = "engineering-cell-auth-session-v1";
const PORTAL_RETURN_TIP_KEY = "engineering-cell-portal-return-tip-v1";

function createSessionToken(account) {
  const random = globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
  return `ec-${String(account || "user")}-${Date.now()}-${random}`.replace(/[^A-Za-z0-9_-]/g, "");
}

function readAuthSession() {
  try {
    const raw = window.localStorage.getItem(AUTH_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeAuthSession(session) {
  try {
    window.localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    console.warn("auth session write failed", error);
  }
}

function clearAuthSession() {
  try {
    window.localStorage.removeItem(AUTH_SESSION_KEY);
  } catch (error) {
    console.warn("auth session clear failed", error);
  }
}

function writePortalReturnTip(message) {
  try {
    window.localStorage.setItem(PORTAL_RETURN_TIP_KEY, message);
  } catch (error) {
    console.warn("portal return tip write failed", error);
  }
}

function shouldForceLoginView() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("auth") === "login" || params.get("login") === "1";
  } catch (error) {
    return false;
  }
}

function getCurrentAccount() {
  return state.currentUser?.account || readAuthSession()?.account || defaultLoginCredentials.account;
}

function downloadCsvFile(fileName, rows) {
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function parseCsvText(text) {
  const lines = String(text || "").split(/\r?\n/).filter((line) => line.trim());
  if (!lines.length) {
    return [];
  }
  const parseLine = (line) => {
    const cells = [];
    let current = "";
    let quoted = false;
    for (let index = 0; index < line.length; index += 1) {
      const char = line[index];
      const next = line[index + 1];
      if (char === '"' && quoted && next === '"') {
        current += '"';
        index += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        cells.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    cells.push(current.trim());
    return cells;
  };
  const headers = parseLine(lines.shift());
  return lines.map((line) => {
    const values = parseLine(line);
    return headers.reduce((row, header, index) => {
      row[header || `字段${index + 1}`] = values[index] || "";
      return row;
    }, {});
  });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("文件读取失败"));
    reader.readAsText(file, "utf-8");
  });
}

function getCurrentUserProfile() {
  const fallback = {
    username: getCurrentAccount(),
    account: getCurrentAccount(),
    name: "张明",
    mobile: "13800138001",
    gender: "男",
    email: "zhangming@gkexin.cn",
    organization: "国科信平台平台主管部",
    status: { text: "启用", className: "is-valid" },
    createdAt: "2026-05-12 09:32"
  };
  const account = getCurrentAccount();
  const row =
    systemPages["system-users"]?.rows?.find((item) => [item.account, item.username, item.email].some((value) => String(value || "") === account)) ||
    systemPages["system-users"]?.rows?.[0];
  if (!row) {
    return fallback;
  }
  const statusText = row.status?.text || fallback.status.text;
  return {
    username: row.username || row.account || fallback.username,
    account: row.account || row.username || fallback.account,
    name: row.name || fallback.name,
    mobile: row.mobile || fallback.mobile,
    gender: row.gender || fallback.gender,
    email: row.email || fallback.email,
    organization: row.organization || row.department || fallback.organization,
    status: {
      text: statusText,
      className: row.status?.className || getSystemStatusClass("system-users", statusText)
    },
    createdAt: row.createdAt || fallback.createdAt
  };
}

async function apiRequest(url, options = {}) {
  if (typeof window.staticApiRequest === "function") {
    return window.staticApiRequest(url, options);
  }

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || "请求失败");
  }

  return payload;
}

function formatFileSize(bytes) {
  const size = Number(bytes) || 0;
  if (size < 1024) {
    return `${size} B`;
  }
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }
  if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("文件读取失败"));
    reader.readAsDataURL(file);
  });
}

async function loadGeneProjects() {
  const payload = await apiRequest("/api/gene-projects");
  syncGeneProjects(payload.items || []);
}

const appShell = document.querySelector(".app-shell");
const viewRoot = document.querySelector("#viewRoot");
const sidebarRoot = document.querySelector("#sidebar");
const toast = document.querySelector("#toast");
const mobileMenuButton = document.querySelector("#mobileMenuButton");
const sidebarBackdrop = document.querySelector("#sidebarBackdrop");
const mobileViewTitle = document.querySelector("#mobileViewTitle");
let toastTimer = null;
let gpaStatTimer = null;
let gpaAiTimer = null;
let gpaTrainTimer = null;

function icon(name) {
  return `
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="1em" height="1em">
      <use href="#${name}" xlink:href="#${name}"></use>
    </svg>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 1200px)").matches;
}

function isSensorMenu(menuKey = state.activeMenu) {
  return menuKey === "physical" || menuKey === "biological";
}

function isSystemMenu(menuKey = state.activeMenu) {
  return Object.prototype.hasOwnProperty.call(systemPages, menuKey);
}

function isCapabilityMenu(menuKey = state.activeMenu) {
  return ["system-apis", "system-algorithms", "system-datasets"].includes(menuKey);
}

function isAnalysisMenu(menuKey = state.activeMenu) {
  return ["gene", "omics", "process", "full", "service"].includes(menuKey);
}

function isIngestionMenu(menuKey = state.activeMenu) {
  return ["ingestion-gpa", "ingestion-omics", "ingestion-fermentation"].includes(menuKey);
}

function isQualityMenu(menuKey = state.activeMenu) {
  return Object.prototype.hasOwnProperty.call(qualityPageConfig, menuKey);
}

function getMenuGroupForMenu(menuKey = state.activeMenu) {
  if (isSensorMenu(menuKey)) {
    return "monitor";
  }
  if (menuKey === "standards") {
    return "standards";
  }
  if (isIngestionMenu(menuKey)) {
    return "ingestion";
  }
  if (isQualityMenu(menuKey)) {
    return "quality";
  }
  if (isAnalysisMenu(menuKey)) {
    return "analysis";
  }
  if (isSystemMenu(menuKey)) {
    return "system";
  }
  return "";
}

function currentSensorModule() {
  return sensorModules[state.activeMenu];
}

function currentPageTitle() {
  if (state.scene === "auth") {
    return authScreens[state.authView].title;
  }

  if (isSensorMenu()) {
    const module = currentSensorModule();
    return state.sensorView[state.activeMenu] === "form"
      ? module.formBreadcrumb[module.formBreadcrumb.length - 1]
      : module.label;
  }

  return analysisPages[state.activeMenu]?.title || "";
}

function syncShellState() {
  const shouldOpen = state.scene === "dashboard" && state.sidebarOpen && isMobileViewport();
  appShell.classList.toggle("is-auth-mode", state.scene !== "dashboard");
  appShell.classList.toggle("is-sidebar-open", shouldOpen);
  document.body.classList.toggle("sidebar-open", shouldOpen);
  mobileViewTitle.textContent = currentPageTitle();
}

function setSidebarOpen(open) {
  state.sidebarOpen = state.scene === "dashboard" && isMobileViewport() ? open : false;
  syncShellState();
}

function renderSidebar() {
  if (state.scene !== "dashboard") {
    sidebarRoot.innerHTML = "";
    return;
  }

  const monitorActive = ["physical", "biological"].includes(state.activeMenu);
  const monitorOpen = state.openNavGroup === "monitor";
  const analysisActive = isAnalysisMenu();
  const analysisOpen = state.openNavGroup === "analysis";

  sidebarRoot.innerHTML = `
    <div class="sidebar-brand">
      <span class="brand-icon">${icon("i-logo")}</span>
      <p class="brand-text">工程细胞主题库</p>
    </div>

    <div class="sidebar-nav">
      <section class="nav-section">
        <p class="nav-title">数据统计</p>
        <button class="nav-link ${state.activeMenu === "dashboard" ? "is-active" : ""}" type="button" data-menu="dashboard">
          <span class="nav-icon">${icon("i-chart")}</span>
          <span>数据看板</span>
        </button>
        <button class="nav-link ${state.activeMenu === "catalog" ? "is-active" : ""}" type="button" data-menu="catalog">
          <span class="nav-icon">${icon("i-list")}</span>
          <span>数据资源目录</span>
        </button>
      </section>

      <section class="nav-section">
        <p class="nav-title">发酵过程工具</p>
        <button class="nav-group-head ${monitorActive || monitorOpen ? "is-active" : ""}" type="button" data-menu-group="monitor">
          <span class="group-label">
            <span class="nav-icon">${icon("i-clock")}</span>
            <span>发酵过程数据检测工具</span>
          </span>
          <span class="menu-arrow ${monitorOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${monitorOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "physical" ? "is-active" : ""}" type="button" data-menu="physical">
            <span class="submenu-dot"></span>
            <span>发酵过程数据检测物理传感器工具</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "biological" ? "is-active" : ""}" type="button" data-menu="biological">
            <span class="submenu-dot"></span>
            <span>发酵过程数据检测生物传感器工具</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">数据分析</p>
        <button class="nav-group-head ${analysisActive || analysisOpen ? "is-active" : ""}" type="button" data-menu-group="analysis">
          <span class="group-label">
            <span class="nav-icon">${icon("i-chip")}</span>
            <span>工程细胞数据应用平台</span>
          </span>
          <span class="menu-arrow ${analysisOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${analysisOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "gene" ? "is-active" : ""}" type="button" data-menu="gene">
            <span class="submenu-dot"></span>
            <span>基因型-表型数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "omics" ? "is-active" : ""}" type="button" data-menu="omics">
            <span class="submenu-dot"></span>
            <span>组学数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "process" ? "is-active" : ""}" type="button" data-menu="process">
            <span class="submenu-dot"></span>
            <span>发酵过程数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "full" ? "is-active" : ""}" type="button" data-menu="full">
            <span class="submenu-dot"></span>
            <span>全流程数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "service" ? "is-active" : ""}" type="button" data-menu="service">
            <span class="submenu-dot"></span>
            <span>工程细胞服务</span>
          </button>
        </div>
      </section>
    </div>

    <div class="sidebar-footer">© 2026 工程细胞研究中心. 保留所有权利.</div>
  `;
}

function renderSidebar() {
  if (state.scene !== "dashboard") {
    sidebarRoot.innerHTML = "";
    return;
  }

  const monitorActive = ["physical", "biological"].includes(state.activeMenu);
  const monitorOpen = state.openNavGroup === "monitor";
  const analysisActive = isAnalysisMenu();
  const analysisOpen = state.openNavGroup === "analysis";
  const standardsOpen = state.openNavGroup === "standards" || state.activeMenu === "standards";
  const ingestionActive = isIngestionMenu();
  const ingestionOpen = state.openNavGroup === "ingestion";
  const qualityActive = isQualityMenu();
  const qualityOpen = state.openNavGroup === "quality";
  const systemActive = isSystemMenu(state.activeMenu);
  const systemOpen = state.openNavGroup === "system";

  sidebarRoot.innerHTML = `
    <div class="sidebar-brand">
      <span class="brand-icon">${icon("i-logo")}</span>
      <p class="brand-text">工程细胞主题库</p>
    </div>

    <div class="sidebar-nav">
      <section class="nav-section">
        <p class="nav-title">数据统计</p>
        <button class="nav-link ${state.activeMenu === "dashboard" ? "is-active" : ""}" type="button" data-menu="dashboard">
          <span class="nav-icon">${icon("i-chart")}</span>
          <span>数据看板</span>
        </button>
        <button class="nav-link ${state.activeMenu === "catalog" ? "is-active" : ""}" type="button" data-menu="catalog">
          <span class="nav-icon">${icon("i-list")}</span>
          <span>数据资源目录</span>
        </button>
      </section>

      <section class="nav-section">
        <p class="nav-title">工程细胞数据标准体系</p>
        <button class="nav-group-head ${state.activeMenu === "standards" || standardsOpen ? "is-active" : ""}" type="button" data-menu-group="standards">
          <span class="group-label">
            <span class="nav-icon">${icon("i-doc")}</span>
            <span>工程细胞数据标准体系</span>
          </span>
          <span class="menu-arrow ${standardsOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${standardsOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "gpa" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="gpa">
            <span class="submenu-dot"></span>
            <span>GPA获取和分析标准化</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "cell-model" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="cell-model">
            <span class="submenu-dot"></span>
            <span>工程细胞模型标准化</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "pilot-params" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="pilot-params">
            <span class="submenu-dot"></span>
            <span>小中试参数数字化模型标准化</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "strain-encrypt" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="strain-encrypt">
            <span class="submenu-dot"></span>
            <span>菌株保护特殊加密标准化</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">工程细胞数据入库</p>
        <button class="nav-group-head ${ingestionActive || ingestionOpen ? "is-active" : ""}" type="button" data-menu-group="ingestion">
          <span class="group-label">
            <span class="nav-icon">${icon("i-upload")}</span>
            <span>工程细胞数据入库</span>
          </span>
          <span class="menu-arrow ${ingestionOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${ingestionOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "ingestion-gpa" ? "is-active" : ""}" type="button" data-menu="ingestion-gpa">
            <span class="submenu-dot"></span>
            <span>GPA数据管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "ingestion-omics" ? "is-active" : ""}" type="button" data-menu="ingestion-omics">
            <span class="submenu-dot"></span>
            <span>多组学数据管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "ingestion-fermentation" ? "is-active" : ""}" type="button" data-menu="ingestion-fermentation">
            <span class="submenu-dot"></span>
            <span>发酵过程数据</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">工程细胞质量控制</p>
        <button class="nav-group-head ${qualityActive || qualityOpen ? "is-active" : ""}" type="button" data-menu-group="quality">
          <span class="group-label">
            <span class="nav-icon">${icon("i-check")}</span>
            <span>工程细胞质量控制</span>
          </span>
          <span class="menu-arrow ${qualityOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${qualityOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "quality-gpa" ? "is-active" : ""}" type="button" data-menu="quality-gpa" data-quality-module="gpa">
            <span class="submenu-dot"></span>
            <span>GPA 数据质量控制</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "quality-omics" ? "is-active" : ""}" type="button" data-menu="quality-omics" data-quality-module="omics">
            <span class="submenu-dot"></span>
            <span>组学数据质量控制</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "quality-ferment" ? "is-active" : ""}" type="button" data-menu="quality-ferment" data-quality-module="ferment">
            <span class="submenu-dot"></span>
            <span>发酵过程数据质控</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">发酵过程工具</p>
        <button class="nav-group-head ${monitorActive || monitorOpen ? "is-active" : ""}" type="button" data-menu-group="monitor">
          <span class="group-label">
            <span class="nav-icon">${icon("i-clock")}</span>
            <span>发酵过程数据检测工具</span>
          </span>
          <span class="menu-arrow ${monitorOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${monitorOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "physical" ? "is-active" : ""}" type="button" data-menu="physical">
            <span class="submenu-dot"></span>
            <span>发酵过程数据检测物理传感器工具</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "biological" ? "is-active" : ""}" type="button" data-menu="biological">
            <span class="submenu-dot"></span>
            <span>发酵过程数据检测生物传感器工具</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">数据分析</p>
        <button class="nav-group-head ${analysisActive || analysisOpen ? "is-active" : ""}" type="button" data-menu-group="analysis">
          <span class="group-label">
            <span class="nav-icon">${icon("i-chip")}</span>
            <span>工程细胞数据应用平台</span>
          </span>
          <span class="menu-arrow ${analysisOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${analysisOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "gene" ? "is-active" : ""}" type="button" data-menu="gene">
            <span class="submenu-dot"></span>
            <span>基因型-表型数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "omics" ? "is-active" : ""}" type="button" data-menu="omics">
            <span class="submenu-dot"></span>
            <span>组学数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "process" ? "is-active" : ""}" type="button" data-menu="process">
            <span class="submenu-dot"></span>
            <span>发酵过程数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "full" ? "is-active" : ""}" type="button" data-menu="full">
            <span class="submenu-dot"></span>
            <span>全流程数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "service" ? "is-active" : ""}" type="button" data-menu="service">
            <span class="submenu-dot"></span>
            <span>工程细胞服务</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">系统管理</p>
        <button class="nav-group-head ${systemActive || systemOpen ? "is-active" : ""}" type="button" data-menu-group="system">
          <span class="group-label">
            <span class="nav-icon">${icon("i-settings")}</span>
            <span>系统管理</span>
          </span>
          <span class="menu-arrow ${systemOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${systemOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "system-users" ? "is-active" : ""}" type="button" data-menu="system-users">
            <span class="submenu-dot"></span>
            <span>用户管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-roles" ? "is-active" : ""}" type="button" data-menu="system-roles">
            <span class="submenu-dot"></span>
            <span>角色管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-menus" ? "is-active" : ""}" type="button" data-menu="system-menus">
            <span class="submenu-dot"></span>
            <span>菜单管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-logs" ? "is-active" : ""}" type="button" data-menu="system-logs">
            <span class="submenu-dot"></span>
            <span>操作日志</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-audit" ? "is-active" : ""}" type="button" data-menu="system-audit">
            <span class="submenu-dot"></span>
            <span>审核管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-config" ? "is-active" : ""}" type="button" data-menu="system-config">
            <span class="submenu-dot"></span>
            <span>平台配置</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-portal-config" ? "is-active" : ""}" type="button" data-menu="system-portal-config">
            <span class="submenu-dot"></span>
            <span>门户页配置</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-apis" ? "is-active" : ""}" type="button" data-menu="system-apis">
            <span class="submenu-dot"></span>
            <span>接口管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-algorithms" ? "is-active" : ""}" type="button" data-menu="system-algorithms">
            <span class="submenu-dot"></span>
            <span>算法管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-datasets" ? "is-active" : ""}" type="button" data-menu="system-datasets">
            <span class="submenu-dot"></span>
            <span>数据管理</span>
          </button>
        </div>
      </section>
    </div>

    <div class="sidebar-footer">© 2026 工程细胞研究中心. 保留所有权利.</div>
  `;
}

function renderAuthView(viewKey) {
  const screen = authScreens[viewKey];
  const registerCode = state.captchaCodes.register;

  const loginForm = `
    <form class="auth-form" id="loginForm">
      <div class="field-block">
        <label for="loginAccount">用户名/邮箱</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-user")}</span>
          <input class="input-control" id="loginAccount" name="account" type="text" value="${escapeHtml(defaultLoginCredentials.account)}" placeholder="请输入用户名或邮箱" autocomplete="username" />
        </div>
        ${renderRequirementHint("用户名4-20位字母/数字/下划线，或输入合法邮箱")}
      </div>
      <div class="field-block">
        <label for="loginPassword">密码</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-lock")}</span>
          <input class="input-control" id="loginPassword" name="password" type="password" value="${escapeHtml(defaultLoginCredentials.password)}" placeholder="请输入密码" autocomplete="current-password" />
          <button class="password-toggle" type="button" data-toggle-password="loginPassword">
            <span class="header-icon">${icon("i-eye-off")}</span>
          </button>
        </div>
        ${renderRequirementHint("8-20位，需包含字母、数字和特殊字符")}
      </div>
      <div class="field-block">
        <label for="loginCaptcha">验证码</label>
        <div class="field-row">
          <div class="input-wrap">
            <span class="input-icon">${icon("i-image")}</span>
            <input class="input-control" id="loginCaptcha" name="captcha" type="text" value="${escapeHtml(state.captchaCodes.login)}" placeholder="请输入验证码" autocomplete="off" />
          </div>
          <button class="captcha-box" type="button" data-refresh-captcha="login">
            <span class="captcha-text" data-captcha-value="login">${escapeHtml(state.captchaCodes.login)}</span>
          </button>
        </div>
        ${renderRequirementHint("4位验证码，刷新后旧验证码失效")}
      </div>
      <div class="checkbox-row">
        <label class="checkbox">
          <input type="checkbox" name="remember" checked />
          <span class="checkbox-mark">${icon("i-check")}</span>
          <span>记住密码</span>
        </label>
        <button class="text-link" type="button" data-auth-view="recover">忘记密码?</button>
      </div>
      <div class="form-submit">
        <button class="primary-button" type="submit">登录</button>
      </div>
      <div class="form-footnote">
        还没有账号? <button class="text-link" type="button" data-auth-view="register">立即注册</button>
      </div>
      <div class="form-footnote">
        <a class="text-link" href="./index.html">返回门户</a>
      </div>
    </form>
  `;

  const registerForm = `
    <form class="auth-form" id="registerForm">
      <div class="field-block">
        <label class="field-required" for="registerUser">用户名</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-user")}</span>
          <input class="input-control" id="registerUser" name="username" type="text" placeholder="请设置您的用户名" />
        </div>
        <p class="field-hint">用户名长度为4-20个字符，支持字母、数字和下划线</p>
        ${renderRequirementHint("必填，4-20位字母、数字或下划线，建议唯一")}
      </div>
      <div class="field-block">
        <label class="field-required" for="registerOrg">所属机构</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-building")}</span>
          <input class="input-control" id="registerOrg" name="organization" type="text" placeholder="请输入您所属的科研机构/高校/企业" />
        </div>
        ${renderRequirementHint("必填，2-50字符，可填机构/高校/企业名称")}
      </div>
      <div class="field-block">
        <label class="field-required" for="registerPassword">设置密码</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-lock")}</span>
          <input class="input-control" id="registerPassword" name="password" type="password" placeholder="请设置8-20位登录密码" data-strength-input="register" />
          <button class="password-toggle" type="button" data-toggle-password="registerPassword">
            <span class="header-icon">${icon("i-eye-off")}</span>
          </button>
        </div>
        <div class="strength-meter" id="strengthMeter">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="strength-text" id="strengthText">S: 密码需包含字母、数字和特殊字符</p>
        ${renderRequirementHint("必填，8-20位，需包含字母、数字和特殊字符")}
      </div>
      <div class="field-block">
        <label class="field-required" for="registerConfirm">确认密码</label>
        <div class="input-wrap">
          <span class="input-icon">${icon("i-lock")}</span>
          <input class="input-control" id="registerConfirm" name="confirmPassword" type="password" placeholder="请再次输入密码" />
        </div>
        ${renderRequirementHint("必填，必须与设置密码一致")}
      </div>
      <div class="field-block">
        <label class="field-required" for="registerCaptcha">图片验证码</label>
        <div class="field-row">
          <div class="input-wrap">
            <span class="input-icon">${icon("i-image")}</span>
            <input class="input-control" id="registerCaptcha" name="captcha" type="text" placeholder="请输入图片验证码" />
          </div>
          <button class="ghost-box" type="button" data-refresh-captcha="register">
            <span class="ghost-label">点击刷新</span>
            <strong class="ghost-value" data-captcha-value="register">${escapeHtml(registerCode)}</strong>
          </button>
        </div>
        ${renderRequirementHint("必填，4位图片验证码，刷新后旧验证码失效")}
      </div>
      <div class="agreement">
        <label class="checkbox">
          <input type="checkbox" name="agreement" />
          <span class="checkbox-mark">${icon("i-check")}</span>
          <span>我已阅读并同意《用户服务协议》和《隐私政策》</span>
        </label>
      </div>
      <div class="form-submit">
        <button class="secondary-button" type="submit">注册</button>
      </div>
      <div class="form-footnote">
        已有账号? <button class="text-link" type="button" data-auth-view="login">返回登录</button>
      </div>
    </form>
  `;

  const recoverCard = `
    <div class="auth-card">
      <button class="back-link" type="button" data-auth-view="login">
        <span class="header-icon">${icon("i-arrow-left")}</span>
        <span>返回登录</span>
      </button>
      <h2 class="auth-title">${screen.title}</h2>
      <p class="auth-subtitle">${screen.subtitle}</p>
      <form class="auth-form" id="recoverForm">
        <div class="field-block">
          <label for="recoverAccount">用户名</label>
          <div class="input-wrap">
            <span class="input-icon">${icon("i-user")}</span>
            <input class="input-control" id="recoverAccount" name="account" type="text" placeholder="请输入您的用户名" />
          </div>
          ${renderRequirementHint("必填，4-20位字母、数字或下划线")}
        </div>
        <div class="field-block">
          <label for="recoverCaptcha">图片验证码</label>
          <div class="field-row">
            <div class="input-wrap">
              <span class="input-icon">${icon("i-image")}</span>
              <input class="input-control" id="recoverCaptcha" name="captcha" type="text" placeholder="请输入验证码" />
            </div>
            <button class="captcha-box" type="button" data-refresh-captcha="recover">
              <span class="captcha-text" data-captcha-value="recover">${escapeHtml(state.captchaCodes.recover)}</span>
            </button>
          </div>
          ${renderRequirementHint("必填，4位图片验证码，刷新后旧验证码失效")}
        </div>
        <div class="field-block">
          <label for="recoverPassword">新密码</label>
          <div class="input-wrap">
            <span class="input-icon">${icon("i-lock")}</span>
            <input class="input-control" id="recoverPassword" name="password" type="password" placeholder="请输入8-20位新密码" />
          </div>
          ${renderRequirementHint("必填，8-20位，需包含字母、数字和特殊字符")}
        </div>
        <div class="field-block">
          <label for="recoverConfirm">确认密码</label>
          <div class="input-wrap">
            <span class="input-icon">${icon("i-lock")}</span>
            <input class="input-control" id="recoverConfirm" name="confirmPassword" type="password" placeholder="请再次输入新密码" />
          </div>
          ${renderRequirementHint("必填，必须与新密码一致")}
        </div>
        <div class="form-submit">
          <button class="primary-button" type="submit">重置密码</button>
        </div>
      </form>
      <div class="help-card">
        <div class="help-title">
          <span class="header-icon">${icon("i-info")}</span>
          <span>遇到问题?</span>
        </div>
        <p>如果您无法重置密码，请联系系统管理员获取帮助。</p>
      </div>
    </div>
  `;

  return `
    <section class="auth-shell auth-shell--${viewKey}">
      <div class="auth-hero">
        <div class="auth-brand">
          <div class="auth-brand-mark">${icon("i-logo")}</div>
          <div>
            <p class="auth-brand-title">工程细胞主题库</p>
            <p class="auth-brand-subtitle">Engineering Cell Theme Library</p>
          </div>
        </div>
        <div class="auth-copy">
          <h1>${screen.heroTitle.join("<br />")}</h1>
          <ul class="auth-points">
            ${screen.bullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="auth-copyright">© 2025 工程细胞研究中心. 保留所有权利.</div>
      </div>
      <div class="auth-panel">
        ${
          viewKey === "recover"
            ? recoverCard
            : `
              <div class="auth-card">
                <h2 class="auth-title">${screen.title}</h2>
                <p class="auth-subtitle">${screen.subtitle}</p>
                ${viewKey === "login" ? loginForm : registerForm}
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderBreadcrumb(items) {
  return `
    <div class="breadcrumb">
      ${items
        .map((item, index) =>
          index === items.length - 1
            ? `<strong>${escapeHtml(item)}</strong>`
            : `<span>${escapeHtml(item)}</span>`
        )
        .join("<span>›</span>")}
    </div>
  `;
}

function renderHeader(page) {
  const currentUser = getCurrentUserProfile();
  const userName = currentUser.name || currentUser.username;
  const userOrg = currentUser.organization || "国科信平台";
  return `
    <header class="app-header">
      ${renderBreadcrumb(page.breadcrumb)}
      <div class="header-user-panel">
        ${
          page.headerTools
            ? `
              <div class="header-search-box" title="支持按页面关键词搜索">
                <span class="header-search-icon">${icon("i-search")}</span>
                <span class="header-search-text">站内搜索</span>
              </div>
              <div class="header-actions">
                <button class="header-tool" type="button" data-header-tool="search">${icon("i-search")}</button>
                <button class="header-tool" type="button" data-header-tool="filter">${icon("i-filter")}</button>
                <button class="header-tool" type="button" data-header-tool="settings">${icon("i-settings")}</button>
              </div>
            `
            : ""
        }
        <div class="header-user-dropdown">
          <button class="header-user-card" type="button" data-user-menu-trigger aria-haspopup="true">
            <span class="header-user-avatar">${icon("i-user")}</span>
            <span class="header-user-meta">
              <strong title="${escapeHtml(userName)}">${escapeHtml(userName)}</strong>
              <span title="${escapeHtml(userOrg)}">${escapeHtml(userOrg)}</span>
            </span>
            <span class="header-user-caret">${icon("i-chevron")}</span>
          </button>
          <div class="header-user-menu">
            <div class="header-user-menu-head">
              <span class="header-user-avatar is-large">${icon("i-user")}</span>
              <div class="header-user-menu-meta">
                <strong title="${escapeHtml(userName)}">${escapeHtml(userName)}</strong>
                <span title="${escapeHtml(currentUser.username)}">${escapeHtml(currentUser.username)}</span>
              </div>
            </div>
            <button class="header-user-menu-item" type="button" data-user-menu-action="portal">
              <span class="header-icon">${icon("i-home")}</span>
              <span>返回门户</span>
            </button>
            <button class="header-user-menu-item" type="button" data-user-menu-action="profile">
              <span class="header-icon">${icon("i-user")}</span>
              <span>个人信息</span>
            </button>
            <button class="header-user-menu-item is-danger" type="button" data-user-menu-action="logout">
              <span class="header-icon">${icon("i-arrow-left")}</span>
              <span>退出登录</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function parseWanRecordCount(value) {
  const raw = String(value || "").replaceAll(",", "");
  const number = Number(raw.replace(/[^0-9.]/g, "")) || 0;
  return raw.includes("万") ? number : number / 10000;
}

function formatWan(value) {
  return `${Math.round(value).toLocaleString("zh-CN")}万`;
}

function getDashboardMetrics() {
  const catalog = analysisPages.catalog;
  const service = analysisPages.service;
  const catalogRows = catalog.rows || [];
  const serviceRows = service.rows || [];
  const categories = catalog.categories || [];
  const totalRecords = categories.reduce((sum, item) => sum + parseWanRecordCount(item.records), 0);
  const standardized = catalogRows.filter((row) => row.status?.text === "已标准化").length;
  const auditQueue = serviceRows.filter((row) => row.status?.text !== "已验证").length + 2;
  const sensorRecords = ["physical", "biological"].reduce(
    (sum, key) =>
      sum +
      (sensorModules[key]?.batches || []).reduce((batchSum, batch) => batchSum + (batch.records || []).length, 0),
    0
  );
  const projects =
    (analysisPages.gene?.rows || []).length +
    (analysisPages.omics?.rows || []).length +
    (analysisPages.process?.rows || []).length +
    (analysisPages.full?.rows || []).length;

  return {
    totalRecords,
    standardized,
    standardRate: catalogRows.length ? Math.round((standardized / catalogRows.length) * 1000) / 10 : 0,
    auditQueue,
    serviceTotal: serviceRows.length,
    sensorRecords,
    projects,
    appCount: Object.keys(analysisPages).filter((key) => key !== "dashboard").length
  };
}

function renderDashboardStatCards(metrics) {
  const cards = [
    {
      icon: "i-table",
      tone: "blue",
      value: formatWan(metrics.totalRecords),
      tag: "同步计算",
      label: "资源数据总量",
      note: "覆盖主题库核心资源与服务记录"
    },
    {
      icon: "i-check",
      tone: "green",
      value: `${metrics.standardRate}%`,
      tag: "实时计算",
      label: "标准化通过率",
      note: "按当前入库与审核结果自动汇总"
    },
    {
      icon: "i-upload",
      tone: "purple",
      value: metrics.auditQueue.toLocaleString("zh-CN"),
      tag: "+ 18.6%",
      label: "待审核入库",
      note: "待处理批次与新增记录持续更新"
    },
    {
      icon: "i-chart",
      tone: "orange",
      value: `${metrics.projects}`,
      tag: "+ 12.4%",
      label: "分析项目数",
      note: "覆盖全流程分析与模型任务运行态"
    }
  ];

  return cards
    .map(
      (item) => `
        <article class="dashboard-kpi-card is-${item.tone}">
          <span class="dashboard-kpi-icon">${icon(item.icon)}</span>
          <div class="dashboard-kpi-main">
            <div class="dashboard-kpi-label-row">
              <span class="dashboard-kpi-label">${escapeHtml(item.label)}</span>
            </div>
            <div class="dashboard-kpi-value">
              <strong>${escapeHtml(item.value)}</strong>
              <span>${escapeHtml(item.tag)}</span>
            </div>
            <p>${escapeHtml(item.note || item.label)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDashboardBars() {
  const months = [
    ["1月", 48, "blue"],
    ["2月", 58, "blue"],
    ["3月", 52, "blue"],
    ["4月", 72, "blue"],
    ["5月", 81, "blue"],
    ["6月", 68, "green"],
    ["7月", 88, "blue"],
    ["8月", 76, "blue"],
    ["9月", 91, "blue"],
    ["10月", 83, "green"],
    ["11月", 92, "blue"],
    ["12月", 91, "blue"]
  ];

  return `
    <div class="dashboard-bars" aria-label="月度数据入库趋势">
      ${months
        .map(
          ([label, value, tone]) => `
            <div class="dashboard-bar-item">
              <div class="dashboard-bar-track">
                <span class="dashboard-bar is-${tone}" style="height:${value}%"></span>
              </div>
              <span>${label}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDashboardDonut(metrics) {
  const categories = (analysisPages.catalog.categories || []).map((item, index) => ({
    name: item.name.replace("数据集", ""),
    value: parseWanRecordCount(item.records),
    color: ["#2f8ff0", "#18a957", "#7b61ff", "#ff9f0a"][index] || "#14b8c8"
  }));
  const total = categories.reduce((sum, item) => sum + item.value, 0) || 1;
  let offset = 25;
  const slices = categories
    .map((item) => {
      const share = (item.value / total) * 100;
      const circle = `<circle cx="70" cy="70" r="52" fill="none" stroke="${item.color}" stroke-width="18" stroke-linecap="round" stroke-dasharray="${share} ${100 - share}" stroke-dashoffset="${offset}" pathLength="100" />`;
      offset -= share;
      return circle;
    })
    .join("");

  return `
    <div class="dashboard-donut-layout">
      <div class="dashboard-donut-visual">
        <svg viewBox="0 0 140 140" role="img" aria-label="资源类型分布">
          <circle cx="70" cy="70" r="52" fill="none" stroke="#e8edf4" stroke-width="18" />
          ${slices}
        </svg>
        <div class="dashboard-donut-center">
          <strong>${formatWan(metrics.totalRecords)}</strong>
          <span>数据总量</span>
        </div>
      </div>
      <div class="dashboard-legend">
        ${categories
          .map(
            (item) => `
              <div class="dashboard-legend-row">
                <span class="dashboard-legend-dot" style="background:${item.color}"></span>
                <strong>${escapeHtml(item.name)}</strong>
                <em>${((item.value / total) * 100).toFixed(1)}%</em>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDashboardLine() {
  const points = [72, 69, 75, 71, 82, 78, 85, 80, 88, 84, 91, 87];
  const width = 560;
  const height = 190;
  const coords = points.map((value, index) => {
    const x = 36 + (index * (width - 72)) / (points.length - 1);
    const y = 20 + ((100 - value) / 100) * (height - 40);
    return [x, y, value];
  });
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `36,${height - 18} ${line} ${width - 36},${height - 18}`;

  return `
    <div class="dashboard-line-wrap">
      <svg class="dashboard-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="审核效率趋势">
        <polygon points="${area}" fill="rgba(24,169,87,.12)"></polygon>
        <polyline points="${line}" fill="none" stroke="#18a957" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${coords
          .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#fff" stroke="#18a957" stroke-width="3"></circle>`)
          .join("")}
        ${[0, 25, 50, 75, 100]
          .map((tick) => {
            const y = 20 + ((100 - tick) / 100) * (height - 40);
            return `<line x1="36" y1="${y}" x2="${width - 36}" y2="${y}" stroke="#e9eef5" stroke-dasharray="6 8"></line><text x="0" y="${y + 4}" fill="#8291a8" font-size="12">${tick}%</text>`;
          })
          .join("")}
      </svg>
      <div class="dashboard-line-axis">
        ${["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
          .map((item) => `<span>${item}</span>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderDashboardRanking() {
  const rows = [
    ["01", "基因型-表型分析组", "GPA核心库", 1420, 93, "blue"],
    ["02", "多组学分析组", "全景整合库", 1280, 89, "green"],
    ["03", "发酵过程分析组", "过程参数库", 1095, 91, "purple"],
    ["04", "培养营养组", "配方组分库", 950, 85, "orange"],
    ["05", "工程细胞服务组", "细胞服务库", 840, 78, "cyan"],
    ["06", "代谢网络组", "通路注释库", 710, 92, "blue"],
    ["07", "过程控制组", "控制策略库", 620, 76, "green"]
  ];

  return `
    <div class="dashboard-ranking">
      ${rows
        .map(
          ([rank, name, label, count, rate, tone]) => `
            <div class="dashboard-rank-row">
              <span class="dashboard-rank-num">${rank}</span>
              <strong>${escapeHtml(name)}</strong>
              <div class="dashboard-rank-bar">
                <span class="is-${tone}" style="width:${rate}%">${escapeHtml(label)}</span>
              </div>
              <em>${Number(count).toLocaleString("zh-CN")}</em>
              <b>${rate}%</b>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDashboardPage() {
  const metrics = getDashboardMetrics();
  const tabs = [
    ["today", "今日"],
    ["week", "本周"],
    ["month", "本月"],
    ["30d", "近30天"]
  ];

  return `
    <div class="dashboard-page">
      <section class="dashboard-hero">
        <div class="dashboard-hero-copy">
          <div class="dashboard-eyebrow">
            <span>数据统计</span><span>/</span><strong>工程细胞主题库数据应用</strong>
          </div>
          <div class="dashboard-title-row">
            <h1>数据看板</h1>
            <span class="dashboard-role-badge">管理员与审核员</span>
          </div>
          <p>工程细胞主题库运营数据总览，实时监控数据入库、标准化审核、服务应用与分析项目效率。</p>
        </div>
        <div class="dashboard-hero-actions">
          <button class="dashboard-select" type="button" data-dashboard-range="30d">近30天 ${icon("i-chevron")}</button>
          <button class="dashboard-export" type="button" data-dashboard-export>${icon("i-download")}导出报表</button>
        </div>
      </section>

      <section class="dashboard-kpi-grid">
        ${renderDashboardStatCards(metrics)}
      </section>

      <div class="dashboard-tabs" role="tablist" aria-label="数据时间范围">
        ${tabs
          .map(
            ([key, label]) => `
              <button class="${state.dashboardRange === key ? "is-active" : ""}" type="button" role="tab" aria-selected="${state.dashboardRange === key}" data-dashboard-range="${key}">
                ${label}
              </button>
            `
          )
          .join("")}
      </div>

      <section class="dashboard-grid">
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <h2>月度数据入库趋势</h2>
            <p class="dashboard-panel-note">跟踪主题库月度入库规模与波动趋势</p>
          </div>
          ${renderDashboardBars()}
        </article>
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <h2>资源类型分布</h2>
            <p class="dashboard-panel-note">展示当前主题库资源结构与占比</p>
          </div>
          ${renderDashboardDonut(metrics)}
        </article>
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <h2>审核效率趋势</h2>
            <p class="dashboard-panel-note">聚焦审核吞吐与阶段性处理效率变化</p>
          </div>
          ${renderDashboardLine()}
        </article>
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <h2>团队贡献排行 TOP 10</h2>
            <p class="dashboard-panel-note">按数据贡献与服务产出综合统计</p>
          </div>
          ${renderDashboardRanking()}
        </article>
      </section>
    </div>
  `;
}

const DASHBOARD_RANGE_OPTIONS = [
  ["7d", "近7天"],
  ["30d", "30天"],
  ["90d", "90天"],
  ["year", "年度"]
];

const dashboardTrendData = {
  storage: {
    "7d": [["D-6", 38, "blue"], ["D-5", 44, "blue"], ["D-4", 52, "green"], ["D-3", 49, "blue"], ["D-2", 61, "blue"], ["昨日", 67, "green"], ["今日", 72, "blue"]],
    "30d": [["第1周", 46, "blue"], ["第2周", 58, "green"], ["第3周", 73, "blue"], ["第4周", 86, "blue"], ["本周", 79, "green"]],
    "90d": [["W1", 42, "blue"], ["W2", 46, "blue"], ["W3", 50, "green"], ["W4", 54, "blue"], ["W5", 58, "blue"], ["W6", 64, "green"], ["W7", 61, "blue"], ["W8", 69, "blue"], ["W9", 74, "green"], ["W10", 78, "blue"], ["W11", 82, "blue"], ["W12", 86, "green"], ["W13", 91, "blue"]],
    year: [["1月", 48, "blue"], ["2月", 58, "blue"], ["3月", 52, "blue"], ["4月", 72, "blue"], ["5月", 81, "blue"], ["6月", 68, "green"], ["7月", 88, "blue"], ["8月", 76, "blue"], ["9月", 91, "blue"], ["10月", 83, "green"], ["11月", 92, "blue"], ["12月", 91, "blue"]]
  },
  audit: {
    "7d": [76, 80, 78, 83, 86, 88, 91],
    "30d": [72, 75, 78, 76, 82, 84, 87, 89],
    "90d": [68, 70, 73, 71, 76, 79, 81, 78, 84, 86, 88, 90, 92],
    year: [72, 69, 75, 71, 82, 78, 85, 80, 88, 84, 91, 87]
  },
  auditLabels: {
    "7d": ["D-6", "D-5", "D-4", "D-3", "D-2", "昨日", "今日"],
    "30d": ["第1周", "第2周", "第3周", "第4周", "本周", "近5周", "近6周", "近7周"],
    "90d": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13"],
    year: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  resource: {
    "7d": [42, 24, 18, 16],
    "30d": [47, 23, 16, 14],
    "90d": [44, 25, 17, 14],
    year: [39, 27, 18, 16]
  },
  ranking: {
    "7d": [
      ["01", "李倩", "基因型-表型关联数据集", 286, 28, "blue"],
      ["02", "王超", "发酵过程数据集", 242, 24, "green"],
      ["03", "赵琳", "多组学数据集", 198, 19, "purple"],
      ["04", "周宁", "培养营养数据集", 164, 16, "orange"],
      ["05", "陈晨", "工程细胞服务数据集", 132, 13, "cyan"]
    ],
    "30d": [
      ["01", "李倩", "基因型-表型关联数据集", 1420, 23, "blue"],
      ["02", "赵琳", "多组学数据集", 1280, 21, "green"],
      ["03", "王超", "发酵过程数据集", 1095, 18, "purple"],
      ["04", "刘洋", "培养营养数据集", 950, 15, "orange"],
      ["05", "张明", "工程细胞服务数据集", 840, 14, "cyan"],
      ["06", "陈晨", "代谢网络模型数据集", 710, 11, "blue"],
      ["07", "周宁", "过程控制策略数据集", 620, 10, "green"]
    ],
    "90d": [
      ["01", "赵琳", "多组学数据集", 3920, 24, "green"],
      ["02", "李倩", "基因型-表型关联数据集", 3680, 22, "blue"],
      ["03", "王超", "发酵过程数据集", 3120, 19, "purple"],
      ["04", "刘洋", "培养营养数据集", 2510, 15, "orange"],
      ["05", "张明", "工程细胞服务数据集", 1980, 12, "cyan"],
      ["06", "周宁", "过程控制策略数据集", 1820, 11, "green"],
      ["07", "陈晨", "代谢网络模型数据集", 1640, 10, "blue"]
    ],
    year: [
      ["01", "李倩", "基因型-表型关联数据集", 16820, 25, "blue"],
      ["02", "赵琳", "多组学数据集", 14560, 22, "green"],
      ["03", "王超", "发酵过程数据集", 12180, 18, "purple"],
      ["04", "刘洋", "培养营养数据集", 10430, 16, "orange"],
      ["05", "张明", "工程细胞服务数据集", 8640, 13, "cyan"],
      ["06", "周宁", "过程控制策略数据集", 7120, 11, "green"],
      ["07", "陈晨", "代谢网络模型数据集", 6210, 9, "blue"]
    ]
  }
};

function getDashboardChartRange(chartKey) {
  return state.dashboardChartRanges?.[chartKey] || "30d";
}

function renderDashboardChartTabs(chartKey) {
  const activeRange = getDashboardChartRange(chartKey);
  return `
    <div class="dashboard-chart-tabs" role="tablist" aria-label="图表时间范围">
      ${DASHBOARD_RANGE_OPTIONS.map(
        ([key, label]) => `
          <button class="${activeRange === key ? "is-active" : ""}" type="button" role="tab" aria-selected="${activeRange === key}" data-dashboard-chart-range="${chartKey}|${key}">
            ${label}
          </button>
        `
      ).join("")}
    </div>
  `;
}

function renderDashboardStatCards(metrics) {
  const storageCount = Math.round((metrics.totalRecords || 0) * 10000);
  const cards = [
    {
      icon: "i-table",
      tone: "blue",
      value: formatWan(metrics.totalRecords),
      label: "资源数据总量",
      note: "覆盖主题库核心资源与服务记录"
    },
    {
      icon: "i-check",
      tone: "green",
      value: `${metrics.standardRate}%`,
      label: "数据审核通过率",
      note: "按当前入库与审核结果自动汇总"
    },
    {
      icon: "i-upload",
      tone: "purple",
      value: storageCount.toLocaleString("zh-CN"),
      label: "入库数据数量",
      note: "已完成入库的数据记录数量"
    },
    {
      icon: "i-chart",
      tone: "orange",
      value: `${metrics.projects}`,
      label: "分析项目数",
      note: "覆盖全流程分析与模型任务运行总量"
    }
  ];

  return cards
    .map(
      (item) => `
        <article class="dashboard-kpi-card is-${item.tone}">
          <span class="dashboard-kpi-icon">${icon(item.icon)}</span>
          <div class="dashboard-kpi-main">
            <div class="dashboard-kpi-label-row">
              <span class="dashboard-kpi-label">${escapeHtml(item.label)}</span>
            </div>
            <div class="dashboard-kpi-value">
              <strong>${escapeHtml(item.value)}</strong>
            </div>
            <p>${escapeHtml(item.note || item.label)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDashboardBars(range = getDashboardChartRange("storage")) {
  const items = dashboardTrendData.storage[range] || dashboardTrendData.storage["30d"];
  return `
    <div class="dashboard-bars" aria-label="工程细胞数据入库趋势" style="grid-template-columns:repeat(${items.length}, minmax(24px, 1fr));">
      ${items
        .map(
          ([label, value, tone]) => `
            <div class="dashboard-bar-item">
              <div class="dashboard-bar-track">
                <span class="dashboard-bar is-${tone}" style="height:${value}%"></span>
              </div>
              <span>${escapeHtml(label)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDashboardDonut(metrics, range = getDashboardChartRange("resource")) {
  const baseCategories = analysisPages.catalog.categories || [];
  const shares = dashboardTrendData.resource[range] || dashboardTrendData.resource["30d"];
  const colors = ["#2f8ff0", "#18a957", "#7b61ff", "#ff9f0a"];
  const total = metrics.totalRecords || 1;
  const categories = baseCategories.map((item, index) => ({
    name: item.name.replace("数据集", ""),
    value: Math.round(total * ((shares[index] || 0) / 100)),
    color: colors[index] || "#14b8c8"
  }));
  const categoryTotal = categories.reduce((sum, item) => sum + item.value, 0) || 1;
  let offset = 25;
  const slices = categories
    .map((item) => {
      const share = (item.value / categoryTotal) * 100;
      const circle = `<circle cx="70" cy="70" r="52" fill="none" stroke="${item.color}" stroke-width="18" stroke-linecap="round" stroke-dasharray="${share} ${100 - share}" stroke-dashoffset="${offset}" pathLength="100" />`;
      offset -= share;
      return circle;
    })
    .join("");

  return `
    <div class="dashboard-donut-layout">
      <div class="dashboard-donut-visual">
        <svg viewBox="0 0 140 140" role="img" aria-label="资源类型分布">
          <circle cx="70" cy="70" r="52" fill="none" stroke="#e8edf4" stroke-width="18" />
          ${slices}
        </svg>
        <div class="dashboard-donut-center">
          <strong>${formatWan(metrics.totalRecords)}</strong>
          <span>数据总量</span>
        </div>
      </div>
      <div class="dashboard-legend">
        ${categories
          .map(
            (item) => `
              <div class="dashboard-legend-row">
                <span class="dashboard-legend-dot" style="background:${item.color}"></span>
                <strong>${escapeHtml(item.name)}</strong>
                <em>${((item.value / categoryTotal) * 100).toFixed(1)}%</em>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDashboardLine(range = getDashboardChartRange("audit")) {
  const points = dashboardTrendData.audit[range] || dashboardTrendData.audit["30d"];
  const labels = dashboardTrendData.auditLabels[range] || dashboardTrendData.auditLabels["30d"];
  const width = 560;
  const height = 190;
  const coords = points.map((value, index) => {
    const x = 36 + (index * (width - 72)) / Math.max(points.length - 1, 1);
    const y = 20 + ((100 - value) / 100) * (height - 40);
    return [x, y, value];
  });
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `36,${height - 18} ${line} ${width - 36},${height - 18}`;

  return `
    <div class="dashboard-line-wrap">
      <svg class="dashboard-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="审核效率趋势">
        <polygon points="${area}" fill="rgba(24,169,87,.12)"></polygon>
        <polyline points="${line}" fill="none" stroke="#18a957" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${coords
          .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#fff" stroke="#18a957" stroke-width="3"></circle>`)
          .join("")}
        ${[0, 25, 50, 75, 100]
          .map((tick) => {
            const y = 20 + ((100 - tick) / 100) * (height - 40);
            return `<line x1="36" y1="${y}" x2="${width - 36}" y2="${y}" stroke="#e9eef5" stroke-dasharray="6 8"></line><text x="0" y="${y + 4}" fill="#8291a8" font-size="12">${tick}%</text>`;
          })
          .join("")}
      </svg>
      <div class="dashboard-line-axis" style="grid-template-columns:repeat(${labels.length}, minmax(0, 1fr));">
        ${labels.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderDashboardRanking(range = getDashboardChartRange("ranking")) {
  const rows = dashboardTrendData.ranking[range] || dashboardTrendData.ranking["30d"];
  return `
    <div class="dashboard-ranking-table" role="table" aria-label="用户贡献排行TOP10">
      <div class="dashboard-rank-head" role="row">
        <span role="columnheader">序号</span>
        <span role="columnheader">用户名称</span>
        <span role="columnheader">数据库/数据集名称</span>
        <span role="columnheader">贡献上传的数据数量</span>
        <span role="columnheader">占比</span>
      </div>
      ${rows
        .map(
          ([rank, userName, datasetName, count, rate, tone]) => `
            <div class="dashboard-rank-row" role="row">
              <span class="dashboard-rank-num" role="cell">${rank}</span>
              <strong role="cell">${escapeHtml(userName)}</strong>
              <div class="dashboard-rank-bar" role="cell">
                <span class="is-${tone}" style="width:${rate}%">${escapeHtml(datasetName)}</span>
              </div>
              <em role="cell">${Number(count).toLocaleString("zh-CN")}</em>
              <b role="cell">${rate}%</b>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDashboardPage() {
  const metrics = getDashboardMetrics();

  return `
    <div class="dashboard-page">
      <section class="dashboard-hero">
        <div class="dashboard-hero-copy">
          <div class="dashboard-eyebrow">
            <span>数据统计</span><span>/</span><strong>工程细胞主题库数据应用</strong>
          </div>
          <div class="dashboard-title-row">
            <h1>数据看板</h1>
            <span class="dashboard-role-badge">管理员与审核员</span>
          </div>
          <p>工程细胞主题库运营数据总览，实时监控数据入库、数据审核、服务应用与分析项目效率。</p>
        </div>
        <div class="dashboard-hero-actions">
          <button class="dashboard-export" type="button" data-dashboard-export>${icon("i-download")}导出报表</button>
        </div>
      </section>

      <section class="dashboard-kpi-grid">
        ${renderDashboardStatCards(metrics)}
      </section>

      <section class="dashboard-grid">
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <div class="dashboard-panel-title-row">
              <div>
                <h2>工程细胞数据入库趋势</h2>
                <p class="dashboard-panel-note">跟踪主题库数据入库规模与波动趋势</p>
              </div>
              ${renderDashboardChartTabs("storage")}
            </div>
          </div>
          ${renderDashboardBars()}
        </article>
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <div class="dashboard-panel-title-row">
              <div>
                <h2>资源类型分布</h2>
                <p class="dashboard-panel-note">展示当前主题库资源结构与占比</p>
              </div>
              ${renderDashboardChartTabs("resource")}
            </div>
          </div>
          ${renderDashboardDonut(metrics)}
        </article>
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <div class="dashboard-panel-title-row">
              <div>
                <h2>审核效率趋势</h2>
                <p class="dashboard-panel-note">聚焦审核吞吐与阶段性处理效率变化</p>
              </div>
              ${renderDashboardChartTabs("audit")}
            </div>
          </div>
          ${renderDashboardLine()}
        </article>
        <article class="dashboard-panel">
          <div class="dashboard-panel-head">
            <div class="dashboard-panel-title-row">
              <div>
                <h2>用户贡献排行 TOP 10</h2>
                <p class="dashboard-panel-note">按用户上传贡献的数据数量统计</p>
              </div>
              ${renderDashboardChartTabs("ranking")}
            </div>
          </div>
          ${renderDashboardRanking()}
        </article>
      </section>
    </div>
  `;
}

function renderSummaryCards(cards) {
  const toneMap = {
    blue: { icon: "i-bars", note: "核心记录持续汇聚" },
    green: { icon: "i-check", note: "当前状态稳定可用" },
    orange: { icon: "i-warning", note: "需重点关注波动项" },
    red: { icon: "i-file", note: "建议尽快复核处理" }
  };
  return cards
    .map(
      (item) => {
        const tone = toneMap[item.tone] || toneMap.blue;
        return `
        <article class="summary-card is-${item.tone}">
          <div class="summary-card-head">
            <span class="summary-chip">
              <span class="summary-chip-icon">${icon(tone.icon)}</span>
              <span>${item.label}</span>
            </span>
            <span class="summary-watermark" aria-hidden="true">${icon(tone.icon)}</span>
          </div>
          <div>
            <p class="summary-value tone-${item.tone}">${item.value}</p>
            <div class="summary-label">${item.label}</div>
            <p class="summary-note">${tone.note}</p>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function normalizeToneToken(value) {
  return String(value || "blue")
    .replace(/^is-/, "")
    .trim() || "blue";
}

function getListToneMeta(value) {
  const toneKey = normalizeToneToken(value);
  const toneMap = {
    blue: { icon: "i-bars", note: "鏍稿績鎸囨爣鎸佺画姹囪仛" },
    green: { icon: "i-check", note: "褰撳墠鐘舵€佷繚鎸佺ǔ瀹?" },
    yellow: { icon: "i-warning", note: "闇€鎸佺画鍏虫敞鍙樺寲" },
    orange: { icon: "i-warning", note: "闇€鎸佺画鍏虫敞鍙樺寲" },
    cyan: { icon: "i-chart", note: "杩愯鏁堟灉鍙寔缁窡韪?" },
    red: { icon: "i-file", note: "寤鸿灏藉揩澶嶆牳澶勭悊" },
    purple: { icon: "i-table", note: "鍏抽敭璧勬簮宸叉寜涓婚褰掔被" }
  };
  return { toneKey, ...(toneMap[toneKey] || toneMap.blue) };
}

function renderEmptyState(title, description) {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">${icon("i-folder")}</div>
      <h4 class="empty-state-title">${escapeHtml(title)}</h4>
      <p class="empty-state-desc">${escapeHtml(description)}</p>
    </div>
  `;
}

function renderSensorRecord(moduleKey, batch, record) {
  return `
    <article class="record-row">
      <div class="record-main">
        <p class="record-time">${record.time}</p>
        <div class="record-grid">
          ${record.metrics
            .map(
              (metric) => `
                <div>
                  <p class="metric-title">${metric.label}</p>
                  <p class="metric-value-text ${metric.tone === "warning" ? "is-warning" : ""} ${
                    metric.tone === "error" ? "is-error" : ""
                  }">${metric.value}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <p class="record-user">录入人: ${record.user}</p>
      </div>
      <div class="record-side">
        <span class="record-badge ${record.statusClass}">${record.statusText}</span>
        <button
          class="tag-button"
          type="button"
          data-open-modal="detail|${moduleKey}|${batch.id}|${record.id}"
        >
          查看详情
        </button>
      </div>
    </article>
  `;
}

function renderSensorTableRows(moduleKey, batch, records) {
  return records
    .map(
      (record) => `
        <tr>
          <td>${escapeHtml(record.user)}</td>
          ${record.metrics.map((metric) => `<td>${escapeHtml(metric.value)}</td>`).join("")}
          <td>${escapeHtml(record.time)}</td>
          <td><span class="table-status ${record.statusClass}">${escapeHtml(record.statusText)}</span></td>
          <td>
            <div class="table-actions">
              <button
                class="table-link"
                type="button"
                data-open-modal="detail|${moduleKey}|${batch.id}|${record.id}"
              >
                查看详情
              </button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderPagination(key, pageCount) {
  const current = state.pagination[key];
  return `
    <div class="pagination">
      <button class="page-button" type="button" data-page="${key}|${Math.max(1, current - 1)}">‹</button>
      ${Array.from({ length: pageCount }, (_, index) => index + 1)
        .map(
          (page) => `
            <button class="page-button ${page === current ? "is-active" : ""}" type="button" data-page="${key}|${page}">
              ${page}
            </button>
          `
        )
        .join("")}
      <button class="page-button" type="button" data-page="${key}|${Math.min(pageCount, current + 1)}">›</button>
    </div>
  `;
}

function renderSensorListPage(module) {
  const batch = module.batches.find((item) => item.id === state.activeBatch[module.key]) || module.batches[0];
  const statusFilter = state.statusFilter[module.key];
  const filteredRecords = batch.records.filter((item) => (statusFilter === "all" ? true : item.statusClass === statusFilter));
  const pageSize = 3;
  const pageCount = Math.max(3, Math.ceil(filteredRecords.length / pageSize) || 1);
  const current = Math.min(state.pagination[module.key], pageCount);
  state.pagination[module.key] = current;
  const pageRecords = filteredRecords.slice((current - 1) * pageSize, (current - 1) * pageSize + pageSize);
  const metricLabels = batch.records[0]?.metrics?.map((metric) => metric.label) || [];

  return `
    <div class="page-section sensor-page">
      <div class="sensor-layout">
        <aside class="batch-panel">
          <div class="panel-head">
            <span class="batch-panel-title">
              <span class="header-icon">${icon(module.batchIcon)}</span>
              <span>${module.batchTitle}</span>
            </span>
            <button class="batch-add-button" type="button" data-open-modal="batch|${module.key}" aria-label="新增批次">
              <span class="header-icon">${icon("i-plus")}</span>
            </button>
          </div>
          <div class="batch-list">
            ${module.batches
              .map(
                (item) => `
                  <div class="batch-card ${item.id === batch.id ? "is-active" : ""}">
                    <button class="batch-select-button" type="button" data-batch="${module.key}|${item.id}">
                      <div class="batch-top">
                        <span class="batch-id">${item.id}</span>
                        <span class="batch-badge ${item.badgeClass}">${item.badge}</span>
                      </div>
                      <div class="batch-status tone-${item.tone}">
                        <span class="status-dot"></span>
                        <span>${item.statusText}</span>
                      </div>
                    </button>
                    <div class="batch-card-actions">
                      <button class="batch-edit-button" type="button" data-open-modal="batch-edit|${module.key}|${item.id}" aria-label="编辑批次 ${escapeHtml(item.id)}">
                        编辑
                      </button>
                      <button class="batch-delete-button" type="button" data-open-modal="batch-delete|${module.key}|${item.id}" aria-label="删除批次 ${escapeHtml(item.id)}">
                        删除
                      </button>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </aside>

        <section class="sensor-main">
          <div class="summary-strip">
            ${renderSummaryCards(module.summary)}
          </div>

          <section class="filter-card sensor-filter-card">
            <div class="sensor-filter-top">
              <div class="sensor-filter-fields">
                <label class="inline-field">
                  <span>当前批次</span>
                  <span class="filter-control-wrap">
                    <input type="text" value="${escapeHtml(batch.id)}" readonly />
                  </span>
                </label>
                <label class="inline-field sensor-period-field">
                  <span>批次周期</span>
                  <span class="filter-control-wrap">
                    <input type="text" value="${escapeHtml(batch.period)}" readonly />
                  </span>
                </label>
                <label class="inline-field">
                  <span>状态</span>
                  <span class="filter-control-wrap">
                    <select data-status-filter="${module.key}">
                      <option value="all" ${statusFilter === "all" ? "selected" : ""}>全部状态</option>
                      <option value="is-normal" ${statusFilter === "is-normal" ? "selected" : ""}>正常</option>
                      <option value="is-warning" ${statusFilter === "is-warning" ? "selected" : ""}>预警</option>
                      <option value="is-error" ${statusFilter === "is-error" ? "selected" : ""}>异常</option>
                    </select>
                    <span class="filter-field-icon is-right">${icon("i-chevron")}</span>
                  </span>
                </label>
              </div>
              <div class="sensor-filter-actions">
                <button class="outline-button" type="button" data-open-modal="import|${module.key}">批量导入</button>
                <button class="outline-button" type="button" data-open-modal="threshold|${module.key}">阈值配置</button>
                <button class="toolbar-primary" type="button" data-open-form="${module.key}">
                  <span class="header-icon">${icon("i-plus")}</span>
                  <span>新增</span>
                </button>
              </div>
            </div>
          </section>

          <section class="table-wrap sensor-table-wrap">
            <div class="card-section-head is-divider">
              <div>
                <h2 class="card-section-title">${module.recordTitle}</h2>
                <p class="card-section-desc">当前批次记录按时间顺序分页展示</p>
              </div>
            </div>
            <div class="table-scroll">
              <table class="data-table sensor-data-table">
                <thead>
                  <tr>
                    <th>录入人</th>
                    ${metricLabels.map((label) => `<th>${escapeHtml(label)}</th>`).join("")}
                    <th>录入时间</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  ${
                    pageRecords.length
                      ? renderSensorTableRows(module.key, batch, pageRecords)
                      : `
                        <tr class="table-empty-row">
                          <td colspan="${metricLabels.length + 4}">
                            ${renderEmptyState("暂无记录", "当前筛选条件下没有可展示的监测记录")}
                          </td>
                        </tr>
                      `
                  }
                </tbody>
              </table>
            </div>
            <div class="table-footer">
              <span>共 ${filteredRecords.length} 条记录</span>
              ${renderPagination(module.key, pageCount)}
            </div>
          </section>
        </section>
      </div>
    </div>
  `;
}

function renderFormField(field) {
  const iconName = field.type === "select" ? "i-chevron" : field.type === "datetime" || field.type === "date" ? "i-calendar" : "";
  const rule = getFieldRule(field, field.moduleKey || "");
  const options = field.options || (field.type === "select" ? [field.value] : []);
  const selectPlaceholder = field.placeholder || "请选择";
  const sensorAttr =
    field.name && field.moduleKey
      ? `data-sensor-module="${field.moduleKey}" data-sensor-field="${field.name}"`
      : "";
  const control =
    field.type === "select"
      ? `
        <div class="input-wrap">
          <select class="select-control has-icon" ${sensorAttr}>
            ${field.value === "" ? `<option value="" selected disabled>${escapeHtml(selectPlaceholder)}</option>` : ""}
            ${options.map((option) => `<option ${option === field.value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
          </select>
          <span class="trailing-icon">${icon("i-chevron")}</span>
        </div>
      `
      : `
        <div class="input-wrap">
          <input class="input-control ${iconName ? "has-icon" : ""}" type="text" ${sensorAttr} value="${field.value || ""}" placeholder="${field.placeholder || ""}" />
          ${iconName ? `<span class="trailing-icon">${icon(iconName)}</span>` : ""}
        </div>
      `;

  return `
    <div class="form-field">
      <label>${field.label}</label>
      ${control}
      ${renderRequirementHint(rule)}
      ${field.hint ? `<div class="threshold-hint"><span class="header-icon">${icon("i-warning")}</span><span>${field.hint}</span></div>` : ""}
    </div>
  `;
}

function renderSensorFormPage(module) {
  const basicFields = module.basicFields.map((field, index) => ({
    ...field,
    value: index === 0 ? "" : field.value,
    options: index === 0 ? module.batches.map((item) => item.id) : field.options,
    placeholder: index === 0 ? "请选择批次号" : field.placeholder,
    moduleKey: module.key,
    name: `${module.key}-basic-${index}`
  }));
  const paramFields = module.paramFields.map((field, index) => ({
    ...field,
    moduleKey: module.key,
    name: `${module.key}-param-${index}`
  }));

  return `
    <div class="page-section entry-page">
      <section class="entry-card">
        <h2 class="entry-title">
          <span class="header-icon">${icon(module.entryTitleIcon)}</span>
          <span>${module.entryTitle}</span>
        </h2>

        <div class="entry-section entry-section-card">
          <h3 class="section-title">
            <span class="section-dot"></span>
            <span>${module.formSectionTitle}</span>
          </h3>
          <div class="form-grid is-3">
            ${basicFields.map(renderFormField).join("")}
          </div>
        </div>

        <div class="entry-section entry-section-card">
          <h3 class="section-title">
            <span class="section-square"></span>
            <span>${module.formMetricTitle}</span>
          </h3>
          <div class="form-grid ${module.key === "physical" ? "is-3" : "is-4"}">
            ${paramFields.map(renderFormField).join("")}
          </div>
        </div>

        <div class="entry-actions">
          <button class="outline-button" type="button" data-form-action="reset|${module.key}">重置</button>
          <div class="entry-actions-right">
            <button class="return-link" type="button" data-back-list="${module.key}">
              <span class="header-icon">${icon("i-arrow-left")}</span>
              <span>返回列表</span>
            </button>
            <button class="outline-button" type="button" data-form-action="save|${module.key}">暂存</button>
            <button class="outline-button is-primary" type="button" data-form-action="submit|${module.key}">提交</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderStatsGrid(stats) {
  return `
    <div class="stats-grid">
      ${stats
        .map(
          (item) => {
            const tone = getListToneMeta(item.iconClass);
            return `
            <article class="stats-card is-${tone.toneKey}">
              <div class="stats-card-head">
                <span class="summary-chip">
                  <span class="summary-chip-icon">${icon(item.icon || tone.icon)}</span>
                  <span>${item.label}</span>
                </span>
                <span class="summary-watermark" aria-hidden="true">${icon(item.icon || tone.icon)}</span>
              </div>
              <div class="stats-card-main">
                <p class="stats-number">${item.value}</p>
                <div class="stats-label">${item.label}</div>
                <p class="summary-note">${escapeHtml(item.note || "")}</p>
              </div>
            </article>
          `;
          }
        )
        .join("")}
    </div>
  `;
}

function renderFilterField(field) {
  const pageKey = state.activeMenu || "";
  const pageFilters = state.analysisFilters[pageKey] || {};
  const fieldValue = pageFilters[field.label] ?? (field.type === "select" ? field.options?.[0] || "" : "");
  return `
    <label class="inline-field ${field.type === "input" ? "is-search" : ""}">
      <span>${field.label}</span>
      ${
        field.type === "input"
          ? `
            <span class="filter-control-wrap">
              <span class="filter-field-icon">${icon("i-search")}</span>
              <input type="text" data-analysis-filter="${escapeHtml(field.label)}" value="${escapeHtml(fieldValue)}" placeholder="${field.placeholder || ""}" />
            </span>
          `
          : `
            <span class="filter-control-wrap">
              <select data-analysis-filter="${escapeHtml(field.label)}">
                ${(field.options || []).map((option) => `<option ${option === fieldValue ? "selected" : ""}>${option}</option>`).join("")}
              </select>
              <span class="filter-field-icon is-right">${icon("i-chevron")}</span>
            </span>
          `
      }
    </label>
  `;
}

const analysisFilterFieldMap = {
  gene: {
    项目名称: ["name"],
    菌株类型: ["strain"],
    表型类型: ["phenotype"],
    分析状态: ["status"]
  },
  omics: {
    模型名称: ["name"],
    菌株类型: ["strain"],
    模型类型: ["type"],
    状态: ["status"]
  },
  process: {
    模型名称: ["name"],
    菌株类型: ["strain"],
    优化目标: ["goal"],
    状态: ["status"]
  },
  full: {
    项目名称: ["name"],
    菌株类型: ["strain"],
    分析状态: ["status"]
  },
  service: {
    细胞编号: ["code"],
    细胞名称: ["name"],
    菌株类型: ["strain"],
    状态: ["status"]
  },
  "system-users": {
    用户名: ["username", "account"],
    姓名: ["name"],
    手机号: ["mobile"],
    状态: ["status"]
  },
  "system-roles": {
    角色名称: ["name"],
    角色编码: ["code"],
    角色类型: ["type"],
    状态: ["status"]
  },
  "system-menus": {
    菜单名称: ["name"],
    菜单类型: ["type"],
    显示状态: ["status"],
    权限标识: ["permission"]
  },
  "system-logs": {
    操作人: ["name"],
    操作模块: ["module"],
    操作结果: ["status"],
    IP地址: ["ip"]
  },
  "system-config": {
    配置名称: ["name"],
    配置分组: ["group"],
    状态: ["status"],
    配置编码: ["code"]
  },
  "system-audit": {
    审核标题: ["name"],
    审核类型: ["type"],
    审核状态: ["status"],
    提交人: ["submitter"]
  },
  "system-portal-config": {
    配置名称: ["name"],
    页面区块: ["section"],
    发布状态: ["status"],
    更新人: ["owner"]
  },
  "system-apis": {
    接口名称: ["name"],
    接口编码: ["code"],
    请求方式: ["method"],
    状态: ["status"]
  },
  "system-algorithms": {
    算法名称: ["name"],
    算法类型: ["type"],
    版本: ["version"],
    状态: ["status"]
  },
  "system-datasets": {
    数据名称: ["name"],
    数据分类: ["category"],
    数据源: ["source"],
    状态: ["status"]
  }
};

function getAnalysisFilterKeys(pageKey, fieldLabel) {
  const directKeys = analysisFilterFieldMap[pageKey]?.[fieldLabel];
  if (directKeys?.length) {
    return directKeys;
  }

  const fuzzyRules = [
    { match: "名称", keys: ["name"] },
    { match: "编号", keys: ["code"] },
    { match: "编码", keys: ["code"] },
    { match: "账号", keys: ["account", "username"] },
    { match: "手机号", keys: ["mobile"] },
    { match: "角色", keys: ["role", "type"] },
    { match: "部门", keys: ["department"] },
    { match: "菌株类型", keys: ["strain"] },
    { match: "表型类型", keys: ["phenotype"] },
    { match: "模型类型", keys: ["type", "model"] },
    { match: "模型名称", keys: ["name"] },
    { match: "项目名称", keys: ["name"] },
    { match: "配置分组", keys: ["group"] },
    { match: "数据分类", keys: ["category"] },
    { match: "数据源", keys: ["source"] },
    { match: "请求方式", keys: ["method"] },
    { match: "接口地址", keys: ["path"] },
    { match: "权限标识", keys: ["permission"] },
    { match: "IP地址", keys: ["ip"] },
    { match: "操作模块", keys: ["module"] },
    { match: "优化目标", keys: ["goal"] },
    { match: "状态", keys: ["status"] },
    { match: "类型", keys: ["type"] },
    { match: "版本", keys: ["version"] }
  ];

  return fuzzyRules.find((rule) => fieldLabel.includes(rule.match))?.keys || [];
}

function getAnalysisRowValuesByKeys(row, keys = []) {
  return keys.map((key) => {
    const value = row[key];
    if (key === "status") {
      return value?.text || "";
    }
    return value ?? "";
  });
}

function getFilteredAnalysisRows(page) {
  const activeFilters = state.analysisFilters[page.key] || {};
  const fields = page.filters || [];

  if (!fields.length || !Object.keys(activeFilters).length) {
    return page.rows;
  }

  return page.rows.filter((row) =>
    fields.every((field) => {
      const rawValue = String(activeFilters[field.label] || "").trim();
      if (!rawValue || rawValue === "全部") {
        return true;
      }

      const matcher = rawValue.toLowerCase();
      const mappedKeys = getAnalysisFilterKeys(page.key, field.label);
      const candidateValues = mappedKeys.length
        ? getAnalysisRowValuesByKeys(row, mappedKeys)
        : Object.keys(row)
            .filter((key) => key !== "actions")
            .map((key) => (key === "status" ? row[key]?.text || "" : row[key] ?? ""));

      return candidateValues.some((value) => {
        const normalizedValue = String(value || "").trim().toLowerCase();
        if (!normalizedValue) {
          return false;
        }
        return field.type === "select" ? normalizedValue === matcher : normalizedValue.includes(matcher);
      });
    })
  );
}

function hasActiveAnalysisFilters(pageKey) {
  const filters = state.analysisFilters[pageKey] || {};
  return Object.values(filters).some((value) => {
    const text = String(value || "").trim();
    return text && text !== "全部";
  });
}

function renderTableCell(row, column, pageKey) {
  if (column.key === "status") {
    return `<span class="table-status ${row.status.className}">${row.status.text}</span>`;
  }

  if (column.key === "actions") {
    return `
      <div class="table-actions">
        ${row.actions
          .map(
            (rawAction) => {
              const action = normalizeAnalysisAction(rawAction) || rawAction;
              const targetId = row.id || row.name || row.code;
              const actionId = action.id || action.label;
              return `
              <button
                class="table-link ${action.tone === "danger" ? "is-danger" : ""}"
                type="button"
                data-table-page="${escapeHtml(pageKey)}"
                data-table-action="${escapeHtml(actionId)}"
                data-table-target="${escapeHtml(targetId)}"
              >
                ${action.label}
              </button>
            `;
            }
          )
          .join("")}
      </div>
    `;
  }

  if (column.key === "packageName") {
    const text = row.packageName || "--";
    const subText = row.packageSize || "";
    return `
      <span class="table-cell-text is-stacked" title="${escapeHtml(text)}">
        <strong>${escapeHtml(text)}</strong>
        ${subText ? `<small>${escapeHtml(subText)}</small>` : ""}
      </span>
    `;
  }

  const text = row[column.key] ?? "--";
  return `<span class="table-cell-text" title="${escapeHtml(text)}">${escapeHtml(text)}</span>`;
}

function getFilteredCatalogRows(page) {
  const filters = state.catalogFilters;
  const keyword = filters.keyword.trim().toLowerCase();
  return page.rows.filter((row) => {
    const textBlob = [row.name, row.category, row.scope, row.fields, row.owner, row.format].join(" ").toLowerCase();
    const matchKeyword = !keyword || textBlob.includes(keyword);
    const matchCategory = filters.category === "全部" || row.category === filters.category;
    const matchFormat = filters.format === "全部" || row.format === filters.format;
    const matchStatus = filters.status === "全部" || row.status.text === filters.status;
    return matchKeyword && matchCategory && matchFormat && matchStatus;
  });
}

function renderCatalogSelect(name, label, options, value) {
  return `
    <label class="inline-field">
      <span>${escapeHtml(label)}</span>
      <span class="filter-control-wrap">
        <select data-catalog-filter="${escapeHtml(name)}">
          ${options
            .map((option) => `<option ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`)
            .join("")}
        </select>
        <span class="filter-field-icon is-right">${icon("i-chevron")}</span>
      </span>
    </label>
  `;
}

function renderCatalogPage(page) {
  const filteredRows = getFilteredCatalogRows(page);
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize) || 1);
  const current = Math.min(state.pagination.catalog || 1, pageCount);
  state.pagination.catalog = current;
  const pageRows = filteredRows.slice((current - 1) * pageSize, current * pageSize);
  const formats = ["全部", ...new Set(page.rows.map((row) => row.format))];
  const categories = ["全部", ...page.categories.map((item) => item.name)];

  return `
    <div class="page-section catalog-page">
      <div class="page-title-row">
        <h1 class="page-title">${page.title}</h1>
      </div>

      <section class="catalog-category-grid">
        ${page.categories
          .map(
            (item) => {
              const tone = getListToneMeta(item.tone);
              return `
              <article class="catalog-category-card is-${tone.toneKey}">
                <div class="catalog-category-top">
                  <span class="catalog-category-icon">${icon(tone.icon)}</span>
                  <span class="summary-watermark" aria-hidden="true">${icon(tone.icon)}</span>
                </div>
                <div class="catalog-category-main">
                  <h3>${escapeHtml(item.name)}</h3>
                  <p class="catalog-category-value">${escapeHtml(item.records || "--")}</p>
                  <p class="catalog-category-meta">${escapeHtml(item.count || "")}</p>
                  <p class="catalog-category-desc">${escapeHtml(item.desc)}</p>
                </div>
              </article>
            `;
            }
          )
          .join("")}
      </section>

      <section class="filter-card catalog-filter-card">
        <div class="card-section-head">
          <div>
            <h2 class="card-section-title">筛选条件</h2>
            <p class="card-section-desc">支持按数据库名称、资源类型、数据格式与标准化状态组合筛选</p>
          </div>
        </div>
        <div class="filter-row">
          <label class="inline-field is-search">
            <span>关键词</span>
            <span class="filter-control-wrap">
              <span class="filter-field-icon">${icon("i-search")}</span>
              <input data-catalog-filter="keyword" value="${escapeHtml(state.catalogFilters.keyword)}" placeholder="数据库名称/字段/范围" />
            </span>
          </label>
          ${renderCatalogSelect("category", "资源类型", categories, state.catalogFilters.category)}
          ${renderCatalogSelect("format", "数据格式", formats, state.catalogFilters.format)}
          ${renderCatalogSelect("status", "标准化状态", ["全部", "已标准化"], state.catalogFilters.status)}
          <div class="filter-actions">
            <button class="filter-button" type="button" data-filter-action="search|catalog">搜索</button>
            <button class="reset-link" type="button" data-filter-action="reset|catalog">重置</button>
          </div>
        </div>
      </section>

      <section class="table-wrap catalog-table-wrap list-table-wrap">
        <div class="card-section-head is-divider">
          <div>
            <h2 class="card-section-title">数据库列表</h2>
            <p class="card-section-desc">展示标准化数据库名称、资源类型、核心字段、数据量、格式与状态</p>
          </div>
        </div>
        <div class="table-scroll">
          <table class="data-table catalog-data-table">
            <thead>
              <tr>
                <th class="checkbox-cell"><div class="row-check"></div></th>
                ${page.columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${
                pageRows.length
                  ? pageRows
                      .map(
                        (row) => `
                          <tr>
                            <td class="checkbox-cell"><div class="row-check"></div></td>
                            ${page.columns.map((column) => `<td>${renderTableCell(row, column, page.key)}</td>`).join("")}
                          </tr>
                        `
                      )
                      .join("")
                  : `
                    <tr class="table-empty-row">
                      <td colspan="${page.columns.length + 1}">
                        ${renderEmptyState("暂无数据", "当前筛选条件下没有匹配的数据库资源")}
                      </td>
                    </tr>
                  `
              }
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <span>共 ${filteredRows.length} 条记录，每页 10 条</span>
          ${renderPagination(page.key, pageCount)}
        </div>
      </section>
    </div>
  `;
}

function getCatalogRow(itemId) {
  return analysisPages.catalog.rows.find((row) => row.id === itemId) || analysisPages.catalog.rows[0];
}

function getCatalogFieldRows(row) {
  return String(row.fields || "")
    .split(",")
    .map((field) => field.trim())
    .filter(Boolean)
    .map((field, index) => ({
      name: field,
      type: index === 0 ? "主键/业务标识" : field.includes("value") || field.includes("rate") || field.includes("oxygen") ? "数值型" : "标准字段",
      required: index < 3 ? "是" : "否",
      desc: `${row.category}的${field}字段`
    }));
}

function renderCatalogDetailModal(itemId) {
  const row = getCatalogRow(itemId);
  const infoItems = [
    { label: "数据库名称", value: row.name },
    { label: "资源类型", value: row.category },
    { label: "数据量", value: row.records },
    { label: "格式", value: row.format },
    { label: "更新频率", value: row.updateCycle },
    { label: "负责人", value: row.owner },
    { label: "标准化日期", value: row.standardizedAt },
    { label: "标准化状态", html: `<span class="table-status ${row.status.className}">${escapeHtml(row.status.text)}</span>` }
  ];

  return renderGeneModalShell({
    title: "数据库详情",
    sizeClass: "is-gene-large catalog-detail-modal",
    body: `
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>基础信息</h4><p class="section-caption">展示数据库归属、数据规模、标准化状态与维护信息</p></div>
        </div>
        ${renderGeneInfoGrid(infoItems)}
      </section>
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>数据范围</h4><p class="section-caption">说明该数据库覆盖的工程细胞数据对象</p></div>
        </div>
        <p class="catalog-detail-scope">${escapeHtml(row.scope)}</p>
      </section>
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>详情字段信息</h4><p class="section-caption">核心字段按标准化字段名、字段类型、是否必填展示</p></div>
        </div>
        <div class="table-scroll">
          <table class="data-table catalog-field-table">
            <thead>
              <tr>
                <th>字段名</th>
                <th>字段类型</th>
                <th>必填</th>
                <th>字段说明</th>
              </tr>
            </thead>
            <tbody>
              ${getCatalogFieldRows(row)
                .map(
                  (field) => `
                    <tr>
                      <td>${escapeHtml(field.name)}</td>
                      <td>${escapeHtml(field.type)}</td>
                      <td>${escapeHtml(field.required)}</td>
                      <td>${escapeHtml(field.desc)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="catalog-detail">关闭</button>
    `
  });
}

function renderPortalImageUpload({ field, label, value, hint, previewClass = "" }) {
  const hasImage = Boolean(value);
  return `
    <div class="portal-config-upload">
      <label class="portal-config-label"><span>*</span>${escapeHtml(label)}</label>
      <input type="hidden" data-portal-field="${escapeHtml(field)}" value="${escapeHtml(value || "")}" />
      <input class="portal-config-file-input" type="file" accept=".png,.jpg,.jpeg" data-portal-image-input="${escapeHtml(field)}" />
      <div class="portal-config-upload-row">
        <div class="portal-config-preview ${previewClass} ${hasImage ? "has-image" : ""}" data-portal-image-preview="${escapeHtml(field)}">
          ${
            hasImage
              ? `<img src="${escapeHtml(value)}" alt="${escapeHtml(label)}预览">`
              : `<span>${icon(field === "logoImage" ? "i-logo" : "i-table")}</span>`
          }
        </div>
        <div class="portal-config-upload-meta">
          <button class="modal-outline" type="button" data-portal-image-trigger="${escapeHtml(field)}">选择图片</button>
          <p>${escapeHtml(hint)}</p>
        </div>
      </div>
    </div>
  `;
}

function renderPortalConfigInput({ name, label, value = "", placeholder = "", type = "text", required = true, max = "" }) {
  const counter = max ? `<em>${String(value || "").length}/${max}</em>` : "";
  return `
    <label class="portal-config-field ${type === "textarea" ? "is-textarea" : ""}">
      <span class="portal-config-label">${required ? "<b>*</b>" : ""}${escapeHtml(label)}</span>
      <span class="portal-config-control">
        ${
          type === "textarea"
            ? `<textarea data-portal-field="${escapeHtml(name)}" rows="4" maxlength="${escapeHtml(max || "500")}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value || "")}</textarea>`
            : `<input data-portal-field="${escapeHtml(name)}" maxlength="${escapeHtml(max || "120")}" value="${escapeHtml(value || "")}" placeholder="${escapeHtml(placeholder)}" />`
        }
        ${counter}
      </span>
    </label>
  `;
}

function renderPortalLinkRows(links = []) {
  const safeLinks = links.length ? links : [{ name: "", url: "" }];
  return safeLinks
    .map(
      (link, index) => `
        <div class="portal-link-row">
          <div class="portal-link-fields">
            <input data-portal-link-index="${index}" data-portal-link-field="name" maxlength="30" value="${escapeHtml(link.name || "")}" placeholder="请输入链接名称" />
            <input data-portal-link-index="${index}" data-portal-link-field="url" value="${escapeHtml(link.url || "")}" placeholder="请输入链接地址" />
          </div>
          <button class="portal-link-delete" type="button" data-portal-link-remove="${index}" aria-label="删除友情链接">${icon("i-close")}</button>
        </div>
      `
    )
    .join("");
}

function serializePortalMultiline(value, format = "lines", pairMode = "value-label") {
  if (format === "pairs") {
    return (Array.isArray(value) ? value : [])
      .map((item) => {
        const first = pairMode === "label-value" ? item.label : item.value;
        const second = pairMode === "label-value" ? item.value : item.label;
        return `${String(first || "").trim()} | ${String(second || "").trim()}`.trim();
      })
      .filter(Boolean)
      .join("\n");
  }
  return (Array.isArray(value) ? value : [])
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .join("\n");
}

function parsePortalMultiline(value, format = "lines", pairMode = "value-label") {
  const lines = String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (format === "pairs") {
    return lines.map((line) => {
      const [first = "", ...rest] = line.split("|");
      const second = rest.join("|").trim();
      return pairMode === "label-value"
        ? { label: first.trim(), value: second }
        : { value: first.trim(), label: second };
    });
  }
  return lines;
}

function renderPortalConfigTextareaList({
  field,
  label,
  values = [],
  placeholder = "每行一项",
  rows = 4,
  required = true,
  format = "lines",
  pairMode = "value-label"
}) {
  return `
    <label class="portal-config-field is-textarea">
      <span class="portal-config-label">${required ? "<b>*</b>" : ""}${escapeHtml(label)}</span>
      <span class="portal-config-control">
        <textarea data-portal-list-field="${escapeHtml(field)}" data-portal-list-format="${escapeHtml(format)}" data-portal-list-pair-mode="${escapeHtml(pairMode)}" rows="${rows}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(serializePortalMultiline(values, format, pairMode))}</textarea>
      </span>
    </label>
  `;
}

function renderPortalObjectField({
  group,
  index,
  field,
  label,
  value = "",
  placeholder = "",
  type = "text",
  rows = 4,
  format = "text",
  pairMode = "value-label"
}) {
  const serializedValue = format === "lines" || format === "pairs" ? serializePortalMultiline(value, format, pairMode) : String(value || "");
  return `
    <label class="portal-config-stack-field ${type === "textarea" ? "is-textarea" : ""}">
      <span class="portal-config-stack-label">${escapeHtml(label)}</span>
      <span class="portal-config-control">
        ${
          type === "textarea"
            ? `<textarea data-portal-object-group="${escapeHtml(group)}" data-portal-object-index="${index}" data-portal-object-field="${escapeHtml(field)}" data-portal-object-format="${escapeHtml(format)}" data-portal-object-pair-mode="${escapeHtml(pairMode)}" rows="${rows}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(serializedValue)}</textarea>`
            : `<input data-portal-object-group="${escapeHtml(group)}" data-portal-object-index="${index}" data-portal-object-field="${escapeHtml(field)}" data-portal-object-format="${escapeHtml(format)}" data-portal-object-pair-mode="${escapeHtml(pairMode)}" value="${escapeHtml(serializedValue)}" placeholder="${escapeHtml(placeholder)}" />`
        }
      </span>
    </label>
  `;
}

function renderPortalConfigBlock({ title, description, content }) {
  return `
    <section class="portal-config-block">
      <div class="portal-config-block-head">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
      ${content}
    </section>
  `;
}

function renderPortalEditorCard({ title, description = "", fields = [] }) {
  return `
    <article class="portal-config-card">
      <div class="portal-config-card-head">
        <h4>${escapeHtml(title)}</h4>
        ${description ? `<p>${escapeHtml(description)}</p>` : ""}
      </div>
      <div class="portal-config-card-fields">
        ${fields.join("")}
      </div>
    </article>
  `;
}

function renderPortalConfigPage() {
  const config = readPortalPlatformConfig();
  const heroCards = [
    renderPortalEditorCard({
      title: "首屏标签与对象",
      description: "维护门户首屏的标签文案、面向对象和关键词标签。",
      fields: [
        renderPortalConfigInput({ name: "subtitle", label: "门户标识文案", value: config.subtitle, placeholder: "请输入首屏徽标文案", max: "40" }),
        renderPortalConfigInput({ name: "heroAudienceLabel", label: "对象标题", value: config.heroAudienceLabel, placeholder: "请输入对象标题", max: "20" }),
        renderPortalConfigTextareaList({
          field: "heroAudienceTags",
          label: "对象标签",
          values: config.heroAudienceTags,
          placeholder: "每行一个对象标签，例如：高校",
          rows: 4
        }),
        renderPortalConfigTextareaList({
          field: "heroTags",
          label: "能力标签",
          values: config.heroTags,
          placeholder: "每行一个能力标签，例如：全基因组关联分析",
          rows: 4
        })
      ]
    }),
    renderPortalEditorCard({
      title: "首屏概览与统计",
      description: "维护右侧概览卡和首页统计卡内容。",
      fields: [
        renderPortalConfigInput({ name: "heroFeatureTitle", label: "首屏说明标题", value: config.heroFeatureTitle, placeholder: "请输入说明标题", max: "40" }),
        renderPortalConfigInput({ name: "heroFeatureDescription", label: "首屏说明内容", value: config.heroFeatureDescription, placeholder: "请输入说明内容", type: "textarea", max: "180" }),
        renderPortalConfigInput({ name: "heroDashboardTitle", label: "运行概览标题", value: config.heroDashboardTitle, placeholder: "请输入概览标题", max: "24" }),
        renderPortalConfigTextareaList({
          field: "heroDashboardRows",
          label: "运行概览数据",
          values: config.heroDashboardRows,
          placeholder: "每行格式：标题 | 数值，例如：数据资源 | 130万+",
          rows: 4,
          format: "pairs",
          pairMode: "label-value"
        }),
        renderPortalConfigTextareaList({
          field: "heroStats",
          label: "首页统计卡",
          values: config.heroStats,
          placeholder: "每行格式：数值 | 标题，例如：130万+ | 数据条目",
          rows: 4,
          format: "pairs"
        }),
        renderPortalConfigInput({ name: "heroSummaryTitle", label: "门户聚焦标题", value: config.heroSummaryTitle, placeholder: "请输入聚焦标题", max: "24" }),
        renderPortalConfigTextareaList({
          field: "heroSummaryItems",
          label: "聚焦内容",
          values: config.heroSummaryItems,
          placeholder: "每行格式：标题 | 内容，例如：资源组织 | 四大核心数据库统一浏览",
          rows: 4,
          format: "pairs",
          pairMode: "label-value"
        })
      ]
    })
  ];
  const valueCards = config.valueItems.map((item, index) =>
    renderPortalEditorCard({
      title: `价值卡片 ${index + 1}`,
      description: item.detailKey,
      fields: [
        renderPortalObjectField({ group: "valueItems", index, field: "badge", label: "卡片标识", value: item.badge, placeholder: "例如：VALUE 01" }),
        renderPortalObjectField({ group: "valueItems", index, field: "title", label: "卡片标题", value: item.title, placeholder: "请输入卡片标题" }),
        renderPortalObjectField({ group: "valueItems", index, field: "summary", label: "卡片简介", value: item.summary, type: "textarea", rows: 5, placeholder: "请输入卡片简介" })
      ]
    })
  );
  const flowCards = config.flowItems.map((item, index) =>
    renderPortalEditorCard({
      title: `流程步骤 ${item.step || index + 1}`,
      fields: [
        renderPortalObjectField({ group: "flowItems", index, field: "step", label: "步骤编号", value: item.step, placeholder: "请输入步骤编号" }),
        renderPortalObjectField({ group: "flowItems", index, field: "title", label: "步骤标题", value: item.title, placeholder: "请输入步骤标题" }),
        renderPortalObjectField({ group: "flowItems", index, field: "summary", label: "步骤说明", value: item.summary, type: "textarea", rows: 5, placeholder: "请输入步骤说明" })
      ]
    })
  );
  const databaseCards = config.databaseItems.map((item, index) =>
    renderPortalEditorCard({
      title: `数据库卡片 ${index + 1}`,
      description: item.detailKey,
      fields: [
        renderPortalObjectField({ group: "databaseItems", index, field: "count", label: "数量标签", value: item.count, placeholder: "例如：≥ 50万条" }),
        renderPortalObjectField({ group: "databaseItems", index, field: "title", label: "卡片标题", value: item.title, placeholder: "请输入卡片标题" }),
        renderPortalObjectField({ group: "databaseItems", index, field: "summary", label: "卡片简介", value: item.summary, type: "textarea", rows: 5, placeholder: "请输入卡片简介" }),
        renderPortalObjectField({
          group: "databaseItems",
          index,
          field: "tags",
          label: "标签列表",
          value: item.tags,
          type: "textarea",
          rows: 4,
          format: "lines",
          placeholder: "每行一个标签，例如：GWAS"
        })
      ]
    })
  );
  const sceneCards = config.sceneItems.map((item, index) =>
    renderPortalEditorCard({
      title: `场景卡片 ${index + 1}`,
      description: item.detailKey,
      fields: [
        renderPortalObjectField({ group: "sceneItems", index, field: "tab", label: "导航名称", value: item.tab, placeholder: "请输入导航名称" }),
        renderPortalObjectField({ group: "sceneItems", index, field: "title", label: "场景标题", value: item.title, placeholder: "请输入场景标题" }),
        renderPortalObjectField({ group: "sceneItems", index, field: "summary", label: "场景简介", value: item.summary, type: "textarea", rows: 5, placeholder: "请输入场景简介" }),
        renderPortalObjectField({ group: "sceneItems", index, field: "focusTitle", label: "能力模块标题", value: item.focusTitle, placeholder: "请输入能力模块标题" }),
        renderPortalObjectField({
          group: "sceneItems",
          index,
          field: "bullets",
          label: "能力条目",
          value: item.bullets,
          type: "textarea",
          rows: 5,
          format: "lines",
          placeholder: "每行一条能力说明"
        }),
        renderPortalObjectField({
          group: "sceneItems",
          index,
          field: "metrics",
          label: "指标卡片",
          value: item.metrics,
          type: "textarea",
          rows: 4,
          format: "pairs",
          placeholder: "每行格式：数值 | 标题，例如：GWAS | 核心方法"
        }),
        renderPortalObjectField({ group: "sceneItems", index, field: "chartTitle", label: "图表标题", value: item.chartTitle, placeholder: "请输入图表标题" })
      ]
    })
  );
  const toolCards = config.toolItems.map((item, index) =>
    renderPortalEditorCard({
      title: `工具卡片 ${index + 1}`,
      description: item.detailKey,
      fields: [
        renderPortalObjectField({ group: "toolItems", index, field: "badge", label: "角标", value: item.badge, placeholder: "例如：SENSOR" }),
        renderPortalObjectField({ group: "toolItems", index, field: "title", label: "工具标题", value: item.title, placeholder: "请输入工具标题" }),
        renderPortalObjectField({ group: "toolItems", index, field: "summary", label: "工具简介", value: item.summary, type: "textarea", rows: 5, placeholder: "请输入工具简介" })
      ]
    })
  );
  const caseCards = config.caseItems.map((item, index) =>
    renderPortalEditorCard({
      title: `案例卡片 ${index + 1}`,
      description: item.detailKey,
      fields: [
        renderPortalObjectField({ group: "caseItems", index, field: "unit", label: "合作单位", value: item.unit, placeholder: "请输入合作单位" }),
        renderPortalObjectField({ group: "caseItems", index, field: "title", label: "案例标题", value: item.title, placeholder: "请输入案例标题" }),
        renderPortalObjectField({ group: "caseItems", index, field: "direction", label: "案例方向", value: item.direction, placeholder: "请输入案例方向" }),
        renderPortalObjectField({ group: "caseItems", index, field: "summary", label: "案例简介", value: item.summary, type: "textarea", rows: 5, placeholder: "请输入案例简介" })
      ]
    })
  );
  return `
    <div class="page-section portal-config-page">
      <div class="page-title-row">
        <div>
          <h1 class="page-title">门户页配置</h1>
          <p class="portal-config-subtitle">配置项保存后会写入浏览器本地配置，门户首页打开时自动读取并应用。</p>
        </div>
        <div class="portal-config-top-actions">
          <a class="modal-outline portal-return-link" href="./index.html" target="_blank" rel="noreferrer">${icon("i-home")}预览门户</a>
          <button class="toolbar-primary" type="button" data-portal-config-action="save">${icon("i-check")}保存</button>
        </div>
      </div>

      <section class="portal-config-shell">
        <div class="portal-config-section-head">
          <div>
            <h2>平台配置</h2>
            <p>围绕门户首页全部区块维护可配置内容，保存后会同步更新门户首页的展示文案与编排。</p>
          </div>
        </div>

        <div class="portal-config-block-list">
          ${renderPortalConfigBlock({
            title: "基础信息",
            description: "维护门户页标题、Logo 与首页首屏主文案。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "browserTitle", label: "平台标签页标题", value: config.browserTitle, placeholder: "请输入浏览器标签标题", max: "40" })}
                ${renderPortalImageUpload({
                  field: "logoImage",
                  label: "平台 Logo 图片",
                  value: config.logoImage,
                  hint: "建议尺寸 286*32，支持 png、jpg，单个文件不超过 5M。",
                  previewClass: "is-logo"
                })}
                ${renderPortalConfigInput({ name: "siteTitle", label: "门户主标题", value: config.siteTitle, placeholder: "请输入门户主标题", max: "40" })}
                ${renderPortalConfigInput({ name: "description", label: "门户简介", value: config.description, placeholder: "请输入门户简介", type: "textarea", max: "220" })}
              </div>
              <div class="portal-config-card-grid">
                ${heroCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "平台价值",
            description: "维护价值定位区块标题、说明以及 5 张价值卡片。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "valueTitle", label: "区块标题", value: config.valueTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "valueDescription", label: "区块说明", value: config.valueDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
              </div>
              <div class="portal-config-card-grid">
                ${valueCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "整体流程",
            description: "维护流程区块标题、说明与 5 个流程步骤。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "flowTitle", label: "区块标题", value: config.flowTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "flowDescription", label: "区块说明", value: config.flowDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
              </div>
              <div class="portal-config-card-grid">
                ${flowCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "核心数据库",
            description: "维护数据库区块标题、说明与 4 张数据库卡片。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "databasesTitle", label: "区块标题", value: config.databasesTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "databasesDescription", label: "区块说明", value: config.databasesDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
              </div>
              <div class="portal-config-card-grid">
                ${databaseCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "数据总览",
            description: "维护数据总览区块说明、质控内容与图表图例。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "datavizTitle", label: "区块标题", value: config.datavizTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "datavizDescription", label: "区块说明", value: config.datavizDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
                ${renderPortalConfigInput({ name: "datavizQualityTitle", label: "质控模块标题", value: config.datavizQualityTitle, placeholder: "请输入质控模块标题", max: "24" })}
                ${renderPortalConfigTextareaList({
                  field: "datavizQualityParagraphs",
                  label: "质控模块内容",
                  values: config.datavizQualityParagraphs,
                  placeholder: "每行一段说明文案",
                  rows: 6
                })}
                ${renderPortalConfigTextareaList({
                  field: "datavizMetrics",
                  label: "质控指标卡片",
                  values: config.datavizMetrics,
                  placeholder: "每行格式：数值 | 标题，例如：TB | 数据体量级别",
                  rows: 4,
                  format: "pairs"
                })}
                ${renderPortalConfigInput({ name: "datavizChartTitle", label: "图表标题", value: config.datavizChartTitle, placeholder: "请输入图表标题", max: "24" })}
                ${renderPortalConfigTextareaList({
                  field: "datavizChartLegend",
                  label: "图表图例",
                  values: config.datavizChartLegend,
                  placeholder: "每行一个图例名称",
                  rows: 4
                })}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "场景应用",
            description: "维护场景应用导航、四个场景面板与对应的能力说明。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "scenesTitle", label: "区块标题", value: config.scenesTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "scenesDescription", label: "区块说明", value: config.scenesDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
                ${renderPortalConfigInput({ name: "scenesNavTitle", label: "导航标题", value: config.scenesNavTitle, placeholder: "请输入导航标题", max: "20" })}
              </div>
              <div class="portal-config-card-grid">
                ${sceneCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "工具算法",
            description: "维护工具算法区块标题、说明与 8 张能力卡片。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "toolsTitle", label: "区块标题", value: config.toolsTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "toolsDescription", label: "区块说明", value: config.toolsDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
              </div>
              <div class="portal-config-card-grid">
                ${toolCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "合作案例",
            description: "维护合作案例区块标题、说明与 4 张案例卡片。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "casesTitle", label: "区块标题", value: config.casesTitle, placeholder: "请输入区块标题", max: "24" })}
                ${renderPortalConfigInput({ name: "casesDescription", label: "区块说明", value: config.casesDescription, placeholder: "请输入区块说明", type: "textarea", max: "200" })}
              </div>
              <div class="portal-config-card-grid">
                ${caseCards.join("")}
              </div>
            `
          })}

          ${renderPortalConfigBlock({
            title: "页脚与导航",
            description: "维护页脚标题、联系信息、二维码以及门户快速导航链接。",
            content: `
              <div class="portal-config-form">
                ${renderPortalConfigInput({ name: "footerTitle", label: "页脚标题", value: config.footerTitle, placeholder: "请输入页脚标题", max: "40" })}
                ${renderPortalConfigInput({ name: "footerDescription", label: "页脚简介", value: config.footerDescription, placeholder: "请输入页脚简介", type: "textarea", max: "220" })}
                ${renderPortalConfigInput({ name: "footerHighlight", label: "页脚补充文案", value: config.footerHighlight, placeholder: "请输入页脚补充文案", max: "120" })}
                ${renderPortalConfigInput({ name: "copyright", label: "版权信息", value: config.copyright, placeholder: "请输入版权信息", max: "80" })}
                <div class="portal-config-field is-full">
                  <span class="portal-config-label"><b>*</b>快速导航链接</span>
                  <div class="portal-link-list" data-portal-link-list>
                    ${renderPortalLinkRows(config.links)}
                  </div>
                  <div class="portal-link-add">
                    <button class="modal-primary" type="button" data-portal-config-action="add-link">${icon("i-plus")}添加链接</button>
                  </div>
                </div>
                ${renderPortalConfigInput({ name: "contactUnit", label: "联系单位", value: config.contactUnit, placeholder: "请输入联系单位", max: "60" })}
                ${renderPortalConfigInput({ name: "contactPhone", label: "联系电话", value: config.contactPhone, placeholder: "请输入联系电话", max: "30" })}
                ${renderPortalConfigInput({ name: "contactAddress", label: "联系地址", value: config.contactAddress, placeholder: "请输入联系地址", max: "100" })}
                ${renderPortalConfigInput({ name: "qrTitle", label: "二维码标题", value: config.qrTitle, placeholder: "请输入二维码标题", max: "40" })}
                ${renderPortalImageUpload({
                  field: "qrImage",
                  label: "联系方式二维码图片",
                  value: config.qrImage,
                  hint: "建议尺寸 100*100，支持 png、jpg，单个文件不超过 5M。",
                  previewClass: "is-qr"
                })}
              </div>
            `
          })}
        </div>

        <div class="portal-config-actions">
          <button class="modal-outline" type="button" data-portal-config-action="reset">重置</button>
          <button class="modal-primary" type="button" data-portal-config-action="save">保存</button>
        </div>
      </section>
    </div>
  `;
}

const auditMaterialTypes = [
  { key: "cell", label: "工程细胞" },
  { key: "genotype", label: "基因型-表型" },
  { key: "omics", label: "组学数据" },
  { key: "process", label: "发酵过程" },
  { key: "nutrition", label: "培养营养" }
];

const auditStatusTabs = [
  { key: "all", label: "全部记录" },
  { key: "pending", label: "待审核" },
  { key: "stored", label: "已入库" },
  { key: "rejected", label: "审核不通过" }
];

function getAuditMaterialTypeLabel(typeKey = "") {
  return auditMaterialTypes.find((item) => item.key === typeKey)?.label || "工程细胞";
}

function getAuditRowStatusText(row = {}) {
  return row.status?.text || row.statusText || "待审核";
}

function getAuditStorageResult(row = {}) {
  const statusText = getAuditRowStatusText(row);
  if (row.storageResult) {
    return row.storageResult;
  }
  if (["审核通过", "已通过"].includes(statusText)) {
    return "已完成入库";
  }
  if (["审核不通过", "已退回"].includes(statusText)) {
    return "已驳回";
  }
  return "待审核入库";
}

function isAuditPending(row = {}) {
  return ["待审核", "审核中"].includes(getAuditRowStatusText(row)) || getAuditStorageResult(row) === "待审核入库";
}

function isAuditStored(row = {}) {
  return ["审核通过", "已通过"].includes(getAuditRowStatusText(row)) || getAuditStorageResult(row) === "已完成入库";
}

function isAuditRejected(row = {}) {
  return ["审核不通过", "已退回"].includes(getAuditRowStatusText(row)) || getAuditStorageResult(row) === "已驳回";
}

function normalizeAuditRow(row = {}, index = 0) {
  const statusText = getAuditRowStatusText(row);
  return {
    ...row,
    id: row.id || `audit-${index + 1}`,
    materialType: row.materialType || "cell",
    alias: row.alias || row.code || "",
    dataType: row.dataType || row.type || "数据文件",
    flowType: row.flowType || "工程细胞数据上传",
    storageResult: getAuditStorageResult(row),
    status: {
      text: statusText,
      className: row.status?.className || getSystemStatusClass("system-audit", statusText)
    }
  };
}

function getAuditRows() {
  return (systemPages["system-audit"]?.rows || []).map(normalizeAuditRow);
}

function getAuditTypeRows() {
  const activeType = state.auditMaterialType || auditMaterialTypes[0].key;
  return getAuditRows().filter((row) => row.materialType === activeType);
}

function getVisibleAuditRows() {
  const statusKey = state.auditStatus || "all";
  return getAuditTypeRows().filter((row) => {
    if (statusKey === "pending") {
      return isAuditPending(row);
    }
    if (statusKey === "stored") {
      return isAuditStored(row);
    }
    if (statusKey === "rejected") {
      return isAuditRejected(row);
    }
    return true;
  });
}

function renderAuditStatusBadge(text = "", className = "") {
  const statusClass = className || getSystemStatusClass("system-audit", text);
  return `<span class="audit-status-badge ${escapeHtml(statusClass)}">${escapeHtml(text || "-")}</span>`;
}

function renderAuditStorageBadge(text = "") {
  const className = text === "已完成入库" ? "is-valid" : text === "已驳回" ? "is-fail" : "is-pending";
  return `<span class="audit-storage-badge ${className}">${escapeHtml(text || "-")}</span>`;
}

function renderAuditRowActions(row = {}) {
  const rowId = escapeHtml(row.id);
  const pending = isAuditPending(row);
  return `
    <div class="audit-row-actions">
      <button class="audit-action-link" type="button" data-audit-action="detail" data-audit-id="${rowId}">查看详情</button>
      ${
        pending
          ? `
            <button class="audit-action-primary" type="button" data-audit-action="approve" data-audit-id="${rowId}">审核通过并入库</button>
            <button class="audit-action-danger" type="button" data-audit-action="reject" data-audit-id="${rowId}">驳回</button>
          `
          : `<button class="audit-action-link" type="button" data-audit-action="download" data-audit-id="${rowId}">下载</button>`
      }
    </div>
  `;
}

function renderAuditReviewPage() {
  const page = systemPages["system-audit"];
  const activeType = state.auditMaterialType || auditMaterialTypes[0].key;
  const activeStatus = state.auditStatus || "all";
  const allRows = getAuditRows();
  const typeRows = getAuditTypeRows();
  const visibleRows = getVisibleAuditRows();
  const latestRow = [...typeRows].sort((a, b) => String(b.submittedAt || "").localeCompare(String(a.submittedAt || "")))[0];
  const pendingCount = typeRows.filter(isAuditPending).length;
  const storedCount = typeRows.filter(isAuditStored).length;
  const currentTypeLabel = getAuditMaterialTypeLabel(activeType);
  const statusCounts = {
    all: typeRows.length,
    pending: pendingCount,
    stored: storedCount,
    rejected: typeRows.filter(isAuditRejected).length
  };

  return `
    <div class="page-section audit-review-page">
      <section class="audit-hero-card">
        <div class="audit-hero-copy">
          <div class="audit-breadcrumb">${page.breadcrumb.map((item) => `<span>${escapeHtml(item)}</span>`).join("<b>/</b>")}</div>
          <div class="audit-title-row">
            <div>
              <span class="audit-eyebrow">审核员工作台</span>
              <h1 class="audit-title">${escapeHtml(page.title)}</h1>
              <p class="audit-desc">聚合工程细胞主题库待入库数据，支持按主题类型、审核状态快速筛选并完成入库处理。</p>
            </div>
            <div class="audit-toolbar">
              <button class="audit-batch-button is-primary" type="button" data-audit-action="batch-approve">${icon("i-check")}批量通过</button>
              <button class="audit-batch-button is-danger" type="button" data-audit-action="batch-reject">${icon("i-warning")}批量驳回</button>
            </div>
          </div>
        </div>
      </section>

      <section class="audit-panel">
        <div class="audit-type-tabs" aria-label="审核数据类型">
          ${auditMaterialTypes
            .map((item) => {
              const count = allRows.filter((row) => row.materialType === item.key).length;
              return `
                <button class="audit-type-tab ${activeType === item.key ? "is-active" : ""}" type="button" data-audit-type="${escapeHtml(item.key)}">
                  <span>${escapeHtml(item.label)}</span>
                  <em>${count}</em>
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="audit-current-bar">
          <span>当前：${escapeHtml(currentTypeLabel)}</span>
          <b>|</b>
          <span>共展示 ${visibleRows.length} / ${typeRows.length} 条记录</span>
        </div>

        <div class="audit-summary-grid">
          <article class="audit-summary-card">
            <span class="audit-summary-label">待审核记录</span>
            <strong>${pendingCount}</strong>
            <em>当前待处理</em>
          </article>
          <article class="audit-summary-card is-success">
            <span class="audit-summary-label">已入库记录</span>
            <strong>${storedCount}</strong>
            <em>已完成入库</em>
          </article>
          <article class="audit-summary-card is-wide">
            <span class="audit-summary-label">最近流程动作</span>
            <strong>${latestRow ? `${escapeHtml(latestRow.name)} · ${escapeHtml(getAuditRowStatusText(latestRow))}` : "暂无流程记录"}</strong>
            <em>最近处理记录</em>
          </article>
        </div>

        <div class="audit-status-tabs" aria-label="审核状态筛选">
          ${auditStatusTabs
            .map(
              (item) => `
                <button class="audit-status-tab ${activeStatus === item.key ? "is-active" : ""}" type="button" data-audit-status="${escapeHtml(item.key)}">
                  ${escapeHtml(item.label)}
                  <span>${statusCounts[item.key]}</span>
                </button>
              `
            )
            .join("")}
        </div>

        <div class="audit-table-wrap">
          <div class="table-scroll">
            <table class="data-table audit-data-table">
              <thead>
                <tr>
                  <th>提交时间</th>
                  <th>材料名称</th>
                  <th>数据类型</th>
                  <th>流程类型</th>
                  <th>审核状态</th>
                  <th>入库结果</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                ${
                  visibleRows.length
                    ? visibleRows
                        .map(
                          (row) => `
                            <tr>
                              <td><span class="audit-time">${escapeHtml(row.submittedAt || "-")}</span></td>
                              <td>
                                <span class="audit-material-name" title="${escapeHtml(row.name || "-")}">
                                  <strong>${escapeHtml(row.name || "-")}</strong>
                                  ${row.alias ? `<small>${escapeHtml(row.alias)}</small>` : ""}
                                </span>
                              </td>
                              <td>${escapeHtml(row.dataType || "-")}</td>
                              <td>${escapeHtml(row.flowType || "-")}</td>
                              <td>${renderAuditStatusBadge(getAuditRowStatusText(row), row.status?.className)}</td>
                              <td>${renderAuditStorageBadge(getAuditStorageResult(row))}</td>
                              <td>${renderAuditRowActions(row)}</td>
                            </tr>
                          `
                        )
                        .join("")
                    : `
                      <tr class="table-empty-row">
                        <td colspan="7">${renderEmptyState("暂无审核记录", "当前类型和状态下没有待展示的入库审核记录")}</td>
                      </tr>
                    `
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `;
}

function updateAuditRows(rowIds = [], nextStatusText = "审核通过", nextStorageResult = "已完成入库") {
  const page = systemPages["system-audit"];
  const idSet = new Set(rowIds);
  let updatedCount = 0;
  page.rows = (page.rows || []).map((row, index) => {
    const normalized = normalizeAuditRow(row, index);
    if (!idSet.has(normalized.id)) {
      return row;
    }
    updatedCount += 1;
    return hydrateSystemRow("system-audit", {
      ...normalized,
      reviewer: getCurrentOperatorName(),
      status: {
        text: nextStatusText,
        className: getSystemStatusClass("system-audit", nextStatusText)
      },
      storageResult: nextStorageResult,
      reviewedAt: systemNowDateTimeString()
    });
  });
  if (updatedCount) {
    refreshSystemPageMeta("system-audit");
    writeSystemPageStore();
  }
  return updatedCount;
}

function downloadAuditRow(row = {}) {
  const normalized = normalizeAuditRow(row);
  downloadCsvFile(`${normalized.name || "审核记录"}.csv`, [
    ["提交时间", "材料名称", "别名", "数据类型", "流程类型", "审核状态", "入库结果", "提交人", "审核人"],
    [
      normalized.submittedAt || "",
      normalized.name || "",
      normalized.alias || "",
      normalized.dataType || "",
      normalized.flowType || "",
      getAuditRowStatusText(normalized),
      getAuditStorageResult(normalized),
      normalized.submitter || "",
      normalized.reviewer || ""
    ]
  ]);
}

function renderAnalysisPage(page) {
  if (page.key === "standards") {
    const standardsModule = state.standardsModule || "gpa";
    return `
      <div class="page-section analysis-page standards-embed-page">
        <section class="standards-frame-shell" aria-label="工程细胞数据标准体系原型">
          <iframe class="standards-frame" src="./standards.html?embedded=1&module=${standardsModule}" title="工程细胞数据标准体系"></iframe>
        </section>
      </div>
    `;
  }

  if (ingestionPageConfig[page.key]) {
    const entryPage = ingestionPageConfig[page.key].entryPage;
    return `
      <div class="page-section analysis-page ingestion-embed-page">
        <section class="ingestion-frame-shell" aria-label="工程细胞数据入库">
          <iframe class="ingestion-frame" src="./engineering-cell-ingestion.html?embedded=1&page=${entryPage}" title="工程细胞数据入库"></iframe>
        </section>
      </div>
    `;
  }

  if (qualityPageConfig[page.key]) {
    const panel = qualityPageConfig[page.key].panel;
    return `
      <div class="page-section analysis-page quality-embed-page">
        <section class="quality-frame-shell" aria-label="工程细胞质量控制">
          <iframe class="quality-frame" src="./quality-control.html?embedded=1&panel=${panel}" title="工程细胞质量控制"></iframe>
        </section>
      </div>
    `;
  }

  if (page.key === "gene") {
    return renderGpaModulePage();
  }

  if (page.key === "system-audit") {
    return renderAuditReviewPage();
  }

  if (page.key === "system-portal-config") {
    return renderPortalConfigPage();
  }

  const filteredRows = getFilteredAnalysisRows(page);
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize) || 1);
  const current = Math.min(state.pagination[page.key] || 1, pageCount);
  state.pagination[page.key] = current;
  const pageRows = filteredRows.slice((current - 1) * pageSize, current * pageSize);
  const hasPrimaryButton = Boolean(page.primaryButton);
  const emptyDescription = hasActiveAnalysisFilters(page.key)
    ? `当前筛选条件下没有匹配的${page.title}记录，请调整筛选条件后重试`
    : `当前没有${page.title}相关记录`;

  return `
    <div class="page-section analysis-page">
      <div class="page-title-row">
        <h1 class="page-title">${page.title}</h1>
        ${
          hasPrimaryButton
            ? `
        <button class="toolbar-primary" type="button" data-primary-action="${isSystemMenu(page.key) ? page.primaryButton : page.key}">
          <span class="header-icon">${icon("i-plus")}</span>
          <span>${page.primaryButton}</span>
        </button>
        `
            : ""
        }
      </div>

      ${page.stats ? renderStatsGrid(page.stats) : ""}

      <section class="filter-card analysis-filter-card">
        <div class="card-section-head">
          <div>
            <h2 class="card-section-title">筛选条件</h2>
            <p class="card-section-desc">${page.title}支持按关键词与维度组合检索</p>
          </div>
        </div>
        <div class="filter-row">
          ${page.filters.map(renderFilterField).join("")}
          <div class="filter-actions">
            <button class="filter-button" type="button" data-filter-action="search|${page.key}">搜索</button>
            <button class="reset-link" type="button" data-filter-action="reset|${page.key}">重置</button>
          </div>
        </div>
      </section>

      <section class="table-wrap analysis-table-wrap list-table-wrap">
        <div class="card-section-head is-divider">
          <div>
            <h2 class="card-section-title">数据列表</h2>
            <p class="card-section-desc">${page.title}结果按分页展示</p>
          </div>
        </div>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th class="checkbox-cell"><div class="row-check"></div></th>
                ${page.columns.map((column) => `<th>${column.label}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${
                pageRows.length
                  ? pageRows
                      .map(
                        (row) => `
                          <tr>
                            <td class="checkbox-cell"><div class="row-check"></div></td>
                            ${page.columns.map((column) => `<td>${renderTableCell(row, column, page.key)}</td>`).join("")}
                          </tr>
                        `
                      )
                      .join("")
                  : `
                    <tr class="table-empty-row">
                      <td colspan="${page.columns.length + 1}">
                        ${renderEmptyState("暂无数据", emptyDescription)}
                      </td>
                    </tr>
                  `
              }
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <span>共 ${filteredRows.length} 条记录，每页 10 条</span>
          ${renderPagination(page.key, pageCount)}
        </div>
      </section>
    </div>
  `;
}

function gpaCurrentQueryLabel() {
  const parts = [state.gpa.compound, state.gpa.phenotype].filter(Boolean);
  return parts.length ? parts.join(" + ") : "全部GPA数据";
}

function gpaFilteredSearchRecords() {
  const compound = String(state.gpa.compound || "").trim();
  const phenotype = String(state.gpa.phenotype || "").trim();
  const chassis = String(state.gpa.chassis || "").trim();
  return gpaSearchRecords.filter((item) => {
    const matchCompound = !compound || item.compound.includes(compound) || item.gene.includes(compound);
    const matchPhenotype = !phenotype || item.phenotype === phenotype;
    const matchChassis = !chassis || item.chassis.includes(chassis);
    return matchCompound && matchPhenotype && matchChassis;
  });
}

function gpaFilteredPaths() {
  const type = String(state.gpa.pathType || "").trim();
  const source = String(state.gpa.pathSource || "").trim();
  return state.gpaPaths.filter((item) => {
    const matchType = !type || item.type === type;
    const matchSource = !source || item.source === source;
    return matchType && matchSource;
  });
}

function getGpaSearchRecord(id) {
  return gpaSearchRecords.find((item) => item.id === id) || null;
}

function getGpaPath(id) {
  return state.gpaPaths.find((item) => item.id === id) || state.gpaPaths[0];
}

function getGpaDataset(id) {
  return state.gpaDatasets.find((item) => item.id === id) || state.gpaDatasets[0];
}

function getGpaModel(id) {
  return state.gpaModels.find((item) => item.id === id) || state.gpaModels.find((item) => item.status === "已完成") || state.gpaModels[0];
}

function getGpaDesign(id) {
  return state.gpaDesigns.find((item) => item.id === id) || state.gpaDesigns[0];
}

function gpaStatusClass(status = "") {
  if (["已完成", "就绪", "重点关注", "完成", "已验证"].includes(status)) {
    return "is-valid";
  }
  if (["训练中", "处理中", "迭代中", "待录入", "待执行", "待确认"].includes(status)) {
    return "is-pending";
  }
  if (["异常", "失败", "已忽略"].includes(status)) {
    return "is-error";
  }
  return "is-normal";
}

function gpaRenderStatus(status) {
  return `<span class="status-chip ${gpaStatusClass(status)}">${escapeHtml(status || "-")}</span>`;
}

function gpaDatasetInUse(datasetId) {
  return state.gpaModels.some((item) => item.datasetId === datasetId) || state.gpaDesigns.some((item) => item.datasetId === datasetId);
}

function gpaPredictionRows() {
  return [
    { combo: "A+ B- C+ E+", actual: "--", predicted: "3.45", deviation: "--" },
    { combo: "A+ B+ C- D+", actual: "2.89", predicted: "3.01", deviation: "+4.2%" },
    { combo: "A- B+ C+ D- E+", actual: "--", predicted: "2.67", deviation: "--" }
  ];
}

function gpaNowDateTag() {
  const now = new Date();
  return `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function gpaNextModelVersion(version = "v1.0") {
  const number = Number(String(version).replace(/^v/i, "")) || 1;
  return `v${(number + 0.1).toFixed(1)}`;
}

function renderGpaModulePage() {
  const activeTab = state.gpa.tab || "search";
  const counts = {
    datasets: state.gpaDatasets.length,
    models: state.gpaModels.length,
    designs: state.gpaDesigns.length
  };
  const tabBody =
    activeTab === "path"
      ? renderGpaPathTab()
      : activeTab === "dataset"
        ? renderGpaDatasetTab()
        : activeTab === "analysis"
          ? renderGpaAnalysisTab()
          : activeTab === "model"
            ? renderGpaModelTab()
            : activeTab === "design"
              ? renderGpaDesignTab()
              : activeTab === "dbtl"
                ? renderGpaDbtlTab()
                : renderGpaSearchTab();

  return `
    <div class="page-section analysis-page gpa-module-page">
      <div class="page-title-row">
        <div>
          <h1 class="page-title">基因型-表型分析</h1>
          <p class="section-caption">按照“数据→分析→模型→设计→验证→数据”的业务闭环组织 GPA 与 GWAS 分析能力。</p>
        </div>
        <button class="toolbar-primary" type="button" data-gpa-tab="search">
          <span class="header-icon">${icon("i-bars")}</span>
          <span>进入GPA检索</span>
        </button>
      </div>

      <section class="gpa-flow-card">
        <div class="gpa-flow-title">
          <div>
            <h2>完整业务闭环</h2>
            <p>GPA检索 → 调控路径挖掘 → 数据集生成 → 统计/AI分析 → 模型训练 → 设计方案生成 → DBTL验证 → Learn回流 → 下一轮Design</p>
          </div>
          <div class="gpa-flow-steps">
            <span>数据集 ${counts.datasets}</span>
            <span>模型 ${counts.models}</span>
            <span>方案 ${counts.designs}</span>
          </div>
        </div>
        <div class="gpa-flow-steps">
          ${["GPA检索", "调控路径", "数据集", "统计/AI", "模型", "设计", "DBTL", "Learn回流"].map((step, index) => `<span>${index + 1}. ${step}</span>${index < 7 ? "<i></i>" : ""}`).join("")}
        </div>
      </section>

      <div class="gpa-tabbar">
        ${gpaTabs
          .map(
            (tab) => `
              <button class="gpa-tab ${activeTab === tab.key ? "is-active" : ""}" type="button" data-gpa-tab="${tab.key}">
                ${escapeHtml(tab.label)}
              </button>
            `
          )
          .join("")}
      </div>

      ${tabBody}
    </div>
  `;
}

function renderGpaSearchTab() {
  const records = gpaFilteredSearchRecords();
  const selected = records.length ? getGpaSearchRecord(state.gpa.selectedGene) || records[0] : null;

  return `
    <div class="gpa-two-column">
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>GPA数据检索</h4><p class="section-caption">通过“化合物/目标产物 + 表型”检索基因及扰动方式。</p></div>
        </div>
        <div class="filter-row">
          <label class="inline-field">
            <span>化合物/目标产物</span>
            <span class="filter-control-wrap"><input type="text" value="${escapeHtml(state.gpa.compound || "")}" placeholder="例如：苯砜" data-gpa-field="compound" /></span>
          </label>
          <label class="inline-field">
            <span>表型类型</span>
            <span class="filter-control-wrap">
              <select data-gpa-field="phenotype">
                <option value="">请选择表型类型</option>
                ${gpaPhenotypeOptions.map((item) => `<option ${state.gpa.phenotype === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
              </select>
            </span>
          </label>
          <label class="inline-field">
            <span>底盘细胞类型</span>
            <span class="filter-control-wrap"><input type="text" value="${escapeHtml(state.gpa.chassis || "")}" placeholder="例如：酵母" data-gpa-field="chassis" /></span>
          </label>
          <div class="filter-actions">
            <button class="filter-button" type="button" data-gpa-search>检索</button>
          </div>
        </div>
        <div class="requirement-list is-compact">
          ${gpaQuickTags.map((tag, index) => `<button class="table-link" type="button" data-gpa-quick="${index}">${escapeHtml(tag.label)}</button>`).join("")}
        </div>
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>检索结果</h4><p class="section-caption">当前命中 ${records.length} 条，默认按关联强度降序。</p></div>
        </div>
        <div class="gpa-result-list">
          ${
            records.length
              ? records
                  .map(
                    (item) => `
                      <button class="gpa-result-item ${selected?.id === item.id ? "is-active" : ""}" type="button" data-gpa-select-gene="${item.id}">
                        <strong>${escapeHtml(item.gene)}</strong>
                        <span>${escapeHtml(item.perturbation)}</span>
                        <em>${escapeHtml(item.strength)}</em>
                        <small>${escapeHtml(item.source)}</small>
                      </button>
                    `
                  )
                  .join("")
              : `
                ${renderEmptyState("未找到符合条件的基因-表型关联数据", "请调整检索条件，或查看全部公开GPA数据。")}
                <div class="gpa-empty-actions">
                  <button class="modal-outline" type="button" data-gpa-action="clear-search">调整检索条件</button>
                  <button class="modal-primary" type="button" data-gpa-action="clear-search">查看全部公开GPA数据</button>
                </div>
                <div class="requirement-list is-compact">
                  ${gpaQuickTags.map((tag, index) => `<button class="table-link" type="button" data-gpa-quick="${index}">${escapeHtml(tag.label)}</button>`).join("")}
                </div>
              `
          }
        </div>
      </section>

      <section class="gene-section-card is-full">
        <div class="gene-section-head">
          <div><h4>基因详情</h4><p class="section-caption">选中基因后展示完整信息与调控关系，并可进入后续流程。</p></div>
        </div>
        ${
          selected
            ? `
              ${renderGeneInfoGrid([
                { label: "基因名称", value: selected.gene },
                { label: "扰动方式", value: selected.perturbation },
                { label: "关联强度", value: selected.strength },
                { label: "数据来源", value: selected.source },
                { label: "底盘细胞", value: selected.chassis },
                { label: "目标表型", value: selected.phenotype }
              ])}
              <div class="requirement-list is-compact">
                ${selected.relations.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
              </div>
              <p class="section-caption">${escapeHtml(selected.desc)}</p>
              <div class="analysis-selected-actions">
                <button class="modal-outline" type="button" data-gpa-action="view-network">查看调控网络</button>
                <button class="modal-primary" type="button" data-gpa-action="join-dataset">加入数据集</button>
              </div>
            `
            : ""
        }
      </section>
    </div>
  `;
}

function renderGpaNetworkSvg(selectedPathId = "") {
  const active = getGpaPath(selectedPathId);
  const activePath = active?.path || "";
  return `
    <div class="gpa-network-canvas">
      <svg class="gpa-network-svg" viewBox="0 0 720 340" role="img" aria-label="基因调控网络图">
        <defs>
          <marker id="gpaArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#4a74f3"></path>
          </marker>
        </defs>
        <path class="gpa-edge native" d="M150 110 C230 80 290 80 360 110" fill="none" stroke-width="${activePath === "GeneA → GeneB" ? 4 : 2}" marker-end="url(#gpaArrow)"></path>
        <path class="gpa-edge native" d="M380 130 C430 180 470 200 540 208" fill="none" stroke-width="${activePath === "GeneB → GeneC" ? 4 : 2}" marker-end="url(#gpaArrow)"></path>
        <path class="gpa-edge hidden-on" d="M120 250 C160 190 210 150 300 120" fill="none" stroke-width="${activePath === "GeneF → GeneA" ? 4 : 2}" marker-end="url(#gpaArrow)"></path>
        <path class="gpa-edge hidden-off" d="M540 228 C500 270 430 286 340 250" fill="none" stroke-width="${activePath === "GeneC → GeneE" ? 4 : 2}" marker-end="url(#gpaArrow)"></path>
        ${[
          { id: "gpa-genea", label: "GeneA", x: 130, y: 110 },
          { id: "gpa-geneb", label: "GeneB", x: 370, y: 120 },
          { id: "gpa-genec", label: "GeneC", x: 560, y: 220 },
          { id: "gpa-gened", label: "GeneD", x: 560, y: 78 },
          { id: "gpa-genee", label: "GeneE", x: 320, y: 258 },
          { id: "gpa-genef", label: "GeneF", x: 100, y: 260 }
        ]
          .map(
            (node) => `
              <g class="gpa-node ${state.gpa.selectedGene === node.id ? "is-active" : ""}" data-gpa-select-gene="${node.id}">
                <circle cx="${node.x}" cy="${node.y}" r="27"></circle>
                <text x="${node.x}" y="${node.y + 4}" text-anchor="middle">${node.label}</text>
              </g>
            `
          )
          .join("")}
      </svg>
    </div>
  `;
}

function renderGpaPathTab() {
  const selectedPath = getGpaPath(state.gpa.selectedPath);
  const paths = gpaFilteredPaths();
  return `
    <div class="gpa-network-layout">
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>调控路径分析</h4><p class="section-caption">来源检索：${escapeHtml(state.gpa.pathContext || gpaCurrentQueryLabel())}</p></div>
          <button class="modal-outline" type="button" data-gpa-tab="search">返回检索</button>
        </div>
        <div class="filter-row gpa-path-filter-row">
          <label class="inline-field">
            <span>路径类型</span>
            <span class="filter-control-wrap">
              <select data-gpa-field="pathType">
                ${["", "固有路径", "隐藏激活路径", "隐藏关闭路径"].map((item) => `<option value="${escapeHtml(item)}" ${state.gpa.pathType === item ? "selected" : ""}>${escapeHtml(item || "全部")}</option>`).join("")}
              </select>
            </span>
          </label>
          <label class="inline-field">
            <span>数据来源</span>
            <span class="filter-control-wrap">
              <select data-gpa-field="pathSource">
                ${["", "公开数据库", "GPA差异分析"].map((item) => `<option value="${escapeHtml(item)}" ${state.gpa.pathSource === item ? "selected" : ""}>${escapeHtml(item || "全部")}</option>`).join("")}
              </select>
            </span>
          </label>
          <label class="inline-field">
            <span>布局方式</span>
            <span class="filter-control-wrap">
              <select data-gpa-field="pathLayout">
                ${["力导向", "环形", "层级"].map((item) => `<option ${state.gpa.pathLayout === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
              </select>
            </span>
          </label>
        </div>
        ${renderGpaNetworkSvg(selectedPath?.id)}
        <div class="gpa-network-legend">
          <span>固有路径</span>
          <span>隐藏激活路径</span>
          <span>隐藏关闭路径</span>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>路径列表</h4><p class="section-caption">识别到 ${paths.length} 条调控路径。</p></div>
        </div>
        <div class="gpa-path-list">
          ${
            paths.length
              ? paths
                  .map(
                    (path) => `
                      <button class="gpa-path-row ${selectedPath?.id === path.id ? "is-active" : ""}" type="button" data-gpa-path="${path.id}">
                        <strong>${escapeHtml(path.type)}</strong>
                        <span>${escapeHtml(path.path)}</span>
                        <em>${escapeHtml(path.relation)}</em>
                        ${gpaRenderStatus(path.status)}
                      </button>
                    `
                  )
                  .join("")
              : renderEmptyState("未检测到显著差异路径", "当前筛选条件下没有路径，调整路径类型或数据来源后重试。")
          }
        </div>
        ${
          selectedPath
            ? `
              <div class="omics-model-capability">
                <strong>选中路径详情</strong>
                <p>${escapeHtml(selectedPath.desc)}</p>
                <p>证据来源：${escapeHtml(selectedPath.evidence)}</p>
              </div>
              <div class="analysis-selected-actions">
                <button class="modal-outline" type="button" data-gpa-path-mark="${selectedPath.id}">标记</button>
                <button class="modal-outline" type="button" data-gpa-path-ignore="${selectedPath.id}">忽略</button>
                <button class="modal-primary" type="button" data-gpa-action="generate-dataset-from-path">生成数据集</button>
              </div>
            `
            : ""
        }
      </section>
    </div>
  `;
}

function renderGpaDatasetTab() {
  return `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>数据集管理</h4><p class="section-caption">GPA数据分析与GWAS分析共享同一数据集池，正在被任务使用的数据集不可删除。</p></div>
        <div class="analysis-selected-actions">
          <button class="modal-outline" type="button" data-gpa-action="generate-dataset">生成数据集</button>
          <button class="modal-primary" type="button" data-gpa-action="import-dataset">导入数据集</button>
        </div>
      </div>
      <div class="table-scroll gene-inner-table">
        <table class="data-table gene-snp-table">
          <thead><tr><th>数据集名称</th><th>来源</th><th>记录数</th><th>特征数</th><th>状态</th><th>时间</th><th>操作</th></tr></thead>
          <tbody>
            ${state.gpaDatasets
              .map((dataset) => {
                const locked = dataset.locked || gpaDatasetInUse(dataset.id);
                return `
                  <tr>
                    <td>${escapeHtml(dataset.name)}</td>
                    <td>${escapeHtml(dataset.source)}</td>
                    <td>${escapeHtml(String(dataset.records))}</td>
                    <td>${escapeHtml(String(dataset.features))}</td>
                    <td>${gpaRenderStatus(dataset.status)}</td>
                    <td>${escapeHtml(dataset.time)}</td>
                    <td>
                      <div class="table-actions">
                        <button class="table-link" type="button" data-gpa-dataset-action="ai|${dataset.id}">用于AI分析</button>
                        <button class="table-link" type="button" data-gpa-dataset-action="train|${dataset.id}">训练模型</button>
                        <button class="table-link is-danger" type="button" data-gpa-dataset-action="delete|${dataset.id}" ${locked ? "disabled" : ""}>删除</button>
                      </div>
                    </td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderGpaAiStepBody(step, dataset) {
  if (step === 1) {
    return `
      <div class="gpa-ai-panels">
        <section class="gpa-config-box">
          <h5>① 数据准备</h5>
          <p class="section-caption">选择数据集后进行字段校验、缺失值检查与基因名标准化。</p>
          <div class="requirement-list is-compact">
            <span>必须包含：基因型</span>
            <span>必须包含：表型值</span>
            <span>可选：扰动方式</span>
            <span>可选：条件参数</span>
          </div>
        </section>
        <section class="gpa-config-box">
          <h5>数据集摘要</h5>
          ${renderGeneInfoGrid([
            { label: "数据集名称", value: dataset?.name || "-" },
            { label: "来源", value: dataset?.source || "-" },
            { label: "记录数", value: String(dataset?.records || "-") },
            { label: "特征数", value: String(dataset?.features || "-") }
          ])}
        </section>
      </div>
    `;
  }

  if (step === 2) {
    return `
      <div class="gpa-ai-panels">
        <section class="gpa-config-box">
          <h5>② 传统统计分析</h5>
          <div class="gpa-progress-list">
            <div class="gpa-progress-row"><span>PCA</span><strong><i style="width:${state.gpa.statDone ? 88 : 42}%"></i></strong><em>${state.gpa.statDone ? "完成" : "待运行"}</em></div>
            <div class="gpa-progress-row"><span>非参数检验</span><strong><i style="width:${state.gpa.statDone ? 74 : 35}%"></i></strong><em>${state.gpa.statDone ? "完成" : "待运行"}</em></div>
            <div class="gpa-progress-row"><span>回归分析</span><strong><i style="width:${state.gpa.statDone ? 81 : 28}%"></i></strong><em>${state.gpa.statDone ? "完成" : "待运行"}</em></div>
          </div>
        </section>
        <section class="gpa-config-box">
          <h5>统计阈值</h5>
          <div class="gene-form-grid">
            ${renderGeneField({ name: "gpaPValue", label: "显著性阈值", value: "0.05", placeholder: "请输入阈值" })}
            ${renderGeneField({ name: "gpaRegression", label: "回归任务", type: "select", value: "表型值预测", options: ["表型值预测", "耐受等级分类"] })}
          </div>
        </section>
      </div>
    `;
  }

  if (step === 3) {
    return `
      <div class="gpa-ai-panels">
        <section class="gpa-config-box">
          <h5>③ 降维与AI训练</h5>
          <p class="section-caption">特征维度远大于样本量时，先通过稀疏矩阵/特征选择降低维度，再按算法顺序训练。</p>
          <div class="gpa-progress-list">
            <div class="gpa-progress-row"><span>随机森林</span><strong><i style="width:${state.gpa.aiTrained ? 100 : 68}%"></i></strong><em>${state.gpa.aiTrained ? "完成" : "待训练"}</em></div>
            <div class="gpa-progress-row"><span>XGBoost</span><strong><i style="width:${state.gpa.aiTrained ? 100 : 52}%"></i></strong><em>${state.gpa.aiTrained ? "完成" : "待训练"}</em></div>
            <div class="gpa-progress-row"><span>SVM</span><strong><i style="width:${state.gpa.aiTrained ? 100 : 34}%"></i></strong><em>${state.gpa.aiTrained ? "完成" : "待训练"}</em></div>
          </div>
        </section>
        <section class="gpa-config-box">
          <h5>算法参数</h5>
          <div class="gene-form-grid">
            ${renderGeneField({ name: "gpaTrainSplit", label: "训练/测试集比例", type: "select", value: "8:2", options: ["8:2", "7:3", "6:4"] })}
            ${renderGeneField({ name: "gpaFeatureMethod", label: "降维方法", type: "select", value: "稀疏矩阵", options: ["稀疏矩阵", "PCA", "特征选择"] })}
          </div>
        </section>
      </div>
    `;
  }

  if (step === 4) {
    return `
      <div class="gpa-ai-panels">
        <section class="gpa-config-box">
          <h5>④ 验证与效果对比</h5>
          <div class="table-scroll gene-inner-table">
            <table class="data-table gene-snp-table">
              <thead><tr><th>模型</th><th>准确率</th><th>R²</th><th>RMSE</th><th>训练耗时</th><th>排名</th></tr></thead>
              <tbody>
                <tr><td>XGBoost</td><td>0.94</td><td>0.91</td><td>0.23</td><td>3min</td><td>1</td></tr>
                <tr><td>随机森林</td><td>0.92</td><td>0.88</td><td>0.28</td><td>2min</td><td>2</td></tr>
                <tr><td>SVM</td><td>0.87</td><td>0.82</td><td>0.35</td><td>8min</td><td>3</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="gpa-config-box">
          <h5>推荐操作</h5>
          <p class="section-caption">按回归任务规则优先比较 R²，R² 相同时按 RMSE 排序。</p>
          <div class="analysis-selected-actions">
            <button class="modal-primary" type="button" data-gpa-action="save-ai-model" ${state.gpa.aiTrained ? "" : "disabled"}>将最优模型保存至模型管理</button>
          </div>
        </section>
      </div>
    `;
  }

  return `
    <div class="gpa-ai-panels">
      <section class="gpa-config-box">
        <h5>⑤ 新数据预测</h5>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead><tr><th>基因型组合</th><th>实际表型值</th><th>预测表型值</th><th>偏差</th></tr></thead>
            <tbody>
              ${gpaPredictionRows().map((row) => `<tr><td>${escapeHtml(row.combo)}</td><td>${escapeHtml(row.actual)}</td><td>${escapeHtml(row.predicted)}</td><td>${escapeHtml(row.deviation)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
        <p class="section-caption">“--”表示该条记录无实际表型值；偏差仅在实际值存在时计算。</p>
      </section>
      <section class="gpa-config-box">
        <h5>预测统计</h5>
        ${renderGeneInfoGrid([
          { label: "预测记录数", value: "120" },
          { label: "有实际值可对比", value: "45" },
          { label: "平均偏差", value: "3.8%" },
          { label: "模型", value: "XGBoost (R²=0.91)" }
        ])}
        <div class="analysis-selected-actions">
          <button class="modal-outline" type="button" data-gpa-action="download-prediction">导出预测结果</button>
          <button class="modal-outline" type="button" data-gpa-action="add-ai-prediction">将预测数据加入数据集</button>
          <button class="modal-primary" type="button" data-gpa-action="generate-design-from-ai">生成设计方案</button>
        </div>
      </section>
    </div>
  `;
}

function renderGpaAnalysisTab() {
  const dataset = getGpaDataset(state.gpa.selectedDataset);
  const step = state.gpa.aiStep || 1;
  const steps = ["数据准备", "传统统计", "降维分析", "AI训练", "新数据预测"];
  return `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>统计/AI分析工作台</h4><p class="section-caption">传统统计方法与AI分析共用数据集池，AI训练结果可保存至模型管理。</p></div>
      </div>
      <div class="gpa-stepper">
        ${steps.map((label, index) => `<button class="gpa-step ${step === index + 1 ? "is-active" : ""} ${step > index + 1 ? "is-done" : ""}" type="button" data-gpa-ai-step="${index + 1}"><span>${index + 1}</span>${escapeHtml(label)}</button>`).join("")}
      </div>
      <div class="gpa-stat-grid">
        <div class="gpa-config-box">
          <h5>数据准备</h5>
          <div class="gene-field">
            <label>选择数据集</label>
            <select class="gene-control" data-gpa-field="selectedDataset">
              ${state.gpaDatasets.map((item) => `<option value="${item.id}" ${dataset?.id === item.id ? "selected" : ""}>${escapeHtml(item.name)}（${escapeHtml(item.status)}）</option>`).join("")}
            </select>
          </div>
          <div class="omics-model-capability">
            <strong>${escapeHtml(dataset?.name || "-")}</strong>
            <p>记录数：${escapeHtml(String(dataset?.records || "-"))}；特征数：${escapeHtml(String(dataset?.features || "-"))}；来源：${escapeHtml(dataset?.source || "-")}</p>
          </div>
          <div class="analysis-selected-actions">
            <button class="modal-outline" type="button" data-gpa-action="run-stat">${state.gpa.statRunning ? "分析中" : "运行统计分析"}</button>
            <button class="modal-primary" type="button" data-gpa-action="run-ai">${state.gpa.aiTraining ? "训练中" : "运行AI分析"}</button>
          </div>
        </div>
        <div class="gpa-config-box">
          <h5>分析输出</h5>
          <div class="gpa-progress-list">
            <div class="gpa-progress-row"><span>PCA</span><strong><i style="width:${state.gpa.statDone ? 88 : 42}%"></i></strong><em>${state.gpa.statDone ? "完成" : "待运行"}</em></div>
            <div class="gpa-progress-row"><span>非参数检验</span><strong><i style="width:${state.gpa.statDone ? 74 : 35}%"></i></strong><em>${state.gpa.statDone ? "完成" : "待运行"}</em></div>
            <div class="gpa-progress-row"><span>回归分析</span><strong><i style="width:${state.gpa.statDone ? 81 : 28}%"></i></strong><em>${state.gpa.statDone ? "完成" : "待运行"}</em></div>
            <div class="gpa-progress-row"><span>AI网络</span><strong><i style="width:${state.gpa.aiTrained ? 92 : 48}%"></i></strong><em>${state.gpa.aiTrained ? "完成" : "待训练"}</em></div>
          </div>
          <div class="analysis-selected-actions">
            <button class="modal-outline" type="button" data-gpa-ai-prev>上一步</button>
            <button class="modal-outline" type="button" data-gpa-ai-next>下一步</button>
            <button class="modal-primary" type="button" data-gpa-action="save-ai-model" ${state.gpa.aiTrained ? "" : "disabled"}>保存至模型管理</button>
          </div>
        </div>
      </div>
      ${renderGpaAiStepBody(step, dataset)}
    </section>
  `;
}

function renderGpaModelTab() {
  return `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>模型管理</h4><p class="section-caption">模型同样为共享资源池，GPA快捷训练与AI工作台训练的模型共存。</p></div>
        <button class="modal-primary" type="button" data-gpa-action="train-model">训练新模型</button>
      </div>
      <div class="table-scroll gene-inner-table">
        <table class="data-table gene-snp-table">
          <thead><tr><th>模型名称</th><th>算法</th><th>训练数据集</th><th>准确率</th><th>R²</th><th>RMSE</th><th>状态</th><th>版本</th><th>操作</th></tr></thead>
          <tbody>
            ${state.gpaModels
              .map(
                (model) => `
                  <tr>
                    <td>${escapeHtml(model.name)}</td>
                    <td>${escapeHtml(model.algorithm)}</td>
                    <td>${escapeHtml(model.dataset)}</td>
                    <td>${escapeHtml(model.accuracy)}</td>
                    <td>${escapeHtml(model.r2)}</td>
                    <td>${escapeHtml(model.rmse)}</td>
                    <td>${gpaRenderStatus(model.status)}</td>
                    <td>${escapeHtml(model.version)}</td>
                    <td>
                      <div class="table-actions">
                        <button class="table-link" type="button" data-gpa-model-action="detail|${model.id}">详情</button>
                        <button class="table-link" type="button" data-gpa-model-action="design|${model.id}" ${model.status === "已完成" ? "" : "disabled"}>用于设计方案生成</button>
                      </div>
                    </td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderGpaDesignDetail(design) {
  if (!design) {
    return renderEmptyState("暂无设计方案", "请先从模型管理或AI预测结果生成设计方案。");
  }
  return `
    ${renderGeneInfoGrid([
      { label: "方案名称", value: design.name },
      { label: "目标表型", value: design.target },
      { label: "使用模型", value: design.modelName },
      { label: "DBTL轮次", value: `第${design.round}轮` },
      { label: "状态", html: gpaRenderStatus(design.status) },
      { label: "生成时间", value: design.createdAt }
    ])}
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead><tr><th>基因</th><th>推荐扰动</th><th>预测提升</th></tr></thead>
        <tbody>${design.genes.map((item) => `<tr><td>${escapeHtml(item.gene)}</td><td>${escapeHtml(item.perturbation)}</td><td>${escapeHtml(item.lift)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderGpaDesignTab() {
  const design = getGpaDesign(state.gpa.selectedDesign);
  return `
    <div class="gpa-two-column">
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>设计方案列表</h4><p class="section-caption">基于已训练模型生成基因型组合方案。</p></div>
          <button class="modal-primary" type="button" data-gpa-action="generate-design">生成新方案</button>
        </div>
        <div class="gpa-result-list">
          ${state.gpaDesigns
            .map(
              (item) => `
                <button class="gpa-result-item ${design?.id === item.id ? "is-active" : ""}" type="button" data-gpa-design="${item.id}">
                  <strong>${escapeHtml(item.id)}</strong>
                  <span>${escapeHtml(item.name)}</span>
                  <em>第${escapeHtml(String(item.round))}轮</em>
                  ${gpaRenderStatus(item.status)}
                </button>
              `
            )
            .join("")}
        </div>
      </section>
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>方案详情</h4><p class="section-caption">Design 阶段输出，后续进入 Build、Test、Learn。</p></div>
        </div>
        ${renderGpaDesignDetail(design)}
        <div class="analysis-selected-actions">
          <button class="modal-outline" type="button" data-gpa-tab="dbtl">进入DBTL验证</button>
          <button class="modal-primary" type="button" data-gpa-action="verify-design">录入验证结果</button>
        </div>
      </section>
    </div>
  `;
}

function renderGpaDbtlTab() {
  const design = getGpaDesign(state.gpa.selectedDesign);
  return `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>设计方案与验证（DBTL）</h4><p class="section-caption">Learn阶段会将实验验证数据写回关联数据集，并触发模型版本更新与下一轮Design。</p></div>
        <button class="modal-primary" type="button" data-gpa-action="verify-design">录入验证结果</button>
      </div>
      <div class="gpa-stepper">
        ${["Design", "Build", "Test", "Learn", "下一轮Design"].map((item, index) => `<span class="gpa-step ${index < 2 ? "is-done" : index === 2 ? "is-active" : ""}"><span>${index + 1}</span>${item}</span>`).join("")}
      </div>
      ${renderGpaDesignDetail(design)}
      <div class="table-scroll gene-inner-table">
        <table class="data-table gene-snp-table">
          <thead><tr><th>轮次</th><th>阶段</th><th>状态</th><th>结果</th></tr></thead>
          <tbody>${(design?.dbtl || []).map((item) => `<tr><td>${escapeHtml(item.round)}</td><td>${escapeHtml(item.stage)}</td><td>${gpaRenderStatus(item.status)}</td><td>${escapeHtml(item.result)}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderGpaDatasetGenerateModal(source = "search") {
  const selected = getGpaSearchRecord(state.gpa.selectedGene);
  const selectedPath = getGpaPath(state.gpa.selectedPath);
  const sourceLabel = source === "path" ? "调控路径分析结果" : "GPA检索结果";
  const defaultName = source === "path" ? `${selectedPath?.type || "调控路径"}数据集` : `${selected?.compound || "GPA"}${selected?.phenotype || ""}数据集`;
  return renderGeneModalShell({
    title: "生成数据集",
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${renderGeneField({ name: "gpaDatasetName", label: "数据集名称", value: defaultName, placeholder: "请输入数据集名称" })}
        ${renderGeneField({ name: "gpaDatasetSource", label: "来源", type: "select", value: sourceLabel, options: ["GPA检索结果", "调控路径分析结果", "AI预测", "实验验证"] })}
        ${renderGeneField({ name: "gpaDatasetRecords", label: "记录数", value: source === "path" ? "860" : "1240", placeholder: "请输入记录数" })}
        ${renderGeneField({ name: "gpaDatasetFeatures", label: "特征数", value: source === "path" ? "18" : "15", placeholder: "请输入特征数" })}
        ${renderGeneField({ name: "gpaDatasetNote", label: "说明", type: "textarea", full: true, value: source === "path" ? selectedPath?.desc || "" : selected?.desc || "", placeholder: "请输入数据集说明" })}
        <div class="gene-field is-full">
          <label>包含内容</label>
          <div class="gpa-check-list">
            <span>已包含：关联基因信息</span>
            <span>已包含：扰动方式</span>
            <span>已包含：调控关系数据</span>
            <span>${source === "path" ? "已包含：隐藏路径标记数据" : "可在调控路径分析后补充隐藏路径标记"}</span>
          </div>
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gpa">取消</button>
      <button class="modal-primary" type="button" data-gpa-submit="generate-dataset|${escapeHtml(source)}">确定</button>
    `
  });
}

function renderGpaDatasetImportModal() {
  return renderGeneModalShell({
    title: "导入数据集",
    sizeClass: "is-gene-form",
    body: `
      <div class="gpa-import-empty">
        <label class="gpa-import-picker">
          <input type="file" accept=".vcf,.bed,.fam,.phe,.csv" data-gpa-import-file />
          <strong>${escapeHtml(state.gpa.importFileName || "请选择本地数据文件")}</strong>
          <span>支持 VCF、BED、FAM、PHE、CSV；由用户自行选择数据集内容。</span>
        </label>
        <div class="gene-form-grid">
          ${renderGeneField({ name: "gpaImportName", label: "数据集名称", value: "", placeholder: "请输入数据集名称" })}
          ${renderGeneField({ name: "gpaImportSource", label: "来源", type: "select", value: "", placeholder: "请选择来源", options: ["实验导入", "公开数据", "AI预测", "实验验证"] })}
          ${renderGeneField({ name: "gpaImportRecords", label: "记录数", value: "", placeholder: "请输入记录数" })}
          ${renderGeneField({ name: "gpaImportFeatures", label: "特征数", value: "", placeholder: "请输入特征数" })}
        </div>
        <div class="gpa-import-summary">
          <p>数据格式要求</p>
          <span>必须包含列：基因型、表型值；可选列：扰动方式、条件参数。上传后进行编码、空值和字段一致性校验。</span>
          <div class="analysis-selected-actions">
            <button class="modal-outline" type="button" data-gpa-action="download-gpa-template">下载模板</button>
          </div>
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gpa">取消</button>
      <button class="modal-primary" type="button" data-gpa-submit="import-dataset">确定</button>
    `
  });
}

function renderGpaDatasetDeleteModal(datasetId = "") {
  const dataset = getGpaDataset(datasetId);
  if (!dataset) {
    return "";
  }
  return renderGeneModalShell({
    title: "删除数据集",
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定删除数据集 ${escapeHtml(dataset.name)} 吗？</h4>
        <p>来源：${escapeHtml(dataset.source)}；记录数：${escapeHtml(String(dataset.records))}；特征数：${escapeHtml(String(dataset.features))}</p>
        <span>删除后将无法用于统计/AI分析、模型训练和设计方案生成。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gpa">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-gpa-submit="delete-dataset|${dataset.id}">确认删除</button>
    `
  });
}

function renderGpaTrainModelModal(datasetId = "") {
  const dataset = getGpaDataset(datasetId || state.gpa.selectedDataset);
  const readyDatasets = state.gpaDatasets.filter((item) => item.status === "就绪");
  return renderGeneModalShell({
    title: "训练新模型",
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${renderGeneField({ name: "gpaModelName", label: "模型名称", value: "", placeholder: "请输入模型名称" })}
        <div class="gene-field">
          <label>训练数据集</label>
          <select class="gene-control" data-gpa-field="trainDataset">
            ${readyDatasets.map((item) => `<option value="${item.id}" ${dataset?.id === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}
          </select>
          ${renderRequirementHint("仅显示状态为“就绪”的数据集")}
        </div>
        ${renderGeneField({ name: "gpaAlgorithm", label: "默认算法", type: "select", value: "随机森林", options: ["随机森林", "XGBoost", "SVM", "神经网络"] })}
        ${renderGeneField({ name: "gpaSplitRatio", label: "训练/测试集比例", type: "select", value: "8:2", options: ["8:2", "7:3", "6:4"] })}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gpa">取消</button>
      <button class="modal-primary" type="button" data-gpa-submit="train-model">开始训练</button>
    `
  });
}

function renderGpaModelDetailModal(modelId = "") {
  const model = getGpaModel(modelId);
  return renderGeneModalShell({
    title: `模型详情 - ${model?.name || ""}`,
    sizeClass: "gene-result-modal",
    body: `
      ${renderGeneInfoGrid([
        { label: "模型名称", value: model?.name },
        { label: "算法", value: model?.algorithm },
        { label: "训练数据集", value: model?.dataset },
        { label: "准确率", value: model?.accuracy },
        { label: "R²", value: model?.r2 },
        { label: "RMSE", value: model?.rmse },
        { label: "状态", html: gpaRenderStatus(model?.status) },
        { label: "版本", value: model?.version }
      ])}
      <section class="gene-section-card">
        <div class="gene-section-head"><div><h4>特征重要性Top5</h4><p class="section-caption">用于后续设计方案生成时排序候选基因。</p></div></div>
        <div class="gpa-progress-list">
          ${[
            ["GeneA(过表达)", 92, "0.23"],
            ["GeneB(敲除)", 76, "0.19"],
            ["GeneC(点突变)", 64, "0.16"],
            ["GeneD(启动子替换)", 56, "0.14"],
            ["GeneE(过表达)", 44, "0.11"]
          ].map(([label, width, value]) => `<div class="gpa-progress-row"><span>${escapeHtml(label)}</span><strong><i style="width:${width}%"></i></strong><em>${escapeHtml(value)}</em></div>`).join("")}
        </div>
      </section>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gpa">关闭</button>
      <button class="modal-primary" type="button" data-gpa-model-action="design|${model?.id || ""}">用于设计方案生成</button>
    `
  });
}

function renderGpaVerificationModal(designId = "") {
  const design = getGpaDesign(designId || state.gpa.selectedDesign);
  return renderGeneModalShell({
    title: "录入DBTL验证结果",
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${renderGeneField({ name: "gpaVerifyValue", label: "实测表型值", value: "", placeholder: "例如 3.28 g/L" })}
        ${renderGeneField({ name: "gpaVerifyConclusion", label: "验证结论", type: "select", value: "", placeholder: "请选择验证结论", options: ["达到预期", "低于预期", "需要复测"] })}
        ${renderGeneField({ name: "gpaVerifyNote", label: "验证说明", type: "textarea", full: true, value: "", placeholder: "请输入Build/Test阶段说明" })}
      </div>
      <div class="omics-model-capability">
        <strong>${escapeHtml(design?.name || "-")}</strong>
        <p>提交后进入Learn阶段：实验验证数据写回数据集，关联模型版本递增，并自动生成下一轮Design。</p>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gpa">取消</button>
      <button class="modal-primary" type="button" data-gpa-submit="verify|${design?.id || ""}">确定</button>
    `
  });
}

function gpaReadValue(fieldName) {
  return (
    document.querySelector(`[data-gene-field="${fieldName}"]`)?.value?.trim() ||
    document.querySelector(`[data-gpa-field="${fieldName}"]`)?.value?.trim() ||
    ""
  );
}

function gpaStoreDataset(dataset) {
  state.gpaDatasets = [dataset, ...state.gpaDatasets.filter((item) => item.id !== dataset.id)];
  state.gpa.selectedDataset = dataset.id;
  state.gpa.tab = "dataset";
}

function gpaStoreModel(model) {
  state.gpaModels = [model, ...state.gpaModels.filter((item) => item.id !== model.id)];
  state.gpa.selectedModel = model.id;
  state.gpa.tab = "model";
}

function downloadGpaDatasetTemplate() {
  downloadCsvFile("GPA数据集导入模板.csv", [["基因型", "表型值", "扰动方式", "条件参数"], ["GeneA+", "3.45", "过表达", "苯砜耐受"]]);
}

function downloadGpaPredictionResult() {
  downloadCsvFile("GPA新数据预测结果.csv", [["基因型组合", "实际表型值", "预测表型值", "偏差"], ...gpaPredictionRows().map((row) => [row.combo, row.actual, row.predicted, row.deviation])]);
}

function gpaAppendPredictionDataset() {
  const dataset = getGpaDataset(state.gpa.selectedDataset);
  const nextDataset = {
    id: generateSystemLocalId("gpa-data"),
    name: `${dataset?.name || "GPA"}AI预测数据`,
    source: "AI预测",
    records: 120,
    features: Number(dataset?.features || 0),
    status: "就绪",
    time: gpaNowDateTag(),
    locked: false,
    note: "由新数据预测结果追加生成，可用于模型迭代训练"
  };
  gpaStoreDataset(nextDataset);
  return nextDataset;
}

function gpaBuildModelPayload({ modelName = "", datasetId = "", algorithm = "随机森林", source = "manual" } = {}) {
  const dataset = getGpaDataset(datasetId);
  return {
    id: generateSystemLocalId(source === "ai" ? "gpa-ai-model" : "gpa-model"),
    name: modelName || `${dataset?.name || "GPA"}训练模型`,
    algorithm,
    datasetId: dataset?.id || "",
    dataset: dataset?.name || "--",
    accuracy: algorithm === "XGBoost" ? "0.92" : "0.89",
    r2: algorithm === "XGBoost" ? "0.91" : "0.88",
    rmse: algorithm === "XGBoost" ? "0.23" : "0.28",
    status: "已完成",
    version: "v1.0",
    locked: false
  };
}

function gpaCreateDesignFromModel(modelId = "", { roundOffset = 1 } = {}) {
  const model = getGpaModel(modelId || state.gpa.selectedModel);
  const dataset = getGpaDataset(model?.datasetId);
  const currentMaxRound = Math.max(0, ...state.gpaDesigns.map((item) => Number(item.round) || 0));
  const round = currentMaxRound + roundOffset;
  const design = {
    id: generateSystemLocalId("design"),
    name: `${model?.name || "GPA模型"}-第${round}轮设计`,
    target: state.gpa.phenotype || "目标表型",
    modelId: model?.id || "",
    datasetId: dataset?.id || "",
    modelName: model?.name || "",
    round,
    status: "已生成",
    createdAt: new Date().toISOString().slice(0, 16).replace("T", " "),
    genes: [
      { gene: "GeneA", perturbation: "过表达", lift: "+23.5%" },
      { gene: "GeneB", perturbation: "敲除", lift: "+18.2%" },
      { gene: "GeneC", perturbation: "点突变", lift: "+12.8%" }
    ],
    dbtl: [
      { round: `第${round}轮`, stage: "Design", status: "完成", result: "生成方案" },
      { round: `第${round}轮`, stage: "Build", status: "待执行", result: "等待菌株构建" },
      { round: `第${round}轮`, stage: "Test", status: "待录入", result: "等待表型值" },
      { round: `第${round}轮`, stage: "Learn", status: "待执行", result: "等待模型更新" }
    ]
  };
  state.gpaDesigns = [design, ...state.gpaDesigns];
  state.gpa.selectedDesign = design.id;
  state.gpa.tab = "design";
  return design;
}

function gpaCompleteVerification(designId = "") {
  const design = getGpaDesign(designId || state.gpa.selectedDesign);
  if (!design) {
    throw new Error("未找到设计方案");
  }
  const value = gpaReadValue("gpaVerifyValue");
  const conclusion = gpaReadValue("gpaVerifyConclusion");
  const note = gpaReadValue("gpaVerifyNote");
  if (!value || !conclusion) {
    throw new Error("请填写实测表型值并选择验证结论");
  }

  design.status = "已验证";
  design.dbtl = [
    { round: `第${design.round}轮`, stage: "Design", status: "完成", result: "生成方案" },
    { round: `第${design.round}轮`, stage: "Build", status: "完成", result: "菌株构建完成" },
    { round: `第${design.round}轮`, stage: "Test", status: "完成", result: value },
    { round: `第${design.round}轮`, stage: "Learn", status: "完成", result: conclusion }
  ];

  const dataset = getGpaDataset(design.datasetId);
  if (dataset) {
    dataset.records = Number(dataset.records || 0) + 1;
    dataset.status = "就绪";
    dataset.time = gpaNowDateTag();
    dataset.note = [dataset.note, `实验验证：${value}；${conclusion}${note ? `；${note}` : ""}`].filter(Boolean).join("；");
  }

  const model = getGpaModel(design.modelId);
  if (model) {
    model.version = gpaNextModelVersion(model.version);
    model.status = "已完成";
    model.locked = true;
    state.gpa.selectedModel = model.id;
    gpaCreateDesignFromModel(model.id, { roundOffset: 1 });
  }
  state.gpa.tab = "dbtl";
  appendOperationLog("gene", `DBTL Learn回流：${design.name}`);
}

function getGeneProject(projectId) {
  const target = String(projectId || "");
  return (
    geneProjectLibrary[target] ||
    Object.values(geneProjectLibrary).find((project) => [project.id, project.name, project.code].some((value) => String(value || "") === target)) ||
    geneProjectLibrary["gene-lysine"]
  );
}

function geneStatusClass(status) {
  if (status === "已完成") {
    return "is-normal";
  }
  if (status === "分析中") {
    return "is-warning";
  }
  return "is-error";
}

function renderGeneModalShell({ title, sizeClass = "", body, footer = "" }) {
  const hasParentModal = Boolean(state.modal?.parentModal);
  return `
    <div class="modal-layer">
      <section class="modal gene-modal ${sizeClass}">
        <header class="gene-modal-header">
          <div class="gene-modal-heading">
            ${
              hasParentModal
                ? `
                  <button class="gene-modal-back" type="button" data-modal-back="gene" aria-label="返回上一级">
                    <span class="header-icon">${icon("i-arrow-left")}</span>
                  </button>
                `
                : ""
            }
            <h3 class="gene-modal-title">${escapeHtml(title)}</h3>
          </div>
          <button class="gene-modal-close" type="button" data-close-modal="gene">
            <span class="header-icon">${icon("i-close")}</span>
          </button>
        </header>
        <div class="gene-modal-body">${body}</div>
        ${footer ? `<footer class="gene-modal-footer">${footer}</footer>` : ""}
      </section>
    </div>
  `;
}

function renderUserProfileModal() {
  const currentUser = getCurrentUserProfile();
  const infoItems = [
    { label: "用户名", value: currentUser.username || "-" },
    { label: "姓名", value: currentUser.name || "-" },
    { label: "手机号", value: currentUser.mobile || "-" },
    { label: "性别", value: currentUser.gender || "-" },
    { label: "邮箱", value: currentUser.email || "-" },
    { label: "所属机构", value: currentUser.organization || "-" },
    {
      label: "状态",
      html: `<span class="status-chip ${escapeHtml(currentUser.status?.className || "is-valid")}">${escapeHtml(
        currentUser.status?.text || "-"
      )}</span>`
    },
    { label: "创建时间", value: currentUser.createdAt || "-" }
  ];

  return renderGeneModalShell({
    title: "个人信息",
    sizeClass: "is-user-profile-modal",
    body: `
      <section class="user-profile-card">
        <div class="user-profile-banner">
          <span class="header-user-avatar is-large">${icon("i-user")}</span>
          <div class="user-profile-banner-meta">
            <h4>${escapeHtml(currentUser.name || currentUser.username || "当前用户")}</h4>
            <p>${escapeHtml(currentUser.organization || "国科信平台")}</p>
          </div>
        </div>
        <div class="user-profile-grid">
          ${infoItems
            .map(
              (item) => `
                <div class="user-profile-item">
                  <span>${escapeHtml(item.label)}</span>
                  <strong title="${escapeHtml(item.value || item.label)}">${item.html || escapeHtml(item.value || "-")}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="user-profile">关闭</button>
    `
  });
}

function renderGeneField(field) {
  const fieldClass = `gene-field ${field.full ? "is-full" : ""}`;
  const label = `<label>${escapeHtml(field.label)}</label>`;
  const fieldName = escapeHtml(field.name || "");
  const rule = getFieldRule(field, field.moduleKey || "");
  const selectValue = field.value ?? "";

  if (field.type === "file") {
    const fileName = String(field.value || "").trim();
    const fileSize = String(field.fileSize || "").trim();
    return `
      <div class="${fieldClass} is-full">
        ${label}
        <div class="analysis-upload-field">
          <input class="analysis-file-input" type="file" data-gene-field="${fieldName}" data-file-field="true" accept="${escapeHtml(field.accept || "")}" />
          <div class="gene-upload-box">
            <span class="gene-upload-icon">${icon("i-upload")}</span>
            <p>上传算法代码包</p>
            <span>${escapeHtml(field.placeholder || "请选择文件")}</span>
            <div class="analysis-upload-actions">
              <button class="modal-outline" type="button" data-file-trigger="${fieldName}">选择文件</button>
            </div>
          </div>
          <div class="analysis-selected-file ${fileName ? "" : "is-empty"}">
            ${fileName ? `<strong title="${escapeHtml(fileName)}">${escapeHtml(fileName)}</strong><span>${escapeHtml(fileSize || "已选择文件")}</span>` : `<span>未选择代码包，新增算法时请同步上传。</span>`}
          </div>
        </div>
        ${renderRequirementHint(rule)}
      </div>
    `;
  }

  if (field.type === "select") {
    return `
      <div class="${fieldClass}">
        ${label}
        <select class="gene-control" data-gene-field="${fieldName}">
          ${selectValue === "" ? `<option value="" selected disabled>${escapeHtml(field.placeholder || "请选择")}</option>` : ""}
          ${field.options
            .map(
              (option) => `
                <option ${option === selectValue ? "selected" : ""}>${escapeHtml(option)}</option>
              `
            )
            .join("")}
        </select>
        ${renderRequirementHint(rule)}
      </div>
    `;
  }

  if (field.type === "textarea") {
    return `
      <div class="${fieldClass}">
        ${label}
        <textarea class="gene-control gene-textarea" rows="4" data-gene-field="${fieldName}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(field.value || "")}</textarea>
        ${renderRequirementHint(rule)}
      </div>
    `;
  }

  return `
    <div class="${fieldClass}">
      ${label}
      <input class="gene-control" type="text" data-gene-field="${fieldName}" value="${escapeHtml(field.value || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />
      ${renderRequirementHint(rule)}
    </div>
  `;
}

function renderAnalysisField(field) {
  return renderGeneField(field);
}

function renderAnalysisControl(field) {
  const fieldName = escapeHtml(field.name || "");
  const rule = getFieldRule(field, field.moduleKey || "");
  const selectValue = field.value ?? "";
  if (field.type === "select") {
    return `
      <div class="rule-control-stack">
      <select class="gene-control" data-gene-field="${fieldName}">
        ${selectValue === "" ? `<option value="" selected disabled>${escapeHtml(field.placeholder || "请选择")}</option>` : ""}
        ${field.options
          .map(
            (option) => `
              <option ${option === selectValue ? "selected" : ""}>${escapeHtml(option)}</option>
            `
          )
          .join("")}
      </select>
      ${renderRequirementHint(rule)}
      </div>
    `;
  }

  if (field.type === "textarea") {
    return `
      <div class="rule-control-stack">
        <textarea class="gene-control gene-textarea" rows="4" data-gene-field="${fieldName}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(field.value || "")}</textarea>
        ${renderRequirementHint(rule)}
      </div>
    `;
  }

  return `
    <div class="rule-control-stack">
      <input class="gene-control" type="text" data-gene-field="${fieldName}" value="${escapeHtml(field.value || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />
      ${renderRequirementHint(rule)}
    </div>
  `;
}

function renderFullModuleOptions(selectedModules = []) {
  const options = [
    { id: "genotype", label: "基因型-表型数据分析" },
    { id: "omics", label: "组学数据分析" },
    { id: "process", label: "发酵过程数据分析" },
    { id: "patent", label: "专利风险分析" }
  ];

  return `
    <div class="full-module-grid">
      ${options
        .map(
          (option) => `
            <label class="full-module-item">
              <input type="checkbox" data-analysis-module="${option.id}" ${selectedModules.includes(option.id) ? "checked" : ""} />
              <span class="full-module-check"></span>
              <span>${escapeHtml(option.label)}</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOmicsFormModal(mode, itemId = "") {
  const current = itemId ? hydrateOmicsItem(getAnalysisRow("omics", itemId) || {}) : null;
  const isEdit = mode === "edit";
  const title = mode === "edit" ? "编辑代谢模型" : "新建组学数据分析项目";
  const footerLabel = mode === "edit" ? "保存修改" : "确认创建";
  const fields = [
    { name: "analysis-name", label: "模型名称", value: current?.name || "", placeholder: "请输入代谢模型名称", rule: "必填，2-50字符，建议唯一" },
    {
      name: "analysis-strain",
      label: "菌株类型",
      type: "select",
      value: isEdit ? current?.strain || "" : "",
      options: ["大肠杆菌", "酵母菌", "芽孢杆菌"],
      rule: "必填，只能选择当前菌株类型"
    },
    {
      name: "analysis-source",
      label: "模型来源",
      type: "select",
      value: isEdit ? current?.source || "" : "",
      options: ["文件导入", "数据库导入", "手动构建"],
      rule: "必填，只能选择文件导入、数据库导入、手动构建"
    },
    {
      name: "analysis-description",
      label: "模型描述",
      type: "textarea",
      full: true,
      value: current?.description || "",
      placeholder: "请输入模型描述信息",
      rule: "可选，最多500字符"
    }
  ];

  const uploadBox =
    mode === "edit"
      ? `
        <div class="gene-field is-full">
          <div class="omics-upload-panel">
            <div class="omics-upload-icon">${icon("i-upload")}</div>
            <p>已上传：${escapeHtml(current?.fileName || "model.xml")} <button class="table-link" type="button">点击重新上传</button></p>
            <span>支持 .xml, .json, .mat 格式，模型文件不超过200MB</span>
          </div>
        </div>
      `
      : "";

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form",
    body: `
      <div class="omics-form-grid">
        ${fields
          .map((field) => {
            const required = field.name !== "analysis-description" ? '<span class="omics-required">*</span>' : "";
            return `
              <div class="gene-field ${field.full ? "is-full" : ""}">
                <label>${required}${escapeHtml(field.label)}</label>
                ${renderAnalysisControl(field)}
              </div>
            `;
          })
          .join("")}
        ${uploadBox}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|omics|${itemId}">${footerLabel}</button>
    `
  });
}

function renderOmicsBasicInfoGrid(item) {
  const infoItems = [
    { label: "模型名称", value: item.name, valueClass: "is-link" },
    { label: "菌株类型", value: item.strain },
    { label: "模型类型", value: item.type },
    { label: "反应数", value: item.reactions },
    { label: "代谢物数", value: item.metabolites },
    { label: "目标产物", value: item.targetProduct, valueClass: "is-green" },
    { label: "预测通量", value: `${item.flux} mmol/g/h` },
    { label: "状态", html: `<span class="omics-basic-status">${escapeHtml(item.status.text)}</span>`, cardClass: "is-status-card" },
    { label: "创建时间", value: `${item.createdAt}:00` }
  ];

  return `
    <div class="omics-basic-grid">
      ${infoItems
        .map(
          (info) => `
            <article class="omics-basic-item ${info.cardClass || ""}">
              <span class="omics-basic-label">${escapeHtml(info.label)}</span>
              <strong class="omics-basic-value ${info.valueClass || ""}">${info.html || escapeHtml(info.value || "-")}</strong>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOmicsPathwayFlow(item) {
  const targetProduct = item.targetProduct || "乙酸";
  const flows = [
    { path: "M104 104 C168 104 186 104 240 104", width: 128, gradient: "omicsFlowBlue" },
    { path: "M262 104 C316 104 334 104 394 104", width: 124, gradient: "omicsFlowBlue" },
    { path: "M416 124 C470 124 500 128 550 128", width: 118, gradient: "omicsFlowGreen" },
    { path: "M572 116 C622 116 652 112 706 112", width: 110, gradient: "omicsFlowOrange" },
    { path: "M728 112 C776 112 802 146 860 146", width: 100, gradient: "omicsFlowRed" },
    { path: "M882 138 C924 138 946 138 982 138", width: 82, gradient: "omicsFlowRedBlue" },
    { path: "M880 178 C926 178 946 228 982 228", width: 78, gradient: "omicsFlowRedPurple" },
    { path: "M572 176 C618 176 642 178 706 178", width: 62, gradient: "omicsFlowTeal" },
    { path: "M572 214 C618 214 646 236 706 236", width: 52, gradient: "omicsFlowPink" }
  ];

  const nodes = [
    { label: "葡萄糖", className: "is-substrate", x: 80, y: 34, height: 220 },
    { label: "G6P", className: "is-substrate", x: 236, y: 34, height: 220 },
    { label: "F6P", className: "is-substrate", x: 392, y: 72, height: 160 },
    { label: "PYR", className: "is-middle", x: 548, y: 68, height: 186 },
    { label: "乙酰辅酶A", className: "is-key", x: 704, y: 64, height: 120 },
    { label: "乙醇", className: "is-branch", x: 704, y: 170, height: 64 },
    { label: targetProduct, className: "is-byproduct", x: 704, y: 244, height: 50 },
    { label: "TCA循环", className: "is-target", x: 860, y: 116, height: 152 },
    { label: "ATP", className: "is-atp is-edge-label", x: 1016, y: 156, height: 82 },
    { label: "NADH", className: "is-energy is-edge-label", x: 1016, y: 238, height: 82 }
  ];

  return `
    <div class="omics-flow-shell">
      <div class="omics-legend">
        <span><i class="is-substrate"></i>底物</span>
        <span><i class="is-middle"></i>中间产物</span>
        <span><i class="is-key"></i>关键节点</span>
        <span><i class="is-target"></i>目标产物</span>
      </div>
      <div class="omics-flow-stage omics-flow-stage-sankey">
        <svg viewBox="0 0 1080 310" preserveAspectRatio="none" class="omics-flow-svg" aria-hidden="true">
          <defs>
            <linearGradient id="omicsFlowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(77, 104, 232, 0.28)" />
              <stop offset="100%" stop-color="rgba(77, 104, 232, 0.22)" />
            </linearGradient>
            <linearGradient id="omicsFlowGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(77, 104, 232, 0.22)" />
              <stop offset="100%" stop-color="rgba(79, 207, 33, 0.24)" />
            </linearGradient>
            <linearGradient id="omicsFlowOrange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(79, 207, 33, 0.22)" />
              <stop offset="100%" stop-color="rgba(255, 171, 46, 0.26)" />
            </linearGradient>
            <linearGradient id="omicsFlowRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(255, 171, 46, 0.22)" />
              <stop offset="100%" stop-color="rgba(255, 87, 102, 0.24)" />
            </linearGradient>
            <linearGradient id="omicsFlowRedBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(255, 87, 102, 0.2)" />
              <stop offset="100%" stop-color="rgba(43, 132, 241, 0.24)" />
            </linearGradient>
            <linearGradient id="omicsFlowRedPurple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(255, 87, 102, 0.22)" />
              <stop offset="100%" stop-color="rgba(116, 58, 214, 0.24)" />
            </linearGradient>
            <linearGradient id="omicsFlowTeal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(79, 207, 33, 0.18)" />
              <stop offset="100%" stop-color="rgba(33, 188, 201, 0.24)" />
            </linearGradient>
            <linearGradient id="omicsFlowPink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(79, 207, 33, 0.14)" />
              <stop offset="100%" stop-color="rgba(226, 40, 162, 0.22)" />
            </linearGradient>
          </defs>
          ${flows
            .map(
              (flow) => `
                <path class="omics-flow-link" d="${flow.path}" stroke="url(#${flow.gradient})" stroke-width="${flow.width}" />
              `
            )
            .join("")}
        </svg>
        <div class="omics-sankey-nodes">
          ${nodes
            .map(
              (node) => `
                <div class="omics-sankey-node ${node.className}" style="left:${node.x}px;top:${node.y}px;height:${node.height}px;">
                  <span>${escapeHtml(node.label)}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderOmicsOptimizationTable(item) {
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table omics-target-table">
        <thead>
          <tr>
            <th>靶点基因</th>
            <th>反应</th>
            <th>建议操作</th>
            <th>预期提升</th>
          </tr>
        </thead>
        <tbody>
          ${item.optimizationTargets
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.gene)}</td>
                  <td>${escapeHtml(row.reaction)}</td>
                  <td><span class="omics-action-tag ${row.actionClass}">${escapeHtml(row.action)}</span></td>
                  <td class="omics-gain">${escapeHtml(row.gain)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function getOmicsNodePosition(style, width, height) {
  const leftMatch = /left:(\d+(?:\.\d+)?)%/.exec(style || "");
  const topMatch = /top:(\d+(?:\.\d+)?)%/.exec(style || "");
  return {
    x: Math.round((Number(leftMatch?.[1] || 0) / 100) * width),
    y: Math.round((Number(topMatch?.[1] || 0) / 100) * height)
  };
}

function renderOmicsNetworkCard(nodes) {
  const width = 420;
  const height = 250;
  const normalizedNodes = nodes.map((node) => {
    const position = getOmicsNodePosition(node.style, width, height);
    return {
      ...node,
      cx: position.x,
      cy: position.y
    };
  });
  const links = [
    [0, 5],
    [5, 2],
    [1, 5],
    [1, 4],
    [5, 4],
    [4, 6],
    [2, 3]
  ];

  return `
    <div class="omics-mini-graph is-network omics-network-chart">
      <svg viewBox="0 0 420 250" preserveAspectRatio="none" class="omics-network-svg" aria-hidden="true">
        ${links
          .map(([startIndex, endIndex]) => {
            const start = normalizedNodes[startIndex];
            const end = normalizedNodes[endIndex];
            if (!start || !end) {
              return "";
            }
            return `<line x1="${start.cx}" y1="${start.cy}" x2="${end.cx}" y2="${end.cy}" class="omics-network-link" />`;
          })
          .join("")}
      </svg>
      ${normalizedNodes
        .map(
          (node) => `
            <span class="omics-mini-node ${node.className}" style="left:${node.cx}px;top:${node.cy}px;">${escapeHtml(node.label)}</span>
          `
        )
        .join("")}
      <div class="omics-mini-legend">
        <span><i class="is-gene"></i>基因</span>
        <span><i class="is-metabolite"></i>代谢物</span>
        <span><i class="is-reaction"></i>反应</span>
      </div>
    </div>
  `;
}

function renderOmicsPanoramaCard(bars) {
  const labels = [
    { text: bars[0]?.label || "糖酵解", className: "is-substrate", x: 72, y: 122, height: 120 },
    { text: bars[4]?.label || "磷酸戊糖途径", className: "is-key", x: 72, y: 224, height: 82 },
    { text: bars[1]?.label || "TCA循环", className: "is-middle", x: 222, y: 80, height: 150 },
    { text: "氨基酸合成", className: "is-target", x: 386, y: 86, height: 98 },
    { text: "能量代谢", className: "is-energy", x: 386, y: 174, height: 76 },
    { text: "脂肪酸合成", className: "is-atp", x: 386, y: 262, height: 88 }
  ];

  return `
    <div class="omics-panorama">
      <svg viewBox="0 0 470 320" preserveAspectRatio="none" class="omics-panorama-svg" aria-hidden="true">
        <defs>
          <linearGradient id="omicsPanoramaGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(77, 104, 232, 0.18)" />
            <stop offset="100%" stop-color="rgba(79, 207, 33, 0.24)" />
          </linearGradient>
          <linearGradient id="omicsPanoramaWarm" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(79, 207, 33, 0.2)" />
            <stop offset="100%" stop-color="rgba(255, 87, 102, 0.22)" />
          </linearGradient>
          <linearGradient id="omicsPanoramaPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(79, 207, 33, 0.16)" />
            <stop offset="100%" stop-color="rgba(116, 58, 214, 0.24)" />
          </linearGradient>
          <linearGradient id="omicsPanoramaBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(255, 171, 46, 0.16)" />
            <stop offset="100%" stop-color="rgba(43, 132, 241, 0.24)" />
          </linearGradient>
        </defs>
        <path d="M86 122 C150 122 170 110 234 110" class="omics-panorama-link" stroke="url(#omicsPanoramaGreen)" stroke-width="120" />
        <path d="M86 224 C152 224 170 238 234 238" class="omics-panorama-link" stroke="url(#omicsPanoramaBlue)" stroke-width="82" />
        <path d="M256 96 C312 96 334 90 398 90" class="omics-panorama-link" stroke="url(#omicsPanoramaWarm)" stroke-width="94" />
        <path d="M256 156 C312 156 334 186 398 186" class="omics-panorama-link" stroke="url(#omicsPanoramaPurple)" stroke-width="68" />
        <path d="M256 222 C312 222 334 272 398 272" class="omics-panorama-link" stroke="url(#omicsPanoramaBlue)" stroke-width="64" />
      </svg>
      <div class="omics-panorama-nodes">
        ${labels
          .map(
            (bar) => `
              <div class="omics-panorama-bar ${bar.className}" style="left:${bar.x}px;top:${bar.y}px;height:${bar.height}px;">
                <span>${escapeHtml(bar.text)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderOmicsBalanceChart(rows) {
  const maxValue = 100;
  const heights = rows.map((row) => [row.a, row.b, row.c].map((value) => (value / maxValue) * 190));

  return `
    <div class="omics-balance-chart">
      <div class="omics-balance-canvas">
        <svg viewBox="0 0 560 250" preserveAspectRatio="none" class="omics-balance-svg" aria-hidden="true">
          <line x1="52" y1="20" x2="52" y2="214" class="omics-balance-axis" />
          <line x1="52" y1="214" x2="540" y2="214" class="omics-balance-axis" />
          ${[0, 25, 50, 75, 100]
            .map((tick) => {
              const y = 214 - tick * 1.9;
              return `
                <line x1="52" y1="${y}" x2="540" y2="${y}" class="omics-balance-grid-line" />
                <text x="44" y="${y + 4}" text-anchor="end" class="omics-balance-tick">${tick}</text>
              `;
            })
            .join("")}
          ${rows
            .map((row, groupIndex) => {
              const x = 88 + groupIndex * 92;
              const [aHeight, bHeight, cHeight] = heights[groupIndex];
              return `
                <rect x="${x}" y="${214 - aHeight}" width="22" height="${aHeight}" rx="4" class="omics-balance-bar is-a" />
                <rect x="${x + 28}" y="${214 - bHeight}" width="22" height="${bHeight}" rx="4" class="omics-balance-bar is-b" />
                <rect x="${x + 56}" y="${214 - cHeight}" width="22" height="${cHeight}" rx="4" class="omics-balance-bar is-c" />
                <text x="${x + 39}" y="236" text-anchor="middle" class="omics-balance-label">${escapeHtml(row.label)}</text>
              `;
            })
            .join("")}
        </svg>
      </div>
      <div class="omics-balance-legend">
        <span><i class="is-a"></i>基因表达</span>
        <span><i class="is-b"></i>反应通量</span>
        <span><i class="is-c"></i>代谢物浓度</span>
      </div>
    </div>
  `;
}

function renderOmicsEnergyCard(item) {
  const chartWidth = 260;
  const chartHeight = 180;
  const energyNodes = item.gpaCards.energyNodes.map((node) => {
    const position = getOmicsNodePosition(node.style, 230, 220);
    return {
      ...node,
      cx: position.x,
      cy: position.y
    };
  });
  const points = item.gpaCards.forecastLine.map((value, index) => {
    const x = 24 + (chartWidth / (item.gpaCards.forecastLine.length - 1)) * index;
    const y = 18 + (chartHeight - (value / 12) * chartHeight);
    return [x, y];
  });
  const linePoints = points.map(([x, y]) => `${x},${y}`).join(" ");
  const areaPoints = `24,198 ${linePoints} ${24 + chartWidth},198`;
  const [lastX, lastY] = points[points.length - 1];
  const finalValue = item.gpaCards.forecastLine[item.gpaCards.forecastLine.length - 1];

  return `
    <div class="omics-energy-layout">
      <div class="omics-mini-graph is-energy omics-energy-network">
        <svg viewBox="0 0 230 220" preserveAspectRatio="none" class="omics-network-svg" aria-hidden="true">
          <line x1="112" y1="54" x2="70" y2="112" class="omics-network-link" />
          <line x1="112" y1="54" x2="154" y2="112" class="omics-network-link" />
          <line x1="70" y1="112" x2="112" y2="168" class="omics-network-link" />
          <line x1="154" y1="112" x2="112" y2="168" class="omics-network-link" />
          <line x1="70" y1="112" x2="42" y2="150" class="omics-network-link" />
          <line x1="154" y1="112" x2="182" y2="150" class="omics-network-link" />
        </svg>
        ${energyNodes
          .map(
            (node) => `
              <span class="omics-mini-node ${node.className}" style="left:${node.cx}px;top:${node.cy}px;">${escapeHtml(node.label)}</span>
            `
          )
          .join("")}
      </div>
      <div class="omics-line-chart">
        <svg viewBox="0 0 320 220" preserveAspectRatio="none" class="omics-line-svg" aria-hidden="true">
          ${[0, 25, 50, 75, 100]
            .map((tick) => {
              const y = 198 - tick * 1.6;
              return `
                <line x1="24" y1="${y}" x2="296" y2="${y}" class="omics-line-grid" />
                <text x="14" y="${y + 4}" text-anchor="end" class="omics-line-tick">${Math.round((tick / 100) * 12)}</text>
              `;
            })
            .join("")}
          <line x1="24" y1="198" x2="296" y2="198" class="omics-line-axis" />
          <line x1="24" y1="18" x2="24" y2="198" class="omics-line-axis" />
          <polygon points="${areaPoints}" class="omics-line-area" />
          <polyline fill="none" stroke="#4a74f3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${linePoints}" />
          ${points
            .map(
              ([x, y]) => `
                <circle cx="${x}" cy="${y}" r="4.5" class="omics-line-dot" />
              `
            )
            .join("")}
          <line x1="${lastX}" y1="${lastY}" x2="${lastX}" y2="198" class="omics-line-guide" />
          <rect x="${lastX - 26}" y="${lastY - 34}" width="54" height="22" rx="11" class="omics-line-badge" />
          <text x="${lastX + 1}" y="${lastY - 19}" text-anchor="middle" class="omics-line-badge-text">${finalValue}</text>
          ${[0, 60, 120, 180, 240, 300]
            .map((tick, index) => {
              const x = 24 + (chartWidth / 5) * index;
              return `<text x="${x}" y="214" text-anchor="middle" class="omics-line-label">${tick}</text>`;
            })
            .join("")}
          <text x="296" y="214" text-anchor="end" class="omics-line-axis-note">优化轮次</text>
        </svg>
      </div>
    </div>
  `;
}

function renderOmicsDetailModal(itemId) {
  const source = getAnalysisRow("omics", itemId) || {};
  const item = hydrateOmicsItem({ id: source.id || itemId, ...source });

  return renderGeneModalShell({
    title: `代谢模型详情 - ${item.name}`,
    sizeClass: "is-gene-large omics-detail-modal",
    body: `
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>基本信息</h4><p class="section-caption">展示模型名称、菌株类型、关键规模指标与验证状态</p></div>
        </div>
        ${renderOmicsBasicInfoGrid(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>代谢通路流量</h4><p class="section-caption">以中心代谢路径流向展示底物、中间产物、关键节点与目标产物</p></div>
        </div>
        ${renderOmicsPathwayFlow(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>关键优化靶点</h4><p class="section-caption">列出关键基因对应反应、建议操作与预期提升</p></div>
        </div>
        ${renderOmicsOptimizationTable(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>GPA数据整合分析</h4><p class="section-caption">按网络、通路、平衡与能量四个维度展示整合分析结果</p></div>
        </div>
        <div class="omics-gpa-grid">
          <article class="omics-gpa-card">
            <h5>基因组代谢网络模型展示</h5>
            <p>整合基因注释与代谢网络，可视化基因-反应-代谢物关联</p>
            ${renderOmicsNetworkCard(item.gpaCards.networkNodes)}
          </article>
          <article class="omics-gpa-card">
            <h5>细胞内代谢路径全景及关联图</h5>
            <p>展示主要代谢通路之间的流量流向与相互关系</p>
            ${renderOmicsPanoramaCard(item.gpaCards.panoramaBars)}
          </article>
          <article class="omics-gpa-card">
            <h5>代谢平衡问题分析</h5>
            <p>分析基因-反应-代谢物关联平衡状态，识别代谢瓶颈</p>
            ${renderOmicsBalanceChart(item.gpaCards.balanceBars)}
          </article>
          <article class="omics-gpa-card">
            <h5>细胞能量代谢路径和产量预测图</h5>
            <p>分析 ATP、NADH 等能量分子供需，预测最优产量</p>
            ${renderOmicsEnergyCard(item)}
          </article>
        </div>
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|omics|${item.id}">编辑模型</button>
    `
  });
}

function renderOmicsDeleteModal(itemId) {
  const item = hydrateOmicsItem(getAnalysisRow("omics", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete omics-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定要删除此代谢模型吗？</h4>
        <p>模型名称: ${escapeHtml(item.name)}</p>
        <span>删除后将无法恢复，关联的分析结果和优化方案也将被删除。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|omics|${item.id}">确认删除</button>
    `
  });
}

function renderProcessFormModal(mode, itemId = "") {
  const current = itemId ? hydrateProcessItem(getAnalysisRow("process", itemId) || {}) : null;
  const isEdit = mode === "edit";
  const title = mode === "edit" ? "编辑发酵优化模型" : "新建发酵过程分析项目";
  const footerLabel = mode === "edit" ? "保存修改" : "确认创建";
  const fields = [
    { name: "analysis-name", label: "模型名称", value: current?.name || "", placeholder: "请输入模型名称", rule: "必填，2-50字符，建议唯一" },
    {
      name: "analysis-model",
      label: "模型类型",
      type: "select",
      value: isEdit ? current?.model || "" : "",
      options: ["代谢网络模型", "神经网络模型"],
      rule: "必填，只能选择当前枚举模型"
    },
    {
      name: "analysis-strain",
      label: "菌株类型",
      type: "select",
      value: isEdit ? current?.strain || "" : "",
      options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"],
      rule: "必填，只能选择当前菌株类型"
    },
    {
      name: "analysis-goal",
      label: "优化目标",
      type: "select",
      value: isEdit ? current?.goal || "" : "",
      options: ["产量最大化", "生成速率最大化", "底物利用最大化"],
      rule: "必填，只能选择当前枚举目标"
    },
    {
      name: "analysis-description",
      label: "模型描述",
      type: "textarea",
      full: true,
      value: current?.description || "",
      placeholder: "请输入模型描述信息",
      rule: "可选，最多500字符"
    }
  ];

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form",
    body: `
      <div class="omics-form-grid">
        ${fields
          .map((field) => {
            const required = field.name !== "analysis-description" ? '<span class="omics-required">*</span>' : "";
            return `
              <div class="gene-field ${field.full ? "is-full" : ""}">
                <label>${required}${escapeHtml(field.label)}</label>
                ${renderAnalysisControl(field)}
              </div>
            `;
          })
          .join("")}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|process|${itemId}">${footerLabel}</button>
    `
  });
}

function renderProcessFlow(item) {
  return `
    <div class="process-flow-shell">
      ${item.processNodes
        .map(
          (node) => `
            <div class="process-flow-node ${node.className}">
              <span>${escapeHtml(node.label)}</span>
            </div>
          `
        )
        .join("")}
      <div class="process-flow-tail is-blue"></div>
      <div class="process-flow-tail is-red"></div>
      <div class="process-flow-tail is-green"></div>
    </div>
  `;
}

function renderProcessParamTable(item) {
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>参数名称</th>
            <th>当前值</th>
            <th>建议值</th>
            <th>影响程度</th>
          </tr>
        </thead>
        <tbody>
          ${item.optimizationParams
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.name)}</td>
                  <td>${escapeHtml(row.current)}</td>
                  <td>${escapeHtml(row.suggested)}</td>
                  <td><span class="process-impact-tag ${row.impactClass}">${escapeHtml(row.impact)}</span></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProcessResultPanel(item) {
  const rows = [
    { label: "当前产量", value: item.currentYield, tone: "" },
    { label: "优化后预测产量", value: item.optimizedYield, tone: "is-good" },
    { label: "预计提升幅度", value: item.improvement, tone: "is-good" },
    { label: "置信区间", value: item.confidenceRange, tone: "" }
  ];

  return `
    <div class="process-result-panel">
      ${rows
        .map(
          (row) => `
            <div class="process-result-row">
              <span>${escapeHtml(row.label)}</span>
              <strong class="${row.tone}">${escapeHtml(row.value)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProcessDetailModal(itemId) {
  const source = getAnalysisRow("process", itemId) || {};
  const item = hydrateProcessItem({ id: source.id || itemId, ...source });

  const infoItems = [
    { label: "模型名称", html: `<span class="process-name-link">${escapeHtml(item.name)}</span>` },
    { label: "模型类型", value: item.model },
    { label: "菌株类型", value: item.strain },
    { label: "优化目标", value: item.goal },
    { label: "预测提升", html: `<span class="process-good-text">${escapeHtml(item.improvement)}</span>` },
    { label: "参数数量", value: item.paramCount },
    { label: "创建时间", value: item.createdAt },
    { label: "状态", html: `<span class="status-chip is-normal">已完成</span>` }
  ];

  return renderGeneModalShell({
    title: `代谢网络模型详情 - ${item.name}`,
    sizeClass: "is-gene-large process-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "发酵过程分析",
        title: item.name,
        description: "聚合代谢网络优化、关键参数建议与预测结果输出。",
        meta: [
          { value: item.strain },
          { value: item.model },
          { value: item.goal },
          { html: `<span class="status-chip is-normal">已完成</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>基本信息</h4><p class="section-caption">模型基础属性、参数规模与完成状态</p></div>
        </div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>代谢网络优化</h4><p class="section-caption">展示发酵过程关键节点的优化路径</p></div>
        </div>
        ${renderProcessFlow(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>关键优化参数</h4><p class="section-caption">对比当前值、建议值与影响程度</p></div>
        </div>
        ${renderProcessParamTable(item)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>预测结果</h4><p class="section-caption">输出当前、优化后与置信区间结果</p></div>
        </div>
        ${renderProcessResultPanel(item)}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|process|${item.id}">编辑</button>
    `
  });
}

function renderProcessDeleteModal(itemId) {
  const item = hydrateProcessItem(getAnalysisRow("process", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete process-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定要删除此发酵优化模型吗？</h4>
        <p>模型名称: ${escapeHtml(item.name)}</p>
        <span>删除后将无法恢复，关联的优化参数和预测结果也将被删除。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|process|${item.id}">确认删除</button>
    `
  });
}

function renderFullFormModal(mode, itemId = "") {
  const current = itemId ? hydrateFullItem(getAnalysisRow("full", itemId) || {}) : null;
  const isEdit = mode === "edit";
  const title = mode === "edit" ? "编辑分析项目" : "新建分析项目";
  const footerLabel = mode === "edit" ? "保存修改" : "确认创建";

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form full-form-modal",
    body: `
      <div class="omics-form-grid">
        <div class="gene-field">
          <label><span class="omics-required">*</span>项目名称</label>
          ${renderAnalysisControl({ name: "analysis-name", value: current?.name || "", placeholder: "请输入项目名称", rule: "必填，2-50字符，建议唯一" })}
        </div>
        <div class="gene-field">
          <label><span class="omics-required">*</span>菌株类型</label>
          ${renderAnalysisControl({
            name: "analysis-strain",
            type: "select",
            value: isEdit ? current?.strain || "" : "",
            options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"],
            rule: "必填，只能选择当前菌株类型"
          })}
        </div>
        <div class="gene-field is-full">
          <label>项目分析描述</label>
          ${renderAnalysisControl({
            name: "analysis-description",
            type: "textarea",
            value: current?.description || "",
            placeholder: "请输入项目分析描述",
            rule: "可选，最多500字符"
          })}
        </div>
        <div class="gene-field is-full">
          <label>选择分析模块</label>
          ${renderFullModuleOptions(isEdit ? current?.modules || [] : [])}
          ${renderRequirementHint("必选，至少选择1个分析模块，可多选")}
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|full|${itemId}">${footerLabel}</button>
    `
  });
}

function renderFullInfoPanel(item) {
  const infoItems = [
    { label: "项目名称", html: `<span class="process-name-link">${escapeHtml(item.name)}</span>` },
    { label: "菌株类型", value: item.strain },
    { label: "目标产物", value: item.targetProduct },
    { label: "分析状态", html: `<span class="status-chip is-normal">已完成</span>` },
    { label: "创建时间", value: item.createdAt.split(" ")[0] },
    { label: "专利风险", html: `<span class="full-risk-chip">${escapeHtml(item.patentRisk)}</span>` }
  ];

  return `<section class="full-info-panel">${renderGeneInfoGrid(infoItems)}</section>`;
}

function renderFullAccordion(title, iconClass, content, expanded = true) {
  return `
    <section class="full-accordion ${expanded ? "is-open" : ""}">
      <div class="full-accordion-head">
        <div class="full-accordion-title">
          <span class="full-accordion-icon ${iconClass}"></span>
          <h4>${escapeHtml(title)}</h4>
        </div>
        <span class="full-accordion-arrow">${icon("i-chevron")}</span>
      </div>
      ${expanded ? `<div class="full-accordion-body">${content}</div>` : ""}
    </section>
  `;
}

function renderFullSummaryTable(type, item) {
  if (type === "gpa") {
    const row = item.gpaSummary;
    return `
      <div class="table-scroll gene-inner-table">
        <table class="data-table gene-snp-table">
          <thead>
            <tr>
              <th>项目名称</th>
              <th>菌株类型</th>
              <th>显著位点</th>
              <th>推荐基因型组合</th>
              <th>预测产量提升</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${escapeHtml(row.projectName)}</td>
              <td>${escapeHtml(row.strain)}</td>
              <td>${escapeHtml(row.significantSites)}</td>
              <td>${escapeHtml(row.recommendedGenes)}</td>
              <td class="omics-gain">${escapeHtml(row.improvement)}</td>
              <td><button class="table-link" type="button" data-analysis-open="gpa-detail|full|${item.id}">查看详情</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  const row = item.processSummary;
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>模型名称</th>
            <th>模型类型</th>
            <th>菌株类型</th>
            <th>优化目标</th>
            <th>预测提升</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${escapeHtml(row.modelName)}</td>
            <td>${escapeHtml(row.modelType)}</td>
            <td>${escapeHtml(row.strain)}</td>
            <td>${escapeHtml(row.goal)}</td>
            <td class="omics-gain">${escapeHtml(row.improvement)}</td>
            <td><button class="table-link" type="button" data-analysis-open="predict-detail|full|${item.id}">查看详情</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderFullPredictionPanel(item) {
  const prediction = item.predictDetail?.comprehensivePrediction || {};
  const cards = [
    { label: "综合预测产量", value: prediction.yield || item.processSummary.improvement },
    { label: "预测置信度", value: prediction.confidence || "90%" },
    { label: "预计发酵周期", value: prediction.cycle || "42 h" },
    { label: "预计成本变化", value: prediction.cost || "下降12%" }
  ];
  return `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>综合参数预测模型</h4><p class="section-caption">融合GPA推荐组合与发酵模型参数，输出全流程预测结果。</p></div>
      </div>
      <div class="gene-metric-grid">
        ${cards
          .map(
            (card) => `
              <article class="gene-metric-card">
                <span>${escapeHtml(card.label)}</span>
                <strong>${escapeHtml(card.value)}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="gene-predict-card" style="margin-top:16px;">
        <div>
          <span>综合建议</span>
          <strong>${escapeHtml(prediction.recommendation || "结合关键基因型组合与关键发酵参数，优先执行综合优化方案。")}</strong>
        </div>
      </div>
    </section>
  `;
}

function getSafeFullItem(itemId) {
  const source = getAnalysisRow("full", itemId) || {};
  return hydrateFullItem({ ...source, id: source.id || itemId || "full-1" });
}

function renderFullDetailModal(itemId) {
  const item = getSafeFullItem(itemId);

  const collapsedSection = renderFullAccordion("综合参数预测模型", "is-bulb", renderFullPredictionPanel(item), true);
  const gpaSection = renderFullAccordion("GPA分析结果整合", "is-bars", renderFullSummaryTable("gpa", item), true);
  const processSection = renderFullAccordion("发酵过程分析结果整合", "is-chart", renderFullSummaryTable("process", item), true);

  return renderGeneModalShell({
    title: `项目详情 - ${item.name}`,
    sizeClass: "is-gene-large full-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "全流程数据分析",
        title: item.name,
        description: "整合 GPA 与发酵过程分析结果，统一展示项目级结论。",
        meta: [
          { value: item.strain },
          { value: item.targetProduct },
          { value: item.patentRisk },
          { html: `<span class="status-chip is-normal">已完成</span>` }
        ]
      })}
      ${renderFullInfoPanel(item)}
      ${collapsedSection}
      ${gpaSection}
      ${processSection}
    `,
    footer: `
      <button class="modal-outline" type="button" data-modal-back="analysis">返回上一级</button>
      <button class="modal-primary" type="button" data-close-modal="analysis">关闭</button>
    `
  });
}

function renderFullDeleteModal(itemId) {
  const item = getSafeFullItem(itemId);

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete full-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="full-delete-icon">!</div>
        <h4>确定要删除此分析项目吗？</h4>
        <p>项目名称：${escapeHtml(item.name)}</p>
        <span>删除后将无法恢复，关联的分析结果也将被删除。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|full|${item.id}">确认删除</button>
    `
  });
}

function renderFullGpaDetailModal(itemId) {
  const item = getSafeFullItem(itemId);
  const detail = item.gpaDetail;

  const infoItems = [
    { label: "项目名称", value: detail ? item.gpaSummary.projectName : item.name },
    { label: "菌株类型", value: item.gpaSummary.strain },
    { label: "目标产物", value: item.targetProduct },
    { label: "显著位点", value: item.gpaSummary.significantSites },
    { label: "推荐基因型组合", value: item.gpaSummary.recommendedGenes, full: true },
    { label: "预测产量提升", html: `<span class="process-good-text">${escapeHtml(item.gpaSummary.improvement)}</span>` }
  ];

  return renderGeneModalShell({
    title: "GPA分析详情 - 知识网络图谱",
    sizeClass: "is-gene-large full-linked-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "全流程数据分析 / GPA",
        title: item.name,
        description: "围绕知识网络、外源回路设计与专利风险评估展开详细分析。",
        meta: [
          { value: item.gpaSummary.strain },
          { value: item.targetProduct },
          { value: item.gpaSummary.significantSites },
          { html: `<span class="status-chip is-normal">已完成</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-square-icon"></span><h4>项目基本信息</h4></div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-star-icon">*</span><h4>标准化知识网络图谱</h4></div>
        <p class="full-section-desc">针对特定菌株、特定产物的标准化知识网络图谱，展示基因-代谢-表型关联网络</p>
        <div class="full-network-chart">
          ${detail.networkNodes
            .map(
              (node) => `
                <span class="full-network-node ${node.className}" style="${node.style}">${escapeHtml(node.label)}</span>
              `
            )
            .join("")}
          <div class="full-network-legend">
            <span><i class="is-gene"></i>基因</span>
            <span><i class="is-metabolite"></i>代谢物</span>
            <span><i class="is-path"></i>代谢通路</span>
            <span><i class="is-phenotype"></i>表型</span>
          </div>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-link-icon"></span><h4>辅助外源性回路设计</h4></div>
        <p class="full-section-desc">基于分析结果推荐的外源性基因回路设计方案</p>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead>
              <tr>
                <th>回路名称</th>
                <th>目标基因</th>
                <th>调控方式</th>
                <th>预期效果</th>
                <th>置信度</th>
              </tr>
            </thead>
            <tbody>
              ${detail.pathwayTable
                .map(
                  (row) => `
                    <tr>
                      <td>${escapeHtml(row.pathway)}</td>
                      <td>${escapeHtml(row.genes)}</td>
                      <td>${escapeHtml(row.mode)}</td>
                      <td>${escapeHtml(row.effect)}</td>
                      <td><span class="process-impact-tag ${row.confidence === "高" ? "is-low" : "is-mid"}">${escapeHtml(row.confidence)}</span></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-circle-icon"></span><h4>专利数据与竞争者警示</h4></div>
        <p class="full-section-desc">相关专利数据分析及潜在竞争者预警</p>
        <div class="full-risk-grid">
          <article class="full-risk-card is-warn">
            <span>专利风险等级</span>
            <strong>中等风险</strong>
            <em>共12项专利风险</em>
          </article>
          <article class="full-risk-card is-safe">
            <span>可自由实施区域</span>
            <strong>3个</strong>
            <em>建议优先开发</em>
          </article>
        </div>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead>
              <tr>
                <th>专利号</th>
                <th>专利名称</th>
                <th>持有人</th>
                <th>风险等级</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${detail.patents
                .map(
                  (row) => `
                    <tr>
                      <td>${escapeHtml(row.no)}</td>
                      <td>${escapeHtml(row.title)}</td>
                      <td>${escapeHtml(row.owner)}</td>
                      <td><span class="full-patent-risk ${row.riskClass}">${escapeHtml(row.risk)}</span></td>
                      <td>${escapeHtml(row.status)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-modal-back="analysis">返回上一级</button>
      <button class="modal-primary" type="button" data-close-modal="analysis">关闭</button>
    `
  });
}

function renderFullPredictDetailModal(itemId) {
  const item = getSafeFullItem(itemId);
  const detail = item.predictDetail;

  const infoItems = [
    { label: "模型名称", value: item.processSummary.modelName },
    { label: "模型类型", value: item.processSummary.modelType },
    { label: "菌株类型", value: item.processSummary.strain },
    { label: "优化目标", value: item.processSummary.goal },
    { label: "预测提升", html: `<span class="process-good-text">${escapeHtml(item.processSummary.improvement)}</span>` },
    { label: "模型状态", html: `<span class="status-chip is-normal">已验证</span>` }
  ];

  return renderGeneModalShell({
    title: "发酵过程分析详情 - 参数预测模型",
    sizeClass: "is-gene-large full-linked-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "全流程数据分析 / 参数预测",
        title: item.processSummary.modelName,
        description: "聚焦参数预测、关键优化建议与原料消耗优化结果。",
        meta: [
          { value: item.processSummary.modelType },
          { value: item.processSummary.strain },
          { value: item.processSummary.goal },
          { html: `<span class="status-chip is-normal">已验证</span>` }
        ]
      })}
      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-square-icon"></span><h4>模型基本信息</h4></div>
        ${renderGeneInfoGrid(infoItems)}
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-bars-icon"></span><h4>发酵过程参数预测模型</h4></div>
        <p class="full-section-desc">指导微生物菌株的设计和优化，提高目标产物产量和降低原料消耗</p>
        <div class="full-line-chart">
          <div class="full-line-legend">
            <span><i class="is-blue"></i>当前产量</span>
            <span><i class="is-green"></i>优化后产量</span>
            <span><i class="is-yellow"></i>预测产量</span>
          </div>
          <svg viewBox="0 0 760 260" preserveAspectRatio="none" class="full-line-svg" aria-hidden="true">
            <polyline fill="none" stroke="#6f85f5" stroke-width="4" stroke-dasharray="2 6" points="${detail.chartPoints.current.map((v, i) => `${i * 100 + 30},${240 - v * 22}`).join(" ")}" />
            <polyline fill="none" stroke="#66bb4d" stroke-width="4" points="${detail.chartPoints.optimized.map((v, i) => `${i * 100 + 30},${240 - v * 22}`).join(" ")}" />
            <polyline fill="none" stroke="#f8bd3b" stroke-width="4" stroke-dasharray="6 6" points="${detail.chartPoints.predicted.map((v, i) => `${i * 100 + 30},${240 - v * 22}`).join(" ")}" />
          </svg>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-clock-icon"></span><h4>关键参数优化建议</h4></div>
        <p class="full-section-desc">基于模型预测的关键发酵参数优化方案</p>
        <div class="table-scroll gene-inner-table">
          <table class="data-table gene-snp-table">
            <thead>
              <tr>
                <th>参数名称</th>
                <th>当前值</th>
                <th>优化建议值</th>
                <th>预期提升</th>
                <th>影响程度</th>
              </tr>
            </thead>
            <tbody>
              ${detail.paramSuggestions
                .map(
                  (row) => `
                    <tr>
                      <td>${escapeHtml(row.name)}</td>
                      <td>${escapeHtml(row.current)}</td>
                      <td class="process-name-link">${escapeHtml(row.optimized)}</td>
                      <td class="omics-gain">${escapeHtml(row.gain)}</td>
                      <td><span class="full-impact-bar"><i style="width:${row.level}%"></i></span></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="full-subtitle-row"><span class="full-chart-icon"></span><h4>原料消耗优化预测</h4></div>
        <p class="full-section-desc">优化后原料消耗对比分析</p>
        <div class="full-material-grid">
          ${detail.materialStats
            .map(
              (row) => `
                <article class="full-material-card">
                  <span>${escapeHtml(row.label)}</span>
                  <strong>${escapeHtml(row.value)}</strong>
                  <em>${escapeHtml(row.sub)}</em>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `,
    footer: `<button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>`
  });
}

function renderServiceStatusTag(text, className = statusTextToClass(text)) {
  return `<span class="service-status-tag ${className}">${escapeHtml(text)}</span>`;
}

function renderServiceControl(field) {
  const attr = escapeHtml(field.name || "");
  const selectValue = field.value ?? "";

  if (field.type === "select") {
    return `
      <select class="gene-control" data-service-field="${attr}">
        ${selectValue === "" ? '<option value="" selected disabled>请选择</option>' : ""}
        ${(field.options || [])
          .map((option) => `<option ${option === selectValue ? "selected" : ""}>${escapeHtml(option)}</option>`)
          .join("")}
      </select>
    `;
  }

  if (field.type === "textarea") {
    return `<textarea class="gene-control gene-textarea" rows="${field.rows || 4}" data-service-field="${attr}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(field.value || "")}</textarea>`;
  }

  return `<input class="gene-control" type="text" data-service-field="${attr}" value="${escapeHtml(field.value || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />`;
}

function renderServiceField(field) {
  const rule = serviceFieldRules[field.name] || getFieldRule(field);
  return `
    <div class="gene-field ${field.full ? "is-full" : ""}">
      <label>${field.required ? '<span class="omics-required">*</span>' : ""}${escapeHtml(field.label)}</label>
      ${renderServiceControl(field)}
      ${renderRequirementHint(rule)}
    </div>
  `;
}

function renderServiceInfoGrid(items) {
  return `
    <div class="service-info-grid">
      ${items
        .map(
          (item) => `
            <div class="service-info-item ${item.full ? "is-full" : ""}">
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.html || escapeHtml(item.value || "-")}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderServiceStepper(step) {
  return `
    <div class="service-stepper">
      ${serviceWizardSteps
        .map(
          (item) => `
            <button
              class="service-step ${item.step === step ? "is-current" : ""} ${item.step < step ? "is-done" : ""}"
              type="button"
              data-service-step="${item.step}"
            >
              <span class="service-step-index">${item.step < step ? "✓" : item.step}</span>
              <span class="service-step-label">${escapeHtml(item.label)}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderServiceImportPanel(modalState = {}) {
  const fileName = modalState.serviceImportFileName || "";
  const fileSize = modalState.serviceImportSize || 0;

  return `
    <section class="gene-section-card service-import-shell">
      <div class="service-import-box">
        <input class="service-file-input" type="file" accept=".csv,.xlsx,.xls" data-service-file-input />
        <div class="gene-upload-icon">${icon("i-upload")}</div>
        <h4>将文件拖拽到此处，或点击上传文件</h4>
        <p>支持格式：.xlsx、.xls、.csv，文件大小不超过 50MB</p>
        <div class="service-import-actions">
          <button class="modal-outline" type="button" data-service-upload-trigger="select">选择文件</button>
        </div>
        ${
          fileName
            ? `
              <div class="service-selected-file">
                <strong>${escapeHtml(fileName)}</strong>
                <span>文件大小：${escapeHtml(formatFileSize(fileSize))}</span>
              </div>
            `
            : '<div class="service-selected-file is-empty"><span>尚未选择文件</span></div>'
        }
      </div>
      <div class="service-note-card">
        <h5>导入说明</h5>
        <ol class="service-note-list">
          <li>下载模板文件，按模板格式整理工程细胞数据。</li>
          <li>必填字段：细胞编号、细胞名称、菌株类型。</li>
          <li>可选字段：基因型、状态。</li>
          <li>上传后系统将自动校验并批量导入。</li>
        </ol>
        <div class="requirement-list">
          <span>格式：.xlsx / .xls / .csv</span>
          <span>大小：不超过50MB</span>
          <span>空文件、缺少必填列不允许导入</span>
        </div>
      </div>
    </section>
  `;
}

function renderServiceStepFields(step, draft) {
  const groups = {
    1: [
      { name: "code", label: "细胞编号", value: draft.code, placeholder: "请输入细胞编号", required: true },
      { name: "name", label: "细胞名称", value: draft.name, placeholder: "请输入细胞名称", required: true },
      {
        name: "strain",
        label: "菌株类型",
        type: "select",
        value: draft.strain,
        options: ["谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"],
        required: true
      },
      {
        name: "statusText",
        label: "状态",
        type: "select",
        value: draft.statusText,
        options: ["已验证", "验证中", "待验证"],
        required: true
      },
      {
        name: "gene",
        label: "基因型",
        type: "textarea",
        full: true,
        rows: 3,
        value: draft.gene,
        placeholder: "请输入基因型信息"
      },
      {
        name: "description",
        label: "细胞描述",
        type: "textarea",
        full: true,
        rows: 4,
        value: draft.description,
        placeholder: "请输入细胞描述"
      }
    ],
    2: [
      { name: "cultureCode", label: "培养编号", value: draft.cultureCode, placeholder: "请输入培养编号", required: true },
      {
        name: "cultureMode",
        label: "培养方式",
        type: "select",
        value: draft.cultureMode,
        options: ["摇瓶培养", "发酵罐培养", "微孔板培养"],
        required: true
      },
      {
        name: "temperature",
        label: "培养温度(℃)",
        value: draft.temperature,
        placeholder: "请输入培养温度",
        required: true
      },
      { name: "ph", label: "pH值", value: draft.ph, placeholder: "请输入pH值", required: true },
      { name: "rpm", label: "转速(rpm)", value: draft.rpm, placeholder: "请输入转速", required: true },
      {
        name: "cultureStatus",
        label: "培养状态",
        type: "select",
        value: draft.cultureStatus,
        options: ["已完成", "优化中", "待验证"],
        required: true
      },
      {
        name: "mediumFormula",
        label: "培养基配方",
        type: "textarea",
        full: true,
        rows: 3,
        value: draft.mediumFormula,
        placeholder: "请输入培养基配方"
      },
      {
        name: "optimizationRecord",
        label: "优化记录",
        type: "textarea",
        full: true,
        rows: 4,
        value: draft.optimizationRecord,
        placeholder: "请输入优化记录"
      }
    ],
    3: [
      { name: "testCode", label: "检测编号", value: draft.testCode, placeholder: "请输入检测编号", required: true },
      {
        name: "testItem",
        label: "检测项目",
        type: "select",
        value: draft.testItem,
        options: ["细胞活性检测", "细胞纯度检测", "表达稳定性检测", "代谢产物检测"],
        required: true
      },
      {
        name: "testMethod",
        label: "检测方法",
        type: "select",
        value: draft.testMethod,
        options: ["流式细胞术", "HPLC", "显微成像", "酶活分析"],
        required: true
      },
      {
        name: "cellActivity",
        label: "细胞活性",
        type: "select",
        value: draft.cellActivity,
        options: ["高", "中", "低"],
        required: true
      },
      {
        name: "cellPurity",
        label: "细胞纯度",
        type: "select",
        value: draft.cellPurity,
        options: ["高", "中", "低"],
        required: true
      },
      {
        name: "testResult",
        label: "检测结果",
        type: "select",
        value: draft.testResult,
        options: ["符合预期", "需优化", "待复核"],
        required: true
      },
      {
        name: "testDescription",
        label: "检测描述",
        type: "textarea",
        full: true,
        rows: 4,
        value: draft.testDescription,
        placeholder: "请输入检测描述"
      }
    ],
    4: [
      { name: "applicationCode", label: "应用编号", value: draft.applicationCode, placeholder: "请输入应用编号", required: true },
      {
        name: "scenarioType",
        label: "应用场景类型",
        type: "select",
        value: draft.scenarioType,
        options: ["生物制造", "合成生物学", "医药研发", "农业应用"],
        required: true
      },
      {
        name: "applicationField",
        label: "应用领域",
        value: draft.applicationField,
        placeholder: "请输入应用领域",
        required: true
      },
      {
        name: "applicationStatus",
        label: "应用状态",
        type: "select",
        value: draft.applicationStatus,
        options: ["已验证", "验证中", "待验证"],
        required: true
      },
      {
        name: "applicationContent",
        label: "工程化应用信息内容",
        type: "textarea",
        full: true,
        rows: 5,
        value: draft.applicationContent,
        placeholder: "请输入工程化应用信息"
      }
    ]
  };

  return `
    <section class="gene-section-card service-form-card">
      <div class="gene-section-head">
        <h4>${escapeHtml(serviceWizardSteps.find((item) => item.step === step)?.label || "工程细胞信息")}</h4>
      </div>
      <div class="service-form-grid">
        ${(groups[step] || []).map(renderServiceField).join("")}
      </div>
    </section>
  `;
}

function renderServiceFormModal(mode, itemId = "") {
  const current = itemId ? hydrateServiceItem(getAnalysisRow("service", itemId) || {}) : null;
  const modalState = state.modal || {};
  const method = modalState.serviceMethod || (mode === "edit" ? "manual" : "file");
  const step = state.modal?.serviceStep || 1;
  const draft = {
    ...createServiceEmptyDraft(),
    ...(state.modal?.serviceDraft || (mode === "edit" ? buildServiceDraft(current) : {}))
  };
  const footer =
    method === "manual"
      ? `
        <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
        <div class="service-form-actions">
          ${step > 1 ? '<button class="modal-outline" type="button" data-service-nav="prev">上一步</button>' : ""}
          ${
            step < 4
              ? '<button class="modal-primary" type="button" data-service-nav="next">下一步</button>'
              : `<button class="modal-primary" type="button" data-analysis-submit="${mode}|service|${itemId}">${mode === "edit" ? "保存修改" : "确认创建"}</button>`
          }
        </div>
      `
      : `
        <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
        <button class="modal-primary" type="button" data-service-import="submit" ${modalState.serviceImportContent ? "" : "disabled"}>开始导入</button>
      `;

  return renderGeneModalShell({
    title: mode === "edit" ? "编辑工程细胞" : "新增工程细胞",
    sizeClass: "is-gene-large service-form-modal",
    body: `
      <div class="service-mode-tabs">
        <button class="service-mode-tab ${method === "file" ? "is-active" : ""}" type="button" data-service-method="file">文件导入方式</button>
        <button class="service-mode-tab ${method === "manual" ? "is-active" : ""}" type="button" data-service-method="manual">手工录入方式</button>
      </div>
      ${
        method === "file"
          ? renderServiceImportPanel(modalState)
          : `
            ${renderServiceStepper(step)}
            ${renderServiceStepFields(step, draft)}
          `
      }
    `,
    footer
  });
}

function renderServiceDetailModal(itemId) {
  const source = getAnalysisRow("service", itemId) || {};
  const item = hydrateServiceItem({ id: source.id || itemId, ...source });

  return renderGeneModalShell({
    title: `工程细胞详情 - ${item.code} ${item.name}`,
    sizeClass: "is-gene-large service-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "工程细胞服务",
        title: item.name,
        description: "汇总细胞基本属性、培养优化、检测分析与工程化应用信息。",
        meta: [
          { value: item.basicInfo.code },
          { value: item.basicInfo.strain },
          { value: item.applicationInfo.applicationField },
          { html: renderServiceStatusTag(item.status.text, item.status.className) }
        ]
      })}
      <section class="service-overview-card">
        <div>
          <p class="service-overview-label">工程细胞服务</p>
          <h4>${escapeHtml(item.name)}</h4>
          <p class="service-overview-text">${escapeHtml(item.description)}</p>
        </div>
        ${renderServiceStatusTag(item.status.text, item.status.className)}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>细胞基本信息</h4><p class="section-caption">展示细胞编号、菌株类型、状态与描述信息</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "细胞编号", value: item.basicInfo.code },
          { label: "细胞名称", value: item.basicInfo.name },
          { label: "菌株类型", value: item.basicInfo.strain },
          { label: "基因型", value: item.basicInfo.gene, full: true },
          { label: "状态", html: renderServiceStatusTag(item.basicInfo.statusText) },
          { label: "创建时间", value: item.createdAt || "-" },
          { label: "细胞描述", value: item.basicInfo.description, full: true }
        ])}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>培养与优化信息</h4><p class="section-caption">记录培养条件、培养基配方和优化过程</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "培养编号", value: item.cultureInfo.cultureCode },
          { label: "培养方式", value: item.cultureInfo.cultureMode },
          { label: "培养温度(℃)", value: item.cultureInfo.temperature },
          { label: "pH值", value: item.cultureInfo.ph },
          { label: "转速(rpm)", value: item.cultureInfo.rpm },
          { label: "培养状态", html: renderServiceStatusTag(item.cultureInfo.cultureStatus) },
          { label: "培养基配方", value: item.cultureInfo.mediumFormula, full: true },
          { label: "优化记录", value: item.cultureInfo.optimizationRecord, full: true }
        ])}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>分析与检测信息</h4><p class="section-caption">展示检测项目、方法与结果说明</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "检测编号", value: item.analysisInfo.testCode },
          { label: "检测项目", value: item.analysisInfo.testItem },
          { label: "检测方法", value: item.analysisInfo.testMethod },
          { label: "细胞活性", value: item.analysisInfo.cellActivity },
          { label: "细胞纯度", value: item.analysisInfo.cellPurity },
          { label: "检测结果", value: item.analysisInfo.testResult },
          { label: "检测描述", value: item.analysisInfo.testDescription, full: true }
        ])}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>工程化应用信息</h4><p class="section-caption">沉淀场景类型、应用领域和应用状态</p></div>
        </div>
        ${renderServiceInfoGrid([
          { label: "应用编号", value: item.applicationInfo.applicationCode },
          { label: "应用场景类型", value: item.applicationInfo.scenarioType },
          { label: "应用领域", value: item.applicationInfo.applicationField },
          { label: "应用状态", html: renderServiceStatusTag(item.applicationInfo.applicationStatus) },
          { label: "工程化应用信息内容", value: item.applicationInfo.applicationContent, full: true }
        ])}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|service|${item.id}">编辑</button>
    `
  });
}

function renderServiceDeleteModal(itemId) {
  const item = hydrateServiceItem(getAnalysisRow("service", itemId) || {});
  if (!item.id) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete service-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="full-delete-icon">!</div>
        <h4>确定要删除此工程细胞吗？</h4>
        <p>细胞编号：${escapeHtml(item.code)}</p>
        <p>细胞名称：${escapeHtml(item.name)}</p>
        <span>删除后将同步移除其培养、检测和工程化应用信息，且操作不可恢复。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|service|${item.id}">确认删除</button>
    `
  });
}

function renderGeneInfoGrid(items) {
  return `
    <div class="gene-info-grid">
      ${items
        .map(
          (item) => `
            <div class="gene-info-item ${item.full ? "is-full" : ""}">
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.html || escapeHtml(item.value)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDetailHero({ eyebrow = "", title = "", description = "", meta = [] }) {
  return `
    <section class="detail-hero-card">
      <div class="detail-hero-main">
        ${eyebrow ? `<p class="detail-hero-eyebrow">${escapeHtml(eyebrow)}</p>` : ""}
        <h3 class="detail-hero-title">${escapeHtml(title)}</h3>
        ${description ? `<p class="detail-hero-desc">${escapeHtml(description)}</p>` : ""}
      </div>
      ${
        meta.length
          ? `
            <div class="detail-hero-meta">
              ${meta
                .map((item) => `<span class="detail-hero-tag">${item.html || escapeHtml(item.value || "")}</span>`)
                .join("")}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderGeneScatter(points) {
  return `
    <div class="gene-scatter">
      <div class="gene-chart-gridlines"></div>
      ${points
        .map(
          (point) => `
            <span
              class="gene-dot ${point.highlight ? "is-highlight" : ""}"
              style="left:${point.x}%;bottom:${point.y}%"
            ></span>
          `
        )
        .join("")}
      <div class="gene-axis-note gene-axis-left">-log10(P)</div>
      <div class="gene-axis-note gene-axis-bottom">染色体位置</div>
    </div>
  `;
}

function renderGeneHistogram(values) {
  return `
    <div class="gene-histogram">
      ${values
        .map(
          (value, index) => `
            <div class="gene-bar-wrap">
              <span class="gene-bar" style="height:${value}%"></span>
              <em>${index + 1}</em>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGeneChromosomeBars(items) {
  return `
    <div class="gene-horizontal-bars">
      ${items
        .map(
          (item) => `
            <div class="gene-horizontal-row">
              <span>${escapeHtml(item.label)}</span>
              <div class="gene-horizontal-track">
                <span style="width:${Math.min(item.value * 2.4, 100)}%"></span>
              </div>
              <strong>${escapeHtml(String(item.value))}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGeneChartCard(title, content, description = "") {
  return `
    <section class="gene-chart-card">
      <div class="gene-chart-head">
        <div>
          <h4>${escapeHtml(title)}</h4>
          ${description ? `<p class="section-caption">${escapeHtml(description)}</p>` : ""}
        </div>
      </div>
      ${content}
    </section>
  `;
}

function renderGeneSnpTable(rows, options = {}) {
  const { showAction = false, projectId = "", tableClass = "" } = options;

  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table ${tableClass}">
        <thead>
          <tr>
            <th>排名</th>
            <th>染色体</th>
            <th>位置</th>
            <th>SNP ID</th>
            <th>P值</th>
            <th>效应值</th>
            <th>关联基因</th>
            ${showAction ? "<th>操作</th>" : ""}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(String(row.rank))}</td>
                  <td>${escapeHtml(row.chromosome)}</td>
                  <td>${escapeHtml(row.position)}</td>
                  <td>${escapeHtml(row.snpId)}</td>
                  <td>${escapeHtml(row.pValue)}</td>
                  <td>${escapeHtml(row.effect)}</td>
                  <td>${escapeHtml(row.gene)}</td>
                  ${
                    showAction
                      ? `<td><button class="table-link" type="button" data-gene-open="snp-detail|${projectId}|${encodeURIComponent(row.snpId || row.rank)}">查看详情</button></td>`
                      : ""
                  }
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderGeneDatasetPreview(dataset) {
  return `
    <div class="table-scroll gene-inner-table">
      <table class="data-table gene-snp-table">
        <thead>
          <tr>
            <th>#CHROM</th>
            <th>POS</th>
            <th>ID</th>
            <th>REF</th>
            <th>ALT</th>
            <th>QUAL</th>
            <th>FILTER</th>
            <th>INFO</th>
          </tr>
        </thead>
        <tbody>
          ${dataset.preview
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.chrom)}</td>
                  <td>${escapeHtml(row.pos)}</td>
                  <td>${escapeHtml(row.id)}</td>
                  <td>${escapeHtml(row.ref)}</td>
                  <td>${escapeHtml(row.alt)}</td>
                  <td>${escapeHtml(row.qual)}</td>
                  <td>${escapeHtml(row.filter)}</td>
                  <td>${escapeHtml(row.info)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderGeneFormModal(mode, projectId = "") {
  const project = projectId ? getGeneProject(projectId) : null;
  const isEdit = mode === "edit";
  const title = isEdit ? "编辑分析项目" : "新增分析项目";
  const submitLabel = isEdit ? "保存修改" : "确认创建";
  const fields = [
    { name: "name", label: "项目名称", value: project?.name || "", placeholder: "请输入项目名称", rule: "必填，2-50字符，建议唯一" },
    {
      name: "strain",
      label: "菌株类型",
      type: "select",
      value: isEdit ? project?.strain || "" : "",
      options: ["大肠杆菌", "酵母菌", "芽孢杆菌"],
      rule: "必填，只能选择当前菌株类型"
    },
    {
      name: "phenotype",
      label: "表型类型",
      type: "select",
      value: isEdit ? project?.phenotype || "" : "",
      options: ["产量", "生长速率", "底物利用率"],
      rule: "必填，只能选择产量、生长速率、底物利用率"
    },
    {
      name: "method",
      label: "分析方法",
      type: "select",
      value: isEdit ? project?.method || "" : "",
      options: ["GWAS分析", "关联分析", "候选位点分析"],
      rule: "必填，只能选择当前分析方法"
    },
    { name: "threshold", label: "显著性阈值", value: isEdit ? project?.threshold || "" : "", placeholder: "请输入显著性阈值", rule: "必填，0-1之间的小数，最多6位小数" },
    {
      name: "description",
      label: "项目描述",
      type: "textarea",
      full: true,
      value: project?.description || "",
      placeholder: "请输入项目描述",
      rule: "可选，最多500字符"
    }
  ];

  return renderGeneModalShell({
    title,
    sizeClass: "is-gene-form",
    body: `<div class="gene-form-grid">${fields.map(renderGeneField).join("")}</div>`,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gene">取消</button>
      <button class="modal-primary" type="button" data-gene-submit="${isEdit ? `save|${project.id}` : "create"}">${submitLabel}</button>
    `
  });
}

function renderGeneUploadModal(projectId) {
  const project = getGeneProject(projectId);

  return renderGeneModalShell({
    title: "上传数据集",
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${renderGeneField({ name: "datasetName", label: "数据集名称", value: "", placeholder: "请输入数据集名称", rule: "必填，2-50字符，建议同项目下唯一" })}
        ${renderGeneField({ name: "datasetType", label: "数据类型", type: "select", value: "", placeholder: "请选择数据类型", options: ["VCF", "BED", "FAM", "PHE", "CSV"], rule: "必填，需与上传文件后缀一致" })}
        ${renderGeneField({ name: "strain", label: "菌株类型", type: "select", value: "", placeholder: "请选择菌株类型", options: ["大肠杆菌", "酵母菌", "芽孢杆菌"], rule: "必填，只能选择当前菌株类型" })}
        ${renderGeneField({ name: "datasetSize", label: "数据大小", value: "", placeholder: "例如 256.78 MB", rule: "必填，正数，单位MB/GB，需与真实文件大小一致" })}
        <div class="gene-field is-full">
          <label>上传文件</label>
          <div class="gene-upload-box">
            <div class="gene-upload-icon">${icon("i-upload")}</div>
            <p>拖拽文件到此处或点击上传</p>
            <span>支持格式: .vcf .bed .fam .phe .csv，单个文件最大 500MB</span>
          </div>
          ${renderRequirementHint("文件后缀需与数据类型一致，空文件和超过500MB的文件不允许上传", "strong")}
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gene">取消</button>
      <button class="modal-primary" type="button" data-gene-submit="upload|${project.id}">确定</button>
    `
  });
}

function renderGeneDeleteModal(projectId) {
  const project = getGeneProject(projectId);

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定删除该分析项目吗？</h4>
        <p>${escapeHtml(project.name)}</p>
        <span>删除后项目配置、数据集和分析结果将无法恢复，请谨慎操作。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="gene">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-gene-submit="delete|${project.id}">确认删除</button>
    `
  });
}

function getGeneSnp(projectId, snpKey = "") {
  const project = getGeneProject(projectId);
  const target = String(snpKey || "");
  return (
    project.snps.find((snp) => [snp.snpId, snp.rank, snp.position, snp.gene].some((value) => String(value || "") === target)) ||
    project.snps[0]
  );
}

function renderGeneSnpListModal(projectId) {
  const project = getGeneProject(projectId);

  return renderGeneModalShell({
    title: `显著位点列表 - ${project.name}`,
    sizeClass: "is-gene-large gene-snp-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "显著 SNP 位点",
        title: project.name,
        description: "查看当前项目识别出的全部显著位点，并可继续进入单个位点详情。",
        meta: [
          { value: project.strain },
          { value: project.phenotype },
          { value: `${project.snps.length} 个显著位点` },
          { html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` }
        ]
      })}
      <section class="gene-sites-table-card">
        ${renderGeneSnpTable(project.snps, {
          showAction: true,
          projectId: project.id,
          tableClass: "is-sites-table"
        })}
        <div class="gene-sites-table-footer">
          <span>共 ${project.snps.length} 条显著位点记录</span>
          <div class="gene-sites-pagination">
            <button class="gene-sites-page-btn" type="button" disabled>上一页</button>
            <button class="gene-sites-page-btn is-active" type="button">1</button>
            <button class="gene-sites-page-btn" type="button" disabled>下一页</button>
          </div>
        </div>
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-gene-open="result|${project.id}">返回分析结果</button>
      <button class="modal-primary" type="button" data-close-modal="gene">关闭</button>
    `
  });
}

function renderGeneSnpSequence(snp) {
  const ref = "ATGCCGTA";
  const alt = "GCTAGCTA";

  return `
    <span>${ref
      .split("")
      .map((base) => `<span class="gene-snp-base is-ref">${base}</span>`)
      .join("")}</span>
    <span class="gene-snp-base is-alt">${String(snp.snpId || "A").slice(-1)}</span>
    <span>${alt
      .split("")
      .map((base) => `<span class="gene-snp-base is-ref">${base}</span>`)
      .join("")}</span>
  `;
}

function renderGeneSnpDetailModal(projectId, snpKey = "") {
  const project = getGeneProject(projectId);
  const snp = getGeneSnp(projectId, snpKey);
  const numericP = Number.parseFloat(String(snp.pValue || "").replace(/e/i, "E"));
  const pValueClass = Number.isFinite(numericP) && numericP < 1e-6 ? "is-danger" : "is-link";

  return renderGeneModalShell({
    title: `位点详情 - ${snp.snpId}`,
    sizeClass: "is-gene-large gene-snp-modal",
    body: `
      <div class="gene-snp-detail-view">
        <section class="gene-snp-section">
          <div class="gene-snp-section-title">
            <span class="gene-snp-section-icon is-target"></span>
            <h4>位点基本信息</h4>
          </div>
          <div class="gene-snp-grid">
            <div class="gene-snp-item">
              <span>SNP ID</span>
              <strong class="is-link">${escapeHtml(snp.snpId)}</strong>
            </div>
            <div class="gene-snp-item">
              <span>排名</span>
              <strong>#${escapeHtml(String(snp.rank))}</strong>
            </div>
            <div class="gene-snp-item">
              <span>染色体</span>
              <strong>${escapeHtml(snp.chromosome)}</strong>
            </div>
            <div class="gene-snp-item">
              <span>位置</span>
              <strong>${escapeHtml(snp.position)}</strong>
            </div>
            <div class="gene-snp-item">
              <span>P 值</span>
              <strong class="${pValueClass}">${escapeHtml(snp.pValue)}</strong>
            </div>
            <div class="gene-snp-item">
              <span>效应值</span>
              <strong>${escapeHtml(snp.effect)}</strong>
            </div>
          </div>
        </section>

        <section class="gene-snp-section">
          <div class="gene-snp-section-title">
            <span class="gene-snp-section-icon is-gene"></span>
            <h4>关联基因</h4>
          </div>
          <div class="gene-snp-grid">
            <div class="gene-snp-item">
              <span>基因名称</span>
              <strong>${escapeHtml(snp.gene)}</strong>
            </div>
            <div class="gene-snp-item">
              <span>项目表型</span>
              <strong>${escapeHtml(project.phenotype)}</strong>
            </div>
            <div class="gene-snp-item">
              <span>分析方法</span>
              <strong>${escapeHtml(project.method)}</strong>
            </div>
            <div class="gene-snp-item is-wide">
              <span>所属项目</span>
              <strong>${escapeHtml(project.name)}</strong>
            </div>
          </div>
        </section>

        <section class="gene-snp-section">
          <div class="gene-snp-section-title">
            <span class="gene-snp-section-icon is-note"></span>
            <h4>结果说明</h4>
          </div>
          <div class="gene-snp-note-card">
            <p><strong>${escapeHtml(snp.snpId)}</strong> 位于 ${escapeHtml(snp.chromosome)}:${escapeHtml(
              snp.position
            )}，与 ${escapeHtml(project.phenotype)} 表型存在显著关联，建议结合候选基因 ${escapeHtml(
              snp.gene
            )} 的功能注释进行后续验证。</p>
          </div>
        </section>

        <section class="gene-snp-section">
          <div class="gene-snp-section-title">
            <span class="gene-snp-section-icon is-seq"></span>
            <h4>位点序列预览</h4>
          </div>
          <div class="gene-snp-seq-card">
            <p>${renderGeneSnpSequence(snp)}</p>
          </div>
        </section>
      </div>
    `,
    footer: `
      <button class="modal-outline" type="button" data-gene-open="snp-list|${project.id}">返回位点列表</button>
      <button class="modal-primary" type="button" data-close-modal="gene">关闭</button>
    `
  });
}

function renderGeneResultModal(projectId) {
  const project = getGeneProject(projectId);

  return renderGeneModalShell({
    title: `分析结果 - ${project.name}`,
    sizeClass: "gene-result-modal",
    body: `
      ${renderDetailHero({
        eyebrow: "基因型-表型分析",
        title: project.name,
        description: "集中展示显著位点、统计图谱与基因型组合预测结果。",
        meta: [
          { value: project.strain },
          { value: project.phenotype },
          { value: project.method },
          { html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` }
        ]
      })}
      <section class="gene-metric-grid">
        ${project.metrics
          .map(
            (item) => `
              <article class="gene-metric-card">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.value)}</strong>
              </article>
            `
          )
          .join("")}
      </section>

      <section class="gene-chart-grid">
        ${renderGeneChartCard("全基因组关联分析", renderGeneScatter(project.points), "以散点形式展示关联显著性分布")}
        ${renderGeneChartCard("P值分布情况", renderGeneHistogram(project.pValueBars), "观察各区段 P 值频次分布")}
        ${renderGeneChartCard("显著位点染色体分布情况", renderGeneChromosomeBars(project.chromosomeBars), "对比各染色体显著位点数量")}
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div><h4>显著位点列表</h4><p class="section-caption">展示当前项目识别到的关键 SNP 位点</p></div>
          <button class="table-link" type="button" data-gene-open="snp-list|${project.id}">查看全部</button>
        </div>
        ${renderGeneSnpTable(project.snps, { showAction: true, projectId: project.id, tableClass: "is-result-table" })}
      </section>
    `,
    footer: `
      <button class="modal-primary" type="button" data-close-modal="gene">关闭</button>
    `
  });
}

function renderGeneDetailModal(projectId, tab = "project") {
  const project = getGeneProject(projectId);
  const dataset = project.dataset;
  const projectInfo = [
    { label: "项目名称", value: project.name },
    { label: "菌株类型", value: project.strain },
    { label: "表型类型", value: project.phenotype },
    { label: "分析方法", value: project.method },
    { label: "显著性阈值", value: project.threshold },
    { label: "分析状态", html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` },
    { label: "样本数", value: project.samples },
    { label: "显著位点", value: project.sites },
    { label: "创建时间", value: project.createdAt },
    { label: "更新时间", value: project.updatedAt }
  ];
  const datasetInfo = [
    { label: "数据集名称", value: dataset.name },
    { label: "文件类型", value: dataset.type },
    { label: "样本数", value: project.samples },
    { label: "位点数", value: dataset.sites },
    { label: "数据大小", value: dataset.size },
    { label: "上传时间", value: dataset.uploadedAt }
  ];

  const projectTabBody = `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>项目信息</h4><p class="section-caption">查看项目基础属性、阈值与时间信息</p></div>
      </div>
      ${renderGeneInfoGrid(projectInfo)}
    </section>
    <section class="gene-chart-grid">
      ${renderGeneChartCard("全基因组关联分析", renderGeneScatter(project.points), "以散点形式展示关联显著性分布")}
      ${renderGeneChartCard("P值分布情况", renderGeneHistogram(project.pValueBars), "观察各区段 P 值频次分布")}
      ${renderGeneChartCard("显著位点染色体分布情况", renderGeneChromosomeBars(project.chromosomeBars), "对比各染色体显著位点数量")}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>Top 10 SNP位点</h4><p class="section-caption">按照显著性排序展示关键位点</p></div>
      </div>
      ${renderGeneSnpTable(project.snps.slice(0, 10))}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>基因型组合预测</h4><p class="section-caption">给出推荐组合、预测产量与置信信息</p></div>
      </div>
      <div class="gene-predict-card">
        <div>
          <span>系统推荐组合</span>
          <strong>${escapeHtml(project.prediction.combo)}</strong>
        </div>
        <div>
          <span>预测产量</span>
          <strong>${escapeHtml(project.prediction.yield)}</strong>
        </div>
        <div>
          <span>置信区间</span>
          <strong>${escapeHtml(project.prediction.interval)}</strong>
        </div>
        <div>
          <span>置信度</span>
          <strong>${escapeHtml(project.prediction.confidence)}</strong>
        </div>
      </div>
    </section>
  `;

  const datasetTabBody = `
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>数据信息</h4><p class="section-caption">查看数据集类型、规模与上传信息</p></div>
      </div>
      ${renderGeneInfoGrid(datasetInfo)}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>数据预览</h4><p class="section-caption">展示数据集前几行内容用于快速核验</p></div>
      </div>
      ${renderGeneDatasetPreview(dataset)}
    </section>
    <section class="gene-quality-grid">
      ${dataset.qualityStats
        .map(
          (item) => `
            <article class="gene-quality-card">
              <strong>${escapeHtml(item.value)}</strong>
              <span>${escapeHtml(item.label)}</span>
            </article>
          `
        )
        .join("")}
    </section>
    <section class="gene-section-card">
      <div class="gene-section-head">
        <div><h4>位点质量分布</h4><p class="section-caption">展示位点质量统计柱状分布</p></div>
      </div>
      ${renderGeneHistogram(dataset.qualityBars)}
    </section>
  `;

  return renderGeneModalShell({
    title: "详情",
    sizeClass: "gene-project-detail-modal",
    body: `
      ${renderDetailHero({
        eyebrow: tab === "dataset" ? "数据信息" : "项目信息",
        title: project.name,
        description: tab === "dataset" ? "查看数据集属性、预览内容与质量分布。" : "查看项目属性、统计图谱与推荐基因型组合。",
        meta: [
          { value: project.strain },
          { value: project.phenotype },
          { value: project.method },
          { html: `<span class="status-chip ${geneStatusClass(project.status)}">${project.status}</span>` }
        ]
      })}
      <div class="gene-tabs">
        <button class="gene-tab ${tab === "project" ? "is-active" : ""}" type="button" data-gene-tab="project">项目信息</button>
        <button class="gene-tab ${tab === "dataset" ? "is-active" : ""}" type="button" data-gene-tab="dataset">数据信息</button>
      </div>
      ${tab === "dataset" ? datasetTabBody : projectTabBody}
    `,
    footer: `
      <button class="modal-primary" type="button" data-close-modal="gene">关闭</button>
    `
  });
}

function openGeneModal(actionKey, projectId = "", extra = {}) {
  const parentModal = extra.parentModal || (state.modal ? { ...state.modal } : null);
  if (actionKey === "create") {
    state.modal = { type: "gene-create" };
    return;
  }

  if (actionKey === "detail") {
    state.modal = { type: "gene-detail", projectId, tab: extra.tab || "project", parentModal };
    return;
  }

  state.modal = { type: `gene-${actionKey}`, projectId, ...extra, parentModal };
}

function getAnalysisRow(moduleKey, itemId) {
  const target = String(itemId || "");
  const rows = analysisPages[moduleKey]?.rows || [];
  return (
    rows.find((row) => [row.id, row.name, row.code, row.itemId].some((value) => String(value || "") === target)) ||
    null
  );
}

function renderAnalysisFormModal(moduleKey, mode, itemId = "") {
  if (moduleKey === "omics") {
    return renderOmicsFormModal(mode, itemId);
  }
  if (moduleKey === "process") {
    return renderProcessFormModal(mode, itemId);
  }
  if (moduleKey === "full") {
    return renderFullFormModal(mode, itemId);
  }
  if (moduleKey === "service") {
    return renderServiceFormModal(mode, itemId);
  }

  const config = analysisFormConfigs[moduleKey];
  const current = itemId ? getAnalysisRow(moduleKey, itemId) : null;
  const isEdit = mode === "edit";
  const algorithmUploadDraft =
    moduleKey === "system-algorithms"
      ? state.algorithmUploadDraft.fileName
        ? state.algorithmUploadDraft
        : { fileName: current?.packageName || "", fileSize: current?.packageSize || "" }
      : state.algorithmUploadDraft;

  return renderGeneModalShell({
    title: `${mode === "edit" ? "编辑" : "新增"}${config.title}`,
    sizeClass: "is-gene-form",
    body: `
      <div class="gene-form-grid">
        ${config.fields
          .map((field) =>
            renderAnalysisField({
              ...field,
              moduleKey,
              value:
                field.type === "file"
                  ? algorithmUploadDraft.fileName || current?.[field.name] || ""
                  : field.name === "statusText"
                    ? isEdit ? current?.status?.text || "" : ""
                    : current?.[field.name] || "",
              fileSize: field.type === "file" ? algorithmUploadDraft.fileSize || current?.packageSize || "" : "",
              name: `analysis-${field.name}`
            })
          )
          .join("")}
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary" type="button" data-analysis-submit="${mode}|${moduleKey}|${itemId}">${mode === "edit" ? "保存修改" : "确认创建"}</button>
    `
  });
}

function renderAnalysisDetailModal(moduleKey, itemId) {
  if (moduleKey === "omics") {
    return renderOmicsDetailModal(itemId);
  }
  if (moduleKey === "process") {
    return renderProcessDetailModal(itemId);
  }
  if (moduleKey === "full") {
    return renderFullDetailModal(itemId);
  }
  if (moduleKey === "service") {
    return renderServiceDetailModal(itemId);
  }
  if (isSystemMenu(moduleKey)) {
    return renderSystemDetailModal(moduleKey, itemId);
  }

  const row = getAnalysisRow(moduleKey, itemId);
  const page = analysisPages[moduleKey];
  const safeRow = row || {
    id: itemId,
    name: itemId || "未命名记录",
    code: itemId || "",
    status: { text: "未找到", className: "is-pending" }
  };

  const infoItems = page.columns
    .filter((column) => column.key !== "actions")
    .map((column) => ({
      label: column.label,
      value: column.key === "status" ? safeRow.status.text : safeRow[column.key]
    }));

  return renderGeneModalShell({
    title: `${page.title}详情`,
    sizeClass: "is-gene-form",
    body: `
      <section class="gene-section-card">
        <div class="gene-section-head">
          <h4>详细信息</h4>
        </div>
        ${renderGeneInfoGrid(infoItems)}
        ${row ? "" : '<p class="section-caption" style="margin-top:12px;">未找到匹配记录，当前显示的是兜底详情。</p>'}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|${moduleKey}|${itemId}">编辑</button>
    `
  });
}

function renderSystemDetailModal(moduleKey, itemId) {
  if (moduleKey === "system-algorithms") {
    return renderAlgorithmCapabilityModal(itemId);
  }

  const rawRow = getSystemRow(moduleKey, itemId);
  const row = moduleKey === "system-audit" && rawRow ? normalizeAuditRow(rawRow) : rawRow;
  const page = systemPages[moduleKey];
  if (!row || !page) {
    return "";
  }

  const infoItems = page.columns
    .filter((column) => column.key !== "actions")
    .map((column) => ({
      label: column.label,
      value: column.key === "status" ? row.status?.text || "--" : row[column.key] ?? "--"
    }));

  return renderGeneModalShell({
    title: `${page.title}详情`,
    sizeClass: "is-gene-form",
    body: `
      <section class="gene-section-card">
        <div class="gene-section-head">
          <h4>详细信息</h4>
          <p class="section-caption">${page.title}当前记录详情信息，可直接返回列表或进入编辑。</p>
        </div>
        ${renderGeneInfoGrid(infoItems)}
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|${moduleKey}|${itemId}">编辑</button>
    `
  });
}

function getAlgorithmCapability(itemId) {
  const row = getSystemRow("system-algorithms", itemId) || systemPages["system-algorithms"]?.rows?.[0];
  const preset = algorithmCapabilityLibrary[itemId] || algorithmCapabilityLibrary[row?.id] || algorithmCapabilityLibrary["algo-1"];
  return {
    row,
    ...preset
  };
}

function renderAlgorithmCodeTabs(activeLanguage) {
  const options = [
    { key: "python", label: "Python" },
    { key: "curl", label: "cURL" },
    { key: "nodejs", label: "Node.js" }
  ];
  return `
    <div class="algorithm-code-tabs" role="tablist" aria-label="算法示例语言">
      ${options
        .map(
          (option) => `
            <button
              class="algorithm-code-tab ${activeLanguage === option.key ? "is-active" : ""}"
              type="button"
              role="tab"
              aria-selected="${activeLanguage === option.key}"
              data-algorithm-language="${option.key}"
            >
              ${option.label}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderAlgorithmCapabilityModal(itemId) {
  const capability = getAlgorithmCapability(itemId);
  if (!capability?.row) {
    return "";
  }

  const activeLanguage = state.algorithmPlayground.language || "python";
  const formState = state.algorithmPlayground.form || {};
  const responseText = state.algorithmPlayground.result || capability.testOutput;
  const packageName = capability.row.packageName || "--";
  const packageSize = capability.row.packageSize || "未上传";

  return renderGeneModalShell({
    title: `${capability.row.name}能力详情`,
    sizeClass: "is-gene-large algorithm-detail-modal",
    body: `
      <section class="gene-section-card algorithm-hero-card">
        <div class="algorithm-hero-top">
          <div>
            <p class="algorithm-hero-breadcrumb">科技专题服务算法库 / ${escapeHtml(capability.title)}</p>
            <div class="gene-section-head">
              <div>
                <h4>${escapeHtml(capability.title)}</h4>
                <p class="section-caption">${escapeHtml(capability.subtitle)}</p>
              </div>
              <div class="algorithm-hero-actions">
                <button class="modal-outline" type="button" data-algorithm-copy="${itemId}">${icon("i-doc")}复制代码</button>
                <button class="modal-primary" type="button" data-algorithm-run="${itemId}">${icon("i-chart")}在线测试</button>
              </div>
            </div>
          </div>
        </div>
        <div class="algorithm-chip-group">
          <div class="algorithm-chip-block">
            <span class="algorithm-chip-label">代码包信息</span>
            <div class="algorithm-file-summary">
              <div class="algorithm-file-card">
                <strong title="${escapeHtml(packageName)}">${escapeHtml(packageName)}</strong>
                <span>${escapeHtml(packageSize)}</span>
              </div>
              <div class="algorithm-file-meta">
                <span>运行环境：${escapeHtml(capability.row.runtime || "--")}</span>
                <span>更新时间：${escapeHtml(capability.row.updatedAt || "--")}</span>
              </div>
            </div>
          </div>
          <div class="algorithm-chip-block">
            <span class="algorithm-chip-label">功能特点</span>
            <div class="algorithm-chip-row">
              ${capability.featureTags.map((tag) => `<span class="algorithm-chip">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
          <div class="algorithm-chip-block">
            <span class="algorithm-chip-label">适用场景</span>
            <div class="algorithm-chip-row">
              ${capability.sceneTags.map((tag) => `<span class="algorithm-chip">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div>
            <h4>API 调用示例</h4>
            <p class="section-caption">接口地址：${escapeHtml(capability.endpoint)}</p>
          </div>
          ${renderAlgorithmCodeTabs(activeLanguage)}
        </div>
        <pre class="algorithm-code-block"><code>${escapeHtml(capability.requestExample[activeLanguage] || capability.requestExample.python)}</code></pre>
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div>
            <h4>响应示例</h4>
            <p class="section-caption">返回统一响应结构，包含结果主体与处理元信息。</p>
          </div>
        </div>
        <pre class="algorithm-code-block is-response"><code>${escapeHtml(capability.responseExample)}</code></pre>
      </section>

      <section class="gene-section-card">
        <div class="gene-section-head">
          <div>
            <h4>在线测试</h4>
            <p class="section-caption">填写关键参数后即可模拟调用效果，右侧实时返回示例结果。</p>
          </div>
          <span class="algorithm-status-dot ${capability.row.status?.text === "启用" ? "is-online" : "is-offline"}">${escapeHtml(
            capability.row.status?.text === "启用" ? "就绪" : "离线"
          )}</span>
        </div>
        <div class="algorithm-playground">
          <div class="algorithm-form-grid">
            <label class="gene-field">
              <span class="gene-label">请求参数</span>
              <span class="gene-input-wrap">
                <input class="input-control" type="text" value="${escapeHtml(formState.target_type || "")}" data-algorithm-field="target_type" />
              </span>
              <small class="gene-rule">分析对象类型：industry / enterprise / institution</small>
            </label>
            <label class="gene-field">
              <span class="gene-label">时间范围</span>
              <span class="gene-input-wrap">
                <input class="input-control" type="text" value="${escapeHtml(formState.time_range || "")}" data-algorithm-field="time_range" />
              </span>
            </label>
            <label class="gene-field is-full">
              <span class="gene-label">对比目标来源</span>
              <span class="gene-input-wrap">
                <input class="input-control" type="text" value="${escapeHtml(formState.comparison_targets || "")}" data-algorithm-field="comparison_targets" />
              </span>
            </label>
          </div>
          <div class="algorithm-playground-result">
            <div class="algorithm-playground-toolbar">
              <span>响应结果</span>
              <button class="reset-link" type="button" data-algorithm-clear="${itemId}">清除结果</button>
            </div>
            <pre class="algorithm-code-block is-live"><code>${escapeHtml(responseText)}</code></pre>
          </div>
        </div>
      </section>
    `,
    footer: `
      <button class="modal-outline" type="button" data-close-modal="analysis">关闭</button>
      <button class="modal-primary" type="button" data-analysis-open="edit|system-algorithms|${itemId}">编辑</button>
    `
  });
}

function renderAnalysisDeleteModal(moduleKey, itemId) {
  if (moduleKey === "omics") {
    return renderOmicsDeleteModal(itemId);
  }
  if (moduleKey === "process") {
    return renderProcessDeleteModal(itemId);
  }
  if (moduleKey === "full") {
    return renderFullDeleteModal(itemId);
  }
  if (moduleKey === "service") {
    return renderServiceDeleteModal(itemId);
  }

  const row = getAnalysisRow(moduleKey, itemId);
  if (!row) {
    return "";
  }

  return renderGeneModalShell({
    title: "确认删除",
    sizeClass: "is-gene-delete",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确定删除该记录吗？</h4>
        <p>${escapeHtml(row.name || row.code || itemId)}</p>
        <span>删除后将从数据库移除，刷新页面不会恢复。</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="analysis">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-analysis-submit="delete|${moduleKey}|${itemId}">确认删除</button>
    `
  });
}

function openAnalysisModal(action, moduleKey, itemId = "") {
  const parentModal = state.modal ? { ...state.modal } : null;
  if (moduleKey === "system-algorithms" && ["create", "edit"].includes(action)) {
    const current = itemId ? getSystemRow(moduleKey, itemId) : null;
    state.algorithmUploadDraft = {
      fileName: current?.packageName || "",
      fileSize: current?.packageSize || 0
    };
  }
  if (action === "create" || action === "edit") {
    if (moduleKey === "service") {
      const current = itemId ? hydrateServiceItem(getAnalysisRow("service", itemId) || {}) : null;
      state.modal = {
        type: "analysis-form",
        mode: action,
        moduleKey,
        itemId,
        serviceMethod: action === "edit" ? "manual" : "file",
        serviceStep: 1,
        serviceDraft: action === "edit" ? buildServiceDraft(current) : createServiceEmptyDraft(),
        parentModal
      };
      return;
    }

    state.modal = { type: "analysis-form", mode: action, moduleKey, itemId, parentModal };
    return;
  }

  if (action === "detail") {
    state.modal = { type: "analysis-detail", moduleKey, itemId, parentModal };
    return;
  }

  if (action === "assign-role") {
    state.modal = { type: "system-assign-role", moduleKey, itemId, parentModal };
    return;
  }

  if (action === "permission") {
    state.modal = { type: "system-permission", moduleKey, itemId, parentModal };
    return;
  }

  if (action === "gpa-detail" || action === "predict-detail") {
    state.modal = { type: "full-linked-detail", moduleKey, itemId, detailType: action, parentModal };
    return;
  }

  if (action === "delete") {
    state.modal = { type: "analysis-delete", moduleKey, itemId, parentModal };
  }
}

const __openAnalysisModalForSystem = openAnalysisModal;
openAnalysisModal = function openAnalysisModalForSystemPatched(action, moduleKey, itemId = "") {
  const parentModal = state.modal ? { ...state.modal } : null;
  if (isSystemMenu(moduleKey) && action === "toggle") {
    state.modal = { type: "system-toggle", moduleKey, itemId, parentModal };
    return;
  }

  if (isSystemMenu(moduleKey) && action === "export") {
    state.modal = { type: "system-export", moduleKey, parentModal };
    return;
  }

  return __openAnalysisModalForSystem(action, moduleKey, itemId);
};

function getGeneFormValues() {
  return [...document.querySelectorAll("[data-gene-field]")].reduce((result, node) => {
    result[node.dataset.geneField] = node.value.trim();
    return result;
  }, {});
}

function getAnalysisFormValues() {
  const result = [...document.querySelectorAll("[data-gene-field^='analysis-']")].reduce((acc, node) => {
    if (node.type === "file") {
      return acc;
    }
    acc[node.dataset.geneField.replace("analysis-", "")] = node.value.trim();
    return acc;
  }, {});

  const moduleChecks = [...document.querySelectorAll("[data-analysis-module]")];
  if (moduleChecks.length) {
    result.modules = moduleChecks.filter((node) => node.checked).map((node) => node.dataset.analysisModule);
  }

  if (state.modal?.moduleKey === "system-algorithms" && state.algorithmUploadDraft.fileName) {
    result.packageName = state.algorithmUploadDraft.fileName;
    result.packageSize = formatFileSize(state.algorithmUploadDraft.fileSize);
  }

  return result;
}

function getSensorFormValues(moduleKey) {
  return [...document.querySelectorAll(`[data-sensor-module="${moduleKey}"]`)].reduce((result, node) => {
    result[node.dataset.sensorField] = node.value.trim();
    return result;
  }, {});
}

async function submitGeneAction(action, projectId) {
  const values = getGeneFormValues();
  const current = projectId ? getGeneProject(projectId) : null;

  if (action === "create") {
    await apiRequest("/api/gene-projects", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        strain: values.strain,
        phenotype: values.phenotype,
        method: values.method,
        threshold: values.threshold,
        description: values.description,
        status: "分析中",
        samples: "0",
        sites: "0",
        dataset: {
          name: `${values.name || "未命名项目"}_数据集`,
          type: "VCF",
          size: "0 MB",
          sites: "0"
        }
      })
    });
  } else if (action === "save" && current) {
    await apiRequest(`/api/gene-projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...current,
        name: values.name,
        strain: values.strain,
        phenotype: values.phenotype,
        method: values.method,
        threshold: values.threshold,
        description: values.description
      })
    });
  } else if (action === "upload" && current) {
    await apiRequest(`/api/gene-projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...current,
        strain: values.strain || current.strain,
        dataset: {
          ...current.dataset,
          name: values.datasetName,
          type: values.datasetType,
          size: values.datasetSize || current.dataset.size,
          uploadedAt: new Date().toISOString().slice(0, 19).replace("T", " ")
        }
      })
    });
  } else if (action === "delete" && current) {
    await apiRequest(`/api/gene-projects/${projectId}`, {
      method: "DELETE"
    });
  }

  await loadGeneProjects();
}

async function submitAnalysisAction(action, moduleKey, itemId) {
  const values = getAnalysisFormValues();
  const current = itemId ? getAnalysisRow(moduleKey, itemId) : null;

  if (moduleKey === "omics") {
    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "omics",
          name: values.name,
          strain: values.strain,
          source: values.source,
          description: values.description,
          type: "基于基因组",
          reactions: "2,156",
          metabolites: "1,892",
          flux: "3.24",
          targetProduct: "乙酸",
          fileName: "model_v2.xml",
          statusText: "已验证",
          statusClass: "is-valid",
          createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({
          ...current,
          name: values.name,
          strain: values.strain,
          source: values.source,
          description: values.description,
          fileName: current.fileName || "model_v2.xml",
          type: current.type || "基于基因组",
          targetProduct: current.targetProduct || "乙酸",
          statusText: current.status?.text || "已验证",
          statusClass: current.status?.className || "is-valid"
        })
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (moduleKey === "process") {
    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "process",
          name: values.name,
          model: values.model,
          strain: values.strain,
          goal: values.goal,
          description: values.description,
          improvement: "+18.5%",
          paramCount: "24",
          currentYield: "85.2 g/L",
          optimizedYield: "100.9 g/L",
          confidenceRange: "98.5 - 103.3 g/L",
          statusText: "已完成",
          statusClass: "is-valid",
          createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({
          ...current,
          name: values.name,
          model: values.model,
          strain: values.strain,
          goal: values.goal,
          description: values.description,
          improvement: current.improvement || "+18.5%",
          paramCount: current.paramCount || "24",
          currentYield: current.currentYield || "85.2 g/L",
          optimizedYield: current.optimizedYield || "100.9 g/L",
          confidenceRange: current.confidenceRange || "98.5 - 103.3 g/L",
          statusText: current.status?.text || "已完成",
          statusClass: current.status?.className || "is-valid"
        })
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (moduleKey === "full") {
    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "full",
          name: values.name,
          strain: values.strain,
          description: values.description,
          modules: values.modules || [],
          targetProduct: "L-谷氨酸",
          patentRisk: "中等风险 共12项专利风险",
          statusText: "已完成",
          statusClass: "is-done",
          createdAt: new Date().toISOString().slice(0, 10),
          gpaSummary: fullProjectLibrary["full-1"].gpaSummary,
          processSummary: fullProjectLibrary["full-1"].processSummary
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({
          ...current,
          name: values.name,
          strain: values.strain,
          description: values.description,
          modules: values.modules || [],
          targetProduct: current.targetProduct || "L-谷氨酸",
          patentRisk: current.patentRisk || "中等风险 共12项专利风险",
          statusText: current.status?.text || "已完成",
          statusClass: current.status?.className || "is-done"
        })
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (moduleKey === "service") {
    const serviceValues = buildServicePayload(syncServiceDraftFromDom(), current);

    if (action === "create") {
      await apiRequest("/api/analysis-items", {
        method: "POST",
        body: JSON.stringify({
          module: "service",
          ...serviceValues,
          createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
        })
      });
    } else if (action === "edit" && current) {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify(serviceValues)
      });
    } else if (action === "delete") {
      await apiRequest(`/api/analysis-items/${itemId}`, {
        method: "DELETE"
      });
    }

    await loadAnalysisModules();
    return;
  }

  if (action === "create") {
    await apiRequest("/api/analysis-items", {
      method: "POST",
      body: JSON.stringify({
        module: moduleKey,
        ...values,
        statusText: values.statusText,
        statusClass: statusTextToClass(values.statusText),
        createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
      })
    });
  } else if (action === "edit" && current) {
    await apiRequest(`/api/analysis-items/${itemId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...current,
        ...values,
        statusText: values.statusText,
        statusClass: statusTextToClass(values.statusText)
      })
    });
  } else if (action === "delete") {
    await apiRequest(`/api/analysis-items/${itemId}`, {
      method: "DELETE"
    });
  }

  await loadAnalysisModules();
}

const __submitAnalysisActionForSystem = submitAnalysisAction;
submitAnalysisAction = async function submitAnalysisActionForSystemPatched(action, moduleKey, itemId) {
  if (isSystemMenu(moduleKey)) {
    return submitSystemAction(action, moduleKey, itemId);
  }
  return __submitAnalysisActionForSystem(action, moduleKey, itemId);
};

function sensorStatusClass(moduleKey, metrics) {
  const result = evaluateSensorMetrics(moduleKey, metrics);
  if (result.errors.length) {
    return "is-error";
  }
  if (result.warnings.length) {
    return "is-warning";
  }
  return "is-normal";
}

function normalizeSensorLabel(label = "") {
  return String(label || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/（[^）]*）/g, "")
    .replace(/\s+/g, "")
    .trim();
}

function getSensorThreshold(moduleKey, label) {
  const normalized = normalizeSensorLabel(label);
  return sensorModules[moduleKey]?.thresholdRows.find((row) => normalizeSensorLabel(row.label) === normalized) || null;
}

function numericSensorValue(value) {
  const parsed = Number(String(value || "").replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : NaN;
}

function evaluateSensorMetrics(moduleKey, metrics = []) {
  const errors = [];
  const warnings = [];
  metrics.forEach((item) => {
    const threshold = getSensorThreshold(moduleKey, item.label);
    const value = numericSensorValue(item.value);
    if (!threshold) {
      return;
    }
    const min = Number(threshold.min);
    const max = Number(threshold.max);
    const alert = Number(threshold.alert);
    if (!Number.isFinite(value)) {
      errors.push(`${item.label}不是有效数值`);
      return;
    }
    if (Number.isFinite(min) && value < min) {
      errors.push(`${item.label}${value}低于下限${min}`);
    }
    if (Number.isFinite(max) && value > max) {
      errors.push(`${item.label}${value}高于上限${max}`);
    }
    if (!errors.some((msg) => msg.startsWith(item.label)) && Number.isFinite(alert) && value >= alert) {
      warnings.push(`${item.label}${value}达到预警阈值${alert}`);
    }
  });
  return { errors, warnings };
}

function getSensorMetricTone(moduleKey, metric) {
  const result = evaluateSensorMetrics(moduleKey, [metric]);
  if (result.errors.length) {
    return "error";
  }
  if (result.warnings.length) {
    return "warning";
  }
  return "normal";
}

function sensorFieldAliases(moduleKey) {
  const module = sensorModules[moduleKey];
  return {
    batchId: ["批次号", "batchId", "批次"],
    time: ["录入时间", "检测时间", "time"],
    user: ["录入人员", "操作人", "user"],
    metrics: module.paramFields.map((field) => ({
      label: field.label,
      aliases: [field.label, normalizeSensorLabel(field.label)]
    }))
  };
}

function pickSensorCell(row, aliases, fallback = "") {
  const keys = Object.keys(row);
  const target = aliases.find((alias) => keys.some((key) => normalizeSensorLabel(key) === normalizeSensorLabel(alias)));
  if (!target) {
    return fallback;
  }
  const key = keys.find((item) => normalizeSensorLabel(item) === normalizeSensorLabel(target));
  return row[key] || fallback;
}

function buildSensorImportResult(moduleKey, rows) {
  const aliases = sensorFieldAliases(moduleKey);
  const module = sensorModules[moduleKey];
  const errors = [];
  const validRows = [];
  let warningCount = 0;
  rows.forEach((row, index) => {
    const lineNo = index + 2;
    const batchId = pickSensorCell(row, aliases.batchId, state.activeBatch[moduleKey]);
    const time = pickSensorCell(row, aliases.time, new Date().toISOString().slice(0, 19).replace("T", " "));
    const user = pickSensorCell(row, aliases.user, getCurrentOperatorName());
    const metrics = aliases.metrics.map((item) => ({
      label: item.label,
      value: pickSensorCell(row, item.aliases)
    }));
    if (!batchId || !time || !user) {
      errors.push(`第${lineNo}行缺少批次号、录入时间或录入人员`);
      return;
    }
    if (metrics.some((item) => item.value === "")) {
      errors.push(`第${lineNo}行存在空参数值`);
      return;
    }
    const validation = evaluateSensorMetrics(moduleKey, metrics);
    if (validation.errors.length) {
      errors.push(`第${lineNo}行异常：${validation.errors.slice(0, 2).join("；")}`);
      return;
    }
    if (validation.warnings.length) {
      warningCount += 1;
    }
    const statusClass = validation.warnings.length ? "is-warning" : "is-normal";
    const record = {
      module: moduleKey,
      batchId,
      time,
      user,
      statusText: validation.warnings.length ? "预警" : "正常",
      statusClass,
      metrics: metrics.slice(0, 4).map((item) => ({ ...item, tone: getSensorMetricTone(moduleKey, item) })),
      detail: moduleKey === "physical" ? metrics.map((item) => ({ ...item, tone: getSensorMetricTone(moduleKey, item) })) : [],
      detailCards: moduleKey === "biological" ? metrics.map((item) => ({ ...item, tone: getSensorMetricTone(moduleKey, item) })) : [],
      warnings: validation.warnings,
      thresholdSnapshot: module.thresholdRows.map((item) => ({ ...item }))
    };
    validRows.push(record);
  });
  return { validRows, errors, warningCount };
}

async function importSensorRecords(moduleKey, records) {
  for (const record of records) {
    const payload = await apiRequest("/api/sensor-records", {
      method: "POST",
      body: JSON.stringify(record)
    });
    mergeSensorRecord(moduleKey, payload.item);
  }
  recalcSensorSummary(moduleKey);
  appendOperationLog(moduleKey, `批量导入${sensorModules[moduleKey].label}记录${records.length}条`);
}

async function submitSensorAction(action, moduleKey) {
  const values = getSensorFormValues(moduleKey);
  const module = sensorModules[moduleKey];
  const batchId = values[`${moduleKey}-basic-0`];
  const timeIndex = module.basicFields.findIndex((field) => field.label === "录入时间");
  const userIndex = module.basicFields.findIndex((field) => field.label === "录入人员");
  const user = values[`${moduleKey}-basic-${userIndex}`] || "系统录入";
  const time = values[`${moduleKey}-basic-${timeIndex}`] || new Date().toISOString().slice(0, 19).replace("T", " ");
  const metricValues = module.paramFields
    .map((field, index) => ({
      label: field.label,
      value: values[`${moduleKey}-param-${index}`]
    }))
    .filter((item) => item.value);

  if (!batchId) {
    throw new Error("请选择批次号");
  }
  if (!user || user === "系统录入") {
    throw new Error("请填写录入人员");
  }
  if (metricValues.length !== module.paramFields.length) {
    throw new Error("请完整填写所有传感器参数");
  }
  const validation = evaluateSensorMetrics(moduleKey, metricValues);
  if (validation.errors.length) {
    appendOperationLog(moduleKey, `新增录入被阻断：${validation.errors.slice(0, 3).join("；")}`, "失败");
    throw new Error(`异常数据不允许入库：${validation.errors.slice(0, 2).join("；")}`);
  }

  const statusClass = sensorStatusClass(moduleKey, metricValues);
  const statusText = statusClass === "is-error" ? "异常" : statusClass === "is-warning" ? "预警" : "正常";
  const record = {
    module: moduleKey,
    batchId,
    time,
    user,
    statusText,
    statusClass,
    metrics: metricValues.slice(0, 4).map((item) => ({
      label: item.label,
      value: item.value,
      tone: getSensorMetricTone(moduleKey, item)
    })),
    detail: moduleKey === "physical" ? metricValues.map((item) => ({ ...item, tone: getSensorMetricTone(moduleKey, item) })) : [],
    detailCards: moduleKey === "biological" ? metricValues.map((item) => ({ ...item, tone: getSensorMetricTone(moduleKey, item) })) : [],
    warnings: validation.warnings,
    thresholdSnapshot: module.thresholdRows.map((row) => ({ ...row }))
  };

  const payload = await apiRequest("/api/sensor-records", {
    method: "POST",
    body: JSON.stringify(record)
  });

  mergeSensorRecord(moduleKey, payload.item);
  recalcSensorSummary(moduleKey);
  appendOperationLog(moduleKey, `${action === "save" ? "暂存" : "提交"}${module.label}记录：${record.batchId} ${record.time}`);
}

function findRecord(moduleKey, batchId, recordId) {
  const module = sensorModules[moduleKey];
  const batch = module.batches.find((item) => item.id === batchId);
  const record = batch?.records.find((item) => item.id === recordId);
  return { module, batch, record };
}

function renderThresholdModal(module) {
  const hasParentModal = Boolean(state.modal?.parentModal);
  return `
    <div class="modal-layer">
      <section class="modal">
        <header class="modal-header">
          <div class="modal-heading">
            ${
              hasParentModal
                ? `
                  <button class="modal-back" type="button" data-modal-back="threshold" aria-label="返回上一级">
                    <span class="header-icon">${icon("i-arrow-left")}</span>
                  </button>
                `
                : ""
            }
            <h3 class="modal-title">
              <span class="modal-icon">${icon("i-settings")}</span>
              <span>${module.thresholdTitle}</span>
            </h3>
          </div>
          <button class="modal-close" type="button" data-close-modal="threshold">
            <span class="header-icon">${icon("i-close")}</span>
          </button>
        </header>
        <div class="modal-body">
          <table class="config-table">
            <thead>
              <tr>
                <th>参数名称</th>
                <th>下限阈值</th>
                <th>上限阈值</th>
                <th>预警阈值</th>
              </tr>
            </thead>
            <tbody>
              ${module.thresholdRows
                .map(
                  (row, index) => `
                    <tr>
                      <td>${row.label}</td>
                      <td><input class="config-input" type="text" value="${row.min}" data-threshold-field="${module.key}|${index}|min" /></td>
                      <td><input class="config-input" type="text" value="${row.max}" data-threshold-field="${module.key}|${index}|max" /></td>
                      <td><input class="config-input" type="text" value="${row.alert}" data-threshold-field="${module.key}|${index}|alert" /></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
          <div class="config-note">
            <span class="header-icon">${icon("i-warning")}</span>
            <span>提示: 预警阈值为数据接近上限/下限时提前提醒的界限</span>
          </div>
          <div class="modal-footer">
            <button class="modal-outline" type="button" data-modal-action="reset-threshold|${module.key}">恢复默认</button>
            <button class="modal-primary" type="button" data-modal-action="save-threshold|${module.key}">保存配置</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderImportModal(module) {
  const importState = state.modal?.module === module.key ? state.modal : {};
  const hasParentModal = Boolean(state.modal?.parentModal);
  const selectedFile = importState.fileName || "";
  const result = importState.importResult || null;
  const footer =
    module.importVariant === "confirm"
      ? `
        <div class="modal-footer is-between">
          <button class="download-button is-full" type="button" data-download-template="${module.key}">
            <span class="header-icon">${icon("i-download")}</span>
            <span>下载导入模板</span>
          </button>
        </div>
        <div class="modal-footer">
          <button class="modal-secondary" type="button" data-close-modal="import">取消</button>
          <button class="modal-primary" type="button" data-modal-action="confirm-import|${module.key}" ${result?.validRows?.length ? "" : "disabled"}>确认导入</button>
        </div>
      `
      : `
        <div class="download-row">
          <button class="download-button" type="button" data-download-template="${module.key}">
            <span class="header-icon">${icon("i-download")}</span>
            <span>下载导入模板</span>
          </button>
        </div>
        <div class="modal-footer">
          <button class="modal-secondary" type="button" data-close-modal="import">取消</button>
          <button class="modal-primary" type="button" data-modal-action="confirm-import|${module.key}" ${result?.validRows?.length ? "" : "disabled"}>确认导入</button>
        </div>
      `;

  return `
    <div class="modal-layer">
      <section class="modal">
        <header class="modal-header">
          <div class="modal-heading">
            ${
              hasParentModal
                ? `
                  <button class="modal-back" type="button" data-modal-back="import" aria-label="返回上一级">
                    <span class="header-icon">${icon("i-arrow-left")}</span>
                  </button>
                `
                : ""
            }
            <h3 class="modal-title">
              <span class="modal-icon">${icon("i-upload")}</span>
              <span>${module.importTitle}</span>
            </h3>
          </div>
          <button class="modal-close" type="button" data-close-modal="import">
            <span class="header-icon">${icon("i-close")}</span>
          </button>
        </header>
        <div class="modal-body">
          <div class="upload-box">
            <input class="service-file-input" type="file" accept=".csv" data-sensor-import-file="${module.key}" />
            <div>
              <div class="upload-plus">+</div>
              <p class="upload-title">${selectedFile ? escapeHtml(selectedFile) : "点击选择CSV文件或使用模板导入"}</p>
              <p class="upload-subtitle">当前静态原型可直接解析 CSV；Excel(.xlsx/.xls)需接入解析库后启用。文件大小限制: 最大10MB</p>
              <div class="requirement-list is-compact">
                <span>文件大小不超过10MB</span>
                <span>需使用模板列名</span>
                <span>必填字段为空时不允许导入</span>
              </div>
            </div>
          </div>
          ${
            result
              ? `
                <section class="gene-section-card sensor-import-result">
                  <div class="gene-section-head">
                    <div><h4>导入校验结果</h4><p class="section-caption">通过 ${result.validRows.length} 条，失败 ${result.errors.length} 条，预警 ${result.warningCount} 条。</p></div>
                  </div>
                  ${
                    result.errors.length
                      ? `<div class="requirement-list is-compact">${result.errors.slice(0, 6).map((msg) => `<span>${escapeHtml(msg)}</span>`).join("")}</div>`
                      : '<p class="section-caption">未发现阻断错误，可确认导入。</p>'
                  }
                </section>
              `
              : ""
          }
          ${footer}
        </div>
      </section>
    </div>
  `;
}

function saveThresholdConfig(moduleKey) {
  const module = sensorModules[moduleKey];
  if (!module) {
    throw new Error("未找到传感器模块");
  }
  const nextRows = module.thresholdRows.map((row, index) => {
    const min = document.querySelector(`[data-threshold-field="${moduleKey}|${index}|min"]`)?.value?.trim() || row.min;
    const max = document.querySelector(`[data-threshold-field="${moduleKey}|${index}|max"]`)?.value?.trim() || row.max;
    const alert = document.querySelector(`[data-threshold-field="${moduleKey}|${index}|alert"]`)?.value?.trim() || row.alert;
    const minNum = Number(min);
    const maxNum = Number(max);
    const alertNum = Number(alert);
    if (![minNum, maxNum, alertNum].every(Number.isFinite)) {
      throw new Error(`${row.label}的阈值必须为数字`);
    }
    if (minNum >= maxNum) {
      throw new Error(`${row.label}下限阈值必须小于上限阈值`);
    }
    if (alertNum < minNum || alertNum > maxNum) {
      throw new Error(`${row.label}预警阈值必须位于上下限之间`);
    }
    return { ...row, min, max, alert };
  });
  module.thresholdRows = nextRows;
  appendOperationLog(moduleKey, `保存${module.label}阈值配置`);
}

function resetThresholdConfig(moduleKey) {
  const defaults =
    moduleKey === "physical"
      ? [
          { label: "温度(℃)", min: "25.0", max: "38.0", alert: "37.0" },
          { label: "罐内压力(kPa)", min: "0.8", max: "1.5", alert: "1.4" },
          { label: "搅拌速度(rpm)", min: "100", max: "500", alert: "450" },
          { label: "气体流量(L/min)", min: "0.5", max: "3.0", alert: "2.8" },
          { label: "pH值", min: "6.0", max: "8.0", alert: "7.5" },
          { label: "溶解氧浓度(mg/L)", min: "2.0", max: "8.0", alert: "7.0" },
          { label: "溶解CO₂浓度(mg/L)", min: "10.0", max: "100.0", alert: "90.0" },
          { label: "排气O₂分压(%)", min: "15.0", max: "21.0", alert: "20.0" },
          { label: "排气CO₂分压(%)", min: "0.03", max: "0.1", alert: "0.09" }
        ]
      : [
          { label: "谷氨酸(g/L)", min: "0", max: "50", alert: "18" },
          { label: "葡萄糖(g/L)", min: "0", max: "100", alert: "80" },
          { label: "丙酮酸(g/L)", min: "0", max: "10", alert: "7" },
          { label: "甘氨酸(g/L)", min: "0", max: "5", alert: "4" },
          { label: "谷氨酰胺(g/L)", min: "0", max: "8", alert: "6" },
          { label: "精氨酸(g/L)", min: "0", max: "5", alert: "4" },
          { label: "组氨酸(g/L)", min: "0", max: "3", alert: "2.2" },
          { label: "色氨酸(g/L)", min: "0", max: "4", alert: "3" },
          { label: "乳酸(g/L)", min: "0", max: "15", alert: "12" },
          { label: "铵根离子(mmol/L)", min: "0", max: "200", alert: "160" },
          { label: "柠檬酸(g/L)", min: "0", max: "10", alert: "8" },
          { label: "亮氨酸(g/L)", min: "0", max: "6", alert: "4.5" },
          { label: "异亮氨酸(g/L)", min: "0", max: "4", alert: "3" },
          { label: "甲硫氨酸(g/L)", min: "0", max: "3", alert: "2.2" },
          { label: "半胱氨酸(g/L)", min: "0", max: "2", alert: "1.5" },
          { label: "赖氨酸(g/L)", min: "0", max: "8", alert: "6" }
        ];
  sensorModules[moduleKey].thresholdRows = defaults;
  appendOperationLog(moduleKey, `恢复${sensorModules[moduleKey].label}默认阈值`);
}

function downloadSensorTemplate(moduleKey) {
  const module = sensorModules[moduleKey];
  const headers = ["批次号", "录入时间", "录入人员", ...module.paramFields.map((field) => field.label)];
  const sampleRow = [state.activeBatch[moduleKey], new Date().toISOString().slice(0, 19).replace("T", " "), getCurrentOperatorName()].concat(
    module.paramFields.map((field, index) => {
      const threshold = module.thresholdRows[index];
      if (!threshold) {
        return "";
      }
      const min = Number(threshold.min);
      const max = Number(threshold.max);
      return Number.isFinite(min) && Number.isFinite(max) ? String(((min + max) / 2).toFixed(2)) : "";
    })
  );
  downloadCsvFile(`${module.label}导入模板.csv`, [headers, sampleRow]);
}

function renderSensorBatchModal(moduleKey, batchId = "") {
  const module = sensorModules[moduleKey];
  const current = batchId ? getSensorBatch(moduleKey, batchId) : null;
  const mode = current ? "edit" : "create";
  const fallbackName = current?.cellName || "";
  const suggestedId = current?.id || "";
  const concentration = current?.badge || "";

  return renderGeneModalShell({
    title: `${mode === "edit" ? "编辑" : "新增"}${module.label}批次`,
    sizeClass: "is-gene-form sensor-batch-modal",
    body: `
      <div class="gene-form-grid">
        ${renderGeneField({
          name: "batchCellName",
          label: "细胞名称",
          value: fallbackName,
          placeholder: "请输入细胞名称",
          rule: "建议使用细胞名称生成批号，例如：细胞名称-时间"
        })}
        ${renderGeneField({
          name: "batchId",
          label: "批次号",
          value: suggestedId,
          placeholder: "请输入批次号",
          rule: "必填，建议格式：细胞名称-YYYYMMDDHHmm，需在当前模块内唯一"
        })}
        ${renderGeneField({
          name: "batchConcentration",
          label: "浓度",
          type: "select",
          value: concentration,
          options: ["高浓度", "中浓度", "低浓度"],
          rule: "必填，用于批次列表标签展示"
        })}
        <div class="gene-field is-full">
          <div class="batch-suggestion-box">
            <span class="header-icon">${icon("i-info")}</span>
            <div>
              <strong>批号建议</strong>
              <p>以“细胞名称 + 当前时间”生成，便于追溯发酵批次。例如：工程细胞-202606161430。</p>
            </div>
            <button class="modal-outline" type="button" data-batch-generate="${moduleKey}">生成建议批号</button>
          </div>
        </div>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="batch">取消</button>
      <button class="modal-primary" type="button" data-batch-submit="${mode}|${moduleKey}|${batchId}">保存批次</button>
    `
  });
}

function renderSensorBatchDeleteModal(moduleKey, batchId = "") {
  const module = sensorModules[moduleKey];
  const batch = getSensorBatch(moduleKey, batchId);
  if (!module || !batch) {
    return "";
  }
  const recordCount = batch.records?.length || 0;
  return renderGeneModalShell({
    title: "删除批次",
    sizeClass: "is-gene-delete sensor-batch-delete-modal",
    body: `
      <div class="gene-delete-body">
        <div class="gene-delete-icon">${icon("i-warning")}</div>
        <h4>确认删除批次 ${escapeHtml(batch.id)} 吗？</h4>
        <p>该批次属于${escapeHtml(module.label)}，浓度为${escapeHtml(batch.badge)}。</p>
        <span>${recordCount ? `该批次下已有 ${recordCount} 条记录，删除后记录将不再展示。` : "该批次暂无录入记录，删除后可重新新增。"}</span>
      </div>
    `,
    footer: `
      <button class="modal-secondary" type="button" data-close-modal="batch-delete">取消</button>
      <button class="modal-primary gene-danger-button" type="button" data-batch-delete="${moduleKey}|${batch.id}">确认删除</button>
    `
  });
}

function renderDetailModal(moduleKey, batchId, recordId) {
  const { module, batch, record } = findRecord(moduleKey, batchId, recordId);
  if (!module || !batch || !record) {
    return "";
  }
  const hasParentModal = Boolean(state.modal?.parentModal);

  const paramBody =
    moduleKey === "physical"
      ? `
        <div class="detail-param-grid">
          ${record.detail
            .map(
              (item) => `
                <div class="detail-param-item">
                  <p>${item.label}</p>
                  <p>${item.value}</p>
                </div>
              `
            )
            .join("")}
        </div>
      `
      : `
        <div class="detail-card-grid">
          ${record.detailCards
            .map(
              (item) => `
                <div class="detail-card-item">
                  <div class="detail-param-item">
                    <p>${item.label}</p>
                    <p>${item.value}</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      `;

  const thresholdBody = (record.thresholdSnapshot || [])
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.label)}</td>
          <td>${escapeHtml(item.min)}</td>
          <td>${escapeHtml(item.alert)}</td>
          <td>${escapeHtml(item.max)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div class="modal-layer">
      <section class="modal is-detail detail-modal">
        <div class="modal-body">
          <div class="detail-head">
            <div class="detail-heading">
              ${
                hasParentModal
                  ? `
                    <button class="detail-back" type="button" data-modal-back="detail" aria-label="返回上一级">
                      <span class="header-icon">${icon("i-arrow-left")}</span>
                    </button>
                  `
                  : ""
              }
              <h3 class="detail-title">${module.detailTitle}</h3>
            </div>
            <button class="detail-close" type="button" data-close-modal="detail">
              <span class="header-icon">${icon("i-close")}</span>
            </button>
          </div>

          <div class="detail-block">
            <h4 class="detail-subtitle">基础信息</h4>
            <div class="detail-info-grid">
              <div class="detail-info-item">
                <p>批次号</p>
                <p>${batch.id}</p>
              </div>
              <div class="detail-info-item">
                <p>录入人员</p>
                <p>${record.user}</p>
              </div>
              <div class="detail-info-item">
                <p>录入时间</p>
                <p>${record.time}</p>
              </div>
              <div class="detail-info-item">
                <p>${moduleKey === "physical" ? "发酵周期" : "状态"}</p>
                <p>${moduleKey === "physical" ? batch.period : `<span class="status-chip ${record.statusClass}">${record.statusText}</span>`}</p>
              </div>
            </div>
          </div>

          <div class="detail-block">
            <h4 class="detail-subtitle">${moduleKey === "physical" ? "物理参数" : "代谢物参数"}</h4>
            ${paramBody}
          </div>

          <div class="detail-block">
            <h4 class="detail-subtitle">预警与阈值信息</h4>
            ${
              record.warnings?.length
                ? `<div class="requirement-list is-compact">${record.warnings.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`
                : '<p class="section-caption">当前记录未触发预警，所有参数均在阈值范围内。</p>'
            }
            ${
              thresholdBody
                ? `
                  <div class="table-scroll gene-inner-table" style="margin-top:12px;">
                    <table class="data-table gene-snp-table">
                      <thead>
                        <tr><th>参数</th><th>下限</th><th>预警值</th><th>上限</th></tr>
                      </thead>
                      <tbody>${thresholdBody}</tbody>
                    </table>
                  </div>
                `
                : ""
            }
          </div>

          <div class="detail-footer">
            <button class="modal-outline" type="button" data-close-modal="detail">关闭</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderModal() {
  if (!state.modal) {
    return "";
  }

  if (state.modal.type === "analysis-form") {
    return renderAnalysisFormModal(state.modal.moduleKey, state.modal.mode, state.modal.itemId);
  }

  if (state.modal.type === "analysis-detail") {
    return renderAnalysisDetailModal(state.modal.moduleKey, state.modal.itemId);
  }

  if (state.modal.type === "analysis-delete") {
    return renderAnalysisDeleteModal(state.modal.moduleKey, state.modal.itemId);
  }

  if (state.modal.type === "full-linked-detail") {
    return state.modal.detailType === "gpa-detail"
      ? renderFullGpaDetailModal(state.modal.itemId)
      : renderFullPredictDetailModal(state.modal.itemId);
  }

  if (state.modal.type === "gene-create") {
    return renderGeneFormModal("create");
  }

  if (state.modal.type === "gene-edit") {
    return renderGeneFormModal("edit", state.modal.projectId);
  }

  if (state.modal.type === "gene-upload") {
    return renderGeneUploadModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-delete") {
    return renderGeneDeleteModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-result") {
    return renderGeneResultModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-snp-list") {
    return renderGeneSnpListModal(state.modal.projectId);
  }

  if (state.modal.type === "gene-snp-detail") {
    return renderGeneSnpDetailModal(state.modal.projectId, state.modal.snpKey);
  }

  if (state.modal.type === "gene-detail") {
    return renderGeneDetailModal(state.modal.projectId, state.modal.tab || "project");
  }

  if (state.modal.type === "gpa-dataset-generate") {
    return renderGpaDatasetGenerateModal(state.modal.source || "search");
  }

  if (state.modal.type === "gpa-dataset-import") {
    return renderGpaDatasetImportModal();
  }

  if (state.modal.type === "gpa-dataset-delete") {
    return renderGpaDatasetDeleteModal(state.modal.datasetId || "");
  }

  if (state.modal.type === "gpa-train-model") {
    return renderGpaTrainModelModal(state.modal.datasetId || "");
  }

  if (state.modal.type === "gpa-model-detail") {
    return renderGpaModelDetailModal(state.modal.modelId || "");
  }

  if (state.modal.type === "gpa-verification") {
    return renderGpaVerificationModal(state.modal.designId || "");
  }

  if (state.modal.type === "threshold") {
    return renderThresholdModal(sensorModules[state.modal.module]);
  }

  if (state.modal.type === "import") {
    return renderImportModal(sensorModules[state.modal.module]);
  }

  if (state.modal.type === "batch") {
    return renderSensorBatchModal(state.modal.module, state.modal.batchId || "");
  }

  if (state.modal.type === "batch-delete") {
    return renderSensorBatchDeleteModal(state.modal.module, state.modal.batchId || "");
  }

  if (state.modal.type === "detail") {
    return renderDetailModal(state.modal.module, state.modal.batchId, state.modal.recordId);
  }

  return "";
}

const __renderModalForSystem = renderModal;
renderModal = function renderModalForSystemPatched() {
  if (state.modal?.type === "user-profile") {
    return renderUserProfileModal();
  }

  if (state.modal?.type === "catalog-detail") {
    return renderCatalogDetailModal(state.modal.itemId);
  }

  if (state.modal?.type === "system-toggle") {
    return renderSystemToggleModal(state.modal.moduleKey, state.modal.itemId);
  }

  if (state.modal?.type === "system-export") {
    return renderSystemExportModal(state.modal.moduleKey);
  }

  if (state.modal?.type === "system-assign-role") {
    return renderAssignRoleModal(state.modal.itemId);
  }

  if (state.modal?.type === "system-permission") {
    return renderRolePermissionModal(state.modal.itemId);
  }

  return __renderModalForSystem();
};

function renderDashboardView() {
  const page =
    isSensorMenu() && state.sensorView[state.activeMenu] === "form"
      ? {
          breadcrumb: sensorModules[state.activeMenu].formBreadcrumb,
          headerTools: false,
          content: renderSensorFormPage(sensorModules[state.activeMenu])
        }
      : isSensorMenu()
        ? {
            breadcrumb: sensorModules[state.activeMenu].listBreadcrumb,
            headerTools: false,
            content: renderSensorListPage(sensorModules[state.activeMenu])
          }
        : state.activeMenu === "dashboard"
          ? {
              breadcrumb: analysisPages.dashboard.breadcrumb,
              headerTools: analysisPages.dashboard.headerTools,
              content: renderDashboardPage()
            }
        : state.activeMenu === "catalog"
          ? {
              breadcrumb: analysisPages.catalog.breadcrumb,
              headerTools: analysisPages.catalog.headerTools,
              content: renderCatalogPage(analysisPages.catalog)
            }
        : {
            breadcrumb: analysisPages[state.activeMenu].breadcrumb,
            headerTools: analysisPages[state.activeMenu].headerTools,
            content: renderAnalysisPage(analysisPages[state.activeMenu])
          };
  const qualityPage = isQualityMenu(state.activeMenu);

  return `
    <section class="app-page ${qualityPage ? "is-quality-page" : ""}">
      ${qualityPage ? "" : renderHeader(page)}
      <div class="page-content">${page.content}</div>
    </section>
    ${renderModal()}
  `;
}

const visualListPageSize = 10;

function renderSpecBreadcrumb(items = []) {
  return `
    <div class="spec-breadcrumb">
      <span class="spec-breadcrumb-home">${icon("i-home")}</span>
      ${items
        .filter((item) => item !== "首页")
        .map((item, index, list) =>
          index === list.length - 1
            ? `<strong>${escapeHtml(item)}</strong>`
            : `<span>${escapeHtml(item)}</span><em>/</em>`
        )
        .join("")}
    </div>
  `;
}

function renderSpecPagination(key, current = 1, pageCount = 20) {
  const visiblePages = [1, 2, 3, 4, 5];
  return `
    <div class="spec-pagination">
      <span class="spec-total">共计 200 条</span>
      <button class="page-button is-plain" type="button" data-page="${key}|${Math.max(1, current - 1)}" aria-label="上一页">‹</button>
      ${visiblePages
        .map(
          (page) => `
            <button class="page-button ${page === current ? "is-active" : ""}" type="button" data-page="${key}|${page}">
              ${page}
            </button>
          `
        )
        .join("")}
      <span class="spec-page-ellipsis">...</span>
      <button class="page-button" type="button" data-page="${key}|${pageCount}">${pageCount}</button>
      <button class="page-button is-plain" type="button" data-page="${key}|${Math.min(pageCount, current + 1)}" aria-label="下一页">›</button>
      <button class="spec-page-size" type="button">10条/页 ${icon("i-chevron")}</button>
    </div>
  `;
}

function renderSpecSelect(filterName, label, options, value, pageKey = "") {
  const attr = pageKey === "catalog" ? `data-catalog-filter="${escapeHtml(filterName)}"` : "";
  return `
    <label class="inline-field">
      <span>${escapeHtml(label)}:</span>
      <span class="filter-control-wrap">
        <select ${attr}>
          ${options.map((option) => `<option ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
        </select>
        <span class="filter-field-icon is-right">${icon("i-chevron")}</span>
      </span>
    </label>
  `;
}

function checkedBox(index, selected = []) {
  return `<div class="row-check ${selected.includes(index) ? "is-checked" : ""}"></div>`;
}

renderHeader = function renderHeader() {
  const currentUser = getCurrentUserProfile();
  const userName = currentUser.name || currentUser.username || "管理员9527";
  const userOrg = currentUser.organization || currentUser.department || "平台运维部";
  return `
    <header class="app-header">
      <div class="top-search" role="search">
        <span>${icon("i-search")}</span>
        <input type="search" placeholder="请输入" aria-label="全局搜索" />
      </div>
      <div class="top-actions">
        <button class="top-tool" type="button" aria-label="应用">${icon("i-table")}<span>应用</span></button>
        <button class="top-tool" type="button" aria-label="帮助">${icon("i-info")}<span>帮助</span></button>
        <div class="top-user-dropdown">
          <button class="top-user" type="button" data-user-menu-trigger aria-haspopup="true">
            <span class="top-user-avatar">${icon("i-user")}</span>
            <span>${escapeHtml(userName)}</span>
            <span class="top-user-caret">${icon("i-chevron")}</span>
          </button>
          <div class="header-user-menu top-user-menu">
            <div class="header-user-menu-head">
              <span class="header-user-avatar is-large">${icon("i-user")}</span>
              <div class="header-user-menu-meta">
                <strong title="${escapeHtml(userName)}">${escapeHtml(userName)}</strong>
                <span title="${escapeHtml(userOrg)}">${escapeHtml(userOrg)}</span>
              </div>
            </div>
            <button class="header-user-menu-item" type="button" data-user-menu-action="portal">
              <span class="header-icon">${icon("i-home")}</span>
              <span>返回门户</span>
            </button>
            <button class="header-user-menu-item" type="button" data-user-menu-action="profile">
              <span class="header-icon">${icon("i-user")}</span>
              <span>用户中心</span>
            </button>
            <button class="header-user-menu-item is-danger" type="button" data-user-menu-action="logout">
              <span class="header-icon">${icon("i-arrow-left")}</span>
              <span>退出登录</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
};

renderSidebar = function renderSidebar() {
  if (state.scene !== "dashboard") {
    sidebarRoot.innerHTML = "";
    return;
  }

  const monitorActive = ["physical", "biological"].includes(state.activeMenu);
  const monitorOpen = state.openNavGroup === "monitor";
  const analysisActive = isAnalysisMenu();
  const analysisOpen = state.openNavGroup === "analysis";
  const standardsOpen = state.openNavGroup === "standards" || state.activeMenu === "standards";
  const ingestionActive = isIngestionMenu();
  const ingestionOpen = state.openNavGroup === "ingestion";
  const qualityActive = isQualityMenu();
  const qualityOpen = state.openNavGroup === "quality";
  const systemOpen = isSystemMenu(state.activeMenu) || state.openNavGroup === "system";

  sidebarRoot.innerHTML = `
    <div class="sidebar-brand">
      <span class="brand-icon">${icon("i-logo")}</span>
      <p class="brand-text">工程细胞主题库</p>
      <button class="sidebar-collapse" type="button" aria-label="收起侧边栏">${icon("i-menu")}</button>
    </div>

    <div class="sidebar-nav">
      <section class="nav-section">
        <p class="nav-title">数据统计</p>
        <button class="nav-link ${state.activeMenu === "dashboard" ? "is-active" : ""}" type="button" data-menu="dashboard">
          <span class="nav-icon">${icon("i-chart")}</span>
          <span>数据看板</span>
        </button>
        <button class="nav-link ${state.activeMenu === "catalog" ? "is-active" : ""}" type="button" data-menu="catalog">
          <span class="nav-icon">${icon("i-list")}</span>
          <span>数据资源目录</span>
        </button>
      </section>

      <section class="nav-section">
        <p class="nav-title">工程细胞数据标准体系</p>
        <button class="nav-group-head ${state.activeMenu === "standards" || standardsOpen ? "is-active" : ""}" type="button" data-menu-group="standards">
          <span class="group-label">
            <span class="nav-icon">${icon("i-doc")}</span>
            <span>工程细胞数据标准体系</span>
          </span>
          <span class="menu-arrow ${standardsOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${standardsOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "gpa" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="gpa">
            <span>GPA获取和分析标准化</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "cell-model" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="cell-model">
            <span>工程细胞模型标准化</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "pilot-params" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="pilot-params">
            <span>小中试参数数字化模型标准化</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "standards" && state.standardsModule === "strain-encrypt" ? "is-active" : ""}" type="button" data-menu="standards" data-standards-module="strain-encrypt">
            <span>菌株保护特殊加密标准化</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">工程细胞数据入库</p>
        <button class="nav-group-head ${ingestionActive || ingestionOpen ? "is-active" : ""}" type="button" data-menu-group="ingestion">
          <span class="group-label">
            <span class="nav-icon">${icon("i-upload")}</span>
            <span>工程细胞数据入库</span>
          </span>
          <span class="menu-arrow ${ingestionOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${ingestionOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "ingestion-gpa" ? "is-active" : ""}" type="button" data-menu="ingestion-gpa">
            <span>GPA数据管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "ingestion-omics" ? "is-active" : ""}" type="button" data-menu="ingestion-omics">
            <span>多组学数据管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "ingestion-fermentation" ? "is-active" : ""}" type="button" data-menu="ingestion-fermentation">
            <span>发酵过程数据</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">工程细胞质量控制</p>
        <button class="nav-group-head ${qualityActive || qualityOpen ? "is-active" : ""}" type="button" data-menu-group="quality">
          <span class="group-label">
            <span class="nav-icon">${icon("i-check")}</span>
            <span>工程细胞质量控制</span>
          </span>
          <span class="menu-arrow ${qualityOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${qualityOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "quality-gpa" ? "is-active" : ""}" type="button" data-menu="quality-gpa" data-quality-module="gpa">
            <span>GPA 数据质量控制</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "quality-omics" ? "is-active" : ""}" type="button" data-menu="quality-omics" data-quality-module="omics">
            <span>组学数据质量控制</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "quality-ferment" ? "is-active" : ""}" type="button" data-menu="quality-ferment" data-quality-module="ferment">
            <span>发酵过程数据质控</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">发酵过程工具</p>
        <button class="nav-group-head ${monitorActive || monitorOpen ? "is-active" : ""}" type="button" data-menu-group="monitor">
          <span class="group-label">
            <span class="nav-icon">${icon("i-clock")}</span>
            <span>发酵过程数据检测工具</span>
          </span>
          <span class="menu-arrow ${monitorOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${monitorOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "physical" ? "is-active" : ""}" type="button" data-menu="physical">
            <span>发酵过程数据检测物理传感器工具</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "biological" ? "is-active" : ""}" type="button" data-menu="biological">
            <span>发酵过程数据检测生物传感器工具</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">数据分析</p>
        <button class="nav-group-head ${analysisActive || analysisOpen ? "is-active" : ""}" type="button" data-menu-group="analysis">
          <span class="group-label">
            <span class="nav-icon">${icon("i-chip")}</span>
            <span>工程细胞数据应用平台</span>
          </span>
          <span class="menu-arrow ${analysisOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${analysisOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "gene" ? "is-active" : ""}" type="button" data-menu="gene">
            <span>基因型-表型数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "omics" ? "is-active" : ""}" type="button" data-menu="omics">
            <span>组学数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "process" ? "is-active" : ""}" type="button" data-menu="process">
            <span>发酵过程分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "full" ? "is-active" : ""}" type="button" data-menu="full">
            <span>全流程数据分析</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "service" ? "is-active" : ""}" type="button" data-menu="service">
            <span>工程细胞服务</span>
          </button>
        </div>
      </section>

      <section class="nav-section">
        <p class="nav-title">系统管理</p>
        <button class="nav-group-head ${systemOpen ? "is-active" : ""}" type="button" data-menu-group="system">
          <span class="group-label">
            <span class="nav-icon">${icon("i-settings")}</span>
            <span>系统管理</span>
          </span>
          <span class="menu-arrow ${systemOpen ? "is-open" : ""}">${icon("i-chevron")}</span>
        </button>
        <div class="nav-submenu ${systemOpen ? "is-open" : ""}">
          <button class="nav-sub-link ${state.activeMenu === "system-users" ? "is-active" : ""}" type="button" data-menu="system-users">
            <span>用户管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-roles" ? "is-active" : ""}" type="button" data-menu="system-roles">
            <span>角色管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-menus" ? "is-active" : ""}" type="button" data-menu="system-menus">
            <span>菜单管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-logs" ? "is-active" : ""}" type="button" data-menu="system-logs">
            <span>操作日志</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-audit" ? "is-active" : ""}" type="button" data-menu="system-audit">
            <span>审核管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-config" ? "is-active" : ""}" type="button" data-menu="system-config">
            <span>平台配置</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-portal-config" ? "is-active" : ""}" type="button" data-menu="system-portal-config">
            <span>门户页配置</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-apis" ? "is-active" : ""}" type="button" data-menu="system-apis">
            <span>接口管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-algorithms" ? "is-active" : ""}" type="button" data-menu="system-algorithms">
            <span>算法管理</span>
          </button>
          <button class="nav-sub-link ${state.activeMenu === "system-datasets" ? "is-active" : ""}" type="button" data-menu="system-datasets">
            <span>数据管理</span>
          </button>
        </div>
      </section>
    </div>
  `;
};

function renderCatalogSpecCard(item, index) {
  const cards = [
    { icon: "i-user", tone: "green" },
    { icon: "i-table", tone: "blue" },
    { icon: "i-bio", tone: "purple" },
    { icon: "i-eye", tone: "orange" }
  ];
  const meta = cards[index] || cards[0];
  return `
    <article class="catalog-category-card is-${meta.tone}">
      <span class="catalog-category-icon">${icon(meta.icon)}</span>
      <div class="catalog-category-main">
        <h3>${escapeHtml(item.name)}</h3>
        <p class="catalog-category-desc">${escapeHtml(item.desc)}</p>
      </div>
      <span class="catalog-card-pattern" aria-hidden="true"></span>
    </article>
  `;
}

renderCatalogPage = function renderCatalogPage(page) {
  const filteredRows = getFilteredCatalogRows(page);
  const pageCount = 20;
  const current = Math.min(state.pagination.catalog || 1, pageCount);
  state.pagination.catalog = current;
  const visualRows = filteredRows.length
    ? Array.from({ length: visualListPageSize }, (_, index) => filteredRows[index % filteredRows.length])
    : [];
  const columns = [
    { key: "name", label: "数据库名称" },
    { key: "category", label: "资源类型" },
    { key: "status", label: "标准化状态" },
    { key: "fields", label: "核心字段" },
    { key: "records", label: "数据量" },
    { key: "format", label: "格式" },
    { key: "actions", label: "操作" }
  ];
  const formats = ["全部", ...new Set(page.rows.map((row) => row.format))];
  const categories = ["全部", ...page.categories.map((item) => item.name)];

  return `
    <div class="page-section catalog-page">
      <section class="catalog-category-grid">
        ${page.categories.map(renderCatalogSpecCard).join("")}
      </section>

      <section class="filter-card catalog-filter-card spec-inline-filters">
        <div class="filter-row">
          <label class="inline-field is-name">
            <span>数据库名称:</span>
            <span class="filter-control-wrap">
              <input data-catalog-filter="keyword" value="${escapeHtml(state.catalogFilters.keyword)}" placeholder="请输入" />
            </span>
          </label>
          ${renderSpecSelect("category", "资源类型", categories, state.catalogFilters.category, "catalog")}
          ${renderSpecSelect("format", "数据格式", formats, state.catalogFilters.format, "catalog")}
          ${renderSpecSelect("status", "标准化状态", ["全部", "已标准化"], state.catalogFilters.status, "catalog")}
          <div class="filter-actions">
            <button class="filter-button" type="button" data-filter-action="search|catalog">查询</button>
            <button class="reset-link" type="button" data-filter-action="reset|catalog">重置</button>
          </div>
        </div>
      </section>

      <div class="spec-toolbar">
        <button class="toolbar-primary" type="button" data-primary-action="catalog-add">${icon("i-plus")}<span>新增</span></button>
        <button class="outline-button" type="button" data-open-modal="import|catalog">批量导入</button>
      </div>

      <section class="table-wrap catalog-table-wrap list-table-wrap">
        <div class="table-scroll">
          <table class="data-table catalog-data-table">
            <thead>
              <tr>
                <th class="checkbox-cell"><div class="row-check is-indeterminate"></div></th>
                ${columns.map((column) => `<th>${escapeHtml(column.label)}${["name", "fields"].includes(column.key) ? '<span class="sort-mark">↕</span>' : ""}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${visualRows
                .map(
                  (row, index) => `
                    <tr>
                      <td class="checkbox-cell">${checkedBox(index, [1, 2, 6])}</td>
                      ${columns.map((column) => `<td>${renderTableCell(row, column, page.key)}</td>`).join("")}
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <div class="table-footer">${renderSpecPagination(page.key, current, pageCount)}</div>
      </section>
    </div>
  `;
};

function renderSensorBatchList(module, activeBatch) {
  const batches = [
    { label: "FB2024010101001", dissolved: "5.6mg/L", badge: "高浓度", badgeClass: "badge-high", state: "异常", tone: "error" },
    { label: "FB2024010101001", dissolved: "5.4mg/L", badge: "中浓度", badgeClass: "badge-mid", state: "预警", tone: "warning" },
    { label: "FB2024010101001", dissolved: "4.6mg/L", badge: "低浓度", badgeClass: "badge-low", state: "运行中", tone: "running" },
    { label: "FB2024010101001", dissolved: "3.6mg/L", badge: "其他", badgeClass: "badge-other", state: "运行中", tone: "running" }
  ];
  const dataId = activeBatch?.id || module.batches[0]?.id || "";
  return batches
    .map(
      (item, index) => `
        <div class="batch-card ${index === 0 ? "is-active" : ""}">
          <button class="batch-select-button" type="button" data-batch="${module.key}|${escapeHtml(dataId)}">
            <div class="batch-top">
              <span class="batch-id">${item.label}</span>
              <span class="batch-badge ${item.badgeClass}">${item.badge}</span>
            </div>
            <p class="batch-dissolved">溶氧：${item.dissolved}</p>
            <div class="batch-status tone-${item.tone}">
              <span class="status-dot"></span>
              <span>${item.state}</span>
            </div>
          </button>
        </div>
      `
    )
    .join("");
}

function renderSensorVisualRows(moduleKey) {
  const rows = [
    ["张三", "37.5℃", "1.2kPa", "6.85", "4.6mg/L", "2024-01-15 10:30:00", "正常", "is-normal"],
    ["李四", "37.8℃", "1.3kPa", "6.92", "5.4mg/L", "2024-01-15 11:00:00", "预警", "is-warning"],
    ["王五", "38.5℃", "1.6kPa", "5.8", "5.6mg/L", "2024-01-15 11:30:00", "异常", "is-error"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"],
    ["王五", "37.5℃", "1.2kPa", "5.8", "4.6mg/L", "2024-01-15 11:30:00", "正常", "is-normal"]
  ];
  return rows
    .map(
      (row, index) => `
        <tr>
          <td class="checkbox-cell">${checkedBox(index, [1, 2, 6])}</td>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
          <td>${row[4]}</td>
          <td>${row[5]}</td>
          <td><span class="table-status ${row[7]}">${row[6]}</span></td>
          <td><button class="table-link" type="button" data-open-modal="detail|${moduleKey}|${sensorModules[moduleKey].batches[0].id}|${sensorModules[moduleKey].batches[0].records[0].id}">查看详情</button></td>
        </tr>
      `
    )
    .join("");
}

renderSensorListPage = function renderSensorListPage(module) {
  const batch = module.batches.find((item) => item.id === state.activeBatch[module.key]) || module.batches[0];
  const current = Math.min(state.pagination[module.key] || 1, 20);
  state.pagination[module.key] = current;

  return `
    <div class="page-section sensor-page">
      <div class="sensor-layout">
        <aside class="batch-panel">
          <div class="sensor-tabs">
            <button class="${module.key === "physical" ? "is-active" : ""}" type="button" data-menu="physical">物理传感器</button>
            <button class="${module.key === "biological" ? "is-active" : ""}" type="button" data-menu="biological">生物传感器</button>
          </div>
          <div class="batch-list">${renderSensorBatchList(module, batch)}</div>
        </aside>

        <section class="sensor-main">
          <div class="summary-strip">
            ${renderSummaryCards([
              { value: "666", label: "总记录数", tone: "blue", note: "同比上周新增" },
              { value: "433", label: "正常数", tone: "green", note: "同比上周新增" },
              { value: "26", label: "预警数", tone: "orange", note: "同比上周新增" },
              { value: "6", label: "异常数", tone: "red", note: "同比上周减少 1↓" }
            ])}
          </div>

          <section class="filter-card sensor-filter-card spec-inline-filters">
            <div class="filter-row">
              <label class="inline-field">
                <span>录入人:</span>
                <span class="filter-control-wrap"><input type="text" placeholder="请输入" /></span>
              </label>
              <label class="inline-field">
                <span>录入时间:</span>
                <span class="filter-control-wrap">
                  <input type="text" placeholder="请选择" />
                  <span class="filter-field-icon is-right">${icon("i-calendar")}</span>
                </span>
              </label>
              <label class="inline-field">
                <span>状态:</span>
                <span class="filter-control-wrap">
                  <select data-status-filter="${module.key}">
                    <option value="all">请选择</option>
                    <option value="is-normal">正常</option>
                    <option value="is-warning">预警</option>
                    <option value="is-error">异常</option>
                  </select>
                  <span class="filter-field-icon is-right">${icon("i-chevron")}</span>
                </span>
              </label>
              <div class="filter-actions">
                <button class="filter-button" type="button">查询</button>
                <button class="reset-link" type="button">重置</button>
              </div>
            </div>
          </section>

          <div class="spec-toolbar">
            <button class="outline-button" type="button" data-open-modal="import|${module.key}">批量导入</button>
            <button class="outline-button" type="button" data-open-modal="threshold|${module.key}">阈值配置</button>
            <button class="toolbar-primary" type="button" data-open-form="${module.key}">${icon("i-plus")}<span>新增</span></button>
          </div>

          <section class="table-wrap sensor-table-wrap">
            <div class="table-scroll">
              <table class="data-table sensor-data-table">
                <thead>
                  <tr>
                    <th class="checkbox-cell"><div class="row-check is-indeterminate"></div></th>
                    <th>录入人</th>
                    <th>温度</th>
                    <th>压力</th>
                    <th>pH <span class="sort-mark">↕</span></th>
                    <th>溶氧</th>
                    <th>录入时间 <span class="sort-mark">↕</span></th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>${renderSensorVisualRows(module.key)}</tbody>
              </table>
            </div>
            <div class="table-footer">${renderSpecPagination(module.key, current, 20)}</div>
          </section>
        </section>
      </div>
    </div>
  `;
};

function renderFullAnalysisSpecPage(page) {
  const current = Math.min(state.pagination[page.key] || 1, 20);
  state.pagination[page.key] = current;
  const rows = [
    ["谷氨酸全流程优化分析", "谷氨酸棒杆菌", "已验证", "is-valid"],
    ["赖氨酸生产菌株全流程分析", "大肠杆菌", "待验证", "is-warning"],
    ["乙醇发酵全流程优化", "酵母菌", "验证中", "is-progress"],
    ["芽孢杆菌蛋白酶全流程分析", "芽孢杆菌", "已验证", "is-valid"],
    ["有机酸生产菌株全流程优化", "大肠杆菌", "已验证", "is-valid"],
    ["有机酸生产菌株全流程优化", "芽孢杆菌", "已验证", "is-valid"],
    ["有机酸生产菌株全流程优化", "芽孢杆菌", "已验证", "is-valid"],
    ["有机酸生产菌株全流程优化", "芽孢杆菌", "已验证", "is-valid"],
    ["有机酸生产菌株全流程优化", "芽孢杆菌", "已验证", "is-valid"],
    ["有机酸生产菌株全流程优化", "芽孢杆菌", "已验证", "is-valid"]
  ];

  return `
    <div class="page-section analysis-page visual-list-page">
      <section class="filter-card analysis-filter-card spec-inline-filters">
        <div class="filter-row">
          <label class="inline-field is-project">
            <span>项目名称:</span>
            <span class="filter-control-wrap"><input placeholder="请输入" /></span>
          </label>
          ${renderSpecSelect("strain", "菌株类型", ["请选择", "谷氨酸棒杆菌", "大肠杆菌", "酵母菌", "芽孢杆菌"], "请选择")}
          ${renderSpecSelect("model", "模型类型", ["请选择", "全流程模型", "代谢网络模型", "参数预测模型"], "请选择")}
          ${renderSpecSelect("status", "分析状态", ["请选择", "已验证", "待验证", "验证中"], "请选择")}
          <div class="filter-actions">
            <button class="filter-button" type="button" data-filter-action="search|${page.key}">查询</button>
            <button class="reset-link" type="button" data-filter-action="reset|${page.key}">重置</button>
          </div>
        </div>
      </section>

      <div class="spec-toolbar is-split">
        <button class="outline-button" type="button" data-open-modal="import|${page.key}">批量导入</button>
        <button class="toolbar-primary" type="button" data-primary-action="${page.key}">${icon("i-plus")}<span>新增</span></button>
      </div>

      <section class="table-wrap analysis-table-wrap list-table-wrap">
        <div class="table-scroll">
          <table class="data-table full-data-table">
            <thead>
              <tr>
                <th class="checkbox-cell"><div class="row-check is-indeterminate"></div></th>
                <th>项目名称 <span class="sort-mark">↕</span></th>
                <th>菌株类型</th>
                <th>状态</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (row, index) => `
                    <tr>
                      <td class="checkbox-cell">${checkedBox(index, [1, 2, 6])}</td>
                      <td>${row[0]}</td>
                      <td>${row[1]}</td>
                      <td><span class="table-status ${row[3]}">${row[2]}</span></td>
                      <td>2024-01-15 10:30</td>
                      <td>
                        <div class="table-actions">
                          <button class="table-link" type="button" data-table-page="${page.key}" data-table-action="编辑" data-table-target="${escapeHtml(row[0])}">编辑</button>
                          <button class="table-link" type="button" data-table-page="${page.key}" data-table-action="查看结果" data-table-target="${escapeHtml(row[0])}">详情</button>
                          <button class="table-link is-danger" type="button" data-table-page="${page.key}" data-table-action="删除" data-table-target="${escapeHtml(row[0])}">删除</button>
                        </div>
                      </td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <div class="table-footer">${renderSpecPagination(page.key, current, 20)}</div>
      </section>
    </div>
  `;
}

const renderAnalysisPageBase = renderAnalysisPage;
renderAnalysisPage = function renderAnalysisPage(page) {
  if (page.key === "full") {
    return renderFullAnalysisSpecPage(page);
  }
  return renderAnalysisPageBase(page);
};

renderDashboardView = function renderDashboardView() {
  const page =
    isSensorMenu() && state.sensorView[state.activeMenu] === "form"
      ? {
          breadcrumb: sensorModules[state.activeMenu].formBreadcrumb,
          headerTools: false,
          content: renderSensorFormPage(sensorModules[state.activeMenu])
        }
      : isSensorMenu()
        ? {
            breadcrumb: sensorModules[state.activeMenu].listBreadcrumb,
            headerTools: false,
            content: renderSensorListPage(sensorModules[state.activeMenu])
          }
        : state.activeMenu === "dashboard"
          ? {
              breadcrumb: analysisPages.dashboard.breadcrumb,
              headerTools: analysisPages.dashboard.headerTools,
              content: renderDashboardPage()
            }
        : state.activeMenu === "catalog"
          ? {
              breadcrumb: analysisPages.catalog.breadcrumb,
              headerTools: analysisPages.catalog.headerTools,
              content: renderCatalogPage(analysisPages.catalog)
            }
        : {
            breadcrumb: analysisPages[state.activeMenu].breadcrumb,
            headerTools: analysisPages[state.activeMenu].headerTools,
            content: renderAnalysisPage(analysisPages[state.activeMenu])
          };

  return `
    <section class="app-page">
      ${renderHeader(page)}
      <div class="page-content">
        <div class="spec-frame">
          ${renderSpecBreadcrumb(page.breadcrumb)}
          <div class="spec-workarea">${page.content}</div>
        </div>
      </div>
      ${renderModal()}
    </section>
  `;
};

function renderView() {
  viewRoot.innerHTML = state.scene === "auth" ? renderAuthView(state.authView) : renderDashboardView();
}

function renderApp() {
  renderSidebar();
  renderView();
  syncShellState();
}

function validateCaptcha(expected, actual) {
  return expected.toUpperCase() === actual.trim().toUpperCase();
}

function isStrongPassword(value) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,20}$/.test(value);
}

function passwordStrength(value) {
  let level = 0;
  if (value.length >= 8) {
    level = 1;
  }
  if (/[A-Za-z]/.test(value) && /\d/.test(value) && value.length >= 8) {
    level = 2;
  }
  if (/[A-Za-z]/.test(value) && /\d/.test(value) && /[^A-Za-z\d]/.test(value) && value.length >= 8) {
    level = 3;
  }
  return level;
}

function updateStrengthMeter(value) {
  const meter = document.querySelector("#strengthMeter");
  const text = document.querySelector("#strengthText");
  if (!meter || !text) {
    return;
  }

  const level = passwordStrength(value);
  [...meter.children].forEach((bar, index) => {
    bar.classList.toggle("is-on", index < level);
  });

  if (level === 0) {
    text.textContent = "S: 密码需包含字母、数字和特殊字符";
    text.style.color = "#ff5b5b";
  } else if (level === 1) {
    text.textContent = "强度较弱，请补充字母和数字组合";
    text.style.color = "#ff7a7a";
  } else if (level === 2) {
    text.textContent = "强度中等，建议再加入特殊字符";
    text.style.color = "#f39800";
  } else {
    text.textContent = "密码强度良好";
    text.style.color = "#20a653";
  }
}

function refreshCaptcha(key) {
  state.captchaCodes[key] = generateCaptcha();
  document.querySelectorAll(`[data-captcha-value="${key}"]`).forEach((node) => {
    node.textContent = state.captchaCodes[key];
  });
  if (key === "login") {
    const loginCaptchaInput = document.querySelector("#loginCaptcha");
    if (loginCaptchaInput) {
      loginCaptchaInput.value = state.captchaCodes.login;
    }
  }
}

function resetSensorToList(menuKey) {
  if (isSensorMenu(menuKey)) {
    state.sensorView[menuKey] = "list";
    state.openNavGroup = "monitor";
    state.modal = null;
  }
}

function handleLoginSubmit(form) {
  const data = new FormData(form);
  const account = String(data.get("account") || "").trim();
  const password = String(data.get("password") || "").trim();
  const captcha = String(data.get("captcha") || "").trim();

  if (!account || !password || !captcha) {
    showToast("请完整填写登录信息");
    return;
  }
  if (!validateCaptcha(state.captchaCodes.login, captcha)) {
    showToast("验证码不正确，请重新输入");
    refreshCaptcha("login");
    return;
  }
  const matchedUser =
    systemPages["system-users"]?.rows?.find((row) => [row.account, row.username, row.email].some((value) => String(value || "") === account)) ||
    null;
  const isDefaultAccount = account === defaultLoginCredentials.account && password === defaultLoginCredentials.password;
  if (!isDefaultAccount && (!matchedUser || !isStrongPassword(password))) {
    appendOperationLog("auth", `登录失败：${account}`, "失败");
    showToast("账号或密码不正确，请核对后重试");
    refreshCaptcha("login");
    return;
  }

  const user = {
    account,
    name: matchedUser?.name || "张明",
    role: matchedUser?.role || "系统管理员",
    department: matchedUser?.department || matchedUser?.organization || "平台运维部"
  };
  const session = {
    token: createSessionToken(account),
    account,
    user,
    loginAt: new Date().toISOString(),
    expiresAt: Date.now() + 30 * 60 * 1000
  };
  state.currentUser = user;
  writeAuthSession(session);
  state.scene = "dashboard";
  state.activeMenu = "dashboard";
  state.openNavGroup = "";
  state.sensorView.physical = "list";
  state.sensorView.biological = "list";
  state.statusFilter.physical = "all";
  state.statusFilter.biological = "all";
  state.pagination.physical = 1;
  state.pagination.biological = 1;
  state.modal = null;
  renderApp();
  appendOperationLog("auth", `用户 ${account} 登录系统，token已生成`);
  showToast("登录成功，已进入数据看板页面");
}

function handleRegisterSubmit(form) {
  const data = new FormData(form);
  const username = String(data.get("username") || "").trim();
  const organization = String(data.get("organization") || "").trim();
  const password = String(data.get("password") || "").trim();
  const confirmPassword = String(data.get("confirmPassword") || "").trim();
  const captcha = String(data.get("captcha") || "").trim();
  const agreement = data.get("agreement");

  if (!username || !organization || !password || !confirmPassword || !captcha) {
    showToast("请完整填写注册信息");
    return;
  }
  if (!/^[A-Za-z0-9_]{4,20}$/.test(username)) {
    showToast("用户名需为4-20位字母、数字或下划线");
    return;
  }
  if (!isStrongPassword(password)) {
    showToast("密码需包含字母、数字和特殊字符");
    return;
  }
  if (password !== confirmPassword) {
    showToast("两次输入的密码不一致");
    return;
  }
  if (!validateCaptcha(state.captchaCodes.register, captcha)) {
    showToast("图片验证码不正确");
    refreshCaptcha("register");
    return;
  }
  if (!agreement) {
    showToast("请先同意用户服务协议和隐私政策");
    return;
  }

  state.authView = "login";
  renderApp();
  showToast("注册成功，请返回登录");
}

function handleRecoverSubmit(form) {
  const data = new FormData(form);
  const account = String(data.get("account") || "").trim();
  const password = String(data.get("password") || "").trim();
  const confirmPassword = String(data.get("confirmPassword") || "").trim();
  const captcha = String(data.get("captcha") || "").trim();

  if (!account || !password || !confirmPassword || !captcha) {
    showToast("请完整填写找回密码信息");
    return;
  }
  if (!validateCaptcha(state.captchaCodes.recover, captcha)) {
    showToast("验证码不正确，请重新输入");
    refreshCaptcha("recover");
    return;
  }
  if (!isStrongPassword(password)) {
    showToast("新密码强度不足");
    return;
  }
  if (password !== confirmPassword) {
    showToast("两次输入的新密码不一致");
    return;
  }

  state.authView = "login";
  renderApp();
  showToast("密码已重置，请重新登录");
}

function handleLogout() {
  appendOperationLog("auth", `用户 ${getCurrentAccount()} 退出系统`);
  clearAuthSession();
  state.currentUser = null;
  state.scene = "auth";
  state.authView = "login";
  state.activeMenu = "dashboard";
  state.openNavGroup = "";
  state.sensorView.physical = "list";
  state.sensorView.biological = "list";
  state.statusFilter.physical = "all";
  state.statusFilter.biological = "all";
  state.pagination.physical = 1;
  state.pagination.biological = 1;
  state.modal = null;
  state.sidebarOpen = false;
  refreshCaptcha("login");
  renderApp();
  showToast("已退出系统，请重新登录");
}

document.addEventListener("click", async (event) => {
  const authViewButton = event.target.closest("[data-auth-view]");
  if (authViewButton) {
    state.authView = authViewButton.dataset.authView;
    renderApp();
    return;
  }

  const userMenuActionButton = event.target.closest("[data-user-menu-action]");
  if (userMenuActionButton) {
    const action = userMenuActionButton.dataset.userMenuAction;
    if (action === "portal") {
      writePortalReturnTip("您已从系统返回门户，可继续查看平台能力与核心数据。");
      window.location.href = "./index.html";
      return;
    }
    if (action === "profile") {
      const parentModal = state.modal ? { ...state.modal } : null;
      state.modal = { type: "user-profile", parentModal };
      renderApp();
      return;
    }
    if (action === "logout") {
      handleLogout();
      return;
    }
  }

  const logoutButton = event.target.closest("[data-logout]");
  if (logoutButton) {
    handleLogout();
    return;
  }

  const menuButton = event.target.closest("[data-menu]");
  if (menuButton) {
    state.activeMenu = menuButton.dataset.menu;
    if (menuButton.dataset.standardsModule) {
      state.standardsModule = menuButton.dataset.standardsModule;
    }
    if (menuButton.dataset.qualityModule) {
      state.qualityModule = menuButton.dataset.qualityModule;
    }
    state.openNavGroup = getMenuGroupForMenu(state.activeMenu);
    if (isSensorMenu(state.activeMenu)) {
      state.sensorView[state.activeMenu] = "list";
    }
    state.modal = null;
    state.sidebarOpen = false;
    renderApp();
    return;
  }

  const gpaTabButton = event.target.closest("[data-gpa-tab]");
  if (gpaTabButton) {
    state.gpa.tab = gpaTabButton.dataset.gpaTab;
    renderApp();
    return;
  }

  const gpaQuickButton = event.target.closest("[data-gpa-quick]");
  if (gpaQuickButton) {
    const tag = gpaQuickTags[Number(gpaQuickButton.dataset.gpaQuick)];
    if (tag) {
      state.gpa.compound = tag.compound;
      state.gpa.phenotype = tag.phenotype;
      state.gpa.chassis = tag.chassis;
      state.gpa.pathContext = gpaCurrentQueryLabel();
      const first = gpaFilteredSearchRecords()[0];
      state.gpa.selectedGene = first?.id || state.gpa.selectedGene;
      state.gpa.tab = "search";
      renderApp();
    }
    return;
  }

  const gpaSearchButton = event.target.closest("[data-gpa-search]");
  if (gpaSearchButton) {
    const compound = document.querySelector('[data-gpa-field="compound"]')?.value?.trim() || "";
    const phenotype = document.querySelector('[data-gpa-field="phenotype"]')?.value?.trim() || "";
    const chassis = document.querySelector('[data-gpa-field="chassis"]')?.value?.trim() || "";
    if (compound && !phenotype) {
      showToast("请选择表型类型");
      return;
    }
    state.gpa.compound = compound;
    state.gpa.phenotype = phenotype;
    state.gpa.chassis = chassis;
    state.gpa.pathContext = gpaCurrentQueryLabel();
    const first = gpaFilteredSearchRecords()[0];
    state.gpa.selectedGene = first?.id || "";
    if (!first) {
      showToast(`未找到与“${compound || phenotype || "当前条件"}”相关的数据`);
    }
    renderApp();
    return;
  }

  const gpaSelectGene = event.target.closest("[data-gpa-select-gene]");
  if (gpaSelectGene) {
    state.gpa.selectedGene = gpaSelectGene.dataset.gpaSelectGene;
    renderApp();
    return;
  }

  const gpaSelectPath = event.target.closest("[data-gpa-path]");
  if (gpaSelectPath) {
    state.gpa.selectedPath = gpaSelectPath.dataset.gpaPath;
    renderApp();
    return;
  }

  const gpaSelectDesign = event.target.closest("[data-gpa-design]");
  if (gpaSelectDesign) {
    state.gpa.selectedDesign = gpaSelectDesign.dataset.gpaDesign;
    renderApp();
    return;
  }

  const gpaPathMark = event.target.closest("[data-gpa-path-mark]");
  if (gpaPathMark) {
    const path = getGpaPath(gpaPathMark.dataset.gpaPathMark);
    if (path) {
      path.status = "重点关注";
      renderApp();
      showToast("已标记为重点关注");
    }
    return;
  }

  const gpaPathIgnore = event.target.closest("[data-gpa-path-ignore]");
  if (gpaPathIgnore) {
    const path = getGpaPath(gpaPathIgnore.dataset.gpaPathIgnore);
    if (path) {
      path.status = "已忽略";
      renderApp();
      showToast("已从后续分析中忽略");
    }
    return;
  }

  const gpaActionButton = event.target.closest("[data-gpa-action]");
  if (gpaActionButton) {
    const action = gpaActionButton.dataset.gpaAction;
    if (action === "clear-search") {
      state.gpa.compound = "";
      state.gpa.phenotype = "";
      state.gpa.chassis = "";
      state.gpa.pathContext = "全部GPA数据";
      state.gpa.selectedGene = gpaFilteredSearchRecords()[0]?.id || "";
      state.gpa.tab = "search";
      renderApp();
      return;
    }
    if (action === "view-network") {
      if (!state.gpa.selectedGene) {
        showToast("请先选择基因");
        return;
      }
      state.gpa.pathContext = gpaCurrentQueryLabel();
      state.gpa.tab = "path";
      renderApp();
      return;
    }
    if (["join-dataset", "generate-dataset", "generate-dataset-from-path"].includes(action)) {
      state.modal = { type: "gpa-dataset-generate", source: action === "generate-dataset-from-path" ? "path" : "search" };
      renderApp();
      return;
    }
    if (action === "import-dataset") {
      state.modal = { type: "gpa-dataset-import" };
      renderApp();
      return;
    }
    if (action === "run-stat") {
      window.clearTimeout(gpaStatTimer);
      state.gpa.statRunning = true;
      state.gpa.statDone = false;
      renderApp();
      gpaStatTimer = window.setTimeout(() => {
        state.gpa.statRunning = false;
        state.gpa.statDone = true;
        renderApp();
        showToast("统计分析已完成");
      }, 900);
      return;
    }
    if (action === "run-ai") {
      window.clearTimeout(gpaAiTimer);
      state.gpa.aiTraining = true;
      state.gpa.aiTrained = false;
      state.gpa.aiStep = 4;
      renderApp();
      gpaAiTimer = window.setTimeout(() => {
        state.gpa.aiTraining = false;
        state.gpa.aiTrained = true;
        state.gpa.aiStep = 5;
        renderApp();
        showToast("AI分析训练已完成");
      }, 1100);
      return;
    }
    if (action === "save-ai-model") {
      const dataset = getGpaDataset(state.gpa.selectedDataset);
      const model = gpaBuildModelPayload({ modelName: `${dataset?.name || "GPA"}AI模型`, datasetId: dataset?.id || "", algorithm: "XGBoost", source: "ai" });
      gpaStoreModel(model);
      renderApp();
      showToast("已保存至模型管理");
      return;
    }
    if (action === "train-model") {
      state.modal = { type: "gpa-train-model", datasetId: state.gpa.selectedDataset };
      renderApp();
      return;
    }
    if (action === "download-gpa-template") {
      downloadGpaDatasetTemplate();
      showToast("导入模板已下载");
      return;
    }
    if (action === "download-prediction") {
      downloadGpaPredictionResult();
      showToast("预测结果已导出");
      return;
    }
    if (action === "add-ai-prediction") {
      gpaAppendPredictionDataset();
      renderApp();
      showToast("预测数据已加入数据集");
      return;
    }
    if (action === "generate-design-from-ai") {
      gpaCreateDesignFromModel(state.gpa.selectedModel);
      renderApp();
      showToast("已根据预测结果生成设计方案");
      return;
    }
    if (action === "generate-design") {
      gpaCreateDesignFromModel(state.gpa.selectedModel);
      renderApp();
      showToast("已生成设计方案");
      return;
    }
    if (action === "verify-design") {
      state.modal = { type: "gpa-verification", designId: state.gpa.selectedDesign };
      renderApp();
      return;
    }
  }

  const gpaDatasetAction = event.target.closest("[data-gpa-dataset-action]");
  if (gpaDatasetAction) {
    const [action, datasetId] = gpaDatasetAction.dataset.gpaDatasetAction.split("|");
    const dataset = getGpaDataset(datasetId);
    if (!dataset) {
      showToast("未找到数据集");
      return;
    }
    if (action === "ai") {
      state.gpa.selectedDataset = dataset.id;
      state.gpa.aiStep = 1;
      state.gpa.tab = "analysis";
      renderApp();
      return;
    }
    if (action === "train") {
      state.gpa.selectedDataset = dataset.id;
      state.modal = { type: "gpa-train-model", datasetId: dataset.id };
      renderApp();
      return;
    }
    if (action === "delete") {
      if (dataset.locked || gpaDatasetInUse(dataset.id)) {
        showToast("数据集正在被任务使用，不能删除");
        return;
      }
      state.modal = { type: "gpa-dataset-delete", datasetId: dataset.id };
      renderApp();
      return;
    }
  }

  const gpaModelAction = event.target.closest("[data-gpa-model-action]");
  if (gpaModelAction) {
    const [action, modelId] = gpaModelAction.dataset.gpaModelAction.split("|");
    const model = getGpaModel(modelId);
    if (!model) {
      showToast("未找到模型");
      return;
    }
    if (action === "detail") {
      state.modal = { type: "gpa-model-detail", modelId: model.id };
      renderApp();
      return;
    }
    if (action === "design") {
      if (model.status !== "已完成") {
        showToast("仅已完成模型可生成设计方案");
        return;
      }
      state.modal = null;
      state.gpa.selectedModel = model.id;
      gpaCreateDesignFromModel(model.id);
      renderApp();
      showToast("已生成设计方案");
      return;
    }
  }

  const gpaAiStepButton = event.target.closest("[data-gpa-ai-step]");
  if (gpaAiStepButton) {
    state.gpa.aiStep = Math.max(1, Math.min(5, Number(gpaAiStepButton.dataset.gpaAiStep) || 1));
    renderApp();
    return;
  }

  const gpaAiPrevButton = event.target.closest("[data-gpa-ai-prev]");
  if (gpaAiPrevButton) {
    state.gpa.aiStep = Math.max(1, (state.gpa.aiStep || 1) - 1);
    renderApp();
    return;
  }

  const gpaAiNextButton = event.target.closest("[data-gpa-ai-next]");
  if (gpaAiNextButton) {
    state.gpa.aiStep = Math.min(5, (state.gpa.aiStep || 1) + 1);
    renderApp();
    return;
  }

  const gpaSubmitButton = event.target.closest("[data-gpa-submit]");
  if (gpaSubmitButton) {
    const [action, value = ""] = gpaSubmitButton.dataset.gpaSubmit.split("|");
    try {
      if (action === "generate-dataset") {
        const dataset = {
          id: generateSystemLocalId("gpa-data"),
          name: gpaReadValue("gpaDatasetName") || "GPA生成数据集",
          source: gpaReadValue("gpaDatasetSource") || "检索生成",
          records: Number(gpaReadValue("gpaDatasetRecords")) || 0,
          features: Number(gpaReadValue("gpaDatasetFeatures")) || 0,
          status: "就绪",
          time: gpaNowDateTag(),
          locked: false,
          note: gpaReadValue("gpaDatasetNote") || (value === "path" ? "由调控路径分析生成" : "由GPA检索结果生成")
        };
        gpaStoreDataset(dataset);
        state.modal = null;
        renderApp();
        showToast("数据集已生成");
        return;
      }
      if (action === "import-dataset") {
        const name = gpaReadValue("gpaImportName") || state.gpa.importFileName;
        if (!name) {
          throw new Error("请输入数据集名称或选择文件");
        }
        const dataset = {
          id: generateSystemLocalId("gpa-data"),
          name,
          source: gpaReadValue("gpaImportSource") || "实验导入",
          records: Number(gpaReadValue("gpaImportRecords")) || 0,
          features: Number(gpaReadValue("gpaImportFeatures")) || 0,
          status: "就绪",
          time: gpaNowDateTag(),
          locked: false,
          note: state.gpa.importFileName ? `文件：${state.gpa.importFileName}` : "用户手动导入"
        };
        state.gpa.importFileName = "";
        state.gpa.importFileSize = 0;
        gpaStoreDataset(dataset);
        state.modal = null;
        renderApp();
        showToast("数据集已导入");
        return;
      }
      if (action === "train-model") {
        const datasetId = gpaReadValue("trainDataset") || state.gpa.selectedDataset;
        const algorithm = gpaReadValue("gpaAlgorithm") || "随机森林";
        const model = gpaBuildModelPayload({ modelName: gpaReadValue("gpaModelName"), datasetId, algorithm });
        state.modal = null;
        state.gpa.tab = "model";
        window.clearTimeout(gpaTrainTimer);
        gpaTrainTimer = window.setTimeout(() => {
          gpaStoreModel(model);
          renderApp();
          showToast("模型训练已完成");
        }, 500);
        renderApp();
        return;
      }
      if (action === "delete-dataset") {
        const dataset = getGpaDataset(value);
        if (!dataset) {
          throw new Error("未找到数据集");
        }
        if (dataset.locked || gpaDatasetInUse(dataset.id)) {
          throw new Error("数据集正在被任务使用，不能删除");
        }
        state.gpaDatasets = state.gpaDatasets.filter((item) => item.id !== dataset.id);
        if (state.gpa.selectedDataset === dataset.id) {
          state.gpa.selectedDataset = state.gpaDatasets[0]?.id || "";
        }
        state.modal = null;
        renderApp();
        showToast("数据集已删除");
        return;
      }
      if (action === "verify") {
        gpaCompleteVerification(value);
        state.modal = null;
        renderApp();
        showToast("验证结果已回流，模型版本已更新");
        return;
      }
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const dashboardChartRangeButton = event.target.closest("[data-dashboard-chart-range]");
  if (dashboardChartRangeButton) {
    const [chartKey, range] = dashboardChartRangeButton.dataset.dashboardChartRange.split("|");
    state.dashboardChartRanges = {
      ...(state.dashboardChartRanges || {}),
      [chartKey]: range
    };
    renderApp();
    return;
  }

  const dashboardExportNowButton = event.target.closest("[data-dashboard-export]");
  if (dashboardExportNowButton) {
    const metrics = getDashboardMetrics();
    const storageCount = Math.round((metrics.totalRecords || 0) * 10000);
    const rows = [
      ["指标", "数值"],
      ["资源数据总量", formatWan(metrics.totalRecords)],
      ["数据审核通过率", `${metrics.standardRate}%`],
      ["入库数据数量", storageCount],
      ["分析项目数", metrics.projects],
      ["传感器记录数", metrics.sensorRecords],
      ["工程细胞服务条目", metrics.serviceTotal]
    ];
    downloadCsvFile("工程细胞主题库数据看板.csv", rows);
    appendOperationLog("dashboard", "导出数据看板报表");
    showToast("数据看板报表已导出");
    return;
  }

  const dashboardRangeButton = event.target.closest("[data-dashboard-range]");
  if (dashboardRangeButton) {
    state.dashboardRange = dashboardRangeButton.dataset.dashboardRange;
    renderApp();
    return;
  }

  const algorithmLanguageButton = event.target.closest("[data-algorithm-language]");
  if (algorithmLanguageButton) {
    state.algorithmPlayground.language = algorithmLanguageButton.dataset.algorithmLanguage;
    renderApp();
    return;
  }

  const algorithmCopyButton = event.target.closest("[data-algorithm-copy]");
  if (algorithmCopyButton) {
    const capability = getAlgorithmCapability(algorithmCopyButton.dataset.algorithmCopy);
    const language = state.algorithmPlayground.language || "python";
    const content = capability.requestExample?.[language] || "";
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(content).catch(() => {});
    }
    showToast(`已复制${language.toUpperCase()}示例代码`);
    return;
  }

  const algorithmRunButton = event.target.closest("[data-algorithm-run]");
  if (algorithmRunButton) {
    const capability = getAlgorithmCapability(algorithmRunButton.dataset.algorithmRun);
    const values = [...document.querySelectorAll("[data-algorithm-field]")].reduce((acc, node) => {
      acc[node.dataset.algorithmField] = node.value.trim();
      return acc;
    }, {});
    state.algorithmPlayground.form = {
      ...state.algorithmPlayground.form,
      ...values
    };
    state.algorithmPlayground.result = JSON.stringify(
      {
        tool: capability.title,
        status: capability.row.status?.text === "启用" ? "success" : "offline",
        request: state.algorithmPlayground.form,
        result:
          capability.row.status?.text === "启用"
            ? {
                summary: `已完成 ${state.algorithmPlayground.form.time_range} 时间范围内的 ${state.algorithmPlayground.form.target_type} 基础分析`,
                comparison_targets: state.algorithmPlayground.form.comparison_targets,
                endpoint: capability.endpoint
              }
            : {
                summary: "当前算法处于停用状态，无法发起在线测试"
              }
      },
      null,
      2
    );
    renderApp();
    showToast(capability.row.status?.text === "启用" ? "在线测试已执行" : "当前算法未启用");
    return;
  }

  const algorithmClearButton = event.target.closest("[data-algorithm-clear]");
  if (algorithmClearButton) {
    state.algorithmPlayground.result = "";
    renderApp();
    showToast("响应结果已清空");
    return;
  }

  const dashboardExportButton = event.target.closest("[data-dashboard-export]");
  if (dashboardExportButton) {
    const metrics = getDashboardMetrics();
    const rows = [
      ["指标", "数值"],
      ["资源数据总量", formatWan(metrics.totalRecords)],
      ["标准化通过率", `${metrics.standardRate}%`],
      ["待审核入库", metrics.auditQueue],
      ["分析项目数", metrics.projects],
      ["传感器记录数", metrics.sensorRecords],
      ["工程细胞服务条目", metrics.serviceTotal]
    ];
    downloadCsvFile("工程细胞主题库数据看板.csv", rows);
    appendOperationLog("dashboard", "导出数据看板报表");
    showToast("数据看板报表已导出");
    return;
  }

  const menuGroupButton = event.target.closest("[data-menu-group]");
  if (menuGroupButton) {
    const groupKey = menuGroupButton.dataset.menuGroup;
    state.openNavGroup = state.openNavGroup === groupKey ? "" : groupKey;
    renderApp();
    return;
  }

  const portalImageTrigger = event.target.closest("[data-portal-image-trigger]");
  if (portalImageTrigger) {
    document.querySelector(`[data-portal-image-input="${portalImageTrigger.dataset.portalImageTrigger}"]`)?.click();
    return;
  }

  const portalLinkRemoveButton = event.target.closest("[data-portal-link-remove]");
  if (portalLinkRemoveButton) {
    const config = collectPortalConfigFormValues();
    config.links.splice(Number(portalLinkRemoveButton.dataset.portalLinkRemove), 1);
    refreshPortalLinkList(config);
    showToast("友情链接已移除，请保存后生效");
    return;
  }

  const portalConfigAction = event.target.closest("[data-portal-config-action]");
  if (portalConfigAction) {
    const action = portalConfigAction.dataset.portalConfigAction;
    if (action === "add-link") {
      const config = collectPortalConfigFormValues();
      config.links.push({ name: "", url: "" });
      refreshPortalLinkList(config);
      return;
    }
    if (action === "reset") {
      resetPortalPlatformConfig();
      renderApp();
      appendOperationLog("system-portal-config", "重置门户页平台配置");
      showToast("门户配置已恢复默认");
      return;
    }
    if (action === "save") {
      const saved = savePortalConfigFromForm();
      if (saved) {
        renderApp();
        showToast("门户配置已保存，刷新门户页后生效");
      }
      return;
    }
  }

  const auditTypeButton = event.target.closest("[data-audit-type]");
  if (auditTypeButton) {
    state.auditMaterialType = auditTypeButton.dataset.auditType;
    state.auditStatus = "all";
    renderApp();
    return;
  }

  const auditStatusButton = event.target.closest("[data-audit-status]");
  if (auditStatusButton) {
    state.auditStatus = auditStatusButton.dataset.auditStatus;
    renderApp();
    return;
  }

  const auditActionButton = event.target.closest("[data-audit-action]");
  if (auditActionButton) {
    const action = auditActionButton.dataset.auditAction;
    const rowId = auditActionButton.dataset.auditId || "";
    const currentRow = rowId ? getAuditRows().find((row) => row.id === rowId) : null;

    if (action === "detail" && rowId) {
      openAnalysisModal("detail", "system-audit", rowId);
      renderApp();
      return;
    }

    if (action === "download" && currentRow) {
      downloadAuditRow(currentRow);
      appendOperationLog("system-audit", `下载审核记录：${getSystemRowDisplayName("system-audit", currentRow)}`);
      showToast("审核记录已下载");
      return;
    }

    if (action === "approve" && rowId) {
      const updatedCount = updateAuditRows([rowId], "审核通过", "已完成入库");
      if (updatedCount) {
        appendOperationLog("system-audit", `审核通过并入库：${getSystemRowDisplayName("system-audit", currentRow || { id: rowId })}`);
      }
      renderApp();
      showToast(updatedCount ? "审核已通过并完成入库" : "未找到可处理记录");
      return;
    }

    if (action === "reject" && rowId) {
      const updatedCount = updateAuditRows([rowId], "审核不通过", "已驳回");
      if (updatedCount) {
        appendOperationLog("system-audit", `审核驳回：${getSystemRowDisplayName("system-audit", currentRow || { id: rowId })}`);
      }
      renderApp();
      showToast(updatedCount ? "审核记录已驳回" : "未找到可处理记录");
      return;
    }

    if (action === "batch-approve" || action === "batch-reject") {
      const targetRows = getVisibleAuditRows().filter(isAuditPending);
      const isApprove = action === "batch-approve";
      const updatedCount = updateAuditRows(
        targetRows.map((row) => row.id),
        isApprove ? "审核通过" : "审核不通过",
        isApprove ? "已完成入库" : "已驳回"
      );
      if (updatedCount) {
        appendOperationLog("system-audit", `${isApprove ? "批量审核通过并入库" : "批量驳回审核记录"}：${updatedCount} 条`);
      }
      renderApp();
      showToast(updatedCount ? `${isApprove ? "已批量通过" : "已批量驳回"} ${updatedCount} 条记录` : "当前筛选下没有待处理记录");
      return;
    }
  }

  const openFormButton = event.target.closest("[data-open-form]");
  if (openFormButton) {
    const moduleKey = openFormButton.dataset.openForm;
    state.activeMenu = moduleKey;
    state.openNavGroup = "monitor";
    state.sensorView[moduleKey] = "form";
    state.modal = null;
    renderApp();
    return;
  }

  const backListButton = event.target.closest("[data-back-list]");
  if (backListButton) {
    resetSensorToList(backListButton.dataset.backList);
    renderApp();
    return;
  }

  const batchButton = event.target.closest("[data-batch]");
  if (batchButton) {
    const [moduleKey, batchId] = batchButton.dataset.batch.split("|");
    state.activeBatch[moduleKey] = batchId;
    state.pagination[moduleKey] = 1;
    renderApp();
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    const [key, page] = pageButton.dataset.page.split("|");
    state.pagination[key] = Number(page) || 1;
    renderApp();
    return;
  }

  const openModalButton = event.target.closest("[data-open-modal]");
  if (openModalButton) {
    const [type, moduleKey, batchId, recordId] = openModalButton.dataset.openModal.split("|");
    const parentModal = state.modal ? { ...state.modal } : null;
    state.modal =
      type === "detail"
        ? { type, module: moduleKey, batchId, recordId, parentModal }
        : type === "batch-edit"
          ? { type: "batch", module: moduleKey, batchId, parentModal }
          : type === "batch-delete"
            ? { type: "batch-delete", module: moduleKey, batchId, parentModal }
          : { type, module: moduleKey, parentModal };
    renderApp();
    return;
  }

  const modalBackButton = event.target.closest("[data-modal-back]");
  if (modalBackButton) {
    if (state.modal?.parentModal) {
      state.modal = state.modal.parentModal;
    } else {
      state.modal = null;
    }
    renderApp();
    return;
  }

  const closeModalButton = event.target.closest("[data-close-modal]");
  if (closeModalButton) {
    state.modal = state.modal?.parentModal || null;
    renderApp();
    return;
  }

  const geneOpenButton = event.target.closest("[data-gene-open]");
  if (geneOpenButton) {
    const [actionKey, projectId, snpKey = ""] = geneOpenButton.dataset.geneOpen.split("|");
    openGeneModal(actionKey, projectId, { snpKey: decodeURIComponent(snpKey), parentModal: state.modal ? { ...state.modal } : null });
    renderApp();
    return;
  }

  const analysisOpenButton = event.target.closest("[data-analysis-open]");
  if (analysisOpenButton) {
    const [actionKey, moduleKey, itemId] = analysisOpenButton.dataset.analysisOpen.split("|");
    if (moduleKey === "system-algorithms" && ["create", "edit"].includes(actionKey)) {
      const current = itemId ? getSystemRow(moduleKey, itemId) : null;
      state.algorithmUploadDraft = {
        fileName: current?.packageName || "",
        fileSize: current?.packageSize || 0
      };
    }
    openAnalysisModal(actionKey, moduleKey, itemId);
    renderApp();
    return;
  }

  const fileTriggerButton = event.target.closest("[data-file-trigger]");
  if (fileTriggerButton) {
    document.querySelector(`[data-gene-field="${fileTriggerButton.dataset.fileTrigger}"]`)?.click();
    return;
  }

  const serviceUploadTrigger = event.target.closest("[data-service-upload-trigger]");
  if (serviceUploadTrigger && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    document.querySelector("[data-service-file-input]")?.click();
    return;
  }

  const serviceMethodButton = event.target.closest("[data-service-method]");
  if (serviceMethodButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    syncServiceDraftFromDom();
    state.modal = {
      ...state.modal,
      serviceMethod: serviceMethodButton.dataset.serviceMethod,
      serviceStep: serviceMethodButton.dataset.serviceMethod === "manual" ? state.modal.serviceStep || 1 : 1
    };
    renderApp();
    return;
  }

  const serviceStepButton = event.target.closest("[data-service-step]");
  if (serviceStepButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    syncServiceDraftFromDom();
    state.modal = {
      ...state.modal,
      serviceMethod: "manual",
      serviceStep: Number(serviceStepButton.dataset.serviceStep) || 1
    };
    renderApp();
    return;
  }

  const serviceNavButton = event.target.closest("[data-service-nav]");
  if (serviceNavButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    const currentStep = state.modal.serviceStep || 1;
    syncServiceDraftFromDom();
    state.modal = {
      ...state.modal,
      serviceMethod: "manual",
      serviceStep:
        serviceNavButton.dataset.serviceNav === "prev"
          ? Math.max(1, currentStep - 1)
          : Math.min(4, currentStep + 1)
    };
    renderApp();
    return;
  }

  const serviceImportButton = event.target.closest("[data-service-import]");
  if (serviceImportButton && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    if (!state.modal.serviceImportContent || !state.modal.serviceImportFileName) {
      showToast("请先选择要导入的文件");
      return;
    }

    try {
      const payload = await apiRequest("/api/analysis-import/service", {
        method: "POST",
        body: JSON.stringify({
          fileName: state.modal.serviceImportFileName,
          fileSize: state.modal.serviceImportSize,
          fileContent: state.modal.serviceImportContent
        })
      });
      await loadAnalysisModules();
      state.modal = null;
      renderApp();
      showToast(
        `导入完成：新增 ${payload.createdCount || 0} 条，更新 ${payload.updatedCount || 0} 条${
          payload.failedCount ? `，失败 ${payload.failedCount} 条` : ""
        }`
      );
    } catch (error) {
      showToast(error.message || "导入失败");
    }
    return;
  }

  const geneTabButton = event.target.closest("[data-gene-tab]");
  if (geneTabButton && state.modal?.type === "gene-detail") {
    state.modal = { ...state.modal, tab: geneTabButton.dataset.geneTab };
    renderApp();
    return;
  }

  const geneExportButton = event.target.closest("[data-gene-export]");
  if (geneExportButton) {
    exportGeneResult(geneExportButton.dataset.geneExport);
    showToast("GPA分析结果已导出");
    return;
  }

  const geneSubmitButton = event.target.closest("[data-gene-submit]");
  if (geneSubmitButton) {
    const [action, projectId] = geneSubmitButton.dataset.geneSubmit.split("|");
    const project = projectId ? getGeneProject(projectId) : null;
    const messageMap = {
      create: "分析项目已创建",
      save: "项目修改已保存",
      upload: project ? `${project.name} 数据集已保存` : "数据集已保存",
      delete: project ? `${project.name} 已删除` : "项目已删除"
    };
    try {
      await submitGeneAction(action, projectId);
      state.modal = null;
      renderApp();
      showToast(messageMap[action] || "操作已完成");
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const analysisSubmitButton = event.target.closest("[data-analysis-submit]");
  if (analysisSubmitButton) {
    if (state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
      syncServiceDraftFromDom();
    }
    const [action, moduleKey, itemId] = analysisSubmitButton.dataset.analysisSubmit.split("|");
    const row = itemId ? getAnalysisRow(moduleKey, itemId) : null;
    const messageMap = {
      create: `${analysisPages[moduleKey].title}记录已创建`,
      edit: `${analysisPages[moduleKey].title}记录已保存`,
      delete: row ? `${row.name || row.code} 已删除` : "记录已删除"
    };
    try {
      await submitAnalysisAction(action, moduleKey, itemId);
      state.modal = null;
      renderApp();
      showToast(messageMap[action] || "操作已完成");
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const systemSubmitButton = event.target.closest("[data-system-submit]");
  if (systemSubmitButton) {
    const [action, moduleKey, itemId] = systemSubmitButton.dataset.systemSubmit.split("|");
    const row = itemId ? getSystemRow(moduleKey, itemId) : null;
    const messageMap = {
      toggle: row ? `${getSystemRowDisplayName(moduleKey, row)} 已${getSystemToggleTargetStatus(moduleKey, row.status.text)}` : "状态已更新",
      export: "操作日志导出任务已创建"
    };
    try {
      await submitSystemAction(action, moduleKey, itemId);
      state.modal = null;
      renderApp();
      showToast(messageMap[action] || "操作已完成");
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const headerTool = event.target.closest("[data-header-tool]");
  if (headerTool) {
    const labelMap = {
      search: "搜索",
      filter: "筛选",
      settings: "设置"
    };
    showToast(`${labelMap[headerTool.dataset.headerTool]}功能入口已预留`);
    return;
  }

  const primaryAction = event.target.closest("[data-primary-action]");
  if (primaryAction) {
    const systemModuleKey = getSystemPageKeyFromPrimaryAction(primaryAction.dataset.primaryAction);
    if (systemModuleKey) {
      openAnalysisModal(systemModuleKey === "system-logs" ? "export" : "create", systemModuleKey);
      renderApp();
      return;
    }
    if (primaryAction.dataset.primaryAction === "gene") {
      openGeneModal("create");
      renderApp();
      return;
    }
    if (persistedAnalysisModules.includes(primaryAction.dataset.primaryAction)) {
      openAnalysisModal("create", primaryAction.dataset.primaryAction);
      renderApp();
      return;
    }
    showToast(`已打开“${primaryAction.dataset.primaryAction}”的新建流程入口`);
    return;
  }

  const filterAction = event.target.closest("[data-filter-action]");
  if (filterAction) {
    const [action, pageKey] = filterAction.dataset.filterAction.split("|");
    if (pageKey === "catalog") {
      if (action === "reset") {
        state.catalogFilters = {
          keyword: "",
          category: "全部",
          format: "全部",
          status: "全部"
        };
      } else {
        document.querySelectorAll("[data-catalog-filter]").forEach((field) => {
          state.catalogFilters[field.dataset.catalogFilter] = field.value.trim();
        });
      }
      state.pagination.catalog = 1;
      renderApp();
      showToast(action === "search" ? "数据资源目录筛选已执行" : "筛选条件已重置");
      return;
    }
    const page = analysisPages[pageKey];
    if (page?.filters?.length) {
      if (action === "reset") {
        state.analysisFilters[pageKey] = {};
      } else {
        state.analysisFilters[pageKey] = [...document.querySelectorAll("[data-analysis-filter]")].reduce((acc, field) => {
          acc[field.dataset.analysisFilter] = field.value.trim();
          return acc;
        }, {});
      }
      state.pagination[pageKey] = 1;
      renderApp();
      showToast(action === "search" ? `${analysisPages[pageKey].title}筛选已执行` : "筛选条件已重置");
      return;
    }
    showToast(action === "search" ? `${analysisPages[pageKey].title}筛选已执行` : "筛选条件已重置");
    return;
  }

  const tableAction = event.target.closest("[data-table-action]");
  if (tableAction) {
    const pageKey = tableAction.dataset.tablePage || "";
    const rawActionKey = tableAction.dataset.tableAction || "";
    const actionKey = normalizeAnalysisAction({ id: rawActionKey, label: rawActionKey })?.id || rawActionKey;
    const targetId = tableAction.dataset.tableTarget || "";
    if (pageKey === "catalog") {
      if (actionKey === "detail") {
        const parentModal = state.modal ? { ...state.modal } : null;
        state.modal = { type: "catalog-detail", itemId: targetId, parentModal };
        renderApp();
        return;
      }
    }
    if (isSystemMenu(pageKey)) {
      openAnalysisModal(actionKey, pageKey, targetId);
      renderApp();
      return;
    }
    if (pageKey === "gene") {
      openGeneModal(actionKey, targetId);
      renderApp();
      return;
    }
    if (persistedAnalysisModules.includes(pageKey)) {
      openAnalysisModal(["view", "result"].includes(actionKey) ? "detail" : actionKey, pageKey, targetId);
      renderApp();
      return;
    }
    showToast(`${tableAction.textContent.trim()}：${targetId}`);
    return;
  }

  const modalAction = event.target.closest("[data-modal-action]");
  if (modalAction) {
    const [action, moduleKey] = modalAction.dataset.modalAction.split("|");
    const actionText = {
      "save-threshold": "阈值配置已保存",
      "reset-threshold": "已恢复默认阈值",
      "confirm-import": moduleKey === "physical" ? "物理参数数据已导入" : "代谢物数据已导入"
    };

    try {
      if (action === "save-threshold") {
        saveThresholdConfig(moduleKey);
        state.modal = null;
        renderApp();
      } else if (action === "reset-threshold") {
        resetThresholdConfig(moduleKey);
        renderApp();
      } else if (action === "confirm-import") {
        const importResult = state.modal?.importResult;
        if (!importResult?.validRows?.length) {
          throw new Error("请先选择并校验导入文件");
        }
        await importSensorRecords(moduleKey, importResult.validRows);
        state.modal = null;
        renderApp();
      } else {
        state.modal = null;
        renderApp();
      }
      showToast(actionText[action] || "操作已完成");
    } catch (error) {
      showToast(error.message || "操作失败");
    }
    return;
  }

  const batchGenerateButton = event.target.closest("[data-batch-generate]");
  if (batchGenerateButton && state.modal?.type === "batch") {
    const nameInput = document.querySelector('[data-gene-field="batchCellName"]');
    const batchInput = document.querySelector('[data-gene-field="batchId"]');
    const concentrationInput = document.querySelector('[data-gene-field="batchConcentration"]');
    if (batchInput) {
      batchInput.value = generateSensorBatchId(nameInput?.value || "", new Date(), concentrationInput?.value || "中浓度");
      showToast("已生成建议批号");
    }
    return;
  }

  const batchSubmitButton = event.target.closest("[data-batch-submit]");
  if (batchSubmitButton) {
    const [mode, moduleKey, originalBatchId = ""] = batchSubmitButton.dataset.batchSubmit.split("|");
    const values = {
      cellName: document.querySelector('[data-gene-field="batchCellName"]')?.value || "",
      batchId: document.querySelector('[data-gene-field="batchId"]')?.value || "",
      concentration: document.querySelector('[data-gene-field="batchConcentration"]')?.value || "中浓度"
    };
    try {
      upsertSensorBatch(moduleKey, mode, originalBatchId, values);
      state.modal = null;
      renderApp();
      showToast(mode === "edit" ? "批次已更新" : "批次已新增");
    } catch (error) {
      showToast(error.message || "批次保存失败");
    }
    return;
  }

  const batchDeleteButton = event.target.closest("[data-batch-delete]");
  if (batchDeleteButton) {
    const [moduleKey, batchId] = batchDeleteButton.dataset.batchDelete.split("|");
    try {
      deleteSensorBatch(moduleKey, batchId);
      state.modal = null;
      renderApp();
      showToast("批次已删除");
    } catch (error) {
      showToast(error.message || "批次删除失败");
    }
    return;
  }

  const formAction = event.target.closest("[data-form-action]");
  if (formAction) {
    const [action, moduleKey] = formAction.dataset.formAction.split("|");
    if (action === "reset") {
      showToast("表单已重置");
      return;
    }
    try {
      await submitSensorAction(action, moduleKey);
      state.sensorView[moduleKey] = "list";
      renderApp();
      showToast(action === "save" ? "录入内容已保存到系统" : "录入数据已提交到系统");
    } catch (error) {
      showToast(error.message || "录入失败");
    }
    return;
  }

  const downloadButton = event.target.closest("[data-download-template]");
  if (downloadButton) {
    downloadSensorTemplate(downloadButton.dataset.downloadTemplate);
    showToast(`已下载${sensorModules[downloadButton.dataset.downloadTemplate].label}导入模板`);
    return;
  }

  const togglePasswordButton = event.target.closest("[data-toggle-password]");
  if (togglePasswordButton) {
    const input = document.querySelector(`#${togglePasswordButton.dataset.togglePassword}`);
    if (!input) {
      return;
    }

    const nextType = input.type === "password" ? "text" : "password";
    input.type = nextType;
    togglePasswordButton.innerHTML = `<span class="header-icon">${icon(nextType === "password" ? "i-eye-off" : "i-eye")}</span>`;
    return;
  }

  const refreshButton = event.target.closest("[data-refresh-captcha]");
  if (refreshButton) {
    refreshCaptcha(refreshButton.dataset.refreshCaptcha);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#loginForm")) {
    event.preventDefault();
    handleLoginSubmit(event.target);
    return;
  }
  if (event.target.matches("#registerForm")) {
    event.preventDefault();
    handleRegisterSubmit(event.target);
    return;
  }
  if (event.target.matches("#recoverForm")) {
    event.preventDefault();
    handleRecoverSubmit(event.target);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-strength-input]")) {
    updateStrengthMeter(event.target.value);
    return;
  }

  if (event.target.matches("[data-gpa-field]")) {
    const field = event.target.dataset.gpaField;
    state.gpa[field] = event.target.value.trim();
    if (["compound", "phenotype", "chassis"].includes(field)) {
      state.gpa.pathContext = gpaCurrentQueryLabel();
    }
    return;
  }

  if (event.target.matches("[data-service-field]") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    state.modal = {
      ...state.modal,
      serviceDraft: {
        ...createServiceEmptyDraft(),
        ...(state.modal.serviceDraft || {}),
        [event.target.dataset.serviceField]: event.target.value.trim()
      }
    };
  }
});

document.addEventListener("change", async (event) => {
  const statusFilterSelect = event.target.closest("[data-status-filter]");
  if (statusFilterSelect) {
    const moduleKey = statusFilterSelect.dataset.statusFilter;
    state.statusFilter[moduleKey] = statusFilterSelect.value;
    state.pagination[moduleKey] = 1;
    renderApp();
    return;
  }

  if (event.target.matches("[data-service-field]") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    state.modal = {
      ...state.modal,
      serviceDraft: {
        ...createServiceEmptyDraft(),
        ...(state.modal.serviceDraft || {}),
        [event.target.dataset.serviceField]: event.target.value.trim()
      }
    };
    return;
  }

  if (event.target.matches("[data-gpa-field]")) {
    const field = event.target.dataset.gpaField;
    state.gpa[field] = event.target.value.trim();
    if (["compound", "phenotype", "chassis"].includes(field)) {
      state.gpa.pathContext = gpaCurrentQueryLabel();
    }
    renderApp();
    return;
  }

  if (event.target.matches("[data-gpa-import-file]")) {
    const [file] = [...(event.target.files || [])];
    if (!file) {
      return;
    }
    state.gpa.importFileName = file.name;
    state.gpa.importFileSize = file.size;
    renderApp();
    showToast(`已选择文件：${file.name}`);
    return;
  }

  if (event.target.matches("[data-portal-image-input]")) {
    const [file] = [...(event.target.files || [])];
    if (!file) {
      return;
    }
    const field = event.target.dataset.portalImageInput;
    const extension = `.${String(file.name).split(".").pop() || ""}`.toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(extension)) {
      showToast("仅支持上传 png、jpg 图片");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast("图片大小不能超过 5M");
      return;
    }
    try {
      const base64 = await readFileAsBase64(file);
      const dataUrl = `data:${file.type || "image/png"};base64,${base64}`;
      const hidden = document.querySelector(`[data-portal-field="${field}"]`);
      const preview = document.querySelector(`[data-portal-image-preview="${field}"]`);
      if (hidden) {
        hidden.value = dataUrl;
      }
      if (preview) {
        preview.classList.add("has-image");
        preview.innerHTML = `<img src="${escapeHtml(dataUrl)}" alt="配置图片预览">`;
      }
      showToast(`已选择图片：${file.name}`);
    } catch (error) {
      showToast(error.message || "图片读取失败");
    }
    return;
  }

  if (event.target.matches("[data-service-file-input]") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "service") {
    const [file] = [...(event.target.files || [])];
    if (!file) {
      return;
    }

    const extension = `.${String(file.name).split(".").pop() || ""}`.toLowerCase();
    if (![".csv", ".xlsx", ".xls"].includes(extension)) {
      showToast("仅支持上传 .csv、.xlsx、.xls 文件");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      showToast("文件大小不能超过 50MB");
      return;
    }

    try {
      const base64 = await readFileAsBase64(file);
      state.modal = {
        ...state.modal,
        serviceImportFileName: file.name,
        serviceImportSize: file.size,
        serviceImportContent: base64
      };
      renderApp();
      showToast(`已选择文件：${file.name}`);
    } catch (error) {
      showToast(error.message || "文件读取失败");
    }
  }

  if (event.target.matches("[data-gene-field='analysis-packageName']") && state.modal?.type === "analysis-form" && state.modal.moduleKey === "system-algorithms") {
    const [file] = [...(event.target.files || [])];
    if (!file) {
      return;
    }
    const fileName = String(file.name || "");
    const lowerName = fileName.toLowerCase();
    const extension = `.${fileName.split(".").pop() || ""}`.toLowerCase();
    const supportedExtensions = [".zip", ".tar", ".gz", ".rar", ".7z"];
    if (!supportedExtensions.includes(extension) && !lowerName.endsWith(".tar.gz")) {
      showToast("仅支持 zip、tar.gz、rar、7z 算法代码包");
      return;
    }
    if (file.size > 200 * 1024 * 1024) {
      showToast("算法代码包大小不能超过 200MB");
      return;
    }
    state.algorithmUploadDraft = {
      fileName,
      fileSize: file.size
    };
    renderApp();
    showToast(`已选择算法代码包：${fileName}`);
    return;
  }

  if (event.target.matches("[data-sensor-import-file]") && state.modal?.type === "import") {
    const [file] = [...(event.target.files || [])];
    if (!file) {
      return;
    }
    const extension = `.${String(file.name).split(".").pop() || ""}`.toLowerCase();
    if (extension !== ".csv") {
      showToast("当前原型仅支持解析 CSV 模板文件");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast("文件大小不能超过 10MB");
      return;
    }
    try {
      const text = await readFileAsText(file);
      const rows = parseCsvText(text);
      const result = buildSensorImportResult(state.modal.module, rows);
      state.modal = {
        ...state.modal,
        fileName: file.name,
        importResult: result
      };
      renderApp();
      showToast(`校验完成：通过 ${result.validRows.length} 条，失败 ${result.errors.length} 条`);
    } catch (error) {
      showToast(error.message || "导入文件读取失败");
    }
  }
});

window.addEventListener("resize", () => {
  if (!isMobileViewport()) {
    state.sidebarOpen = false;
  }
  syncShellState();
});

mobileMenuButton.addEventListener("click", () => {
  setSidebarOpen(!state.sidebarOpen);
});

sidebarBackdrop.addEventListener("click", () => {
  setSidebarOpen(false);
});

["login", "register", "recover"].forEach((key) => {
  state.captchaCodes[key] = generateCaptcha();
});

applyPersistedSystemPages();
const forceLoginView = shouldForceLoginView();
if (forceLoginView) {
  clearAuthSession();
  state.currentUser = null;
  state.scene = "auth";
  state.authView = "login";
}
const existingSession = forceLoginView ? null : readAuthSession();
if (existingSession?.token && Number(existingSession.expiresAt || 0) > Date.now()) {
  state.currentUser = existingSession.user || null;
  state.scene = "dashboard";
}
renderApp();
Promise.all([loadGeneProjects(), loadAnalysisModules(), loadSensorRecords()])
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error(error);
    showToast("系统数据加载失败");
  });


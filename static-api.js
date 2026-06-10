(function () {
  const STORE_KEY = "ai-test-github-pages-preview-store-v1";

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function nowText() {
    return new Date().toISOString().slice(0, 16).replace("T", " ");
  }

  function makeId(prefix) {
    const random =
      globalThis.crypto?.randomUUID?.().replaceAll("-", "").slice(0, 10) ||
      Math.random().toString(16).slice(2, 12);
    return `${prefix}-${random}`;
  }

  function parseBody(options) {
    if (!options?.body) {
      return {};
    }
    if (typeof options.body === "string") {
      try {
        return JSON.parse(options.body);
      } catch {
        return {};
      }
    }
    return options.body;
  }

  function getStatusClass(text) {
    if (typeof statusTextToClass === "function") {
      return statusTextToClass(text);
    }
    return text === "已完成" || text === "已验证" ? "is-valid" : text === "失败" ? "is-fail" : "is-progress";
  }

  function createGeneDefaults() {
    return (analysisPages?.gene?.rows || []).map((row) => {
      const template = geneProjectLibrary?.[row.id] || {};
      return {
        id: row.id || makeId("gene"),
        name: row.name,
        strain: row.strain,
        phenotype: row.phenotype,
        method: template.method || "GWAS分析",
        threshold: template.threshold || "0.05",
        status: row.status?.text || "分析中",
        samples: row.samples || "0",
        sites: row.sites || "0",
        createdAt: row.createdAt || nowText(),
        updatedAt: template.updatedAt || row.createdAt || nowText(),
        description: template.description || "",
        dataset: template.dataset || {
          name: `${row.name || "项目"}_数据集`,
          type: "VCF",
          size: "0 MB",
          sites: row.sites || "0"
        }
      };
    });
  }

  function normalizeGeneProjects(projects) {
    return (projects || []).map((project, index) => ({
      ...project,
      id: project.id || `gene-${index + 1}`,
      status: project.status?.text || project.status || "分析中",
      samples: project.samples || "0",
      sites: project.sites || "0",
      createdAt: project.createdAt || nowText(),
      updatedAt: project.updatedAt || project.createdAt || nowText(),
      dataset: project.dataset || {
        name: `${project.name || "项目"}_数据集`,
        type: "VCF",
        size: "0 MB",
        sites: project.sites || "0"
      }
    }));
  }

  function createAnalysisDefaults() {
    const modules = typeof persistedAnalysisModules !== "undefined" ? persistedAnalysisModules : ["omics", "process", "full", "service"];
    return modules.reduce((result, moduleKey) => {
      result[moduleKey] = (analysisPages?.[moduleKey]?.rows || []).map((row, index) => ({
        ...clone(row),
        id: row.id || `${moduleKey}-${index + 1}`,
        module: moduleKey,
        statusText: row.status?.text || row.statusText || "进行中",
        statusClass: row.status?.className || row.statusClass || getStatusClass(row.status?.text || row.statusText || "进行中")
      }));
      return result;
    }, {});
  }

  function normalizeAnalysisItems(itemsByModule) {
    return Object.keys(itemsByModule || {}).reduce((result, moduleKey) => {
      result[moduleKey] = (itemsByModule[moduleKey] || []).map((item, index) => ({
        ...item,
        id: item.id || `${moduleKey}-${index + 1}`,
        module: item.module || moduleKey,
        statusText: item.statusText || item.status?.text || "进行中",
        statusClass: item.statusClass || item.status?.className || getStatusClass(item.statusText || item.status?.text || "进行中")
      }));
      return result;
    }, {});
  }

  function createSensorDefaults() {
    return ["physical", "biological"].reduce((result, moduleKey) => {
      result[moduleKey] = (sensorModules?.[moduleKey]?.batches || []).flatMap((batch) =>
        (batch.records || []).map((record) => ({
          ...clone(record),
          module: moduleKey,
          batchId: batch.id
        }))
      );
      return result;
    }, {});
  }

  function createDefaultStore() {
    return {
      geneProjects: createGeneDefaults(),
      analysisItems: createAnalysisDefaults(),
      sensorRecords: createSensorDefaults()
    };
  }

  function readStore() {
    try {
      const raw = window.localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const defaults = createDefaultStore();
        return {
          ...defaults,
          ...parsed,
          geneProjects: normalizeGeneProjects(parsed.geneProjects || defaults.geneProjects),
          analysisItems: normalizeAnalysisItems({
            ...defaults.analysisItems,
            ...(parsed.analysisItems || {})
          }),
          sensorRecords: {
            ...defaults.sensorRecords,
            ...(parsed.sensorRecords || {})
          }
        };
      }
    } catch {}
    const defaults = createDefaultStore();
    writeStore(defaults);
    return defaults;
  }

  function writeStore(store) {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch {}
  }

  function base64ToBytes(base64) {
    const clean = String(base64 || "").includes(",") ? String(base64).split(",").pop() : String(base64 || "");
    const binary = atob(clean);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  }

  function parseCsvLine(line) {
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
  }

  function parseImportRows(fileName, fileContent) {
    const extension = `.${String(fileName || "").split(".").pop() || ""}`.toLowerCase();
    const bytes = base64ToBytes(fileContent);
    if (extension === ".csv") {
      const text = new TextDecoder("utf-8").decode(bytes);
      const lines = text.split(/\r?\n/).filter((line) => line.trim());
      const headers = parseCsvLine(lines.shift() || "");
      return lines.map((line) => {
        const values = parseCsvLine(line);
        return headers.reduce((row, header, index) => {
          row[header || `字段${index + 1}`] = values[index] || "";
          return row;
        }, {});
      });
    }
    if (window.XLSX) {
      const workbook = window.XLSX.read(bytes, { type: "array", codepage: 65001 });
      const sheetName = workbook.SheetNames[0];
      return window.XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
    }
    return [];
  }

  function pick(row, keys, fallback = "") {
    const key = keys.find((item) => row[item] !== undefined && row[item] !== "");
    return key ? String(row[key]) : fallback;
  }

  function mapServiceImportRow(row, index, fileName) {
    const name = pick(row, ["工程细胞名称", "细胞名称", "名称", "name"], `导入工程细胞${index + 1}`);
    const code = pick(row, ["工程细胞编号", "细胞编号", "编号", "code"], `IMPORT-${String(index + 1).padStart(3, "0")}`);
    const statusText = pick(row, ["状态", "验证状态", "status"], "已验证");
    return {
      id: makeId("service"),
      module: "service",
      code,
      name,
      strain: pick(row, ["菌株", "菌株类型", "strain"], "谷氨酸棒杆菌"),
      gene: pick(row, ["基因型", "基因", "gene"], ""),
      description: pick(row, ["描述", "说明", "description"], `由 ${fileName} 导入`),
      basicInfo: {
        code,
        name,
        strain: pick(row, ["菌株", "菌株类型", "strain"], "谷氨酸棒杆菌"),
        gene: pick(row, ["基因型", "基因", "gene"], ""),
        statusText,
        description: pick(row, ["描述", "说明", "description"], `由 ${fileName} 导入`)
      },
      cultureInfo: {
        cultureCode: pick(row, ["培养编号", "cultureCode"], ""),
        cultureMode: pick(row, ["培养方式", "cultureMode"], "摇瓶培养"),
        mediumFormula: pick(row, ["培养基", "mediumFormula"], ""),
        temperature: pick(row, ["温度", "temperature"], "30"),
        ph: pick(row, ["pH", "ph"], "7.0"),
        rpm: pick(row, ["转速", "rpm"], "200"),
        cultureStatus: pick(row, ["培养状态", "cultureStatus"], "已完成"),
        optimizationRecord: pick(row, ["优化记录", "optimizationRecord"], "")
      },
      analysisInfo: {
        testCode: pick(row, ["检测编号", "testCode"], ""),
        testItem: pick(row, ["检测项目", "testItem"], "细胞活性检测"),
        testMethod: pick(row, ["检测方法", "testMethod"], "流式细胞术"),
        cellActivity: pick(row, ["细胞活性", "cellActivity"], "高"),
        cellPurity: pick(row, ["细胞纯度", "cellPurity"], "高"),
        testResult: pick(row, ["检测结果", "testResult"], "符合预期"),
        testDescription: pick(row, ["检测说明", "testDescription"], "")
      },
      applicationInfo: {
        applicationCode: pick(row, ["应用编号", "applicationCode"], ""),
        scenarioType: pick(row, ["场景类型", "scenarioType"], "生物制造"),
        applicationField: pick(row, ["应用领域", "applicationField"], ""),
        applicationStatus: pick(row, ["应用状态", "applicationStatus"], "已验证"),
        applicationContent: pick(row, ["应用内容", "applicationContent"], "")
      },
      statusText,
      statusClass: getStatusClass(statusText),
      createdAt: nowText()
    };
  }

  function handleServiceImport(store, body) {
    let rows = [];
    try {
      rows = parseImportRows(body.fileName, body.fileContent);
    } catch {}
    if (!rows.length) {
      rows = [{ 名称: String(body.fileName || "导入工程细胞").replace(/\.[^.]+$/, "") }];
    }

    const target = store.analysisItems.service || [];
    let createdCount = 0;
    let updatedCount = 0;
    rows.forEach((row, index) => {
      const mapped = mapServiceImportRow(row, index, body.fileName || "导入文件");
      const existingIndex = target.findIndex((item) => item.code && item.code === mapped.code);
      if (existingIndex >= 0) {
        target[existingIndex] = { ...target[existingIndex], ...mapped, id: target[existingIndex].id };
        updatedCount += 1;
      } else {
        target.unshift(mapped);
        createdCount += 1;
      }
    });
    store.analysisItems.service = target;
    writeStore(store);
    return { createdCount, updatedCount, failedCount: 0 };
  }

  function apiError(message, statusCode = 400) {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
  }

  window.staticApiRequest = async function staticApiRequest(url, options = {}) {
    const requestUrl = new URL(url, window.location.href);
    const method = String(options.method || "GET").toUpperCase();
    const body = parseBody(options);
    const store = readStore();

    if (requestUrl.pathname === "/api/health" || requestUrl.pathname === "/health") {
      return { status: "ok", mode: "github-pages-static" };
    }

    if (requestUrl.pathname === "/api/gene-projects" && method === "GET") {
      return { items: clone(store.geneProjects) };
    }
    if (requestUrl.pathname === "/api/gene-projects" && method === "POST") {
      const item = {
        id: body.id || makeId("gene"),
        createdAt: body.createdAt || nowText(),
        updatedAt: nowText(),
        status: body.status || "分析中",
        samples: body.samples || "0",
        sites: body.sites || "0",
        ...body
      };
      store.geneProjects.unshift(item);
      writeStore(store);
      return { item: clone(item) };
    }
    let match = requestUrl.pathname.match(/^\/api\/gene-projects\/([^/]+)$/);
    if (match) {
      const index = store.geneProjects.findIndex((item) => item.id === match[1]);
      if (index < 0) {
        apiError("分析项目不存在", 404);
      }
      if (method === "GET") {
        return { item: clone(store.geneProjects[index]) };
      }
      if (method === "PUT") {
        store.geneProjects[index] = { ...store.geneProjects[index], ...body, id: match[1], updatedAt: nowText() };
        writeStore(store);
        return { item: clone(store.geneProjects[index]) };
      }
      if (method === "DELETE") {
        store.geneProjects.splice(index, 1);
        writeStore(store);
        return { success: true };
      }
    }

    if (requestUrl.pathname === "/api/analysis-items" && method === "GET") {
      const moduleKey = requestUrl.searchParams.get("module");
      return { items: clone(store.analysisItems[moduleKey] || []) };
    }
    if (requestUrl.pathname === "/api/analysis-items" && method === "POST") {
      const moduleKey = body.module;
      if (!moduleKey) {
        apiError("缺少模块参数");
      }
      const item = {
        id: body.id || makeId(moduleKey),
        createdAt: body.createdAt || nowText(),
        statusText: body.statusText || body.status?.text || "进行中",
        statusClass: body.statusClass || body.status?.className || getStatusClass(body.statusText || body.status?.text || "进行中"),
        ...body,
        module: moduleKey
      };
      store.analysisItems[moduleKey] = store.analysisItems[moduleKey] || [];
      store.analysisItems[moduleKey].unshift(item);
      writeStore(store);
      return clone(item);
    }
    match = requestUrl.pathname.match(/^\/api\/analysis-items\/([^/]+)$/);
    if (match) {
      const allModules = Object.keys(store.analysisItems);
      const moduleKey = body.module || allModules.find((key) => (store.analysisItems[key] || []).some((item) => item.id === match[1]));
      const index = moduleKey ? (store.analysisItems[moduleKey] || []).findIndex((item) => item.id === match[1]) : -1;
      if (!moduleKey || index < 0) {
        apiError("记录不存在", 404);
      }
      if (method === "GET") {
        return clone(store.analysisItems[moduleKey][index]);
      }
      if (method === "PUT") {
        store.analysisItems[moduleKey][index] = {
          ...store.analysisItems[moduleKey][index],
          ...body,
          id: match[1],
          module: moduleKey,
          statusText: body.statusText || body.status?.text || store.analysisItems[moduleKey][index].statusText,
          statusClass: body.statusClass || body.status?.className || store.analysisItems[moduleKey][index].statusClass
        };
        writeStore(store);
        return clone(store.analysisItems[moduleKey][index]);
      }
      if (method === "DELETE") {
        store.analysisItems[moduleKey].splice(index, 1);
        writeStore(store);
        return { success: true };
      }
    }

    if (requestUrl.pathname === "/api/analysis-import/service" && method === "POST") {
      return handleServiceImport(store, body);
    }

    if (requestUrl.pathname === "/api/sensor-records" && method === "GET") {
      const moduleKey = requestUrl.searchParams.get("module");
      return { items: clone(store.sensorRecords[moduleKey] || []) };
    }
    if (requestUrl.pathname === "/api/sensor-records" && method === "POST") {
      const moduleKey = body.module || "physical";
      const item = {
        id: body.id || makeId("sensor"),
        ...body,
        module: moduleKey,
        createdAt: body.createdAt || nowText()
      };
      store.sensorRecords[moduleKey] = store.sensorRecords[moduleKey] || [];
      store.sensorRecords[moduleKey].unshift(item);
      writeStore(store);
      return { item: clone(item) };
    }

    apiError("静态预览未实现该接口", 404);
  };
})();

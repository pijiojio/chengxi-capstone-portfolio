(() => {
  const FOCUS = "AI Product Management / AI workflows / AI Agent";

  const en = {
    "nav.more": "More",
    "hero.kicker": "HKU IDT · 2026–27 Capstone Application",
    "hero.nameZh": "皮丞汐",
    "hero.title": "Relevant Past Work",
    "hero.lead":
      "A short portfolio of my AI product experience—prepared so you can quickly see how I define problems, design research workflows, and ship usable academic AI applications.",
    "hero.label.program": "Programme",
    "hero.program":
      "MSc Innovative Design and Technology (IDT)<br>The University of Hong Kong",
    "hero.label.phone": "Phone",
    "hero.label.focus": "Focus",
    "hero.focus": FOCUS,
    "hero.label.target": "Capstone interest",
    "hero.target": "University-Wide AI Application Hub (AIPHOEN-2)",
    live: "Live ↗",
    "rx.one": "An AI product for academic research writing",
    "rx.blurb":
      "ResearchX serves graduate students, early-career researchers, and other academic users who spend too much time on the hardest parts of research writing: reading a paper thoroughly, organizing a literature review around a research topic, and turning a finished Word manuscript into journal-ready LaTeX. Instead of offering a generic AI writing chat box, it follows the real writing process and splits high-frequency, high-friction scenarios into separate capabilities—close reading when users need to understand one paper, purpose-specific review generation when they need a structured draft, and journal-template conversion when formatting for submission. The goal is clear: cut the time cost of finding literature, building structure, drafting, and formatting, while staying close to real academic situations such as thesis proposals, dissertations, and journal submissions—rather than producing generic AI long-form text.",
    "rx.coverLabel": "Cover",
    "rx.c1.label": "Capability 01",
    "rx.c1.title": "Literature review generation · four modes",
    "rx.c1.one":
      "Enter a research topic → choose purpose and quality tier → asynchronously generate outline / section drafts / full manuscript / references → then locally rewrite and globally refine",
    "rx.c1.m1t": "General",
    "rx.c1.m1p":
      "A fuller four-chapter review with abstract and keywords—a stand-alone first draft",
    "rx.c1.m2t": "Master’s",
    "rx.c1.m2p":
      "Introduction + literature-review chapter; a required summary that bridges to the user’s RQ and methods",
    "rx.c1.m3t": "Journal",
    "rx.c1.m3p":
      "High information density; the summary lands on the research gap and the paper’s marginal contribution",
    "rx.c1.m4t": "PhD",
    "rx.c1.m4p":
      "Deeper structure and more systematic coverage, with stronger consistency—at higher time and cost",
    "rx.c1.p1":
      "Differentiate structure and writing strategy by <strong>use case</strong>, not a single prompt template",
    "rx.c1.p2":
      "Productize quality rules—e.g. Master’s/Journal must include a summary—so free-form model output stays usable",
    "rx.c1.p3":
      "Match cost to mode: heavier PhD tasks carry a higher bar so light needs do not enter heavy pipelines",
    "rx.c2.label": "Capability 02",
    "rx.c2.title": "Single-paper interpretation",
    "rx.c2.one":
      "Upload one paper → structured close-reading report → follow-up Q&A / local edits only for that paper (no multi-paper retrieval, no four-mode review)",
    "rx.c2.s1": "Upload PDF/Word—no need to describe the task in natural language",
    "rx.c2.s2": "Extract the full text and generate interpretation sections in parallel",
    "rx.c2.s3": "Deliver the report; ask about terms, figures, or formulas",
    "rx.c2.sub":
      "Deliverable structure: analysis · introduction · model setup · identification & estimation · empirical results · conclusions & implications",
    "rx.c2.f1": "Upload to interpret",
    "rx.c2.f2": "Backend analysis",
    "rx.c2.f3label": "Fig.3 · Result",
    "rx.c2.f3title": "Structured interpretation report (long output)",
    "rx.c2.f3hint": "Scroll to browse full output",
    "rx.c3.label": "Capability 03",
    "rx.c3.title": "Word → journal LaTeX · template expansion",
    "rx.c3.one":
      "Choose a target journal template → auto-convert body / formulas / tables / figures / references → export a compile-ready TeX package",
    "rx.c3.p1":
      "Close the last mile from “content finished” to “journal submission format”",
    "rx.c3.p2":
      "New-journal pipeline: official sample → diff analysis → adaptation → smoke checks → go live as an option",
    "rx.c3.p3":
      "Turn “can we submit to this journal?” from one-off engineering into a scalable template system",
    "rx.c3.demo": "Demo",
    "rx.c3.demoTitle": "LaTeX format conversion",
    "dm.one":
      "Economic research plans & field matching · question → databases/fields → executable plan",
    "dm.blurb":
      'The economic data platform was strong at supply—picking databases, browsing, downloading, and visualizing. The real bottleneck sits further upstream: research questions lack a translation layer to databases, theoretical variables are hard to map to observable fields, cross-database joins go wrong easily, and even with fields users still need feasibility checks and causal research plans. DataMatch is an in-platform <strong>research workflow</strong>, not a generic chat bot; it deliberately excludes browsing, data pulls, and membership, with a separate research-service Base URL.',
    "dm.m1t": "Exploratory · full-catalog recommend",
    "dm.m1p": "Has a topic but no database yet → ranked recommendations + why they fit",
    "dm.m2t": "Specified DB · fit & fill gaps",
    "dm.m2p":
      "Already has a preferred / advisor-assigned database → can it work, what’s missing, which DBs to add",
    "dm.coreLabel": "Core interaction",
    "dm.coreTitle": "Field shelf · human–AI collaboration",
    "dm.coreOne":
      "AI recalls candidates and suggested roles; users decide what to enable and which roles to assign (at most one X and one Y); changing the pool/checks does not rerun the expensive path—confirm, then regenerate (revision+1).",
    "dm.coreP1":
      "Field states: active / demoted / parked / excluded · grey checks + reason copy so “looks usable” never means “entered the model”",
    "dm.coreP2":
      "First analyze only checks primary mappings; other candidates stay unchecked to reduce cognitive load",
    "dm.coreP3":
      "Principle: AI drafts · users make research judgments · the system enforces constraints and recalculation",
    "dm.s1": "Pick DB / preselect seeds",
    "dm.s2": "Submit analyze (async)",
    "dm.s3": "Results workbench + shelf edits",
    "dm.s4": "Regenerate the plan",
    "dm.s5": "Causal graph · export PDF",
    "dm.sub":
      "Result modules: recommendation summary · DB fit · variable mapping · feasibility · hypotheses · causal graph · baseline model · identification · risks",
    "dm.p1":
      "Align with empirical-methods language: cross-DB match keys, shared year windows, feasibility vs identification layered clearly",
    "dm.p2":
      "Productize long runtimes: queued/running read-only; completed allows shelf edits/export; gaps and demotions stay visible",
    "dm.p3":
      "Delivery with eng: API contracts & state machines, integration docs, path-based acceptance; push leaf datasets and field-definition enrichment",
    "more.title": "Other projects",
    "more.1": "Intelligent Financial Expense-Reimbursement Audit System",
    "more.2": "Historical-Figure Biography Video Generation Agent",
    "more.3": "AI Financial Investment Research Assistant",
    "more.4": "Library Information Management System (Spring Boot + Vue)",
    "more.5": "AIoT-Enabled Air-Ground Collaborative Inference Method",
    "more.6":
      "Agricultural Monitoring Research and Practice Using Intelligent Vehicles",
  };

  const zhHans = {
    "nav.more": "更多",
    "hero.kicker": "港大 IDT · 2026–27 Capstone 申请材料",
    "hero.nameZh": "皮丞汐",
    "hero.title": "相关过往工作",
    "hero.lead":
      "这份材料整理了我在 AI 产品上的关键经历，方便老师快速了解我如何定义问题、设计研究工作流，以及把学术场景的 AI 能力做成可交付产品。",
    "hero.label.program": "专业",
    "hero.program": "创新设计与科技理学硕士（IDT）<br>香港大学",
    "hero.label.phone": "电话",
    "hero.label.focus": "方向",
    "hero.focus": FOCUS,
    "hero.label.target": "意向 Capstone",
    "hero.target": "全校 AI 应用中枢（AIPHOEN-2）",
    live: "线上产品 ↗",
    "rx.one": "面向科研写作的 AI 学术产品",
    "rx.blurb":
      "ResearchX 面向硕博研究生、青年教师等科研用户，解决学术写作里最耗时的几件事：把一篇论文读透、围绕研究主题组织综述、以及把写完的 Word 改成目标期刊能用的 LaTeX。它没有做成一个笼统的 AI 写作对话框，而是顺着真实写作流程，把高频、高门槛的场景拆成彼此独立的能力——该精读时就精读，该写综述时就按用途生成结构合用的稿件，该投稿排版时再进入期刊模板转换。目标很明确：降低「找文献、搭结构、写初稿、改格式」的时间成本，同时尽量贴合开题、学位论文、期刊投稿等真实学术场景，而不是输出一段通用的 AI 长文。",
    "rx.coverLabel": "封面",
    "rx.c1.label": "能力 01",
    "rx.c1.title": "文献综述生成 · 四模式",
    "rx.c1.one":
      "输入研究主题 → 选用途与质量档 → 异步生成大纲 / 分节正文 / 成稿 / 参考文献 → 成稿后局部改写与全局优化",
    "rx.c1.m1t": "通用",
    "rx.c1.m1p": "较完整四章综述 + 摘要关键词，可独立阅读的初稿",
    "rx.c1.m2t": "硕士",
    "rx.c1.m2p": "引言 + 文献综述章；强制「小结」衔接到本人 RQ 与方法",
    "rx.c1.m3t": "期刊",
    "rx.c1.m3p": "高信息密度；小结落到研究缺口与本文边际贡献",
    "rx.c1.m4t": "博士",
    "rx.c1.m4p": "更深结构与系统文献覆盖；更强一致性，耗时与成本更高",
    "rx.c1.p1":
      "按<strong>使用场景</strong>差异化结构与写作策略，而不是单一提示词模板",
    "rx.c1.p2":
      "质量约束产品化：如硕士/期刊必须有「小结」，避免模型自由发挥不可用",
    "rx.c1.p3":
      "成本与模式匹配：重模式（博士）更高门槛，避免轻量需求误入重任务",
    "rx.c2.label": "能力 02",
    "rx.c2.title": "单篇论文解读",
    "rx.c2.one":
      "上传一篇论文 → 结构化精读报告 → 仅围绕该篇追问 / 局部修改（不做多篇检索，不跑四模式综述）",
    "rx.c2.s1": "上传 PDF/Word，无需自然语言描述任务",
    "rx.c2.s2": "抽取全文，并行生成解读章节",
    "rx.c2.s3": "输出报告；可追问术语 / 图表 / 公式",
    "rx.c2.sub":
      "交付结构：分析 · 引言 · 模型设定 · 识别与估计 · 实证结果 · 结论与启示",
    "rx.c2.f1": "上传进入解读",
    "rx.c2.f2": "后台分析",
    "rx.c2.f3label": "Fig.3 · 结果",
    "rx.c2.f3title": "结构化解读报告（长结果页）",
    "rx.c2.f3hint": "滚动浏览完整输出",
    "rx.c3.label": "能力 03",
    "rx.c3.title": "Word → 期刊 LaTeX · 模板扩展",
    "rx.c3.one":
      "选目标期刊模板 → 自动转换正文 / 公式 / 表格 / 插图 / 参考文献 → 输出尽量可编译的 TeX 包",
    "rx.c3.p1": "解决「内容已写完，但目标刊要求 LaTeX」的最后一公里",
    "rx.c3.p2":
      "新刊流水线：官方样例 → 差异分析 → 适配 → 冒烟校验 → 上线可选",
    "rx.c3.p3": "把「能不能投这个刊」从个案开发做成可扩展模板体系",
    "rx.c3.demo": "演示",
    "rx.c3.demoTitle": "LaTeX 格式转换",
    "dm.one":
      "经济研究方案与字段匹配 · 研究问题 → 库/字段 → 可执行方案",
    "dm.blurb":
      "经济数据站原有能力偏「选库—下载—可视化」。真正卡点在更上游：研究问题与库表缺少翻译层、理论变量难落到可观测字段、跨库匹配易错、有字段仍缺可行性与因果方案。DataMatch 做成站内<strong>研究工作流</strong>，而不是通用 Chat；边界刻意不做浏览/取数/会员，研究服务独立 Base URL。",
    "dm.m1t": "探索型 · 全库推荐",
    "dm.m1p": "有题目未定库 → 推荐列表 + 解释「为什么推荐」",
    "dm.m2t": "指定库型 · 适配补缺",
    "dm.m2p": "已有常用/导师指定库 → 这个库能不能做、缺什么、补哪几个库",
    "dm.coreLabel": "核心交互",
    "dm.coreTitle": "字段货架 · 人机协同",
    "dm.coreOne":
      "AI 召回候选与建议角色；用户决定启用哪些、赋予何角色（X/Y 各最多 1）；改池/勾选不重跑贵链路，确认后再 regenerate（revision+1）。",
    "dm.coreP1":
      "字段状态：active / demoted / parked / excluded · 灰勾 + 原因文案，避免「看起来能用、实际未进模型」",
    "dm.coreP2": "首次 analyze 只勾主映射，其余候选默认空勾，降低认知负担",
    "dm.coreP3": "原则：AI 起草 · 用户做研究判断 · 系统约束与重算",
    "dm.s1": "选库 / 预选 seed",
    "dm.s2": "提交 analyze（异步）",
    "dm.s3": "结果工作台 + 货架精修",
    "dm.s4": "regenerate 方案",
    "dm.s5": "因果图 · 导出 PDF",
    "dm.sub":
      "结果模块：推荐摘要 · 库适配 · 变量映射 · 可行性 · 假设 · 因果图 · 基准模型 · 识别 · 风险",
    "dm.p1":
      "对齐实证方法论语言：跨库匹配键、共同年份窗、可行性 vs 可识别分层表达",
    "dm.p2":
      "长耗时产品化：queued/running 只读；completed 可改货架/导出；缺口与降级显式化",
    "dm.p3":
      "协作交付：接口契约与状态机、联调文档、业务路径验收；推动叶子数据集与字段口径增强",
    "more.title": "其他项目",
    "more.1": "智能财务报销审核系统",
    "more.2": "历史人物传记视频生成 Agent",
    "more.3": "AI 金融投研助手",
    "more.4": "图书信息管理系统（Spring Boot + Vue）",
    "more.5": "空地协同推理方法（AIoT）",
    "more.6": "智能车辆农业监测研究与实践",
  };

  const zhHant = {
    "nav.more": "更多",
    "hero.kicker": "港大 IDT · 2026–27 Capstone 申請材料",
    "hero.nameZh": "皮丞汐",
    "hero.title": "相關過往工作",
    "hero.lead":
      "這份材料整理了我在 AI 產品上的關鍵經歷，方便老師快速了解我如何定義問題、設計研究工作流，以及把學術場景的 AI 能力做成可交付產品。",
    "hero.label.program": "專業",
    "hero.program": "創新設計與科技理學碩士（IDT）<br>香港大學",
    "hero.label.phone": "電話",
    "hero.label.focus": "方向",
    "hero.focus": FOCUS,
    "hero.label.target": "意向 Capstone",
    "hero.target": "全校 AI 應用中樞（AIPHOEN-2）",
    live: "線上產品 ↗",
    "rx.one": "面向科研寫作的 AI 學術產品",
    "rx.blurb":
      "ResearchX 面向碩博研究生、青年教師等科研用戶，解決學術寫作裡最耗時的幾件事：把一篇論文讀透、圍繞研究主題組織綜述、以及把寫完的 Word 改成目標期刊能用的 LaTeX。它沒有做成一個籠統的 AI 寫作對話框，而是順著真實寫作流程，把高頻、高門檻的場景拆成彼此獨立的能力——該精讀時就精讀，該寫綜述時就按用途生成結構合用的稿件，該投稿排版時再進入期刊模板轉換。目標很明確：降低「找文獻、搭結構、寫初稿、改格式」的時間成本，同時盡量貼合開題、學位論文、期刊投稿等真實學術場景，而不是輸出一段通用的 AI 長文。",
    "rx.coverLabel": "封面",
    "rx.c1.label": "能力 01",
    "rx.c1.title": "文獻綜述生成 · 四模式",
    "rx.c1.one":
      "輸入研究主題 → 選用途與質量檔 → 異步生成大綱 / 分節正文 / 成稿 / 參考文獻 → 成稿後局部改寫與全局優化",
    "rx.c1.m1t": "通用",
    "rx.c1.m1p": "較完整四章綜述 + 摘要關鍵詞，可獨立閱讀的初稿",
    "rx.c1.m2t": "碩士",
    "rx.c1.m2p": "引言 + 文獻綜述章；強制「小結」銜接到本人 RQ 與方法",
    "rx.c1.m3t": "期刊",
    "rx.c1.m3p": "高信息密度；小結落到研究缺口與本文邊際貢獻",
    "rx.c1.m4t": "博士",
    "rx.c1.m4p": "更深結構與系統文獻覆蓋；更強一致性，耗時與成本更高",
    "rx.c1.p1":
      "按<strong>使用場景</strong>差異化結構與寫作策略，而不是單一提示詞模板",
    "rx.c1.p2":
      "質量約束產品化：如碩士/期刊必須有「小結」，避免模型自由發揮不可用",
    "rx.c1.p3":
      "成本與模式匹配：重模式（博士）更高門檻，避免輕量需求誤入重任務",
    "rx.c2.label": "能力 02",
    "rx.c2.title": "單篇論文解讀",
    "rx.c2.one":
      "上傳一篇論文 → 結構化精讀報告 → 僅圍繞該篇追問 / 局部修改（不做多篇檢索，不跑四模式綜述）",
    "rx.c2.s1": "上傳 PDF/Word，無需自然語言描述任務",
    "rx.c2.s2": "抽取全文，並行生成解讀章節",
    "rx.c2.s3": "輸出報告；可追問術語 / 圖表 / 公式",
    "rx.c2.sub":
      "交付結構：分析 · 引言 · 模型設定 · 識別與估計 · 實證結果 · 結論與啟示",
    "rx.c2.f1": "上傳進入解讀",
    "rx.c2.f2": "後台分析",
    "rx.c2.f3label": "Fig.3 · 結果",
    "rx.c2.f3title": "結構化解讀報告（長結果頁）",
    "rx.c2.f3hint": "滾動瀏覽完整輸出",
    "rx.c3.label": "能力 03",
    "rx.c3.title": "Word → 期刊 LaTeX · 模板擴展",
    "rx.c3.one":
      "選目標期刊模板 → 自動轉換正文 / 公式 / 表格 / 插圖 / 參考文獻 → 輸出盡量可編譯的 TeX 包",
    "rx.c3.p1": "解決「內容已寫完，但目標刊要求 LaTeX」的最後一公里",
    "rx.c3.p2":
      "新刊流水線：官方樣例 → 差異分析 → 適配 → 冒煙校驗 → 上線可選",
    "rx.c3.p3": "把「能不能投這個刊」從個案開發做成可擴展模板體系",
    "rx.c3.demo": "演示",
    "rx.c3.demoTitle": "LaTeX 格式轉換",
    "dm.one":
      "經濟研究方案與字段匹配 · 研究問題 → 庫/字段 → 可執行方案",
    "dm.blurb":
      "經濟數據站原有能力偏「選庫—下載—視覺化」。真正卡點在更上游：研究問題與庫表缺少翻譯層、理論變量難落到可觀測字段、跨庫匹配易錯、有字段仍缺可行性與因果方案。DataMatch 做成站內<strong>研究工作流</strong>，而不是通用 Chat；邊界刻意不做瀏覽/取數/會員，研究服務獨立 Base URL。",
    "dm.m1t": "探索型 · 全庫推薦",
    "dm.m1p": "有題目未定庫 → 推薦列表 + 解釋「為什麼推薦」",
    "dm.m2t": "指定庫型 · 適配補缺",
    "dm.m2p": "已有常用/導師指定庫 → 這個庫能不能做、缺什麼、補哪幾個庫",
    "dm.coreLabel": "核心交互",
    "dm.coreTitle": "字段貨架 · 人機協同",
    "dm.coreOne":
      "AI 召回候選與建議角色；用戶決定啟用哪些、賦予何角色（X/Y 各最多 1）；改池/勾選不重跑貴鏈路，確認後再 regenerate（revision+1）。",
    "dm.coreP1":
      "字段狀態：active / demoted / parked / excluded · 灰勾 + 原因文案，避免「看起來能用、實際未進模型」",
    "dm.coreP2": "首次 analyze 只勾主映射，其餘候選默認空勾，降低認知負擔",
    "dm.coreP3": "原則：AI 起草 · 用戶做研究判斷 · 系統約束與重算",
    "dm.s1": "選庫 / 預選 seed",
    "dm.s2": "提交 analyze（異步）",
    "dm.s3": "結果工作台 + 貨架精修",
    "dm.s4": "regenerate 方案",
    "dm.s5": "因果圖 · 導出 PDF",
    "dm.sub":
      "結果模組：推薦摘要 · 庫適配 · 變量映射 · 可行性 · 假設 · 因果圖 · 基準模型 · 識別 · 風險",
    "dm.p1":
      "對齊實證方法論語言：跨庫匹配鍵、共同年份窗、可行性 vs 可識別分層表達",
    "dm.p2":
      "長耗時產品化：queued/running 只讀；completed 可改貨架/導出；缺口與降級顯式化",
    "dm.p3":
      "協作交付：接口契約與狀態機、聯調文檔、業務路徑驗收；推動葉子數據集與字段口徑增強",
    "more.title": "其他項目",
    "more.1": "智能財務報銷審核系統",
    "more.2": "歷史人物傳記視頻生成 Agent",
    "more.3": "AI 金融投研助手",
    "more.4": "圖書資訊管理系統（Spring Boot + Vue）",
    "more.5": "空地協同推理方法（AIoT）",
    "more.6": "智能車輛農業監測研究與實踐",
  };

  const dict = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant,
  };

  const TITLE = {
    en: "Pi Chengxi — Relevant Past Work",
    "zh-Hans": "皮丞汐 — 相关过往工作",
    "zh-Hant": "皮丞汐 — 相關過往工作",
  };

  const HTML_LANG = {
    en: "en",
    "zh-Hans": "zh-CN",
    "zh-Hant": "zh-HK",
  };

  function normalizeLang(lang) {
    if (lang === "zh") return "zh-Hans";
    if (lang === "zh-Hans" || lang === "zh-Hant" || lang === "en") return lang;
    return "en";
  }

  function applyLang(lang) {
    lang = normalizeLang(lang);
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = HTML_LANG[lang] || "en";
    document.title = TITLE[lang] || TITLE.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (pack[key] != null) el.innerHTML = pack[key];
    });

    document.querySelectorAll("[data-lang-set]").forEach((btn) => {
      const active = btn.getAttribute("data-lang-set") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch (_) {}
  }

  const saved = (() => {
    try {
      return localStorage.getItem("portfolio-lang");
    } catch (_) {
      return null;
    }
  })();

  applyLang(normalizeLang(saved) || "en");

  document.querySelectorAll("[data-lang-set]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.getAttribute("data-lang-set"));
    });
  });
})();

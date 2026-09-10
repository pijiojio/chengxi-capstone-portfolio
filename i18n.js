(() => {
  const FOCUS = "AI Product Management / AI workflows / AI Agent";

  const en = {
    "nav.more": "More",
    "hero.kicker": "HKU IDT · 2026–27 Capstone Application",
    "hero.nameZh": "皮丞汐",
    "hero.title": "Relevant Past Work",
    "hero.lead":
      "A short portfolio of my AI product experience—prepared so you can quickly see how I define problems, set capability boundaries, design research workflows, and ship usable academic AI applications.",
    "hero.label.program": "Programme",
    "hero.program":
      "MSc Innovative Design and Technology (IDT)<br>The University of Hong Kong",
    "hero.label.phone": "Phone",
    "hero.label.focus": "Focus",
    "hero.focus": FOCUS,
    "hero.label.target": "Capstone interest",
    "hero.target": "University-Wide AI Application Hub (AIPHOEN-2)",
    "cap.label": "Fit for AIPHOEN-2",
    "cap.title": "How this maps to a university AI application hub",
    "cap.1t": "Application orchestration",
    "cap.1p":
      "Scenario routing and capability boundaries across review, close reading, and formatting—not one generic chat.",
    "cap.2t": "Knowledge boundaries",
    "cap.2p":
      "Approved inputs and scoped outputs: attachment → one paper; topic → review; Word → journal template.",
    "cap.3t": "Evaluation & control",
    "cap.3p":
      "Quality rules, human revision loops, mode–cost matching, and polish after generation.",
    "cap.4t": "Multi-role academic use",
    "cap.4p":
      "Master’s / PhD / journal / teacher workflows—transferable to students, teachers, and research support.",
    live: "Live ↗",
    "rx.one": "An AI product for academic research writing",
    "rx.blurb":
      "ResearchX serves graduate students, early-career researchers, and other academic users who spend too much time on the hardest parts of research writing: reading a paper thoroughly, organizing a literature review around a research topic, and turning a finished Word manuscript into journal-ready LaTeX. Instead of offering a generic AI writing chat box, it follows the real writing process and splits high-frequency, high-friction scenarios into separate capabilities—close reading when users need to understand one paper, purpose-specific review generation when they need a structured draft, and journal-template conversion when formatting for submission. The goal is clear: cut the time cost of finding literature, building structure, drafting, and formatting, while staying close to real academic situations such as thesis proposals, dissertations, and journal submissions—rather than producing generic AI long-form text.",
    "rx.roleLabel": "My role & decisions",
    "rx.role1":
      "Split academic writing into three independent paths with clear inputs, goals, and boundaries",
    "rx.role2":
      "Set the routing rule: attachment → single-paper interpretation; topic only → literature review",
    "rx.role3":
      "Designed four review modes by real use case (structure, ending logic, delivery standard)—not one prompt template",
    "rx.role4":
      "Productized quality rules and a generate → evaluate → polish loop (prompt iteration, manual checks, expert review)",
    "rx.role5":
      "Pushed journal-format conversion from one-off adaptation toward a scalable template pipeline",
    "rx.outLabel": "Outcomes",
    "rx.out1": "Shipped ResearchX to production (live product)",
    "rx.out2": "Scaled journal / LaTeX template coverage to 100+ journals",
    "rx.out3":
      "Cut per-journal setup time from ~6 hours to ~1 hour via standardized adaptation",
    "rx.dec1t": "Routing decision",
    "rx.dec1p":
      "Users often confuse “upload one paper” with “write a review.” I treated them as two products, not two inputs to the same flow.",
    "rx.dec2t": "Evaluation & polish",
    "rx.dec2p":
      "Long AI text is not the end state: outline-first, required summary rules, then local rewrite / global refine after draft.",
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
    "dm.roleLabel": "My role & decisions",
    "dm.role1":
      "Defined the problem as “question → matching → executable plan,” not another chat or download tool",
    "dm.role2":
      "Set a hard product boundary: research service only; browsing / membership stay on the original platform",
    "dm.role3":
      "Designed dual entry paths (full-catalog explore vs specified-DB fit) sharing one downstream plan pipeline",
    "dm.role4":
      "Made human–AI collaboration the core: AI proposes fields/roles; users confirm before regenerating the plan",
    "dm.role5":
      "Translated empirical-methods language (X/Y/M/W/C, feasibility vs identification) into modules users can act on",
    "dm.outLabel": "Outcomes",
    "dm.out1": "0→1 product definition and launch on the economic data platform (live)",
    "dm.out2":
      "Closed the research loop: research question → DB/field match → hypotheses / causal plan → PDF export",
    "dm.out3":
      "Kept the AI service independently shippable with low intrusion into the existing frontend",
    "dm.m1t": "Exploratory · full-catalog recommend",
    "dm.m1p": "Has a topic but no database yet → ranked recommendations + why they fit",
    "dm.m2t": "Specified DB · fit & fill gaps",
    "dm.m2p":
      "Already has a preferred / advisor-assigned database → can it work, what’s missing, which DBs to add",
    "dm.modLabel": "Modules",
    "dm.modTitle": "What the product covers",
    "dm.modOne":
      "Visible capabilities along the research workflow—from picking data to exporting an executable plan.",
    "dm.f1t": "Quick DB pick",
    "dm.f1p": "Recommend list / search / pin a specified database",
    "dm.f2t": "Field catalog",
    "dm.f2p": "Browse by database or search field names/definitions; optional seed preselect",
    "dm.f3t": "Research analyze",
    "dm.f3p": "Submit a research question (with optional DB / seeds) and get structured results",
    "dm.f4t": "Results workbench",
    "dm.f4p": "Recommendation summary, DB fit notes, field shelf, variable mapping, feasibility",
    "dm.f5t": "Plan drafting",
    "dm.f5p": "Hypotheses, causal graph, baseline model, identification strategy, and risks",
    "dm.f6t": "Refine & export",
    "dm.f6p": "Adjust selected fields/roles, regenerate the plan, export causal graph + PDF report",
    "dm.s1": "Pick DB / preselect seeds",
    "dm.s2": "Submit research question",
    "dm.s3": "Review matching & plan",
    "dm.s4": "Refine fields & regenerate",
    "dm.s5": "Export causal graph · PDF",
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
      "这份材料整理了我在 AI 产品上的关键经历，方便老师快速了解我如何定义问题、划定能力边界、设计研究工作流，以及把学术场景的 AI 能力做成可交付产品。",
    "hero.label.program": "专业",
    "hero.program": "创新设计与科技理学硕士（IDT）<br>香港大学",
    "hero.label.phone": "电话",
    "hero.label.focus": "方向",
    "hero.focus": FOCUS,
    "hero.label.target": "意向 Capstone",
    "hero.target": "全校 AI 应用中枢（AIPHOEN-2）",
    "cap.label": "与 AIPHOEN-2 的对应",
    "cap.title": "这些经历如何对接全校 AI 应用中枢",
    "cap.1t": "应用编排",
    "cap.1p": "按场景路由能力边界：综述、精读、排版——而不是一个万能对话框。",
    "cap.2t": "知识与权限边界",
    "cap.2p": "输入与输出范围清晰：有附件→单篇；只有主题→综述；已有 Word→期刊模板。",
    "cap.3t": "评测与可控",
    "cap.3p": "质量硬规则、人机修订闭环、模式与成本匹配，以及生成后的打磨。",
    "cap.4t": "多角色学术场景",
    "cap.4p": "覆盖硕士/博士/期刊/教师写作路径，可迁移到学生、教师与科研支持。",
    live: "线上产品 ↗",
    "rx.one": "面向科研写作的 AI 学术产品",
    "rx.blurb":
      "ResearchX 面向硕博研究生、青年教师等科研用户，解决学术写作里最耗时的几件事：把一篇论文读透、围绕研究主题组织综述、以及把写完的 Word 改成目标期刊能用的 LaTeX。它没有做成一个笼统的 AI 写作对话框，而是顺着真实写作流程，把高频、高门槛的场景拆成彼此独立的能力——该精读时就精读，该写综述时就按用途生成结构合用的稿件，该投稿排版时再进入期刊模板转换。目标很明确：降低「找文献、搭结构、写初稿、改格式」的时间成本，同时尽量贴合开题、学位论文、期刊投稿等真实学术场景，而不是输出一段通用的 AI 长文。",
    "rx.roleLabel": "我的角色与决策",
    "rx.role1": "将学术写作拆成三条独立主路径，明确输入、目标与边界",
    "rx.role2": "设定分流规则：有附件→单篇解读；只有主题→文献综述",
    "rx.role3": "按真实用途设计四模式综述（结构、收束逻辑、交付标准），而非单一提示词模板",
    "rx.role4": "把质量规则与「生成→评测→打磨」闭环产品化（提示词迭代、人工抽检、专家评审）",
    "rx.role5": "推动投稿格式从个案适配走向可规模扩展的模板流水线",
    "rx.outLabel": "结果",
    "rx.out1": "ResearchX 已上线（可访问线上产品）",
    "rx.out2": "期刊 / LaTeX 模板覆盖扩展至 100+ 期刊",
    "rx.out3": "单刊适配时间由约 6 小时降至约 1 小时",
    "rx.dec1t": "分流决策",
    "rx.dec1p": "用户常把「上传一篇论文」理解成「帮我写综述」。我将其拆成两个产品能力，而不是同一流程的两种输入。",
    "rx.dec2t": "评测与打磨",
    "rx.dec2p": "长文本生成不是终点：先大纲、强制小结等规则，成稿后再局部改写 / 全局优化。",
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
      "按使用场景差异化结构与写作策略，而不是单一提示词模板",
    "rx.c1.p2":
      "质量约束产品化：如硕士/期刊必须有「小结」，避免模型自由发挥不可用",
    "rx.c1.p3":
      "成本与模式匹配：重模式（博士）更高门槛，避免轻量需求误入重任务",
    "rx.c2.label": "能力 02",
    "rx.c2.title": "单篇论文解读",
    "rx.c2.one":
      "上传一篇论文 → 结构化精读报告 → 仅围绕该篇追问或局部修改",
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
    "dm.roleLabel": "我的角色与决策",
    "dm.role1": "把问题定义为「研究问题 → 匹配 → 可执行方案」，而不是再做一个聊天或下载工具",
    "dm.role2": "划定硬边界：只做研究服务；浏览/会员仍走原数据站",
    "dm.role3": "设计双入口（全库探索 vs 指定库适配），共用下游方案流水线",
    "dm.role4": "把人机协同做成核心：AI 给出字段/角色建议，用户确认后再重生成方案",
    "dm.role5": "将实证方法论语言（X/Y/M/W/C、可行性 vs 可识别）翻译成用户可操作的模块",
    "dm.outLabel": "结果",
    "dm.out1": "完成经济数据站上的 0→1 产品定义并上线（可访问）",
    "dm.out2": "打通闭环：研究问题 → 库/字段匹配 → 假设/因果方案 → PDF 导出",
    "dm.out3": "研究服务可独立交付，对存量前端侵入低",
    "dm.m1t": "探索型 · 全库推荐",
    "dm.m1p": "有题目未定库 → 推荐列表 + 解释「为什么推荐」",
    "dm.m2t": "指定库型 · 适配补缺",
    "dm.m2p": "已有常用/导师指定库 → 这个库能不能做、缺什么、补哪几个库",
    "dm.modLabel": "功能模块",
    "dm.modTitle": "产品能力拆分",
    "dm.modOne": "沿研究工作流拆开的可见能力——从选数据到导出可执行方案。",
    "dm.f1t": "快速选库",
    "dm.f1p": "推荐列表 / 搜索 / 指定库置顶",
    "dm.f2t": "字段目录",
    "dm.f2p": "按库浏览或全库搜字段名/口径；支持预选 seed",
    "dm.f3t": "研究分析",
    "dm.f3p": "提交研究问题（可带指定库、seed）并得到结构化结果",
    "dm.f4t": "结果工作台",
    "dm.f4p": "推荐摘要、库适配说明、字段货架、变量映射、可行性",
    "dm.f5t": "方案起草",
    "dm.f5p": "假设、因果图、基准模型、识别策略与风险提示",
    "dm.f6t": "精修与导出",
    "dm.f6p": "调整字段/角色后重生成方案，导出因果图与 PDF 报告",
    "dm.s1": "选库 / 预选 seed",
    "dm.s2": "提交研究问题",
    "dm.s3": "查看匹配与方案",
    "dm.s4": "精修字段并重生成",
    "dm.s5": "导出因果图 · PDF",
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
      "這份材料整理了我在 AI 產品上的關鍵經歷，方便老師快速了解我如何定義問題、劃定能力邊界、設計研究工作流，以及把學術場景的 AI 能力做成可交付產品。",
    "hero.label.program": "專業",
    "hero.program": "創新設計與科技理學碩士（IDT）<br>香港大學",
    "hero.label.phone": "電話",
    "hero.label.focus": "方向",
    "hero.focus": FOCUS,
    "hero.label.target": "意向 Capstone",
    "hero.target": "全校 AI 應用中樞（AIPHOEN-2）",
    "cap.label": "與 AIPHOEN-2 的對應",
    "cap.title": "這些經歷如何對接全校 AI 應用中樞",
    "cap.1t": "應用編排",
    "cap.1p": "按場景路由能力邊界：綜述、精讀、排版——而不是一個萬能對話框。",
    "cap.2t": "知識與權限邊界",
    "cap.2p": "輸入與輸出範圍清晰：有附件→單篇；只有主題→綜述；已有 Word→期刊模板。",
    "cap.3t": "評測與可控",
    "cap.3p": "質量硬規則、人機修訂閉環、模式與成本匹配，以及生成後的打磨。",
    "cap.4t": "多角色學術場景",
    "cap.4p": "覆蓋碩士/博士/期刊/教師寫作路徑，可遷移到學生、教師與科研支持。",
    live: "線上產品 ↗",
    "rx.one": "面向科研寫作的 AI 學術產品",
    "rx.blurb":
      "ResearchX 面向碩博研究生、青年教師等科研用戶，解決學術寫作裡最耗時的幾件事：把一篇論文讀透、圍繞研究主題組織綜述、以及把寫完的 Word 改成目標期刊能用的 LaTeX。它沒有做成一個籠統的 AI 寫作對話框，而是順著真實寫作流程，把高頻、高門檻的場景拆成彼此獨立的能力——該精讀時就精讀，該寫綜述時就按用途生成結構合用的稿件，該投稿排版時再進入期刊模板轉換。目標很明確：降低「找文獻、搭結構、寫初稿、改格式」的時間成本，同時盡量貼合開題、學位論文、期刊投稿等真實學術場景，而不是輸出一段通用的 AI 長文。",
    "rx.roleLabel": "我的角色與決策",
    "rx.role1": "將學術寫作拆成三條獨立主路徑，明確輸入、目標與邊界",
    "rx.role2": "設定分流規則：有附件→單篇解讀；只有主題→文獻綜述",
    "rx.role3": "按真實用途設計四模式綜述（結構、收束邏輯、交付標準），而非單一提示詞模板",
    "rx.role4": "把質量規則與「生成→評測→打磨」閉環產品化（提示詞迭代、人工抽檢、專家評審）",
    "rx.role5": "推動投稿格式從個案適配走向可規模擴展的模板流水線",
    "rx.outLabel": "結果",
    "rx.out1": "ResearchX 已上線（可訪問線上產品）",
    "rx.out2": "期刊 / LaTeX 模板覆蓋擴展至 100+ 期刊",
    "rx.out3": "單刊適配時間由約 6 小時降至約 1 小時",
    "rx.dec1t": "分流決策",
    "rx.dec1p": "用戶常把「上傳一篇論文」理解成「幫我寫綜述」。我將其拆成兩個產品能力，而不是同一流程的兩種輸入。",
    "rx.dec2t": "評測與打磨",
    "rx.dec2p": "長文本生成不是終點：先大綱、強制小結等規則，成稿後再局部改寫 / 全局優化。",
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
    "dm.roleLabel": "我的角色與決策",
    "dm.role1": "把問題定義為「研究問題 → 匹配 → 可執行方案」，而不是再做一個聊天或下載工具",
    "dm.role2": "劃定硬邊界：只做研究服務；瀏覽/會員仍走原數據站",
    "dm.role3": "設計雙入口（全庫探索 vs 指定庫適配），共用下游方案流水線",
    "dm.role4": "把人機協同做成核心：AI 給出字段/角色建議，用戶確認後再重生成方案",
    "dm.role5": "將實證方法論語言（X/Y/M/W/C、可行性 vs 可識別）翻譯成用戶可操作的模組",
    "dm.outLabel": "結果",
    "dm.out1": "完成經濟數據站上的 0→1 產品定義並上線（可訪問）",
    "dm.out2": "打通閉環：研究問題 → 庫/字段匹配 → 假設/因果方案 → PDF 導出",
    "dm.out3": "研究服務可獨立交付，對存量前端侵入低",
    "dm.m1t": "探索型 · 全庫推薦",
    "dm.m1p": "有題目未定庫 → 推薦列表 + 解釋「為什麼推薦」",
    "dm.m2t": "指定庫型 · 適配補缺",
    "dm.m2p": "已有常用/導師指定庫 → 這個庫能不能做、缺什麼、補哪幾個庫",
    "dm.modLabel": "功能模組",
    "dm.modTitle": "產品能力拆分",
    "dm.modOne": "沿研究工作流拆開的可見能力——從選數據到導出可執行方案。",
    "dm.f1t": "快速選庫",
    "dm.f1p": "推薦列表 / 搜索 / 指定庫置頂",
    "dm.f2t": "字段目錄",
    "dm.f2p": "按庫瀏覽或全庫搜字段名/口徑；支持預選 seed",
    "dm.f3t": "研究分析",
    "dm.f3p": "提交研究問題（可帶指定庫、seed）並得到結構化結果",
    "dm.f4t": "結果工作台",
    "dm.f4p": "推薦摘要、庫適配說明、字段貨架、變量映射、可行性",
    "dm.f5t": "方案起草",
    "dm.f5p": "假設、因果圖、基準模型、識別策略與風險提示",
    "dm.f6t": "精修與導出",
    "dm.f6p": "調整字段/角色後重生成方案，導出因果圖與 PDF 報告",
    "dm.s1": "選庫 / 預選 seed",
    "dm.s2": "提交研究問題",
    "dm.s3": "查看匹配與方案",
    "dm.s4": "精修字段並重生成",
    "dm.s5": "導出因果圖 · PDF",
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

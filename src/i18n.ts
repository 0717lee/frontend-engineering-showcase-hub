export type Language = 'en' | 'zh'

export const translations = {
    en: {
        // Header
        'header.tagline': 'Frontend Engineering Showcase Hub',
        'header.lang': '中文',

        // Footer
        'footer.message': 'Engineering over Features · Decisions over Code',

        // Home
        'home.title': 'Frontend Engineering System',
        'home.tagline': 'A frontend engineering system for managing product-level and experimental projects.',
        'home.structure': 'Engineering Structure',
        'home.card.panel.title': 'Engineering Control Panel',
        'home.card.panel.desc': 'The engineering baseline for all frontend projects.',
        'home.card.product.title': 'Product-level Projects',
        'home.card.product.desc': 'Stable, globally deployed frontend applications.',
        'home.card.experiment.title': 'Experimental Projects',
        'home.card.experiment.desc': 'Projects under engineering evaluation.',

        // Badges
        'badge.selfhosted': 'Self-hosted',
        'badge.production': 'Production',
        'badge.experiment': 'Experiment',

        // Navigation
        'nav.back': '← Back to Overview',

        // Control Panel
        'panel.title': 'Engineering Control Panel',
        'panel.quote': 'This control panel serves as the engineering baseline for all frontend projects.',
        'panel.whatItDoes': 'What It Does',
        'panel.whatItDoes.1': 'Monitors server status and system resources',
        'panel.whatItDoes.2': 'Manages project metadata and deployment states',
        'panel.whatItDoes.3': 'Aggregates error logs across projects',
        'panel.whatItDoes.4': 'Syncs with external platforms (Vercel, Cloudflare, GitHub)',
        'panel.whySelfHosted': 'Why Self-hosted',
        'panel.whySelfHosted.1': 'Requires persistent server-side processes',
        'panel.whySelfHosted.2': "Needs direct access to the host machine's metrics",
        'panel.whySelfHosted.3': 'Acts as a central hub that all projects report to',
        'panel.whySelfHosted.4': 'Independence from third-party platform limitations',
        'panel.whatItDoesNot': 'What It Does NOT Do',
        'panel.whatItDoesNot.1': 'It does not host or serve any frontend project',
        'panel.whatItDoesNot.2': 'It does not replace CI/CD pipelines',
        'panel.whatItDoesNot.3': 'It does not store application data or user content',
        'panel.visit': 'Visit Control Panel →',

        // Product Project
        'product.title': 'CollabBoard',
        'product.subtitle': 'Product-level Frontend Project',
        'product.deployment': 'Deployment Strategy',
        'product.vercel': 'Primary deployment platform',
        'product.cloudflare': 'Secondary/backup deployment',
        'product.characteristics': 'Engineering Characteristics',
        'product.char.1': 'Stable Delivery — Production-ready with proven reliability',
        'product.char.2': 'Global CDN — Edge-distributed for optimal performance',
        'product.char.3': 'Automated Builds — Git-triggered CI/CD pipeline',
        'product.char.4': 'Zero-downtime — Instant rollback capability',
        'product.whyNot': 'Why Not Self-hosted?',
        'product.whyNot.desc': 'Product-level projects prioritize reliability and global reach over infrastructure control. Managed platforms provide:',
        'product.whyNot.1': '99.99% uptime SLA',
        'product.whyNot.2': 'Automatic SSL and CDN',
        'product.whyNot.3': 'No server maintenance overhead',
        'product.whyNot.4': 'Instant scaling without intervention',
        'product.visit': 'Visit CollabBoard →',

        // Experiment Project
        'experiment.title': 'Lumina Flow',
        'experiment.subtitle': 'Experimental Frontend Project',
        'experiment.status': 'Current Status',
        'experiment.status.eval': 'Engineering Evaluation',
        'experiment.status.eval.value': 'Completed',
        'experiment.status.deploy': 'Deployment Decision',
        'experiment.status.deploy.value': 'Planned — Vercel',
        'experiment.whyNot': 'Why Not Deployed Yet',
        'experiment.whyNot.1': 'Version 0.0.0 — Pre-release, still evolving',
        'experiment.whyNot.2': 'No Persistence Requirement — Pure client-side state',
        'experiment.whyNot.3': 'Engineering Validation Phase — Proving technical concepts',
        'experiment.whyNot.4': 'Low Traffic Expectation — No immediate user demand',
        'experiment.quote': 'Not all projects should be deployed immediately.',
        'experiment.evalResults': 'Evaluation Results',
        'experiment.eval.vercel': 'Vercel Fit',
        'experiment.eval.server': 'Server Required',
        'experiment.eval.obs': 'Observability',
        'experiment.yes': 'Yes',
        'experiment.no': 'No',
        'experiment.basic': 'Basic',
        'experiment.visit': 'View on GitHub →',
    },
    zh: {
        // Header
        'header.tagline': '前端工程展示中枢',
        'header.lang': 'EN',

        // Footer
        'footer.message': '工程优于功能 · 决策优于代码',

        // Home
        'home.title': '前端工程体系',
        'home.tagline': '一个用于管理产品级和实验级项目的前端工程体系。',
        'home.structure': '工程结构',
        'home.card.panel.title': '工程控制台',
        'home.card.panel.desc': '所有前端项目的工程基线。',
        'home.card.product.title': '产品级项目',
        'home.card.product.desc': '稳定的、全球部署的前端应用。',
        'home.card.experiment.title': '实验级项目',
        'home.card.experiment.desc': '正在进行工程评估的项目。',

        // Badges
        'badge.selfhosted': '自建服务器',
        'badge.production': '产品级',
        'badge.experiment': '实验级',

        // Navigation
        'nav.back': '← 返回总览',

        // Control Panel
        'panel.title': '工程控制台',
        'panel.quote': '此控制台作为所有前端项目的工程基线。',
        'panel.whatItDoes': '职责',
        'panel.whatItDoes.1': '监控服务器状态和系统资源',
        'panel.whatItDoes.2': '管理项目元数据和部署状态',
        'panel.whatItDoes.3': '聚合各项目的错误日志',
        'panel.whatItDoes.4': '与外部平台同步（Vercel、Cloudflare、GitHub）',
        'panel.whySelfHosted': '为何自建服务器',
        'panel.whySelfHosted.1': '需要持久化的服务端进程',
        'panel.whySelfHosted.2': '需要直接访问宿主机的监控指标',
        'panel.whySelfHosted.3': '作为所有项目汇报的中心枢纽',
        'panel.whySelfHosted.4': '不受第三方平台限制',
        'panel.whatItDoesNot': '不做什么',
        'panel.whatItDoesNot.1': '不托管或服务任何前端项目',
        'panel.whatItDoesNot.2': '不替代 CI/CD 流水线',
        'panel.whatItDoesNot.3': '不存储应用数据或用户内容',
        'panel.visit': '访问控制台 →',

        // Product Project
        'product.title': 'CollabBoard',
        'product.subtitle': '产品级前端项目',
        'product.deployment': '部署策略',
        'product.vercel': '主要部署平台',
        'product.cloudflare': '备用部署平台',
        'product.characteristics': '工程特征',
        'product.char.1': '稳定交付 — 经过验证的生产可靠性',
        'product.char.2': '全球 CDN — 边缘分发，性能最优',
        'product.char.3': '自动构建 — Git 触发的 CI/CD 流水线',
        'product.char.4': '零停机 — 即时回滚能力',
        'product.whyNot': '为何不自建服务器？',
        'product.whyNot.desc': '产品级项目优先考虑可靠性和全球覆盖，而非基础设施控制。托管平台提供：',
        'product.whyNot.1': '99.99% 可用性 SLA',
        'product.whyNot.2': '自动 SSL 和 CDN',
        'product.whyNot.3': '无服务器维护开销',
        'product.whyNot.4': '无需干预即可即时扩容',
        'product.visit': '访问 CollabBoard →',

        // Experiment Project
        'experiment.title': 'Lumina Flow',
        'experiment.subtitle': '实验级前端项目',
        'experiment.status': '当前状态',
        'experiment.status.eval': '工程评估',
        'experiment.status.eval.value': '已完成',
        'experiment.status.deploy': '部署决策',
        'experiment.status.deploy.value': '计划中 — Vercel',
        'experiment.whyNot': '为何尚未部署',
        'experiment.whyNot.1': '版本 0.0.0 — 预发布，仍在演进',
        'experiment.whyNot.2': '无持久化需求 — 纯客户端状态',
        'experiment.whyNot.3': '工程验证阶段 — 验证技术概念',
        'experiment.whyNot.4': '低流量预期 — 无即时用户需求',
        'experiment.quote': '并非所有项目都应立即部署。',
        'experiment.evalResults': '评估结果',
        'experiment.eval.vercel': '适合 Vercel',
        'experiment.eval.server': '需要服务器',
        'experiment.eval.obs': '可观察性',
        'experiment.yes': '是',
        'experiment.no': '否',
        'experiment.basic': '基础',
        'experiment.visit': '查看 GitHub →',
    }
} as const

export function t(key: keyof typeof translations['en'], lang: Language): string {
    return translations[lang][key] || key
}

import { useOutletContext } from 'react-router-dom'
import Card from '../components/Card'
import { type Language, t } from '../i18n'

export default function Home() {
    const { language } = useOutletContext<{ language: Language }>()

    const tree = language === 'en'
        ? `Frontend Engineering System
├── Engineering Control Panel (Self-hosted)
├── Product-level Projects
│   └── CollabBoard (Vercel + Cloudflare)
└── Experimental Projects
    └── Lumina Flow (Planned: Vercel)`
        : `前端工程体系
├── 工程控制台 (自建服务器)
├── 产品级项目
│   └── CollabBoard (Vercel + Cloudflare)
└── 实验级项目
    └── Lumina Flow (计划: Vercel)`

    return (
        <div className="page home">
            <section className="hero">
                <h1>{t('home.title', language)}</h1>
                <p className="tagline">{t('home.tagline', language)}</p>
            </section>

            <section className="structure">
                <h2>{t('home.structure', language)}</h2>
                <pre className="tree">{tree}</pre>
            </section>

            <section className="entries">
                <Card
                    titleKey="home.card.panel.title"
                    descKey="home.card.panel.desc"
                    to="/control-panel"
                    badgeKey="badge.selfhosted"
                />
                <Card
                    titleKey="home.card.product.title"
                    descKey="home.card.product.desc"
                    to="/product-project"
                    badgeKey="badge.production"
                />
                <Card
                    titleKey="home.card.experiment.title"
                    descKey="home.card.experiment.desc"
                    to="/experiment-project"
                    badgeKey="badge.experiment"
                />
            </section>
        </div>
    )
}

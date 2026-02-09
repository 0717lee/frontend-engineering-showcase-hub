import { Link, useOutletContext } from 'react-router-dom'
import { type Language, t } from '../i18n'

export default function ProductProject() {
    const { language } = useOutletContext<{ language: Language }>()

    return (
        <div className="page detail">
            <Link to="/" className="back-link">{t('nav.back', language)}</Link>

            <header className="page-header">
                <span className="page-badge production">{t('badge.production', language)}</span>
                <h1>{t('product.title', language)}</h1>
                <p className="subtitle">{t('product.subtitle', language)}</p>
            </header>

            <section className="content">
                <h2>{t('product.deployment', language)}</h2>
                <div className="strategy-grid">
                    <div className="strategy-item">
                        <strong>Vercel</strong>
                        <span>{t('product.vercel', language)}</span>
                    </div>
                    <div className="strategy-item">
                        <strong>Cloudflare Pages</strong>
                        <span>{t('product.cloudflare', language)}</span>
                    </div>
                </div>

                <h2>{t('product.characteristics', language)}</h2>
                <ul>
                    <li><strong>{t('product.char.1', language).split(' — ')[0]}</strong> — {t('product.char.1', language).split(' — ')[1]}</li>
                    <li><strong>{t('product.char.2', language).split(' — ')[0]}</strong> — {t('product.char.2', language).split(' — ')[1]}</li>
                    <li><strong>{t('product.char.3', language).split(' — ')[0]}</strong> — {t('product.char.3', language).split(' — ')[1]}</li>
                    <li><strong>{t('product.char.4', language).split(' — ')[0]}</strong> — {t('product.char.4', language).split(' — ')[1]}</li>
                </ul>

                <h2>{t('product.whyNot', language)}</h2>
                <p>{t('product.whyNot.desc', language)}</p>
                <ul>
                    <li>{t('product.whyNot.1', language)}</li>
                    <li>{t('product.whyNot.2', language)}</li>
                    <li>{t('product.whyNot.3', language)}</li>
                    <li>{t('product.whyNot.4', language)}</li>
                </ul>
            </section>

            <footer className="page-footer">
                <a
                    href="https://collab-board-lee.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                >
                    {t('product.visit', language)}
                </a>
            </footer>
        </div>
    )
}

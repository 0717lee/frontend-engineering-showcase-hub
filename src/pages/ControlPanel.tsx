import { Link, useOutletContext } from 'react-router-dom'
import { type Language, t } from '../i18n'

export default function ControlPanel() {
    const { language } = useOutletContext<{ language: Language }>()

    return (
        <div className="page detail">
            <Link to="/" className="back-link">{t('nav.back', language)}</Link>

            <header className="page-header">
                <span className="page-badge">{t('badge.selfhosted', language)}</span>
                <h1>{t('panel.title', language)}</h1>
            </header>

            <section className="content">
                <blockquote className="key-message">
                    {t('panel.quote', language)}
                </blockquote>

                <h2>{t('panel.whatItDoes', language)}</h2>
                <ul>
                    <li>{t('panel.whatItDoes.1', language)}</li>
                    <li>{t('panel.whatItDoes.2', language)}</li>
                    <li>{t('panel.whatItDoes.3', language)}</li>
                    <li>{t('panel.whatItDoes.4', language)}</li>
                </ul>

                <h2>{t('panel.whySelfHosted', language)}</h2>
                <ul>
                    <li>{t('panel.whySelfHosted.1', language)}</li>
                    <li>{t('panel.whySelfHosted.2', language)}</li>
                    <li>{t('panel.whySelfHosted.3', language)}</li>
                    <li>{t('panel.whySelfHosted.4', language)}</li>
                </ul>

                <h2>{t('panel.whatItDoesNot', language)}</h2>
                <ul>
                    <li>{t('panel.whatItDoesNot.1', language)}</li>
                    <li>{t('panel.whatItDoesNot.2', language)}</li>
                    <li>{t('panel.whatItDoesNot.3', language)}</li>
                </ul>
            </section>

            <footer className="page-footer">
                <a
                    href="http://159.75.241.13:8080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                >
                    {t('panel.visit', language)}
                </a>
            </footer>
        </div>
    )
}

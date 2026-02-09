import { Link, useOutletContext } from 'react-router-dom'
import { type Language, t } from '../i18n'

export default function ExperimentProject() {
    const { language } = useOutletContext<{ language: Language }>()

    return (
        <div className="page detail">
            <Link to="/" className="back-link">{t('nav.back', language)}</Link>

            <header className="page-header">
                <span className="page-badge experiment">{t('badge.experiment', language)}</span>
                <h1>{t('experiment.title', language)}</h1>
                <p className="subtitle">{t('experiment.subtitle', language)}</p>
            </header>

            <section className="content">
                <h2>{t('experiment.status', language)}</h2>
                <div className="status-box">
                    <div className="status-row">
                        <span className="status-label">{t('experiment.status.eval', language)}</span>
                        <span className="status-value completed">{t('experiment.status.eval.value', language)}</span>
                    </div>
                    <div className="status-row">
                        <span className="status-label">{t('experiment.status.deploy', language)}</span>
                        <span className="status-value planned">{t('experiment.status.deploy.value', language)}</span>
                    </div>
                </div>

                <h2>{t('experiment.whyNot', language)}</h2>
                <ul>
                    <li><strong>{t('experiment.whyNot.1', language).split(' — ')[0]}</strong> — {t('experiment.whyNot.1', language).split(' — ')[1]}</li>
                    <li><strong>{t('experiment.whyNot.2', language).split(' — ')[0]}</strong> — {t('experiment.whyNot.2', language).split(' — ')[1]}</li>
                    <li><strong>{t('experiment.whyNot.3', language).split(' — ')[0]}</strong> — {t('experiment.whyNot.3', language).split(' — ')[1]}</li>
                    <li><strong>{t('experiment.whyNot.4', language).split(' — ')[0]}</strong> — {t('experiment.whyNot.4', language).split(' — ')[1]}</li>
                </ul>

                <blockquote className="key-message">
                    {t('experiment.quote', language)}
                </blockquote>

                <h2>{t('experiment.evalResults', language)}</h2>
                <div className="eval-grid">
                    <div className="eval-item">
                        <span className="eval-label">{t('experiment.eval.vercel', language)}</span>
                        <span className="eval-value yes">{t('experiment.yes', language)}</span>
                    </div>
                    <div className="eval-item">
                        <span className="eval-label">{t('experiment.eval.server', language)}</span>
                        <span className="eval-value no">{t('experiment.no', language)}</span>
                    </div>
                    <div className="eval-item">
                        <span className="eval-label">{t('experiment.eval.obs', language)}</span>
                        <span className="eval-value">{t('experiment.basic', language)}</span>
                    </div>
                </div>
            </section>

            <footer className="page-footer">
                <a
                    href="https://github.com/0717lee/lumina-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                >
                    {t('experiment.visit', language)}
                </a>
            </footer>
        </div>
    )
}

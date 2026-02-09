import { Outlet, Link } from 'react-router-dom'
import { type Language, t } from '../i18n'

interface LayoutProps {
    language: Language
    onLanguageChange: (lang: Language) => void
}

export default function Layout({ language, onLanguageChange }: LayoutProps) {
    const toggleLanguage = () => {
        onLanguageChange(language === 'en' ? 'zh' : 'en')
    }

    return (
        <div className="layout">
            <header className="header">
                <Link to="/" className="logo">FESH</Link>
                <span className="tagline">{t('header.tagline', language)}</span>
                <button className="lang-toggle" onClick={toggleLanguage}>
                    {t('header.lang', language)}
                </button>
            </header>
            <main className="main">
                <Outlet context={{ language }} />
            </main>
            <footer className="footer">
                <p>{t('footer.message', language)}</p>
            </footer>
        </div>
    )
}

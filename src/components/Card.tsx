import { Link, useOutletContext } from 'react-router-dom'
import { type Language, t } from '../i18n'

interface CardProps {
    titleKey: keyof typeof import('../i18n').translations['en']
    descKey: keyof typeof import('../i18n').translations['en']
    to: string
    badgeKey: keyof typeof import('../i18n').translations['en']
}

export default function Card({ titleKey, descKey, to, badgeKey }: CardProps) {
    const { language } = useOutletContext<{ language: Language }>()

    return (
        <Link to={to} className="card">
            <div className="card-header">
                <h3 className="card-title">{t(titleKey, language)}</h3>
                <span className="card-badge">{t(badgeKey, language)}</span>
            </div>
            <p className="card-description">{t(descKey, language)}</p>
            <span className="card-arrow">→</span>
        </Link>
    )
}

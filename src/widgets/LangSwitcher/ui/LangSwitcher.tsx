import { classNames } from 'shared/lib/classNames/classNames'
import css from './LangSwitcher.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props

    const { t, i18n } = useTranslation()

    const langToggle = async (): Promise<void> => {
        try {
            await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Button
            onClick={langToggle}
            className={classNames(css.LangSwitcher, {}, [className])}
            {...otherProps}
        >
            {t('set_lang')}
        </Button>
    )
}

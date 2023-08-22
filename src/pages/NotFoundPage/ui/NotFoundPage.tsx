import { classNames } from 'shared/lib/classNames/classNames'
import css from './NotFoundPage.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props

    const { t } = useTranslation()

    return (
        <div
            className={classNames(css.NotFoundPage, {}, [className])}
            {...otherProps}
        >
            {t('404')}
        </div>
    )
}

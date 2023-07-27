import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

const MainPage: FC = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('main_page')}
        </div>
    )
}

export default MainPage

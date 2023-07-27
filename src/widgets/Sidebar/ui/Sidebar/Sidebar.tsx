import { classNames } from 'shared/lib/classNames/classNames'
import css from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {
        className
    } = props

    const [collapsed, setCollapsed] = useState(false)

    const toggle = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(css.Sidebar, { [css.collapsed]: collapsed }, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={toggle}>Toggle</Button>
            <div className={css.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

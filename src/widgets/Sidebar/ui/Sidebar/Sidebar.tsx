import {classNames} from "shared/lib/classNames/classNames";
import css from './Sidebar.module.scss'
import {FC, useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {

    const {
        className,
    } = props

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(css.Sidebar, {[css.collapsed]: collapsed}, [className])}
        >
            <Button onClick={toggle}>Toggle</Button>
            <div className={css.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

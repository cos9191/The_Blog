import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {

    const {
        className,
        children,
        ...otherProps
    } = props

    const{theme, toggleTheme} = useTheme();

    return (
        <button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            {...otherProps}
            onClick={toggleTheme}
        >
            Toggle theme
            {children}
        </button>
    )
}

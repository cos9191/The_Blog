import { classNames } from 'shared/lib/classNames/classNames'
import css from './Loader.module.scss'
import { FC } from 'react'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(css.ldsRoller, {}, [className])}
            {...otherProps}
        >
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

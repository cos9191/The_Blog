import { classNames } from 'shared/lib/classNames/classNames'
import css from './PageLoader.module.scss'
import { FC } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props

    return (
        <div
            className={classNames(css.PageLoader, {}, [className])}
            {...otherProps}
        >
            <Loader />
        </div>
    )
}

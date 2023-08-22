import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routesConfig/routesConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = (): JSX.Element => {
    return (
        <div className={'page-wrapper'}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {Object.values(routesConfig).map(({ element, path }) =>
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    )}
                </Routes>
            </Suspense>
        </div>
    )
}

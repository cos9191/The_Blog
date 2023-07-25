import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routesConfig} from "shared/config/routesConfig/routesConfig";

export const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routesConfig).map(({element, path}) =>
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                )}
            </Routes>
        </Suspense>
    )
};

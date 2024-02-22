import { flatMapDeep } from 'lodash'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'

export const generateFlatterRoutes = (routes = []) => {
  if (!routes) return []

  return flatMapDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlatterRoutes(subRoutes),
    ])
  )
}

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ hasData }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlatterRoutes(routes)
      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(({ component: Component, path, name, isPublic }) => {
            return (
              Component &&
              path && (
                <Route
                  path={path}
                  key={name}
                  element={
                    <PrivateRoute hasData={hasData} isPublic={isPublic} />
                  }
                >
                  <Route path={path} element={<Component />} name={name} />
                </Route>
              )
            )
          })}
        </Route>
      )
    })

    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}

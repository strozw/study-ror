import React from 'react'
import { renderRoutes } from 'react-router-config'
import App from './components/App'
import Home from './components/pages/Home'

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
)

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
)

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild
          }
        ]
      }
    ]
  }
]
export default routes

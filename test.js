import pkg from 'lodash'

const { flatMapDeep } = pkg
const routes = [
  {
    layout: 'MIniLayout',
    routes: [
      {
        name: 'customer-type',
        title: 'Customer Type',
        component: 'CustomerType',
        path: '/customer-type',
      },
    ],
  },
  {
    layout: 'Layout',
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: 'Home',
        path: '/',
      },

      {
        name: 'e-services',
        title: 'E-Services',
        component: 'EService',
        path: '/e-services',
      },
      {
        name: 'new',
        title: 'Create Account',
        component: 'New',
        path: '/new',
      },
    ],
  },
]

const generateFlatterRoutes = (routes = []) => {
  if (!routes) return []

  return flatMapDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlatterRoutes(subRoutes),
    ])
  )
}

console.log(generateFlatterRoutes(routes))

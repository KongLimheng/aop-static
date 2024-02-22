import Layout from '../components/Layout'
import MIniLayout from '../components/MIniLayout'
import CustomerType from '../pages/CustomerType'
import EService from '../pages/EService'
import Home from '../pages/Home'
import New from '../pages/New'
import QuickTransfer from '../pages/QuickTransfer'
import SuccessCreate from '../pages/SuccessCreate'
import { renderRoutes } from './generate-routes'

export const routes = [
  {
    layout: MIniLayout,
    routes: [
      {
        name: 'customer-type',
        title: 'Customer Type',
        component: CustomerType,
        path: '/customer-type',
        isPublic: true,
      },
      {
        name: 'success',
        title: 'Success Create',
        component: SuccessCreate,
        path: '/success',
      },
      {
        name: 'quick-transfer',
        title: 'Quick Transfer',
        component: QuickTransfer,
        path: '/quick-transfer',
      },
    ],
  },
  {
    layout: Layout,
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: Home,
        path: '/',
        isPublic: true,
      },

      {
        name: 'e-services',
        title: 'E-Services',
        component: EService,
        path: '/e-services',
        isPublic: true,
      },
      {
        name: 'new',
        title: 'Create Account',
        component: New,
        path: '/new',
        isPublic: true,
      },
    ],
  },
]

export const Routes = renderRoutes(routes)

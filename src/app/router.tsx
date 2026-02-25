import { createBrowserRouter } from 'react-router';
import DashboardLayout from './layout/DashboardLayout';
import Opinions from './pages/Opinions';
import Overview from './pages/Overview';
import Insights from './pages/Insights';
import Trends from './pages/Trends';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      { path: 'overview', Component: Overview },
      { path: 'opinions', Component: Opinions },
      { path: 'insights', Component: Insights },
      { path: 'trends', Component: Trends },
      { path: '*', Component: ErrorPage },
    ],
  },
]);

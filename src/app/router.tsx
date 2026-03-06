import { createBrowserRouter } from "react-router";

import DashboardLayout from "./layout/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import Insights from "./pages/Insights";
import Opinions from "./pages/Opinions";
import Overview from "./pages/Overview";
import Trends from "./pages/Trends";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      { path: "overview", Component: Overview },
      { path: "opinions", Component: Opinions },
      { path: "insights", Component: Insights },
      { path: "trends", Component: Trends },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

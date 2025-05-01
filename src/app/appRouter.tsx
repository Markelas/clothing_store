import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "pages/main/ui/MainPage";

import { Layout } from "shared/ui/Layout/Layout";

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>error</div>,

    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

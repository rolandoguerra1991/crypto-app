import { createBrowserRouter } from "react-router-dom";
import App from "./layouts/App";
import CryptoDetails from "./routes/CryptoDetails";
import Home from "./routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'crypto/:id',
        element: <CryptoDetails />
      }
    ],
  },
]);

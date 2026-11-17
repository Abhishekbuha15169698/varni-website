import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Portfolio from './Portfolio.tsx';
import SocialMediaPage from './SocialMediaPage.tsx';
import WebsiteCreationPage from './WebsiteCreationPage.tsx';
import PrintDistributionPage from './PrintDistributionPage.tsx';
import ContactPage from './ContactPage.tsx';
import AdminPage from './AdminPage.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/social-media",
    element: <SocialMediaPage />,
  },
  {
    path: "/website",
    element: <WebsiteCreationPage />,
  },
  {
    path: "/print-distribution",
    element: <PrintDistributionPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);


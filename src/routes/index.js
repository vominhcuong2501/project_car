import React from 'react'
import { useRoutes } from 'react-router-dom'
import Admin from '../layouts/admin/admin'
import Home from '../layouts/home/home';
import BrandDetail from '../modules/brand-detail/brand-detail';
import ModalAdd from '../modules/modal-add/modal-add';
import TableLogo from '../modules/table-logo/table-logo';

export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                
            ]
        },
        {
            path: "/admin",
            element: <Admin />,
            children: [
                {
                    path: "/admin",
                    element: <TableLogo />
                },
                {
                    path: "/admin/:brandId",
                    element: <BrandDetail />
                },
                {
                    path: "/admin/modal-add",
                    element: <ModalAdd />
                },
            ]
        }
    ])
  return routing;
}

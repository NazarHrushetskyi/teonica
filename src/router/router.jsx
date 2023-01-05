import { Navigate } from "react-router-dom";

import About from "../pages/about/About";
import Case from "../pages/case/Case";
import CaseStudy from "../pages/case-study/CaseStudy";
import Main from "../pages/main/Main";
import Mobile from "../pages/mobile/Mobile";
import Production from "../pages/production/Production";
import Request from "../pages/request/request";
import Server from "../pages/server/Server";
import Staff from "../pages/staff/Staff";
import Web from "../pages/web/Web";

export const routes = [
    {
        path: '/',
        component: <Main />,
        name: "Main"
    },
    {
        path: '/about',
        component: <About />,
        name: "About"
    },
    {
        path: '/case-study',
        component: <CaseStudy />,
        name: "Case Study"
    },
    {
        path: '/case',
        component: <Case />,
        name: "Case Studies"
    },
    {
        path: '/mobile',
        component: <Mobile />,
        name: "Mobile"
    },
    {
        path: '/production',
        component: <Production />,
        name: "Production"
    },
    {
        path: '/request',
        component: <Request />,
        name: "Request"
    },    
    {
        path: '/server',
        component: <Server />,
        name: "Server"
    },
    {
        path: '/staff',
        component: <Staff />,
        name: "Staff"
    },    
    {
        path: '/web',
        component: <Web />,
        name: "Web"
    },
    {
        path: '*',
        component: <Navigate to={'/'} />
    },
]
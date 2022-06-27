import { Home, Following, Friends, Pages, Groups } from "../pages";

// Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/friends", component: Friends },
    { path: "/pages", component: Pages },
    { path: "/groups", component: Groups },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

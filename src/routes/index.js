import { Home, Following } from "../pages";

// Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/Following", component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

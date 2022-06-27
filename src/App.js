import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layouts/";
import { publicRoutes } from "./routes";

function App() {
    return (
        <Router>
            <div className="__havanduoc">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

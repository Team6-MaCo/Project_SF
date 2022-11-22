import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
// import Dashboard from "../Pages/scenes/dashboard";
// import Team from "../Pages/scenes/team";
// import Invoices from "../Pages/scenes/invoices";
// import Contacts from "../Pages/scenes/contacts";
// import Bar from "../Pages/scenes/bar";
// import Form from "../Pages/scenes/form";
// import Line from "../Pages/scenes/line";
// import Pie from "../Pages/scenes/pie";
// import FAQ from "../Pages/scenes/faq";
// import Geography from "../Pages/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
// import Calendar from "../Pages/scenes/calendar/calendar";
// import Login from "../Pages/scenes/signup";
// import SignIn from "../Pages/scenes/signin";
// import Profile from "../Pages/scenes/profile";
// import Irrigation from "../Pages/scenes/irrigation";
// import WaterControl from "../Pages/scenes/irrigation/waterControl";
// import FertilizerControl from "../Pages/scenes/irrigation/fertilizerControl";
// import PreventionControl from "../Pages/scenes/irrigation/preventionControl";
// import Price from "../Pages/scenes/price";
// import PriceDetail from "../Pages/scenes/price/detail";
import "../index.css";

function Layout({ children }) {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        {/* <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route
                                path="/irrigation"
                                element={<Irrigation />}
                            />
                            <Route
                                path="/irrigation/watercontrol"
                                element={<WaterControl />}
                            />
                            <Route
                                path="/irrigation/preventioncontrol"
                                element={<PreventionControl />}
                            />
                            <Route
                                path="/irrigation/fertilizercontrol"
                                element={<FertilizerControl />}
                            />
                            <Route exact path="/price" element={<Price />} />
                            <Route
                                path="/price/:id"
                                element={<PriceDetail />}
                            />
                        </Routes> */}
                        {children}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Layout;

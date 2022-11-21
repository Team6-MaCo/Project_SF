import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../js/Pages/scenes/global/Topbar";
import Sidebar from "../js/Pages/scenes/global/Sidebar";
import Dashboard from "../js//Pages/scenes/dashboard";
import Team from "../js/Pages/scenes/team";
import Invoices from "../js/Pages/scenes/invoices";
import Contacts from "../js/Pages/scenes/contacts";
import Bar from "../js/Pages/scenes/bar";
import Form from "../js/Pages/scenes/form";
import Line from "../js/Pages/scenes/line";
import Pie from "../js/Pages/scenes/pie";
import FAQ from "../js/Pages/scenes/faq";
import Geography from "../js/Pages/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "../js/Pages/scenes/calendar/calendar";
import Login from "../js/Pages/scenes/signup";
import SignIn from "../js/Pages/scenes/signin";
import Profile from "../js/Pages/scenes/profile";
import Irrigation from "../js/Pages/scenes/irrigation";
import WaterControl from "../js/Pages/scenes/irrigation/waterControl";
import FertilizerControl from "../js/Pages/scenes/irrigation/fertilizerControl";
import PreventionControl from "../js/Pages/scenes/irrigation/preventionControl";
import Price from "../js/Pages/scenes/price";
import PriceDetail from "../js/Pages/scenes/price/detail";

function App() {
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
                        <Routes>
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
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;

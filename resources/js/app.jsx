import "./bootstrap";
import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "../js/Pages/scenes/global/Topbar";
// import Sidebar from "../js/Pages/scenes/global/Sidebar";
// import Dashboard from "../js//Pages/scenes/dashboard";
// import Team from "../js/Pages/scenes/team";
// import Invoices from "../js/Pages/scenes/invoices";
// import Contacts from "../js/Pages/scenes/contacts";
// import Bar from "../js/Pages/scenes/bar";
// import Form from "../js/Pages/scenes/form";
// import Line from "../js/Pages/scenes/line";
// import Pie from "../js/Pages/scenes/pie";
// import FAQ from "../js/Pages/scenes/faq";
// import Geography from "../js/Pages/scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "../js/Pages/scenes/calendar/calendar";
// import Login from "../js/Pages/scenes/signup";
// import SignIn from "../js/Pages/scenes/signin";
// import Profile from "../js/Pages/scenes/profile";
// import Irrigation from "../js/Pages/scenes/irrigation";
// import WaterControl from "../js/Pages/scenes/irrigation/waterControl";
// import FertilizerControl from "../js/Pages/scenes/irrigation/fertilizerControl";
// import PreventionControl from "../js/Pages/scenes/irrigation/preventionControl";
// import Price from "../js/Pages/scenes/price";
// import PriceDetail from "../js/Pages/scenes/price/detail";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});

InertiaProgress.init({ color: "#4B5563" });

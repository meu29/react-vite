import { RecoilRoot } from "recoil";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./layouts/header";
import { IndexPage } from "./pages";

import { theme } from "./theme";

export const App: React.VFC = () => {

    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );

}
import { RecoilRoot } from "recoil";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./layouts/header";
import { IndexPage } from "./pages";
import { SoftwarePage } from "./pages/software";
import { SoftwareSearchPage } from "./pages/software/search";
import { SoftwareRegisterPage } from "./pages/software/register";

import { theme } from "./theme";

import { SWRConfig } from "swr";

export const App: React.VFC = () => {

    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <SWRConfig value={{fetcher: (url: string) => fetch(url).then(res => res.json())}}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<IndexPage />} />
                            <Route path="/softwares" element={<SoftwarePage />} />
                            <Route path="/softwares/search" element={<SoftwareSearchPage />} />
                            <Route path="/softwares/register" element={<Navigate to="/softwares" replace />} />
                            <Route path="/softwares/register/:id" element={<SoftwareRegisterPage />} />
                        </Routes>
                    </BrowserRouter>
                </SWRConfig>
            </ThemeProvider>
        </RecoilRoot>
    );

}
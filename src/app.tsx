import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./layouts/header";
import { IndexPage } from "./pages";
import { SoftwarePage } from "./pages/software";
import { SoftwareSearchPage } from "./pages/software/search";
import { SoftwareRegisterPage } from "./pages/software/register";
import { ReviewPage } from "./pages/review";
import { theme } from "./theme";

export const App: React.VFC = () => {

    return (
        <RecoilRoot>
            
            <ThemeProvider theme={theme}>
            <Suspense fallback="loading">
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<IndexPage />} />
                            <Route path="/softwares" element={<SoftwarePage />} />
                            <Route path="/softwares/search" element={<SoftwareSearchPage />} />
                            <Route path="/softwares/register" element={<Navigate to="/softwares" replace />} />
                            <Route path="/softwares/register/:id" element={<SoftwareRegisterPage />} />
                            <Route path="/reviews" element={<Suspense fallback={<p>loading</p>}><ReviewPage /></Suspense>} />
                        </Routes>
                    </BrowserRouter>
                    </Suspense>
            </ThemeProvider>
        </RecoilRoot>
    );

}
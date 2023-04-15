import { Route, Routes } from "react-router-dom";
import PsyLifePage from "../pages/PsyLifePage";
import DiaryPage from "../pages/DiaryPage";
import MiniHomePage from "../pages/MiniHomePage";
import PhotoBookPage from "../pages/PhotobookPage";
import GuestBookPage from "../pages/GuestBookPage";
import Layout from "../Common/Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/psylife" element={<PsyLifePage />} />
        <Route path="/dairy" element={<DiaryPage />} />
        <Route path="/" element={<MiniHomePage />} />
        <Route path="/photobook" element={<PhotoBookPage />} />
        <Route path="/guestbook" element={<GuestBookPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

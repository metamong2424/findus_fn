import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/layout";
import MainPage from "./Pages/mainPage";
// 다른 페이지 컴포넌트들도 여기에 import 합니다

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {/* 다른 라우트들을 여기에 추가합니다 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

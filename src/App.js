import React from "react";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Collections from "./components/Collections";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="collections" element={<Collections />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

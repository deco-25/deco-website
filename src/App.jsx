import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

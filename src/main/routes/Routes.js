import { Route, Routes } from "react-router-dom";
import ExampleController from "../controller/ExampleController";

export default function Routing() {
  return (
    <Routes>
      <Route path="/example" element={<ExampleController />} />
    </Routes>
  )
}
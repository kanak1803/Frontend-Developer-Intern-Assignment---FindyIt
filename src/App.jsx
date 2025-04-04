import { Toaster } from "react-hot-toast";
import "./App.css";
import VendorList from "./components/VendorList";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <VendorList />
    </>
  );
}

export default App;

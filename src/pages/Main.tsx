import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "../api/axios";
import BucketListModal from "../components/BucketListModal";
const Main = () => {
  const [view, setView] = useState(true);
  return (
    <div>
      main
      {view && <BucketListModal />}
    </div>
  );
};
export default Main;

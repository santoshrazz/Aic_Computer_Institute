import Edit_Profile from "./Pages/Admin/Edit_Profile/Edit_Profile";
import RoutesComp from "./Pages/Routes/RoutesComp";
import { useDispatch } from "react-redux";
import { getUser } from "./Store/slice";
import { useEffect } from "react";
import axios from "axios";
// axios.defaults.withCredentials = true;

function App() {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getUser());
  //   }, []);
  return (
    <>
      <RoutesComp />
      {/* <Main_Dashboard /> */}
      {/* <Certificate_Download /> */}
      {/* <Testimonal /> */}
      {/* <Edit_Profile /> */}
    </>
  );
}

export default App;

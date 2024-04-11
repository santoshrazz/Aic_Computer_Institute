import Edit_Profile from "./Pages/Admin/Edit_Profile/Edit_Profile";
import RoutesComp from "./Pages/Routes/RoutesComp";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Store/slice";
import { useEffect } from "react";
import axios from "axios";
import SpinnerComp from "./Components/Loadin_Button/SpinnerComp";
axios.defaults.withCredentials = true;

function App() {
  const state = useSelector((store) => store.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (state.isLoading) {
    return <SpinnerComp />;
  }
  return <RoutesComp />;
}

export default App;

import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import JobSearchPage from "../pages/Home/JobSearchPage/JobSearchPage";
import BrowseCategory from "../pages/Home/BrowseCategory/BrowseCategory";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <JobSearchPage />
      <BrowseCategory></BrowseCategory>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

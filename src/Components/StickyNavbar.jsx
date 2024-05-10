import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoMdNotifications } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TbCertificate } from "react-icons/tb";
import axios from "axios";
import { setLogin } from "../Store/slice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { gsapTimeline } from "../Constants/Const";
const navListMenuItems = [
  {
    title: "Notifications",
    description: "Know about new batches",
    icon: IoMdNotifications,
    redirect: "/allNotifications",
  },
  {
    title: "Courses",
    description: "Enroll in our quality courses",
    icon: TbCertificate,
    redirect: "/course",
  },
  {
    title: "All Frenchaise",
    description: "Find the perfect solution for your needs.",
    icon: FaCodeBranch,
    redirect: "/allfrenchise",
  },
  {
    title: "Write a Review",
    description: "Find the perfect solution for your needs.",
    icon: FaCodeBranch,
    redirect: "https://maps.app.goo.gl/jrHACjGnV6XC7Yws8",
  },
  {
    title: "Request Demo",
    description: "Send email to register students",
    icon: HiOutlineMail,
    redirect: "/contact",
  },
  {
    title: "Give a Test",
    description: "Play a quiz to test your knowledge about computer",
    icon: MdQuiz,
    redirect: "/quiz",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, redirect }, key) => (
      <NavLink to={redirect} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Explore
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-medium home"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as={Link}
        to="/check_certificate"
        variant="small"
        color="blue-gray"
        className="font-medium check_certificate"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Check_Certificate
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        to="/contact"
        variant="small"
        color="blue-gray"
        className="font-medium contact"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  // Checking User Login State
  const { loginState } = useSelector((store) => store.login);

  //Create navigate object using react router dom and useNavigate hook
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // Handle logout funtion
  const handleLogOut = async () => {
    const response = await axios.get("/admin/logout");
    if (response.data.status) {
      document.cookie = "myUserCookie=;";
      dispatch(setLogin(false));
    }
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //--------------> GSAP Animation <-------------------------
  useGSAP(() => {
    gsapTimeline.from(".main_nav", {
      y: -200,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsapTimeline.from(".home , .check_certificate, .contact,.aic_Computer", {
      y: -100,
      opacity: 0,
      duration: 1,
      rotate: 200,
      delay: 0,
      stagger: 1,
      yoyo: true,
    });
  });
  return (
    <Navbar className="mx-auto main_nav max-w-screen-xl px-4 py-2 hover:drop-shadow-2xl">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 aic_Computer"
        >
          Aic Computer
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {loginState && (
            <Button variant="text" size="sm" color="blue-gray">
              <Link to={"/head/dashboard"}>Dashboard</Link>
            </Button>
          )}
          {/* Show login button if user not logged in and show logout if user logged In */}
          {loginState ? (
            <Button variant="gradient" size="sm" onClick={handleLogOut}>
              logOut
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              onClick={() => navigate("/login")}
            >
              login
            </Button>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {loginState && (
            <Button variant="text" size="sm" color="blue-gray">
              <Link to={"/head/dashboard"}>Dashboard</Link>
            </Button>
          )}
          {loginState ? (
            <Button variant="gradient" size="sm" onClick={handleLogOut}>
              logOut
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              onClick={() => navigate("/login")}
            >
              login
            </Button>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}

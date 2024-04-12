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
import { PiStudent } from "react-icons/pi";
import { FaUserLarge } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { MdContactEmergency } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const navListMenuItems = [
  {
    title: "Notifications",
    description: "Know about new batches",
    icon: IoMdNotifications,
    redirect: "/",
  },
  {
    title: "Add Student",
    description: "You can add all Student From here.",
    icon: PiStudent,
    redirect: "/",
  },
  {
    title: "Add Certificate",
    description: "You can Add Certificate of Students from here",
    icon: GrCertificate,
    redirect: "/head/add_certificate",
  },
  {
    title: "All Certificate",
    description: "Check All Your added Certificate",
    icon: GrCertificate,
    redirect: "/",
  },
  {
    title: "Profile",
    description: "Edit Your Profile",
    icon: FaUserLarge,
    redirect: "/",
  },
  {
    title: "All Messages",
    description: "Check  All Requests",
    icon: MdContactEmergency,
    redirect: "/",
  },
  {
    title: "All Frenchaise",
    description: "Find the perfect solution for your needs.",
    icon: FaCodeBranch,
    redirect: "/frenchise",
  },
  {
    title: "Send Email",
    description: "Send email to register students",
    icon: HiOutlineMail,
    redirect: "/",
  },
  {
    title: "Search Student",
    description: "Search for a student",
    icon: FaSearch,
    redirect: "/",
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
              Dashboard
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
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as={Link}
        to="/head/check_certificate"
        variant="small"
        color="blue-gray"
        className="font-medium"
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
        className="font-medium"
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
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 hover:drop-shadow-2xl">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
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
          <Button
            variant="gradient"
            size="sm"
            onClick={() => navigate("/login")}
          >
            {loginState ? "LogOut" : "Login"}
          </Button>
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
          <Button
            variant="gradient"
            onClick={() => navigate("/login")}
            size="sm"
            fullWidth
          >
            {loginState ? "LogOut" : "Login"}
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

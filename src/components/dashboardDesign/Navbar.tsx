import { Image, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../utils/hooks/useTheme";
import { UserDetails } from "./UserDetails";

export const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const getSelectedKey = (pathname: string) => {
    if (pathname.startsWith("/clients/companies")) {
      return "/clients/companies";
    } else if (pathname.startsWith("/clients/persons")) {
      return "/clients/persons";
    } else if (pathname.startsWith("/clients")) {
      return "/clients";
    } else {
      return pathname;
    }
  };

  const selectedKey = getSelectedKey(location.pathname);

  const getHeaderKey = () => {
    if (selectedKey.startsWith("/clients")) {
      return "/clients";
    } else if (selectedKey.startsWith("/my-tasks")) {
      return "/my-tasks";
    } else if (selectedKey.startsWith("/admin")) {
      return "/admin";
    } else {
      return selectedKey;
    }
  };

  const mainMenuItems = [
    {
      key: "/quick",
      label: (
        <Link
          to="/"
          style={{ color: theme.token.colorWhite, fontWeight: "bold" }}
        >
          QUICK
        </Link>
      ),
    },
    {
      key: "/menu",
      label: (
        <Link
          to="/clients/companies"
          style={{ color: theme.token.colorWhite, fontWeight: "bold" }}
        >
          MENU
        </Link>
      ),
    },

    {
      key: "/access",
      label: (
        <Link
          to="#"
          style={{
            pointerEvents: "none",
            color: theme.token.colorWhite,
            fontWeight: "bold",
          }}
        >
          ACCESS
        </Link>
      ),
    },
    {
      key: "/menu",
      label: (
        <Link
          to="/my-tasks/clients"
          style={{ color: theme.token.colorWhite, fontWeight: "bold" }}
        >
          MENU
        </Link>
      ),
    },

    {
      key: "/access",
      label: (
        <Link
          to="#"
          style={{
            pointerEvents: "none",
            fontWeight: "bold",
            color: theme.token.colorWhite,
          }}
        >
          ACCESS
        </Link>
      ),
    },
  ];

  return (
    <>
      <Header
        className="p-0 shadow-lg bg-gray-800"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderWidth: "100%",
          paddingLeft: 15,
        }}
      >
        <Image
          src="https://www.abcinterim.ch/wp-content/uploads/2024/03/ABC-LOGO-FINAL-white-1-1.png"
          width={100}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getHeaderKey()]}
          items={mainMenuItems as any}
          className="flex w-full justify-end bg-gray-800"
          style={{
            flex: 1,
            minWidth: 0,
            height: "100%",
          }}
        />
        <UserDetails />
      </Header>
    </>
  );
};

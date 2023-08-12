import { Outlet, useNavigate } from "react-router-dom";
import {
  Sidebar,
  Topbar,
  MobileBottomBar,
  DesktopSecondaryColumn,
} from "../components";

const Layout = () => {
  return (
    <>
      {/* Main layout container with sidebar, topbar, secondary column, and bottom bar */}
      <div className="flex h-full bg-seconday-shade">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Topbar */}
          <Topbar />
          {/* Main content area */}
          <div className="flex flex-1 items-stretch overflow-hidden">
            {/* Render nested routes within the main content area */}
            <Outlet />
            {/* Secondary column (visible on desktop) */}
            <DesktopSecondaryColumn />
          </div>
          {/* Mobile bottom bar */}
          <MobileBottomBar />
        </div>
      </div>
    </>
  );
};

export default Layout;

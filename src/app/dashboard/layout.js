import NavLink from "@/components/navbar/NavLink";
import Link from "next/link";
import SuperAdminRoute from "./SuperAdminRoute";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex justify-between">
            <div className="w-64 min-h-screen hidden md:block bg-[#a9a3cf]">
              <ul className="menu p-4 fixed">
                <li>
                  <NavLink href="/dashboard/allDemos">ALL DEMOS</NavLink>
                </li>
                <SuperAdminRoute />
                <div className="divider"></div>
                <li>
                  <Link
                    href="/"
                    className="font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                  >
                    HOME
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-[#F6F6F6] overflow-x-auto">
              {children}
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn md:hidden bg-[#a9a3cf] w-full drawer-button"
          >
            OPEN DRAWER
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="">
            {/* Sidebar content here */}
            <div className="w-50 min-h-screen md:hidden bg-[#a9a3cf]">
              <ul className="menu p-4">
                <li>
                  <NavLink href="/dashboard/allDemos">ALL DEMOS</NavLink>
                </li>
                <SuperAdminRoute />
                <div className="divider"></div>
                <li>
                  <NavLink href="/">HOME</NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

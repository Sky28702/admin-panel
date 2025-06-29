"use client";
import { usePathname } from "next/navigation";
import { IconDashboard } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconShoppingCartCopy } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

const layout = ({ children }) => {
  const pathNmae = usePathname();

  const getClass = (path) =>
    `nav-list ${pathNmae === path ? "active-nav" : ""}`;

  return (
    <div className="flex flex-row ">
      <div className="  min-h-screen border boder-none border-white  w-80 shadow shadow-slate-500 ">
        <section>
          <div className=" flex flex-col pl-4 [&_span]:pb-10 pr-4">
            <h1 class="text-black font-bold text-3xl py-6 mb-6">Admin</h1>
            <span>
              {" "}
              <Link href="/" className={getClass("/")}>
                <IconDashboard stroke={2} />
                &nbsp; Dashboard
              </Link>
            </span>

            <span>
              <Link href="/products" className={getClass("/products")}>
                <IconShoppingCartCopy stroke={2} />
                &nbsp; Products
              </Link>
            </span>

            <span>
              <Link href="/users" className={getClass("/users")}>
                <IconUser stroke={2} />
                &nbsp; Users
              </Link>
            </span>

            <span>
              <Link href="/profile" className={getClass("/profile")}>
                <IconUserCircle stroke={2} /> &nbsp; Profile
              </Link>
            </span>
          </div>
        </section>
      </div>
      <div className=" pl-36 pt-4  w-full bg-neutral-50">{children}</div>
    </div>
  );
};
export default layout;

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { sidebar } from "../data/sidebar";

const Sidebar = () => {
  const router = useRouter();

  useEffect(() => {
    const sidebar: HTMLDivElement | null = document.querySelector(".sidebar");
    var sticky = sidebar?.offsetTop as Number;

    function handleSticky() {
      if (window.pageYOffset >= sticky) {
        sidebar?.classList?.add("sticky");
      } else {
        sidebar?.classList?.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleSticky);

    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return (
    <div className={`bg-primary-300 transition-all sidebar hidden md:block`}>
      <div className="container">
        <ul className="text-text-color flex items-center w-full justify-center">
          {sidebar.map((item) => (
            <li
              key={item.name}
              className={`py-2 px-5 hover:bg-primary-100 transition-colors ${
                router.asPath === item.link && "bg-primary-100"
              }`}
            >
              <Link href={item.link}>
                <a className="uppercase">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

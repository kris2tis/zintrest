import React from "react";
import LinkPage from "./link";

export default function DashboardNavItem({ slug,name, containerClassName="", icon , rest}) {
  return (
    <LinkPage className="w-full" href={`${slug}`}>
      <div
        className={` ${containerClassName} flex w-full items-center gap-x-3 text-secondary-900 hover:text-primary-900 transition-all duration-500`}
        {...rest}
      >
        {icon}
        <span>{name}</span>
      </div>
    </LinkPage>
  );
}

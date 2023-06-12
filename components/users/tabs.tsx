import { classNames } from "@/lib/functions";
import { Dispatch, SetStateAction } from "react";

export default function Tabs({
  setSearch,
  search,
}: {
  setSearch: Dispatch<SetStateAction<boolean>>;
  search: boolean;
}) {
  const tabs = [
    { name: "Tickets", current: !search },
    { name: "Search", current: search },
  ];
  return (
    <div className=" border-gray-200">
      <div className="sm:flex sm:items-baseline">
        <div className="mt-4 sm:mt-0">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab, i) => (
              <button
                onClick={() => {
                  setSearch(i === 0 ? false : true);
                }}
                key={tab.name}
                className={classNames(
                  tab.current
                    ? "border-[#FDB81B] text-[#FDB81B]" //indigo-500/600
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

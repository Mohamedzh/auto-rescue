import React from "react";
import Heading from "./heading";
import UsersList from "./usersList";
import { usePathname } from "next/navigation";
import SearchBar from "./searchBar";
import ServicesList from "../serviceProvider/servicesList";

type Props = {};

function Search({}: Props) {
  const path = usePathname();
  const header =
    path === "/users" ? "Search for users" : "Search for service providers";
  return (
    <div>
      <Heading header={header} />
      <SearchBar />
      {path === "/users" ? <UsersList /> : <ServicesList />}{" "}
    </div>
  );
}

export default Search;

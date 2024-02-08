import { useRouter } from "next/router";
import React from 'react'
import Content from "../Content";
import NoNavbar from "../NoNavbar";

function Profile() {
    const {query} = useRouter();
  return (
    <NoNavbar>
        <h1>
            {query.id}
        </h1>
    </NoNavbar>

  )
}

export default Profile
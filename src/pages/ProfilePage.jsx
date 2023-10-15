import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../contexts/Context";
import PageTitle from "../components/home/PageTitle";
import { BsArrowLeft } from "react-icons/bs";

function ProfilePage() {
  const { authUser } = useContext(Context);

  return (
    <div className="text-white">
      <PageTitle
        title={`${authUser.firstName} ${authUser.lastName}`}
        icon={<BsArrowLeft />}
      />
    </div>
  );
}

export default ProfilePage;

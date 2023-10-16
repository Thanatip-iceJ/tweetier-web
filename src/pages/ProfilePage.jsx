import React, { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Context } from "../contexts/Context";
import PageTitle from "../components/home/PageTitle";
import { BsArrowLeft } from "react-icons/bs";
import CoverImg from "../components/global/CoverImg";
import Avatar from "../components/global/Avatar";
import ProfileInfo from "../components/profile/ProfileInfo";
import Post from "../components/home/Post";
import axios from "../config/axios";
import Loading from "../assets/Loading";
import { HomeContext } from "../contexts/HomeContext";

function ProfilePage() {
  //
  const { authUser, loading } = useContext(Context);
  const { setIsOpenProfileEdit } = useContext(HomeContext);
  //
  const [userProfile, setUserProfile] = useState({});
  //
  const { profileId } = useParams();

  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => setUserProfile(res.data))
      .catch(console.log);
  }, [profileId]);

  return (
    <>
      {loading && <Loading />}
      <div className="text-white border border-fade min-h-screen">
        <PageTitle
          title={`${userProfile.firstName} ${userProfile.lastName}`}
          icon={<BsArrowLeft size="1.5rem" />}
          to="/"
        />
        <div className="z-0">
          <CoverImg />
        </div>
        <div id="flexbox" className="flex px-4 justify-between items-center">
          <div className="z-1 border-2 w-fit rounded-full border-black -mt-14">
            <Avatar src="" size="min-w-[2.5rem] max-w-[8rem]" />
          </div>
          <div>
            <button
              className="border px-4 py-2 rounded-2xl font-bold mt-2 hover:bg-white hover:text-black transition-all duration-200"
              onClick={() => setIsOpenProfileEdit(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div>
          <ProfileInfo
            name={`${userProfile.firstName} ${userProfile.lastName}`}
            username={userProfile.username}
            bio="keep cool keep cool keep cool keep cool keep cool keep cool keep cool keep cool keep cool keep cool keep cool"
            date="14 july 1999"
            following="999"
            followers="555"
          />
          <hr className="border border-fade" />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

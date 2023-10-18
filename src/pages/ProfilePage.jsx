import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/Context";
import PageTitle from "../components/home/PageTitle";
import { BsArrowLeft, BsTypeH1 } from "react-icons/bs";
import CoverImg from "../components/global/CoverImg";
import Avatar from "../components/global/Avatar";
import ProfileInfo from "../components/profile/ProfileInfo";
import Post from "../components/home/Post";
import axios from "../config/axios";
import { HomeContext } from "../contexts/HomeContext";
import Modal from "../components/global/Modal";
import EditProfileForm from "../components/profile/EditProfileForm";
import { ProfileContext } from "../contexts/ProfileContext";
import AuthUserAction from "../components/profile/AuthUserAction";
import UnknownAction from "../components/profile/UnknownAction";
import FollowedAction from "../components/profile/FollowedAction";
import { PostContext } from "../contexts/PostContext";
import PostOnProfileList from "../components/post/PostOnProfileList";
import Loading from "../assets/Loading";

function ProfilePage() {
  //
  const { authUser } = useContext(Context);
  const { isOpenProfileEdit, setIsOpenProfileEdit } = useContext(HomeContext);
  const { setPostsOnProfilePage } = useContext(PostContext);
  const {
    userProfile,
    setUserProfile,
    statusWithAuth,
    setStatusWithAuth,
    setEditInput,
    editInput,
  } = useContext(ProfileContext);

  //
  const { profileId } = useParams();
  //
  const statusWithAuthObj = {
    AUTH: <AuthUserAction onClick={() => setIsOpenProfileEdit(true)} />,
    UNKNOWN: <UnknownAction targetId={profileId} />,
    FOLLOWED: <FollowedAction targetId={profileId} />,
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const test = async () => {
      try {
        setLoading(true);
        const user = await axios.get(`/user/${profileId}`);
        setUserProfile(user.data.user);
        setEditInput({
          firstName: user.data.user?.firstName,
          lastName: user.data.user?.lastName,
          bio: user.data.user?.bio,
        });
        setStatusWithAuth(user.data.statusWithAuth);
        const posts = await axios.get(`post/getpostbyuserid/${profileId}`);
        setPostsOnProfilePage(posts.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    test();
  }, [profileId, statusWithAuth]);
  if (loading) return <Loading />;

  return (
    <>
      {userProfile ? (
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
              <Avatar
                src={userProfile.profileImg}
                size="min-w-[2.5rem] max-w-[8rem]"
              />
            </div>
            <div>{statusWithAuthObj[statusWithAuth]}</div>
          </div>
          <div>
            <ProfileInfo
              name={`${userProfile.firstName} ${userProfile.lastName}`}
              username={userProfile.username}
              bio={userProfile.bio}
              date="14 july 1999"
              following="999"
              followers="555"
            />
            <hr className="border border-fade" />
            <PostOnProfileList />
          </div>
          <Modal
            title="Edit Profile"
            isOpen={isOpenProfileEdit}
            onClose={() => setIsOpenProfileEdit(false)}
          >
            <EditProfileForm />
          </Modal>
        </div>
      ) : (
        <h1 className="text-white text-2xl py-8 text-center">
          404 PROFILE NOT FOUND
        </h1>
      )}
    </>
  );
}

export default ProfilePage;

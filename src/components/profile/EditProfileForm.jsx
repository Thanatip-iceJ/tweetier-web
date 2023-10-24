import React, { useContext, useState, useEffect, useRef } from "react";
import CoverImg from "../global/CoverImg";
import Avatar from "../global/Avatar";
import { ProfileContext } from "../../contexts/ProfileContext";
import { Context } from "../../contexts/Context";
import axios from "../../config/axios";
import Loading from "../../assets/Loading";
import { HomeContext } from "../../contexts/HomeContext";
import { editProfileSchema } from "../../validSchema/schemas";

function EditProfileForm() {
  const {
    editProfile,
    setProfileImgFile,
    setCoverImgFile,
    coverImgFile,
    profileImgFile,
    setEditInput,
    editInput,
    userProfile,
    setUserProfile,
  } = useContext(ProfileContext);
  const { setIsOpenProfileEdit } = useContext(HomeContext);
  const { authUser, setAuthUser } = useContext(Context);
  //
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(undefined);
  //

  const inputValidate = (input) => {
    const { error, value } = editProfileSchema.validate(input, {
      abortEarly: false,
    });
    console.log("error", error);
    if (error) {
      const output = error.details.reduce((acc, x) => {
        acc[x.context.label] = x.message;
        return acc;
      }, {});
      return output;
    }
  };
  const handleChange = (e) =>
    setEditInput({ ...editInput, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateErr = inputValidate(editInput);
      if (validateErr) {
        setIsError(validateErr);
        return;
      }
      setLoading(true);
      const res = await axios.patch("/user/profileedit", editProfile());
      console.log(res.data);
      setUserProfile({
        ...userProfile,
        coverImg: res.data.coverImg ? res.data?.coverImg : userProfile.coverImg,
        profileImg: res.data.profileImg
          ? res.data?.profileImg
          : userProfile.profileImg,
        ...res.data.info,
      });
      setAuthUser({
        ...userProfile,
        coverImg: res.data.coverImg ? res.data.coverImg : authUser.coverImg,
        profileImg: res.data.profileImg
          ? res.data.profileImg
          : authUser.profileImg,
        ...res.data.info,
      });
      setIsOpenProfileEdit(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setProfileImgFile(null);
      setCoverImgFile(null);
    }
  };
  console.log(isError);

  useEffect(() => {
    setEditInput({
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      bio: userProfile.bio || "",
    });
  }, []);
  if (loading) return <Loading />;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        className="hidden"
        id="profile-img"
        onChange={(e) => {
          if (e.target.files[0]) {
            setProfileImgFile(e.target.files[0]);
          }
        }}
      />
      <input
        type="file"
        className="hidden"
        id="cover-img"
        onChange={(e) => {
          if (e.target.files[0]) {
            setCoverImgFile(e.target.files[0]);
          }
        }}
      />

      <div
        onClick={() => {
          document.getElementById("cover-img").click();
        }}
      >
        <CoverImg
          size="h-[10rem]"
          src={
            coverImgFile
              ? URL.createObjectURL(coverImgFile)
              : userProfile.coverImg
          }
        />
      </div>
      <div
        className="border-2 border-black w-fit rounded-full -mt-8 ml-3"
        onClick={() => document.getElementById("profile-img").click()}
      >
        <Avatar
          size="min-w-[2rem] w-[5rem] h-[5rem]"
          src={
            profileImgFile
              ? URL.createObjectURL(profileImgFile)
              : userProfile.profileImg
          }
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          className="w-full py-1 px-3 rounded-md border border-fade bg-transparent"
          placeholder="Firstname"
          value={editInput.firstName}
          name="firstName"
          onChange={handleChange}
        />
        {isError?.firstName && (
          <span className="text-red-500 text-sm font-light -mt-4">
            {isError?.firstName}
          </span>
        )}
        <input
          type="text"
          className="w-full py-1 px-3 rounded-md border border-fade bg-transparent"
          placeholder="Lastname"
          value={editInput.lastName}
          name="lastName"
          onChange={handleChange}
        />
        {isError?.lastName && (
          <span className="text-red-500 text-sm font-light -mt-4">
            {isError?.lastName}
          </span>
        )}

        <textarea
          id=""
          cols="30"
          rows="4"
          className="py-1 px-3 rounded-md border border-fade bg-transparent resize-none"
          placeholder="Bio"
          value={editInput.bio}
          name="bio"
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end">
          <button className="bg-main px-3 py-1 rounded-lg hover:bg-blue-500 transition-all duration-200">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditProfileForm;

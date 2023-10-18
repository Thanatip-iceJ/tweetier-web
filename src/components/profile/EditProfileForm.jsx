import React, { useContext, useState, useEffect, useRef } from "react";
import CoverImg from "../global/CoverImg";
import Avatar from "../global/Avatar";
import { ProfileContext } from "../../contexts/ProfileContext";
import { Context } from "../../contexts/Context";
import axios from "../../config/axios";

function EditProfileForm() {
  const {
    editProfile,
    setProfileImgFile,
    profileImgFile,
    coverImgFile,
    setCoverImgFile,
    setEditInput,
    editInput,
    userProfile,
  } = useContext(ProfileContext);
  console.log(userProfile);
  console.log(editInput);

  const handleChange = (e) => setEditInput(e.target.value);
  const handleSubmit = (e) => {
    try {
      e.preventDefault;

      axios.patch("/profile/profileedit", editProfile());
    } catch (error) {
      console.log(error);
    }
  };

  const profileImgRef = useRef(null);
  const coverImgRef = useRef(null);

  useEffect(() => {
    setEditInput({
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      bio: userProfile.bio,
    });
  }, []);

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
          size="min-w-[2rem] max-w-[5rem]"
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
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full py-1 px-3 rounded-md border border-fade bg-transparent"
          placeholder="Lastname"
          value={editInput.lastName}
          onChange={handleChange}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          className="py-1 px-3 rounded-md border border-fade bg-transparent resize-none"
          placeholder="Bio"
          value={editInput.bio}
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

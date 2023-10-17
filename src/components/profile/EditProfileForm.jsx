import React, { useState } from "react";
import CoverImg from "../global/CoverImg";
import Avatar from "../global/Avatar";

function EditProfileForm() {
  const [editInput, setEditInput] = useState({
    firstName: "",
    lastName: "",
    bio: "",
  });

  const handleChange = (e) => setEditInput(e.target.value);

  return (
    <form>
      <div className="">
        <CoverImg size="h-[10rem]" />
      </div>
      <div className="border-2 border-black w-fit rounded-full -mt-8 ml-3">
        <Avatar size="min-w-[2rem] max-w-[5rem]" />
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

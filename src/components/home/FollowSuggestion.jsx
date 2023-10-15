import React, { useContext, useEffect, useState } from "react";
import Avatar from "../global/Avatar";
import FollowSugProfile from "./FollowSugProfile";
import { HomeContext } from "../../contexts/HomeContext";
import axios from "../../config/axios";

function FollowSuggestion() {
  const { isShowMore, setIsShotMore } = useContext(HomeContext);
  //
  const handleShowMore = () => {
    setIsShotMore(!isShowMore);
  };
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    axios.get("/user/getusers").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="bg-[#313131] mx-auto w-[90%] p-2 rounded-md mt-2 pt-4">
      <h2 className="ml-2 mb-2">Who to follow</h2>
      <div className="flex flex-col gap-2">
        {users.map((x) => {
          <FollowSugProfile
            firstName={x.firstName}
            lastName={x.lastName}
            username={x.username}
            profileImg={x.profileImg}
          />;
        })}
      </div>
      <span
        className="text-sm text-main cursor-pointer hover:underline"
        onClick={handleShowMore}
      >
        {isShowMore ? "Show less" : "Show more"}
      </span>
    </div>
  );
}

export default FollowSuggestion;

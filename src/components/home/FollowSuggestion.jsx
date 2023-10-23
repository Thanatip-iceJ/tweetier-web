import React, { useContext, useEffect, useState } from "react";
import Avatar from "../global/Avatar";
import FollowSugProfile from "./FollowSugProfile";
import { HomeContext } from "../../contexts/HomeContext";
import axios from "../../config/axios";
import { Navigate, useNavigate } from "react-router-dom";

function FollowSuggestion() {
  const { isShowMore, setIsShowMore, users, setUsers } =
    useContext(HomeContext);
  //
  const navigate = useNavigate();
  //
  //
  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/user/getusers");
        const defaultArr = res.data.slice(0, 4);
        const showMoreArr = res.data.slice(0, 8);
        !isShowMore ? setUsers(defaultArr) : setUsers(showMoreArr);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [isShowMore]);

  return (
    <div className="bg-[#313131] mx-auto w-[90%] p-2 rounded-md mt-2 pt-4">
      <h2 className="ml-2 mb-2">Who to follow</h2>
      <div className="flex flex-col gap-2">
        {users.map((x) => {
          return (
            <FollowSugProfile
              key={x.id}
              userId={x.id}
              firstName={x.firstName}
              lastName={x.lastName}
              username={x.username}
              profileImg={x.profileImg}
              onClick={() => navigate(`/profile/${x.id}`)}
            />
          );
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

import React from "react";

function Comment() {
  return (
    <div
      id="container"
      className=" flex flex-col px-4 py-2 border border-border relative pt-3 hover:bg-gray-800/[.2] first-line:z-0"
    >
      <div
        className=" text-fade p-2 hover:bg-fade/[.3] rounded-full cursor-pointer absolute right-3 top-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsThreeDots />
      </div>
      <div className="flex gap-4">
        <Avatar />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1.5">
            <p
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={() => console.log("clicked username")}
            >
              {authUser.firstName} {authUser.lastName}
            </p>

            <p className="text-[#707070] text-sm font-semibold mt-[.1rem]">
              @{authUser.username}
            </p>
            <span className="block text-fade text-sm mt-[.1rem]">2h</span>
          </div>
          <p className="max-w-[30rem] text-[.9rem] break-words">
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </p>
          <div className="flex gap-16 mt-2">
            <div
              className="flex items-center gap-1 text-fade hover:text-main cursor-pointer "
              onClick={() => console.log("clicked comment")}
            >
              <Link to="post">
                <div className="hover:bg-main/[.3] rounded-full p-2">
                  <BsChat />
                </div>
              </Link>
              <span className="text-sm font-light">5</span>
            </div>
            <div
              className="flex items-center gap-1 text-fade hover:text-red-500 cursor-pointer rounded-full"
              onClick={() => setIsLiked(!isLiked)}
            >
              <div className="p-2 hover:bg-red-500/[.3] rounded-full">
                {isLiked ? (
                  <div className="text-red-500">
                    <BsFillHeartFill />
                  </div>
                ) : (
                  <BsHeart />
                )}
              </div>
              <span
                className={`text-sm font-light ${isLiked && "text-red-500"}`}
              >
                5
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* DropDown */}
      {isOpen && <DropDown />}
    </div>
  );
}

export default Comment;

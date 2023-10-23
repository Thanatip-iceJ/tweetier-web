import React, { useContext, useState } from "react";
import Avatar from "../global/Avatar";
import { BsFillImageFill } from "react-icons/bs";
import { PostContext } from "../../contexts/PostContext";
import { toast } from "react-toastify";
import { Context } from "../../contexts/Context";
import axios from "../../config/axios";
import { HomeContext } from "../../contexts/HomeContext";
import { postSchema } from "../../validSchema/schemas";

function PostSomething({ border = "border border-border" }) {
  const {
    postText,
    setPostText,
    post,
    imgFile,
    setImgFile,
    isLoading,
    setIsLoading,
    posts,
    setPosts,
  } = useContext(PostContext);
  const { setIsOpenPost, postModalLoading, setPostModalLoading } =
    useContext(HomeContext);
  const { authUser } = useContext(Context);
  //
  const [isError, setIsError] = useState(null);
  const validatePost = (input) => {
    const { error, value } = postSchema.validate(input);
    if (error) {
      const output = error.details.reduce((acc, x) => {
        acc[x.context.label] = x.message;
        return acc;
      }, {});
      return output;
    }
  };

  const submitHandle = async (e) => {
    try {
      e.preventDefault();
      const validateErr = validatePost(postText);
      if (validateErr) {
        setIsError(validateErr);
        return;
      }
      setIsLoading(true);
      setPostModalLoading(true);
      const res = await axios.post("/post/createpost", post());
      toast.success("Posted successfully");
      setPosts([res.data, ...posts]);
      setImgFile(null);
      setPostText({ postContent: "" });
      setIsOpenPost(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setPostModalLoading(false);
    }
  };
  console.log(isError);
  console.log(postText);
  return (
    <form className={`${border} pb-3`} onSubmit={submitHandle}>
      <input
        type="file"
        className="hidden"
        id="imgFile"
        onChange={(e) => {
          if (e.target.files[0]) {
            setImgFile(e.target.files[0]);
          }
        }}
      />
      <div id="flexbox" className="flex pl-4 pt-4">
        <div id="avatar">
          <Avatar
            src={authUser.profileImg}
            size="min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] "
          />
        </div>
        <div>
          <textarea
            name="postContent"
            cols="50"
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none resize-none px-4 pt-2 h-fit "
            value={postText.postContent}
            onChange={(e) => setPostText({ postContent: e.target.value })}
          ></textarea>
          {isError && (
            <span className="text-sm text-red-500 font-light">
              {isError.postContent}
            </span>
          )}
        </div>
      </div>
      {imgFile && (
        <div className="flex justify-center px-4 h-[15rem] mb-4">
          <img
            src={URL.createObjectURL(imgFile)}
            alt="content"
            className="object-contain max-w-[30rem]"
          />
        </div>
      )}{" "}
      <div id="flexbox-2" className="pl-16 flex justify-between pr-8">
        <div
          id="icon"
          className="text-main hover:bg-main/[.3] w-fit rounded-full cursor-pointer p-2 transition-all duration-200"
          onClick={() => document.getElementById("imgFile").click()}
        >
          <BsFillImageFill />
        </div>
        <button className="bg-main rounded-2xl px-4 font-bold hover:bg-blue-500 transition-all duration-200">
          Post
        </button>
      </div>
    </form>
  );
}

export default PostSomething;

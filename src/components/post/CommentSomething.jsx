import React, { useContext, useState } from "react";
import Avatar from "../global/Avatar";
import { Context } from "../../contexts/Context";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

function CommentSomething() {
  const [commentText, setCommentText] = useState("");
  const { authUser } = useContext(Context);
  const { postId } = useParams();
  //
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`/post/comment/${postId}`, {
        message: commentText,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setCommentText("");
    }
  };

  return (
    <div className="border border-border px-4 py-6">
      <div className="flex gap-3 justify-start">
        <Avatar src={authUser.profileImg} />
        <form onSubmit={handleSubmit}>
          <textarea
            cols="47"
            rows="2"
            placeholder="Post your reply"
            className="resize-none outline-none bg-transparent mt-2 text-lg"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-main px-3 py-1 rounded-2xl font-semibold hover:bg-blue-500 transition-all mr-4 -mt-3">
              Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentSomething;

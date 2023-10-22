import React, { useContext, useState } from "react";
import Avatar from "../global/Avatar";
import { Context } from "../../contexts/Context";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import { CommentContext } from "../../contexts/CommentContext";
import Loading from "../../assets/Loading";

function CommentSomething() {
  const [commentText, setCommentText] = useState("");
  const { authUser } = useContext(Context);
  const { comments, setComments } = useContext(CommentContext);
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  //
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post(`/post/comment/${postId}`, {
        message: commentText,
      });
      console.log(res.data);
      setComments((prev) => [res.data, ...prev]);
    } catch (err) {
      console.log(err);
    } finally {
      setCommentText("");
      setLoading(false);
    }
  };
  if (loading) return <Loading />;

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

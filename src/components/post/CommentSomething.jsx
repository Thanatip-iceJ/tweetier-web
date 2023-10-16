import React, { useState } from "react";
import Avatar from "../global/Avatar";

function CommentSomething() {
  const [commentText, setCommentText] = useState("");
  return (
    <div className="border border-border px-4 py-6">
      <div className="flex gap-3 justify-start">
        <Avatar />
        <form>
          <textarea
            cols="47"
            rows="2"
            placeholder="Post your reply"
            className="resize-none outline-none bg-transparent mt-2 text-lg"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
        </form>
      </div>
      <div className="flex justify-end">
        <button className="bg-main px-3 py-1 rounded-2xl font-semibold hover:bg-blue-500 transition-all mr-4 -mt-3">
          Reply
        </button>
      </div>
    </div>
  );
}

export default CommentSomething;

import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { ProfileContext } from "../../contexts/ProfileContext";
import Post from "../home/Post";

function PostOnProfileList() {
  const { postsOnProfilePage, handleLike } = useContext(PostContext);
  const { userProfile } = useContext(ProfileContext);
  console.log(postsOnProfilePage);

  return (
    <div>
      {postsOnProfilePage.length !== 0 ? (
        postsOnProfilePage.map((x) => (
          <Post
            key={x.id}
            firstName={userProfile.firstName}
            lastName={userProfile.lastName}
            username={userProfile.username}
            profileImg={userProfile.profileImg}
            contentText={x.contentText}
            contentImg={x.contentImg}
            createdAt={x.createdAt}
            postId={x.id}
            likes={x.PostLikes}
            comments={x.Comments}
          />
        ))
      ) : (
        <div className="flex justify-center font-semibold mt-4">
          <h1 className="text-2xl">This user hasn't posted anything</h1>
        </div>
      )}
    </div>
  );
}

export default PostOnProfileList;

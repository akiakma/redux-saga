import React from "react";
import PostContainer from "../containers/PostContainer";

const PostPage = ({ match }) => {
  const { id } = match.params; // URL파라미터 조회하기
  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;

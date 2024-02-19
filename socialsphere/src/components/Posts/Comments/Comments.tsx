import { Post } from "../../../atoms/postsAtom";
import { User } from "firebase/auth";
import React from "react";

type CommentsProps = {
  user: User;
  selectedPost: Post;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  user,
  selectedPost,
  communityId,
}) => {
  return <div>Have a good coding</div>;
};
export default Comments;

import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
import "../routes/App.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: userId,
        tags: tags,
        reactions: reactions,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <form className="create-post create" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label create">
          Enter your user id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control holder"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label create">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control holder"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          ref={postBodyElement}
          className="form-control holder"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          rows="4"
          type="text"
          ref={tagsElement}
          className="form-control holder"
          id="tags"
          placeholder="Please enter your tags using space"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter the number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Enter the number of reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary holder">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

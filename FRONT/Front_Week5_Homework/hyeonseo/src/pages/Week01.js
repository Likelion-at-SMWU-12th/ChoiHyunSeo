import React, { useState } from "react";
import "./Week01.css";

function Week01() {
  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const password = event.target.querySelector(
      ".input[type='password']"
    ).value;

    if (password !== "1234") {
      alert("Incorrect password!");
      return;
    }

    const name = event.target.querySelector(".input[type='text']").value;
    setUserName(name);
  };

  const showPostForm = () => {
    document.getElementById("postForm").classList.remove("hidden");
    document.getElementById("writePostBtn").classList.add("hidden");
  };

  const addPost = (event) => {
    event.preventDefault();
    if (!postContent.trim()) {
      alert("Please enter some content!");
      return;
    }
    setPosts([...posts, postContent]);
    setPostContent("");
    document.getElementById("postForm").classList.add("hidden");
    document.getElementById("postsContainer").classList.remove("hidden");
    document.getElementById("writePostBtn").classList.remove("hidden");
  };

  const editPost = (index) => {
    const newContent = prompt("수정할 내용을 입력하세요:", posts[index]);
    if (newContent === null || newContent.trim() === "") {
      return;
    }
    const updatedPosts = [...posts];
    updatedPosts[index] = newContent;
    setPosts(updatedPosts);
  };

  const deletePost = (index) => {
    const confirmation = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmation) {
      const updatedPosts = posts.filter((_, idx) => idx !== index);
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="container">
      <h1>Welcome~ Our Write Service^^</h1>
      <form className="form" id="login-form" onSubmit={handleLogin}>
        <input
          className="input"
          required
          maxLength="15"
          type="text"
          placeholder="ID / Name"
        />
        <input
          className="input"
          required
          type="password"
          placeholder="초기 비밀번호는 1234 입니다."
        />
        <button className="button">Log In</button>
      </form>

      {userName && (
        <>
          <h1>Hello {userName}!</h1>
          <button className="button" onClick={showPostForm} id="writePostBtn">
            글쓰기
          </button>
        </>
      )}

      <form className="form hidden" id="postForm" onSubmit={addPost}>
        <textarea
          className="input"
          id="postContent"
          placeholder="글을 입력하세요"
          required
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button className="button" type="submit">
          게시물 추가하기
        </button>
      </form>

      <div className={posts.length > 0 ? "" : "hidden"} id="postsContainer">
        <h2>게시글</h2>
        <ul className="list" id="postsList">
          {posts.map((content, index) => (
            <li key={index}>
              {content}
              <div className="buttons-container">
                <button className="edit-button" onClick={() => editPost(index)}>
                  수정
                </button>
                <button
                  className="delete-button"
                  onClick={() => deletePost(index)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Week01;

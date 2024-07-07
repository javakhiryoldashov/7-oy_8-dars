const NewPost = ({
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    cancelNewPost,
    deleting,
    isSubmiting,
  }) => {
    return (
      <main className="NewPost">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>New Post</h2>
          <button
            onClick={cancelNewPost}
            style={{
              borderRadius: "5px",
              padding: "2px 4px",
              backgroundColor: "transparent",
              fontSize: "20px",
              fontWeight: "900",
              cursor: "pointer",
            }}
          >
            cancel
          </button>
        </div>
  
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <button disabled={isSubmiting} type="submit">
            {isSubmiting ? "submiting..." : "submit"}
          </button>
        </form>
      </main>
    );
  };
  
  export default NewPost;
  
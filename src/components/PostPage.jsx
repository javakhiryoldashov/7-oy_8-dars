import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete, cancel, deleting }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button
              disabled={deleting}
              onClick={() => handleDelete(post.id)}
            >
              {deleting ? "in progress" : "delete"}
            </button>
            <button
              onClick={cancel}
              style={{ backgroundColor: "gray", marginLeft: "10px" }}
            >
              cancel
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;

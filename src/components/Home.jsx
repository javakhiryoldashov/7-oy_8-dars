import Feed from "./Feed";

const Home = ({ posts, loading }) => {
  return (
    <main className="Home">
      {loading ? (
        <p style={{ fontWeight: "900", fontSize: "25px", color: "dodgerblue" }}>
          Loading...
        </p>
      ) : posts.length ? (
        <Feed posts={posts} />
      ) : (
        <div>
          <p style={{ marginTop: "2rem" }}>No posts to display.</p>
        </div>
      )}
    </main>
  );
};

export default Home;

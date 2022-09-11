import PostList from "./components/PostList";
import PostState from "./context/post/PostState";
import UserProvider from "./context/user/UserProvider";

function App() {
  return (
    <PostState>
      <UserProvider>
        <div className="container">
          <h1>Shafin's & Rafin's App</h1>
          <PostList />
        </div>
      </UserProvider>
    </PostState>
  );
}

export default App;

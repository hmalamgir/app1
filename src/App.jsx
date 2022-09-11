import PostList from "./components/PostList";
import UserProvider from "./context/user/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className="container">
        <h1>Shafin's & Rafin's App</h1>
        <PostList />
      </div>
    </UserProvider>
  );
}

export default App;

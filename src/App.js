import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EditPost from "./components/EditPost";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const history = useHistory();
  // const { width } = useWindonSize();

  // const { data, fetchError, isloading } = useAxiosFetch(
  //   "http://localhost:3500/posts"
  // );
  // useEffect(() => {
  //   setPosts(data);
  // }, [data]);

  // // useEffect(() => {
  // //   const fetchPosts = async () => {
  // //     try {
  // //       const response = await api.get("./posts");
  // //       setPosts(response.data);
  // //     } catch (err) {
  // //       if (err.response) {
  // //         // not a 200 response range
  // //         console.log(err.response.data);
  // //         console.log(err.response.status);
  // //         console.log(err.response.headers);
  // //       } else {
  // //         console.log(`Error: ${err.message}`);
  // //       }
  // //     }
  // //   };
  // //   fetchPosts();
  // // }, []);

  // useEffect(() => {
  //   const filteredResults = posts.filter(
  //     (post) =>
  //       post.body.toLowerCase().includes(search.toLocaleLowerCase()) ||
  //       post.title.toLowerCase().includes(search.toLocaleLowerCase())
  //   );
  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle("");
  //     setPostBody("");
  //     history.push("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const upDatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, upDatedPost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //     history.push("/");
  //   } catch (err) {
  //     console.log(`Error:${err.message}`);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postList = posts.filter((post) => post.id !== id);
  //     setPosts(postList);
  //     history.push("/");
  //   } catch (err) {
  //     console.log(`Error:${err.message}`);
  //   }
  // };

  return (
    <div className="App">
      <DataProvider>
        <Header title="React Js Blog" />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />

          <Route path="/edit/:id" component={EditPost} />

          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;

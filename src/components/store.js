// import { createStore, action, thunk, computed } from "easy-peasy";
// import api from "../api/posts";
// import NewPost from "./NewPost";

// export default createStore({
//   posts: [],
//   setPosts: action((state, payload) => {
//     state.posts = payload;
//   }),
//   postTitle: "",
//   setPostTitle: action((state, payload) => {
//     state.posts = payload;
//   }),
//   postBody: "",
//   setPostBody: action((state, payload) => {
//     state.posts = payload;
//   }),
//   editTitle: "",
//   setEditTitle: action((state, payload) => {
//     state.posts = payload;
//   }),
//   editBody: "",
//   setEditBody: action((state, payload) => {
//     state.posts = payload;
//   }),
//   search: "",
//   setSearch: action((state, payload) => {
//     state.posts = payload;
//   }),
//   searchResults: [],
//   setSearchResults: action((state, payload) => {
//     state.posts = payload;
//   }),
//   postCount: computed((state) => state.posts.length),
//   getPostById: computed((state) => {
//     return (id) => state.posts.find((post) => post.id.toString() === id);
//   }),
//   savePost: thunk(async (actions, NewPost, helpers) => {
//     const { posts } = helpers.getState();
//     try {
//       const response = await api.post("/posts", newPost);
//       actions.setPosts([...posts, response.data]);
//       actions.setPostTitle("");
//       actions.setPostBody("");
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   }),
//   deletePost: thunk(async (actions, id, helpers) => {
//     const { posts } = helpers.getState();
//     try {
//       await api.delete(`/posts/${id}`);
//       setPosts(posts.filter((post) => post.id !== id));
//     } catch (err) {
//       console.log(`Error:${err.message}`);
//     }
//   }),

//   editPost: thunk(async (actions, upDatedPost, helpers) => {
//     const { posts } = helpers.getState();
//     const { id } = upDatedPost
//     try {
//       const response = await api.put(`/posts/${id}`, upDatedPost);
//       actions.setPosts(
//         posts.map((post) => (post.id === id ? { ...response.data } : post))
//       );
//       actions.setEditTitle("");
//       actions.setEditBody("");
//     } catch (err) {
//       console.log(`Error:${err.message}`);
//     }
//   }),
// });

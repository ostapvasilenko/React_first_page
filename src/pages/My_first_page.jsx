import React, { useEffect } from "react";
import { useState } from "react";
import UserCard from '../components/user/card/Card'
import PostCard from "../components/UI/PostCards";
// eslint-disable-next-line
import styles from "../styles/My_first_page.module.css";

const My_first_page = () => {
  const [counter, setCounter] = useState(0);

  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({
    surname: "",
    name: "",
    fatherName: "",
    email: "",
  });

  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [formErrors, setFormErrors] = useState({});
  //  Create a state variable to store the posts
  const [posts, setPosts] = useState([]);

  //  Create a function to fetch the posts from the API
  async function getPosts() {
    const DATA = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    // Set the posts state variable to the data
    setPosts(DATA);
  }

  useEffect(() => {
    getPosts();
    clearForm();
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!surname.trim()) {
      errors.surname = "Surname is required";
    }
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!fatherName.trim()) {
      errors.fatherName = "Father`s name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Add post
  function addPost(e) {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: title,
      body: text,
      userId: 2,
    };
    setPosts([newPost, ...posts]);
  }

  // Clear form
  function clearForm() {
    setTitle("");
    setText("");
  }

  // Delete post
  function deletePost(post) {
    const newPosts = posts.filter((p) => p.id !== post.id);
    setPosts(newPosts);
  }

  function addUserData(singleUser, nameReacVariable, methodReactVariable) {
    methodReactVariable([singleUser, ...nameReacVariable]);
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>My first React page</h1>
      <p className={styles.text}>I tried to do the project well</p>
      <button
        className={styles.button}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment (+1)
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement (-1)
      </button>
      <h2 className={styles.result}>Result: {counter}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.clearForm();

          if (validateForm()) {
            console.log("Form is valid");
          }
        }}
      >
        <div className={styles.posts_form}>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Text"
          />
          <button onClick={addPost} className={styles.button}>
            Add Post
          </button>
        </div>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUserData(data, userData, setUserData);
          // e.clearForm();
        }}
      >
        <div className={styles.posts_form_data}>
          <input
            onChange={(e) => {
              const tepmlatePosts = { ...data };
              tepmlatePosts.surname = e.target.value;
              setData(tepmlatePosts);
            }}
            type="text"
            placeholder="Surname"
          />
          <input
            onChange={(e) => {
              const tepmlatePosts = { ...data };
              tepmlatePosts.name = e.target.value;
              setData(tepmlatePosts);
            }}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              const tepmlatePosts = { ...data };
              tepmlatePosts.fatherName = e.target.value;
              setData(tepmlatePosts);
            }}
            type="text"
            placeholder="Father`s name"
          />
          <input
            onChange={(e) => {
              const tepmlatePosts = { ...data };
              tepmlatePosts.email = e.target.value;
              setData(tepmlatePosts);
            }}
            type="mail"
            placeholder="Email"
          />
        </div>
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
      <h2>
        {surname} {name.length ? name[0] + "." : ""}{" "}
        {fatherName.length ? fatherName[0] + "." : ""}
      </h2>
      <h2>{email}</h2>



      {userData.map((user) => {
        return <UserCard key={user} data ={user}/>
      })}





      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={getPosts} className={styles.button}>
                Show Posts
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* Display posts */}

                {posts.map((post) => {
                  return (
                    <PostCard
                      deletePost={deletePost}
                      post={post}
                      key={post.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default My_first_page;
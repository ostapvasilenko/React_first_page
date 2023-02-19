import React, { useEffect } from 'react'
import { useState } from 'react'
import PostCard from '../components/UI/PostCards'
// eslint-disable-next-line 
import styles from '../styles/My_first_page.module.css'

const My_first_page = () => {
  let [counter, setCounter] = React.useState(0)
  let [surname, setSurname] = React.useState('');
  let [name, setName] = React.useState('');
  let [fatherName, setFatherName] = React.useState('');
  let [email, setEmail] = React.useState('');
  let [title, setTitle] = React.useState('');
  let [text, setText] = React.useState('');
  let [formErrors, setFormErrors] = React.useState({});
  //1. Create a state variable to store the posts
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    getPosts();
  }, []);
  //2. Create a function to fetch the posts from the API
  async function getPosts() {
    const DATA = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    //3. Set the posts state variable to the data
    setPosts(DATA);
  }
  const validateForm = () => {
    const errors = {};
    if (!surname.trim()) {
      errors.surname = 'Surname is required';
    }
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!fatherName.trim()) {
      errors.fatherName = 'Father`s name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
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

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>My first React page</h1>
      <p className={styles.text}>
        I tried to do the project well
      </p>
      <button className={styles.button} onClick={() => {
        setCounter(counter + 1)
      }}>Increment (+1)</button>

      <button className={styles.button} onClick={() => {
        setCounter(counter - 1)
      }}>Decrement (-1)</button>

      <h2 className={styles.result}  >
        Result: {counter}
      </h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form is valid');
        }
      }}>
        <div className={styles.posts_form}>
          <input onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Title' />
          <textarea onChange={(e) => { setText(e.target.value) }} type="text" placeholder='Text' />
          <button onClick={addPost} className={styles.button}>Add Post</button></div>
      </form>



      <form onSubmit={(e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form is valid');

        }
      }}>
        <div className=''><input onChange={(e) => { setSurname(e.target.value) }} type="text" placeholder='Surname' />
          <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' />
          <input onChange={(e) => { setFatherName(e.target.value) }} type="text" placeholder='Father`s name' /></div>
        <input onChange={(e) => { setEmail(e.target.value) }} type="mail" placeholder='Email' />
      </form>
      <h2>

        {surname}  {name.length ? name[0] + "." : ""} {fatherName.length ? fatherName[0] + "." : ""}
      </h2>
      <h2>
        {email}
      </h2>
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
                    <PostCard post={post} key={post.id} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default My_first_page
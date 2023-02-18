import React from 'react'
// eslint-disable-next-line 
import styles from '../styles/My_first_page.module.css'

const My_first_page = () => {
    let [counter, setCounter] = React.useState(0)
    let [surname, setSurname] = React.useState('');
    let [name, setName] = React.useState('');
    let [fatherName, setFatherName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [formErrors, setFormErrors] = React.useState({});
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
            <form action="">
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
        </div>
    )
}

export default My_first_page
import React from 'react'
import styles from './Card.module.scss'

const Card = ({data}) => {
    const (surname, name, fatherName, email)
  return (
    <>
    <div className={styles.card}>
        <h2>{surname}, {name[0]}, {fatherName[0]}, {email}</h2>
    </div>
    </>
  )
}

export default Card
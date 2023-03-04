import React from 'react'
import styles from './Card.module.scss'

const Card = ({data}) => {
  return (
    <>
    <div className={styles.card}>
        <h2>Vasylenko O.</h2>
        <p>ostapvasilenko@gmail.com</p>
    </div>

    </>
  )
}

export default Card
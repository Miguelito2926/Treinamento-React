import React from 'react'
import styles from './Car.module.css';

export default function Car({car}) {
  return (
    <div className={styles.card}>
        <h1>{car.name}</h1>
        <p>Km:{car.km}</p>
        <p>Cor:{car.color}</p>
    </div>
  )
}

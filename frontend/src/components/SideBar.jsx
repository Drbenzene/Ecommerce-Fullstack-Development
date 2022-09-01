import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'

const SideBar = () => {
    const dispatch = useDispatch()


    const categories = [
        "Women's Clothing", "Men's Cloting", "Electronics", 'Jewelry'
    ]
  return (
    <div className="container justify-content-center align-items-center" style={styles.sidebar}>

        {categories.map((category, index) => (
      <p style={styles.p} key={index}>{category}</p>
        ))}
    </div>
  )
}

const styles= {
    sidebar: {
        // backgroundColor: "red",
        width: "20%",
        height: "100%",
        overflow: "hidden",
        padding: "5rem",
        fontSize: "1.5rem",
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        position: 'fixed',
        marginRight: '1rem',
        fontWeight: 'bold',
    },

    p:{
        cursor: 'pointer'
    }
}

export default SideBar

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Categories({onSelectCategory}) {
    const [categories, setCategories] = useState ([])
    const API_URL = 'https://fakestoreapi.com/products/categories'
    useEffect (() => {
        const FetchCategories = async function () {
            try {
                const res = await axios.get (API_URL)
                const category = res.data
                setCategories(category)
                console.log(category);
                
            } catch (error) {
                console.error(error);
            }
        }
        FetchCategories()
    }, [])
  return (
    <div>
        {categories.map((category, index) => (
            <ul key={index} onClick={() => onSelectCategory(category)}>
                <li>{category}</li>
            </ul>
        ))}
    </div>
  )
}

export default Categories
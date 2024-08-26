import React, { useState } from 'react';
import './Styles/Categories.css';

function Categories({ onSelectCategory }) {
    const [categories] = useState([
        { key: 'all', name: 'all' },
        { key: "men's clothing", name: "men's clothing" },
        { key: "women's clothing", name: "women's clothing" },
        { key: 'electronics', name: 'electronics' },
        { key: 'jewelery', name: 'jewelery' }
    ]);

    return (
        <div className='categoryy'>
            {categories.map(el => (
                <div className='one_category' key={el.key} onClick={() => onSelectCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}

export default Categories;

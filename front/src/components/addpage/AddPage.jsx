import React from 'react'
import Navbar from '../navbar/Navbar'
import './add.scss'
const AddPage = () => {
    return (
        <section id='add_page'>
            <Navbar />
            <div className="add_page">
                <div className="container">
                    <div className="my_add">
                        <input type="text" name="" id="" placeholder='Prodname' />
                        <input type="text" name="" id="" placeholder='ingredients' />
                        <input type="number" name="" id="" placeholder='price' />
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </section>
    )
}

export default AddPage
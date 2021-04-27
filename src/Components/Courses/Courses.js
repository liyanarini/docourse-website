import React from 'react';
import Cards from '../Cards/Cards';
import './Courses.css'
import react from '../../image/react2.jpg'
import python from '../../image/Python.png'
import business from '../../image/business.jfif'
import architect from '../../image/architect2.jfif'
import hacking from '../../image/ethical-hacking.png'
import guitar from '../../image/guitar.jfif'
import drawing from '../../image/drawing.jfif'
import colored from '../../image/colored.jfif'
import film from '../../image/film.jfif'
import diet from '../../image/diet.jfif'
import cooking from '../../image/cooking2.jpg'
import excel from '../../image/excel.jfif';

const Courses = () => {

    const addCourseHandler = () => {
        console.log("course added")
    }

    return (
        <div className="card-area">
            <Cards
            image={react}
            name='React - The Complete Guide (incl Hooks, React Router, Redux)'
            category='Top Category'
            price='11.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={python}
            name='2021 Complete Python Bootcamp From Zero to Hero in Python'
            category='Top Category'
            price='11.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={business}
            name='An Entire MBA in 1 Course:Award Winning Business School Prof'
            category='Top Category'
            price='12.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={architect}
            name='AWS Certified Solutions Architect - Associate 2020'
            category='Free'
            price='0.00'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={hacking}
            name='Learn Ethical Hacking From Scratch'
            category='Trending'
            price='7.70'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={guitar}
            name='Complete Guitar Lessons System - Beginner to Advanced'
            category='Best Seller'
            price='9.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={drawing}
            name='The Art & Science of Drawing / BASIC SKILLS'
            category='Free'
            price='0.00'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={colored}
            name='The Colored Pencil Drawing Course'
            category='Top Category'
            price='4.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={film}
            name='Unreal Engine 4 for Filmmaking Beginners Edition'
            category='Trending'
            price='8.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={diet}
            name='Diet And Nutrition Coach Certification: Beginner To Advanced'
            category='Top Category'
            price='11.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={cooking}
            name='Cook Real Food: How to Make Simple Plant-Based Meals'
            category='Free'
            price='0.00'
            addCourseHandler ={addCourseHandler}
            ></Cards>
            <Cards
            image={excel}
            name='Excel Essentials: The Complete Excel Series - Level 1, 2 & 3'
            category='Top Category'
            price='6.99'
            addCourseHandler ={addCourseHandler}
            ></Cards>
        </div>
    );
};

export default Courses;
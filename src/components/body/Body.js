import React from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes, Route, Navigate } from 'react-router-dom';


const body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/menu" element={<Menu />} exact />
                <Route path="/contact" element={<Contact />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/" element={<Navigate to="/home" />} exact />

                {/* <Route path='/' exact component={<Home/>} ><Route/>
                <Route path='/menu' exact component={Menu} ><Route/>
                <Route path='/contact' exact component={Contact} ><Route/>
                <Route path='/about' exact component={About} ><Route/>
                <Route path="/" element={<Navigate to="home" />} ><Route/> */}

            </Routes>


        </div>
    );
};

export default body;